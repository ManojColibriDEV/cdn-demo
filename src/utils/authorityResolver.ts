/**
 * Authority URL Resolver
 * Resolves environment shortcuts to full Keycloak URLs
 * Auto-detects environment from domain if not provided
 */

export const AUTHORITY_URLS = {
  dev: 'https://dev-keycloak.colibricore.io',
  development: 'https://dev-keycloak.colibricore.io',
  staging: 'https://staging-keycloak.colibricore.io',
  prod: 'https://keycloak.colibricore.io',
  production: 'https://keycloak.colibricore.io',
} as const;

type EnvironmentKey = keyof typeof AUTHORITY_URLS;

/**
 * Detects environment from the current domain URL
 */
function detectEnvironmentFromDomain(): string {
  if (typeof window === 'undefined') {
    return AUTHORITY_URLS.dev;
  }

  const hostname = window.location.hostname.toLowerCase();
  
  if (hostname.includes('dev')) {
    return AUTHORITY_URLS.dev;
  }
  
  if (hostname.includes('staging')) {
    return AUTHORITY_URLS.staging;
  }
  
  // Default to production for all other cases
  return AUTHORITY_URLS.prod;
}

/**
 * Resolves authority to full URL
 * 
 * @param authority - Can be:
 *   - Environment shorthand: "dev", "staging", "prod"
 *   - Full URL: "https://custom-keycloak.example.com"
 *   - undefined/null: Auto-detect from domain
 * 
 * @returns Full Keycloak authority URL
 * 
 * @example
 * resolveAuthority("dev") // "https://dev-keycloak.colibricore.io"
 * resolveAuthority("https://custom.com") // "https://custom.com"
 * resolveAuthority() // Auto-detects from window.location
 */
export function resolveAuthority(authority?: string | null): string {
  // If no authority provided, auto-detect from domain
  if (!authority) {
    return detectEnvironmentFromDomain();
  }

  const trimmedAuthority = authority.trim().toLowerCase();

  // Check if it's an environment shorthand
  if (trimmedAuthority in AUTHORITY_URLS) {
    return AUTHORITY_URLS[trimmedAuthority as EnvironmentKey];
  }

  // If it starts with http:// or https://, assume it's a full URL
  if (trimmedAuthority.startsWith('http://') || trimmedAuthority.startsWith('https://')) {
    return authority.trim();
  }

  // If not recognized, auto-detect from domain
  return detectEnvironmentFromDomain();
}
