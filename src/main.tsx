import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, Root } from 'react-dom/client';
import './index.css';
import App from './App';
import { resolveAuthority } from './utils/authorityResolver';

const renderMode = (import.meta as any).env.VITE_RENDER_MODE;

if (renderMode === 'TEST') {
  // Standalone testing mode with BrowserRouter
  createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <StrictMode>
        <App authority="dev" subsidiary="elite" redirectUrl="www.google.com" showLogin={true} />
      </StrictMode>
    </BrowserRouter>
  );
} else {
  // Web Component mode for production deployment
  class KeycloakWidget extends HTMLElement {
    private root?: Root;
    private mountPoint!: HTMLDivElement;
    private showLoginState: boolean = false;

    static get observedAttributes() {
      return ["authority", "subsidiary", "redirectUrl", "show-login"];
    }

    connectedCallback() {
      this.mountPoint = document.createElement("div");
      this.appendChild(this.mountPoint);
      this.render();
    }

    attributeChangedCallback() {
      this.render();
    }

    disconnectedCallback() {
      this.root?.unmount();
    }

    private handleRedirect = (url: string, userSession?: any) => {
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
      
      // Auto-redirect in main window if URL is provided
      if (url) {
        console.log('[Widget] Redirecting to:', url);
        window.location.href = url;
      }
    }

    private handleClose = () => {
      console.log('[Widget] Close event triggered');
      this.showLoginState = false;
      this.removeAttribute("show-login");
      
      // Dispatch close event
      const event = new CustomEvent("close", {
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
      
      this.render();
    }

    // Public API method to open login form
    public login() {
      console.log('[Widget] login() called');
      this.showLoginState = true;
      this.setAttribute("show-login", "true");
      this.render();
    }

    // Public API method to logout
    public logout() {
      console.log('[Widget] logout() called');
      // Clear authentication state
      localStorage.removeItem('user_state');
      localStorage.removeItem('decoded');
      localStorage.removeItem('brand');
      
      // Clear cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      
      this.showLoginState = false;
      this.removeAttribute("show-login");
      
      // Dispatch logout event
      const event = new CustomEvent("logout", {
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
      
      this.render();
    }

    private getProps() {
      const showLogin = this.getAttribute("show-login") === "true" || this.showLoginState;
      
      return {
        authority: resolveAuthority(this.getAttribute("authority")),
        subsidiary: this.getAttribute("subsidiary") || "allied",
        redirectUrl: this.getAttribute("redirectUrl") || undefined,
        showLogin: showLogin,
        onRedirect: this.handleRedirect,
        handleClose: this.handleClose,
      };
    }

    private render() {
      if (!this.mountPoint) return;

      if (!this.root) {
        this.root = createRoot(this.mountPoint);
      }

      this.root.render(
        <StrictMode>
          <BrowserRouter>
            <App {...this.getProps()} />
          </BrowserRouter>
        </StrictMode>
      );
    }
  }

  // Register web component
  if (!customElements.get("keycloak-widget")) {
    customElements.define("keycloak-widget", KeycloakWidget);
  }
}
