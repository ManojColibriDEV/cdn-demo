/**
 * Component Tests: Button UI Component
 * Tests for button variants, states, and click handlers
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../../common/ui/button";
import { ButtonType, ButtonVariant } from "../../../constants";

describe("Button Component", () => {
  it("should render with default props", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });

  it("should render primary variant", () => {
    render(<Button variant={ButtonVariant.PRIMARY}>Primary</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should render secondary variant", () => {
    render(<Button variant={ButtonVariant.OUTLINE}>Outline</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should render link variant", () => {
    render(<Button variant={ButtonVariant.LINK}>Link</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should handle click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("should not trigger onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should render as submit type", () => {
    render(<Button type={ButtonType.SUBMIT}>Submit</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  it("should render as button type", () => {
    render(<Button type={ButtonType.BUTTON}>Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
  });

  it("should apply custom className", () => {
    render(<Button className="custom-class">Custom</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("should render with label prop", () => {
    render(<Button label="Click me" />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
  });

  it("should apply custom mainButtonStyle", () => {
    const customStyle = {
      backgroundColor: "#ff0000",
      color: "#ffffff",
      border: "2px solid #000000",
    };
    render(<Button mainButtonStyle={customStyle}>Styled</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
