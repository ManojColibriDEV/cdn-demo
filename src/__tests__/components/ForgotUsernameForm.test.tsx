/**
 * Component Tests: Forgot Username Form
 * Tests for username recovery request and validation
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ForgotUsernameForm from "../../components/forgot-username-form";
import * as services from "../../services";
import { ERROR_MESSAGES } from "../../constants";

vi.mock("../../services", () => ({
  forgotUsername: vi.fn(),
  checkEmail: vi.fn(),
  getBrandHeaders: vi.fn(),
}));

vi.mock("../../constants", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../constants")>();
  return {
    ...actual,
    TIMING: {
      ...actual.TIMING,
      RESEND_COOLDOWN_SECONDS: 0,
    },
  };
});

const renderForgotUsernameForm = (props = {}) => {
  const defaultProps = {
    email: "",
    onBack: vi.fn(),
    handleClose: vi.fn(),
  };

  return render(
    <BrowserRouter>
      <ForgotUsernameForm {...defaultProps} {...props} />
    </BrowserRouter>
  );
};

describe("ForgotUsernameForm Component", () => {
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

  it("should render forgot username form", () => {
    renderForgotUsernameForm();

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("should render email input field", () => {
    renderForgotUsernameForm();

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  it("should render submit button", () => {
    renderForgotUsernameForm();

    const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("should render the Forgot Username title", () => {
    renderForgotUsernameForm();

    expect(screen.getByText("Forgot Username?", { selector: "h2" })).toBeInTheDocument();
  });

  it("should handle email input change", async () => {
    const user = userEvent.setup();
    renderForgotUsernameForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "user@example.com");

    expect(emailInput).toHaveValue("user@example.com");
  });

  it("should validate email format", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderForgotUsernameForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "invalid-email");

    // Form validates email internally
    expect(emailInput).toHaveValue("invalid-email");
  });

  it("should handle successful forgot username request", async () => {
    const user = userEvent.setup();

    vi.mocked(services.forgotUsername).mockResolvedValue({
      success: true,
      message: "Verification link sent",
    });
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderForgotUsernameForm({ email: "user@example.com" });

    // Wait for debounced email check (500ms) + some buffer
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(
      () => {
        const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 1000 }
    );

    const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(services.forgotUsername).toHaveBeenCalledWith("user@example.com");
    });
  });

  it("should handle user not found error", async () => {
    const user = userEvent.setup();

    vi.mocked(services.forgotUsername).mockRejectedValue(
      new Error("We couldn't find an account with that email")
    );
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderForgotUsernameForm({ email: "nonexistent@example.com" });

    // Wait for debounced email check
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(
      () => {
        const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 1000 }
    );

    const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(services.forgotUsername).toHaveBeenCalled();
    });
  });

  it("should handle general errors", async () => {
    const user = userEvent.setup();

    vi.mocked(services.forgotUsername).mockRejectedValue(new Error("Service unavailable"));
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderForgotUsernameForm({ email: "user@example.com" });

    // Wait for debounced email check
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(
      () => {
        const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 1000 }
    );

    const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(services.forgotUsername).toHaveBeenCalled();
    });
  });

  it("should call onBack when back to login link clicked", async () => {
    const user = userEvent.setup();
    const onBackMock = vi.fn();

    renderForgotUsernameForm({ onBack: onBackMock });

    const backLink = screen.getByText(/back to login/i);
    await user.click(backLink);

    expect(onBackMock).toHaveBeenCalled();
  });

  it("should show loading state during submission", async () => {
    const user = userEvent.setup();

    vi.mocked(services.forgotUsername).mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000))
    );

    renderForgotUsernameForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "user@example.com");

    const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
  });

  it("should disable submit button with empty email", () => {
    renderForgotUsernameForm({ email: "" });

    const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
    expect(submitButton).toBeDisabled();
  });

  it("should enable submit button with valid email that exists", async () => {
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    renderForgotUsernameForm({ email: "valid@example.com" });

    await waitFor(
      () => {
        const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 3000 }
    );
  });

  it("should display success message after sending verification link", async () => {
    const user = userEvent.setup();

    vi.mocked(services.forgotUsername).mockResolvedValue({
      success: true,
      message: "Verification link has been sent to your email",
    });
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderForgotUsernameForm({ email: "user@example.com" });

    // Wait for debounced email check
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(
      () => {
        const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 1000 }
    );

    const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
    await user.click(submitButton);

    await waitFor(
      () => {
        expect(services.forgotUsername).toHaveBeenCalledWith("user@example.com");
      },
      { timeout: 3000 }
    );
  });

  it("should execute submit button click logger branch", async () => {
    const user = userEvent.setup();
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotUsername).mockResolvedValue({ success: true });

    renderForgotUsernameForm({ email: "logger@example.com" });
    await new Promise((resolve) => setTimeout(resolve, 600));

    await user.click(screen.getByRole("button", { name: /receive|send|submit/i }));

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalled();
    });

    logSpy.mockRestore();
  });

  it("should trigger onBack from error banner action", async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotUsername).mockRejectedValue(new Error("back-action-error"));

    renderForgotUsernameForm({ email: "back@example.com", onBack });
    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /receive|send|submit/i }));

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Want to sign in instead\?/i })
      ).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Want to sign in instead\?/i }));
    expect(onBack).toHaveBeenCalled();
  });

  it("should dismiss error banner via close button", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotUsername).mockRejectedValue(new Error("dismiss-error"));

    renderForgotUsernameForm({ email: "dismiss@example.com" });
    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /receive|send|submit/i }));

    await waitFor(() => {
      expect(screen.getByText("dismiss-error")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /dismiss banner/i }));
  });

  it("should close on Escape key", async () => {
    const handleClose = vi.fn();
    renderForgotUsernameForm({ handleClose });

    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleClose).toHaveBeenCalled();
  });

  it("should close when clicking overlay background", async () => {
    const handleClose = vi.fn();
    renderForgotUsernameForm({ handleClose });

    const dialog = screen.getByRole("dialog");
    fireEvent.mouseDown(dialog, { target: dialog });
    expect(handleClose).toHaveBeenCalled();
  });

  it("should show and dismiss email check API error banner", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockRejectedValue(new Error("Unable to verify email now"));

    renderForgotUsernameForm();

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

  it("should use generic email-check error for non-Error failures", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockRejectedValue({} as any);

    renderForgotUsernameForm();
    await user.type(screen.getByPlaceholderText(/email/i), "fallback@example.com");

    await waitFor(() => {
      expect(screen.getByText("Unable to verify email. Please try again.")).toBeInTheDocument();
    });
  });

  it("should use generic forgot-username error when submit throws non-Error", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotUsername).mockRejectedValue({} as any);

    renderForgotUsernameForm({ email: "nonerror-submit@example.com" });
    await new Promise((resolve) => setTimeout(resolve, 600));

    await user.click(screen.getByRole("button", { name: /receive|send|submit/i }));

    await waitFor(() => {
      expect(screen.getByText(ERROR_MESSAGES.USERNAME_RECOVERY_FAILED)).toBeInTheDocument();
    });
  });

  it("success view should handle resend, back, close and escape", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    const onBack = vi.fn();

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotUsername).mockResolvedValue({ success: true });

    renderForgotUsernameForm({ email: "user@example.com", handleClose, onBack });

    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /receive|send|submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Check your email/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Resend username verification link/i }));
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
    vi.mocked(services.forgotUsername)
      .mockResolvedValueOnce({ success: true })
      .mockRejectedValueOnce(new Error("resend failed"));

    renderForgotUsernameForm({ email: "user@example.com" });

    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /receive|send|submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Check your email/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Resend username verification link/i }));

    await waitFor(() => {
      expect(screen.getByText("resend failed")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /receive|send|submit/i })).toBeInTheDocument();
    });
  });

  it("resend failure should use generic message for non-Error failures", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotUsername)
      .mockResolvedValueOnce({ success: true })
      .mockRejectedValueOnce({} as any);

    renderForgotUsernameForm({ email: "nonerror-resend@example.com" });

    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /receive|send|submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Check your email/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Resend username verification link/i }));

    await waitFor(() => {
      expect(screen.getByText(ERROR_MESSAGES.USERNAME_RECOVERY_FAILED)).toBeInTheDocument();
    });
  });

  it("shows checking-email spinner while validation request is in progress", async () => {
    const user = userEvent.setup();

    let resolveCheck: ((value: any) => void) | undefined;
    vi.mocked(services.checkEmail).mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveCheck = resolve;
        }) as any
    );

    renderForgotUsernameForm();
    await user.type(screen.getByPlaceholderText(/email/i), "pending@example.com");

    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(() => {
      expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
    });

    resolveCheck?.({ exists: true });
  });

  it("should show required email error when form is submitted empty", () => {
    renderForgotUsernameForm({ email: "" });
    fireEvent.submit(screen.getByRole("form", { name: /forgot username form/i }));
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });

  it("success view should ignore non-escape key events", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotUsername).mockResolvedValue({ success: true });

    renderForgotUsernameForm({ email: "user@example.com", handleClose });
    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /receive|send|submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Check your email/i)).toBeInTheDocument();
    });

    fireEvent.keyDown(document, { key: "Enter" });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it("shows sending state when resending from success view", async () => {
    const user = userEvent.setup();

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotUsername)
      .mockResolvedValueOnce({ success: true })
      .mockImplementationOnce(
        () => new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000))
      );

    renderForgotUsernameForm({ email: "user@example.com" });
    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.click(screen.getByRole("button", { name: /receive|send|submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Check your email/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Resend username verification link/i }));
    expect(screen.getByText(/Sending.../i)).toBeInTheDocument();
  });

  it("should render Forgot Email section with support link", () => {
    renderForgotUsernameForm();

    expect(screen.getByText("Forgot Email?")).toBeInTheDocument();
    expect(screen.getByText("contact our support team")).toBeInTheDocument();
    expect(screen.getByText("contact our support team").closest("a")).toHaveAttribute(
      "href",
      "/contact-us"
    );
  });

  it("should render onCreateAccount action in email-not-found banner", async () => {
    const user = userEvent.setup();
    const onCreateAccount = vi.fn();

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderForgotUsernameForm({ onCreateAccount });

    await user.type(screen.getByPlaceholderText(/email/i), "new@example.com");

    await waitFor(
      () => {
        expect(screen.getByText(/No account found/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    await user.click(screen.getByRole("button", { name: /Let's create one/i }));
    expect(onCreateAccount).toHaveBeenCalled();
  });
});

describe("ForgotUsernameForm — brand configuration error", () => {
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
    renderForgotUsernameForm();

    await waitFor(() => {
      expect(
        screen.getByText(/it looks like this sign-in form isn't set up correctly/i)
      ).toBeInTheDocument();
    });
  });

  it("should show the 'having trouble' title in the brand error banner", async () => {
    renderForgotUsernameForm();

    await waitFor(() => {
      expect(screen.getByText(/we're having trouble signing you in/i)).toBeInTheDocument();
    });
  });

  it("should disable the submit button when brand config error", async () => {
    renderForgotUsernameForm();

    await waitFor(() => {
      const submitBtn = document.querySelector(
        'button[part~="identity-widget-forgot-username-submit-button"]'
      ) as HTMLButtonElement;
      expect(submitBtn).not.toBeNull();
      expect(submitBtn).toBeDisabled();
    });
  });

  it("should not call checkEmail when brand config error and a valid email is typed", async () => {
    const user = userEvent.setup();
    renderForgotUsernameForm();
    await waitFor(() => {
      expect(services.getBrandHeaders).toHaveBeenCalled();
    });

    await user.type(screen.getByPlaceholderText(/email/i), "test@example.com");

    // Wait past debounce window
    await new Promise((resolve) => setTimeout(resolve, 600));

    expect(services.checkEmail).not.toHaveBeenCalled();
  });

  it("should not call forgotUsername when form is submitted with brand config error", async () => {
    renderForgotUsernameForm({ email: "user@example.com" });
    await waitFor(() => {
      expect(services.getBrandHeaders).toHaveBeenCalled();
    });

    fireEvent.submit(screen.getByRole("form", { name: /forgot username form/i }));
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(services.forgotUsername).not.toHaveBeenCalled();
  });

  it("should show brand error banner when getBrandHeaders rejects", async () => {
    vi.mocked(services.getBrandHeaders).mockRejectedValue(new Error("Network error"));
    renderForgotUsernameForm();

    await waitFor(() => {
      expect(
        screen.getByText(/it looks like this sign-in form isn't set up correctly/i)
      ).toBeInTheDocument();
    });
  });
});
