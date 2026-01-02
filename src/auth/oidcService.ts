import { UserManager, WebStorageStateStore, User, UserManagerSettings } from 'oidc-client-ts';
import { jwtDecode } from "jwt-decode";

let userManagerCache: { [key: string]: UserManager } = {};

/**
 * Get OIDC settings based on environment
 */
function getOidcSettings(environment: string = 'development'): UserManagerSettings {
  // Get custom callback URL from localStorage (set via web component attribute)
  const customCallbackUrl = localStorage.getItem('callbackUrl');
  
  // Fallback to current page URL if localStorage is cleared
  const redirect_uri = customCallbackUrl || window.location.origin + window.location.pathname;
  
  console.log('[OIDC] Using redirect_uri:', redirect_uri);
  
  const configs = {
    development: {
      authority: 'https://dev-keycloak.colibricore.io/realms/allied',
      client_id: 'colibricore',
      redirect_uri,
      post_logout_redirect_uri: window.location.origin,
      response_type: 'code',
      scope: 'openid profile email',
      automaticSilentRenew: false,
      filterProtocolClaims: true,
      loadUserInfo: true,
      metadata: {
        issuer: 'https://dev-keycloak.colibricore.io/realms/allied',
        authorization_endpoint: 'https://dev-keycloak.colibricore.io/realms/allied/protocol/openid-connect/auth',
        token_endpoint: 'https://dev-keycloak.colibricore.io/realms/allied/protocol/openid-connect/token',
        userinfo_endpoint: 'https://dev-keycloak.colibricore.io/realms/allied/protocol/openid-connect/userinfo',
        end_session_endpoint: 'https://dev-keycloak.colibricore.io/realms/allied/protocol/openid-connect/logout',
        jwks_uri: 'https://dev-keycloak.colibricore.io/realms/allied/protocol/openid-connect/certs',
      },
    },
    staging: {
      authority: 'https://staging-keycloak.colibricore.io/realms/allied',
      client_id: 'colibricore',
      redirect_uri,
      post_logout_redirect_uri: window.location.origin,
      response_type: 'code',
      scope: 'openid profile email',
      automaticSilentRenew: false,
      filterProtocolClaims: true,
      loadUserInfo: true,
      metadata: {
        issuer: 'https://staging-keycloak.colibricore.io/realms/allied',
        authorization_endpoint: 'https://staging-keycloak.colibricore.io/realms/allied/protocol/openid-connect/auth',
        token_endpoint: 'https://staging-keycloak.colibricore.io/realms/allied/protocol/openid-connect/token',
        userinfo_endpoint: 'https://staging-keycloak.colibricore.io/realms/allied/protocol/openid-connect/userinfo',
        end_session_endpoint: 'https://staging-keycloak.colibricore.io/realms/allied/protocol/openid-connect/logout',
        jwks_uri: 'https://staging-keycloak.colibricore.io/realms/allied/protocol/openid-connect/certs',
      },
    },
    production: {
      authority: 'https://keycloak.colibricore.io/realms/allied',
      client_id: 'colibricore',
      redirect_uri,
      post_logout_redirect_uri: window.location.origin,
      response_type: 'code',
      scope: 'openid profile email',
      automaticSilentRenew: false,
      filterProtocolClaims: true,
      loadUserInfo: true,
      metadata: {
        issuer: 'https://keycloak.colibricore.io/realms/allied',
        authorization_endpoint: 'https://keycloak.colibricore.io/realms/allied/protocol/openid-connect/auth',
        token_endpoint: 'https://keycloak.colibricore.io/realms/allied/protocol/openid-connect/token',
        userinfo_endpoint: 'https://keycloak.colibricore.io/realms/allied/protocol/openid-connect/userinfo',
        end_session_endpoint: 'https://keycloak.colibricore.io/realms/allied/protocol/openid-connect/logout',
        jwks_uri: 'https://keycloak.colibricore.io/realms/allied/protocol/openid-connect/certs',
      },
    },
  };

  return configs[environment as keyof typeof configs] || configs.development;
}

/**
 * Get UserManager instance (cached per environment)
 */
function getUserManager(environment: string = 'development'): UserManager {
  const env = environment || 'development';
  
  if (!userManagerCache[env]) {
    const settings = getOidcSettings(env);
    
    userManagerCache[env] = new UserManager({
      ...settings,
      userStore: new WebStorageStateStore({ store: window.localStorage }),
    });

    console.log('[OIDC] UserManager initialized for environment:', env);
  }
  
  return userManagerCache[env];
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
 * Handle sign-in callback
 */
export async function handleSignInCallback(environment?: string): Promise<any> {
  const manager = getUserManager(environment);
  
  try {
    const user = await manager.signinRedirectCallback();
    const decoded = jwtDecode(user.access_token);
    // Store user info in localStorage
    localStorage.setItem('user_state', 'authenticated');
    localStorage.setItem('access_token', user.access_token);
    localStorage.setItem('user_session', JSON.stringify(decoded));
    
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
