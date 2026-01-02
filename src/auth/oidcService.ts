import { UserManager, WebStorageStateStore, User, UserManagerSettings } from 'oidc-client-ts';
import { jwtDecode } from "jwt-decode";

let userManagerCache: { [key: string]: UserManager } = {};

// Environment to Keycloak host mapping
const ENV_HOST_MAP: Record<string, string> = {
  'development': 'dev-keycloak.colibricore.io',
  'dev': 'dev-keycloak.colibricore.io',
  'staging': 'staging-keycloak.colibricore.io',
  'production': 'keycloak.colibricore.io',
  'prod': 'keycloak.colibricore.io',
  'test': 'test-keycloak.colibricore.io',
};

// Subsidiary to realm mapping (1:1)
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
    environment: widget?.getAttribute('environment') || localStorage.getItem('environment') || 'development',
    subsidiary: widget?.getAttribute('subsidiary') || localStorage.getItem('subsidiary') || 'allied',
  };
}

/**
 * Get OIDC settings based on environment and subsidiary
 */
function getOidcSettings(environment?: string, subsidiary?: string): UserManagerSettings {
  // Get config from widget or use provided params
  const widgetConfig = getWidgetConfig();
  const env = environment || widgetConfig.environment;
  const sub = subsidiary || widgetConfig.subsidiary;

  // Resolve host and realm
  const host = ENV_HOST_MAP[env] || ENV_HOST_MAP['development'];
  const realm = SUBSIDIARY_REALM_MAP[sub] || 'allied';
  const baseUrl = `https://${host}/realms/${realm}`;

  // Get custom callback URL from localStorage (set via web component attribute)
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
    automaticSilentRenew: false,
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

    console.log('[OIDC] UserManager initialized:', { env, subsidiary: sub, cacheKey });
  }

  return userManagerCache[cacheKey];
}

/**
 * Sign in redirect to Keycloak
 */
export async function signIn(environment?: string): Promise<void> {
  const manager = getUserManager(environment);
  
  // // Store redirect URL for after login
  // if (redirectUrl) {
  //   localStorage.setItem('post_login_redirect', redirectUrl);
  // }

  try {
    console.log('[OIDC] Initiating sign-in redirect...');
    await manager.signinRedirect();
  } catch (error) {
    console.error('[OIDC] Sign in error:', error);
    throw error;
  }
}

/**
 * Set cookie with expiration
 */
function setCookie(name: string, value: string, expiresInSeconds: number): void {
  const expires = new Date();
  expires.setSeconds(expires.getSeconds() + expiresInSeconds);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; secure; SameSite=Strict`;
}

/**
 * Handle sign-in callback
 */
export async function handleSignInCallback(environment?: string): Promise<any> {
  const manager = getUserManager(environment);

  try {
    const user = await manager.signinRedirectCallback();
    const decoded: any = jwtDecode(user.access_token);

    // Store user info in localStorage
    localStorage.setItem('user_state', 'authenticated');
    localStorage.setItem('access_token', user.access_token);
    localStorage.setItem('user_session', JSON.stringify(decoded));

    // Set X-Credential cookie if present in JWT (from xCred user attribute via protocol mapper)
    if (decoded.x_credential) {
      setCookie('X-Credential', decoded.x_credential, user.expires_in || 300);
      console.log('[OIDC] X-Credential cookie set from JWT');
    }

    // Also store studentId if present
    if (decoded.student_id) {
      localStorage.setItem('student_id', decoded.student_id);
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

/**
 * Get current user
 */
export async function getUser(): Promise<User | null> {
  const manager = getUserManager();
  return await manager.getUser();
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getUser();
  return user !== null && !user.expired;
}

/**
 * Sign out
 */
export async function signOut(environment?: string): Promise<void> {
  const manager = getUserManager(environment);
  
  try {
    console.log('[OIDC] Signing out...');
    await manager.signoutRedirect();
    
    // Clear session storage
    localStorage.removeItem('user_info');
    localStorage.removeItem('user_state');
    localStorage.removeItem('access_token');
    localStorage.removeItem('access_token');
  } catch (error) {
    console.error('[OIDC] Sign out error:', error);
    throw error;
  }
}

/**
 * Get access token
 */
export async function getAccessToken(): Promise<string | null> {
  const user = await getUser();
  return user?.access_token || null;
}
