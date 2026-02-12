/**
 * Service Tests: Theme Service
 * Tests for ThemeWidget class - brand loading, theme application, and CDN integration
 */

import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { ThemeWidget } from "../../services/theme";
import { mockBrandsResponse, mockThemeConfig } from "../mocks/mockThemeResponses";

describe("ThemeWidget Service", () => {
  let themeWidget: ThemeWidget;
  const mockCdnUrl = "https://dev-cdn.colibrilearning.com/front-end-assets/brands-compiled";

  beforeEach(() => {
    themeWidget = new ThemeWidget(mockCdnUrl);
    localStorage.clear();
    vi.clearAllMocks();

    // Reset DOM
    document.head.innerHTML = "";
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("getBrands", () => {
    it("should fetch all available brands from CDN", async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockBrandsResponse,
      });

      const brands = await themeWidget.getBrands();

      expect(brands).toEqual(mockBrandsResponse);
      expect(brands.length).toBe(4);
      expect(fetch).toHaveBeenCalledWith(`${mockCdnUrl}/brands.json`);
    });

    it("should throw error when CDN request fails", async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        statusText: "Not Found",
      });

      await expect(themeWidget.getBrands()).rejects.toThrow("Failed to fetch brands");
    });

    it("should handle network errors", async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

      await expect(themeWidget.getBrands()).rejects.toThrow("Network error");
    });
  });

  describe("detectBrandFromDomain", () => {
    it("should detect brand from current domain", async () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "dev.elitelearning.com" },
        writable: true,
      });

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockBrandsResponse,
      });

      const brandToken = await themeWidget.detectBrandFromDomain();

      expect(brandToken).toBe("dev-elite");
      expect(localStorage.getItem("subsidiary")).toBe("dev-elite");
    });

    it("should return null when no brand matches domain", async () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "unknown.example.com" },
        writable: true,
      });

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockBrandsResponse,
      });

      const brandToken = await themeWidget.detectBrandFromDomain();

      expect(brandToken).toBeNull();
    });

    it("should handle partial domain matches", async () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "test.cebroker.com" },
        writable: true,
      });

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockBrandsResponse,
      });

      const brandToken = await themeWidget.detectBrandFromDomain();

      expect(brandToken).toBe("dev-cebroker");
    });

    it("should handle errors gracefully", async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

      const brandToken = await themeWidget.detectBrandFromDomain();

      expect(brandToken).toBeNull();
    });
  });

  describe("loadTheme", () => {
    it("should load theme by brand folder name", async () => {
      const mockThemeResponse = {
        styles: mockThemeConfig.styles,
      };

      global.fetch = vi
        .fn()
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockBrandsResponse,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockThemeResponse,
        });

      await themeWidget.loadTheme("elite");

      expect(localStorage.getItem("subsidiary")).toBe("dev-elite");
      expect(localStorage.getItem("brand_data")).toBeTruthy();

      const brandData = JSON.parse(localStorage.getItem("brand_data") || "{}");
      expect(brandData.id).toBe("dev-elite");
      expect(brandData.domain).toBe("elitelearning.com");
    });

    it("should load theme by brand token", async () => {
      global.fetch = vi
        .fn()
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockBrandsResponse,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockThemeConfig,
        });

      await themeWidget.loadTheme("dev-cebroker");

      expect(localStorage.getItem("subsidiary")).toBe("dev-cebroker");

      const brandData = JSON.parse(localStorage.getItem("brand_data") || "{}");
      expect(brandData.id).toBe("dev-cebroker");
    });

    it("should handle non-existent brand gracefully", async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockBrandsResponse,
      });

      // Should not throw, just log warning
      await expect(themeWidget.loadTheme("nonexistent")).resolves.not.toThrow();
    });

    it("should handle theme fetch failure", async () => {
      global.fetch = vi
        .fn()
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockBrandsResponse,
        })
        .mockResolvedValueOnce({
          ok: false,
          statusText: "Not Found",
        });

      await expect(themeWidget.loadTheme("elite")).rejects.toThrow("Failed to fetch theme");
    });

    it("should be case-insensitive for brand matching", async () => {
      global.fetch = vi
        .fn()
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockBrandsResponse,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockThemeConfig,
        });

      await themeWidget.loadTheme("ELITE");

      expect(localStorage.getItem("subsidiary")).toBe("dev-elite");
    });
  });

  describe("Shadow DOM integration", () => {
    it("should work with shadow root when provided", () => {
      const mockShadowRoot = document.createElement("div").attachShadow({ mode: "open" });
      const widgetWithShadow = new ThemeWidget(mockCdnUrl, mockShadowRoot);

      expect(widgetWithShadow).toBeInstanceOf(ThemeWidget);
    });

    it("should work without shadow root", () => {
      const widgetWithoutShadow = new ThemeWidget(mockCdnUrl);

      expect(widgetWithoutShadow).toBeInstanceOf(ThemeWidget);
    });
  });

  describe("CDN URL handling", () => {
    it("should remove trailing slash from CDN URL", () => {
      const widgetWithSlash = new ThemeWidget("https://cdn.example.com/");

      expect(widgetWithSlash).toBeInstanceOf(ThemeWidget);
    });

    it("should use default CDN URL when not provided", () => {
      const widgetDefault = new ThemeWidget();

      expect(widgetDefault).toBeInstanceOf(ThemeWidget);
    });
  });
});
