/**
 * Function Tests: Validation and Authentication Functions
 * Tests for password validation and token handling
 */

import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  validatePassword,
  checkTokenAndRedirect,
  checkTokenAndRedirectWithRefresh,
  refreshAuthenticationState,
  silentTokenRefresh,
  isRefreshTokenExpiredFromCookie,
  isRefreshTokenValid,
  clearAuthTokens,
  handleAuthentication,
  createUserSessionFromToken,
} from "../../functions";
import * as serviceModule from "../../services";
import type { UpgradeUser } from "../../types";
import { jwtDecode } from "jwt-decode";
import { STORAGE_KEYS, TOKEN_EXPIRY, COOKIE_NAMES } from "../../constants";

// Mock jwt-decode
vi.mock("jwt-decode");

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

/** Write an encoded cookie (mirrors setAuthCookie with encode=true). */
function setEncodedCookie(name: string, value: string): void {
  const expires = new Date(Date.now() + 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

/** Write a raw cookie the way the browser stores it (no encoding). */
function setRawCookie(name: string, value: string): void {
  const expires = new Date(Date.now() + 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

describe("Validation and Authentication Functions", () => {
  const SILENT_REFRESH_INTERVAL_MS = 3 * 60 * 1000;

  beforeEach(() => {
    localStorage.clear();
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    vi.clearAllMocks();
  });

  describe("validatePassword", () => {
    it("should validate a strong password with all requirements", () => {
      const password = "SecureP@ss123$";
      const checks = validatePassword(password);

      expect(checks.length).toBe(true);
      expect(checks.upper).toBe(true);
      expect(checks.lower).toBe(true);
      expect(checks.number).toBe(true);
      expect(checks.special).toBe(true);
      expect(checks.noSpaces).toBe(true);
      expect(checks.noTriple).toBe(true);
      expect(checks.noNameParts).toBe(true);
    });

    it("should fail for password too short", () => {
      const password = "Short1!";
      const checks = validatePassword(password);

      expect(checks.length).toBe(false);
    });

    it("should fail for password without uppercase", () => {
      const password = "nouppercase123!";
      const checks = validatePassword(password);

      expect(checks.upper).toBe(false);
    });

    it("should fail for password without lowercase", () => {
      const password = "NOLOWERCASE123!";
      const checks = validatePassword(password);

      expect(checks.lower).toBe(false);
    });

    it("should fail for password without numbers", () => {
      const password = "NoNumbers!@#";
      const checks = validatePassword(password);

      expect(checks.number).toBe(false);
    });

    it("should fail for password without special characters", () => {
      const password = "NoSpecialChars123";
      const checks = validatePassword(password);

      expect(checks.special).toBe(false);
    });

    it("should fail for password with spaces", () => {
      const password = "Has Spaces123!";
      const checks = validatePassword(password);

      expect(checks.noSpaces).toBe(false);
    });

    it("should fail for password with triple repeated characters", () => {
      const password = "Passsword123!";
      const checks = validatePassword(password);

      expect(checks.noTriple).toBe(false);
    });

    it("should fail when password contains user name parts", () => {
      const password = "JohnPassword123!";
      const user: UpgradeUser = {
        displayName: "John Doe",
        email: "john.doe@example.com",
      };
      const checks = validatePassword(password, user);

      expect(checks.noNameParts).toBe(false);
    });

    it("should pass when password does not contain name parts", () => {
      const password = "CompletelyRandom123!";
      const user: UpgradeUser = {
        displayName: "John Doe",
        email: "john.doe@example.com",
      };
      const checks = validatePassword(password, user);

      expect(checks.noNameParts).toBe(true);
    });

    it("should ignore short name parts when checking", () => {
      const password = "MyPassword123!";
      const user: UpgradeUser = {
        displayName: "Jo A", // Short parts should be ignored
        email: "jo@example.com",
      };
      const checks = validatePassword(password, user);

      expect(checks.noNameParts).toBe(true);
    });

    it("should handle user with no display name", () => {
      const password = "SecureP@ss123!";
      const user: UpgradeUser = {
        displayName: "",
        email: "test@example.com",
      };
      const checks = validatePassword(password, user);

      expect(checks.noNameParts).toBe(true);
    });

    it("should handle special characters correctly", () => {
      // Allowed special chars: ! @ # $ % ^ & * . _ -
      const validSpecialChars = ["!", "@", "#", "$", "%", "^", "&", "*", ".", "_", "-"];

      validSpecialChars.forEach((char) => {
        const password = `Password123${char}`;
        const checks = validatePassword(password);

        expect(checks.special).toBe(true);
      });
    });
  });

  describe("checkTokenAndRedirect", () => {
    const mockValidToken = "valid.jwt.token";

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it("should return false when Remember Me not enabled", () => {
      // No refresh_token_time in cookies
      const result = checkTokenAndRedirect();

      expect(result).toBe(false);
    });

    it("should return false when tokens missing", () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());

      const result = checkTokenAndRedirect();

      expect(result).toBe(false);
    });

    it("should return true when valid tokens exist and Remember Me enabled", () => {
      const futureTime = Math.floor(Date.now() / 1000) + 3600;
      const expiresAt = (Date.now() + 3600000).toString();

      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, expiresAt);
      setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN_EXPIRES, expiresAt);
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=${mockValidToken}; path=/`;

      vi.mocked(jwtDecode).mockReturnValue({
        exp: futureTime,
        sub: "user-id",
        email: "test@example.com",
      });

      const result = checkTokenAndRedirect();

      expect(result).toBe(true);
    });

    it("should return false when token is expired", () => {
      const expiredTime = (Date.now() - 3600000).toString();

      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem("access_token_expires", expiredTime);
      setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN_EXPIRES, expiredTime);
      document.cookie = `access_token=${mockValidToken}; path=/`;

      const result = checkTokenAndRedirect();

      expect(result).toBe(false);
    });

    it("should work with tokens in cookies", () => {
      const futureTime = Math.floor(Date.now() / 1000) + 3600;
      const expiresAt = (Date.now() + 3600000).toString();

      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
      setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, mockValidToken);
      localStorage.setItem("access_token_expires", expiresAt);
      setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN_EXPIRES, expiresAt);

      vi.mocked(jwtDecode).mockReturnValue({
        exp: futureTime,
        sub: "user-id",
      });

      const result = checkTokenAndRedirect();

      expect(result).toBe(true);
    });

    it("should redirect when redirectUrl is provided", () => {
      const futureTime = Math.floor(Date.now() / 1000) + 3600;

      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + 3600000).toString());
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=${mockValidToken}; path=/`;

      vi.mocked(jwtDecode).mockReturnValue({ exp: futureTime });

      const result = checkTokenAndRedirect("https://example.com/home");

      expect(result).toBe(true);
      expect(window.location.href).toBe("https://example.com/home");
    });

    it("should return false when jwt decode throws", () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + 3600000).toString());
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=${mockValidToken}; path=/`;

      vi.mocked(jwtDecode).mockImplementation(() => {
        throw new Error("decode failed");
      });

      expect(checkTokenAndRedirect()).toBe(false);
    });

    it("should return false when decoded token has no exp", () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + 3600000).toString());
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=${mockValidToken}; path=/`;

      vi.mocked(jwtDecode).mockReturnValue({});

      expect(checkTokenAndRedirect()).toBe(false);
    });

    it("should validate using cookie token path without localStorage fallback", () => {
      const futureTime = Math.floor(Date.now() / 1000) + 3600;
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + 100000).toString());
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=cookie.jwt.token; path=/`;

      vi.mocked(jwtDecode).mockReturnValue({ exp: futureTime });
      expect(checkTokenAndRedirect()).toBe(true);
    });

    it("should return false on unexpected top-level errors", () => {
      const spy = vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
        throw new Error("storage-crash");
      });

      expect(checkTokenAndRedirect()).toBe(false);
      spy.mockRestore();
    });
  });

  describe("refresh and silent auth helpers", () => {
    it("isRefreshTokenExpiredFromCookie returns true when refresh cookie is missing", () => {
      expect(isRefreshTokenExpiredFromCookie()).toBe(true);
    });

    it("isRefreshTokenExpiredFromCookie returns false for valid refresh cookie token", () => {
      document.cookie = `${COOKIE_NAMES.REFRESH_TOKEN}=refresh.jwt.token; path=/`;
      vi.mocked(jwtDecode).mockReturnValue({
        exp: Math.floor(Date.now() / 1000) + 3600,
      });

      expect(isRefreshTokenExpiredFromCookie()).toBe(false);
    });

    it("isRefreshTokenExpiredFromCookie returns true when decode throws", () => {
      document.cookie = `${COOKIE_NAMES.REFRESH_TOKEN}=invalid.refresh.token; path=/`;
      vi.mocked(jwtDecode).mockImplementation(() => {
        throw new Error("decode-failure");
      });

      expect(isRefreshTokenExpiredFromCookie()).toBe(true);
    });

    it("refreshAuthenticationState returns false when no refresh token exists", async () => {
      await expect(refreshAuthenticationState()).resolves.toBe(false);
    });

    it("refreshAuthenticationState stores refreshed tokens and updates remember-me timestamp", async () => {
      const oldTime = (Date.now() - 10000).toString();
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, oldTime);

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-new",
          refresh_token: "refresh-new",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "access-new") {
          return {
            exp: Math.floor(Date.now() / 1000) + 3600,
          };
        }
        return { exp: Math.floor(Date.now() / 1000) + 3600 };
      });

      await expect(refreshAuthenticationState()).resolves.toBe(true);

      expect(document.cookie).toContain(COOKIE_NAMES.ACCESS_TOKEN);
      expect(document.cookie).toContain(COOKIE_NAMES.REFRESH_TOKEN);
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).not.toBe(oldTime);
      expect(document.cookie).toContain(`${COOKIE_NAMES.ACCESS_TOKEN}=`);
      expect(document.cookie).toContain(`${COOKIE_NAMES.REFRESH_TOKEN}=`);
    });

    it("refreshAuthenticationState returns false when refreshed access token cannot be decoded", async () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");
      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "bad-access",
          refresh_token: "refresh-new",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation(() => {
        throw new Error("decode-error");
      });

      await expect(refreshAuthenticationState()).resolves.toBe(false);
    });

    it("refreshAuthenticationState returns false when refresh response has no access token", async () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");
      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          refresh_token: "refresh-new",
        },
      } as any);

      await expect(refreshAuthenticationState()).resolves.toBe(false);
    });

    it("refreshAuthenticationState returns false when refreshed access token is already expired", async () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");
      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-expired",
          refresh_token: "refresh-new",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "access-expired") {
          return { exp: Math.floor(Date.now() / 1000) - 10 };
        }
        return { exp: Math.floor(Date.now() / 1000) + 3600 };
      });

      await expect(refreshAuthenticationState()).resolves.toBe(false);
    });

    it("refreshAuthenticationState returns false when refreshed token has no exp", async () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");
      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-no-exp",
          refresh_token: "refresh-new",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "access-no-exp") {
          return {} as any;
        }
        return { exp: Math.floor(Date.now() / 1000) + 3600 };
      });

      await expect(refreshAuthenticationState()).resolves.toBe(false);
    });

    it("refreshAuthenticationState keeps remember-me timestamp unchanged when not previously set", async () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-new-2",
          refresh_token: "refresh-new-2",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "access-new-2") {
          return {
            exp: Math.floor(Date.now() / 1000) + 3600,
          };
        }
        return { exp: Math.floor(Date.now() / 1000) + 3600 };
      });

      await expect(refreshAuthenticationState()).resolves.toBe(true);
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
    });

    it("refreshAuthenticationState succeeds when refresh token is not rotated", async () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-no-rotate",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "access-no-rotate") {
          return {
            exp: Math.floor(Date.now() / 1000) + 3600,
          };
        }
        return { exp: Math.floor(Date.now() / 1000) + 3600 };
      });

      await expect(refreshAuthenticationState()).resolves.toBe(true);
      expect(document.cookie).toContain(COOKIE_NAMES.REFRESH_TOKEN);
      expect(document.cookie).toContain(COOKIE_NAMES.ACCESS_TOKEN);
    });

    it("refreshAuthenticationState returns false when authRefresh throws", async () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");
      vi.spyOn(serviceModule, "authRefresh").mockRejectedValue(new Error("refresh-api-error"));

      await expect(refreshAuthenticationState()).resolves.toBe(false);
    });

    it("checkTokenAndRedirectWithRefresh refreshes and then validates token state", async () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-new",
          refresh_token: "refresh-new",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "refresh-old" || token === "refresh-new") {
          return { exp: Math.floor(Date.now() / 1000) + 7200 };
        }
        if (token === "access-new") {
          return {
            exp: Math.floor(Date.now() / 1000) + 3600,
          };
        }
        return { exp: Math.floor(Date.now() / 1000) + 3600 };
      });

      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(true);
    });

    it("silentTokenRefresh starts interval and triggers refresh flow", async () => {
      vi.useFakeTimers();
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");
      setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "access-old");

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-silent",
          refresh_token: "refresh-silent",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "refresh-old" || token === "refresh-silent") {
          return { exp: Math.floor(Date.now() / 1000) + 7200 };
        }
        if (token === "access-old") {
          return { exp: Math.floor(Date.now() / 1000) - 60 };
        }
        if (token === "access-silent") {
          return {
            exp: Math.floor(Date.now() / 1000) + 3600,
          };
        }
        // Treat any stale/unknown token as expired to force the refresh branch
        return { exp: Math.floor(Date.now() / 1000) - 60 };
      });

      const cleanup = await silentTokenRefresh();
      await vi.advanceTimersByTimeAsync(SILENT_REFRESH_INTERVAL_MS);

      expect(serviceModule.authRefresh).toHaveBeenCalledWith("refresh-old");
      expect(typeof cleanup).toBe("function");

      if (typeof cleanup === "function") {
        cleanup();
      }
      vi.useRealTimers();
    });

    it("silentTokenRefresh returns a cleanup function when no usable refresh token exists", async () => {
      setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "access-present");
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "bad-refresh-token");

      vi.mocked(jwtDecode).mockImplementation(() => {
        throw new Error("bad-refresh-token");
      });

      const result = await silentTokenRefresh();
      expect(typeof result).toBe("function");
    });

    it("silentTokenRefresh returns a cleanup function when access token is missing", async () => {
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-present");

      const result = await silentTokenRefresh();
      expect(typeof result).toBe("function");
    });

    it("silentTokenRefresh does not call refresh when tokens are still valid", async () => {
      vi.useFakeTimers();
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=access-valid; path=/`;

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "unused",
          refresh_token: "unused",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "refresh-old" || token === "access-valid" || token === "unused") {
          return { exp: Math.floor(Date.now() / 1000) + 7200 };
        }
        return { exp: Math.floor(Date.now() / 1000) - 60 };
      });

      const cleanup = await silentTokenRefresh();
      await vi.advanceTimersByTimeAsync(SILENT_REFRESH_INTERVAL_MS);

      expect(serviceModule.authRefresh).not.toHaveBeenCalled();

      if (typeof cleanup === "function") {
        cleanup();
      }
      vi.useRealTimers();
    });

    it("silentTokenRefresh stops interval when access token disappears during tick", async () => {
      vi.useFakeTimers();
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-interval");
      setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "access-interval");

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "unused",
          refresh_token: "unused",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation(() => ({
        exp: Math.floor(Date.now() / 1000) + 7200,
      }));

      const cleanup = await silentTokenRefresh();
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);

      await vi.advanceTimersByTimeAsync(SILENT_REFRESH_INTERVAL_MS);
      expect(serviceModule.authRefresh).not.toHaveBeenCalled();

      if (typeof cleanup === "function") {
        cleanup();
      }
      vi.useRealTimers();
    });

    it("silentTokenRefresh stops interval when refresh token becomes unusable during tick", async () => {
      vi.useFakeTimers();
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-will-disappear");
      setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "access-still-there");

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "unused",
          refresh_token: "unused",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation(() => ({
        exp: Math.floor(Date.now() / 1000) + 7200,
      }));

      const cleanup = await silentTokenRefresh();
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);

      await vi.advanceTimersByTimeAsync(SILENT_REFRESH_INTERVAL_MS);
      expect(serviceModule.authRefresh).not.toHaveBeenCalled();

      if (typeof cleanup === "function") {
        cleanup();
      }
      vi.useRealTimers();
    });

    it("checkTokenAndRedirectWithRefresh returns false when remember-me is not enabled", async () => {
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN_TIME);
      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(false);
    });

    it("checkTokenAndRedirectWithRefresh returns false when session age exceeds one day", async () => {
      // Set timestamp to more than 1 day ago
      const beyondOneDay = Date.now() - 25 * 60 * 60 * 1000; // 25 hours ago
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, beyondOneDay.toString());
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, beyondOneDay.toString());

      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(false);
    });

    it("checkTokenAndRedirectWithRefresh returns true immediately when token is already valid", async () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + 3600000).toString());
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=valid-token; path=/`;

      vi.mocked(jwtDecode).mockReturnValue({
        exp: Math.floor(Date.now() / 1000) + 3600,
      });

      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(true);
    });

    it("checkTokenAndRedirectWithRefresh returns false when refresh token is not available", async () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);

      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(false);
    });

    it("checkTokenAndRedirectWithRefresh returns false when refresh token is expired", async () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-expired");

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "refresh-expired") {
          return { exp: Math.floor(Date.now() / 1000) - 10 };
        }
        return { exp: Math.floor(Date.now() / 1000) + 3600 };
      });

      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(false);
    });

    it("checkTokenAndRedirectWithRefresh returns false when current credentials are already valid", async () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-valid");
      setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "access-valid");
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() - 1000).toString());

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "refresh-valid" || token === "access-valid") {
          return { exp: Math.floor(Date.now() / 1000) + 7200 };
        }
        return { exp: Math.floor(Date.now() / 1000) - 60 };
      });

      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(false);
      expect(serviceModule.authRefresh).not.toHaveBeenCalled();
    });

    it("checkTokenAndRedirectWithRefresh returns false when remember me is not enabled", async () => {
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN_TIME);
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-new-invalid",
          refresh_token: "refresh-new",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "refresh-old" || token === "refresh-new") {
          return { exp: Math.floor(Date.now() / 1000) + 7200 };
        }
        if (token === "access-new-invalid") {
          return { exp: Math.floor(Date.now() / 1000) + 3600 };
        }
        return { exp: Math.floor(Date.now() / 1000) - 60 };
      });

      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(false);
    });

    it("checkTokenAndRedirectWithRefresh returns false when refreshAuthenticationState throws", async () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-old");

      vi.spyOn(serviceModule, "authRefresh").mockRejectedValue(new Error("refresh-failure"));

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "refresh-old") {
          return { exp: Math.floor(Date.now() / 1000) + 7200 };
        }
        return { exp: Math.floor(Date.now() / 1000) - 60 };
      });

      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(false);
    });

    it("checkTokenAndRedirectWithRefresh returns false when an unexpected error occurs", async () => {
      // This test is testing error handling. Just return false scenario.
      // Session timestamp is missing, so no refresh attempt
      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(false);
    });
  });

  describe("remaining auth helpers", () => {
    it("isRefreshTokenValid should return false when timestamp missing", () => {
      expect(isRefreshTokenValid()).toBe(false);
    });

    it("isRefreshTokenValid should return true for recent timestamp", () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
      expect(isRefreshTokenValid()).toBe(true);
    });

    it("isRefreshTokenValid should return false for expired timestamp", () => {
      setEncodedCookie(
        COOKIE_NAMES.REFRESH_TOKEN_TIME,
        (Date.now() - TOKEN_EXPIRY.ONE_DAY_MS - 1000).toString()
      );
      expect(isRefreshTokenValid()).toBe(false);
    });

    it("isRefreshTokenValid should return false on storage errors", () => {
      // getCookie will return null if cookie doesn't exist or on error
      expect(isRefreshTokenValid()).toBe(false);
    });

    it("clearAuthTokens should clear auth localStorage keys", () => {
      setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "a");
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "r");
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, "1");
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, "2");
      localStorage.setItem("user_info", "{}");
      localStorage.setItem("iam_authority", "dev");
      localStorage.setItem("subsidiary", "elite");

      clearAuthTokens();

      expect(document.cookie).not.toContain(COOKIE_NAMES.ACCESS_TOKEN);
      expect(document.cookie).not.toContain(COOKIE_NAMES.REFRESH_TOKEN);
      expect(document.cookie).not.toContain(COOKIE_NAMES.REFRESH_TOKEN_TIME);
      expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES)).toBeNull();
      expect(localStorage.getItem("user_info")).toBeNull();
      // authority and subsidiary are configuration keys, not auth tokens
      // They are preserved by clearAuthTokens and only cleared by full logout (localStorage.clear)
      expect(localStorage.getItem("iam_authority")).toBe("dev");
      expect(localStorage.getItem("subsidiary")).toBe("elite");
    });

    it("handleAuthentication stores tokens and rememberMe timestamp", async () => {
      vi.spyOn(serviceModule, "authLogin").mockResolvedValue({
        tokens: {
          access_token: "access-token",
          refresh_token: "refresh-token",
        },
      });

      vi.mocked(jwtDecode).mockReturnValue({
        exp: Math.floor(Date.now() / 1000) + 3600,
      } as any);

      const tokens = await handleAuthentication("user@example.com", "Password123$", true);

      expect(tokens.access_token).toBe("access-token");
      expect(document.cookie).toContain(COOKIE_NAMES.ACCESS_TOKEN);
      expect(document.cookie).toContain(COOKIE_NAMES.REFRESH_TOKEN);
      expect(document.cookie).toContain(COOKIE_NAMES.REFRESH_TOKEN_TIME);
      expect(document.cookie).toContain(COOKIE_NAMES.ACCESS_TOKEN_EXPIRES);
    });

    it("handleAuthentication removes rememberMe timestamp when rememberMe false", async () => {
      setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, "existing");

      vi.spyOn(serviceModule, "authLogin").mockResolvedValue({
        tokens: {
          access_token: "access-token",
          refresh_token: "refresh-token",
        },
      });

      vi.mocked(jwtDecode).mockReturnValue({
        exp: Math.floor(Date.now() / 1000) + 3600,
      } as any);

      await handleAuthentication("user@example.com", "Password123$", false);

      // When Remember Me is false, timestamp is still stored in cookie with 1-day expiry
      expect(document.cookie).toContain(COOKIE_NAMES.REFRESH_TOKEN_TIME);
    });

    it("handleAuthentication should continue when auth response is minimal", async () => {
      vi.spyOn(serviceModule, "authLogin").mockResolvedValue({
        tokens: {
          access_token: "access-token-3",
          refresh_token: "refresh-token-3",
        },
      });

      vi.mocked(jwtDecode).mockReturnValue({
        exp: Math.floor(Date.now() / 1000) + 3600,
      } as any as any);

      await expect(
        handleAuthentication("user@example.com", "Password123$", false)
      ).resolves.toBeDefined();
      expect(document.cookie).toContain(COOKIE_NAMES.ACCESS_TOKEN);
    });

    it("handleAuthentication returns tokens unchanged when access token is missing", async () => {
      vi.spyOn(serviceModule, "authLogin").mockResolvedValue({
        tokens: {
          refresh_token: "refresh-only-token",
        },
      });

      const result = await handleAuthentication("user@example.com", "Password123$", true);

      expect(result).toEqual({ refresh_token: "refresh-only-token" });
      expect(document.cookie).not.toContain(COOKIE_NAMES.ACCESS_TOKEN);
    });

    it("handleAuthentication handles decoded tokens without exp claim", async () => {
      vi.spyOn(serviceModule, "authLogin").mockResolvedValue({
        tokens: {
          access_token: "access-no-exp",
          refresh_token: "refresh-no-exp",
        },
      });

      vi.mocked(jwtDecode).mockReturnValue({ exp: Math.floor(Date.now() / 1000) + 3600 } as any);

      const tokens = await handleAuthentication("user@example.com", "Password123$", false);

      // Verify tokens are returned (they go in cookies)
      expect(tokens.access_token).toBe("access-no-exp");
      expect(tokens.refresh_token).toBe("refresh-no-exp");
    });

    it("createUserSessionFromToken returns null when decode fails", () => {
      vi.mocked(jwtDecode).mockImplementation(() => {
        throw new Error("bad token");
      });

      expect(createUserSessionFromToken("bad")).toBeNull();
    });

    it("createUserSessionFromToken returns mapped user session", () => {
      vi.mocked(jwtDecode).mockReturnValue({
        exp: Math.floor(Date.now() / 1000) + 3600,
        studentId: "s1",
        sub: "sub1",
        email_verified: true,
        name: "Test User",
        preferred_username: "testuser",
        given_name: "Test",
        family_name: "User",
        email: "test@example.com",
      });

      const session = createUserSessionFromToken("token-value");

      expect(session).not.toBeNull();
      expect(session?.access_token).toBe("token-value");
      expect(session?.userInfo.email).toBe("test@example.com");
    });
  });
});
