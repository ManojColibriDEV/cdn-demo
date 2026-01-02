import { UserManager, WebStorageStateStore, User, UserManagerSettings } from 'oidc-client-ts';
import { jwtDecode } from "jwt-decode";
import { resolveAuthority } from '../utils/authorityResolver';

let userManagerCache: { [key: string]: UserManager } = {};

/**
 * Get OIDC settings based on authority and subsidiary
 */
function getOidcSettings(authority?: string): UserManagerSettings {
  // Resolve authority (handles env shortcuts and auto-detection)
  const resolvedAuthority = resolveAuthority(authority);
  
  // Get subsidiary (realm) from localStorage, default to 'allied'
  const subsidiary = localStorage.getItem('subsidiary') || 'allied';
  
  // Get custom callback URL from localStorage (set via web component attribute)
  const customCallbackUrl = localStorage.getItem('callbackUrl');
  
  // Fallback to current page URL if localStorage is cleared
  const redirect_uri = customCallbackUrl || window.location.origin + window.location.pathname;
  
  return {
    authority: `${resolvedAuthority}/realms/${subsidiary}`,
    client_id: 'colibricore',
    redirect_uri,
    post_logout_redirect_uri: window.location.origin,
    response_type: 'code',
    scope: 'openid profile email',
    automaticSilentRenew: false,
    filterProtocolClaims: true,
    loadUserInfo: true,
    metadata: {
      issuer: `${resolvedAuthority}/realms/${subsidiary}`,
      authorization_endpoint: `${resolvedAuthority}/realms/${subsidiary}/protocol/openid-connect/auth`,
      token_endpoint: `${resolvedAuthority}/realms/${subsidiary}/protocol/openid-connect/token`,
      userinfo_endpoint: `${resolvedAuthority}/realms/${subsidiary}/protocol/openid-connect/userinfo`,
      end_session_endpoint: `${resolvedAuthority}/realms/${subsidiary}/protocol/openid-connect/logout`,
      jwks_uri: `${resolvedAuthority}/realms/${subsidiary}/protocol/openid-connect/certs`,
    },
  };
}

/**
 * Get UserManager instance (cached per authority)
 */
function getUserManager(authority?: string): UserManager {
  const auth = resolveAuthority(authority);
  
  if (!userManagerCache[auth]) {
    const settings = getOidcSettings(authority);
    
    userManagerCache[auth] = new UserManager({
      ...settings,
      userStore: new WebStorageStateStore({ store: window.localStorage }),
    });

    console.log('[OIDC] UserManager initialized for authority:', auth);
  }
  
  return userManagerCache[auth];
}

/**
 * Sign in redirect to Keycloak
 */
export async function signIn(authority?: string): Promise<void> {
  const manager = getUserManager(authority);

  try {
    await manager.signinRedirect();
  } catch (error) {
    console.error('[OIDC] Sign in error:', error);
    throw error;
  }
}

/**
 * Handle sign-in callback
 */
export async function handleSignInCallback(authority?: string): Promise<any> {
  const manager = getUserManager(authority);
  
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
export async function signOut(authority?: string): Promise<void> {
  const manager = getUserManager(authority);
  
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
