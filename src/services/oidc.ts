/**
 * OIDC Authentication Service
 * Handles OpenID Connect authentication flows with Keycloak
 */

import { getOIDCConfig, OIDC_SCOPES, GRANT_TYPES } from '../config/oidc';
import type { OIDCTokenResponse, OIDCUserInfo } from '../types';

/**
 * Authenticate user with username and password using OIDC Resource Owner Password Credentials flow
 * 
 * @param username - User's username or email
 * @param password - User's password
 * @param environment - Environment (development, staging, production)
 * @returns OIDC token response with access_token, refresh_token, etc.
 */
export const authenticateWithOIDC = async (
  username: string,
  password: string,
  environment: string = 'development'
): Promise<OIDCTokenResponse> => {
  const config = getOIDCConfig(environment);
  
  // Prepare form data for token request (OIDC uses application/x-www-form-urlencoded)
  const params = new URLSearchParams({
    grant_type: GRANT_TYPES.PASSWORD,
    client_id: config.clientId,
    username: username.trim(),
    password: password,
    scope: OIDC_SCOPES
  });

  try {
    const response = await fetch(config.tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString()
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw {
        response: {
          data: {
            error: errorData.error || 'authentication_failed',
            error_description: errorData.error_description || 'Invalid username or password',
            message: errorData.error_description || 'Authentication failed'
          }
        },
        message: errorData.error_description || 'Authentication failed'
      };
    }

    const data: OIDCTokenResponse = await response.json();
    return data;
  } catch (error) {
    console.error('OIDC authentication error:', error);
    throw error;
  }
};

/**
 * Get user information from OIDC userinfo endpoint
 * 
 * @param accessToken - Access token from authentication
 * @param environment - Environment (development, staging, production)
 * @returns User information
 */
export const getUserInfo = async (
  accessToken: string,
  environment: string = 'development'
): Promise<OIDCUserInfo> => {
  const config = getOIDCConfig(environment);

  try {
    const response = await fetch(config.userInfoEndpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    const userInfo: OIDCUserInfo = await response.json();
    return userInfo;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};

/**
 * Refresh access token using refresh token
 * 
 * @param refreshToken - Refresh token from previous authentication
 * @param environment - Environment (development, staging, production)
 * @returns New OIDC token response
 */
export const refreshAccessToken = async (
  refreshToken: string,
  environment: string = 'development'
): Promise<OIDCTokenResponse> => {
  const config = getOIDCConfig(environment);

  const params = new URLSearchParams({
    grant_type: GRANT_TYPES.REFRESH_TOKEN,
    client_id: config.clientId,
    refresh_token: refreshToken
  });

  try {
    const response = await fetch(config.tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString()
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error_description || 'Token refresh failed');
    }

    const data: OIDCTokenResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Token refresh error:', error);
    throw error;
  }
};

/**
 * Logout user by revoking tokens
 * 
 * @param refreshToken - Refresh token to revoke
 * @param environment - Environment (development, staging, production)
 */
export const logout = async (
  refreshToken: string,
  environment: string = 'development'
): Promise<void> => {
  const config = getOIDCConfig(environment);

  const params = new URLSearchParams({
    client_id: config.clientId,
    refresh_token: refreshToken
  });

  try {
    await fetch(config.endSessionEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString()
    });
  } catch (error) {
    console.error('Logout error:', error);
    // Don't throw - logout should be best effort
  }
};
