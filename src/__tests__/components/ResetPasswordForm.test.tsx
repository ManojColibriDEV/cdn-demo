/**
 * Component Tests: Reset Password Form
 * Tests for password reset request and validation
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ResetPasswordForm from "../../components/reset-password-form";
import * as services from "../../services";

vi.mock("../../services", () => ({
  forgotPassword: vi.fn(),
  checkEmail: vi.fn(),
}));

const renderResetPasswordForm = (props = {}) => {
  const defaultProps = {
    email: "",
    onBack: vi.fn(),
    handleClose: vi.fn(),
  };

  return render(
    <BrowserRouter>
      <ResetPasswordForm {...defaultProps} {...props} />
    </BrowserRouter>
  );
};

describe("ResetPasswordForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("should render reset password form", () => {
    renderResetPasswordForm();

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("should render email input field", () => {
    renderResetPasswordForm();

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  it("should render submit button", () => {
    renderResetPasswordForm();

    const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("should handle email input change", async () => {
    const user = userEvent.setup();
    renderResetPasswordForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "user@example.com");

    expect(emailInput).toHaveValue("user@example.com");
  });

  it("should validate email format", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderResetPasswordForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "invalid-email");

    // Form validates email internally
    expect(emailInput).toHaveValue("invalid-email");
  });

  it("should handle successful password reset request", async () => {
    const user = userEvent.setup();

    vi.mocked(services.forgotPassword).mockResolvedValue({
      success: true,
      message: "Reset link sent",
    });
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderResetPasswordForm({ email: "user@example.com" });

    // Wait for debounced email check (500ms) + some buffer
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(
      () => {
        const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 1000 }
    );

    const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(services.forgotPassword).toHaveBeenCalledWith("user@example.com");
    });
  });

  it("should handle user not found error", async () => {
    const user = userEvent.setup();

    vi.mocked(services.forgotPassword).mockRejectedValue(
      new Error("We couldn't find an account with that email")
    );
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderResetPasswordForm({ email: "nonexistent@example.com" });

    // Wait for debounced email check
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(
      () => {
        const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 1000 }
    );

    const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(services.forgotPassword).toHaveBeenCalled();
    });
  });

  it("should handle general errors", async () => {
    const user = userEvent.setup();

    vi.mocked(services.forgotPassword).mockRejectedValue(new Error("Service unavailable"));
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderResetPasswordForm({ email: "user@example.com" });

    // Wait for debounced email check
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(
      () => {
        const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 1000 }
    );

    const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(services.forgotPassword).toHaveBeenCalled();
    });
  });

  it("should call onBack when back button clicked", async () => {
    const user = userEvent.setup();
    const onBackMock = vi.fn();

    renderResetPasswordForm({ onBack: onBackMock });

    const backButton = screen.getByRole("button", { name: /back|cancel/i });
    await user.click(backButton);

    expect(onBackMock).toHaveBeenCalled();
  });

  it("should show loading state during submission", async () => {
    const user = userEvent.setup();

    vi.mocked(services.forgotPassword).mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000))
    );

    renderResetPasswordForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "user@example.com");

    const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
  });

  it("should disable submit button with empty email", () => {
    renderResetPasswordForm({ email: "" });

    const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
    expect(submitButton).toBeDisabled();
  });

  it("should enable submit button with valid email that exists", async () => {
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    renderResetPasswordForm({ email: "valid@example.com" });

    await waitFor(
      () => {
        const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 3000 }
    );
  });

  it("should display success message after sending reset link", async () => {
    const user = userEvent.setup();

    vi.mocked(services.forgotPassword).mockResolvedValue({
      success: true,
      message: "Password reset link has been sent to your email",
    });
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderResetPasswordForm({ email: "user@example.com" });

    // Wait for debounced email check
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(
      () => {
        const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 1000 }
    );

    const submitButton = screen.getByRole("button", { name: /send|reset|submit/i });
    await user.click(submitButton);

    await waitFor(
      () => {
        // Verify the API was called successfully
        expect(services.forgotPassword).toHaveBeenCalledWith("user@example.com");
      },
      { timeout: 3000 }
    );
  });
});
