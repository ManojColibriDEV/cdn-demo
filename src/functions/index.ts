import type {
  UpgradeUser,
  PasswordChecks,
  AuthenticationTokens,
} from "../types/index";
import { jwtDecode } from "jwt-decode";
import { setAuthCookie, clearAuthCookie } from "../utils/cookieHelper";
import { authLogin } from "../services";
import {
  STORAGE_KEYS,
  COOKIE_NAMES,
  TOKEN_EXPIRY,
  PASSWORD_RULES,
  PASSWORD_REGEX,
  LOG_PREFIX
} from "../constants";

// Re-export cookie helper functions for convenience
export {
  setAuthCookie,
  clearAuthCookie,
  getCookieDomain,
  getAuthorityFromUrl,
  getDefaultRedirectUrl
} from "../utils/cookieHelper";

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
    length: pw.length >= PASSWORD_RULES.MIN_LENGTH,
    upper: PASSWORD_REGEX.UPPERCASE.test(pw),
    lower: PASSWORD_REGEX.LOWERCASE.test(pw),
    number: PASSWORD_REGEX.NUMBER.test(pw),
    noSpaces: !PASSWORD_REGEX.NO_SPACES.test(pw),
    noTriple: !PASSWORD_REGEX.NO_TRIPLE.test(pw),
    special: PASSWORD_REGEX.SPECIAL_CHAR.test(pw) && PASSWORD_REGEX.ALLOWED_CHARS.test(pw),
    noNameParts: true,
    noEmailParts: true,
  };

  const low = pw.toLowerCase();
  if (upgradeUser && upgradeUser.displayName) {
    const parts = upgradeUser.displayName
      .split(/\s+/)
      .filter((p) => p.length >= PASSWORD_RULES.MIN_PART_LENGTH_FOR_NAME_CHECK);
    for (const part of parts) {
      if (part && low.includes(part.toLowerCase())) {
        checks.noNameParts = false;
        break;
      }
    }
  }

  if (upgradeUser && upgradeUser.email) {
    const local = (upgradeUser.email || "").split("@")[0] || "";
    const tokens = local.split(/[^A-Za-z0-9]+/).filter((t) => t.length >= PASSWORD_RULES.MIN_TOKEN_LENGTH_FOR_EMAIL_CHECK);
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
    const rememberMeEnabled = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME);
    if (!rememberMeEnabled) {
      // Tokens exist but Remember Me was not checked
      // User must login again manually
      console.log(`${LOG_PREFIX.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`);
      return false;
    }

    console.log(`${LOG_PREFIX.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    
    // First try cookies
    const xCredCookie = document.cookie.split(';').find(row => row.trim().startsWith(`${COOKIE_NAMES.X_CREDENTIAL}=`));
    const accessTokenCookie = document.cookie.split(';').find(row => row.trim().startsWith(`${COOKIE_NAMES.ACCESS_TOKEN}=`));

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
      token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    }
    // X-Credential only in cookies, not in localStorage
    // (Already checked xCredCookie above)

    // Check if we have both token and x_credential
    if (!token || !hasXCred) {
      return false;
    }

    // Check expiration from localStorage first (faster than JWT decode)
    const expiresAt = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES);
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
      console.error(`${LOG_PREFIX.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, decodeError);
      return false;
    }
  } catch (error) {
    console.error(`${LOG_PREFIX.CHECK_TOKEN_AND_REDIRECT} Error:`, error);
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
    const refreshTokenTime = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME);

    if (!refreshTokenTime) {
      // No timestamp means "Remember Me" was not checked
      // Tokens exist but auto-login should NOT occur
      return false;
    }

    // Check if timestamp is still valid (7 days)
    const tokenAge = Date.now() - parseInt(refreshTokenTime);

    return tokenAge < TOKEN_EXPIRY.REFRESH_TOKEN_MAX_AGE_MS;
  } catch (error) {
    console.error(`${LOG_PREFIX.TOKEN} isRefreshTokenValid Error:`, error);
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
  clearAuthCookie(COOKIE_NAMES.ACCESS_TOKEN);
  clearAuthCookie(COOKIE_NAMES.X_CREDENTIAL);
  clearAuthCookie(COOKIE_NAMES.REFRESH_TOKEN);

  // Clear all auth-related localStorage items
  const authKeys = [
    STORAGE_KEYS.REFRESH_TOKEN,
    STORAGE_KEYS.REFRESH_TOKEN_TIME,
    STORAGE_KEYS.ACCESS_TOKEN,
    STORAGE_KEYS.ACCESS_TOKEN_EXPIRES,
    'user_info',
    'authority',
    'subsidiary'
  ];
  
  authKeys.forEach(key => {
    localStorage.removeItem(key);
  });

  console.log(`${LOG_PREFIX.AUTH} All authentication tokens and state cleared`);
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
    setAuthCookie(COOKIE_NAMES.ACCESS_TOKEN, tokens.access_token, expiresIn, true);

    // Get x_credential from response or decoded token
    const xCred = x_credential || decoded.x_credentials;

    // Set X-Credential cookie without encoding to preserve the exact format
    if (xCred) {
      setAuthCookie(COOKIE_NAMES.X_CREDENTIAL, xCred, expiresIn, false);
    }

    // === MANDATORY STORAGE ===
    // ALWAYS store in localStorage (required for cross-domain scenarios and token persistence)
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, tokens.access_token);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_EXPIRES, (Date.now() + expiresIn * 1000).toString());

    // ALWAYS store refresh token in localStorage and cookies
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, tokens.refresh_token);
    const refreshTokenExpiry = 30 * 24 * 60 * 60; // 30 days in seconds
    setAuthCookie(COOKIE_NAMES.REFRESH_TOKEN, tokens.refresh_token, refreshTokenExpiry, true);

    // NOTE: X-Credential is ONLY stored in cookies, not localStorage
    // This prevents duplicate x_credentials from different storage sources

    // === REMEMBER ME LOGIC ===
    // Only store refresh_token_time if Remember Me is checked
    // This flag controls whether auto-login occurs on page revisit
    // - If present: Auto-login will work (tokens exist + flag exists)
    // - If absent: Manual login required (tokens exist but flag missing)
    if (rememberMe && tokens.refresh_token) {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
      console.log(`${LOG_PREFIX.AUTH} Remember Me enabled - auto-login will work on page revisit`);
    } else {
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN_TIME);
      console.log(`${LOG_PREFIX.AUTH} Remember Me disabled - manual login required on page revisit`);
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
    console.error(`${LOG_PREFIX.TOKEN} createUserSessionFromToken - Failed to decode access token:`, e);
    return null;
  }
};