import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, Root } from 'react-dom/client';
import './index.css';
import App from './App';

const renderMode = (import.meta as any).env.VITE_RENDER_MODE;

console.log('[main.tsx] VITE_RENDER_MODE:', renderMode);
console.log('[main.tsx] All env vars:', import.meta.env);

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
        />
      </StrictMode>
    </BrowserRouter>
  );
} else {
  // Web Component mode for production deployment
  class KeycloakWidget extends HTMLElement {
    private root?: Root;
    private mountPoint!: HTMLDivElement;

    static get observedAttributes() {
      return ["authority", "subsidiary", "callbackUrl", "redirectUrl", "isShowToggle"];
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
        authority: this.getAttribute("authority") || "dev",
        subsidiary: this.getAttribute("subsidiary") || "allied",
        isShowToggle: this.getAttribute("isShowToggle") || "true",
        callbackUrl: this.getAttribute("callbackUrl") || `${window.location.origin}`,
        redirectUrl: this.getAttribute("redirectUrl") || ``,
        onRedirect: this.handleRedirect,
      };
    }

    private render() {
      if (!this.mountPoint) return;

      if (!this.root) {
        this.root = createRoot(this.mountPoint);
      }

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

  customElements.define("keycloak-widget", KeycloakWidget);
}



