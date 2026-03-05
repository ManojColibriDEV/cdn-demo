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
      expect(checks.noEmailParts).toBe(true);
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

    it("should fail when password contains email parts", () => {
      const password = "johndoePassword123!";
      const user: UpgradeUser = {
        displayName: "Jane Smith",
        email: "johndoe@example.com",
      };
      const checks = validatePassword(password, user);

      expect(checks.noEmailParts).toBe(false);
    });

    it("should pass when password does not contain name or email parts", () => {
      const password = "CompletelyRandom123!";
      const user: UpgradeUser = {
        displayName: "John Doe",
        email: "john.doe@example.com",
      };
      const checks = validatePassword(password, user);

      expect(checks.noNameParts).toBe(true);
      expect(checks.noEmailParts).toBe(true);
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

    it("should handle empty email local-part when checking email tokens", () => {
      const checks = validatePassword("SecureP@ss123!", {
        displayName: "User Name",
        email: "",
      });
      expect(checks.noEmailParts).toBe(true);
    });

    it("should handle special characters correctly", () => {
      // Allowed special chars: @ . $ % ^ _ -
      const validSpecialChars = ["@", ".", "$", "%", "^", "_", "-"];

      validSpecialChars.forEach((char) => {
        const password = `Password123${char}`;
        const checks = validatePassword(password);

        expect(checks.special).toBe(true);
      });
    });
  });

  describe("checkTokenAndRedirect", () => {
    const mockValidToken = "valid.jwt.token";
    const mockXCredential = "x-credential-value";

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it("should return false when Remember Me not enabled", () => {
      // No refresh_token_time in localStorage
      const result = checkTokenAndRedirect();

      expect(result).toBe(false);
    });

    it("should return false when tokens missing", () => {
      localStorage.setItem("refresh_token_time", Date.now().toString());

      const result = checkTokenAndRedirect();

      expect(result).toBe(false);
    });

    it("should return true when valid tokens exist and Remember Me enabled", () => {
      const futureTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now

      localStorage.setItem("refresh_token_time", Date.now().toString());
      localStorage.setItem("access_token_expires", (Date.now() + 3600000).toString());

      document.cookie = `access_token=${mockValidToken}; path=/`;
      document.cookie = `X-Credential=${mockXCredential}; path=/`;

      // Mock jwt-decode to return valid token
      vi.mocked(jwtDecode).mockReturnValue({
        exp: futureTime,
        sub: "user-id",
        email: "test@example.com",
      });

      const result = checkTokenAndRedirect();

      expect(result).toBe(true);
    });

    it("should return false when token is expired", () => {
      localStorage.setItem("refresh_token_time", Date.now().toString());
      localStorage.setItem("access_token_expires", (Date.now() - 3600000).toString());

      document.cookie = `access_token=${mockValidToken}; path=/`;
      document.cookie = `X-Credential=${mockXCredential}; path=/`;

      const result = checkTokenAndRedirect();

      expect(result).toBe(false);
    });

    it("should work with tokens in localStorage as fallback", () => {
      const futureTime = Math.floor(Date.now() / 1000) + 3600;

      localStorage.setItem("refresh_token_time", Date.now().toString());
      localStorage.setItem("access_token", mockValidToken);
      localStorage.setItem("access_token_expires", (Date.now() + 3600000).toString());

      // X-Credential must be in cookies
      document.cookie = `X-Credential=${mockXCredential}; path=/`;

      vi.mocked(jwtDecode).mockReturnValue({
        exp: futureTime,
        sub: "user-id",
      });

      const result = checkTokenAndRedirect();

      expect(result).toBe(true);
    });

    it("should return false when X-Credential missing", () => {
      const futureTime = Math.floor(Date.now() / 1000) + 3600;

      localStorage.setItem("refresh_token_time", Date.now().toString());
      document.cookie = `access_token=${mockValidToken}; path=/`;

      vi.mocked(jwtDecode).mockReturnValue({
        exp: futureTime,
      });

      const result = checkTokenAndRedirect();

      expect(result).toBe(false);
    });

    it("should redirect when redirectUrl is provided", () => {
      const futureTime = Math.floor(Date.now() / 1000) + 3600;

      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + 3600000).toString());
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=${mockValidToken}; path=/`;
      document.cookie = `${COOKIE_NAMES.X_CREDENTIAL}=${mockXCredential}; path=/`;

      vi.mocked(jwtDecode).mockReturnValue({ exp: futureTime });

      const result = checkTokenAndRedirect("https://example.com/home");

      expect(result).toBe(true);
      expect(window.location.href).toBe("https://example.com/home");
    });

    it("should return false when jwt decode throws", () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + 3600000).toString());
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=${mockValidToken}; path=/`;
      document.cookie = `${COOKIE_NAMES.X_CREDENTIAL}=${mockXCredential}; path=/`;

      vi.mocked(jwtDecode).mockImplementation(() => {
        throw new Error("decode failed");
      });

      expect(checkTokenAndRedirect()).toBe(false);
    });

    it("should return false when decoded token has no exp", () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + 3600000).toString());
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=${mockValidToken}; path=/`;
      document.cookie = `${COOKIE_NAMES.X_CREDENTIAL}=${mockXCredential}; path=/`;

      vi.mocked(jwtDecode).mockReturnValue({});

      expect(checkTokenAndRedirect()).toBe(false);
    });

    it("should validate using cookie token path without localStorage fallback", () => {
      const futureTime = Math.floor(Date.now() / 1000) + 3600;
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + 100000).toString());
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=cookie.jwt.token; path=/`;
      document.cookie = `${COOKIE_NAMES.X_CREDENTIAL}=xc; path=/`;

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
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, oldTime);

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-new",
          refresh_token: "refresh-new",
        },
        x_credential: "x-cred-header",
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "access-new") {
          return {
            exp: Math.floor(Date.now() / 1000) + 3600,
            x_credentials: "x-cred-jwt",
          };
        }
        return { exp: Math.floor(Date.now() / 1000) + 3600 };
      });

      await expect(refreshAuthenticationState()).resolves.toBe(true);

      expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBe("access-new");
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBe("refresh-new");
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).not.toBe(oldTime);
      expect(document.cookie).toContain(`${COOKIE_NAMES.ACCESS_TOKEN}=`);
      expect(document.cookie).toContain(`${COOKIE_NAMES.X_CREDENTIAL}=`);
      expect(document.cookie).toContain(`${COOKIE_NAMES.REFRESH_TOKEN}=`);
    });

    it("refreshAuthenticationState returns false when refreshed access token cannot be decoded", async () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");
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
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");
      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          refresh_token: "refresh-new",
        },
      } as any);

      await expect(refreshAuthenticationState()).resolves.toBe(false);
    });

    it("refreshAuthenticationState returns false when refreshed access token is already expired", async () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");
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
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");
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
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");

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
            x_credentials: "x-cred-jwt",
          };
        }
        return { exp: Math.floor(Date.now() / 1000) + 3600 };
      });

      await expect(refreshAuthenticationState()).resolves.toBe(true);
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
    });

    it("refreshAuthenticationState succeeds when refresh token is not rotated", async () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-no-rotate",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "access-no-rotate") {
          return {
            exp: Math.floor(Date.now() / 1000) + 3600,
            x_credentials: "x-cred-jwt",
          };
        }
        return { exp: Math.floor(Date.now() / 1000) + 3600 };
      });

      await expect(refreshAuthenticationState()).resolves.toBe(true);
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBe("refresh-old");
    });

    it("refreshAuthenticationState returns false when authRefresh throws", async () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");
      vi.spyOn(serviceModule, "authRefresh").mockRejectedValue(new Error("refresh-api-error"));

      await expect(refreshAuthenticationState()).resolves.toBe(false);
    });

    it("checkTokenAndRedirectWithRefresh refreshes and then validates token state", async () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-new",
          refresh_token: "refresh-new",
        },
        x_credential: "x-cred-header",
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "refresh-old" || token === "refresh-new") {
          return { exp: Math.floor(Date.now() / 1000) + 7200 };
        }
        if (token === "access-new") {
          return {
            exp: Math.floor(Date.now() / 1000) + 3600,
            x_credentials: "x-cred-jwt",
          };
        }
        if (token === "x-cred-header") {
          return { exp: Math.floor(Date.now() / 1000) + 3600 };
        }
        return { exp: Math.floor(Date.now() / 1000) + 3600 };
      });

      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(true);
    });

    it("silentTokenRefresh starts interval and triggers refresh flow", async () => {
      vi.useFakeTimers();
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access-old");

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "access-silent",
          refresh_token: "refresh-silent",
        },
        x_credential: "x-cred-silent",
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
            x_credentials: "x-cred-silent",
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

    it("silentTokenRefresh returns true when no usable refresh token exists", async () => {
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access-present");
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "bad-refresh-token");

      vi.mocked(jwtDecode).mockImplementation(() => {
        throw new Error("bad-refresh-token");
      });

      await expect(silentTokenRefresh()).resolves.toBe(true);
    });

    it("silentTokenRefresh returns true when access token is missing", async () => {
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-present");

      await expect(silentTokenRefresh()).resolves.toBe(true);
    });

    it("silentTokenRefresh does not call refresh when access and x-credential are still valid", async () => {
      vi.useFakeTimers();
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=access-valid; path=/`;
      document.cookie = `${COOKIE_NAMES.X_CREDENTIAL}=xcred-valid; path=/`;

      vi.spyOn(serviceModule, "authRefresh").mockResolvedValue({
        tokens: {
          access_token: "unused",
          refresh_token: "unused",
        },
      } as any);

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (
          token === "refresh-old" ||
          token === "access-valid" ||
          token === "xcred-valid" ||
          token === "unused"
        ) {
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
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-interval");
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access-interval");

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
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-will-disappear");
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access-still-there");

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

    it("checkTokenAndRedirectWithRefresh returns true immediately when token is already valid", async () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + 3600000).toString());
      document.cookie = `${COOKIE_NAMES.ACCESS_TOKEN}=valid-token; path=/`;
      document.cookie = `${COOKIE_NAMES.X_CREDENTIAL}=valid-xcred; path=/`;

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
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-expired");

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
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-valid");
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "access-valid");
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() - 1000).toString());
      document.cookie = `${COOKIE_NAMES.X_CREDENTIAL}=xcred-valid; path=/`;

      vi.mocked(jwtDecode).mockImplementation((token: any) => {
        if (token === "refresh-valid" || token === "access-valid" || token === "xcred-valid") {
          return { exp: Math.floor(Date.now() / 1000) + 7200 };
        }
        return { exp: Math.floor(Date.now() / 1000) - 60 };
      });

      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(false);
      expect(serviceModule.authRefresh).not.toHaveBeenCalled();
    });

    it("checkTokenAndRedirectWithRefresh returns false when refresh succeeded but validation still fails", async () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");

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
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-old");

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
      const storageSpy = vi
        .spyOn(Storage.prototype, "getItem")
        .mockImplementation((key: string) => {
          if (key === STORAGE_KEYS.REFRESH_TOKEN_TIME) {
            throw new Error("storage-explosion");
          }
          return null;
        });

      await expect(checkTokenAndRedirectWithRefresh()).resolves.toBe(false);
      storageSpy.mockRestore();
    });
  });

  describe("remaining auth helpers", () => {
    it("validatePassword handles undefined email safely", () => {
      const checks = validatePassword("StrongPass123$", {
        displayName: "User Name",
        email: undefined as any,
      });

      expect(checks.noEmailParts).toBe(true);
    });

    it("isRefreshTokenValid should return false when timestamp missing", () => {
      expect(isRefreshTokenValid()).toBe(false);
    });

    it("isRefreshTokenValid should return true for recent timestamp", () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      expect(isRefreshTokenValid()).toBe(true);
    });

    it("isRefreshTokenValid should return false for expired timestamp", () => {
      localStorage.setItem(
        STORAGE_KEYS.REFRESH_TOKEN_TIME,
        (Date.now() - TOKEN_EXPIRY.REFRESH_TOKEN_MAX_AGE_MS - 1000).toString()
      );
      expect(isRefreshTokenValid()).toBe(false);
    });

    it("isRefreshTokenValid should return false on storage errors", () => {
      const storageSpy = vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
        throw new Error("storage broken");
      });
      expect(isRefreshTokenValid()).toBe(false);
      storageSpy.mockRestore();
    });

    it("clearAuthTokens should clear auth localStorage keys", () => {
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "a");
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "r");
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, "1");
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, "2");
      localStorage.setItem("user_info", "{}");
      localStorage.setItem("authority", "dev");
      localStorage.setItem("subsidiary", "elite");

      clearAuthTokens();

      expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBeNull();
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBeNull();
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
      expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES)).toBeNull();
      expect(localStorage.getItem("user_info")).toBeNull();
      expect(localStorage.getItem("authority")).toBeNull();
      expect(localStorage.getItem("subsidiary")).toBeNull();
    });

    it("handleAuthentication stores tokens and rememberMe timestamp", async () => {
      vi.spyOn(serviceModule, "authLogin").mockResolvedValue({
        tokens: {
          access_token: "access-token",
          refresh_token: "refresh-token",
        },
        x_credential: "x-credential-header",
      });

      vi.mocked(jwtDecode).mockReturnValue({
        exp: Math.floor(Date.now() / 1000) + 3600,
        x_credentials: "x-credential-jwt",
      });

      const tokens = await handleAuthentication("user@example.com", "Password123$", true);

      expect(tokens.access_token).toBe("access-token");
      expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBe("access-token");
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBe("refresh-token");
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeTruthy();
      expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES)).toBeTruthy();
    });

    it("handleAuthentication removes rememberMe timestamp when rememberMe false", async () => {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, "existing");

      vi.spyOn(serviceModule, "authLogin").mockResolvedValue({
        tokens: {
          access_token: "access-token-2",
          refresh_token: "refresh-token-2",
        },
      });

      vi.mocked(jwtDecode).mockReturnValue({
        exp: Math.floor(Date.now() / 1000) + 3600,
        x_credentials: "x-credential-jwt",
      });

      await handleAuthentication("user@example.com", "Password123$", false);

      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
    });

    it("handleAuthentication should continue when x_credential is missing", async () => {
      vi.spyOn(serviceModule, "authLogin").mockResolvedValue({
        tokens: {
          access_token: "access-token-3",
          refresh_token: "refresh-token-3",
        },
      });

      vi.mocked(jwtDecode).mockReturnValue({
        exp: Math.floor(Date.now() / 1000) + 3600,
      });

      await expect(
        handleAuthentication("user@example.com", "Password123$", false)
      ).resolves.toBeDefined();
      expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBe("access-token-3");
    });

    it("handleAuthentication returns tokens unchanged when access token is missing", async () => {
      vi.spyOn(serviceModule, "authLogin").mockResolvedValue({
        tokens: {
          refresh_token: "refresh-only-token",
        },
      });

      const result = await handleAuthentication("user@example.com", "Password123$", true);

      expect(result).toEqual({ refresh_token: "refresh-only-token" });
      expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBeNull();
    });

    it("handleAuthentication handles decoded tokens without exp claim", async () => {
      vi.spyOn(serviceModule, "authLogin").mockResolvedValue({
        tokens: {
          access_token: "access-no-exp",
          refresh_token: "refresh-no-exp",
        },
      });

      vi.mocked(jwtDecode).mockReturnValue({
        x_credentials: "xcred-no-exp",
      } as any);

      await expect(
        handleAuthentication("user@example.com", "Password123$", false)
      ).resolves.toBeDefined();
      expect(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)).toBe("access-no-exp");
    });

    it("handleAuthentication should hit no-x_credential warning branch", async () => {
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      vi.spyOn(serviceModule, "authLogin").mockResolvedValue({
        tokens: {
          access_token: "access-token-4",
          refresh_token: "refresh-token-4",
        },
      });

      vi.mocked(jwtDecode).mockReturnValue({ exp: Math.floor(Date.now() / 1000) + 3600 });

      await handleAuthentication("user@example.com", "Password123$", false);
      expect(warnSpy).toHaveBeenCalled();
      warnSpy.mockRestore();
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
        x_credentials: "x1",
        name: "Test User",
        preferred_username: "testuser",
        given_name: "Test",
        family_name: "User",
        email: "test@example.com",
      });

      const session = createUserSessionFromToken("token-value");

      expect(session).not.toBeNull();
      expect(session?.access_token).toBe("token-value");
      expect(session?.decoded.x_credentials).toBe("x1");
      expect(session?.userInfo.email).toBe("test@example.com");
    });
  });
});
