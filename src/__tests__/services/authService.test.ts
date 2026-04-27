/**
 * Service Tests: Authentication Service
 * Tests for authLogin, authRegister, checkEmail, forgotPassword, authRefresh
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  authLogin,
  authRegister,
  checkEmail,
  forgotPassword,
  forgotUsername,
  authRefresh,
  authLogout,
  authGoogle,
  authApple,
  fetchSubsidiaries,
  getBrandHeaders,
  setAuthorityOverride,
  getAuthorityOverride,
  clearAuthorityOverride,
} from "../../services";
import {
  mockAuthLoginSuccessResponse,
  mockAuthLoginErrorResponse,
  mockAuthLoginUnauthorizedResponse,
  mockRefreshTokenSuccessResponse,
  mockRefreshTokenExpiredResponse,
  mockGetSubsidariesResponse,
} from "../mocks/mockAuthResponses";
import {
  mockCheckEmailAvailableResponse,
  mockCheckEmailTakenResponse,
  mockRegisterSuccessResponse,
  mockRegisterErrorResponse,
  mockRegisterRequestData,
} from "../mocks/mockRegistrationResponses";
import {
  mockForgotPasswordSuccessResponse,
  mockForgotPasswordNotFoundResponse,
} from "../mocks/mockPasswordResetResponses";
import {
  mockForgotUsernameSuccessResponse,
  mockForgotUsernameNotFoundResponse,
} from "../mocks/mockForgotUsernameResponses";
import { mockSubsidiariesResponse, mockBrandData } from "../mocks/mockSubsidiaryResponses";

describe("Authentication Service", () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe("authLogin", () => {
    it("should successfully authenticate user with valid credentials", async () => {
      const username = "john.doe@example.com";
      const password = "SecureP@ss123!";

      mockAxios.onPost(/\/api\/auth/).reply(200, mockAuthLoginSuccessResponse);

      const response = await authLogin(username, password);

      expect(response).toEqual(mockAuthLoginSuccessResponse);
      expect(response.access_token).toBeTruthy();
      expect(response.refresh_token).toBeTruthy();
    });

    it("should throw error for invalid credentials", async () => {
      const username = "wrong@example.com";
      const password = "WrongPassword";

      mockAxios.onPost(/\/api\/auth$/).reply(401, mockAuthLoginUnauthorizedResponse);

      await expect(authLogin(username, password)).rejects.toThrow();
    });

    it("should handle error response with error field", async () => {
      mockAxios.onPost(/\/api\/auth$/).reply(400, mockAuthLoginErrorResponse);

      await expect(authLogin("test@example.com", "password")).rejects.toThrow(
        mockAuthLoginErrorResponse.error
      );
    });

    it("should include brand headers in request", async () => {
      localStorage.setItem("brand_data", JSON.stringify(mockBrandData));
      mockAxios.onGet(/\/global\/subsidiaries$/).reply(200, mockSubsidiariesResponse);
      mockAxios.onPost(/\/api\/auth$/).reply((config) => {
        expect(config.headers).toHaveProperty("X-Brand-Id");
        expect(config.headers).toHaveProperty("X-Brand-Domain");
        return [200, mockAuthLoginSuccessResponse];
      });

      await authLogin("test@example.com", "password");
    });

    it("should handle network errors", async () => {
      mockAxios.onPost(/\/api\/auth$/).networkError();

      await expect(authLogin("test@example.com", "password")).rejects.toThrow();
    });

    it("should fall back to response message field on error", async () => {
      mockAxios.onPost(/\/api\/auth$/).reply(400, { message: "Login error message" });
      await expect(authLogin("test@example.com", "password")).rejects.toThrow(
        "Login error message"
      );
    });

    it("should fall back to generic auth failed message", async () => {
      mockAxios.onPost(/\/api\/auth$/).reply(500, {});
      await expect(authLogin("test@example.com", "password")).rejects.toThrow();
    });

    it("should throw INVALID_CREDENTIALS when status is 401 without error payload", async () => {
      mockAxios.onPost(/\/api\/auth$/).reply(401, {});
      await expect(authLogin("test@example.com", "password")).rejects.toThrow();
    });

    it("should hit final auth failed fallback when thrown error has no fields", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce({});
      await expect(authLogin("test@example.com", "password")).rejects.toThrow();
      spy.mockRestore();
    });
  });

  describe("authRegister", () => {
    it("should successfully register a new user", async () => {
      mockAxios.onPost(/\/api\/register$/).reply(200, mockRegisterSuccessResponse);

      const response = await authRegister(mockRegisterRequestData);

      expect(response).toEqual(mockRegisterSuccessResponse);
      expect(response.success).toBe(true);
    });

    it("should throw error for duplicate email", async () => {
      mockAxios.onPost(/\/api\/register$/).reply(400, mockRegisterErrorResponse);

      await expect(authRegister(mockRegisterRequestData)).rejects.toThrow(
        mockRegisterErrorResponse.details.errorMessage
      );
    });

    it("should handle validation errors", async () => {
      const invalidData = { ...mockRegisterRequestData, password: "123" };
      mockAxios.onPost(/\/api\/register$/).reply(400, {
        error: "Validation failed",
        details: { errorMessage: "Password too weak" },
      });

      await expect(authRegister(invalidData)).rejects.toThrow("Password too weak");
    });

    it("should handle server errors gracefully", async () => {
      mockAxios.onPost(/\/api\/register$/).reply(500, {
        error: "Internal server error",
      });

      await expect(authRegister(mockRegisterRequestData)).rejects.toThrow();
    });

    it("should handle details as a plain string", async () => {
      mockAxios.onPost(/\/api\/register$/).reply(400, {
        details: "String details error",
      });

      await expect(authRegister(mockRegisterRequestData)).rejects.toThrow("String details error");
    });

    it("should handle message field error", async () => {
      mockAxios.onPost(/\/api\/register$/).reply(400, {
        message: "Message field error",
      });

      await expect(authRegister(mockRegisterRequestData)).rejects.toThrow("Message field error");
    });

    it("should throw retry message on 500 without payload details", async () => {
      mockAxios.onPost(/\/api\/register$/).reply(500);
      await expect(authRegister(mockRegisterRequestData)).rejects.toThrow();
    });

    it("should hit final registration failed fallback when thrown error has no fields", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce({});
      await expect(authRegister(mockRegisterRequestData)).rejects.toThrow();
      spy.mockRestore();
    });

    it("should throw plain error message when axios throws Error", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce(new Error("plain-register-error"));
      await expect(authRegister(mockRegisterRequestData)).rejects.toThrow("plain-register-error");
      spy.mockRestore();
    });
  });

  describe("checkEmail", () => {
    it("should return available for new email", async () => {
      const email = "newuser@example.com";
      mockAxios.onPost(/\/api\/check-email$/).reply(200, mockCheckEmailAvailableResponse);

      const response = await checkEmail(email);

      expect(response.exists).toBe(false); // false means available
    });

    it("should return unavailable for existing email", async () => {
      const email = "existing@example.com";
      mockAxios.onPost(/\/api\/check-email$/).reply(200, mockCheckEmailTakenResponse);

      const response = await checkEmail(email);

      expect(response.exists).toBe(true); // true means already taken
    });

    it("should handle 405 method not allowed error", async () => {
      mockAxios.onPost(/\/api\/check-email$/).reply(405);

      await expect(checkEmail("test@example.com")).rejects.toThrow(
        "Email verification service is temporarily unavailable (Method Not Allowed)"
      );
    });

    it("should handle 403 forbidden error", async () => {
      mockAxios.onPost(/\/api\/check-email$/).reply(403);

      await expect(checkEmail("test@example.com")).rejects.toThrow(
        "Access denied to email verification service"
      );
    });

    it("should handle 500 server error", async () => {
      mockAxios.onPost(/\/api\/check-email$/).reply(500);

      await expect(checkEmail("test@example.com")).rejects.toThrow(
        "Email verification service encountered an error"
      );
    });

    it("should handle response error field", async () => {
      mockAxios.onPost(/\/api\/check-email$/).reply(400, { error: "email error" });
      await expect(checkEmail("test@example.com")).rejects.toThrow("email error");
    });

    it("should handle response message field", async () => {
      mockAxios.onPost(/\/api\/check-email$/).reply(400, { message: "email message" });
      await expect(checkEmail("test@example.com")).rejects.toThrow("email message");
    });

    it("should handle generic fallback message", async () => {
      mockAxios.onPost(/\/api\/check-email$/).reply(400, {});
      await expect(checkEmail("test@example.com")).rejects.toThrow("Email verification failed");
    });

    it("should hit unable-to-verify fallback when error has no response and no message", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce({});
      await expect(checkEmail("test@example.com")).rejects.toThrow(
        "Unable to verify email. Please try again."
      );
      spy.mockRestore();
    });
  });

  describe("forgotPassword", () => {
    it("should successfully send reset link", async () => {
      const email = "user@example.com";
      mockAxios.onPost(/\/api\/forgot-password$/).reply(200, mockForgotPasswordSuccessResponse);

      const response = await forgotPassword(email);

      expect(response.success).toBe(true);
      expect(response.message).toContain("reset link");
    });

    it("should handle user not found error", async () => {
      mockAxios.onPost(/\/api\/forgot-password$/).reply(404, mockForgotPasswordNotFoundResponse);

      await expect(forgotPassword("nonexistent@example.com")).rejects.toThrow("Not found");
    });

    it("should handle general errors", async () => {
      mockAxios.onPost(/\/api\/forgot-password$/).reply(500, {
        error: "Server error",
      });

      await expect(forgotPassword("test@example.com")).rejects.toThrow();
    });

    it("should return not-found specific message when 404 has no error body", async () => {
      mockAxios.onPost(/\/api\/forgot-password$/).reply(404, {});
      await expect(forgotPassword("missing@example.com")).rejects.toThrow(
        "We couldn't find an account with that email."
      );
    });

    it("should handle response message field", async () => {
      mockAxios.onPost(/\/api\/forgot-password$/).reply(400, { message: "forgot message" });
      await expect(forgotPassword("test@example.com")).rejects.toThrow("forgot message");
    });

    it("should handle generic fallback error", async () => {
      mockAxios.onPost(/\/api\/forgot-password$/).reply(500, {});
      await expect(forgotPassword("test@example.com")).rejects.toThrow();
    });

    it("should hit reset-link fallback when error has no fields", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce({});
      await expect(forgotPassword("test@example.com")).rejects.toThrow();
      spy.mockRestore();
    });

    it("should use thrown error message when available", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce(new Error("direct-forgot-error"));
      await expect(forgotPassword("test@example.com")).rejects.toThrow("direct-forgot-error");
      spy.mockRestore();
    });
  });

  describe("forgotUsername", () => {
    it("should successfully send verification link", async () => {
      const email = "user@example.com";
      mockAxios.onPost(/\/api\/forgot-username$/).reply(200, mockForgotUsernameSuccessResponse);

      const response = await forgotUsername(email);

      expect(response.success).toBe(true);
      expect(response.message).toContain("verification link");
    });

    it("should handle user not found error", async () => {
      mockAxios.onPost(/\/api\/forgot-username$/).reply(404, mockForgotUsernameNotFoundResponse);

      await expect(forgotUsername("nonexistent@example.com")).rejects.toThrow("Not found");
    });

    it("should handle general errors", async () => {
      mockAxios.onPost(/\/api\/forgot-username$/).reply(500, {
        error: "Server error",
      });

      await expect(forgotUsername("test@example.com")).rejects.toThrow();
    });

    it("should return not-found specific message when 404 has no error body", async () => {
      mockAxios.onPost(/\/api\/forgot-username$/).reply(404, {});
      await expect(forgotUsername("missing@example.com")).rejects.toThrow(
        "We couldn't find an account with that email."
      );
    });

    it("should handle response message field", async () => {
      mockAxios
        .onPost(/\/api\/forgot-username$/)
        .reply(400, { message: "forgot username message" });
      await expect(forgotUsername("test@example.com")).rejects.toThrow("forgot username message");
    });

    it("should handle generic fallback error", async () => {
      mockAxios.onPost(/\/api\/forgot-username$/).reply(500, {});
      await expect(forgotUsername("test@example.com")).rejects.toThrow();
    });

    it("should hit recovery-failed fallback when error has no fields", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce({});
      await expect(forgotUsername("test@example.com")).rejects.toThrow();
      spy.mockRestore();
    });

    it("should use thrown error message when available", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce(new Error("direct-username-error"));
      await expect(forgotUsername("test@example.com")).rejects.toThrow("direct-username-error");
      spy.mockRestore();
    });
  });

  describe("authRefresh", () => {
    it("should successfully refresh access token", async () => {
      const refreshToken = "valid-refresh-token";
      mockAxios.onPost(/\/api\/refresh$/).reply(200, mockRefreshTokenSuccessResponse);

      const response = await authRefresh(refreshToken);

      expect(response.access_token).toBeTruthy();
      expect(response.refresh_token).toBeTruthy();
    });

    it("should handle expired refresh token", async () => {
      const expiredToken = "expired-refresh-token";
      mockAxios.onPost(/\/api\/refresh$/).reply(401, mockRefreshTokenExpiredResponse);

      await expect(authRefresh(expiredToken)).rejects.toThrow();
    });

    it("should handle network errors during refresh", async () => {
      mockAxios.onPost(/\/api\/refresh$/).networkError();

      await expect(authRefresh("some-token")).rejects.toThrow();
    });
  });

  describe("authLogout", () => {
    it("should call logout endpoint with refresh token", async () => {
      const refreshToken = "valid-refresh-token";

      mockAxios.onPost(/\/api\/logout$/).reply((config) => {
        const payload = JSON.parse(config.data as string);
        expect(payload.refresh_token).toBe(refreshToken);
        return [200, { success: true }];
      });

      const response = await authLogout(refreshToken);
      expect(response).toEqual({ success: true });
    });

    it("should throw meaningful message for unauthorized logout", async () => {
      mockAxios.onPost(/\/api\/logout$/).reply(401, {});
      await expect(authLogout("expired-refresh-token")).rejects.toThrow(
        "Logout failed: session is already expired"
      );
    });

    it("should throw error payload from logout response", async () => {
      mockAxios.onPost(/\/api\/logout$/).reply(400, { error: "logout error payload" });
      await expect(authLogout("refresh-token")).rejects.toThrow("logout error payload");
    });

    it("should throw message payload from logout response", async () => {
      mockAxios.onPost(/\/api\/logout$/).reply(400, { message: "logout message payload" });
      await expect(authLogout("refresh-token")).rejects.toThrow("logout message payload");
    });

    it("should throw direct error message when axios throws Error", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce(new Error("direct-logout-error"));
      await expect(authLogout("refresh-token")).rejects.toThrow("direct-logout-error");
      spy.mockRestore();
    });

    it("should throw generic logout failed fallback when error object is empty", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce({});
      await expect(authLogout("refresh-token")).rejects.toThrow("Logout failed");
      spy.mockRestore();
    });
  });

  describe("fetchSubsidiaries", () => {
    it("should fetch and filter subsidiaries by domain", async () => {
      const subsidiary = await fetchSubsidiaries("elitelearning.com");

      expect(subsidiary).toEqual(
        mockGetSubsidariesResponse.find((item) => item?.siteURL?.includes("elitelearning.com"))
      );
    });

    it("should return undefined for non-matching domain", async () => {
      mockAxios.onGet(/\/global\/subsidiaries$/).reply(200, mockSubsidiariesResponse);

      const subsidiaryId = await fetchSubsidiaries("nonexistent.com");

      expect(subsidiaryId).toBeUndefined();
    });

    it("should handle API errors gracefully", async () => {
      mockAxios.onGet(/\/global\/subsidiaries$/).reply(500);

      const subsidiaryId = await fetchSubsidiaries("test.com");

      expect(subsidiaryId).toBeUndefined();
    });

    it("should return undefined when subsidiary lookup throws", async () => {
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      const findSpy = vi.spyOn(mockGetSubsidariesResponse, "find").mockImplementation(() => {
        throw new Error("find-failure");
      });

      const subsidiary = await fetchSubsidiaries("any-domain.com");

      expect(subsidiary).toBeUndefined();
      expect(errorSpy).toHaveBeenCalled();

      findSpy.mockRestore();
      errorSpy.mockRestore();
    });
  });

  describe("getBrandHeaders", () => {
    it("should return brand headers when brand data exists", async () => {
      localStorage.setItem("brand_data", JSON.stringify(mockBrandData));
      const expectedSubsidiary = mockGetSubsidariesResponse.find((item) =>
        item?.siteURL?.includes(mockBrandData.domain)
      );

      const headers = await getBrandHeaders();

      expect(headers).toHaveProperty("X-Brand-Id", expectedSubsidiary?.subsidiaryName);
      expect(headers).toHaveProperty("X-Brand-Domain", mockBrandData.domain);
      expect(headers).toHaveProperty(
        "X-Subsidiary-Id",
        expectedSubsidiary?.subsidiaryId.toString()
      );
    });

    it("should return empty object when no brand data", async () => {
      localStorage.clear();

      const headers = await getBrandHeaders();

      expect(headers).toEqual({});
    });
  });

  describe("authority override helpers", () => {
    it("should set and get authority override", () => {
      setAuthorityOverride("dev");
      expect(getAuthorityOverride()).toBe("dev");
    });

    it("should clear authority override when null is passed", () => {
      setAuthorityOverride("test");
      setAuthorityOverride(null);
      expect(getAuthorityOverride()).toBeNull();
    });

    it("should clear authority override explicitly", () => {
      setAuthorityOverride("stage");
      clearAuthorityOverride();
      expect(getAuthorityOverride()).toBeNull();
    });

    it("should ignore invalid override and fallback to hostname detection", async () => {
      setAuthorityOverride("invalid-env");
      mockAxios.onPost(/\/api\/check-email$/).reply(200, { exists: true });
      const result = await checkEmail("fallback@example.com");
      expect(result.exists).toBe(true);
      clearAuthorityOverride();
    });
  });

  describe("webcomponent url authority detection", () => {
    const originalLocation = window.location;

    afterEach(() => {
      vi.unstubAllEnvs();
      Object.defineProperty(window, "location", {
        value: originalLocation,
        writable: true,
      });
    });

    it("builds full URLs in WEBCOMPONENT mode for dev/test/stage/prod", async () => {
      const hostnames = [
        "dev.elitelearning.com",
        "dev-elitelearning.com",
        "test.elitelearning.com",
        "test-elitelearning.com",
        "stage.elitelearning.com",
        "stage-elitelearning.com",
        "elitelearning.com",
        "localhost",
        "127.0.0.1",
        "192.168.1.50",
      ];

      for (const hostname of hostnames) {
        vi.resetModules();
        vi.stubEnv("VITE_RENDER_MODE", "WEBCOMPONENT");

        Object.defineProperty(window, "location", {
          value: { ...originalLocation, hostname },
          writable: true,
        });

        const axiosModule = await import("axios");
        const localMock = new MockAdapter(axiosModule.default);
        const svc = await import("../../services");

        localMock.onPost().reply((config) => {
          expect(config.url).toContain("/api/check-email");
          return [200, { exists: true }];
        });

        await svc.checkEmail("user@example.com");
        localMock.restore();
      }
    });

    it("uses relative API URLs in TEST mode", async () => {
      vi.resetModules();
      vi.stubEnv("VITE_RENDER_MODE", "TEST");

      const axiosModule = await import("axios");
      const localMock = new MockAdapter(axiosModule.default);
      const svc = await import("../../services");

      localMock.onPost(/\/api\/check-email$/).reply((config) => {
        expect(config.url).toMatch(/\/api\/check-email$/);
        return [200, { exists: true }];
      });

      const response = await svc.checkEmail("test-mode@example.com");
      expect(response.exists).toBe(true);

      localMock.restore();
    });

    it("handles invalid authority override by falling back to hostname", async () => {
      vi.resetModules();
      vi.stubEnv("VITE_RENDER_MODE", "WEBCOMPONENT");
      Object.defineProperty(window, "location", {
        value: { ...originalLocation, hostname: "dev.elitelearning.com" },
        writable: true,
      });

      localStorage.setItem("iam_authority_override", "not-valid");

      const axiosModule = await import("axios");
      const localMock = new MockAdapter(axiosModule.default);
      const svc = await import("../../services");

      localMock.onPost().reply((config) => {
        expect(config.url).toContain("/api/check-email");
        return [200, { exists: true }];
      });

      const response = await svc.checkEmail("fallback2@example.com");
      expect(response.exists).toBe(true);
      localMock.restore();
      localStorage.removeItem("iam_authority_override");
    });

    it("uses valid authority override directly", async () => {
      vi.resetModules();
      vi.stubEnv("VITE_RENDER_MODE", "WEBCOMPONENT");
      Object.defineProperty(window, "location", {
        value: { ...originalLocation, hostname: "elitelearning.com" },
        writable: true,
      });

      localStorage.setItem("iam_authority_override", "dev");

      const axiosModule = await import("axios");
      const localMock = new MockAdapter(axiosModule.default);
      const svc = await import("../../services");

      localMock.onPost().reply((config) => {
        expect(config.url).toContain("/api/check-email");
        return [200, { exists: true }];
      });

      const response = await svc.checkEmail("override@example.com");
      expect(response.exists).toBe(true);
      localMock.restore();
      localStorage.removeItem("iam_authority_override");
    });

    it("uses global API URL branch for /global paths", async () => {
      vi.resetModules();
      vi.stubEnv("VITE_RENDER_MODE", "WEBCOMPONENT");
      Object.defineProperty(window, "location", {
        value: { ...originalLocation, hostname: "dev.elitelearning.com" },
        writable: true,
      });

      const axiosModule = await import("axios");
      const localMock = new MockAdapter(axiosModule.default);
      const svc = await import("../../services");

      localMock.onGet().reply((config) => {
        expect(config.url).toContain("/global/subsidiaries");
        return [200, []];
      });

      await svc.fetchSubsidiaries("none.example.com");
      localMock.restore();
    });
  });

  describe("authGoogle", () => {
    it("should successfully exchange Google authorization code for tokens", async () => {
      const mockResponse = {
        tokens: { access_token: "google-access", refresh_token: "google-refresh" },
      };
      mockAxios.onPost(/\/api\/auth\/google$/).reply(200, mockResponse);

      const response = await authGoogle("google-auth-code-123");

      expect(response.tokens).toEqual(mockResponse.tokens);
    });

    it("should throw error field from response", async () => {
      mockAxios.onPost(/\/api\/auth\/google$/).reply(400, { error: "invalid_grant" });

      await expect(authGoogle("bad-code")).rejects.toThrow("invalid_grant");
    });

    it("should throw message field from response", async () => {
      mockAxios.onPost(/\/api\/auth\/google$/).reply(400, { message: "Google code expired" });

      await expect(authGoogle("expired-code")).rejects.toThrow("Google code expired");
    });

    it("should throw unauthorized error message for 401 status", async () => {
      mockAxios.onPost(/\/api\/auth\/google$/).reply(401, {});

      await expect(authGoogle("unauthorized-code")).rejects.toThrow(
        "Google authentication failed. Please try again."
      );
    });

    it("should throw direct error message when axios throws Error", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce(new Error("network-google-fail"));
      await expect(authGoogle("network-code")).rejects.toThrow("network-google-fail");
      spy.mockRestore();
    });

    it("should throw generic auth failed fallback when error has no fields", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce({});
      await expect(authGoogle("empty-error-code")).rejects.toThrow();
      spy.mockRestore();
    });

    it("should include brand headers in request", async () => {
      localStorage.setItem("brand_data", JSON.stringify(mockBrandData));
      mockAxios.onPost(/\/api\/auth\/google$/).reply((config) => {
        expect(config.headers).toHaveProperty("X-Brand-Domain");
        return [200, { tokens: { access_token: "t" } }];
      });

      await authGoogle("brand-code");
    });
  });

  describe("authApple", () => {
    it("should successfully exchange Apple authorization code for tokens", async () => {
      const mockResponse = {
        tokens: { access_token: "apple-access", refresh_token: "apple-refresh" },
      };
      mockAxios.onPost(/\/api\/auth\/apple$/).reply(200, mockResponse);

      const response = await authApple("apple-auth-code-123");

      expect(response.tokens).toEqual(mockResponse.tokens);
    });

    it("should forward optional user object in request body", async () => {
      const appleUser = { name: { firstName: "Jane", lastName: "Doe" }, email: "jane@example.com" };
      mockAxios.onPost(/\/api\/auth\/apple$/).reply((config) => {
        const body = JSON.parse(config.data);
        expect(body.user).toEqual(appleUser);
        return [200, { tokens: { access_token: "t" } }];
      });

      await authApple("apple-code-with-user", appleUser);
    });

    it("should throw error field from response", async () => {
      mockAxios.onPost(/\/api\/auth\/apple$/).reply(400, { error: "invalid_grant" });

      await expect(authApple("bad-code")).rejects.toThrow("invalid_grant");
    });

    it("should throw message field from response", async () => {
      mockAxios.onPost(/\/api\/auth\/apple$/).reply(400, { message: "Apple code expired" });

      await expect(authApple("expired-code")).rejects.toThrow("Apple code expired");
    });

    it("should throw unauthorized error message for 401 status", async () => {
      mockAxios.onPost(/\/api\/auth\/apple$/).reply(401, {});

      await expect(authApple("unauthorized-code")).rejects.toThrow(
        "Apple authentication failed. Please try again."
      );
    });

    it("should throw direct error message when axios throws Error", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce(new Error("network-apple-fail"));
      await expect(authApple("network-code")).rejects.toThrow("network-apple-fail");
      spy.mockRestore();
    });

    it("should throw generic auth failed fallback when error has no fields", async () => {
      const spy = vi.spyOn(axios, "post").mockRejectedValueOnce({});
      await expect(authApple("empty-error-code")).rejects.toThrow();
      spy.mockRestore();
    });

    it("should include brand headers in request", async () => {
      localStorage.setItem("brand_data", JSON.stringify(mockBrandData));
      mockAxios.onPost(/\/api\/auth\/apple$/).reply((config) => {
        expect(config.headers).toHaveProperty("X-Brand-Domain");
        return [200, { tokens: { access_token: "t" } }];
      });

      await authApple("brand-code");
    });
  });
});
