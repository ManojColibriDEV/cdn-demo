import axios from "axios";
import type {
  CheckEmailResponse,
  RegisterRequest,
  RegisterResponse
} from "../types/index";

// Subsidiary type from global API
interface Subsidiary {
  subsidiaryId: number;
  subsidiaryName: string;
  siteURL: string | null;
}

// Get render mode to determine URL strategy
const RENDER_MODE = (import.meta as any).env.VITE_RENDER_MODE || 'WEBCOMPONENT';
const API_BASE_URL = (import.meta as any).env.VITE_API_BASE_URL || '';

// Helper to build URLs that respect mode
// TEST mode: returns relative URLs for Vite proxy (e.g., /api/auth)
// WEBCOMPONENT mode: returns full URLs for direct API calls (e.g., https://domain.com/api/auth)
const apiUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // In TEST mode, always use relative paths for Vite's dev server proxy
  if (RENDER_MODE === 'TEST') {
    return cleanPath;
  }

  // In WEBCOMPONENT mode, use full URL if API_BASE_URL is configured
  if (API_BASE_URL) {
    return `${API_BASE_URL}${cleanPath}`;
  }

  // Fallback to relative URL (for proxy server or same-origin deployment)
  return cleanPath;
};

/**
 * Fetch subsidiaries from global API
 */
export const fetchSubsidiaries = async (domain: string): Promise<string | undefined> => {
  try {
    const response = await axios.get<Subsidiary[]>(apiUrl("global/subsidiaries"));
    const filterSubsidiaryId: any = response?.data?.find(sub => sub?.siteURL?.includes(domain))?.subsidiaryId;
    return filterSubsidiaryId;
  } catch (error) {
    console.error("Error fetching subsidiaries:", error);
  }
};


export async function getBrandHeaders() {
  const brandData = localStorage.getItem("brand_data");
  if (!brandData) {
    return {};
  }
  const brand = JSON.parse(brandData);

  // Fetch subsidiary ID from API based on domain
  const subsidiaryId = await fetchSubsidiaries(brand?.domain);

  return {
    'X-Brand-Id': brand?.id,
    'X-Subsidiary-Id': subsidiaryId?.toString(),
    'X-Brand-Domain': brand?.domain,
  };
}


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
    const response = await axios.post(url, payload, {
      headers: await getBrandHeaders()
    });
    return response.data;
  } catch (error: any) {
    console.error("Error during auth login:", error);

    // Extract error message from response
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    } else if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else if (error.response?.status === 401) {
      throw new Error("Invalid credentials");
    } else if (error.message) {
      throw new Error(error.message);
    }

    throw new Error("Authentication failed");
  }
};

/**
 * Register API - Create new user account
 */
export const authRegister = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  const url = apiUrl("api/register");
  try {
    const response = await axios.post<RegisterResponse>(url, data, {
      headers: await getBrandHeaders()
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
    } else if (error.response?.status === 500) {
      throw new Error("Registration failed. Please try again.");
    } else if (error.message) {
      throw new Error(error.message);
    }

    throw new Error("Registration failed");
  }
};

/**
 * Check Email API - Check if email already exists
 */
export const checkEmail = async (email: string): Promise<CheckEmailResponse> => {
  const url = apiUrl("api/check-email");
  try {
    const response = await axios.post<CheckEmailResponse>(url, { email }, {
      headers: await getBrandHeaders()
    });
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
  const url = apiUrl("api/forgot-password");
  const payload = { email };
  try {
    const response = await axios.post(url, payload, {
      headers: await getBrandHeaders()
    });
    return response.data;
  } catch (error: any) {
    console.error("Error sending password reset:", error);

    // Extract error message from response
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    } else if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else if (error.response?.status === 404) {
      throw new Error("We couldn't find an account with that email.");
    } else if (error.message) {
      throw new Error(error.message);
    }

    throw new Error("Failed to send password reset link");
  }
};

/**
 * Auth API - Refresh token
 */
export const authRefresh = async (refreshToken: string): Promise<any> => {
  const url = apiUrl("api/refresh");
  const payload = { refresh_token: refreshToken };
  try {
    const response = await axios.post(url, payload, {
      headers: await getBrandHeaders()
    });
    return response.data;
  } catch (error) {
    console.error("Error during token refresh:", error);
    throw error;
  }
};

