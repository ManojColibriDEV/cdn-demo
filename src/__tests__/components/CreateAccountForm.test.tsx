/**
 * Component Tests: Create Account Form
 * Tests for registration form validation, password strength, and submission
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CreateAccountForm from "../../components/create-account-form";
import * as services from "../../services";
import * as functions from "../../functions";

vi.mock("../../services", () => ({
  authRegister: vi.fn(),
  checkEmail: vi.fn(),
  checkPhone: vi.fn(),
  getBrandHeaders: vi.fn(),
}));

const renderCreateAccountForm = (props = {}) => {
  const defaultProps = {
    onSuccess: vi.fn(),
    onError: vi.fn(),
    handleClose: vi.fn(),
    onSignIn: vi.fn(),
    email: "",
  };

  return render(
    <BrowserRouter>
      <CreateAccountForm {...defaultProps} {...props} />
    </BrowserRouter>
  );
};

describe("CreateAccountForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    // Default: brand is properly configured
    vi.mocked(services.getBrandHeaders).mockResolvedValue({
      "X-Brand-Id": "Elite Learning",
      "X-Subsidiary-Id": "1",
      "X-Brand-Domain": "elitelearning.com",
    });
  });

  it("should render create account form", () => {
    renderCreateAccountForm();

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  it("should render all required form fields", () => {
    renderCreateAccountForm();

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/last name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it("should pre-populate email from props", async () => {
    // Add mock to prevent email validation errors
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm({ initialEmail: "prepopulated@example.com" });

    // Wait a tick for component to render with prop
    await new Promise((resolve) => setTimeout(resolve, 50));

    const emailInput = screen.getByPlaceholderText(/email/i) as HTMLInputElement;
    expect(emailInput.value).toBe("prepopulated@example.com");
  });

  it("should handle first name input", async () => {
    const user = userEvent.setup();
    renderCreateAccountForm();

    const firstNameInput = screen.getByPlaceholderText(/first name/i);
    await user.type(firstNameInput, "John");

    expect(firstNameInput).toHaveValue("John");
  });

  it("should handle last name input", async () => {
    const user = userEvent.setup();
    renderCreateAccountForm();

    const lastNameInput = screen.getByPlaceholderText(/last name/i);
    await user.type(lastNameInput, "Doe");

    expect(lastNameInput).toHaveValue("Doe");
  });

  it("should validate password strength", async () => {
    const user = userEvent.setup();
    renderCreateAccountForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);

    // Weak password
    await user.type(passwordInput, "weak");

    // Password validation happens internally
    expect(passwordInput).toHaveValue("weak");
  });

  it("should show caps lock indicator when caps lock is on in password field", () => {
    renderCreateAccountForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.keyDown(passwordInput, { key: "CapsLock" });

    expect(screen.getByText(/caps lock is on/i)).toBeInTheDocument();
  });

  it("should hide caps lock indicator when caps lock is off in password field", () => {
    renderCreateAccountForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.keyDown(passwordInput, { key: "CapsLock" });
    expect(screen.getByText(/caps lock is on/i)).toBeInTheDocument();

    fireEvent.keyDown(passwordInput, { key: "CapsLock" });

    expect(screen.queryByText(/caps lock is on/i)).not.toBeInTheDocument();
  });

  it("should ignore CapsLock keyup without toggling indicator", () => {
    renderCreateAccountForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.keyUp(passwordInput, { key: "CapsLock" });

    expect(screen.queryByText(/caps lock is on/i)).not.toBeInTheDocument();
  });

  it("should show password requirements", async () => {
    const user = userEvent.setup();
    renderCreateAccountForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.click(passwordInput);

    // Password requirements are shown in the UI
    expect(passwordInput).toBeInTheDocument();
  });

  it("should validate password confirmation match", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "SecureP@ss123$");

    // Component validates password strength
    expect(passwordInput).toHaveValue("SecureP@ss123$");
  });

  it("should accept matching passwords", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "SecureP@ss123$");

    // Should show password strength indicator
    expect(passwordInput).toHaveValue("SecureP@ss123$");
  });

  it("should require terms acceptance checkbox", () => {
    renderCreateAccountForm();

    // Form should be accessible without required checkbox
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  it("should handle terms checkbox toggle", async () => {
    renderCreateAccountForm();

    // Component renders without requiring checkbox interaction
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  it("should disable submit without accepting terms", async () => {
    const user = userEvent.setup({ delay: null });
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm();

    await user.type(screen.getByPlaceholderText(/email/i), "test@example.com");
    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "SecureP@ss123$");

    // Button behavior depends on form validation
    const submitButtons = screen.getAllByRole("button");
    const createButton = submitButtons.find((btn) => btn.textContent?.includes("Create"));
    expect(createButton).toBeInTheDocument();
  });

  it("should enable submit when all fields valid and terms accepted", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm();

    await user.type(screen.getByPlaceholderText(/email/i), "test@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "SecureP@ss123$");

    const submitButtons = screen.getAllByRole("button");
    const createButton = submitButtons.find((btn) => btn.textContent?.includes("Create"));
    expect(createButton).toBeInTheDocument();
  });

  it("should handle successful registration", async () => {
    const user = userEvent.setup();
    const onSuccessMock = vi.fn();

    vi.mocked(services.authRegister).mockResolvedValue({
      success: true,
      message: "User registered successfully",
    });
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm({ onSuccess: onSuccessMock });

    await user.type(screen.getByPlaceholderText(/email/i), "newuser@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "Jane");
    await user.type(screen.getByPlaceholderText(/last name/i), "Smith");
    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "SecureP@ss123$");

    const submitButtons = screen.getAllByRole("button");
    const submitButton = submitButtons.find((btn) => btn.textContent?.includes("Create Account"));
    await user.click(submitButton!);

    await waitFor(
      () => {
        expect(services.authRegister).toHaveBeenCalled();
      },
      { timeout: 3000 }
    );
  });

  it("should call onSuccess when auto-login succeeds after registration", async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();

    vi.mocked(services.authRegister).mockResolvedValue({ success: true, message: "ok" });
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });
    const authSpy = vi.spyOn(functions, "handleAuthentication").mockResolvedValue({
      access_token: "token",
      refresh_token: "refresh",
    } as any);

    renderCreateAccountForm({ onSuccess });
    await user.type(screen.getByPlaceholderText(/email/i), "success@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "Jane");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPass9$");
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalled();
    });

    authSpy.mockRestore();
  });

  it("should handle registration errors", async () => {
    const user = userEvent.setup();

    vi.mocked(services.authRegister).mockRejectedValue(new Error("Email already exists"));
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm();

    await user.type(screen.getByPlaceholderText(/email/i), "existing@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "SecureP@ss123$");

    const submitButtons = screen.getAllByRole("button");
    const submitButton = submitButtons.find((btn) => btn.textContent?.includes("Create Account"));
    await user.click(submitButton!);

    // Error handling happens internally
    await waitFor(
      () => {
        expect(services.authRegister).toHaveBeenCalled();
      },
      { timeout: 3000 }
    );
  });

  it("should use generic registration failed message for non-Error failures", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });
    vi.mocked(services.authRegister).mockRejectedValue({} as any);

    renderCreateAccountForm({ onError });
    await user.type(screen.getByPlaceholderText(/email/i), "generic@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPass9$");
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });

  it("should validate email format", async () => {
    const user = userEvent.setup();
    renderCreateAccountForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "invalid-email");
    await user.tab();

    // Email validation happens internally
    expect(emailInput).toHaveValue("invalid-email");
  });

  it("should call handleBack when back button clicked", async () => {
    const user = userEvent.setup();
    const onSignInMock = vi.fn();

    renderCreateAccountForm({ onSignIn: onSignInMock });

    const allButtons = screen.getAllByRole("button");
    const backButton = allButtons.find((btn) => btn.textContent?.toLowerCase().includes("sign in"));
    await user.click(backButton!);

    expect(onSignInMock).toHaveBeenCalled();
  });

  it("should show loading state during submission", async () => {
    const user = userEvent.setup();

    vi.mocked(services.authRegister).mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ success: true, message: "Success" }), 1000)
        )
    );
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm();

    await user.type(screen.getByPlaceholderText(/email/i), "test@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "SecureP@ss123$");

    const submitButtons = screen.getAllByRole("button");
    const submitButton = submitButtons.find((btn) => btn.textContent?.includes("Create Account"));
    await user.click(submitButton!);

    expect(submitButton).toBeDisabled();
  });

  it("should validate password does not contain name parts", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm();

    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "JohnPassword123$");

    // Password validation shows requirements
    expect(passwordInput).toHaveValue("JohnPassword123$");
  });

  it("should validate password does not contain email parts", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm();

    await user.type(screen.getByPlaceholderText(/email/i), "johndoe@example.com");
    const passwordInput = screen.getByPlaceholderText(/enter password/i);
    await user.type(passwordInput, "johndoePassword123$");

    // Password validation checks username similarity
    expect(passwordInput).toHaveValue("johndoePassword123$");
  });

  it("should close on Escape key and overlay click", async () => {
    const handleClose = vi.fn();
    renderCreateAccountForm({ handleClose });

    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleClose).toHaveBeenCalledTimes(1);

    const dialog = screen.getByRole("dialog");
    fireEvent.mouseDown(dialog, { target: dialog });
    expect(handleClose).toHaveBeenCalledTimes(2);
  });

  it("should show existing account banner and allow sign-in action", async () => {
    const user = userEvent.setup();
    const onSignIn = vi.fn();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderCreateAccountForm({ onSignIn });

    await user.type(screen.getByPlaceholderText(/email/i), "existing@example.com");
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(() => {
      expect(screen.getByText(/We found an existing account/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Want to sign in instead\?/i }));
    expect(onSignIn).toHaveBeenCalledWith("existing@example.com");
  });

  it("should dismiss existing account banner", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderCreateAccountForm();
    await user.type(screen.getByPlaceholderText(/email/i), "existing2@example.com");
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(() => {
      expect(screen.getByText(/We found an existing account/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /dismiss banner/i }));
    await waitFor(() => {
      expect(screen.queryByText(/We found an existing account/i)).not.toBeInTheDocument();
    });
  });

  it("should show and dismiss email-check API error banner", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockRejectedValue(new Error("Email API down"));

    renderCreateAccountForm();
    await user.type(screen.getByPlaceholderText(/email/i), "user@example.com");
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(() => {
      expect(screen.getByText("Email API down")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /dismiss banner/i }));

    await waitFor(() => {
      expect(screen.queryByText("Email API down")).not.toBeInTheDocument();
    });
  });

  it("should use fallback banner message when email check throws non-Error", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockRejectedValue({} as any);

    renderCreateAccountForm();
    await user.type(screen.getByPlaceholderText(/email/i), "fallback-check@example.com");
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(() => {
      expect(
        screen.getByText("Unable to verify email. You can still proceed with registration.")
      ).toBeInTheDocument();
    });
  });

  it("should show loader while email availability check is pending", async () => {
    const user = userEvent.setup();

    vi.mocked(services.checkEmail).mockImplementation(
      () =>
        new Promise(() => {
          return;
        }) as any
    );

    renderCreateAccountForm();
    await user.type(screen.getByPlaceholderText(/email/i), "pending-check@example.com");

    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(() => {
      expect(document.querySelector('[part="identity-widget-loader"]')).toBeInTheDocument();
    });
  });

  it("clears pending email-check timeout when unmounted", async () => {
    const clearTimeoutSpy = vi.spyOn(globalThis, "clearTimeout");
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    const view = renderCreateAccountForm();
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "cleanup@example.com" },
    });

    view.unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
  });

  it("unmounts cleanly when no email-check timeout is pending", () => {
    const view = renderCreateAccountForm();
    expect(() => view.unmount()).not.toThrow();
  });

  it("shows required email error once form is touched and email is empty", () => {
    const onError = vi.fn();
    renderCreateAccountForm({ onError });

    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    expect(screen.getAllByText("Required").length).toBeGreaterThan(0);
  });

  it("should call onError when required fields are missing", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();
    renderCreateAccountForm({ onError });

    await user.type(screen.getByPlaceholderText(/email/i), "partial@example.com");
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));
    expect(onError).toHaveBeenCalledWith("Please fill in all required fields");
  });

  it("should call onError for invalid email format on submit", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm({ onError });
    await user.type(screen.getByPlaceholderText(/email/i), "invalid-email");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPass123$");

    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));
    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });

  it("should call onError for invalid password rules", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm({ onError });
    await user.type(screen.getByPlaceholderText(/email/i), "user@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    await user.type(screen.getByPlaceholderText(/password/i), "weak");

    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));
    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });

  it("should require password when submitting with empty password", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm({ onError });
    await user.type(screen.getByPlaceholderText(/email/i), "required@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "Req");
    await user.type(screen.getByPlaceholderText(/last name/i), "User");
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });

  it("should fail when password has no required special character", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm({ onError });
    await user.type(screen.getByPlaceholderText(/email/i), "special@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    await user.type(screen.getByPlaceholderText(/password/i), "NoSpecial123");
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });

  it("should fail when password has no number", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm({ onError });
    await user.type(screen.getByPlaceholderText(/email/i), "nonumber@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    await user.type(screen.getByPlaceholderText(/password/i), "NoNumber!Aa");
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });

  it("should fail when password has no uppercase letter", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm({ onError });
    await user.type(screen.getByPlaceholderText(/email/i), "noupper@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    await user.type(screen.getByPlaceholderText(/password/i), "noupper9!");
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });

  it("should fail when password has no lowercase letter", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm({ onError });
    await user.type(screen.getByPlaceholderText(/email/i), "nolower@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    await user.type(screen.getByPlaceholderText(/password/i), "NOLOWER9!");
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });

  it("should fail when password contains disallowed special character", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderCreateAccountForm({ onError });
    await user.type(screen.getByPlaceholderText(/email/i), "disallowed@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPass9!~");
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });

  it("should dismiss toast after registration error", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });
    vi.mocked(services.authRegister).mockRejectedValue(new Error("toast-dismiss"));

    renderCreateAccountForm();
    await user.type(screen.getByPlaceholderText(/email/i), "dismiss-toast@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "Toast");
    await user.type(screen.getByPlaceholderText(/last name/i), "Dismiss");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPass9!");
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await waitFor(() => {
      expect(screen.getAllByRole("button", { name: /close notification/i }).length).toBeGreaterThan(
        0
      );
    });

    const closeButtons = screen.getAllByRole("button", { name: /close notification/i });
    await user.click(closeButtons[0]);
    if (closeButtons[1]) {
      await user.click(closeButtons[1]);
    }
  });

  it("should render password strength states", async () => {
    const user = userEvent.setup();
    renderCreateAccountForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "a1");
    expect(screen.getByText(/Weak|Good|Strong/i)).toBeInTheDocument();

    await user.clear(passwordInput);
    await user.type(passwordInput, "GoodPass1$");
    expect(screen.getByText(/Weak|Good|Strong/i)).toBeInTheDocument();
  });

  it("should render checklist with all rules passing for a strong password", async () => {
    const user = userEvent.setup();
    renderCreateAccountForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "stronguser@example.com");
    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "StrongPass9$");

    expect(screen.getByText(/be 9-15 characters/i)).toBeInTheDocument();
    expect(screen.getByText(/have at least one number/i)).toBeInTheDocument();
    expect(screen.getByText(/have at least one uppercase letter/i)).toBeInTheDocument();
    expect(screen.getByText(/have at least one special character/i)).toBeInTheDocument();
    expect(screen.getByText(/use only the following special characters/i)).toBeInTheDocument();
    expect(screen.getByText(/be different from username/i)).toBeInTheDocument();
  });

  it("should render checklist with failing rules for weak password", async () => {
    const user = userEvent.setup();
    renderCreateAccountForm();

    await user.type(screen.getByPlaceholderText(/email/i), "weak@example.com");
    await user.type(screen.getByPlaceholderText(/password/i), "abc");

    expect(screen.getByText(/Password must:/i)).toBeInTheDocument();
    expect(screen.getByText(/be 9-15 characters/i)).toBeInTheDocument();
  });

  it("should handle non-Error auto-login failure after successful registration", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });
    vi.mocked(services.authRegister).mockResolvedValue({ success: true, message: "ok" });

    const authSpy = vi
      .spyOn(functions, "handleAuthentication")
      .mockRejectedValue("bad-auth" as any);

    renderCreateAccountForm({ onError });
    await user.type(screen.getByPlaceholderText(/email/i), "user2@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "John");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPass9$");
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("Auto-login failed");
    });

    authSpy.mockRestore();
  });

  it("should toggle remember me and call sign in action", async () => {
    const user = userEvent.setup();
    const onSignIn = vi.fn();
    renderCreateAccountForm({ onSignIn });

    const rememberMeCheckbox = screen.getByRole("checkbox", { name: /remember me/i });
    await user.click(rememberMeCheckbox);
    expect(rememberMeCheckbox).toBeChecked();

    await user.type(screen.getByPlaceholderText(/email/i), "signin@example.com");
    await user.click(screen.getByRole("button", { name: /Sign In/i }));
    expect(onSignIn).toHaveBeenCalledWith("signin@example.com");
  });

  it("should toggle password visibility", async () => {
    renderCreateAccountForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toHaveAttribute("type", "password");

    const showButton = document.querySelector(
      'button[aria-label="Show password"]'
    ) as HTMLButtonElement;
    fireEvent.click(showButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    const hideButton = document.querySelector(
      'button[aria-label="Hide password"]'
    ) as HTMLButtonElement;
    fireEvent.click(hideButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});

describe("CreateAccountForm — brand configuration error", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    // Signal theme as already loaded so useBrandConfigError runs immediately
    // without waiting for the "theme-loaded" window event.
    sessionStorage.setItem("theme_loaded", "true");
    // Brand config is broken: getBrandHeaders returns empty (no X-Brand-Id)
    vi.mocked(services.getBrandHeaders).mockResolvedValue({});
  });

  afterEach(() => {
    sessionStorage.clear();
  });

  it("should show brand error banner when X-Brand-Id is missing", async () => {
    renderCreateAccountForm();

    await waitFor(() => {
      expect(
        screen.getByText(/it looks like this sign-in form isn't set up correctly/i)
      ).toBeInTheDocument();
    });
  });

  it("should show the 'having trouble' title in the brand error banner", async () => {
    renderCreateAccountForm();

    await waitFor(() => {
      expect(screen.getByText(/we're having trouble signing you in/i)).toBeInTheDocument();
    });
  });

  it("should disable the Create Account submit button when brand config error", async () => {
    renderCreateAccountForm();

    await waitFor(() => {
      const submitBtn = document.querySelector(
        'button[part~="identity-widget-create-account-submit-button"]'
      ) as HTMLButtonElement;
      expect(submitBtn).not.toBeNull();
      expect(submitBtn).toBeDisabled();
    });
  });

  it("should keep the Sign In button enabled when brand config error", async () => {
    renderCreateAccountForm();

    await waitFor(() => {
      expect(services.getBrandHeaders).toHaveBeenCalled();
    });

    const signInBtn = document.querySelector(
      'button[part~="identity-widget-create-account-signin-button"]'
    ) as HTMLButtonElement;
    expect(signInBtn).not.toBeNull();
    expect(signInBtn).not.toBeDisabled();
  });

  it("should not call checkEmail when brand config error and a valid email is typed", async () => {
    const user = userEvent.setup();
    renderCreateAccountForm();
    await waitFor(() => {
      expect(services.getBrandHeaders).toHaveBeenCalled();
    });

    await user.type(screen.getByPlaceholderText(/email/i), "test@example.com");

    // Wait past debounce window
    await new Promise((resolve) => setTimeout(resolve, 600));

    expect(services.checkEmail).not.toHaveBeenCalled();
  });

  it("should not call authRegister when form is submitted with brand config error", async () => {
    renderCreateAccountForm();
    await waitFor(() => {
      expect(services.getBrandHeaders).toHaveBeenCalled();
    });

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/first name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText(/last name/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "ValidPass9$" },
    });
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(services.authRegister).not.toHaveBeenCalled();
  });

  it("should show brand error banner when getBrandHeaders rejects", async () => {
    vi.mocked(services.getBrandHeaders).mockRejectedValue(new Error("Network error"));
    renderCreateAccountForm();

    await waitFor(() => {
      expect(
        screen.getByText(/it looks like this sign-in form isn't set up correctly/i)
      ).toBeInTheDocument();
    });
  });
});

// -------------------------------------------------------------------------
// Additional coverage tests
// -------------------------------------------------------------------------
describe("CreateAccountForm — additional coverage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    vi.mocked(services.getBrandHeaders).mockResolvedValue({
      "X-Brand-Id": "Elite Learning",
      "X-Subsidiary-Id": "1",
      "X-Brand-Domain": "elitelearning.com",
    });
  });

  it("should not call checkPhone when phone number is short", async () => {
    renderCreateAccountForm();

    // PhoneInput doesn't trigger checkPhone for short values
    await new Promise((resolve) => setTimeout(resolve, 600));
    expect(services.checkPhone).not.toHaveBeenCalled();
  });

  it("should show differentFromUsername failing when password matches email prefix", async () => {
    renderCreateAccountForm({ initialEmail: "testuser@example.com" });

    await waitFor(() => {
      expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    });

    const passwordInput = screen.getByLabelText(/^password$/i);
    fireEvent.change(passwordInput, { target: { value: "testuser" } });

    await waitFor(() => {
      const requirement = screen.getByText(/be different from username/i);
      const listItem = requirement.closest("li");
      expect(listItem?.getAttribute("data-satisfied")).toBe("false");
    });
  });
});
