/**
 * Hook Tests: useBrandConfigError
 * Tests for brand configuration error detection logic
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useBrandConfigError } from "../../hooks/useBrandConfigError";
import * as services from "../../services";

vi.mock("../../services", () => ({
  getBrandHeaders: vi.fn(),
}));

describe("useBrandConfigError", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
    // Set theme_loaded so the hook calls getBrandHeaders immediately (not waiting for event)
    sessionStorage.setItem("theme_loaded", "true");
  });

  it("returns false when brand headers are valid (X-Brand-Id present)", async () => {
    vi.mocked(services.getBrandHeaders).mockResolvedValue({
      "X-Brand-Id": "Elite Learning",
      "X-Subsidiary-Id": "1",
      "X-Brand-Domain": "elitelearning.com",
    });

    const { result } = renderHook(() => useBrandConfigError());

    await waitFor(() => {
      expect(services.getBrandHeaders).toHaveBeenCalledTimes(1);
    });

    expect(result.current).toBe(false);
  });

  it("returns true when X-Brand-Id is missing from headers", async () => {
    vi.mocked(services.getBrandHeaders).mockResolvedValue({
      "X-Subsidiary-Id": "1",
      "X-Brand-Domain": "elitelearning.com",
    });

    const { result } = renderHook(() => useBrandConfigError());

    await waitFor(() => {
      expect(result.current).toBe(true);
    });

    expect(services.getBrandHeaders).toHaveBeenCalledTimes(1);
  });

  it("returns true when getBrandHeaders throws an error", async () => {
    vi.mocked(services.getBrandHeaders).mockRejectedValue(
      new Error("Network error: unable to reach brand config service")
    );

    const { result } = renderHook(() => useBrandConfigError());

    await waitFor(() => {
      expect(result.current).toBe(true);
    });

    expect(services.getBrandHeaders).toHaveBeenCalledTimes(1);
  });

  it("starts as false before async effect resolves", () => {
    // Use a promise that never resolves during this synchronous check
    let resolveHeaders!: (value: Record<string, string>) => void;
    const pendingPromise = new Promise<Record<string, string>>((resolve) => {
      resolveHeaders = resolve;
    });
    vi.mocked(services.getBrandHeaders).mockReturnValue(pendingPromise);

    const { result } = renderHook(() => useBrandConfigError());

    // Before the promise settles, brandConfigError must still be the initial false
    expect(result.current).toBe(false);

    // Resolve to avoid unhandled promise warnings
    resolveHeaders({ "X-Brand-Id": "Elite Learning" });
  });

  it("calls getBrandHeaders when theme-loaded event is dispatched (no sessionStorage flag)", async () => {
    sessionStorage.clear(); // Remove the flag so hook waits for event
    vi.mocked(services.getBrandHeaders).mockResolvedValue({
      "X-Brand-Id": "Elite Learning",
    });

    const { result } = renderHook(() => useBrandConfigError());

    // getBrandHeaders not called yet — waiting for event
    expect(services.getBrandHeaders).not.toHaveBeenCalled();

    // Dispatch the theme-loaded event
    window.dispatchEvent(new Event("theme-loaded"));

    await waitFor(() => {
      expect(services.getBrandHeaders).toHaveBeenCalledTimes(1);
    });

    expect(result.current).toBe(false);
  });
});
