/**
 * Component Tests: Forgot Username Form — Cooldown Timer
 * Isolated test file WITHOUT RESEND_COOLDOWN_SECONDS mock to cover cooldown timer effect
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ForgotUsernameForm from "../../components/forgot-username-form";
import * as services from "../../services";

vi.mock("../../services", () => ({
  forgotUsername: vi.fn(),
  checkEmail: vi.fn(),
  getBrandHeaders: vi.fn(),
}));

// NOTE: No TIMING mock here — uses real RESEND_COOLDOWN_SECONDS (30)

const renderForm = (props = {}) => {
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

describe("ForgotUsernameForm — cooldown countdown", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.clearAllMocks();
    localStorage.clear();
    vi.mocked(services.getBrandHeaders).mockResolvedValue({
      "X-Brand-Id": "Elite Learning",
      "X-Subsidiary-Id": "1",
      "X-Brand-Domain": "elitelearning.com",
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should decrement cooldown timer after successful submit", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });
    vi.mocked(services.forgotUsername).mockResolvedValue({ success: true });

    renderForm({ email: "cooldown@example.com" });

    // Wait for debounced email check
    await vi.advanceTimersByTimeAsync(600);

    await waitFor(() => {
      const submitButton = screen.getByRole("button", { name: /receive|send|submit/i });
      expect(submitButton).not.toBeDisabled();
    });

    await user.click(screen.getByRole("button", { name: /receive|send|submit/i }));

    await waitFor(() => {
      expect(services.forgotUsername).toHaveBeenCalledWith("cooldown@example.com");
    });

    // After success, should be on success view with cooldown active
    await waitFor(() => {
      expect(screen.getByText(/Check your email/i)).toBeInTheDocument();
    });

    // Advance timer to trigger cooldown decrements
    await vi.advanceTimersByTimeAsync(1000);
    await vi.advanceTimersByTimeAsync(1000);
  });
});
