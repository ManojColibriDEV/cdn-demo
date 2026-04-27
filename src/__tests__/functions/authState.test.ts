/**
 * Function Tests: Auth State Functions
 * Covers token inspection, refresh, silent refresh, redirect checks,
 * localStorage validity, token clearing, login handling, and session creation.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { jwtDecode } from "jwt-decode";
import {
  isRefreshTokenExpiredFromCookie,
  refreshAuthenticationState,
  silentTokenRefresh,
  checkTokenAndRedirect,
  checkTokenAndRedirectWithRefresh,
  isRefreshTokenValid,
  clearAuthTokens,
  handleAuthentication,
  handleGoogleAuthentication,
  handleAppleAuthentication,
  createUserSessionFromToken,
} from "../../functions";
import { STORAGE_KEYS, COOKIE_NAMES, TOKEN_EXPIRY } from "../../constants";

// ---------------------------------------------------------------------------
// Module mocks
// ---------------------------------------------------------------------------

vi.mock("jwt-decode");

vi.mock("../../services", () => ({
  authLogin: vi.fn(),
  authRefresh: vi.fn(),
  authGoogle: vi.fn(),
  authApple: vi.fn(),
}));

// Pull the mocked service functions so individual tests can configure them.
import { authLogin, authRefresh, authGoogle, authApple } from "../../services";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const NOW_S = Math.floor(Date.now() / 1000);
const FUTURE_EXP = NOW_S + 3600; // 1 hour from now
const PAST_EXP = NOW_S - 3600; // 1 hour ago

/** Write a raw cookie the way the browser stores it (no encoding). */
function setRawCookie(name: string, value: string): void {
  const expires = new Date(Date.now() + 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

/** Write an encoded cookie (mirrors setAuthCookie with encode=true). */
function setEncodedCookie(name: string, value: string): void {
  const expires = new Date(Date.now() + 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function clearAllCookies(): void {
  document.cookie.split(";").forEach((c) => {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
  });
}

// ---------------------------------------------------------------------------
// Shared beforeEach/afterEach
// ---------------------------------------------------------------------------

beforeEach(() => {
  localStorage.clear();
  clearAllCookies();
  vi.clearAllMocks();
});

afterEach(() => {
  vi.useRealTimers();
});

// ===========================================================================
// 1. isRefreshTokenExpiredFromCookie
// ===========================================================================

describe("isRefreshTokenExpiredFromCookie", () => {
  it("returns true when refresh_token cookie is absent", () => {
    expect(isRefreshTokenExpiredFromCookie()).toBe(true);
  });

  it("returns false when refresh_token cookie contains a valid (non-expired) JWT", () => {
    setRawCookie(COOKIE_NAMES.REFRESH_TOKEN, "valid.refresh.token");
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    expect(isRefreshTokenExpiredFromCookie()).toBe(false);
  });

  it("returns true when refresh_token JWT is expired", () => {
    setRawCookie(COOKIE_NAMES.REFRESH_TOKEN, "expired.refresh.token");
    vi.mocked(jwtDecode).mockReturnValue({ exp: PAST_EXP } as any);

    expect(isRefreshTokenExpiredFromCookie()).toBe(true);
  });

  it("returns true when decoded JWT has no exp field", () => {
    setRawCookie(COOKIE_NAMES.REFRESH_TOKEN, "no-exp.refresh.token");
    vi.mocked(jwtDecode).mockReturnValue({} as any);

    expect(isRefreshTokenExpiredFromCookie()).toBe(true);
  });

  it("returns true when jwtDecode throws (invalid JWT)", () => {
    setRawCookie(COOKIE_NAMES.REFRESH_TOKEN, "garbage");
    vi.mocked(jwtDecode).mockImplementation(() => {
      throw new Error("Invalid token");
    });

    expect(isRefreshTokenExpiredFromCookie()).toBe(true);
  });
});

// ===========================================================================
// 2. refreshAuthenticationState
// ===========================================================================

describe("refreshAuthenticationState", () => {
  it("returns false when no refresh token is available at all", async () => {
    const result = await refreshAuthenticationState();
    expect(result).toBe(false);
  });

  it("returns false when authRefresh throws", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "some-refresh-token");
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);
    vi.mocked(authRefresh).mockRejectedValue(new Error("network error"));

    const result = await refreshAuthenticationState();
    expect(result).toBe(false);
  });

  it("returns false when authRefresh response has no access_token", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "some-refresh-token");
    vi.mocked(authRefresh).mockResolvedValue({ tokens: {} });

    const result = await refreshAuthenticationState();
    expect(result).toBe(false);
  });

  it("returns false when the new access_token cannot be decoded (createUserSession returns null)", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "some-refresh-token");
    vi.mocked(authRefresh).mockResolvedValue({
      tokens: { access_token: "bad.access.token" },
    });
    vi.mocked(jwtDecode).mockImplementation(() => {
      throw new Error("decode error");
    });

    const result = await refreshAuthenticationState();
    expect(result).toBe(false);
  });

  it("returns false when the decoded access_token is already expired", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "some-refresh-token");
    vi.mocked(authRefresh).mockResolvedValue({
      tokens: { access_token: "expired.access.token" },
    });
    vi.mocked(jwtDecode).mockReturnValue({ exp: PAST_EXP } as any);

    const result = await refreshAuthenticationState();
    expect(result).toBe(false);
  });

  it("returns true on success and stores tokens in cookies/localStorage", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "some-refresh-token");
    vi.mocked(authRefresh).mockResolvedValue({
      tokens: { access_token: "new.access.token", refresh_token: "new.refresh.token" },
    });
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP, sub: "u1" } as any);

    const result = await refreshAuthenticationState();

    expect(result).toBe(true);
    expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBe("new.access.token");
    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBe("new.refresh.token");
    expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES)).toBeTruthy();
  });

  it("updates refresh_token_time when remember me flag already exists", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "some-refresh-token");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, "9999");
    vi.mocked(authRefresh).mockResolvedValue({
      tokens: { access_token: "new.access.token", refresh_token: "new.refresh.token" },
    });
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    const before = Date.now();
    await refreshAuthenticationState();
    const after = Date.now();

    const stored = parseInt(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)!);
    expect(stored).toBeGreaterThanOrEqual(before);
    expect(stored).toBeLessThanOrEqual(after);
  });

  it("does NOT update refresh_token_time when remember me flag is absent", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "some-refresh-token");
    // no REFRESH_TOKEN_TIME set
    vi.mocked(authRefresh).mockResolvedValue({
      tokens: { access_token: "new.access.token", refresh_token: "new.refresh.token" },
    });
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    await refreshAuthenticationState();

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
  });

  it("uses refreshTokenOverride when provided instead of stored token", async () => {
    // Make sure there is no stored token
    vi.mocked(authRefresh).mockResolvedValue({
      tokens: { access_token: "new.access.token" },
    });
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    const result = await refreshAuthenticationState("override-refresh-token");

    expect(result).toBe(true);
    expect(vi.mocked(authRefresh)).toHaveBeenCalledWith("override-refresh-token");
  });
});

// ===========================================================================
// 3. silentTokenRefresh
// ===========================================================================

describe("silentTokenRefresh", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("returns true immediately when no access token exists", async () => {
    // No cookies, no localStorage entries
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    const result = await silentTokenRefresh();
    expect(result).toBe(true);
  });

  it("returns true immediately when no refresh token exists", async () => {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access.token.value");
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);
    // No refresh token anywhere

    const result = await silentTokenRefresh();
    expect(result).toBe(true);
  });

  it("returns true immediately when refresh token is expired/unusable", async () => {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access.token.value");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "expired.refresh.token");
    vi.mocked(jwtDecode).mockReturnValue({ exp: PAST_EXP } as any);

    const result = await silentTokenRefresh();
    expect(result).toBe(true);
  });

  it("returns a cleanup function when both tokens are valid", async () => {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access.token.value");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh.token.value");
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    const result = await silentTokenRefresh();
    expect(typeof result).toBe("function");
  });

  it("starts a 3-minute interval timer when tokens are valid", async () => {
    const setIntervalSpy = vi.spyOn(globalThis, "setInterval");

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access.token.value");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh.token.value");
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    await silentTokenRefresh();

    expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 3 * 60 * 1000);
    setIntervalSpy.mockRestore();
  });

  it("timer fires and calls refreshAuthenticationState when session needs recovery", async () => {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access.token.value");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh.token.value");

    // First two calls (during silentTokenRefresh setup): refresh token usable, access token present
    // Inside the timer: access token is expired (triggers recovery)
    vi.mocked(jwtDecode)
      .mockReturnValueOnce({ exp: FUTURE_EXP } as any) // isRefreshTokenUsable check
      // Inside interval callback
      .mockReturnValueOnce({ exp: FUTURE_EXP } as any) // isRefreshTokenUsable for currentRefreshToken
      .mockReturnValueOnce({ exp: PAST_EXP } as any); // isJwtExpired for accessToken → triggers refresh

    vi.mocked(authRefresh).mockResolvedValue({
      tokens: { access_token: "new.access.token" },
    });

    await silentTokenRefresh();
    await vi.advanceTimersByTimeAsync(3 * 60 * 1000);

    expect(vi.mocked(authRefresh)).toHaveBeenCalled();
  });
});

// ===========================================================================
// 4. checkTokenAndRedirect
// ===========================================================================

describe("checkTokenAndRedirect", () => {
  it("returns false when remember me flag is not set", () => {
    // No REFRESH_TOKEN_TIME in localStorage
    expect(checkTokenAndRedirect()).toBe(false);
  });

  it("returns false when remember me flag is set but no access token exists", () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    // No access_token cookie or localStorage

    expect(checkTokenAndRedirect()).toBe(false);
  });

  it("returns true when remember me flag is set and token is valid", () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access.token.value");
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + 3600000).toString());

    vi.mocked(jwtDecode).mockReturnValueOnce({
      exp: Math.floor(Date.now() / 1000) + 3600,
    });

    expect(checkTokenAndRedirect()).toBe(true);
  });

  it("returns false when token is expired via access_token_expires check", () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access.token.value");
    localStorage.setItem(
      STORAGE_KEYS.ACCESS_TOKEN_EXPIRES,
      (Date.now() - 1000).toString() // already expired
    );

    expect(checkTokenAndRedirect()).toBe(false);
  });

  it("returns false when JWT decode fails", () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "bad.token");

    vi.mocked(jwtDecode).mockImplementation(() => {
      throw new Error("decode error");
    });

    expect(checkTokenAndRedirect()).toBe(false);
  });

  it("returns false when decoded token is expired", () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "expired.token");

    vi.mocked(jwtDecode).mockReturnValue({ exp: PAST_EXP } as any);

    expect(checkTokenAndRedirect()).toBe(false);
  });

  it("redirects and returns true when token is valid and redirectUrl is provided", () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "valid.access.token");

    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    const result = checkTokenAndRedirect("https://example.com/dashboard");

    expect(result).toBe(true);
    expect(window.location.href).toBe("https://example.com/dashboard");
  });

  it("returns true without redirecting when token is valid and no redirectUrl given", () => {
    // Reset location.href to something predictable
    window.location.href = "http://localhost:5173";

    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "valid.access.token");

    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    const result = checkTokenAndRedirect();

    expect(result).toBe(true);
    // href should NOT have changed to some new URL
    expect(window.location.href).toBe("http://localhost:5173");
  });

  it("uses access_token from cookie when both cookie and localStorage are present", () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "localStorage.access.token");
    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "cookie.access.token");

    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    const result = checkTokenAndRedirect();
    expect(result).toBe(true);
  });
});

// ===========================================================================
// 5. checkTokenAndRedirectWithRefresh
// ===========================================================================

describe("checkTokenAndRedirectWithRefresh", () => {
  it("returns true immediately when checkTokenAndRedirect succeeds (valid token)", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "valid.access.token");

    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    const result = await checkTokenAndRedirectWithRefresh();
    expect(result).toBe(true);
  });

  it("returns false when remember me flag is absent and checkTokenAndRedirect fails", async () => {
    // No REFRESH_TOKEN_TIME
    const result = await checkTokenAndRedirectWithRefresh();
    expect(result).toBe(false);
  });

  it("returns false when remember me is set but no refresh token is stored", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    // No access token → checkTokenAndRedirect fails
    // No refresh token stored anywhere
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    const result = await checkTokenAndRedirectWithRefresh();
    expect(result).toBe(false);
  });

  it("returns false when refresh token is expired/unusable", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "expired.refresh.token");
    // No access token → checkTokenAndRedirect fails
    vi.mocked(jwtDecode).mockReturnValue({ exp: PAST_EXP } as any);

    const result = await checkTokenAndRedirectWithRefresh();
    expect(result).toBe(false);
  });

  it("returns false when tokens are not expired (no refresh needed)", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "valid.refresh.token");
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "valid.access.token");

    // checkTokenAndRedirect fails (no remember me tokens in a way that passes… actually
    // remember me IS set above). Let us make checkTokenAndRedirect fail by having jwtDecode
    // return expired on first call then valid for the usability check.
    // Easiest: make the ACCESS_TOKEN_EXPIRES already expired so checkTokenAndRedirect returns false,
    // but then access_token itself is "not expired" so refresh is skipped.
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() - 1000).toString());

    // isRefreshTokenUsable (for the stored refresh token): not expired
    // isJwtExpired(accessToken): valid (not expired) → isAccessExpired = false
    // → token valid → no refresh needed → return false
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP } as any);

    const result = await checkTokenAndRedirectWithRefresh();
    expect(result).toBe(false);
  });

  it("calls checkTokenAndRedirect again after a successful refresh", async () => {
    // Setup: remember me is enabled, refresh token is valid, but current access token
    // is expired — this causes checkTokenAndRedirect to fail on entry and forces the refresh path.
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "valid.refresh.token");
    // No access_token_expires so the expiresAt check is skipped inside checkTokenAndRedirect.
    // Access token exists in localStorage but its JWT is expired → checkTokenAndRedirect returns false.
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "old.access.token");

    // jwtDecode call order:
    // 1. checkTokenAndRedirect: decode access_token → expired → return false
    // 2. isRefreshTokenUsable(refreshToken): decode refresh_token → valid
    // 3. isJwtExpired(accessToken): decode access_token → expired → triggers refresh
    // 4. refreshAuthenticationState → createUserSessionFromToken: decode new access_token → valid
    // 5. final checkTokenAndRedirect: decode new access_token → valid → return true
    vi.mocked(jwtDecode)
      .mockReturnValueOnce({ exp: PAST_EXP } as any) // 1. checkTokenAndRedirect: expired
      .mockReturnValueOnce({ exp: FUTURE_EXP } as any) // 2. isRefreshTokenUsable: valid
      .mockReturnValueOnce({ exp: PAST_EXP } as any) // 3. isJwtExpired(accessToken): expired
      .mockReturnValueOnce({ exp: FUTURE_EXP } as any) // 4. createUserSessionFromToken
      .mockReturnValueOnce({ exp: FUTURE_EXP } as any); // 5. final checkTokenAndRedirect

    vi.mocked(authRefresh).mockResolvedValue({
      tokens: { access_token: "new.access.token", refresh_token: "new.refresh.token" },
    });

    const result = await checkTokenAndRedirectWithRefresh();
    expect(result).toBe(true);
  });
});

// ===========================================================================
// 6. isRefreshTokenValid
// ===========================================================================

describe("isRefreshTokenValid", () => {
  it("returns false when refresh_token_time is not in localStorage", () => {
    expect(isRefreshTokenValid()).toBe(false);
  });

  it("returns true when refresh_token_time is recent (within 7 days)", () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    expect(isRefreshTokenValid()).toBe(true);
  });

  it("returns true for a timestamp that is 1 day old", () => {
    const oneDayAgo = Date.now() - 1 * 24 * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, oneDayAgo.toString());
    expect(isRefreshTokenValid()).toBe(true);
  });

  it("returns false when refresh_token_time is 8 days old (beyond 7-day window)", () => {
    const eightDaysAgo = Date.now() - 8 * 24 * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, eightDaysAgo.toString());
    expect(isRefreshTokenValid()).toBe(false);
  });

  it("returns false when refresh_token_time is exactly at the boundary (7 days)", () => {
    // tokenAge === TOKEN_EXPIRY.REFRESH_TOKEN_MAX_AGE_MS → NOT less than → false
    const exactlySevenDaysAgo = Date.now() - TOKEN_EXPIRY.REFRESH_TOKEN_MAX_AGE_MS;
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, exactlySevenDaysAgo.toString());
    expect(isRefreshTokenValid()).toBe(false);
  });
});

// ===========================================================================
// 7. clearAuthTokens
// ===========================================================================

describe("clearAuthTokens", () => {
  it("removes all auth-related localStorage keys", () => {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access-token-value");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-token-value");
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, "99999999");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, "88888888");
    localStorage.setItem("user_info", "{}");

    clearAuthTokens();

    expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBeNull();
    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBeNull();
    expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES)).toBeNull();
    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
    expect(localStorage.getItem("user_info")).toBeNull();
  });

  it("clears all auth cookies", () => {
    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "access-token-value");
    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-token-value");

    clearAuthTokens();

    // After clearing, document.cookie should not contain the cookie names with values
    const cookieString = document.cookie;
    // The cookies are cleared (value set to empty / expired)
    // Note: jsdom removes expired cookies so they won't appear in document.cookie
    expect(cookieString).not.toContain("access-token-value");
    expect(cookieString).not.toContain("refresh-token-value");
  });
});

// ===========================================================================
// 8. handleAuthentication
// ===========================================================================

describe("handleAuthentication", () => {
  const ACCESS_TOKEN = "access.token.jwt";
  const REFRESH_TOKEN_VAL = "refresh.token.jwt";

  beforeEach(() => {
    vi.mocked(authLogin).mockResolvedValue({
      tokens: {
        access_token: ACCESS_TOKEN,
        refresh_token: REFRESH_TOKEN_VAL,
      },
    });
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP, sub: "user-1" } as any);
  });

  it("stores access_token in localStorage and returns tokens", async () => {
    const tokens = await handleAuthentication("user@example.com", "password123", false);

    expect(tokens.access_token).toBe(ACCESS_TOKEN);
    expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBe(ACCESS_TOKEN);
  });

  it("stores refresh_token in localStorage", async () => {
    await handleAuthentication("user@example.com", "password123", false);

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBe(REFRESH_TOKEN_VAL);
  });

  it("stores access_token_expires in localStorage", async () => {
    const before = Date.now();
    await handleAuthentication("user@example.com", "password123", false);
    const after = Date.now();

    const stored = parseInt(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES)!);
    const expectedMin = before + (FUTURE_EXP - Math.floor(before / 1000)) * 1000;
    const expectedMax = after + (FUTURE_EXP - Math.floor(after / 1000)) * 1000;

    expect(stored).toBeGreaterThanOrEqual(expectedMin - 1000);
    expect(stored).toBeLessThanOrEqual(expectedMax + 1000);
  });

  it("stores refresh_token_time when rememberMe=true", async () => {
    const before = Date.now();
    await handleAuthentication("user@example.com", "password123", true);
    const after = Date.now();

    const stored = parseInt(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)!);
    expect(stored).toBeGreaterThanOrEqual(before);
    expect(stored).toBeLessThanOrEqual(after);
  });

  it("does NOT store refresh_token_time when rememberMe=false", async () => {
    await handleAuthentication("user@example.com", "password123", false);

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
  });

  it("removes any existing refresh_token_time when rememberMe=false", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, "old-timestamp");

    await handleAuthentication("user@example.com", "password123", false);

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
  });

  it("defaults rememberMe to false when not provided", async () => {
    await handleAuthentication("user@example.com", "password123");

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
  });

  it("re-throws when authLogin throws", async () => {
    vi.mocked(authLogin).mockRejectedValue(new Error("Invalid credentials"));

    await expect(handleAuthentication("bad@example.com", "wrongpass")).rejects.toThrow(
      "Invalid credentials"
    );
  });
});

// ===========================================================================
// 9. createUserSessionFromToken
// ===========================================================================

describe("createUserSessionFromToken", () => {
  it("returns a user session object with userInfo and decoded fields on valid JWT", () => {
    const mockDecoded = {
      exp: FUTURE_EXP,
      sub: "user-sub-id",
      email: "jane.doe@example.com",
      name: "Jane Doe",
      given_name: "Jane",
      family_name: "Doe",
      preferred_username: "jane.doe@example.com",
      email_verified: true,
      studentId: "student-123",
    };
    vi.mocked(jwtDecode).mockReturnValue(mockDecoded as any);

    const session = createUserSessionFromToken("some.valid.jwt");

    expect(session).not.toBeNull();
    expect(session!.access_token).toBe("some.valid.jwt");

    // userInfo fields
    expect(session!.userInfo.sub).toBe("user-sub-id");
    expect(session!.userInfo.email).toBe("jane.doe@example.com");
    expect(session!.userInfo.name).toBe("Jane Doe");
    expect(session!.userInfo.given_name).toBe("Jane");
    expect(session!.userInfo.family_name).toBe("Doe");
    expect(session!.userInfo.preferred_username).toBe("jane.doe@example.com");
    expect(session!.userInfo.email_verified).toBe(true);
    expect(session!.userInfo.studentId).toBe("student-123");

    // decoded metadata
    expect(session!.decoded.exp).toBe(FUTURE_EXP);
  });

  it("returns null when jwtDecode throws (invalid token)", () => {
    vi.mocked(jwtDecode).mockImplementation(() => {
      throw new Error("Invalid token specified");
    });

    const session = createUserSessionFromToken("garbage.token");
    expect(session).toBeNull();
  });

  it("handles tokens with missing optional fields gracefully", () => {
    vi.mocked(jwtDecode).mockReturnValue({
      exp: FUTURE_EXP,
      sub: "minimal-user",
    } as any);

    const session = createUserSessionFromToken("minimal.valid.jwt");

    expect(session).not.toBeNull();
    expect(session!.userInfo.sub).toBe("minimal-user");
    expect(session!.userInfo.email).toBeUndefined();
    expect(session!.userInfo.name).toBeUndefined();
    expect(session!.decoded.exp).toBe(FUTURE_EXP);
  });
});

// ===========================================================================
// 10. handleGoogleAuthentication
// ===========================================================================

describe("handleGoogleAuthentication", () => {
  const GOOGLE_ACCESS_TOKEN = "google.access.token.jwt";
  const GOOGLE_REFRESH_TOKEN = "google.refresh.token.jwt";

  beforeEach(() => {
    vi.mocked(authGoogle).mockResolvedValue({
      tokens: {
        access_token: GOOGLE_ACCESS_TOKEN,
        refresh_token: GOOGLE_REFRESH_TOKEN,
      },
    });
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP, sub: "google-user" } as any);
  });

  it("stores access_token in localStorage and returns tokens", async () => {
    const tokens = await handleGoogleAuthentication("google-code-123", false);

    expect(tokens.access_token).toBe(GOOGLE_ACCESS_TOKEN);
    expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBe(GOOGLE_ACCESS_TOKEN);
  });

  it("stores refresh_token in localStorage", async () => {
    await handleGoogleAuthentication("google-code-123", false);

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBe(GOOGLE_REFRESH_TOKEN);
  });

  it("stores access_token_expires in localStorage", async () => {
    const before = Date.now();
    await handleGoogleAuthentication("google-code-123", false);
    const after = Date.now();

    const stored = parseInt(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES)!);
    const expectedMin = before + (FUTURE_EXP - Math.floor(before / 1000)) * 1000;
    const expectedMax = after + (FUTURE_EXP - Math.floor(after / 1000)) * 1000;

    expect(stored).toBeGreaterThanOrEqual(expectedMin - 1000);
    expect(stored).toBeLessThanOrEqual(expectedMax + 1000);
  });

  it("stores refresh_token_time when rememberMe=true", async () => {
    const before = Date.now();
    await handleGoogleAuthentication("google-code-123", true);
    const after = Date.now();

    const stored = parseInt(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)!);
    expect(stored).toBeGreaterThanOrEqual(before);
    expect(stored).toBeLessThanOrEqual(after);
  });

  it("does NOT store refresh_token_time when rememberMe=false", async () => {
    await handleGoogleAuthentication("google-code-123", false);

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
  });

  it("removes any existing refresh_token_time when rememberMe=false", async () => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, "old-timestamp");

    await handleGoogleAuthentication("google-code-123", false);

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
  });

  it("defaults rememberMe to true when not provided", async () => {
    await handleGoogleAuthentication("google-code-123");

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeTruthy();
  });

  it("re-throws when authGoogle throws", async () => {
    vi.mocked(authGoogle).mockRejectedValue(new Error("Google auth failed"));

    await expect(handleGoogleAuthentication("bad-code")).rejects.toThrow("Google auth failed");
  });

  it("skips token storage when access_token is missing from response", async () => {
    vi.mocked(authGoogle).mockResolvedValue({
      tokens: {
        access_token: "",
        refresh_token: GOOGLE_REFRESH_TOKEN,
      },
    });

    const tokens = await handleGoogleAuthentication("google-code-123");
    expect(tokens.access_token).toBe("");
    expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBeNull();
  });
});

// ===========================================================================
// 11. handleAppleAuthentication
// ===========================================================================

describe("handleAppleAuthentication", () => {
  const APPLE_ACCESS_TOKEN = "apple.access.token.jwt";
  const APPLE_REFRESH_TOKEN = "apple.refresh.token.jwt";
  const APPLE_USER = { name: { firstName: "Jane", lastName: "Doe" }, email: "jane@privaterelay.appleid.com" };

  beforeEach(() => {
    vi.mocked(authApple).mockResolvedValue({
      tokens: {
        access_token: APPLE_ACCESS_TOKEN,
        refresh_token: APPLE_REFRESH_TOKEN,
      },
    });
    vi.mocked(jwtDecode).mockReturnValue({ exp: FUTURE_EXP, sub: "apple-user" } as any);
  });

  it("stores access_token in localStorage and returns tokens", async () => {
    const tokens = await handleAppleAuthentication("apple-code-123", APPLE_USER, false);

    expect(tokens.access_token).toBe(APPLE_ACCESS_TOKEN);
    expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBe(APPLE_ACCESS_TOKEN);
  });

  it("forwards user object to authApple", async () => {
    await handleAppleAuthentication("apple-code-123", APPLE_USER, false);

    expect(vi.mocked(authApple)).toHaveBeenCalledWith("apple-code-123", APPLE_USER);
  });

  it("works without user object (subsequent sign-ins)", async () => {
    await handleAppleAuthentication("apple-code-123", undefined, false);

    expect(vi.mocked(authApple)).toHaveBeenCalledWith("apple-code-123", undefined);
  });

  it("stores refresh_token in localStorage", async () => {
    await handleAppleAuthentication("apple-code-123", undefined, false);

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBe(APPLE_REFRESH_TOKEN);
  });

  it("stores access_token_expires in localStorage", async () => {
    const before = Date.now();
    await handleAppleAuthentication("apple-code-123", undefined, false);
    const after = Date.now();

    const stored = parseInt(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES)!);
    const expectedMin = before + (FUTURE_EXP - Math.floor(before / 1000)) * 1000;
    const expectedMax = after + (FUTURE_EXP - Math.floor(after / 1000)) * 1000;

    expect(stored).toBeGreaterThanOrEqual(expectedMin - 1000);
    expect(stored).toBeLessThanOrEqual(expectedMax + 1000);
  });

  it("stores refresh_token_time when rememberMe=true", async () => {
    const before = Date.now();
    await handleAppleAuthentication("apple-code-123", undefined, true);
    const after = Date.now();

    const stored = parseInt(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)!);
    expect(stored).toBeGreaterThanOrEqual(before);
    expect(stored).toBeLessThanOrEqual(after);
  });

  it("does NOT store refresh_token_time when rememberMe=false", async () => {
    await handleAppleAuthentication("apple-code-123", undefined, false);

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
  });

  it("defaults rememberMe to true when not provided", async () => {
    await handleAppleAuthentication("apple-code-123");

    expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeTruthy();
  });

  it("re-throws when authApple throws", async () => {
    vi.mocked(authApple).mockRejectedValue(new Error("Apple auth failed"));

    await expect(handleAppleAuthentication("bad-code")).rejects.toThrow("Apple auth failed");
  });

  it("skips token storage when access_token is missing from response", async () => {
    vi.mocked(authApple).mockResolvedValue({
      tokens: {
        access_token: "",
        refresh_token: APPLE_REFRESH_TOKEN,
      },
    });

    const tokens = await handleAppleAuthentication("apple-code-123");
    expect(tokens.access_token).toBe("");
    expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBeNull();
  });
});
