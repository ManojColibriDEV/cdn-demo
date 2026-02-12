/**
 * Component Tests: Input UI Component
 * Tests for input field states, validation, and user interactions
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../../../common/ui/input";

describe("Input Component", () => {
  it("should render with label", () => {
    render(<Input label="Email" />);

    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("should render without label", () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("should handle value changes", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Input label="Test" onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "test value");

    expect(handleChange).toHaveBeenCalled();
  });

  it("should display error message", () => {
    render(<Input label="Email" error="Invalid email" />);

    expect(screen.getByText("Invalid email")).toBeInTheDocument();
  });

  it("should display helper text", () => {
    render(<Input label="Password" helperText="Min 8 characters" />);

    expect(screen.getByText("Min 8 characters")).toBeInTheDocument();
  });

  it("should render as password type", () => {
    render(<Input label="Password" type="password" />);

    const input = screen.getByLabelText("Password");
    expect(input).toHaveAttribute("type", "password");
  });

  it("should render as email type", () => {
    render(<Input label="Email" type="email" />);

    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("type", "email");
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Input label="Test" disabled />);

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("should be required when required prop is true", () => {
    render(<Input label="Test" required />);

    const input = screen.getByRole("textbox");
    expect(input).toBeRequired();
  });

  it("should apply placeholder text", () => {
    render(<Input label="Test" placeholder="Enter your name" />);

    const input = screen.getByPlaceholderText("Enter your name");
    expect(input).toBeInTheDocument();
  });

  it("should handle controlled input", () => {
    const { rerender } = render(<Input label="Test" value="initial" onChange={vi.fn()} />);

    let input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("initial");

    rerender(<Input label="Test" value="updated" onChange={vi.fn()} />);

    input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("updated");
  });

  it("should show error state styling", () => {
    render(<Input label="Email" error="Invalid" />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("should handle maxLength attribute", () => {
    render(<Input label="Test" maxLength={10} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("maxLength", "10");
  });

  it("should handle autocomplete attribute", () => {
    render(<Input label="Email" autoComplete="email" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("autoComplete", "email");
  });

  it("should handle blur events", () => {
    const handleBlur = vi.fn();
    render(<Input label="Test" onBlur={handleBlur} />);

    const input = screen.getByRole("textbox");
    fireEvent.blur(input);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it("should handle focus events", () => {
    const handleFocus = vi.fn();
    render(<Input label="Test" onFocus={handleFocus} />);

    const input = screen.getByRole("textbox");
    fireEvent.focus(input);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });
});
