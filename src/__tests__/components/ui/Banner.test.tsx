/**
 * Component Tests: Banner UI Component
 * Tests for banner types, messages, and dismissal
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Banner from "../../../common/ui/banner";
import { MessageType } from "../../../constants";

describe("Banner Component", () => {
  it("should render with message", () => {
    render(<Banner message="This is a banner message" type={MessageType.INFO} />);

    expect(screen.getByText("This is a banner message")).toBeInTheDocument();
  });

  it("should render success banner", () => {
    render(<Banner message="Success!" type={MessageType.SUCCESS} />);

    expect(screen.getByText("Success!")).toBeInTheDocument();
  });

  it("should render error banner", () => {
    render(<Banner message="Error occurred" type={MessageType.ERROR} />);

    expect(screen.getByText("Error occurred")).toBeInTheDocument();
  });

  it("should render warning banner", () => {
    render(<Banner message="Warning!" type={MessageType.WARNING} />);

    expect(screen.getByText("Warning!")).toBeInTheDocument();
  });

  it("should render info banner", () => {
    render(<Banner message="Information" type={MessageType.INFO} />);

    expect(screen.getByText("Information")).toBeInTheDocument();
  });

  it("should call onClose when close button clicked", () => {
    const handleClose = vi.fn();
    render(<Banner message="Dismissible" type={MessageType.INFO} onClose={handleClose} />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should not show close button when onClose not provided", () => {
    render(<Banner message="Non-dismissible" type={MessageType.INFO} />);

    const buttons = screen.queryByRole("button");
    expect(buttons).not.toBeInTheDocument();
  });

  it("should show close button when dismissible", () => {
    render(<Banner message="Test" type={MessageType.INFO} onClose={vi.fn()} />);

    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeInTheDocument();
  });

  it("should render with custom className", () => {
    const { container } = render(
      <Banner message="Custom" type={MessageType.INFO} className="custom-banner" />
    );

    expect(container.firstChild).toHaveClass("custom-banner");
  });

  it("should handle long messages", () => {
    const longMessage =
      "This is a very long message that should still be displayed correctly in the banner component without any issues.";
    render(<Banner message={longMessage} type={MessageType.INFO} />);

    expect(screen.getByText(longMessage)).toBeInTheDocument();
  });

  it("should render with icon for different types", () => {
    const { rerender } = render(<Banner message="Test" type={MessageType.SUCCESS} />);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Banner message="Test" type={MessageType.ERROR} />);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Banner message="Test" type={MessageType.WARNING} />);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Banner message="Test" type={MessageType.INFO} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
