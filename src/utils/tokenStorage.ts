/**
 * Token Storage Utility
 * Stores Keycloak tokens in localStorage to persist across page refreshes
 */

import { clearAuthCookie } from './cookieHelper';

export const clearTokens = () => {
  try {
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
