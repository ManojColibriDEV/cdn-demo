import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, Root } from 'react-dom/client';
import './index.css';
import App from './App';

const renderMode = (import.meta as any).env.VITE_RENDER_MODE;

if (renderMode === 'TEST') {
  // Standalone testing mode with BrowserRouter
  console.log('[main.tsx] Rendering in TEST mode');
  createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <StrictMode>
        <App 
          authority="dev" 
          subsidiary="elite" 
          isShowToggle={"true"} 
          callbackUrl="http://localhost:5173/"
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
    private shadowRoot!: ShadowRoot;

    static get observedAttributes() {
      return ["authority", "subsidiary", "callbackUrl", "redirectUrl", "isShowToggle", "loginTitle", "loginSubtitle", "show-login"];
    }

    // Store function props
    public onRedirect?: (url: string, userSession?: any) => void;
    public onClose?: () => void;
    public onLogout?: () => void;

    connectedCallback() {
      // Use Shadow DOM for style isolation
      if (!this.shadowRoot) {
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        
        // Inject widget styles into Shadow DOM
        if (typeof (window as any).injectWidgetStyles === 'function') {
          (window as any).injectWidgetStyles(this.shadowRoot);
        }
      }
      
      this.mountPoint = document.createElement("div");
      this.shadowRoot.appendChild(this.mountPoint);
      this.render();
    }

    attributeChangedCallback() {
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
      return {
        authority: this.getAttribute("authority") || "dev",
        subsidiary: this.getAttribute("subsidiary") || "allied",
        isShowToggle: this.getAttribute("isShowToggle") || "true",
        callbackUrl: this.getAttribute("callbackUrl") || `${window.location.origin}`,
        redirectUrl: this.getAttribute("redirectUrl") || ``,
        loginTitle: this.getAttribute("loginTitle") || undefined,
        loginSubtitle: this.getAttribute("loginSubtitle") || undefined,
        showLogin: this.getAttribute("show-login") === "true",
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



