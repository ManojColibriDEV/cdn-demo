/**
 * Function Tests: Validation and Authentication Functions
 * Tests for password validation and token handling
 */

import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  validatePassword,
  checkTokenAndRedirect,
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

  describe("remaining auth helpers", () => {
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
