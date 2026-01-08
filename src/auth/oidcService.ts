import { UserManager, WebStorageStateStore, UserManagerSettings } from 'oidc-client-ts';
import { jwtDecode } from "jwt-decode";

let userManagerCache: { [key: string]: UserManager } = {};

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
 * Get the cookie domain for cross-subdomain support
 * Extracts root domain (e.g., dev.elitelearning.com → .elitelearning.com)
 * Returns empty string for localhost/IP addresses
 */
function getCookieDomain(): string {
  const hostname = window.location.hostname;

  // localhost or IP address - no domain restriction needed
  if (hostname === 'localhost' || hostname === '127.0.0.1' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return '';
  }

  // Extract root domain: take last 2 parts (works for .com, .io, etc.)
  const parts = hostname.split('.');
  if (parts.length >= 2) {
    return '.' + parts.slice(-2).join('.');
  }

  return '';
}

/**
 * Set a cookie with cross-subdomain support
 */
function setAuthCookie(name: string, value: string, expiresInSeconds: number): void {
  const expires = new Date();
  expires.setSeconds(expires.getSeconds() + expiresInSeconds);

  const domain = getCookieDomain();
  const domainAttr = domain ? `; domain=${domain}` : '';
  const secureAttr = window.location.protocol === 'https:' ? '; secure' : '';

  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/${domainAttr}${secureAttr}; SameSite=Lax`;

  console.log(`[OIDC] Cookie set: ${name} (domain: ${domain || 'current'}, expires: ${expiresInSeconds}s)`);
}

/**
 * Get widget attributes from DOM
 */
function getWidgetConfig(): { environment: string; subsidiary: string } {
  const widget = document.querySelector('keycloak-widget');
  return {
    environment: widget?.getAttribute('environment') || localStorage.getItem('environment') || 'development',
    subsidiary: widget?.getAttribute('subsidiary') || localStorage.getItem('subsidiary') || 'allied',
  };
}

/**
 * Get OIDC settings based on environment and subsidiary
 */
function getOidcSettings(environment?: string, subsidiary?: string): UserManagerSettings {
  const widgetConfig = getWidgetConfig();
  const env = environment || widgetConfig.environment;
  const sub = subsidiary || widgetConfig.subsidiary;

  const host = ENV_HOST_MAP[env] || ENV_HOST_MAP['development'];
  const realm = SUBSIDIARY_REALM_MAP[sub] || 'allied';
  const baseUrl = `https://${host}/realms/${realm}`;

  const customCallbackUrl = localStorage.getItem('callbackUrl');
  const redirect_uri = customCallbackUrl || window.location.origin + window.location.pathname;

  console.log('[OIDC] Config:', { env, subsidiary: sub, host, realm, redirect_uri });

  return {
    authority: baseUrl,
    client_id: 'colibricore',
    redirect_uri,
    post_logout_redirect_uri: window.location.origin,
    response_type: 'code',
    scope: 'openid profile email',
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true,
    metadata: {
      issuer: baseUrl,
      authorization_endpoint: `${baseUrl}/protocol/openid-connect/auth`,
      token_endpoint: `${baseUrl}/protocol/openid-connect/token`,
      userinfo_endpoint: `${baseUrl}/protocol/openid-connect/userinfo`,
      end_session_endpoint: `${baseUrl}/protocol/openid-connect/logout`,
      jwks_uri: `${baseUrl}/protocol/openid-connect/certs`,
    },
  };
}

/**
 * Get UserManager instance (cached per environment+subsidiary combo)
 */
function getUserManager(environment?: string, subsidiary?: string): UserManager {
  const widgetConfig = getWidgetConfig();
  const env = environment || widgetConfig.environment;
  const sub = subsidiary || widgetConfig.subsidiary;
  const cacheKey = `${env}:${sub}`;

  if (!userManagerCache[cacheKey]) {
    const settings = getOidcSettings(env, sub);

    userManagerCache[cacheKey] = new UserManager({
      ...settings,
      userStore: new WebStorageStateStore({ store: window.localStorage }),
    });

    // Listen for token renewal events (silent refresh)
    userManagerCache[cacheKey].events.addUserLoaded((user) => {
      const decoded: any = jwtDecode(user.access_token);
      const expiresIn = user.expires_in || 300;
      
      // Update cookie with new token
      setAuthCookie('access_token', user.access_token, expiresIn);
      
      // Update localStorage and cookie for X-Credential
      if (decoded.x_credentials) {
        localStorage.setItem('X-Credential', decoded.x_credentials);
        setAuthCookie('X-Credential', decoded.x_credentials, expiresIn);
      }
      
      console.log('[OIDC] Token silently renewed');
    });

    console.log('[OIDC] UserManager initialized:', { env, subsidiary: sub, cacheKey });
  }

  return userManagerCache[cacheKey];
}

/**
 * Sign in via popup window to Keycloak
 */
export async function signIn(environment?: string): Promise<any> {
  const manager = getUserManager(environment);

  try {
    const user = await manager.signinPopup();
    const decoded: any = jwtDecode(user.access_token);
    const expiresIn = user.expires_in || 300;

    // Set access_token as cookie (cross-subdomain for WordPress PHP access)
    setAuthCookie('access_token', user.access_token, expiresIn);

    // Minimal localStorage - only for OIDC library state and quick JS checks
    localStorage.setItem('user_state', 'authenticated');
    localStorage.setItem('decoded', JSON.stringify(decoded) || '');

    // Store xCredentials from JWT custom claim (claim name: x_credential)
    if (decoded.x_credentials) {
      setAuthCookie('X-Credential', decoded.x_credentials, expiresIn);
    }

    console.log('[OIDC] Authentication complete via popup');

    return {
      tokens: { access_token: user.access_token },
      userInfo: user.profile,
      userSession: decoded
    };
  } catch (error) {
    console.error('[OIDC] Sign in popup error:', error);
    throw error;
  }
}

/**
 * Handle sign-in callback - sets access_token as cross-subdomain cookie
 */
export async function handleSignInCallback(environment?: string): Promise<any> {
  const manager = getUserManager(environment);

  try {
    const user = await manager.signinRedirectCallback();
    const decoded: any = jwtDecode(user.access_token);
    const expiresIn = user.expires_in || 300;

    // Set access_token as cookie (cross-subdomain for WordPress PHP access)
    // Refresh token NOT stored - rely on Keycloak SSO session for re-auth
    setAuthCookie('access_token', user.access_token, expiresIn);

    // Minimal localStorage - only for OIDC library state and quick JS checks
    localStorage.setItem('user_state', 'authenticated');
    localStorage.setItem('decoded', JSON.stringify(decoded) || '');

    // Store xCredentials from JWT custom claim (claim name: x_credential)
    if (decoded.x_credentials) {
      setAuthCookie('X-Credential', decoded.x_credentials, expiresIn);
    }

    return {
      tokens: { access_token: user.access_token },
      userInfo: user.profile,
      userSession: decoded
    };
  } catch (error) {
    console.error('[OIDC] Sign-in callback error:', error);
    throw error;
  }
}

