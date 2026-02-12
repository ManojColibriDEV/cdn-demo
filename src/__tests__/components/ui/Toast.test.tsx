/**
 * Component Tests: Toast UI Component
 * Tests for toast notifications, auto-dismiss, and types
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Toast from "../../../common/ui/toast";
import { MessageType } from "../../../constants";

describe("Toast Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render with message", () => {
    render(<Toast message="Toast message" type={MessageType.INFO} />);

    expect(screen.getByText("Toast message")).toBeInTheDocument();
  });

  it("should render success toast", () => {
    render(<Toast message="Success!" type={MessageType.SUCCESS} />);

    expect(screen.getByText("Success!")).toBeInTheDocument();
  });

  it("should render error toast", () => {
    render(<Toast message="Error!" type={MessageType.ERROR} />);

    expect(screen.getByText("Error!")).toBeInTheDocument();
  });

  it("should render warning toast", () => {
    render(<Toast message="Warning!" type={MessageType.WARNING} />);

    expect(screen.getByText("Warning!")).toBeInTheDocument();
  });

  it("should render info toast", () => {
    render(<Toast message="Info!" type={MessageType.INFO} />);

    expect(screen.getByText("Info!")).toBeInTheDocument();
  });

  it("should auto-dismiss after duration", async () => {
    const handleClose = vi.fn();
    const { rerender } = render(
      <Toast message="Auto dismiss" type={MessageType.INFO} onClose={handleClose} duration={3000} />
    );

    expect(screen.getByText("Auto dismiss")).toBeInTheDocument();

    // Advance past the entrance animation and auto-dismiss timer
    await vi.advanceTimersByTimeAsync(3100);

    // Wait for the exit animation
    await vi.advanceTimersByTimeAsync(300);

    expect(handleClose).toHaveBeenCalled();
  });

  it("should handle empty message gracefully", () => {
    render(<Toast message="" type={MessageType.INFO} />);

    // Toast renders even with empty message - INFO type uses 'status' role
    const toast = screen.queryByRole("status");
    expect(toast).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const { container } = render(
      <Toast message="Custom" type={MessageType.INFO} className="custom-toast" />
    );

    expect(container.querySelector(".custom-toast")).toBeInTheDocument();
  });

  it("should clean up timer on unmount", () => {
    const handleClose = vi.fn();
    const { unmount } = render(
      <Toast message="Cleanup test" type={MessageType.INFO} onClose={handleClose} duration={5000} />
    );

    unmount();
    vi.advanceTimersByTime(5000);

    // Should not call onClose after unmount
    expect(handleClose).not.toHaveBeenCalled();
  });
});
