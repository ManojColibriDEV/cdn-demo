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

  it("should use default status role for unknown type", () => {
    render(<Banner message="Unknown" type={"unknown" as any} />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});

describe("Banner title prop", () => {
  it("should render title when provided", () => {
    render(
      <Banner type={MessageType.ERROR} title="Something went wrong" message="Please try again." />
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Please try again.")).toBeInTheDocument();
  });

  it("should not render title element when title is not provided", () => {
    render(<Banner type={MessageType.ERROR} message="Error message" />);

    const titleEl = document.querySelector('[part="identity-widget-banner-title"]');
    expect(titleEl).not.toBeInTheDocument();
  });

  it("should render title with banner-title part attribute", () => {
    render(<Banner type={MessageType.INFO} title="Info Title" message="Info body" />);

    const titleEl = document.querySelector('[part="identity-widget-banner-title"]');
    expect(titleEl).toBeInTheDocument();
    expect(titleEl).toHaveTextContent("Info Title");
  });

  it("should render title before message in the DOM", () => {
    render(
      <Banner type={MessageType.WARNING} title="Heads up" message="Something might be off." />
    );

    const content = document.querySelector('[part="identity-widget-banner-content"]');
    expect(content).toBeInTheDocument();
    const children = Array.from(content!.children);
    const titleIndex = children.findIndex(
      (el) => el.getAttribute("part") === "identity-widget-banner-title"
    );
    const msgRowIndex = children.findIndex(
      (el) => el.getAttribute("part") === "identity-widget-banner-message-row"
    );
    expect(titleIndex).toBeLessThan(msgRowIndex);
  });

  it("should render title for all banner types", () => {
    const types = [MessageType.SUCCESS, MessageType.WARNING, MessageType.ERROR, MessageType.INFO];
    types.forEach((type) => {
      const { unmount } = render(<Banner type={type} title="Title text" message="Message text" />);
      expect(screen.getByText("Title text")).toBeInTheDocument();
      unmount();
    });
  });

  it("should render message without title when only message is given", () => {
    render(<Banner type={MessageType.SUCCESS} message="Only message" />);

    expect(screen.getByText("Only message")).toBeInTheDocument();
    expect(document.querySelector('[part="identity-widget-banner-title"]')).not.toBeInTheDocument();
  });
});

describe("Banner actionText without onActionClick", () => {
  it("should render actionText as a span when onActionClick is not provided", () => {
    render(
      <Banner
        type={MessageType.ERROR}
        message="An error occurred."
        actionText="We're having trouble signing you in"
      />
    );

    const actionEl = document.querySelector('[part="identity-widget-banner-action"]');
    expect(actionEl).toBeInTheDocument();
    expect(actionEl!.tagName.toLowerCase()).toBe("span");
    expect(actionEl).toHaveTextContent("We're having trouble signing you in");
  });

  it("should render actionText as a button when onActionClick is provided", () => {
    render(
      <Banner
        type={MessageType.INFO}
        message="No account found."
        actionText="Create one?"
        onActionClick={vi.fn()}
      />
    );

    const actionEl = document.querySelector('[part="identity-widget-banner-action"]');
    expect(actionEl).toBeInTheDocument();
    expect(actionEl!.tagName.toLowerCase()).toBe("button");
  });

  it("should call onActionClick when action button is clicked", () => {
    const onActionClick = vi.fn();
    render(
      <Banner
        type={MessageType.INFO}
        message="No account found."
        actionText="Create one?"
        onActionClick={onActionClick}
      />
    );

    const actionBtn = screen.getByRole("button", { name: /create one/i });
    fireEvent.click(actionBtn);
    expect(onActionClick).toHaveBeenCalledTimes(1);
  });

  it("should not render any action element when actionText is not provided", () => {
    render(<Banner type={MessageType.INFO} message="Just a message" />);

    expect(
      document.querySelector('[part="identity-widget-banner-action"]')
    ).not.toBeInTheDocument();
  });
});

describe("Banner border styles", () => {
  it("should apply left-4 accent border to error banner", () => {
    const { container } = render(<Banner type={MessageType.ERROR} message="Error" />);
    expect(container.firstChild).toHaveClass("border-l-4!");
  });

  it("should apply left-4 accent border to success banner", () => {
    const { container } = render(<Banner type={MessageType.SUCCESS} message="Success" />);
    expect(container.firstChild).toHaveClass("border-l-4!");
  });

  it("should apply left-4 accent border to warning banner", () => {
    const { container } = render(<Banner type={MessageType.WARNING} message="Warning" />);
    expect(container.firstChild).toHaveClass("border-l-4!");
  });

  it("should apply left-4 accent border to info banner", () => {
    const { container } = render(<Banner type={MessageType.INFO} message="Info" />);
    expect(container.firstChild).toHaveClass("border-l-4!");
  });

  it("should apply red left border to error banner", () => {
    const { container } = render(<Banner type={MessageType.ERROR} message="Error" />);
    expect(container.firstChild).toHaveClass("border-l-red-500!");
  });

  it("should apply green left border to success banner", () => {
    const { container } = render(<Banner type={MessageType.SUCCESS} message="Success" />);
    expect(container.firstChild).toHaveClass("border-l-green-500!");
  });

  it("should apply yellow left border to warning banner", () => {
    const { container } = render(<Banner type={MessageType.WARNING} message="Warning" />);
    expect(container.firstChild).toHaveClass("border-l-yellow-500!");
  });

  it("should apply cyan left border to info banner", () => {
    const { container } = render(<Banner type={MessageType.INFO} message="Info" />);
    expect(container.firstChild).toHaveClass("border-l-cyan-500!");
  });
});
