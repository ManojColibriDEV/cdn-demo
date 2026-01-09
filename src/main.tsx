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
        <App  authority="dev" subsidiary="elite" isShowToggle={"true"} callbackUrl="http://localhost:5173/" redirectUrl="www.google.com" authMode="redirect"/>
      </StrictMode>
    </BrowserRouter>
  );
} else {
  // Web Component mode for production deployment
  class KeycloakWidget extends HTMLElement {
    private root?: Root;
    private mountPoint!: HTMLDivElement;

    static get observedAttributes() {
      return ["authority", "subsidiary", "theme", "callbackUrl", "isShowToggle", "authMode"];
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

    private getProps() {
      return {
        authority: resolveAuthority(this.getAttribute("authority")),
        subsidiary: this.getAttribute("subsidiary") || "allied",
        theme: this.getAttribute("theme") || "light",
        isShowToggle: this.getAttribute("isShowToggle") || "true",
        callbackUrl: this.getAttribute("callbackUrl") || `${window.location.origin}`,
        redirectUrl: this.getAttribute("redirectUrl") || ``,
        authMode: (this.getAttribute("authMode") as 'popup' | 'redirect' | 'embedded') || 'popup',
        onRedirect: this.handleRedirect,

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
