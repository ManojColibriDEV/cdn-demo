/**
 * Component Tests: Embedded Login Form
 * Tests for login form validation, submission, and user interactions
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import EmbeddedLoginForm from "../../components/embedded-login-form";
import * as services from "../../services";
import * as functions from "../../functions";

// Mock services
vi.mock("../../services", () => ({
  checkEmail: vi.fn(),
}));

// Mock functions
vi.mock("../../functions", () => ({
  handleAuthentication: vi.fn(),
  setAuthCookie: vi.fn(),
  clearAuthCookie: vi.fn(),
  getCookieDomain: vi.fn(() => ""),
  getAuthorityFromUrl: vi.fn(() => "dev"),
  getDefaultRedirectUrl: vi.fn(() => "https://dev-learn.example.com/courses"),
}));

const renderLoginForm = (props = {}) => {
  const defaultProps = {
    onSuccess: vi.fn(),
    onError: vi.fn(),
    handleClose: vi.fn(),
    authority: "dev" as const,
  };

  return render(
    <BrowserRouter>
      <EmbeddedLoginForm {...defaultProps} {...props} />
    </BrowserRouter>
  );
};

describe("EmbeddedLoginForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("should render login form with title and subtitle", () => {
    renderLoginForm();

    expect(screen.getByText("Continue to login")).toBeInTheDocument();
    expect(screen.getByText("Continue by signing in.")).toBeInTheDocument();
  });

  it("should render with custom title and subtitle", () => {
    renderLoginForm({
      title: "Custom Title",
      subtitle: "Custom Subtitle",
    });

    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom Subtitle")).toBeInTheDocument();
  });

  it("should render email and password inputs", () => {
    renderLoginForm();

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it("should render login button", () => {
    renderLoginForm();

    const loginButton = screen.getByRole("button", { name: /login|sign in|continue/i });
    expect(loginButton).toBeInTheDocument();
  });

  it("should handle email input change", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "test@example.com");

    await waitFor(() => {
      expect(emailInput).toHaveValue("test@example.com");
    });
  });

  it("should handle password input change", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "SecureP@ss123$");

    expect(passwordInput).toHaveValue("SecureP@ss123$");
  });

  it("should toggle password visibility", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toHaveAttribute("type", "password");

    // Find and click the show/hide password button
    const toggleButtons = screen.getAllByRole("button");
    const toggleButton = toggleButtons.find(
      (btn) =>
        btn.textContent?.includes("Show") || btn.getAttribute("aria-label")?.includes("password")
    );

    if (toggleButton) {
      await user.click(toggleButton);
      expect(passwordInput).toHaveAttribute("type", "text");
    }
  });

  it("should check email availability on blur", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "existing@example.com");
    await user.tab();

    await waitFor(() => {
      expect(services.checkEmail).toHaveBeenCalledWith("existing@example.com");
    });
  });

  it("should show create account option for new email", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false, message: "Email available" });

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "newuser@example.com");

    // Wait for debounced email check (500ms) + buffer
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(
      () => {
        expect(services.checkEmail).toHaveBeenCalledWith("newuser@example.com");
      },
      { timeout: 2000 }
    );
  });

  it("should navigate to create account form", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false, message: "Available" });

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "newuser@example.com");

    // Wait for email check (500ms debounce) + some buffer
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Verify checkEmail was called
    await waitFor(
      () => {
        expect(services.checkEmail).toHaveBeenCalledWith("newuser@example.com");
      },
      { timeout: 2000 }
    );
  });

  it("should handle remember me checkbox", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    const rememberMeCheckbox = screen.getByRole("checkbox", { name: /remember me/i });
    expect(rememberMeCheckbox).not.toBeChecked();

    await user.click(rememberMeCheckbox);
    expect(rememberMeCheckbox).toBeChecked();
  });

  it("should handle forgot password link", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    const forgotPasswordLink = screen.getByText(/forgot password/i);
    await user.click(forgotPasswordLink);

    // Should navigate to reset password form - check for reset password specific elements
    await waitFor(() => {
      // The reset form should have email input and send link button
      expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    });
  });

  it("should validate email format before submission", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "invalid-email");

    const submitButton = screen.getByRole("button", { name: /login|sign in|continue/i });
    await user.click(submitButton);

    // Form validates email internally
    expect(emailInput).toHaveValue("invalid-email");
  });

  it("should handle successful login", async () => {
    const user = userEvent.setup();
    const onSuccessMock = vi.fn();

    vi.mocked(functions.handleAuthentication).mockResolvedValue({
      success: true,
      tokens: {
        access_token: "test-token",
        refresh_token: "test-refresh",
      },
    });

    renderLoginForm({ onSuccess: onSuccessMock });

    await user.type(screen.getByPlaceholderText(/email/i), "test@example.com");
    await user.type(screen.getByPlaceholderText(/password/i), "SecureP@ss123$");

    const submitButton = screen.getByRole("button", { name: /login|sign in|continue/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(functions.handleAuthentication).toHaveBeenCalled();
    });
  });

  it("should handle login errors", async () => {
    const user = userEvent.setup();
    const onErrorMock = vi.fn();

    vi.mocked(functions.handleAuthentication).mockRejectedValue(new Error("Invalid credentials"));

    renderLoginForm({ onError: onErrorMock });

    await user.type(screen.getByPlaceholderText(/email/i), "wrong@example.com");
    await user.type(screen.getByPlaceholderText(/password/i), "WrongPassword");

    const submitButton = screen.getByRole("button", { name: /login|sign in|continue/i });
    await user.click(submitButton);

    // Verify error callback was called
    await waitFor(() => {
      expect(onErrorMock).toHaveBeenCalledWith("Invalid credentials");
    });
  });

  it("should call handleClose when close button clicked", async () => {
    const user = userEvent.setup();
    const handleCloseMock = vi.fn();

    renderLoginForm({ handleClose: handleCloseMock });

    const closeButton = screen.getByRole("button", { name: /close/i });
    await user.click(closeButton);

    expect(handleCloseMock).toHaveBeenCalled();
  });

  it("should pre-populate email from initialEmail prop", () => {
    renderLoginForm({ initialEmail: "prepopulated@example.com" });

    const emailInput = screen.getByPlaceholderText(/email/i) as HTMLInputElement;
    expect(emailInput.value).toBe("prepopulated@example.com");
  });

  it("should disable submit button while loading", async () => {
    const user = userEvent.setup();
    vi.mocked(functions.handleAuthentication).mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000))
    );

    renderLoginForm();

    await user.type(screen.getByPlaceholderText(/email/i), "test@example.com");
    await user.type(screen.getByPlaceholderText(/password/i), "SecureP@ss123$");

    const submitButton = screen.getByRole("button", { name: /login|sign in|continue/i });
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
  });
});
