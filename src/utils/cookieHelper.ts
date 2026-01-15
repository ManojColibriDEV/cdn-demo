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
 * Set a cookie with cross-subdomain support
 */
export function setAuthCookie(name: string, value: string, expiresInSeconds: number): void {
  const expires = new Date();
  expires.setSeconds(expires.getSeconds() + expiresInSeconds);

  const domain = getCookieDomain();
  const domainAttr = domain ? `; domain=${domain}` : '';
  const secureAttr = window.location.protocol === 'https:' ? '; secure' : '';

  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/${domainAttr}${secureAttr}; SameSite=Lax`;
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
