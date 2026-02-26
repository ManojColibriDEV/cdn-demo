import { describe, expect, it } from "vitest";
import { isCapsLockEnabled } from "../../utils/keyboard";

describe("isCapsLockEnabled", () => {
  it("returns false for non-object events", () => {
    expect(isCapsLockEnabled(undefined)).toBe(false);
    expect(isCapsLockEnabled(null)).toBe(false);
    expect(isCapsLockEnabled("event")).toBe(false);
  });

  it("returns false when getModifierState is missing", () => {
    expect(isCapsLockEnabled({})).toBe(false);
    expect(isCapsLockEnabled({ getModifierState: true })).toBe(false);
  });

  it("returns getModifierState result for CapsLock", () => {
    expect(
      isCapsLockEnabled({
        getModifierState: (key: string) => key === "CapsLock",
      })
    ).toBe(true);

    expect(
      isCapsLockEnabled({
        getModifierState: () => false,
      })
    ).toBe(false);
  });
});
