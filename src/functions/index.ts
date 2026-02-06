import type {
  UpgradeUser,
  PasswordChecks,
  AuthenticationTokens,
} from "../types/index";
import { jwtDecode } from "jwt-decode";
import { setAuthCookie, clearAuthCookie } from "../utils/cookieHelper";
import { authLogin } from "../services";

// Re-export cookie helper functions for convenience
export {
  setAuthCookie,
  clearAuthCookie,
  getCookieDomain,
  getAuthorityFromUrl,
  getDefaultRedirectUrl
} from "../utils/cookieHelper";

/**
 * Build redirect URL with xcred parameter for cross-domain authentication
 * @param baseUrl - Base URL to redirect to
 * @param xCredential - Optional x-credential token
 * @returns URL with xcred parameter appended
 */
export const buildRedirectUrl = (baseUrl: string, xCredential?: string | null): string => {
  if (!xCredential) {
    // Try to get from cookies only (X-Credential)
    const xCredCookie = document.cookie.split(';').find(row => row.trim().startsWith('X-Credential='));
    if (xCredCookie) {
      xCredential = xCredCookie.split('=')[1] || null;
    }
  }

  if (!xCredential) {
    return baseUrl;
  }

  try {
    const url = new URL(baseUrl);
    url.searchParams.set('xcred', xCredential);
    return url.toString();
  } catch (e) {
    // If URL parsing fails, append manually
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}xcred=${encodeURIComponent(xCredential)}`;
  }
};

/**
 * Validate new password against security rules
 * @param pw The password to validate
 * @param upgradeUser Optional user data to check against (name, email parts)
 * @returns Object with boolean flags for each validation rule
 */
export function validatePassword(
  pw: string,
  upgradeUser?: UpgradeUser | null
): PasswordChecks {
  const checks = {
    length: pw.length >= 9,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    number: /[0-9]/.test(pw),
    noSpaces: !/\s/.test(pw),
    noTriple: !/(.)\1\1/.test(pw),
    special: /[@.$%^_\-]/.test(pw) && /^[A-Za-z0-9@.$%^_\-]+$/.test(pw),
    noNameParts: true,
    noEmailParts: true,
  };

  const low = pw.toLowerCase();
  if (upgradeUser && upgradeUser.displayName) {
    const parts = upgradeUser.displayName
      .split(/\s+/)
      .filter((p) => p.length >= 2);
    for (const part of parts) {
      if (part && low.includes(part.toLowerCase())) {
        checks.noNameParts = false;
        break;
      }
    }
  }

  if (upgradeUser && upgradeUser.email) {
    const local = (upgradeUser.email || "").split("@")[0] || "";
    const tokens = local.split(/[^A-Za-z0-9]+/).filter((t) => t.length >= 3);
    for (const t of tokens) {
      if (t && low.includes(t.toLowerCase())) {
        checks.noEmailParts = false;
        break;
      }
    }
  }

  return checks;
}

/**
 * Check if user has valid access token AND Remember Me was enabled
 * 
 * LOGIC:
 * 1. First checks if Remember Me was enabled (refresh_token_time exists)
 *    - If NOT enabled: Returns false (requires manual login even if tokens exist)
 *    - If enabled: Proceeds to validate token
 * 2. Checks if valid access_token and X-Credential exist in cookies/localStorage  
 * 3. Validates token expiration
 * 
 * This ensures:
 * - Remember Me CHECKED: Auto-login works (tokens validated)
 * - Remember Me NOT CHECKED: Manual login required (tokens ignored)
 * 
 * @param redirectUrl - Optional URL to redirect to if token is valid
 * @returns true if Remember Me enabled AND token valid, false otherwise
 */
export const checkTokenAndRedirect = (redirectUrl?: string): boolean => {
  try {
    // CRITICAL: Check if Remember Me was enabled
    // If user didn't check Remember Me, ignore existing tokens and require fresh login
    const rememberMeEnabled = localStorage.getItem('refresh_token_time');
    if (!rememberMeEnabled) {
      // Tokens exist but Remember Me was not checked
      // User must login again manually
      console.log('[checkTokenAndRedirect] Remember Me not enabled - requires manual login');
      return false;
    }

    console.log('[checkTokenAndRedirect] Remember Me enabled - validating tokens');
    
    // First try cookies
    const xCredCookie = document.cookie.split(';').find(row => row.trim().startsWith('X-Credential='));
    const accessTokenCookie = document.cookie.split(';').find(row => row.trim().startsWith('access_token='));

    let token: string | null = null;
    let hasXCred = false;

    // Try to get token from cookie first
    if (accessTokenCookie) {
      token = accessTokenCookie.split('=')[1] || null;
    }
    if (xCredCookie) {
      hasXCred = true;
    }

    // Fallback to localStorage for cross-domain scenarios
    if (!token) {
      token = localStorage.getItem('access_token');
    }
    // X-Credential only in cookies, not in localStorage
    // (Already checked xCredCookie above)

    // Check if we have both token and x_credential
    if (!token || !hasXCred) {
      return false;
    }

    // Check expiration from localStorage first (faster than JWT decode)
    const expiresAt = localStorage.getItem('access_token_expires');
    if (expiresAt && Date.now() >= parseInt(expiresAt)) {
      return false;
    }

    // Decode and validate the token
    try {
      const decoded: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      // Check if token is expired
      if (!decoded.exp || currentTime >= decoded.exp) {
        return false;
      }

      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
      return true;
    } catch (decodeError) {
      console.error('[checkTokenAndRedirect] Token decode error:', decodeError);
      return false;
    }
  } catch (error) {
    console.error('[checkTokenAndRedirect] Error:', error);
    return false;
  }
}

/**
 * Check if auto-login should occur based on "Remember Me" setting
 * 
 * HOW IT WORKS:
 * - Tokens (access_token, refresh_token) are ALWAYS stored in localStorage/cookies
 * - But auto-login only happens if refresh_token_time exists (Remember Me was checked)
 * 
 * Returns true: 
 * - User checked "Remember Me" AND
 * - Token timestamp is still valid (< 7 days)
 * → Auto-login will occur on page revisit
 * 
 * Returns false:
 * - User didn't check "Remember Me" (no timestamp) OR
 * - Token timestamp expired (> 7 days)
 * → User must manually login again even though tokens exist
 */
export const isRefreshTokenValid = (): boolean => {
  try {
    const refreshTokenTime = localStorage.getItem('refresh_token_time');

    if (!refreshTokenTime) {
      // No timestamp means "Remember Me" was not checked
      // Tokens exist but auto-login should NOT occur
      return false;
    }

    // Check if timestamp is still valid (7 days)
    const REFRESH_TOKEN_VALIDITY = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const tokenAge = Date.now() - parseInt(refreshTokenTime);

    return tokenAge < REFRESH_TOKEN_VALIDITY;
  } catch (error) {
    console.error('[isRefreshTokenValid] Error:', error);
    return false;
  }
}

/**
 * Clear all authentication tokens and state
 * Call this function on logout to completely clear the user session
 * 
 * CLEARS:
 * 1. Cookies: access_token, X-Credential, refresh_token
 * 2. localStorage: All auth-related data
 */
export const clearAuthTokens = (): void => {
  // Clear specific auth cookies using the helper function
  clearAuthCookie('access_token');
  clearAuthCookie('X-Credential');
  clearAuthCookie('refresh_token');

  // Clear all auth-related localStorage items
  const authKeys = [
    'refresh_token',
    'refresh_token_time',
    'access_token',
    'access_token_expires',
    'user_info',
    'authority',
    'subsidiary'
  ];
  
  authKeys.forEach(key => {
    localStorage.removeItem(key);
  });

  console.log('[Auth] All authentication tokens and state cleared');
}

/**
 * Handle user authentication and token storage
 * Reusable function for login flow
 * 
 * STORAGE STRATEGY:
 * - ALWAYS stores tokens in localStorage AND cookies (mandatory for cross-domain)
 * - Remember Me flag controls AUTO-LOGIN behavior on page revisit
 * 
 * ALWAYS STORED (localStorage + cookies):
 * - access_token
 * - refresh_token
 * - X-Credential (cookie only, not in localStorage)
 * 
 * REMEMBER ME MECHANISM:
 * - If CHECKED: Stores refresh_token_time → enables auto-login on page revisit
 * - If NOT CHECKED: No refresh_token_time → user must manually login on page revisit
 * 
 * This way:
 * - Tokens are always available in localStorage/cookies
 * - But auto-login only happens when remember_token_time exists
 * 
 * @param username - User's email or username
 * @param password - User's password
 * @param rememberMe - Whether to enable auto-login on page revisit
 * @returns Authentication tokens
 */
export const handleAuthentication = async (
  username: string,
  password: string,
  rememberMe: boolean = false
): Promise<AuthenticationTokens> => {
  // Use the service function - returns { tokens, userinfo, x_credential }
  const authResponse = await authLogin(username, password);
  const { tokens, x_credential } = authResponse;

  // Store tokens if provided
  if (tokens.access_token) {
    const decoded: any = jwtDecode(tokens.access_token);
    const expiresIn = (decoded.exp || 0) - Math.floor(Date.now() / 1000);

    // Set cookies for access token (with encoding)
    setAuthCookie('access_token', tokens.access_token, expiresIn, true);

    // Get x_credential from response or decoded token
    const xCred = x_credential || decoded.x_credentials;

    // Set X-Credential cookie without encoding to preserve the exact format
    if (xCred) {
      setAuthCookie('X-Credential', xCred, expiresIn, false);
    }

    // === MANDATORY STORAGE ===
    // ALWAYS store in localStorage (required for cross-domain scenarios and token persistence)
    localStorage.setItem('access_token', tokens.access_token);
    localStorage.setItem('access_token_expires', (Date.now() + expiresIn * 1000).toString());

    // ALWAYS store refresh token in localStorage and cookies
    localStorage.setItem('refresh_token', tokens.refresh_token);
    const refreshTokenExpiry = 30 * 24 * 60 * 60; // 30 days in seconds
    setAuthCookie('refresh_token', tokens.refresh_token, refreshTokenExpiry, true);

    // NOTE: X-Credential is ONLY stored in cookies, not localStorage
    // This prevents duplicate x_credentials from different storage sources

    // === REMEMBER ME LOGIC ===
    // Only store refresh_token_time if Remember Me is checked
    // This flag controls whether auto-login occurs on page revisit
    // - If present: Auto-login will work (tokens exist + flag exists)
    // - If absent: Manual login required (tokens exist but flag missing)
    if (rememberMe && tokens.refresh_token) {
      localStorage.setItem('refresh_token_time', Date.now().toString());
      console.log('[Auth] Remember Me enabled - auto-login will work on page revisit');
    } else {
      localStorage.removeItem('refresh_token_time');
      console.log('[Auth] Remember Me disabled - manual login required on page revisit');
    }
  }

  return tokens;
};

/**
 * Create a user session object from an access token
 * @param accessToken - JWT access token to decode
 * @returns User session object with access_token, userInfo, and decoded token metadata, or null if decoding fails
 */
export const createUserSessionFromToken = (accessToken: string) => {
  try {
    const decoded: any = jwtDecode(accessToken);
    return {
      access_token: accessToken,
      userInfo: {
        studentId: decoded.studentId,
        sub: decoded.sub,
        email_verified: decoded.email_verified,
        x_credentials: decoded.x_credentials,
        name: decoded.name,
        preferred_username: decoded.preferred_username,
        given_name: decoded.given_name,
        family_name: decoded.family_name,
        email: decoded.email,
      },
      // Include token metadata for operations like cookie expiry
      decoded: {
        exp: decoded.exp,
        x_credentials: decoded.x_credentials,
      },
    };
  } catch (e) {
    console.error("[createUserSessionFromToken] Failed to decode access token:", e);
    return null;
  }
};