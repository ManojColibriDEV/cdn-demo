/**
 * Theme Widget Service
 * Loads and applies brand-specific CSS variables from Colibri CDN
 * Based on @bloom-elements/core-theme functionality
 */

import type { BrandConfig, ThemeConfig } from "../types";

export class ThemeWidget {
  private cdnBaseUrl: string;
  private currentBrand: BrandConfig | null = null;
  private styleElement: HTMLStyleElement | null = null;
  private shadowRoot: ShadowRoot | null = null;

  constructor(
    cdnBaseUrl: string = "https://dev-cdn.colibrilearning.com/front-end-assets/brands-compiled",
    shadowRoot?: ShadowRoot
  ) {
    this.cdnBaseUrl = cdnBaseUrl.replace(/\/$/, ""); // Remove trailing slash
    this.shadowRoot = shadowRoot || null;
  }

  /**
   * Fetch all available brands from CDN
   */
  async getBrands(): Promise<BrandConfig[]> {
    try {
      const response = await fetch(`${this.cdnBaseUrl}/brands.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch brands: ${response.statusText}`);
      }
      const brands: BrandConfig[] = await response.json();
      return brands;
    } catch (error) {
      console.error("[ThemeWidget] Error fetching brands:", error);
      throw error;
    }
  }

  /**
   * Auto-detect brand based on current URL domain.
   * On localhost (any port), checks localStorage keys bloom-theme-brand and
   * clx_brand_folder first so local development can override the brand without
   * a matching domain.
   */
  async detectBrandFromDomain(): Promise<string | null> {
    try {
      const currentDomain = window.location.hostname;
      const isLocalhost =
        currentDomain === "localhost" ||
        currentDomain === "127.0.0.1" ||
        /^\d+\.\d+\.\d+\.\d+$/.test(currentDomain);

      if (isLocalhost) {
        const stripQuotes = (val: string) => val.replace(/^["']+|["']+$/g, "").trim();

        const bloomBrand = localStorage.getItem("bloom-theme-brand");
        const clxBrand = localStorage.getItem("clx_brand_folder");
        const localBrand = bloomBrand ?? clxBrand;

        if (localBrand) {
          const identifier = stripQuotes(localBrand);
          if (identifier) {
            console.log(
              `[ThemeWidget] localhost: using localStorage brand override "${identifier}"`
            );
            return identifier;
          }
        }

        console.log("[ThemeWidget] localhost: no brand override found in localStorage");
        return null;
      }

      const brands = await this.getBrands();

      // Find brand by matching domain
      const brand = brands.find(
        (b) => currentDomain.includes(b.domain) || b.domain.includes(currentDomain)
      );

      if (brand) {
        localStorage.setItem("subsidiary", brand.token);
        return brand.token;
      }

      console.log(`[ThemeWidget] No brand matched for domain: ${currentDomain}`);
      return null;
    } catch (error) {
      console.error("[ThemeWidget] Error detecting brand from domain:", error);
      return null;
    }
  }

  /**
   * Load theme for a specific brand by folder name or token
   */
  async loadTheme(brandFolderOrToken: string): Promise<void> {
    try {
      // Get all brands to find matching one
      const brands = await this.getBrands();
      const brand = brands.find(
        (b) =>
          b.folder.toLowerCase() === brandFolderOrToken.toLowerCase() ||
          b.token.toLowerCase() === brandFolderOrToken.toLowerCase()
      );

      if (!brand) {
        console.warn(`[ThemeWidget] Brand not found: ${brandFolderOrToken}. Using default theme.`);
        sessionStorage.setItem("theme_loaded", "true");
        window.dispatchEvent(new Event("theme-loaded"));
        return;
      }

      localStorage.setItem("subsidiary", brand.token);
      localStorage.setItem(
        "brand_data",
        JSON.stringify({
          id: brand.folder, // Use folder name (e.g., "elite") instead of token (e.g., "dev-elite")
          domain: brand.domain,
          name: brand.name,
        })
      );

      // Fetch theme configuration
      const themeUrl = `${this.cdnBaseUrl}/${brand.folder}/theme.json`;
      const response = await fetch(themeUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch theme: ${response.statusText}`);
      }

      const themeConfig: ThemeConfig = await response.json();

      // Apply theme styles using Shadow DOM when available (production),
      // otherwise to document root (TEST mode)
      if (this.shadowRoot) {
        // Web Component mode: inject CSS variables into Shadow DOM only
        // This ensures styles are isolated and won't be overridden by host page styles
        this.applyThemeToShadowDOM(themeConfig);
      } else {
        // TEST mode: apply to document root for easier debugging
        const root = document.documentElement;
        themeConfig.styles.forEach((token) => {
          let value = token.value;

          // If value is space-separated RGB → wrap with rgb()
          if (/^\d+\s\d+\s\d+$/.test(value)) {
            value = `rgb(${value})`;
          }

          root.style.setProperty(`--${token.name}`, value);
        });
      }

      this.currentBrand = brand;

      console.log(`[ThemeWidget] Theme loaded for brand: ${brand.name}`);

      // Signal that theme has loaded so brand config checks can proceed
      sessionStorage.setItem("theme_loaded", "true");
      window.dispatchEvent(new Event("theme-loaded"));
    } catch (error) {
      console.error("[ThemeWidget] Error loading theme:", error);
      // Still signal completion so the banner check can run (it will detect missing brand data)
      sessionStorage.setItem("theme_loaded", "true");
      window.dispatchEvent(new Event("theme-loaded"));
      throw error;
    }
  }

  /**
   * Apply theme styles to Shadow DOM using CSS variables
   * This ensures complete style isolation from host page styles
   */
  private applyThemeToShadowDOM(themeConfig: ThemeConfig): void {
    if (!this.shadowRoot) return;

    // Generate CSS variables from theme
    const cssVariables = themeConfig.styles
      .map((token) => {
        let value = token.value;

        // If value is space-separated RGB → wrap with rgb()
        if (/^\d+\s\d+\s\d+$/.test(value)) {
          value = `rgb(${value})`;
        }

        return `  --${token.name}: ${value};`;
      })
      .join("\n");

    // Create style element with :host selector for Shadow DOM scope
    const styleElement = document.createElement("style");
    styleElement.setAttribute("data-theme-widget", "true");
    styleElement.textContent = `:host {\n${cssVariables}\n}`;

    // Inject into Shadow DOM for complete style isolation
    this.shadowRoot.appendChild(styleElement);
  }

  /**
   * Apply theme styles by injecting CSS variables
   */
  private applyTheme(themeConfig: ThemeConfig): void {
    // Generate CSS from theme styles
    const cssVariables = themeConfig.styles
      .map((style) => {
        const value = this.formatStyleValue(style.value);
        return `  --${style.name}: ${value};`;
      })
      .join("\n");

    const css = `@theme {\n${cssVariables}\n}\n\n:host {\n${cssVariables}\n}`;

    // Remove existing style element if present
    this.removeTheme();

    // Create and inject style element
    this.styleElement = document.createElement("style");
    this.styleElement.setAttribute("data-theme-widget", "true");
    this.styleElement.textContent = css;

    // Inject into Shadow DOM if available, otherwise into document head
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(this.styleElement);
    } else {
      document.head.appendChild(this.styleElement);
    }
  }

  /**
   * Format style values to proper CSS format
   */
  private formatStyleValue(value: string): string {
    // Check if it's a hex color
    if (/^#?[0-9A-Fa-f]{6}$/.test(value)) {
      return value.startsWith("#") ? value : `#${value}`;
    }

    // Check if it's RGB values (e.g., "255 87 51")
    if (/^\d+\s+\d+\s+\d+$/.test(value)) {
      return `rgba(${value.replace(/\s+/g, ", ")}, 1)`;
    }

    // Return as-is for other values
    return value;
  }

  /**
   * Remove currently applied theme
   */
  removeTheme(): void {
    if (this.styleElement) {
      this.styleElement.remove();
      this.styleElement = null;
    }
    this.currentBrand = null;
  }

  /**
   * Get currently loaded brand
   */
  getCurrentBrand(): BrandConfig | null {
    return this.currentBrand;
  }
}

/**
 * Factory function to create and optionally auto-load theme
 */
export async function createThemeWidget(options: {
  brandFolder?: string;
  brandToken?: string;
  cdnBaseUrl?: string;
  shadowRoot?: ShadowRoot;
  autoDetect?: boolean;
}): Promise<ThemeWidget> {
  const widget = new ThemeWidget(options.cdnBaseUrl, options.shadowRoot);

  const brandIdentifier = options.brandFolder || options.brandToken;

  if (brandIdentifier) {
    // Use provided brand
    await widget.loadTheme(brandIdentifier);
  } else if (options.autoDetect) {
    // Auto-detect from domain if no brand provided
    const detectedToken = await widget.detectBrandFromDomain();
    if (detectedToken) {
      await widget.loadTheme(detectedToken);
    } else {
      // No brand detected — still signal theme loading is done
      sessionStorage.setItem("theme_loaded", "true");
      window.dispatchEvent(new Event("theme-loaded"));
    }
  } else {
    // No brand identifier or auto-detect — signal completion
    sessionStorage.setItem("theme_loaded", "true");
    window.dispatchEvent(new Event("theme-loaded"));
  }

  return widget;
}
