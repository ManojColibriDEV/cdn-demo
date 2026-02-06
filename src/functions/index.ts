import type {
  UpgradeUser,
  PasswordChecks,
  AuthenticationTokens,
} from "../types/index";
import { jwtDecode } from "jwt-decode";
import { setAuthCookie } from "../utils/cookieHelper";
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
    // Try to get from localStorage as fallback
    xCredential = localStorage.getItem('x_credential') || localStorage.getItem('X-Credential');
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

export const checkTokenAndRedirect = (redirectUrl?: string): boolean => {
  try {
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
    if (!hasXCred) {
      hasXCred = !!localStorage.getItem('x_credential');
    }

    // Check if we have both token and x_credential
    if (!token || !hasXCred) {
      return false;
    }

    // Check localStorage expiration first (faster than JWT decode)
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
 * Check if refresh token is valid and not expired
 * Refresh tokens typically have longer expiry (days/weeks)
 */
export const isRefreshTokenValid = (): boolean => {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    const refreshTokenTime = localStorage.getItem('refresh_token_time');

    if (!refreshToken || !refreshTokenTime) {
      return false;
    }

    // Assuming refresh token is valid for 7 days (adjust as needed)
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
 */
export const clearAuthTokens = (): void => {
  // Clear all auth-related localStorage items
  const authKeys = [
    'user_state',
    'refresh_token',
    'refresh_token_time',
    'access_token',
    'access_token_expires',
    'x_credential',
    'user_info'
  ];
  authKeys.forEach(key => localStorage.removeItem(key));

  // Clear cookies
  document.cookie.split(";").forEach((c) => {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}

/**
 * Handle user authentication and token storage
 * Reusable function for login flow
 * @param username - User's email or username
 * @param password - User's password
 * @param rememberMe - Whether to persist refresh token
 * @returns Authentication tokens
 */
export const handleAuthentication = async (
  username: string,
  password: string,
  rememberMe: boolean = true
): Promise<AuthenticationTokens> => {
  // Use the service function - returns { tokens, userinfo, x_credential }
  const authResponse = await authLogin(username, password);
  const { tokens, userinfo, x_credential } = authResponse;

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

    // === CROSS-DOMAIN STORAGE ===
    // Store in localStorage for cross-domain access (widget can read these)
    // This helps when cookies fail due to cross-origin restrictions
    localStorage.setItem('access_token', tokens.access_token);
    localStorage.setItem('access_token_expires', (Date.now() + expiresIn * 1000).toString());

    // Store refresh token in localStorage always (even if not remembering) for potential use in the same session
    localStorage.setItem('refresh_token', tokens.refresh_token);
    // Store in cookies (30 days expiration for refresh token)
    const refreshTokenExpiry = 30 * 24 * 60 * 60; // 30 days in seconds
    setAuthCookie('refresh_token', tokens.refresh_token, refreshTokenExpiry, true);

    // Store x_credential in localStorage
    if (xCred) {
      localStorage.setItem('x_credential', xCred);
    }

    // Store user info for UI purposes
    if (userinfo) {
      localStorage.setItem('user_info', JSON.stringify({
        email: userinfo.email,
        name: userinfo.name || `${userinfo.given_name || ''} ${userinfo.family_name || ''}`.trim(),
        studentId: userinfo.studentId || userinfo.student_id
      }));
    }

    // Store refresh token in both localStorage when Remember Me is checked
    if (rememberMe && tokens.refresh_token) {
      localStorage.setItem('refresh_token_time', Date.now().toString());
    } else {
      // Clear refresh token from both localStorage if Remember Me is not checked
      localStorage.removeItem('refresh_token_time');
    }
  }

  return tokens;
};