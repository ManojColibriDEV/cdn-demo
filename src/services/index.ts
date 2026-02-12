import axios from "axios";
import type { CheckEmailResponse, RegisterRequest, RegisterResponse } from "../types/index";
import {
  API_ENDPOINTS,
  HTTP_STATUS,
  RenderMode,
  STORAGE_KEYS,
  HTTP_HEADERS,
  ERROR_MESSAGES,
  AUTH_GATEWAY_URLS,
  GLOBAL_API_URLS,
  Authority,
  ENV_PREFIXES,
  LOCALHOST,
} from "../constants";

// Subsidiary type from global API
interface Subsidiary {
  subsidiaryId: number;
  subsidiaryName: string;
  siteURL: string | null;
}

// Get render mode to determine URL strategy
const RENDER_MODE = (import.meta as any).env.VITE_RENDER_MODE || RenderMode.WEBCOMPONENT;

/**
 * Set authority override (e.g., "dev", "test", "stage", "prod")
 * When set, this will be used instead of auto-detection from URL
 */
export function setAuthorityOverride(authority: string | null): void {
  if (authority) {
    localStorage.setItem(STORAGE_KEYS.AUTHORITY_OVERRIDE, authority);
  } else {
    localStorage.removeItem(STORAGE_KEYS.AUTHORITY_OVERRIDE);
  }
}

/**
 * Get current authority override if set
 */
export function getAuthorityOverride(): string | null {
  return localStorage.getItem(STORAGE_KEYS.AUTHORITY_OVERRIDE);
}

/**
 * Clear authority override
 */
export function clearAuthorityOverride(): void {
  localStorage.removeItem(STORAGE_KEYS.AUTHORITY_OVERRIDE);
}

/**
 * Auto-detect environment/authority from current URL hostname
 * Checks for explicit authority override first, then falls back to URL-based detection
 * @returns The authority string: 'dev', 'test', 'stage', or 'prod'
 */
function detectEnvironmentAuthority(): Authority {
  // Check for explicit authority override first
  const override = getAuthorityOverride();
  if (override) {
    // Validate that it's a valid authority
    const validAuthorities = Object.values(Authority);
    if (validAuthorities.includes(override as Authority)) {
      return override as Authority;
    }
  }

  // Fall back to URL-based detection
  const hostname = window.location.hostname;

  // localhost defaults to dev
  if (
    hostname === LOCALHOST.HOSTNAME ||
    hostname === LOCALHOST.IP ||
    LOCALHOST.IP_PATTERN.test(hostname)
  ) {
    return Authority.DEV;
  }

  // Check for environment prefixes
  if (hostname.startsWith(`${ENV_PREFIXES.DEV}.`) || hostname.startsWith(`${ENV_PREFIXES.DEV}-`)) {
    return Authority.DEV;
  } else if (
    hostname.startsWith(`${ENV_PREFIXES.TEST}.`) ||
    hostname.startsWith(`${ENV_PREFIXES.TEST}-`)
  ) {
    return Authority.TEST;
  } else if (
    hostname.startsWith(`${ENV_PREFIXES.STAGE}.`) ||
    hostname.startsWith(`${ENV_PREFIXES.STAGE}-`)
  ) {
    return Authority.STAGE;
  } else {
    // Production (no prefix)
    return Authority.PROD;
  }
}

/**
 * Get the appropriate base URL for a specific service based on endpoint path
 * In TEST mode: Returns empty string (uses Vite proxy)
 * In WEBCOMPONENT mode: Returns environment-specific base URL for the service
 *
 * @param path - The API endpoint path (e.g., '/api/auth', '/global/subsidiaries')
 * @returns The base URL for the service
 */
function getBaseUrlForService(path: string): string {
  // In TEST mode, always use empty string for Vite proxy
  if (RENDER_MODE === RenderMode.TEST) {
    return "";
  }

  // Auto-detect environment
  const authority = detectEnvironmentAuthority();

  // Route to correct service based on path
  if (path.startsWith("/global")) {
    return GLOBAL_API_URLS[authority];
  } else {
    // Default to auth gateway for /api/* and other endpoints
    return AUTH_GATEWAY_URLS[authority];
  }
}

// Helper to build URLs that respect mode and service type
// TEST mode: returns relative URLs for Vite proxy (e.g., /api/auth, /global/subsidiaries)
// WEBCOMPONENT mode: returns full URLs for direct API calls with correct service domain
const apiUrl = (path: string): string => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // In TEST mode, always use relative paths for Vite's dev server proxy
  if (RENDER_MODE === RenderMode.TEST) {
    return cleanPath;
  }

  // In WEBCOMPONENT mode, use auto-detected environment base URL for the specific service
  const baseUrl = getBaseUrlForService(cleanPath);
  return `${baseUrl}${cleanPath}`;
};

/**
 * Fetch subsidiaries from global API
 */
export const fetchSubsidiaries = async (domain: string): Promise<string | undefined> => {
  try {
    const response = await axios.get<Subsidiary[]>(apiUrl(API_ENDPOINTS.GLOBAL_SUBSIDIARIES));
    const filterSubsidiaryId: any = response?.data?.find((sub) =>
      sub?.siteURL?.includes(domain)
    )?.subsidiaryId;
    return filterSubsidiaryId;
  } catch (error) {
    console.error("Error fetching subsidiaries:", error);
  }
};

export async function getBrandHeaders() {
  const brandData = localStorage.getItem(STORAGE_KEYS.BRAND_DATA);
  if (!brandData) {
    return {};
  }
  const brand = JSON.parse(brandData);

  // Fetch subsidiary ID from API based on domain
  const subsidiaryId = await fetchSubsidiaries(brand?.domain);

  return {
    [HTTP_HEADERS.X_BRAND_ID]: brand?.id,
    [HTTP_HEADERS.X_SUBSIDIARY_ID]: subsidiaryId?.toString(),
    [HTTP_HEADERS.X_BRAND_DOMAIN]: brand?.domain,
  };
}

/**
 * Auth API - Login with username and password
 */
export const authLogin = async (username: string, password: string): Promise<any> => {
  const url = apiUrl(API_ENDPOINTS.AUTH);
  const payload = { username, password };
  try {
    const response = await axios.post(url, payload, {
      headers: await getBrandHeaders(),
    });
    return response.data;
  } catch (error: any) {
    console.error("Error during auth login:", error);

    // Extract error message from response
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    } else if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
      throw new Error(ERROR_MESSAGES.INVALID_CREDENTIALS);
    } else if (error.message) {
      throw new Error(error.message);
    }

    throw new Error(ERROR_MESSAGES.AUTH_FAILED);
  }
};

/**
 * Register API - Create new user account
 */
export const authRegister = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const url = apiUrl(API_ENDPOINTS.REGISTER);
  try {
    const response = await axios.post<RegisterResponse>(url, data, {
      headers: await getBrandHeaders(),
    });
    return response.data;
  } catch (error: any) {
    console.error("Error during registration:", error);

    // Extract error message from response
    if (error.response?.data?.details?.errorMessage) {
      // Handle structured error response: { error: "...", details: { errorMessage: "..." } }
      throw new Error(error.response.data.details.errorMessage);
    } else if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    } else if (error.response?.data?.details) {
      throw new Error(error.response.data.details);
    } else if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else if (error.response?.status === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
      throw new Error(ERROR_MESSAGES.REGISTRATION_FAILED_RETRY);
    } else if (error.message) {
      throw new Error(error.message);
    }

    throw new Error(ERROR_MESSAGES.REGISTRATION_FAILED);
  }
};

/**
 * Check Email API - Check if email already exists
 */
export const checkEmail = async (email: string): Promise<CheckEmailResponse> => {
  const url = apiUrl(API_ENDPOINTS.CHECK_EMAIL);
  try {
    const response = await axios.post<CheckEmailResponse>(
      url,
      { email },
      {
        headers: await getBrandHeaders(),
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("Error checking email:", error);

    // Throw error with meaningful message for UI to display
    if (error.response?.status === 405) {
      throw new Error("Email verification service is temporarily unavailable (Method Not Allowed)");
    } else if (error.response?.status === 403) {
      throw new Error("Access denied to email verification service");
    } else if (error.response?.status === 500) {
      throw new Error("Email verification service encountered an error");
    } else if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    } else if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else if (error.message) {
      throw new Error(`Email verification failed: ${error.message}`);
    }

    throw new Error("Unable to verify email. Please try again.");
  }
};

/**
 * Forgot Password API - Send password reset link to email
 */
export const forgotPassword = async (email: string): Promise<any> => {
  const url = apiUrl(API_ENDPOINTS.FORGOT_PASSWORD);
  const payload = { email };
  try {
    const response = await axios.post(url, payload, {
      headers: await getBrandHeaders(),
    });
    return response.data;
  } catch (error: any) {
    console.error("Error sending password reset:", error);

    // Extract error message from response
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    } else if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else if (error.response?.status === HTTP_STATUS.NOT_FOUND) {
      throw new Error("We couldn't find an account with that email.");
    } else if (error.message) {
      throw new Error(error.message);
    }

    throw new Error(ERROR_MESSAGES.RESET_LINK_FAILED);
  }
};

/**
 * Auth API - Refresh token
 */
export const authRefresh = async (refreshToken: string): Promise<any> => {
  const url = apiUrl(API_ENDPOINTS.REFRESH_TOKEN);
  const payload = { refresh_token: refreshToken };
  try {
    const response = await axios.post(url, payload, {
      headers: await getBrandHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error during token refresh:", error);
    throw error;
  }
};
