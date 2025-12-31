import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, Root } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const renderMode = (import.meta as any).env.VITE_RENDER_MODE;

if (renderMode === 'TEST') {
  // Standalone testing mode with BrowserRouter
  createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  );
} else {
  // Web Component mode for production deployment
  class KeycloakWidget extends HTMLElement {
    private root?: Root;
    private mountPoint!: HTMLDivElement;

    static get observedAttributes() {
      return ["environment", "subsidiary", "theme"];
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
      this.dispatchEvent(
        new CustomEvent("redirect", {
          detail: { url, userSession },
          bubbles: true,
          composed: true
        })
      );
    }

    private getProps() {
      return {
        redirectUrl: this.getAttribute("redirectUrl") || "/",
        environment: this.getAttribute("environment") || "test",
        subsidiary: this.getAttribute("subsidiary") || "allied",
        theme: this.getAttribute("theme") || "light",
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
