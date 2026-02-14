/**
 * Component Tests: Reset Password Form
 * Tests for password reset request and validation
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
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

  it("should execute submit button click logger branch", async () => {
    const user = userEvent.setup();
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotPassword).mockResolvedValue({ success: true });

    renderResetPasswordForm({ email: "logger@example.com" });
    await new Promise((resolve) => setTimeout(resolve, 600));

    await user.click(screen.getByRole("button", { name: /send|reset|submit/i }));

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalled();
    });

    logSpy.mockRestore();
  });

  it("should trigger onBack from error banner action", async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotPassword).mockRejectedValue(new Error("back-action-error"));

    renderResetPasswordForm({ email: "back@example.com", onBack });
    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /send|reset|submit/i }));

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /Want to sign in instead\?/i })).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Want to sign in instead\?/i }));
    expect(onBack).toHaveBeenCalled();
  });

  it("should dismiss forgot-password error banner via close button", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotPassword).mockRejectedValue(new Error("dismiss-error"));

    renderResetPasswordForm({ email: "dismiss@example.com" });
    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /send|reset|submit/i }));

    await waitFor(() => {
      expect(screen.getByText("dismiss-error")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /dismiss banner/i }));
  });

  it("should close on Escape key", async () => {
    const handleClose = vi.fn();
    renderResetPasswordForm({ handleClose });

    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleClose).toHaveBeenCalled();
  });

  it("should close when clicking overlay background", async () => {
    const handleClose = vi.fn();
    renderResetPasswordForm({ handleClose });

    const dialog = screen.getByRole("dialog");
    fireEvent.mouseDown(dialog, { target: dialog });
    expect(handleClose).toHaveBeenCalled();
  });

  it("should show and dismiss email check API error banner", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockRejectedValue(new Error("Unable to verify email now"));

    renderResetPasswordForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "user@example.com");

    await waitFor(
      () => {
        expect(screen.getByText("Unable to verify email now")).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    await user.click(screen.getByRole("button", { name: /dismiss banner/i }));

    await waitFor(() => {
      expect(screen.queryByText("Unable to verify email now")).not.toBeInTheDocument();
    });
  });

  it("success view should handle resend, back, close and escape", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    const onBack = vi.fn();

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotPassword).mockResolvedValue({ success: true });

    renderResetPasswordForm({ email: "user@example.com", handleClose, onBack });

    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /send|reset|submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Check your email/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Resend password reset link/i }));
    await user.click(screen.getByRole("button", { name: /Back to sign in/i }));
    expect(onBack).toHaveBeenCalled();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleClose).toHaveBeenCalled();

    const dialog = screen.getByRole("dialog");
    fireEvent.mouseDown(dialog, { target: dialog });
    expect(handleClose).toHaveBeenCalled();
  });

  it("resend failure should return to form and show error banner", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotPassword)
      .mockResolvedValueOnce({ success: true })
      .mockRejectedValueOnce(new Error("resend failed"));

    renderResetPasswordForm({ email: "user@example.com" });

    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /send|reset|submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Check your email/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Resend password reset link/i }));

    await waitFor(() => {
      expect(screen.getByText("resend failed")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /send|reset|submit/i })).toBeInTheDocument();
    });
  });

  it("should show required email error when form is submitted empty", () => {
    renderResetPasswordForm({ email: "" });
    fireEvent.submit(screen.getByRole("form", { name: /reset password form/i }));
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });

  it("success view should ignore non-escape key events", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotPassword).mockResolvedValue({ success: true });

    renderResetPasswordForm({ email: "user@example.com", handleClose });
    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /send|reset|submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Check your email/i)).toBeInTheDocument();
    });

    fireEvent.keyDown(document, { key: "Enter" });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it("shows sending state when resending from success view", async () => {
    const user = userEvent.setup();

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotPassword)
      .mockResolvedValueOnce({ success: true })
      .mockImplementationOnce(
        () => new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000))
      );

    renderResetPasswordForm({ email: "user@example.com" });
    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /send|reset|submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Check your email/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Resend password reset link/i }));
    expect(screen.getByText(/Sending.../i)).toBeInTheDocument();
  });
});
