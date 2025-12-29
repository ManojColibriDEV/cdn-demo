import { keyclockLogin, updatePasswordObtainToken } from "../services/index";
import type {
  HandleSubmitProps,
  HandleUpdatePasswordProps,
  UpgradeUser,
  PasswordChecks,
  KeycloakLoginResponse,
} from "../types/index";
import { jwtDecode } from "jwt-decode";

function setCookie(
  name: string,
  value: string,
  expiresInSeconds: number
): void {
  const expires = new Date();
  expires.setSeconds(expires.getSeconds() + expiresInSeconds); // Set expiration based on seconds
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires.toUTCString()}; path=/; secure; SameSite=Strict`;
}

// Store tokens in cookies and session storage
function storeTokens(response: KeycloakLoginResponse): void {
  const { accessToken, refreshToken, expiresIn } = response;

  // Setting cookies with expiration time in seconds
  setCookie("access_token", accessToken, expiresIn);
  setCookie("refresh_token", refreshToken, expiresIn);

  // Decode JWT to get user info
  const decoded: any = jwtDecode(accessToken);
  sessionStorage.setItem("user_info", JSON.stringify(decoded));
}

/**
 * Handle login form submission
 * Validates credentials, obtains token, and handles password upgrade flow
 */
export const handleSubmit = async (props: HandleSubmitProps): Promise<void> => {
  const { e, email, password, redirectUrl, setLoginError, setLoginLoading } =
    props;
  e.preventDefault();
  setLoginError(null);
  if (!email || !password) return;
  setLoginLoading(true);
  try {
    const resp = await keyclockLogin(email.trim(), password);
    if (resp && resp?.success) {
      storeTokens(resp);
      setLoginLoading(false);
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
      return;
    }
  } catch (err) {
    // Prefer backend error message if present
    const e = err as {
      response?: { data?: { message?: string; error_description?: string } };
      message?: string;
    };
    const backendMsg =
      e?.response?.data?.message || e?.response?.data?.error_description;
    setLoginError(backendMsg || e?.message || "Sign in failed");
    setLoginLoading(false);
  }
};

/**
 * Handle password update during upgrade flow
 * Submits new password and obtains OAuth token
 */
export const handleUpdatePassword = async (
  props: HandleUpdatePasswordProps
): Promise<void> => {
  const {
    e,
    newPassword,
    upgradeUser,
    setLoginLoading,
    setLoginError,
    navigate,
  } = props;
  setLoginLoading(true);
  e.preventDefault();
  const payload = {
    username: upgradeUser?.email,
    password: newPassword,
    passwordUpgradeMode: true,
    studentId: upgradeUser?.studentId,
  };
  try {
    const resp = await updatePasswordObtainToken(payload);
    if (resp && resp?.status === "FAILED") {
      setLoginError(resp?.message || "Sign in failed");
      setLoginLoading(false);
      return;
    }
    // If backend requires password upgrade, show upgrade UI
    if (resp && resp?.redirect_url) {
      setLoginLoading(false);
      navigate(resp.redirect_url);
      return;
    }
  } catch (err) {
    console.error("Sign in failed", err);
    const e = err as {
      response?: { data?: { message?: string; error_description?: string } };
      message?: string;
    };
    const backendMsg =
      e?.response?.data?.message || e?.response?.data?.error_description;
    setLoginError(backendMsg || e?.message || "Sign in failed");
    setLoginLoading(false);
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
