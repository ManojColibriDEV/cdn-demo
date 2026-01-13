import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, Root } from 'react-dom/client';
import './index.css';
import App from './App';
import { resolveAuthority } from './utils/authorityResolver';
import keycloak from './auth/keycloak'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { saveTokens, getTokens, clearTokens } from './utils/tokenStorage'


const renderMode = (import.meta as any).env.VITE_RENDER_MODE;

if (renderMode === 'TEST') {
  // Try to restore tokens from localStorage before initialization
  const storedTokens = getTokens();
  
  if (storedTokens.token && storedTokens.refreshToken) {
    console.log('[Main] Restoring tokens from localStorage');
    keycloak.token = storedTokens.token;
    keycloak.refreshToken = storedTokens.refreshToken;
    keycloak.idToken = storedTokens.idToken || undefined;
  }

  // Standalone testing mode with BrowserRouter
  createRoot(document.getElementById('root')!).render(
    <ReactKeycloakProvider 
      authClient={keycloak}
      initOptions={{
        onLoad: 'check-sso',
        checkLoginIframe: false,
        pkceMethod: 'S256',
        enableLogging: true,
        token: storedTokens.token || undefined,
        refreshToken: storedTokens.refreshToken || undefined,
        idToken: storedTokens.idToken || undefined,
      }}
      onTokens={(tokens) => {
        if (tokens.token) {
          saveTokens(tokens.token, tokens.refreshToken, tokens.idToken);
        }
      }}
      onEvent={(event, error) => {
        console.log('[Keycloak Event]:', event, error);
        if (event === 'onAuthRefreshError' || event === 'onAuthLogout') {
          console.log('[Keycloak] Clearing stored tokens');
          clearTokens();
        }
      }}
    >
      <BrowserRouter>
        <StrictMode>
          <App  authority="dev" subsidiary="elite" isShowToggle={"true"} callbackUrl="http://localhost:5173/"  authMode="redirect" redirectUrl="http://www.google.com/"/>
        </StrictMode>
      </BrowserRouter>
    </ReactKeycloakProvider>
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

      // Try to restore tokens from localStorage before initialization
      const storedTokens = getTokens();
      if (storedTokens.token && storedTokens.refreshToken) {
        console.log('[Main] Restoring tokens from localStorage');
        keycloak.token = storedTokens.token;
        keycloak.refreshToken = storedTokens.refreshToken;
        keycloak.idToken = storedTokens.idToken || undefined;
      }

      this.root.render(
        <ReactKeycloakProvider 
          authClient={keycloak}
          initOptions={{
            onLoad: 'check-sso',
            checkLoginIframe: false,
            pkceMethod: 'S256',
            enableLogging: true,
            token: storedTokens.token || undefined,
            refreshToken: storedTokens.refreshToken || undefined,
            idToken: storedTokens.idToken || undefined,
          }}
          onTokens={(tokens) => {
            console.log('[Keycloak] Tokens received:', { 
              hasAccessToken: !!tokens.token, 
              hasRefreshToken: !!tokens.refreshToken 
            });
            if (tokens.token) {
              console.log('[Keycloak] Saving tokens to localStorage');
              saveTokens(tokens.token, tokens.refreshToken, tokens.idToken);
            }
          }}
          onEvent={(event, error) => {
            console.log('[Keycloak Event]:', event, error);
            if (event === 'onAuthRefreshError' || event === 'onAuthLogout') {
              console.log('[Keycloak] Clearing stored tokens');
              clearTokens();
            }
          }}
        >
          <StrictMode>
            <BrowserRouter>
              <App {...this.getProps()} />
            </BrowserRouter>
          </StrictMode>
        </ReactKeycloakProvider>
      );
    }
  }

  // Register web component
  if (!customElements.get("keycloak-widget")) {
    customElements.define("keycloak-widget", KeycloakWidget);
  }
}
