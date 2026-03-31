/**
 * Component Tests: ResetPasswordSuccess
 * Tests for rendering, loading/cooldown states, and user interactions
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ResetPasswordSuccess from "../../components/reset-password-success";

vi.mock("../../icons/badge-check.svg", () => ({
  default: "badge-check.svg",
}));

const DEFAULT_PROPS = {
  email: "test@example.com",
  loading: false,
  cooldown: 0,
  onResendLink: vi.fn(),
  onBack: vi.fn(),
  onClose: vi.fn(),
};

const renderComponent = (props: Partial<typeof DEFAULT_PROPS> = {}) => {
  return render(<ResetPasswordSuccess {...DEFAULT_PROPS} {...props} />);
};

describe("ResetPasswordSuccess Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ---------------------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------------------

  describe("Rendering", () => {
    it("renders 'Check your email' title", () => {
      renderComponent();

      expect(screen.getByRole("heading", { name: /check your email/i })).toBeInTheDocument();
    });

    it("renders the email address passed as prop", () => {
      renderComponent({ email: "user@domain.com" });

      expect(screen.getByText("user@domain.com")).toBeInTheDocument();
    });

    it("renders 'Back to sign in' button", () => {
      renderComponent();

      expect(screen.getByRole("button", { name: /back to sign in/i })).toBeInTheDocument();
    });

    it("renders 'Resend link' button when not loading and no cooldown", () => {
      renderComponent({ loading: false, cooldown: 0 });

      expect(screen.getByText("Resend link")).toBeInTheDocument();
    });

    it("renders dialog with correct ARIA attributes", () => {
      renderComponent();

      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeInTheDocument();
      expect(dialog).toHaveAttribute("aria-modal", "true");
      expect(dialog).toHaveAttribute("aria-labelledby", "reset-success-dialog-title");
    });

    it("renders success icon image", () => {
      renderComponent();

      const img = screen.getByAltText("Success");
      expect(img).toBeInTheDocument();
      expect(img.tagName).toBe("IMG");
    });
  });

  // ---------------------------------------------------------------------------
  // Loading state
  // ---------------------------------------------------------------------------

  describe("Loading state", () => {
    it("shows 'Sending...' text when loading=true", () => {
      renderComponent({ loading: true });

      expect(screen.getByText("Sending...")).toBeInTheDocument();
    });

    it("resend button is disabled when loading=true", () => {
      renderComponent({ loading: true });

      const resendButton = screen.getByRole("button", {
        name: /resend password reset link/i,
      });
      expect(resendButton).toBeDisabled();
    });

    it("back button is disabled when loading=true", () => {
      renderComponent({ loading: true });

      const backButton = screen.getByRole("button", {
        name: /back to sign in/i,
      });
      expect(backButton).toBeDisabled();
    });
  });

  // ---------------------------------------------------------------------------
  // Cooldown state
  // ---------------------------------------------------------------------------

  describe("Cooldown state", () => {
    it("shows cooldown message with remaining seconds when cooldown > 0", () => {
      renderComponent({ cooldown: 42 });

      expect(screen.getByRole("status")).toBeInTheDocument();
      expect(screen.getByText(/please wait.*42.*seconds/i)).toBeInTheDocument();
    });

    it("resend button is disabled when cooldown > 0", () => {
      renderComponent({ cooldown: 30 });

      const resendButton = screen.getByRole("button", {
        name: /resend password reset link/i,
      });
      expect(resendButton).toBeDisabled();
    });

    it("hides cooldown message when cooldown is 0", () => {
      renderComponent({ cooldown: 0 });

      expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Interactions
  // ---------------------------------------------------------------------------

  describe("Interactions", () => {
    it("calls onResendLink when resend button clicked (not loading, no cooldown)", async () => {
      const onResendLink = vi.fn();
      const user = userEvent.setup();
      renderComponent({ loading: false, cooldown: 0, onResendLink });

      await user.click(screen.getByRole("button", { name: /resend password reset link/i }));

      expect(onResendLink).toHaveBeenCalledTimes(1);
    });

    it("calls onBack when 'Back to sign in' clicked", async () => {
      const onBack = vi.fn();
      const user = userEvent.setup();
      renderComponent({ onBack });

      await user.click(screen.getByRole("button", { name: /back to sign in/i }));

      expect(onBack).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when X close button clicked", async () => {
      const onClose = vi.fn();
      const user = userEvent.setup();
      renderComponent({ onClose });

      await user.click(screen.getByRole("button", { name: /close dialog/i }));

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when Escape key is pressed", () => {
      const onClose = vi.fn();
      renderComponent({ onClose });

      fireEvent.keyDown(document, { key: "Escape" });

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when overlay background is clicked", () => {
      const onClose = vi.fn();
      renderComponent({ onClose });

      // The overlay is the outermost element with role="dialog"
      const overlay = screen.getByRole("dialog");
      fireEvent.mouseDown(overlay);

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("does NOT call onClose when modal content (not overlay) is clicked", () => {
      const onClose = vi.fn();
      renderComponent({ onClose });

      // Click the inner modal document, not the backdrop overlay
      const modalContent = screen.getByRole("document");
      fireEvent.mouseDown(modalContent);

      expect(onClose).not.toHaveBeenCalled();
    });
  });
});
