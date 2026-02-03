import axios from "axios";
import type {
  CheckEmailResponse,
  RegisterRequest,
  RegisterResponse
} from "../types/index";

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
    const response = await axios.post<RegisterResponse>(url, data);
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
    const response = await axios.post<CheckEmailResponse>(url, { email });
    return response.data;
  } catch (error: any) {
    console.error("Error checking email:", error);
    
    // If API fails, assume email doesn't exist to allow form submission
    if (error.response?.data) {
      return error.response.data;
    }
    
    return { exists: false };
  }
};

/**
 * Forgot Password API - Send password reset link to email
 */
export const forgotPassword = async (email: string): Promise<any> => {
  const url = apiUrl("api/forgot-password");
  const payload = { email };
  try {
    const response = await axios.post(url, payload);
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
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    console.error("Error during token refresh:", error);
    throw error;
  }
};

