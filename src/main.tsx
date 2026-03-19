import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot, Root } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import "./theme-variables.css";
import App from "./App";
import { createThemeWidget } from "./services/theme";
import { authLogout } from "./services";
import { getAuthorityFromUrl, clearAuthTokens, getCookie } from "./functions";
import { COOKIE_NAMES, STORAGE_KEYS } from "./constants";

const renderMode = (import.meta as any).env.VITE_RENDER_MODE;
const GOOGLE_CLIENT_ID =
  (import.meta as any).env.VITE_GOOGLE_CLIENT_ID ||
  "832956972051-o6rtl5uehltu7di3cmrvao44mdh54911.apps.googleusercontent.com";

// Get widget styles from global (injected by vite plugin)
// Following bloom-elements standard pattern
declare global {
  interface Window {
    __widgetStyles?: Record<string, string>;
  }
}

const widgetStyles = typeof window !== "undefined" ? window.__widgetStyles?.["widget"] || "" : "";

if (renderMode === "TEST") {
  // Apply custom primary color if provided
  const customPrimaryColor = "violet"; // Can be dynamic from config
  if (customPrimaryColor) {
    let colorValue = customPrimaryColor.trim();

    // If it's just hex digits, add # prefix
    if (/^[0-9A-Fa-f]{6}$/.test(colorValue)) {
      colorValue = `#${colorValue}`;
    }

    // Apply to document root for TEST mode
    const root = document.documentElement;
    root.style.setProperty("--color-primary", colorValue);
    root.style.setProperty("--color-primary-light", colorValue);
    root.style.setProperty("--button-primary-bg", colorValue);
    root.style.setProperty("--button-primary-bg-hover", colorValue);
    root.style.setProperty("--color-border-focus", colorValue);
  }

  createThemeWidget({
    brandFolder: "elite", // Match the subsidiary in TEST mode
  })
    .then(() => {
      console.log("[main.tsx] Theme loaded in TEST mode");
    })
    .catch((error) => {
      console.error("[main.tsx] Failed to load theme in TEST mode:", error);
    });

  createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <StrictMode>
          <App
            subsidiary="elite"
            showLogin={true}
            autoRedirection={false}
            googleClientId={GOOGLE_CLIENT_ID}
            onTokenValidityCheck={(isTokenValid) => {
              console.log(`[main.tsx] Token valid: ${isTokenValid}`);
            }}
          />
        </StrictMode>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
} else {
  // Web Component mode for production deployment
  // Following bloom-elements standard pattern with Shadow DOM
  class KeycloakWidget extends HTMLElement {
    private root: Root | null = null;
    private isLogoutInProgress = false;

    static get observedAttributes() {
      return [
        "authority",
        "subsidiary",
        "redirectUrl",
        "loginTitle",
        "loginSubtitle",
        "show-login",
        "custom-primary-color",
        "customPrimaryColor",
        "auto-redirection",
        "autoRedirection",
        "google-client-id",
        "googleClientId",
        "redirect-url",
        "login-title",
        "login-subtitle",
      ];
    }

    // Store function props
    public onRedirect?: (url: string, userSession?: any) => void;
    public onClose?: () => void;
    public onLogout?: () => void;
    public onTokenValidityCheck?: (isTokenValid: boolean) => void;

    connectedCallback() {
      // Attach shadow DOM for style isolation (bloom-elements standard)
      const shadowRoot = this.attachShadow({ mode: "open" });

      // Inject widget styles into Shadow DOM if available
      if (widgetStyles) {
        const styleElement = document.createElement("style");
        styleElement.textContent = widgetStyles;
        shadowRoot.appendChild(styleElement);
      }

      // Apply custom primary color if provided
      this.applyCustomPrimaryColor(shadowRoot);

      // Load theme based on subsidiary attribute or auto-detect from domain
      const subsidiary = this.getAttribute("subsidiary");
      if (subsidiary && subsidiary.trim() !== "") {
        this.loadTheme(subsidiary, shadowRoot);
      } else {
        // Auto-detect brand from current domain if no subsidiary provided
        this.loadThemeFromDomain(shadowRoot);
      }

      // Create mount point for React
      const mountPoint = document.createElement("div");
      shadowRoot.appendChild(mountPoint);

      // Create React root and render
      this.root = createRoot(mountPoint);
      this.render();

      // Allow host applications to trigger logout by dispatching a "logout" event on the element
      this.addEventListener("logout", this.handleExternalLogoutEvent as EventListener);
    }

    private applyCustomPrimaryColor(shadowRoot: ShadowRoot) {
      // Support both kebab-case (HTML) and camelCase (React/JSX)
      const customColor =
        this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor");
      if (customColor && customColor.trim() !== "") {
        // Create a style element for custom color overrides
        const styleElement = document.createElement("style");

        // Validate and format color
        let colorValue = customColor.trim();

        // If it's just hex digits, add # prefix
        if (/^[0-9A-Fa-f]{6}$/.test(colorValue)) {
          colorValue = `#${colorValue}`;
        }

        styleElement.textContent = `
          :host {
            --color-primary: ${colorValue};
            --color-primary-light: ${colorValue};
            --button-primary-bg: ${colorValue};
            --button-primary-bg-hover: ${colorValue};
            --color-border-focus: ${colorValue};
          }
        `;

        shadowRoot.appendChild(styleElement);
        console.log(`[Widget] Custom primary color applied successfully`);
      }
    }

    private async loadTheme(subsidiary: string, shadowRoot: ShadowRoot) {
      try {
        await createThemeWidget({
          brandFolder: subsidiary,
          shadowRoot: shadowRoot,
        });
      } catch (error) {
        console.error("[Widget] Failed to load theme:", error);
        // Continue with default theme if loading fails
      }
    }

    private async loadThemeFromDomain(shadowRoot: ShadowRoot) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain");
        await createThemeWidget({
          shadowRoot: shadowRoot,
          autoDetect: true,
        });
      } catch (error) {
        console.error("[Widget] Failed to auto-detect theme:", error);
        console.log("[Widget] Using default colors");
      }
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      if (oldValue === newValue) return;

      // Re-apply custom color if it changed (support both naming conventions)
      if (name === "custom-primary-color" || name === "customPrimaryColor") {
        const shadowRoot = this.shadowRoot;
        if (shadowRoot) {
          this.applyCustomPrimaryColor(shadowRoot);
        }
      }

      this.render();
    }

    disconnectedCallback() {
      this.removeEventListener("logout", this.handleExternalLogoutEvent as EventListener);

      if (this.root) {
        this.root.unmount();
        this.root = null;
      }
    }

    private handleExternalLogoutEvent = async (event: Event) => {
      const customEvent = event as CustomEvent<{ initiatedByWidget?: boolean }>;

      // Only handle logout events dispatched directly on this widget instance.
      // Ignore bubbled descendant events to prevent unintended auto-logout.
      if (event.target !== this) {
        return;
      }

      // Ignore events emitted by this widget instance itself to avoid recursion
      if (customEvent.detail?.initiatedByWidget) {
        return;
      }

      await this.executeLogout("event");
    };

    private async executeLogout(trigger: "method" | "event") {
      if (this.isLogoutInProgress) {
        return;
      }

      this.isLogoutInProgress = true;

      try {
        const refreshToken =
          getCookie(COOKIE_NAMES.REFRESH_TOKEN, true) ||
          localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

        if (refreshToken) {
          await authLogout(refreshToken);
          console.log("[Widget] Logout API call completed");
        } else {
          console.warn("[Widget] No refresh token found, skipping logout API call");
        }
      } catch (error) {
        console.error("[Widget] Logout API call failed:", error);
      } finally {
        // Always clear local auth state, regardless of API response
        clearAuthTokens();
        localStorage.clear();
        sessionStorage.clear();

        // Close login form if open
        this.removeAttribute("show-login");

        // Call function prop if provided (for React/NPM usage)
        if (this.onLogout) {
          console.log("[Widget] Calling onLogout function prop");
          this.onLogout();
        }

        // Dispatch logout completion event for host pages
        // Works for both external event-triggered and method-triggered logout
        // External listeners can filter using detail.initiatedByWidget
        const event = new CustomEvent("logout", {
          detail: { initiatedByWidget: true, trigger },
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(event);

        this.isLogoutInProgress = false;
      }
    }

    private handleRedirect = (url: string, userSession?: any) => {
      // Call function prop if provided (for React/NPM usage)
      if (this.onRedirect) {
        console.log("[Widget] Calling onRedirect function prop");
        this.onRedirect(url, userSession);
      }

      // Dispatch custom event to host page with URL and user session
      const event = new CustomEvent("redirect", {
        detail: {
          url,
          userSession,
          tokens: { access_token: userSession?.access_token },
          userInfo: userSession?.userInfo,
        },
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(event);
      console.log("[Widget] Redirect event dispatched");

      // NOTE: Auto-redirect is now controlled by the App component via autoRedirection prop
      // This widget component should NOT redirect automatically
      // The App component will handle window.location.href if autoRedirection=true
    };

    private handleClose = () => {
      // Call function prop if provided (for React/NPM usage)
      if (this.onClose) {
        console.log("[Widget] Calling onClose function prop");
        this.onClose();
      }

      // Dispatch close event when user closes the form
      const event = new CustomEvent("close", {
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(event);

      // Also remove the show-login attribute
      this.removeAttribute("show-login");
    };

    private handleTokenValidity = (isTokenValid: boolean) => {
      // Call function prop if provided (for React/NPM usage)
      if (this.onTokenValidityCheck) {
        this.onTokenValidityCheck(isTokenValid);
      }

      // Dispatch token validity status event with boolean detail
      const event = new CustomEvent("is-token-valid", {
        detail: isTokenValid,
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(event);
    };

    private getProps() {
      const authorityAttr = this.getAttribute("authority");
      const detectedAuthority = authorityAttr || getAuthorityFromUrl();

      // Support both kebab-case (HTML) and camelCase (React/JSX) for autoRedirection
      const autoRedirectionAttr =
        this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection");
      // Default to true if attribute is not set, false only if explicitly set to "false"
      const autoRedirection = autoRedirectionAttr !== "false";

      return {
        authority: detectedAuthority,
        subsidiary: this.getAttribute("subsidiary") || undefined,
        redirectUrl:
          this.getAttribute("redirect-url") || this.getAttribute("redirectUrl") || undefined,
        loginTitle:
          this.getAttribute("login-title") || this.getAttribute("loginTitle") || undefined,
        loginSubtitle:
          this.getAttribute("login-subtitle") || this.getAttribute("loginSubtitle") || undefined,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor:
          this.getAttribute("custom-primary-color") ||
          this.getAttribute("customPrimaryColor") ||
          undefined,
        autoRedirection: autoRedirection,
        googleClientId:
          this.getAttribute("google-client-id") ||
          this.getAttribute("googleClientId") ||
          GOOGLE_CLIENT_ID,
        onRedirect: this.handleRedirect,
        onTokenValidityCheck: this.handleTokenValidity,
        handleClose: this.handleClose,
      };
    }

    // Public API methods
    public login() {
      console.log("[Widget] login() called");
      this.setAttribute("show-login", "true");
    }

    public logout() {
      console.log("[Widget] logout() called");
      void this.executeLogout("method");
    }

    private render() {
      if (!this.root) return;

      const props = this.getProps();

      this.root.render(
        <GoogleOAuthProvider clientId={props.googleClientId || GOOGLE_CLIENT_ID}>
          <BrowserRouter>
            <StrictMode>
              <App {...props} />
            </StrictMode>
          </BrowserRouter>
        </GoogleOAuthProvider>
      );
    }
  }

  // Define the custom element
  if (!customElements.get("keycloak-widget")) {
    customElements.define("keycloak-widget", KeycloakWidget);
  }
}
