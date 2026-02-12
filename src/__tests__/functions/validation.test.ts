/**
 * Function Tests: Validation and Authentication Functions
 * Tests for password validation and token handling
 */

import { describe, it, expect, beforeEach, vi } from "vitest";
import { validatePassword, checkTokenAndRedirect } from "../../functions";
import type { UpgradeUser } from "../../types";
import { jwtDecode } from "jwt-decode";

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
  });
});
