import axios from "axios";
import type {
  CheckMigrationStatusResponse,
  LoginResponse,
  CheckAvailableEmailResponse,
  TenantDetailsResponse
} from "../types/index";

// Helper to build URLs that respect BASE
const apiUrl = (path: string): string => `${path}`;

/**
 * Auth API - Login with username and password
 */
export const authLogin = async (
  username: string,
  password: string
): Promise<any> => {
  const url = apiUrl("api/auth");
  const payload = { username, password };
  try {
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    console.error("Error during auth login:", error);
    throw error;
  }
};

/**
 * Auth API - Refresh token
 */
export const authRefresh = async (refreshToken: string): Promise<any> => {
  const url = apiUrl("/auth/refresh");
  const payload = { refresh_token: refreshToken };
  try {
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    console.error("Error during token refresh:", error);
    throw error;
  }
};

/**
 * Auth API - Logout
 */
export const authLogout = async (refreshToken: string): Promise<void> => {
  const url = apiUrl("/auth/logout");
  const payload = { refresh_token: refreshToken };
  try {
    await axios.post(url, payload);
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};

/**
 * Auth API - Health check
 */
export const authHealthCheck = async (): Promise<any> => {
  const url = apiUrl("/auth/health");
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error checking auth health:", error);
    throw error;
  }
};

/**
 * Check migration status of a user by email
 */
export const checkMigrationStatus = async (
  email: string
): Promise<CheckMigrationStatusResponse | null> => {
  const url = apiUrl("/api/oauthproxy/checkMigrationStatus");
  const payload = { email };
  try {
    const response = await axios.post<CheckMigrationStatusResponse>(
      url,
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error checking migration status:", error);
    return null;
  }
};

/**
 * Obtain OAuth token using username and password
 */
export const obtainToken = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const url = apiUrl("/api/oauthproxy/token");
  const payload = { username, password, grant_type: "password" };
  try {
    // eslint-disable-next-line no-console
    const response = await axios.post<LoginResponse>(url, payload);
    return response.data;
  } catch (error) {
    console.error("Error obtaining token:", error);
    throw error;
  }
};

/**
 * Update password and obtain token in upgrade mode
 */
export const updatePasswordObtainToken = async (
  payload: Record<string, unknown>
): Promise<LoginResponse> => {
  const url = apiUrl("/api/oauthproxy/token");
  try {
    // eslint-disable-next-line no-console
    const response = await axios.post<LoginResponse>(url, payload);
    return response.data;
  } catch (error) {
    console.error("Error obtaining token:", error);
    throw error;
  }
};

// get tenant details
export const getTenentDetails = async (): Promise<TenantDetailsResponse> => {
  const url = apiUrl("brands/colibrirealestate/tenantdetail.json");
  try {
    const response = await axios.get<TenantDetailsResponse>(url);
    return response.data;
  } catch (error) {
    console.error("Error obtaining token:", error);
    throw error;
  }
};

// in registration page check available email
export const checkAvailableEmail = async (
  email: string,
  TenantId: number
): Promise<CheckAvailableEmailResponse | null> => {
  const url = apiUrl("/api/CheckAvailableEmail");
  const payload = {
    emailAddress: email,
    checkCommonDb: true,
    tenantId: TenantId,
  };
  try {
    const response = await axios.post<CheckAvailableEmailResponse>(
      url,
      payload
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

// in registration page check available email
export type RegisterUserPayload = {
  userName: string;
  emailAddress?: string;
  givenName: string;
  middleName?: string | null;
  familyName: string;
  password: string;
  acceptTermsOfService: boolean;
  tenantId?: number;
  tenantBrandName?: string;
  identityProvider?: string;
  preferredLanguage?: string;
  locale?: string;
  returnUrl?: string;
  targetRoute?: string;
  mobileNumber?: string;
  honorificPrefix?: string;
  honorificSuffix?: string;
  professionalDesignations?: string;
  externalId?: string | null;
};

export const handleRegister = async (
  payload: RegisterUserPayload
): Promise<CheckAvailableEmailResponse | null> => {
  const url = apiUrl("/register/ProvisionStudentIdentity");

  // Recursive cleaning helper: removes empty/null/undefined and literal strings
  const cleanValue = (v: any): any => {
    if (v === null || typeof v === "undefined") return undefined;
    if (typeof v === "string") {
      const s = v.trim();
      if (s === "" || s.toLowerCase() === "undefined" || s.toLowerCase() === "null") return undefined;
      return s;
    }
    if (Array.isArray(v)) {
      const arr = v.map((x) => cleanValue(x)).filter((x) => typeof x !== "undefined");
      return arr.length ? arr : undefined;
    }
    if (typeof v === "object") {
      const o: Record<string, any> = {};
      Object.entries(v).forEach(([k, iv]) => {
        const cv = cleanValue(iv);
        if (typeof cv !== "undefined") o[k] = cv;
      });
      return Object.keys(o).length ? o : undefined;
    }
    return v; // numbers, booleans, etc.
  };

  const cleanedPayload = cleanValue(payload) || {};

  try {
    const debugPayload = { ...cleanedPayload } as any;
    if (debugPayload.password) debugPayload.password = "***";
    // if (process.env.NODE_ENV !== "production") console.debug("Register payload:", debugPayload);

    const response = await axios.post<CheckAvailableEmailResponse>(url, cleanedPayload);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    // rethrow so callers can act on the server error (status/message)
    throw error;
  }
};
