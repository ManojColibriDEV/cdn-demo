import type {
  UpgradeUser,
  PasswordChecks,
  AuthenticationTokens,
} from "../types/index";
import { jwtDecode } from "jwt-decode";
import { setAuthCookie } from "../utils/cookieHelper";
import { authLogin } from "../services";

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
    length: pw.length >= 9 && pw.length <= 15,
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
 * Return only the digit characters from a string.
 * Useful for sanitizing phone/mobile inputs where only numbers are allowed.
 */
export function onlyDigits(input: string): string {
  if (!input) return "";
  return String(input).replace(/\D+/g, "");
}

/**
 * Strip out any characters that are not letters, spaces, hyphens or apostrophes.
 * Uses Unicode property escapes to allow letters beyond ASCII.
 */
export function onlyLetters(input: string): string {
  if (!input) return "";
  // Allow letters (Unicode), spaces, apostrophes and hyphens
  return String(input)
    .replace(/[^^\p{L}' \-]+/gu, "")
    .replace(/\s+/g, " ");
}

export const checkTokenAndRedirect = (redirectUrl?: string): boolean => {
  try {
    // Check if X-Credential cookie exists
    const xCredCookie = document.cookie.split(';').find(row => row.trim().startsWith('X-Credential='));
    if (!xCredCookie) {
      return false;
    }

    // Check if access token cookie exists
    const accessTokenCookie = document.cookie.split(';').find(row => row.trim().startsWith('access_token='));
    if (!accessTokenCookie) {
      return false;
    }

    // Extract and decode the access token
    const token = accessTokenCookie.split('=')[1];
    if (!token) {
      return false;
    }

    try {
      const { jwtDecode } = require('jwt-decode');
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
  // Clear localStorage
  localStorage.removeItem('user_state');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('refresh_token_time');
  localStorage.removeItem('access_token');
  
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
  // Use the service function
  const { tokens } = await authLogin(username, password);

  // Store tokens if provided
  if (tokens.access_token) {
    const decoded: any = jwtDecode(tokens.access_token);
    const expiresIn = (decoded.exp || 0) - Math.floor(Date.now() / 1000);

    // Set cookies for access token (with encoding)
    setAuthCookie('access_token', tokens.access_token, expiresIn, true);

    // Set X-Credential cookie without encoding to preserve the exact format
    if (decoded.x_credentials) {
      setAuthCookie('X-Credential', decoded.x_credentials, expiresIn, false);
    }

    // Store user state
    localStorage.setItem('user_state', 'authenticated');

    // Only store refresh token if Remember Me is checked
    if (rememberMe && tokens.refresh_token) {
      localStorage.setItem('refresh_token', tokens.refresh_token);
      // Store timestamp when refresh token was saved
      localStorage.setItem('refresh_token_time', Date.now().toString());
    } else {
      // Clear refresh token if Remember Me is not checked
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('refresh_token_time');
    }
  }

  return tokens;
};