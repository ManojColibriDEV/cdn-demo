import type { UpgradeUser, PasswordChecks, AuthenticationTokens } from "../types/index";
import { jwtDecode } from "jwt-decode";
import { setAuthCookie, clearAuthCookie, getCookie } from "../utils/cookieHelper";
import { authLogin, authRefresh, authGoogle } from "../services";
import {
  STORAGE_KEYS,
  COOKIE_NAMES,
  TOKEN_EXPIRY,
  PASSWORD_RULES,
  PASSWORD_REGEX,
  LOG_PREFIX,
} from "../constants";

// Re-export cookie helper functions for convenience
export {
  setAuthCookie,
  clearAuthCookie,
  getCookie,
  getCookieDomain,
  getAuthorityFromUrl,
  getDefaultRedirectUrl,
} from "../utils/cookieHelper";

export const isRefreshTokenExpiredFromCookie = (): boolean => {
  try {
    const refreshToken = getCookie(COOKIE_NAMES.REFRESH_TOKEN, false);
    if (!refreshToken) {
      return true;
    }

    const decoded: any = jwtDecode(refreshToken);
    const currentTime = Math.floor(Date.now() / 1000);

    return !decoded.exp || currentTime >= decoded.exp;
  } catch (error) {
    console.error(`${LOG_PREFIX.TOKEN} isRefreshTokenExpiredFromCookie Error:`, error);
    return true;
  }
};

const getStoredRefreshToken = (): string | null => {
  return (
    getCookie(COOKIE_NAMES.REFRESH_TOKEN, false) || localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)
  );
};

const isJwtExpired = (token: string): boolean => {
  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return !decoded.exp || currentTime >= decoded.exp;
  } catch {
    return true;
  }
};

const isRefreshTokenUsable = (refreshToken: string): boolean => {
  return !isJwtExpired(refreshToken);
};

let silentRefreshTimer: ReturnType<typeof setInterval> | null = null;

const stopSilentRefreshTimer = (): void => {
  if (silentRefreshTimer) {
    clearInterval(silentRefreshTimer);
    silentRefreshTimer = null;
  }
};

export const refreshAuthenticationState = async (
  refreshTokenOverride?: string
): Promise<boolean> => {
  try {
    const refreshToken = refreshTokenOverride || getStoredRefreshToken();
    if (!refreshToken) {
      return false;
    }

    const response = await authRefresh(refreshToken);
    if (!response?.tokens?.access_token) {
      return false;
    }

    const tokens = response.tokens;
    const userSession = createUserSessionFromToken(tokens.access_token);
    if (!userSession) {
      return false;
    }

    const expiresIn = (userSession.decoded.exp || 0) - Math.floor(Date.now() / 1000);
    if (expiresIn <= 0) {
      return false;
    }

    setAuthCookie(COOKIE_NAMES.ACCESS_TOKEN, tokens.access_token, expiresIn, true);

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, tokens.access_token);
    localStorage.setItem(
      STORAGE_KEYS.ACCESS_TOKEN_EXPIRES,
      (Date.now() + expiresIn * 1000).toString()
    );

    if (tokens.refresh_token) {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, tokens.refresh_token);
      const refreshTokenExpiry = 30 * 24 * 60 * 60;
      setAuthCookie(COOKIE_NAMES.REFRESH_TOKEN, tokens.refresh_token, refreshTokenExpiry, true);

      // Update the session timestamp when refreshing
      const existingTimestamp = getCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, false);
      if (existingTimestamp) {
        // Session exists, update timestamp
        const sessionAge = Date.now() - parseInt(existingTimestamp);
        const isBeyondOneDay = sessionAge >= TOKEN_EXPIRY.ONE_DAY_MS;

        if (!isBeyondOneDay) {
          // Still within 1-day window, update the timestamp
          const newTimestamp = Date.now().toString();
          // Use appropriate expiry based on remaining validity
          setAuthCookie(
            COOKIE_NAMES.REFRESH_TOKEN_TIME,
            newTimestamp,
            Math.ceil(TOKEN_EXPIRY.ONE_DAY_MS / 1000),
            true
          );
          // Also update localStorage for backward compatibility
          localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, newTimestamp);
        }
      }
    }

    return true;
  } catch (error) {
    console.error(`${LOG_PREFIX.TOKEN} refreshAuthenticationState Error:`, error);
    return false;
  }
};

// Function to handle silent token refresh in the background
export const silentTokenRefresh = async () => {
  const refreshToken = getStoredRefreshToken();
  const accessToken =
    getCookie(COOKIE_NAMES.ACCESS_TOKEN, false) || localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

  if (!accessToken) {
    stopSilentRefreshTimer();
    return true;
  }

  if (!refreshToken || !isRefreshTokenUsable(refreshToken)) {
    stopSilentRefreshTimer();
    return true;
  }

  // Keep exactly one active timer; restart to avoid stale timer instances across lifecycles/tests
  stopSilentRefreshTimer();

  const intervalMs = 3 * 60 * 1000;
  silentRefreshTimer = setInterval(async () => {
    const currentRefreshToken = getStoredRefreshToken();
    const currentAccessToken =
      getCookie(COOKIE_NAMES.ACCESS_TOKEN, false) ||
      localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (!currentAccessToken) {
      stopSilentRefreshTimer();
      return;
    }

    if (!currentRefreshToken || !isRefreshTokenUsable(currentRefreshToken)) {
      stopSilentRefreshTimer();
      return;
    }

    const accessToken =
      getCookie(COOKIE_NAMES.ACCESS_TOKEN, false) ||
      localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    const shouldRecoverSession = !accessToken || isJwtExpired(accessToken);

    if (shouldRecoverSession) {
      await refreshAuthenticationState(currentRefreshToken);
    }
  }, intervalMs);

  return () => stopSilentRefreshTimer();
};

/**
 * Validate new password against security rules
 * @param pw The password to validate
 * @param upgradeUser Optional user data to check against (name, email parts)
 * @returns Object with boolean flags for each validation rule
 */
export function validatePassword(pw: string, upgradeUser?: UpgradeUser | null): PasswordChecks {
  const checks = {
    length: pw.length >= PASSWORD_RULES.MIN_LENGTH,
    upper: PASSWORD_REGEX.UPPERCASE.test(pw),
    lower: PASSWORD_REGEX.LOWERCASE.test(pw),
    number: PASSWORD_REGEX.NUMBER.test(pw),
    noSpaces: !PASSWORD_REGEX.NO_SPACES.test(pw),
    noTriple: !PASSWORD_REGEX.NO_TRIPLE.test(pw),
    special: PASSWORD_REGEX.SPECIAL_CHAR.test(pw) && PASSWORD_REGEX.ALLOWED_CHARS.test(pw),
    noNameParts: true,
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

  return checks;
}

/**
 * Check if user has valid access token based on Remember Me setting
 *
 * LOGIC:
 * 1. Checks if refresh_token_time exists and is still valid
 *    - If Remember Me CHECKED: Valid for 30 days
 *    - If Remember Me NOT CHECKED: Valid for 1 day only
 * 2. Checks if valid access_token exists in cookies/localStorage
 * 3. Validates token expiration
 *
 * This ensures:
 * - Remember Me CHECKED: Auto-login works for 30 days
 * - Remember Me NOT CHECKED: Auto-login works for 1 day only
 *
 * @param redirectUrl - Optional URL to redirect to if token is valid
 * @returns true if token valid and within allowed time window, false otherwise
 */
export const checkTokenAndRedirect = (redirectUrl?: string): boolean => {
  try {
    // CRITICAL: Check if session timestamp exists and is still valid
    const sessionTimestamp = getCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, false);
    if (!sessionTimestamp) {
      // No session timestamp means first login or cleared session
      console.log(
        `${LOG_PREFIX.CHECK_TOKEN_AND_REDIRECT} No session timestamp - requires manual login`
      );
      return false;
    }

    // Check if timestamp is still within the valid window
    const sessionAge = Date.now() - parseInt(sessionTimestamp);
    const oneDayMs = TOKEN_EXPIRY.ONE_DAY_MS;

    if (sessionAge >= oneDayMs) {
      // Session is older than 1 day
      console.log(
        `${LOG_PREFIX.CHECK_TOKEN_AND_REDIRECT} Session expired (older than 1 day) - requires manual login`
      );
      return false;
    }

    console.log(`${LOG_PREFIX.CHECK_TOKEN_AND_REDIRECT} Valid session found - validating tokens`);

    // Get access token from cookies or localStorage
    const accessTokenCookie = getCookie(COOKIE_NAMES.ACCESS_TOKEN, false);

    let token: string | null = null;

    // Try to get token from cookie first
    if (accessTokenCookie) {
      token = accessTokenCookie;
    }

    // Fallback to localStorage for cross-domain scenarios
    if (!token) {
      token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    }

    // Check if we have valid token
    if (!token) {
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
};

export const checkTokenAndRedirectWithRefresh = async (redirectUrl?: string): Promise<boolean> => {
  const hasValidToken = checkTokenAndRedirect(redirectUrl);
  if (hasValidToken) {
    return true;
  }

  try {
    // Check if session timestamp exists and is still valid
    const sessionTimestamp = getCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, false);
    if (!sessionTimestamp) {
      return false;
    }

    // Check if timestamp is within 1 day window for token refresh attempt
    const sessionAge = Date.now() - parseInt(sessionTimestamp);
    if (sessionAge >= TOKEN_EXPIRY.ONE_DAY_MS) {
      return false;
    }

    const refreshToken = getStoredRefreshToken();
    if (!refreshToken) {
      return false;
    }

    if (!isRefreshTokenUsable(refreshToken)) {
      return false;
    }

    const accessToken =
      getCookie(COOKIE_NAMES.ACCESS_TOKEN, false) ||
      localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    const isAccessExpired = !accessToken || isJwtExpired(accessToken);

    if (!isAccessExpired) {
      return false;
    }

    const refreshed = await refreshAuthenticationState(refreshToken);
    if (!refreshed) {
      return false;
    }

    return checkTokenAndRedirect(redirectUrl);
  } catch (error) {
    console.error(
      `${LOG_PREFIX.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`,
      error
    );
    return false;
  }
};

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
    const refreshTokenTime = getCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, false);

    if (!refreshTokenTime) {
      // No timestamp means session was not started or was cleared
      // Auto-login should NOT occur
      return false;
    }

    // Check if timestamp is still valid (1 day minimum window)
    // Cookies will expire automatically, but we also check the timestamp
    const tokenAge = Date.now() - parseInt(refreshTokenTime);

    return tokenAge < TOKEN_EXPIRY.ONE_DAY_MS;
  } catch (error) {
    console.error(`${LOG_PREFIX.TOKEN} isRefreshTokenValid Error:`, error);
    return false;
  }
};

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
  clearAuthCookie(COOKIE_NAMES.REFRESH_TOKEN);

  // Clear Remember Me cookie
  clearAuthCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME);

  // Clear all auth-related localStorage items
  const authKeys = [
    STORAGE_KEYS.REFRESH_TOKEN,
    STORAGE_KEYS.REFRESH_TOKEN_TIME,
    STORAGE_KEYS.ACCESS_TOKEN,
    STORAGE_KEYS.ACCESS_TOKEN_EXPIRES,
    "user_info",
  ];

  authKeys.forEach((key) => {
    localStorage.removeItem(key);
  });

  console.log(`${LOG_PREFIX.AUTH} All authentication tokens and state cleared`);
};

/**
 * Handle user authentication and token storage
 * Reusable function for login flow
 *
 * STORAGE STRATEGY:
 * - ALWAYS stores tokens in localStorage AND cookies (mandatory for cross-domain)
 * - Session timestamp controls AUTO-LOGIN behavior on page revisit
 *
 * ALWAYS STORED (localStorage + cookies):
 * - access_token
 * - refresh_token
 * - X-Credential (cookie only, not in localStorage)
 * - refresh_token_time (ALWAYS stored, expiry varies by Remember Me)
 *
 * AUTO-LOGIN WINDOW:
 * - If Remember Me CHECKED: Session timestamp valid for 30 days
 * - If Remember Me NOT CHECKED: Session timestamp valid for 1 day only
 *
 * This ensures:
 * - Tokens are always available in localStorage/cookies
 * - Auto-login works for 30 days if Remember Me checked
 * - Auto-login works for 1 day if Remember Me not checked
 *
 * @param username - User's email or username
 * @param password - User's password
 * @param rememberMe - Whether to enable 30-day auto-login (1-day if false)
 * @returns Authentication tokens
 */
export const handleAuthentication = async (
  username: string,
  password: string,
  rememberMe: boolean = false
): Promise<AuthenticationTokens> => {
  // Use the service function - returns { tokens }
  const authResponse = await authLogin(username, password);
  const { tokens } = authResponse;

  // Store tokens if provided
  if (tokens.access_token) {
    const decoded: any = jwtDecode(tokens.access_token);
    const expiresIn = (decoded.exp || 0) - Math.floor(Date.now() / 1000);
    // Set cookies for access token (with encoding)
    setAuthCookie(COOKIE_NAMES.ACCESS_TOKEN, tokens.access_token, expiresIn, true);

    // === MANDATORY STORAGE ===
    // ALWAYS store in localStorage (required for cross-domain scenarios and token persistence)
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, tokens.access_token);
    localStorage.setItem(
      STORAGE_KEYS.ACCESS_TOKEN_EXPIRES,
      (Date.now() + expiresIn * 1000).toString()
    );

    // ALWAYS store refresh token in localStorage and cookies
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, tokens.refresh_token);
    const refreshTokenExpiry = 30 * 24 * 60 * 60; // 30 days in seconds
    setAuthCookie(COOKIE_NAMES.REFRESH_TOKEN, tokens.refresh_token, refreshTokenExpiry, true);

    // === REMEMBER ME LOGIC ===
    // Always store session timestamp to allow auto-login
    // - If CHECKED: Stores with 30-day expiry → auto-login for 30 days
    // - If NOT CHECKED: Stores with 1-day expiry → auto-login for 1 day only
    if (tokens.refresh_token) {
      const timestamp = Date.now().toString();
      if (rememberMe) {
        // Remember Me checked: 30-day auto-login window
        setAuthCookie(
          COOKIE_NAMES.REFRESH_TOKEN_TIME,
          timestamp,
          TOKEN_EXPIRY.THIRTY_DAYS_SECONDS,
          true
        );
        console.log(`${LOG_PREFIX.AUTH} Remember Me enabled - auto-login will work for 30 days`);
      } else {
        // Remember Me not checked: 1-day auto-login window only
        setAuthCookie(
          COOKIE_NAMES.REFRESH_TOKEN_TIME,
          timestamp,
          Math.ceil(TOKEN_EXPIRY.ONE_DAY_MS / 1000), // Convert to seconds
          true
        );
        console.log(`${LOG_PREFIX.AUTH} Remember Me disabled - auto-login will work for 1 day`);
      }
      // Keep for backward compatibility
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, timestamp);
    }
  }

  return tokens;
};

/**
 * Handle Google OAuth authentication and token storage
 * Exchanges Google authorization code via gateway and stores resulting tokens
 *
 * @param code - Google authorization code returned by useGoogleLogin hook
 * @param rememberMe - Whether to enable auto-login on page revisit
 * @returns Authentication tokens
 */
export const handleGoogleAuthentication = async (
  code: string,
  rememberMe: boolean = true
): Promise<AuthenticationTokens> => {
  const authResponse = await authGoogle(code);
  const { tokens } = authResponse;

  if (tokens.access_token) {
    const decoded: any = jwtDecode(tokens.access_token);
    const expiresIn = (decoded.exp || 0) - Math.floor(Date.now() / 1000);

    setAuthCookie(COOKIE_NAMES.ACCESS_TOKEN, tokens.access_token, expiresIn, true);

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, tokens.access_token);
    localStorage.setItem(
      STORAGE_KEYS.ACCESS_TOKEN_EXPIRES,
      (Date.now() + expiresIn * 1000).toString()
    );

    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, tokens.refresh_token);
    const refreshTokenExpiry = 30 * 24 * 60 * 60;
    setAuthCookie(COOKIE_NAMES.REFRESH_TOKEN, tokens.refresh_token, refreshTokenExpiry, true);

    if (tokens.refresh_token) {
      const timestamp = Date.now().toString();
      if (rememberMe) {
        // Remember Me checked: 30-day auto-login window
        setAuthCookie(
          COOKIE_NAMES.REFRESH_TOKEN_TIME,
          timestamp,
          TOKEN_EXPIRY.THIRTY_DAYS_SECONDS,
          true
        );
        console.log(`${LOG_PREFIX.AUTH} Google login - Remember Me enabled for 30 days`);
      } else {
        // Remember Me not checked: 1-day auto-login window only
        setAuthCookie(
          COOKIE_NAMES.REFRESH_TOKEN_TIME,
          timestamp,
          Math.ceil(TOKEN_EXPIRY.ONE_DAY_MS / 1000), // Convert to seconds
          true
        );
        console.log(`${LOG_PREFIX.AUTH} Google login - auto-login will work for 1 day`);
      }
      // Keep for backward compatibility
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, timestamp);
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
        name: decoded.name,
        preferred_username: decoded.preferred_username,
        given_name: decoded.given_name,
        family_name: decoded.family_name,
        email: decoded.email,
      },
      // Include token metadata for operations like cookie expiry
      decoded: {
        exp: decoded.exp,
      },
    };
  } catch (e) {
    console.error(
      `${LOG_PREFIX.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      e
    );
    return null;
  }
};
