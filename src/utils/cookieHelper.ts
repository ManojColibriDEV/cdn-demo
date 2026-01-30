/**
 * Cookie Helper Utility
 * Shared cookie operations for cross-subdomain support
 */

/**
 * Get the cookie domain for cross-subdomain support
 * Extracts root domain (e.g., dev.elitelearning.com → .elitelearning.com)
 * Returns empty string for localhost/IP addresses
 */
export function getCookieDomain(): string {
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
 * Auto-detect authority/environment from URL hostname
 * @returns The authority string: 'dev', 'test', 'stage', or 'prod'
 * 
 * Examples:
 * - dev.elitelearning.com → 'dev'
 * - test.elitelearning.com → 'test'
 * - stage.elitelearning.com → 'stage'
 * - elitelearning.com → 'prod'
 * - localhost → 'dev' (defaults to dev for local development)
 */
export function getAuthorityFromUrl(): string {
  const hostname = window.location.hostname;

  // localhost defaults to dev
  if (hostname === 'localhost' || hostname === '127.0.0.1' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return 'dev';
  }

  // Check for environment prefixes
  if (hostname.startsWith('dev.') || hostname.startsWith('dev-')) {
    return 'dev';
  } else if (hostname.startsWith('test.') || hostname.startsWith('test-')) {
    return 'test';
  } else if (hostname.startsWith('stage.') || hostname.startsWith('stage-')) {
    return 'stage';
  } else {
    // Production (no prefix)
    return 'prod';
  }
}

/**
 * Transform the current domain URL to the appropriate redirect URL based on environment
 * @returns The transformed redirect URL
 * 
 * Examples:
 * - https://dev.elitelearning.com/login-widget-test/ → https://dev-learn.elitelearning.com/courses
 * - https://test.elitelearning.com/login-widget-test/ → https://test-learn.elitelearning.com/courses
 * - https://stage.elitelearning.com/login-widget-test/ → https://stage-learn.elitelearning.com/courses
 * - https://elitelearning.com/login-widget-test/ → https://learn.elitelearning.com/courses
 */
export function getDefaultRedirectUrl(): string {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const hostname = url.hostname;

  // Check for different environments
  if (hostname.startsWith('dev.')) {
    // dev.elitelearning.com → dev-learn.elitelearning.com
    const newHostname = hostname.replace('dev.', 'dev-learn.');
    return `${url.protocol}//${newHostname}/courses`;
  } else if (hostname.startsWith('test.')) {
    // test.elitelearning.com → test-learn.elitelearning.com
    const newHostname = hostname.replace('test.', 'test-learn.');
    return `${url.protocol}//${newHostname}/courses`;
  } else if (hostname.startsWith('stage.')) {
    // stage.elitelearning.com → stage-learn.elitelearning.com
    const newHostname = hostname.replace('stage.', 'stage-learn.');
    return `${url.protocol}//${newHostname}/courses`;
  } else {
    // Production: elitelearning.com → learn.elitelearning.com
    // Check if it's already a subdomain or the root domain
    const parts = hostname.split('.');
    if (parts.length === 2) {
      // Root domain (e.g., elitelearning.com)
      const newHostname = `learn.${hostname}`;
      return `${url.protocol}//${newHostname}/courses`;
    } else {
      // Already a subdomain, don't transform
      return `${url.protocol}//${hostname}/courses`;
    }
  }
}

/**
 * Set a cookie with cross-subdomain support
 * @param name - Cookie name
 * @param value - Cookie value
 * @param expiresInSeconds - Expiration time in seconds
 * @param encode - Whether to URL encode the value (default: true, false for X-Credential)
 */
export function setAuthCookie(name: string, value: string, expiresInSeconds: number, encode: boolean = true): void {
  const expires = new Date();
  expires.setSeconds(expires.getSeconds() + expiresInSeconds);

  const domain = getCookieDomain();
  const domainAttr = domain ? `; domain=${domain}` : '';
  const secureAttr = window.location.protocol === 'https:' ? '; secure' : '';

  // Only encode if explicitly requested (access tokens should be encoded, X-Credential should not)
  const cookieValue = encode ? encodeURIComponent(value) : value;

  document.cookie = `${name}=${cookieValue}; expires=${expires.toUTCString()}; path=/${domainAttr}${secureAttr}; SameSite=Lax`;
}

/**
 * Clear a cookie
 */
export function clearAuthCookie(name: string): void {
  const domain = getCookieDomain();
  const domainAttr = domain ? `; domain=${domain}` : '';
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainAttr}`;
  console.log(`[Cookie] Cleared: ${name}`);
}
