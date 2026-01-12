/**
 * Token Storage Utility
 * Stores Keycloak tokens in localStorage to persist across page refreshes
 */

import { jwtDecode } from "jwt-decode";
import { setAuthCookie, clearAuthCookie } from './cookieHelper';

const TOKEN_KEY = 'kc_token';
const REFRESH_TOKEN_KEY = 'kc_refresh_token';
const ID_TOKEN_KEY = 'kc_id_token';

export const saveTokens = (token: string, refreshToken?: string, idToken?: string) => {
  try {
    // Save to localStorage
    if (token) localStorage.setItem(TOKEN_KEY, token);
    if (refreshToken) localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    if (idToken) localStorage.setItem(ID_TOKEN_KEY, idToken);
    console.log('[TokenStorage] Tokens saved to localStorage');

    // Save access_token as cookie
    if (token) {
      const decoded: any = jwtDecode(token);
      const expiresIn = (decoded.exp || 0) - Math.floor(Date.now() / 1000);
      
      setAuthCookie('access_token', token, expiresIn);
      localStorage.setItem('user_state', 'authenticated');
      localStorage.setItem('decoded', JSON.stringify(decoded) || '');

      // Store xCredentials from JWT
      if (decoded.x_credentials) {
        setAuthCookie('X-Credential', decoded.x_credentials, expiresIn);
        console.log('[TokenStorage] X-Credential cookie set');
      }
    }
  } catch (error) {
    console.error('[TokenStorage] Error saving tokens:', error);
  }
};

export const getTokens = () => {
  try {
    return {
      token: localStorage.getItem(TOKEN_KEY),
      refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY),
      idToken: localStorage.getItem(ID_TOKEN_KEY),
    };
  } catch (error) {
    console.error('[TokenStorage] Error retrieving tokens:', error);
    return { token: null, refreshToken: null, idToken: null };
  }
};

export const clearTokens = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(ID_TOKEN_KEY);
    localStorage.removeItem('user_state');
    localStorage.removeItem('decoded');
    
    // Clear cookies
    clearAuthCookie('access_token');
    clearAuthCookie('X-Credential');
    
    console.log('[TokenStorage] Tokens and cookies cleared');
  } catch (error) {
    console.error('[TokenStorage] Error clearing tokens:', error);
  }
};
