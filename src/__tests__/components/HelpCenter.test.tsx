import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HelpCenter from "../../components/help-center";

describe("HelpCenter Component", () => {
  const onBack = vi.fn();
  const handleClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const renderHelpCenter = () => render(<HelpCenter onBack={onBack} handleClose={handleClose} />);

  it("renders core help-center content and step tags", () => {
    renderHelpCenter();

    expect(screen.getByRole("heading", { name: "Help Center" })).toBeInTheDocument();
    expect(screen.getByText("Common reasons sign in fails")).toBeInTheDocument();
    expect(screen.getByText("Check your email address or username")).toBeInTheDocument();
    expect(screen.getAllByText("Reset your password").length).toBeGreaterThan(0);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();
    expect(screen.getByText("Step 3")).toBeInTheDocument();
    expect(screen.getByRole("note", { name: /password reset tip/i })).toBeInTheDocument();
  });

  it("calls handleClose when close button is clicked", async () => {
    const user = userEvent.setup();
    renderHelpCenter();

    await user.click(screen.getByRole("button", { name: /close dialog/i }));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls handleClose when escape is pressed", () => {
    renderHelpCenter();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls handleClose on overlay click but not on modal content click", () => {
    renderHelpCenter();

    fireEvent.mouseDown(screen.getByRole("document"));
    expect(handleClose).not.toHaveBeenCalled();

    fireEvent.mouseDown(screen.getByRole("dialog"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onBack when back to sign in button is clicked", async () => {
    const user = userEvent.setup();
    renderHelpCenter();

    await user.click(screen.getByRole("button", { name: /back to sign in/i }));

    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it("animates reset email typing over time", () => {
    vi.useFakeTimers();
    renderHelpCenter();

    const emailInputs = screen.getAllByLabelText(/email address/i) as HTMLInputElement[];
    const animatedInput = emailInputs[0];

    expect(animatedInput.value).toBe("");

    act(() => {
      vi.advanceTimersByTime(360);
    });
    expect(animatedInput.value.length).toBeGreaterThan(0);

    let sawFullEmail = false;
    let sawResetState = false;

    for (let i = 0; i < 40; i++) {
      act(() => {
        vi.advanceTimersByTime(120);
      });

      if (animatedInput.value === "name@email.com") {
        sawFullEmail = true;
      }

      if (sawFullEmail && animatedInput.value === "") {
        sawResetState = true;
        break;
      }
    }

    expect(sawFullEmail).toBe(true);
    expect(sawResetState).toBe(true);
  });
});
