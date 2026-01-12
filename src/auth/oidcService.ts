import Keycloak from 'keycloak-js';
import { jwtDecode } from "jwt-decode";
import { createKeycloakInstance } from './keycloak';
import { setAuthCookie } from '../utils/cookieHelper';

let keycloakInstanceCache: { [key: string]: Keycloak } = {};

// Environment to Keycloak host mapping
const ENV_HOST_MAP: Record<string, string> = {
  'development': 'dev-keycloak.colibricore.io',
  'dev': 'dev-keycloak.colibricore.io',
  'test': 'test-keycloak.colibricore.io',
  'staging': 'staging-keycloak.colibricore.io',
  'stage': 'staging-keycloak.colibricore.io',
  'production': 'keycloak.colibricore.io',
  'prod': 'keycloak.colibricore.io',
};

// Subsidiary to realm mapping
const SUBSIDIARY_REALM_MAP: Record<string, string> = {
  'elite': 'elite',
  'allied': 'allied',
  'mckissock': 'mckissock',
};

/**
 * Get widget attributes from DOM
 */
function getWidgetConfig(): { environment: string; subsidiary: string } {
  const widget = document.querySelector('keycloak-widget');
  return {
    environment: widget?.getAttribute('authority') || localStorage.getItem('authority') || 'dev',
    subsidiary: widget?.getAttribute('subsidiary') || localStorage.getItem('subsidiary') || 'elite',
  };
}

/**
 * Get Keycloak instance (cached per environment+subsidiary combo)
 */
function getKeycloakInstance(authority?: string): Keycloak {
  const widgetConfig = getWidgetConfig();
  const auth = authority || widgetConfig.environment;
  const cacheKey = `${auth}:${widgetConfig.subsidiary}`;

  if (!keycloakInstanceCache[cacheKey]) {
    keycloakInstanceCache[cacheKey] = createKeycloakInstance(auth);
    console.log('[OIDC] Keycloak instance created:', { authority: auth, subsidiary: widgetConfig.subsidiary });
  }

  return keycloakInstanceCache[cacheKey];
}

/**
 * Sign in via popup window to Keycloak
 */
export async function signIn(authority?: string): Promise<any> {
  const keycloak = getKeycloakInstance(authority);
  const customCallbackUrl = localStorage.getItem('callbackUrl');
  const redirectUri = customCallbackUrl || `${window.location.origin}${window.location.pathname}`;

  try {
    const authenticated = await keycloak.init({
      onLoad: 'check-sso',
      checkLoginIframe: false,
      pkceMethod: 'S256',
      redirectUri,
    });

    if (authenticated && keycloak.token) {
      const decoded: any = jwtDecode(keycloak.token);
      const expiresIn = (keycloak.tokenParsed?.exp || 0) - Math.floor(Date.now() / 1000);

      // Set access_token as cookie
      setAuthCookie('access_token', keycloak.token, expiresIn);
      localStorage.setItem('user_state', 'authenticated');
      localStorage.setItem('decoded', JSON.stringify(decoded) || '');

      if (decoded.x_credentials) {
        setAuthCookie('X-Credential', decoded.x_credentials, expiresIn);
      }

      console.log('[OIDC] Authentication complete via Keycloak');

      return {
        tokens: { access_token: keycloak.token, refresh_token: keycloak.refreshToken, id_token: keycloak.idToken },
        userInfo: keycloak.tokenParsed,
        userSession: decoded
      };
    }

    throw new Error('Authentication failed');
  } catch (error) {
    console.error('[OIDC] Sign in error:', error);
    throw error;
  }
}

/**
 * Sign in via redirect to Keycloak (same tab)
 */
export async function signInRedirect(authority?: string): Promise<void> {
  const keycloak = getKeycloakInstance(authority);
  const customCallbackUrl = localStorage.getItem('callbackUrl');
  const redirectUri = customCallbackUrl || `${window.location.origin}${window.location.pathname}`;

  try {
    console.log('[OIDC] Redirecting to Keycloak for authentication...');
    await keycloak.init({
      onLoad: 'login-required',
      checkLoginIframe: false,
      pkceMethod: 'S256',
      redirectUri
    });
  } catch (error) {
    console.error('[OIDC] Sign in redirect error:', error);
    throw error;
  }
}

/**
 * Sign in with username/password using ROPC flow (Resource Owner Password Credentials)
 * Note: ROPC must be enabled in Keycloak client settings (Direct Access Grants Enabled)
 */
export async function signInWithPassword(
  username: string,
  password: string,
  environment?: string
): Promise<any> {
  const widgetConfig = getWidgetConfig();
  const env = environment || widgetConfig.environment;
  const sub = widgetConfig.subsidiary;

  const host = ENV_HOST_MAP[env] || ENV_HOST_MAP['development'];
  const realm = SUBSIDIARY_REALM_MAP[sub] || 'allied';
  const tokenEndpoint = `https://${host}/realms/${realm}/protocol/openid-connect/token`;

  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'password',
        client_id: 'colibricore',
        username,
        password,
        scope: 'openid profile email',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error_description || 'Authentication failed');
    }

    const tokenData = await response.json();
    const decoded: any = jwtDecode(tokenData.access_token);
    const expiresIn = tokenData.expires_in || 300;

    // Set access_token as cookie (cross-subdomain)
    setAuthCookie('access_token', tokenData.access_token, expiresIn);

    // Store in localStorage
    localStorage.setItem('user_state', 'authenticated');
    localStorage.setItem('decoded', JSON.stringify(decoded) || '');

    // Store xCredentials from JWT
    if (decoded.x_credentials) {
      setAuthCookie('X-Credential', decoded.x_credentials, expiresIn);
    }

    console.log('[OIDC] ROPC authentication complete');

    return {
      tokens: { access_token: tokenData.access_token, refresh_token: tokenData.refresh_token },
      userInfo: decoded,
      userSession: decoded,
    };
  } catch (error) {
    console.error('[OIDC] ROPC sign in error:', error);
    throw error;
  }
}

/**
 * Handle sign-in callback - sets access_token as cross-subdomain cookie
 */
export async function handleSignInCallback(authority?: string): Promise<any> {
  const keycloak = getKeycloakInstance(authority);
  const customCallbackUrl = localStorage.getItem('callbackUrl');
  const redirectUri = customCallbackUrl || `${window.location.origin}${window.location.pathname}`;

  try {
    const authenticated = await keycloak.init({
      checkLoginIframe: false,
      pkceMethod: 'S256',
      redirectUri
    });

    if (authenticated && keycloak.token) {
      const decoded: any = jwtDecode(keycloak.token);
      const expiresIn = (keycloak.tokenParsed?.exp || 0) - Math.floor(Date.now() / 1000);

      // Set access_token as cookie
      setAuthCookie('access_token', keycloak.token, expiresIn);
      localStorage.setItem('user_state', 'authenticated');
      localStorage.setItem('decoded', JSON.stringify(decoded) || '');

      if (decoded.x_credentials) {
        setAuthCookie('X-Credential', decoded.x_credentials, expiresIn);
      }

      console.log('[OIDC] Callback processed successfully');

      return {
        tokens: { access_token: keycloak.token, refresh_token: keycloak.refreshToken, id_token: keycloak.idToken },
        userInfo: keycloak.tokenParsed,
        userSession: decoded
      };
    }

    throw new Error('Authentication failed - no token received');
  } catch (error) {
    console.error('[OIDC] Sign-in callback error:', error);
    throw error;
  }
}

