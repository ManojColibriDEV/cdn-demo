import type {
  UpgradeUser,
  PasswordChecks,
} from "../types/index";

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
    special: /[!@#$%^&*\-_.]/.test(pw) && /^[A-Za-z0-9!@#$%^&*\-_.]+$/.test(pw),
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

    // Check if token exists and is valid
    const decodedStr = localStorage.getItem('decoded');
    if (!decodedStr) {
      return false;
    }

    const token = JSON.parse(decodedStr);
    const currentTime = Math.floor(Date.now() / 1000);

    // Check if token is expired
    if (!token.exp || currentTime >= token.exp) {
      return false;
    }

    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
    return true;
  } catch (error) {
    console.error('[checkTokenAndRedirect] Error:', error);
    return false;
  }
}