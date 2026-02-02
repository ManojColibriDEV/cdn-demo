import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, Root } from 'react-dom/client';
import './index.css';
import './theme-variables.css';
import App from './App';
import { createThemeWidget } from './services/theme';
import { getAuthorityFromUrl } from './utils/cookieHelper';

const renderMode = (import.meta as any).env.VITE_RENDER_MODE;

if (renderMode === 'TEST') {
  // Apply custom primary color if provided
  const customPrimaryColor = 'red'; // Can be dynamic from config
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
    
    console.log('[TEST mode] Custom primary color applied:', colorValue);
  }
  
  createThemeWidget({
    brandFolder: 'elite', // Match the subsidiary in TEST mode
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
          subsidiary="elite" 
          showLogin={true}
        />
      </StrictMode>
    </BrowserRouter>
  );
} else {
  // Web Component mode for production deployment
  class KeycloakWidget extends HTMLElement {
    private root?: Root;
    private mountPoint!: HTMLDivElement;
    protected _shadowRoot!: ShadowRoot;

    static get observedAttributes() {
      return ["authority", "subsidiary", "redirectUrl", "loginTitle", "loginSubtitle", "show-login", "custom-primary-color", "customPrimaryColor"];
    }

    // Store function props
    public onRedirect?: (url: string, userSession?: any) => void;
    public onClose?: () => void;
    public onLogout?: () => void;

    connectedCallback() {
      // Use Shadow DOM for style isolation
      if (!this._shadowRoot) {
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        
        // Inject widget styles into Shadow DOM
        if (typeof (window as any).injectWidgetStyles === 'function') {
          (window as any).injectWidgetStyles(this._shadowRoot);
        }
        
        // Apply custom primary color if provided
        this.applyCustomPrimaryColor();
        
        // Load theme based on subsidiary attribute or auto-detect from domain
        const subsidiary = this.getAttribute("subsidiary");
        if (subsidiary && subsidiary.trim() !== '') {
          this.loadTheme(subsidiary);
        } else {
          // Auto-detect brand from current domain if no subsidiary provided
          this.loadThemeFromDomain();
        }
      }
      
      this.mountPoint = document.createElement("div");
      this._shadowRoot.appendChild(this.mountPoint);
      this.render();
    }
    
    private applyCustomPrimaryColor() {
      // Support both kebab-case (HTML) and camelCase (React/JSX)
      const customColor = this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor");
      if (customColor && customColor.trim() !== '') {
        console.log(`[Widget] Applying custom primary color: ${customColor}`);
        
        // Create a style element for custom color overrides
        const styleElement = document.createElement('style');
        
        // Validate and format color
        let colorValue = customColor.trim();
        
        // If it's a named color or hex without #, use as-is
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
          
          /* Apply to any elements using primary color */
          * {
            --color-primary: ${colorValue} !important;
          }
        `;
        
        this._shadowRoot.appendChild(styleElement);
        console.log(`[Widget] Custom primary color applied successfully`);
      }
    }
    
    private async loadTheme(subsidiary: string) {
      try {
        console.log(`[Widget] Loading theme for subsidiary: ${subsidiary}`);
        await createThemeWidget({
          brandFolder: subsidiary,
          shadowRoot: this._shadowRoot,
        });
        console.log(`[Widget] Theme loaded successfully for ${subsidiary}`);
      } catch (error) {
        console.error('[Widget] Failed to load theme:', error);
        // Continue with default theme if loading fails
      }
    }

    private async loadThemeFromDomain() {
      try {
        console.log('[Widget] No subsidiary provided, attempting auto-detection from domain');
        await createThemeWidget({
          shadowRoot: this._shadowRoot,
          autoDetect: true,
        });
      } catch (error) {
        console.error('[Widget] Failed to auto-detect theme:', error);
        console.log('[Widget] Using default colors');
      }
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      // Re-apply custom color if it changed (support both naming conventions)
      if ((name === 'custom-primary-color' || name === 'customPrimaryColor') && oldValue !== newValue) {
        this.applyCustomPrimaryColor();
      }
      this.render();
    }

    disconnectedCallback() {
      this.root?.unmount();
    }

    private handleRedirect = (url: string, userSession?: any) => {
      console.log('[Widget] handleRedirect called, url:', url);
      
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
      
      // Auto-redirect in main window if URL is provided (only if no function prop)
      // Add small delay to allow event handlers to process
      if (url && !this.onRedirect) {
        console.log('[Widget] Will redirect to:', url, 'in 200ms');
        setTimeout(() => {
          window.location.href = url;
        }, 200);
      }
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
      
      return {
        authority: detectedAuthority,
        subsidiary: this.getAttribute("subsidiary") || undefined,
        redirectUrl: this.getAttribute("redirectUrl") || undefined,
        loginTitle: this.getAttribute("loginTitle") || undefined,
        loginSubtitle: this.getAttribute("loginSubtitle") || undefined,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || undefined,
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
      localStorage.removeItem('user_state');
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
      if (!this.mountPoint) return;

      if (!this.root) {
        this.root = createRoot(this.mountPoint);
      }

      const props = this.getProps();

      console.log('[Widget] Rendering with props:', props);

      this.root.render(
        <BrowserRouter>
          <StrictMode>
            <App {...props} />
          </StrictMode>
        </BrowserRouter>
      );
    }
  }

  customElements.define("keycloak-widget", KeycloakWidget);
}



