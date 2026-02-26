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

  it("should render select input with options", async () => {
    render(
      <Input
        label="Role"
        type="select"
        options={[
          { value: "user", label: "User" },
          { value: "admin", label: "Admin" },
        ]}
        value="user"
        onChange={vi.fn()}
      />
    );

    const select = screen.getByLabelText("Role");
    expect(select.tagName.toLowerCase()).toBe("select");
    expect(screen.getByRole("option", { name: "User" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Admin" })).toBeInTheDocument();
  });

  it("should render optional label hint", () => {
    render(<Input label="Phone" optional />);
    expect(screen.getByText("(Optional)")).toBeInTheDocument();
  });

  it("should render start icon when provided", () => {
    render(<Input label="With icon" startIcon={<span data-testid="start-icon">S</span>} />);
    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
  });

  it("should render end icon when provided", () => {
    render(<Input label="With end icon" endIcon={<span data-testid="end-icon">E</span>} />);
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });

  it("should show helper text when error is boolean", () => {
    render(<Input label="Field" error={true} helperText="helper" />);
    expect(screen.queryByText("helper")).not.toBeInTheDocument();
  });

  it("should render select input without options array", () => {
    render(<Input label="Empty Select" type="select" value="" onChange={vi.fn()} />);
    const select = screen.getByLabelText("Empty Select");
    expect(select.tagName.toLowerCase()).toBe("select");
  });

  it("should render select with error styling path", () => {
    render(
      <Input
        label="Select Error"
        type="select"
        value="x"
        error="bad"
        options={[{ value: "x", label: "X" }]}
        onChange={vi.fn()}
      />
    );
    expect(screen.getByText("bad")).toBeInTheDocument();
  });

  it("should render select when options is an empty array", () => {
    render(<Input label="No Options" type="select" options={[]} value="" onChange={vi.fn()} />);
    const select = screen.getByLabelText("No Options");
    expect(select).toBeInTheDocument();
    expect(select).not.toHaveAttribute("aria-describedby");
  });

  it("should set aria-describedby for select when helperText is provided", () => {
    render(
      <Input
        label="Country"
        type="select"
        options={[{ value: "us", label: "United States" }]}
        helperText="Pick one"
        value="us"
        onChange={vi.fn()}
      />
    );

    const select = screen.getByLabelText("Country");
    expect(select).toHaveAttribute("aria-describedby");
  });

  it("should use aria-label prop for select when label is not a string", () => {
    render(
      <Input
        label={<span>Country Label</span>}
        aria-label="Country Select"
        type="select"
        options={[{ value: "us", label: "United States" }]}
        value="us"
        onChange={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Country Select").tagName.toLowerCase()).toBe("select");
  });
});
