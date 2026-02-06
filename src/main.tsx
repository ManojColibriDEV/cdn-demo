import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, Root } from 'react-dom/client';
import './index.css';
import './theme-variables.css';
import App from './App';
import { createThemeWidget } from './services/theme';
import { getAuthorityFromUrl } from './functions';

const renderMode = (import.meta as any).env.VITE_RENDER_MODE;

// Get widget styles from global (injected by vite plugin)
// Following bloom-elements standard pattern
declare global {
  interface Window {
    __widgetStyles?: Record<string, string>;
  }
}

const widgetStyles =
  typeof window !== 'undefined' ? window.__widgetStyles?.['widget'] || '' : '';

if (renderMode === 'TEST') {
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
    root.style.setProperty('--color-primary', colorValue);
    root.style.setProperty('--color-primary-light', colorValue);
    root.style.setProperty('--button-primary-bg', colorValue);
    root.style.setProperty('--button-primary-bg-hover', colorValue);
    root.style.setProperty('--color-border-focus', colorValue);
  }
  
  createThemeWidget({
    brandFolder: 'allied', // Match the subsidiary in TEST mode
  }).then(() => {
    console.log('[main.tsx] Theme loaded in TEST mode');
  }).catch((error) => {
    console.error('[main.tsx] Failed to load theme in TEST mode:', error);
  });
  
  createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <StrictMode>
        <App 
          authority="dev" 
          subsidiary="allied" 
          showLogin={true}
          autoRedirection={false}
        />
      </StrictMode>
    </BrowserRouter>
  );
} else {
  // Web Component mode for production deployment
  // Following bloom-elements standard pattern with Shadow DOM
  class KeycloakWidget extends HTMLElement {
    private root: Root | null = null;

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
        "autoRedirection"
      ];
    }

    // Store function props
    public onRedirect?: (url: string, userSession?: any) => void;
    public onClose?: () => void;
    public onLogout?: () => void;

    connectedCallback() {
      // Attach shadow DOM for style isolation (bloom-elements standard)
      const shadowRoot = this.attachShadow({ mode: 'open' });
      
      // Inject widget styles into Shadow DOM if available
      if (widgetStyles) {
        const styleElement = document.createElement('style');
        styleElement.textContent = widgetStyles;
        shadowRoot.appendChild(styleElement);
      }
      
      // Apply custom primary color if provided
      this.applyCustomPrimaryColor(shadowRoot);
      
      // Load theme based on subsidiary attribute or auto-detect from domain
      const subsidiary = this.getAttribute("subsidiary");
      if (subsidiary && subsidiary.trim() !== '') {
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
    }
    
    private applyCustomPrimaryColor(shadowRoot: ShadowRoot) {
      // Support both kebab-case (HTML) and camelCase (React/JSX)
      const customColor = this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor");
      if (customColor && customColor.trim() !== '') {
        
        // Create a style element for custom color overrides
        const styleElement = document.createElement('style');
        
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
        console.error('[Widget] Failed to load theme:', error);
        // Continue with default theme if loading fails
      }
    }

    private async loadThemeFromDomain(shadowRoot: ShadowRoot) {
      try {
        console.log('[Widget] No subsidiary provided, attempting auto-detection from domain');
        await createThemeWidget({
          shadowRoot: shadowRoot,
          autoDetect: true,
        });
      } catch (error) {
        console.error('[Widget] Failed to auto-detect theme:', error);
        console.log('[Widget] Using default colors');
      }
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      if (oldValue === newValue) return;
      
      // Re-apply custom color if it changed (support both naming conventions)
      if (name === 'custom-primary-color' || name === 'customPrimaryColor') {
        const shadowRoot = this.shadowRoot;
        if (shadowRoot) {
          this.applyCustomPrimaryColor(shadowRoot);
        }
      }
      
      this.render();
    }

    disconnectedCallback() {
      if (this.root) {
        this.root.unmount();
        this.root = null;
      }
    }

    private handleRedirect = (url: string, userSession?: any) => {
      
      // Call function prop if provided (for React/NPM usage)
      if (this.onRedirect) {
        console.log('[Widget] Calling onRedirect function prop');
        this.onRedirect(url, userSession);
      }
      
      // Dispatch custom event to host page with URL and user session
      const event = new CustomEvent("redirect", {
        detail: { 
          url, 
          userSession,
          tokens: { access_token: userSession?.access_token },
          userInfo: userSession?.userInfo 
        },
        bubbles: true,
        composed: true
      });
      
      this.dispatchEvent(event);
      console.log('[Widget] Redirect event dispatched');
      
      // NOTE: Auto-redirect is now controlled by the App component via autoRedirection prop
      // This widget component should NOT redirect automatically
      // The App component will handle window.location.href if autoRedirection=true
    }

    private handleClose = () => {
      // Call function prop if provided (for React/NPM usage)
      if (this.onClose) {
        console.log('[Widget] Calling onClose function prop');
        this.onClose();
      }
      
      // Dispatch close event when user closes the form
      const event = new CustomEvent("close", {
        bubbles: true,
        composed: true
      });
      
      this.dispatchEvent(event);
      
      // Also remove the show-login attribute
      this.removeAttribute("show-login");
    }

    private getProps() {
      const authorityAttr = this.getAttribute("authority");
      const detectedAuthority = authorityAttr || getAuthorityFromUrl();
      
      // Support both kebab-case (HTML) and camelCase (React/JSX) for autoRedirection
      const autoRedirectionAttr = this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection");
      // Default to true if attribute is not set, false only if explicitly set to "false"
      const autoRedirection = autoRedirectionAttr !== "false";
      
      return {
        authority: detectedAuthority,
        subsidiary: this.getAttribute("subsidiary") || undefined,
        redirectUrl: this.getAttribute("redirectUrl") || undefined,
        loginTitle: this.getAttribute("loginTitle") || undefined,
        loginSubtitle: this.getAttribute("loginSubtitle") || undefined,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || undefined,
        autoRedirection: autoRedirection,
        onRedirect: this.handleRedirect,
        handleClose: this.handleClose,
      };
    }

    // Public API methods
    public login() {
      console.log('[Widget] login() called');
      this.setAttribute("show-login", "true");
    }

    public logout() {
      console.log('[Widget] logout() called');
      // Clear authentication state
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('refresh_token_time');
      
      // Clear cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      
      // Close login form if open
      this.removeAttribute("show-login");
      
      // Call function prop if provided (for React/NPM usage)
      if (this.onLogout) {
        console.log('[Widget] Calling onLogout function prop');
        this.onLogout();
      }
      
      // Dispatch logout event
      const event = new CustomEvent("logout", {
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }

    private render() {
      if (!this.root) return;

      const props = this.getProps();

      this.root.render(
        <BrowserRouter>
          <StrictMode>
            <App {...props} />
          </StrictMode>
        </BrowserRouter>
      );
    }
  }

  // Define the custom element
  if (!customElements.get('keycloak-widget')) {
    customElements.define('keycloak-widget', KeycloakWidget);
  }
}



