/**
 * OIDC Configuration for Keycloak Authentication
 * Supports multiple environments with different realms
 */

export interface OIDCConfig {
  authority: string;
  tokenEndpoint: string;
  userInfoEndpoint: string;
  endSessionEndpoint: string;
  clientId: string;
  realm: string;
}

/**
 * Get OIDC configuration based on environment
 * Uses proxy in development to avoid CORS issues
 */
export const getOIDCConfig = (environment: string = 'development'): OIDCConfig => {
  // Check if running in development mode
  const isDevelopment = import.meta.env.DEV;
  
  // In development, use proxy to avoid CORS
  const getUrl = (fullUrl: string) => {
    if (isDevelopment) {
      // Extract path after the domain
      const url = new URL(fullUrl);
      return `/keycloak${url.pathname}`;
    }
    return fullUrl;
  };

  const configs: Record<string, OIDCConfig> = {
    development: {
      authority: 'https://dev-keycloak.colibricore.io/realms/allied',
      tokenEndpoint: getUrl('https://dev-keycloak.colibricore.io/realms/allied/protocol/openid-connect/token'),
      userInfoEndpoint: getUrl('https://dev-keycloak.colibricore.io/realms/allied/protocol/openid-connect/userinfo'),
      endSessionEndpoint: getUrl('https://dev-keycloak.colibricore.io/realms/allied/protocol/openid-connect/logout'),
      clientId: 'colibricore',
      realm: 'allied'
    },
    staging: {
      authority: 'https://staging-keycloak.colibricore.io/realms/allied',
      tokenEndpoint: getUrl('https://staging-keycloak.colibricore.io/realms/allied/protocol/openid-connect/token'),
      userInfoEndpoint: getUrl('https://staging-keycloak.colibricore.io/realms/allied/protocol/openid-connect/userinfo'),
      endSessionEndpoint: getUrl('https://staging-keycloak.colibricore.io/realms/allied/protocol/openid-connect/logout'),
      clientId: 'colibricore',
      realm: 'allied'
    },
    production: {
      authority: 'https://keycloak.colibricore.io/realms/allied',
      tokenEndpoint: getUrl('https://keycloak.colibricore.io/realms/allied/protocol/openid-connect/token'),
      userInfoEndpoint: getUrl('https://keycloak.colibricore.io/realms/allied/protocol/openid-connect/userinfo'),
      endSessionEndpoint: getUrl('https://keycloak.colibricore.io/realms/allied/protocol/openid-connect/logout'),
      clientId: 'colibricore',
      realm: 'allied'
    }
  };

  return configs[environment] || configs.development;
};

/**
 * OIDC Scopes to request
 */
export const OIDC_SCOPES = 'openid profile email';

/**
 * Grant types supported by Keycloak
 */
export const GRANT_TYPES = {
  PASSWORD: 'password',
  AUTHORIZATION_CODE: 'authorization_code',
  REFRESH_TOKEN: 'refresh_token',
  CLIENT_CREDENTIALS: 'client_credentials'
} as const;
