/**
 * Service Tests: Authentication Service
 * Tests for authLogin, authRegister, checkEmail, forgotPassword, authRefresh
 */

import { describe, it, expect, beforeEach, vi } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  authLogin,
  authRegister,
  checkEmail,
  forgotPassword,
  authRefresh,
  fetchSubsidiaries,
  getBrandHeaders,
} from "../../services";
import {
  mockAuthLoginSuccessResponse,
  mockAuthLoginErrorResponse,
  mockAuthLoginUnauthorizedResponse,
  mockRefreshTokenSuccessResponse,
  mockRefreshTokenExpiredResponse,
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

  describe("fetchSubsidiaries", () => {
    it("should fetch and filter subsidiaries by domain", async () => {
      mockAxios.onGet(/\/global\/subsidiaries$/).reply(200, mockSubsidiariesResponse);

      const subsidiaryId = await fetchSubsidiaries("elitelearning.com");

      expect(subsidiaryId).toBe(1);
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
  });

  describe("getBrandHeaders", () => {
    it("should return brand headers when brand data exists", async () => {
      localStorage.setItem("brand_data", JSON.stringify(mockBrandData));
      mockAxios.onGet(/\/global\/subsidiaries$/).reply(200, mockSubsidiariesResponse);

      const headers = await getBrandHeaders();

      expect(headers).toHaveProperty("X-Brand-Id", mockBrandData.id);
      expect(headers).toHaveProperty("X-Brand-Domain", mockBrandData.domain);
      expect(headers).toHaveProperty("X-Subsidiary-Id");
    });

    it("should return empty object when no brand data", async () => {
      localStorage.clear();

      const headers = await getBrandHeaders();

      expect(headers).toEqual({});
    });
  });
});
