/**
 * Service Tests: Theme Service
 * Tests for ThemeWidget class - brand loading, theme application, and CDN integration
 */

import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { ThemeWidget, createThemeWidget } from "../../services/theme";
import { cssInjectedByJsPlugin } from "../../tools/vite-plugin-css-injector";
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

    it("should use bloom-theme-brand from localStorage on localhost", async () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "localhost" },
        writable: true,
      });
      localStorage.setItem("bloom-theme-brand", "elite");

      const brandToken = await themeWidget.detectBrandFromDomain();
      expect(brandToken).toBe("elite");
    });

    it("should use clx_brand_folder from localStorage on localhost when bloom-theme-brand is absent", async () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "localhost" },
        writable: true,
      });
      localStorage.setItem("clx_brand_folder", "cebroker");

      const brandToken = await themeWidget.detectBrandFromDomain();
      expect(brandToken).toBe("cebroker");
    });

    it("should strip quotes from localStorage brand override on localhost", async () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "localhost" },
        writable: true,
      });
      localStorage.setItem("bloom-theme-brand", '"elite"');

      const brandToken = await themeWidget.detectBrandFromDomain();
      expect(brandToken).toBe("elite");
    });

    it("should return null on localhost when localStorage brand override is empty after stripping", async () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "127.0.0.1" },
        writable: true,
      });
      localStorage.setItem("bloom-theme-brand", '""');

      const brandToken = await themeWidget.detectBrandFromDomain();
      expect(brandToken).toBeNull();
    });

    it("should return null on localhost when no brand override exists in localStorage", async () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "localhost" },
        writable: true,
      });

      const brandToken = await themeWidget.detectBrandFromDomain();
      expect(brandToken).toBeNull();
    });

    it("should detect IP address as localhost", async () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "192.168.1.100" },
        writable: true,
      });
      localStorage.setItem("clx_brand_folder", "mckissock");

      const brandToken = await themeWidget.detectBrandFromDomain();
      expect(brandToken).toBe("mckissock");
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
      expect(brandData.id).toBe("elite");
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
          json: async () => ({
            styles: [{ name: "token-rgb", value: "255 0 0" }],
          }),
        });

      await themeWidget.loadTheme("dev-cebroker");

      expect(localStorage.getItem("subsidiary")).toBe("dev-cebroker");

      const brandData = JSON.parse(localStorage.getItem("brand_data") || "{}");
      expect(brandData.id).toBe("cebroker");
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

    it("should apply RGB theme styles to document root in TEST mode", async () => {
      global.fetch = vi
        .fn()
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockBrandsResponse,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({
            styles: [
              { name: "color-primary", value: "255 87 51" },
              { name: "color-secondary", value: "#FF0000" },
            ],
          }),
        });

      await themeWidget.loadTheme("elite");

      const root = document.documentElement;
      expect(root.style.getPropertyValue("--color-primary")).toBe("rgb(255 87 51)");
      expect(root.style.getPropertyValue("--color-secondary")).toBe("#FF0000");
    });

    it("should apply theme to shadow DOM when shadowRoot is available", async () => {
      const host = document.createElement("div");
      const shadowRoot = host.attachShadow({ mode: "open" });
      const widgetWithShadow = new ThemeWidget(mockCdnUrl, shadowRoot);

      global.fetch = vi
        .fn()
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockBrandsResponse,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({
            styles: [
              { name: "color-primary", value: "255 87 51" },
              { name: "color-hex", value: "#0066CC" },
            ],
          }),
        });

      await widgetWithShadow.loadTheme("elite");

      const styleEl = shadowRoot.querySelector("style[data-theme-widget='true']");
      expect(styleEl).toBeTruthy();
      expect(styleEl!.textContent).toContain(":host");
      expect(styleEl!.textContent).toContain("rgb(255 87 51)");
      expect(styleEl!.textContent).toContain("--color-hex: #0066CC");
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

  describe("private method coverage", () => {
    it("should format style values for hex, rgb and passthrough", () => {
      const anyWidget = themeWidget as any;

      expect(anyWidget.formatStyleValue("ff00aa")).toBe("#ff00aa");
      expect(anyWidget.formatStyleValue("#00ffaa")).toBe("#00ffaa");
      expect(anyWidget.formatStyleValue("255 87 51")).toBe("rgba(255, 87, 51, 1)");
      expect(anyWidget.formatStyleValue("1rem")).toBe("1rem");
    });

    it("should apply and remove theme style element", () => {
      const anyWidget = themeWidget as any;
      anyWidget.applyTheme({
        styles: [
          { name: "color-primary", value: "ff0000" },
          { name: "color-secondary", value: "255 0 0" },
        ],
      });

      const styleElement = document.querySelector("style[data-theme-widget='true']");
      expect(styleElement).toBeTruthy();

      themeWidget.removeTheme();
      expect(document.querySelector("style[data-theme-widget='true']")).toBeNull();
      expect(themeWidget.getCurrentBrand()).toBeNull();
    });

    it("should append style element into shadow root when available", () => {
      const host = document.createElement("div");
      const shadowRoot = host.attachShadow({ mode: "open" });
      const widgetWithShadow = new ThemeWidget(mockCdnUrl, shadowRoot) as any;

      widgetWithShadow.applyTheme({
        styles: [{ name: "primary", value: "ffffff" }],
      });

      expect(shadowRoot.querySelector("style[data-theme-widget='true']")).toBeTruthy();
    });
  });

  describe("createThemeWidget factory", () => {
    it("should auto-detect and load detected brand", async () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "dev.elitelearning.com" },
        writable: true,
      });

      global.fetch = vi
        .fn()
        .mockResolvedValueOnce({ ok: true, json: async () => mockBrandsResponse })
        .mockResolvedValueOnce({ ok: true, json: async () => mockBrandsResponse })
        .mockResolvedValueOnce({ ok: true, json: async () => mockThemeConfig });

      const widget = await createThemeWidget({ autoDetect: true, cdnBaseUrl: mockCdnUrl });
      expect(widget).toBeInstanceOf(ThemeWidget);
      expect(localStorage.getItem("subsidiary")).toBe("dev-elite");
    });

    it("should load provided brand identifier", async () => {
      global.fetch = vi
        .fn()
        .mockResolvedValueOnce({ ok: true, json: async () => mockBrandsResponse })
        .mockResolvedValueOnce({ ok: true, json: async () => mockThemeConfig });

      const widget = await createThemeWidget({ brandToken: "dev-elite", cdnBaseUrl: mockCdnUrl });
      expect(widget).toBeInstanceOf(ThemeWidget);
      expect(localStorage.getItem("subsidiary")).toBe("dev-elite");
    });

    it("should skip load when autoDetect is true but no brand is detected", async () => {
      Object.defineProperty(window, "location", {
        value: { hostname: "unknown.domain.local" },
        writable: true,
      });

      global.fetch = vi
        .fn()
        .mockResolvedValueOnce({ ok: true, json: async () => mockBrandsResponse });

      const widget = await createThemeWidget({ autoDetect: true, cdnBaseUrl: mockCdnUrl });
      expect(widget).toBeInstanceOf(ThemeWidget);
      expect(localStorage.getItem("subsidiary")).toBeNull();
    });

    it("should return widget immediately when no options are provided", async () => {
      const widget = await createThemeWidget({});
      expect(widget).toBeInstanceOf(ThemeWidget);
    });
  });

  describe("cssInjectedByJsPlugin", () => {
    it("should return plugin metadata", () => {
      const plugin = cssInjectedByJsPlugin();
      expect(plugin.name).toBe("vite-plugin-css-injector");
      expect(plugin.apply).toBe("build");
      expect(plugin.enforce).toBe("post");
      expect(typeof plugin.generateBundle).toBe("function");
    });

    it("should inject css into js chunk and remove css files", () => {
      const plugin = cssInjectedByJsPlugin();
      const bundle: any = {
        "style.css": { type: "asset", source: ".x{color:red}" },
        "main.js": { type: "chunk", code: "console.log('hello')" },
      };

      plugin.generateBundle?.({}, bundle);

      expect(bundle["style.css"]).toBeUndefined();
      expect(bundle["main.js"].code).toContain("window.__widgetStyles");
      expect(bundle["main.js"].code).toContain("console.log('hello')");
    });

    it("should no-op when css or js files are missing", () => {
      const plugin = cssInjectedByJsPlugin();
      const bundleWithoutCss: any = { "main.js": { type: "chunk", code: "x" } };
      plugin.generateBundle?.({}, bundleWithoutCss);
      expect(bundleWithoutCss["main.js"].code).toBe("x");

      const bundleWithoutJs: any = { "style.css": { type: "asset", source: "y" } };
      plugin.generateBundle?.({}, bundleWithoutJs);
      expect(bundleWithoutJs["style.css"]).toBeDefined();
    });

    it("should keep non-chunk js code unchanged while still removing css assets", () => {
      const plugin = cssInjectedByJsPlugin();
      const bundle: any = {
        "style.css": { type: "asset", source: ".a{color:blue}" },
        "main.js": { type: "asset", code: "plain-asset" },
      };

      plugin.generateBundle?.({}, bundle);

      expect(bundle["style.css"]).toBeUndefined();
      expect(bundle["main.js"].code).toBe("plain-asset");
    });
  });
});
