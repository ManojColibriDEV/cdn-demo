import { updatePasswordObtainToken } from "../services/index";
import { signIn } from "../auth/oidcService";
import { resolveAuthority } from "../utils/authorityResolver";
import type {
  HandleSubmitProps,
  HandleUpdatePasswordProps,
  UpgradeUser,
  PasswordChecks,
} from "../types/index";

/**
 * Handle login form submission - triggers SSO popup authorization code flow
 */
export const handleSubmit = async (props: HandleSubmitProps): Promise<any> => {
  const { e, authority, setLoginError, setLoginLoading } = props;
  e.preventDefault();
  setLoginError(null);
  setLoginLoading(true);
  
  try {
    // Get authority from localStorage if not provided, then resolve it
    const storedAuthority = authority || localStorage.getItem("authority");
    const auth = resolveAuthority(storedAuthority);
    
    // Trigger SSO login with popup (returns user session directly)
    const userSession = await signIn(auth);
    setLoginLoading(false);
    return userSession;
  } catch (err) {
    const e = err as { message?: string };
    setLoginError(e?.message || "Sign in failed");
    setLoginLoading(false);
    throw err;
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
