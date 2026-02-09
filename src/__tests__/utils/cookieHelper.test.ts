/**
 * Utility Tests: Cookie Helper Functions
 * Tests for cookie operations, domain detection, and URL transformations
 */

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  getCookieDomain,
  getAuthorityFromUrl,
  getDefaultRedirectUrl,
  setAuthCookie,
  clearAuthCookie,
} from "../../utils/cookieHelper";

describe("Cookie Helper Utilities", () => {
  const originalLocation = window.location;

  beforeEach(() => {
    // Clear all cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "location", {
      value: originalLocation,
      writable: true,
    });
  });

  describe("getCookieDomain", () => {
    it("should return empty string for localhost", () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "localhost" },
        writable: true,
      });

      expect(getCookieDomain()).toBe("");
    });

    it("should return empty string for IP address", () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "127.0.0.1" },
        writable: true,
      });

      expect(getCookieDomain()).toBe("");
    });

    it("should return root domain for subdomain", () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "dev.elitelearning.com" },
        writable: true,
      });

      expect(getCookieDomain()).toBe(".elitelearning.com");
    });

    it("should handle multiple subdomains", () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "app.dev.elitelearning.com" },
        writable: true,
      });

      expect(getCookieDomain()).toBe(".elitelearning.com");
    });

    it("should handle different TLDs", () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "test.example.io" },
        writable: true,
      });

      expect(getCookieDomain()).toBe(".example.io");
    });
  });

  describe("getAuthorityFromUrl", () => {
    it('should return "dev" for localhost', () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "localhost" },
        writable: true,
      });

      expect(getAuthorityFromUrl()).toBe("dev");
    });

    it('should return "dev" for IP address', () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "127.0.0.1" },
        writable: true,
      });

      expect(getAuthorityFromUrl()).toBe("dev");
    });

    it("should detect dev environment from hostname", () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "dev.elitelearning.com" },
        writable: true,
      });

      expect(getAuthorityFromUrl()).toBe("dev");
    });

    it("should detect test environment from hostname", () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "test.elitelearning.com" },
        writable: true,
      });

      expect(getAuthorityFromUrl()).toBe("test");
    });

    it("should detect stage environment from hostname", () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "stage.elitelearning.com" },
        writable: true,
      });

      expect(getAuthorityFromUrl()).toBe("stage");
    });

    it('should return "prod" for production domain', () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "elitelearning.com" },
        writable: true,
      });

      expect(getAuthorityFromUrl()).toBe("prod");
    });

    it("should handle environment prefix with hyphen", () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "dev-learn.elitelearning.com" },
        writable: true,
      });

      expect(getAuthorityFromUrl()).toBe("dev");
    });
  });

  describe("getDefaultRedirectUrl", () => {
    it("should transform dev domain to dev-learn", () => {
      Object.defineProperty(window, "location", {
        value: {
          href: "https://dev.elitelearning.com/login",
          protocol: "https:",
          hostname: "dev.elitelearning.com",
        },
        writable: true,
      });

      const redirectUrl = getDefaultRedirectUrl();

      expect(redirectUrl).toBe("https://dev-learn.elitelearning.com/courses");
    });

    it("should transform test domain to test-learn", () => {
      Object.defineProperty(window, "location", {
        value: {
          href: "https://test.elitelearning.com/login",
          protocol: "https:",
          hostname: "test.elitelearning.com",
        },
        writable: true,
      });

      const redirectUrl = getDefaultRedirectUrl();

      expect(redirectUrl).toBe("https://test-learn.elitelearning.com/courses");
    });

    it("should transform stage domain to stage-learn", () => {
      Object.defineProperty(window, "location", {
        value: {
          href: "https://stage.elitelearning.com/login",
          protocol: "https:",
          hostname: "stage.elitelearning.com",
        },
        writable: true,
      });

      const redirectUrl = getDefaultRedirectUrl();

      expect(redirectUrl).toBe("https://stage-learn.elitelearning.com/courses");
    });

    it("should transform production domain to learn subdomain", () => {
      Object.defineProperty(window, "location", {
        value: {
          href: "https://elitelearning.com/login",
          protocol: "https:",
          hostname: "elitelearning.com",
        },
        writable: true,
      });

      const redirectUrl = getDefaultRedirectUrl();

      expect(redirectUrl).toBe("https://learn.elitelearning.com/courses");
    });

    it("should not transform if already a non-env subdomain", () => {
      Object.defineProperty(window, "location", {
        value: {
          href: "https://app.elitelearning.com/login",
          protocol: "https:",
          hostname: "app.elitelearning.com",
        },
        writable: true,
      });

      const redirectUrl = getDefaultRedirectUrl();

      // Should not transform since 'app' is not an env prefix
      expect(redirectUrl).not.toContain("app-learn");
    });
  });

  describe("setAuthCookie", () => {
    it("should set a cookie with the given name and value", () => {
      setAuthCookie("test_cookie", "test_value", 3600);

      const cookies = document.cookie;
      expect(cookies).toContain("test_cookie=test_value");
    });

    it("should encode cookie value by default", () => {
      const specialValue = "value+with=special&chars";
      setAuthCookie("encoded_cookie", specialValue, 3600);

      const cookies = document.cookie;
      expect(cookies).toContain("encoded_cookie=");
      // Value should be encoded
      expect(cookies).not.toContain("value+with=special&chars");
    });

    it("should not encode cookie value when encode=false", () => {
      const rawValue = "plain_value_123";
      setAuthCookie("raw_cookie", rawValue, 3600, false);

      const cookies = document.cookie;
      expect(cookies).toContain("raw_cookie=plain_value_123");
    });

    it("should set cookie with path=/", () => {
      setAuthCookie("path_cookie", "value", 3600);

      // Cookie should be accessible across the domain
      const cookies = document.cookie;
      expect(cookies).toContain("path_cookie=value");
    });
  });

  describe("clearAuthCookie", () => {
    it("should clear an existing cookie", () => {
      // Set a cookie first
      setAuthCookie("temp_cookie", "temp_value", 3600);
      expect(document.cookie).toContain("temp_cookie=temp_value");

      // Clear it
      clearAuthCookie("temp_cookie");

      // Cookie should be removed (or expired)
      const cookies = document.cookie;
      // After clearing, cookie should not have a value or not be present
      expect(cookies).not.toMatch(/temp_cookie=temp_value/);
    });

    it("should handle clearing non-existent cookie", () => {
      // Should not throw error
      expect(() => clearAuthCookie("nonexistent_cookie")).not.toThrow();
    });

    it("should clear multiple cookies independently", () => {
      setAuthCookie("cookie1", "value1", 3600);
      setAuthCookie("cookie2", "value2", 3600);

      clearAuthCookie("cookie1");

      const cookies = document.cookie;
      expect(cookies).not.toContain("cookie1=value1");
      expect(cookies).toContain("cookie2=value2");
    });
  });
});
