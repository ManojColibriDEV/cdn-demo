/**
 * Component Tests: Loader UI Component
 * Tests for loading indicator display
 */

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Loader from "../../../common/ui/loader";

describe("Loader Component", () => {
  it("should render loader", () => {
    const { container } = render(<Loader />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it("should have loading role status", () => {
    render(<Loader />);

    const loader = screen.getByRole("status");
    expect(loader).toBeInTheDocument();
  });

  it("should have aria-label for accessibility", () => {
    render(<Loader />);

    const loader = screen.getByLabelText("Loading");
    expect(loader).toBeInTheDocument();
  });

  it("should contain visually hidden loading text", () => {
    render(<Loader />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render with spin animation class", () => {
    const { container } = render(<Loader />);
    const loader = container.firstChild as HTMLElement;

    expect(loader.className).toContain("animate-spin");
  });

  it("should be a span element", () => {
    const { container } = render(<Loader />);

    expect(container.firstChild?.nodeName).toBe("SPAN");
  });
});
