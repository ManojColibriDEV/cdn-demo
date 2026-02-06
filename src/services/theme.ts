/**
 * Theme Widget Service
 * Loads and applies brand-specific CSS variables from Colibri CDN
 * Based on @bloom-elements/core-theme functionality
 */

import type { BrandConfig, ThemeConfig } from "../types";


export const getSubsidiaryId = {
  mckissock: 1,
  elite: 2,
  cre: 3,
  superior: 16,
  allied: 20,
  xcel: 21,
  western: 22,
  cex: 23,
  fhea: 25,
  hondros: 29,
  compucram: 31,
  rockwell: 35,
  goldcoast: 36,
  netce: 58,
  stc: 137,
  colibrigroup: 142
}

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
     * Auto-detect brand based on current URL domain
     */
    async detectBrandFromDomain(): Promise<string | null> {
        try {
            const brands = await this.getBrands();
            const currentDomain = window.location.hostname;
            
            // Find brand by matching domain
            const brand = brands.find((b) => 
                currentDomain.includes(b.domain) || b.domain.includes(currentDomain)
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
                console.warn(
                    `[ThemeWidget] Brand not found: ${brandFolderOrToken}. Using default theme.`
                );
                return;
            }
            console.log("functionfunctionfunction", brand)

             localStorage.setItem("subsidiary", brand.token);
             localStorage.setItem("brand_data", JSON.stringify({
                id: brand.folder,
                domain: brand.domain,
                name: brand.name,
                subsidiaryId: getSubsidiaryId[brand.token as keyof typeof getSubsidiaryId] || 0
             })); // Assuming token format like "dev-brand1"

            // Fetch theme configuration
            const themeUrl = `${this.cdnBaseUrl}/${brand.folder}/theme.json`;
            const response = await fetch(themeUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch theme: ${response.statusText}`);
            }

            const themeConfig: ThemeConfig = await response.json();
            const root = document.documentElement;
            themeConfig.styles.forEach(token => {
                let value = token.value;

                // If value is space-separated RGB → wrap with rgb()
                if (/^\d+\s\d+\s\d+$/.test(value)) {
                    value = `rgb(${value})`;
                }

                root.style.setProperty(`--${token.name}`, value);
            })
            this.currentBrand = brand;

            // Apply theme styles
            // this.applyTheme(themeConfig);

            console.log(`[ThemeWidget] Theme loaded for brand: ${brand.name}`);
        } catch (error) {
            console.error("[ThemeWidget] Error loading theme:", error);
            throw error;
        }
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
        }
    }

    return widget;
}
