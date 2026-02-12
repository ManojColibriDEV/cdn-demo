/**
 * Mock Data: Registration API Responses
 * Contains mock responses for user registration and email validation
 */

import type { CheckEmailResponse, RegisterResponse } from "../../types";

export const mockCheckEmailAvailableResponse: CheckEmailResponse = {
  exists: false, // false means available
};

export const mockCheckEmailTakenResponse: CheckEmailResponse = {
  exists: true, // true means already taken
};

export const mockCheckEmailErrorResponse = {
  error: "Service unavailable",
  message: "Email verification service is temporarily unavailable",
};

export const mockRegisterSuccessResponse: RegisterResponse = {
  success: true,
  message: "User registered successfully",
};

export const mockRegisterErrorResponse = {
  error: "Registration failed",
  details: {
    errorMessage: "An account with this email already exists",
  },
};

export const mockRegisterValidationErrorResponse = {
  error: "Validation failed",
  details: {
    errorMessage: "Password does not meet security requirements",
  },
};

export const mockRegisterServerErrorResponse = {
  error: "Internal server error",
  message: "Registration service encountered an error. Please try again later.",
};

export const mockRegisterRequestData = {
  username: "newuser@example.com",
  email: "newuser@example.com",
  password: "SecureP@ss123!",
  firstName: "Jane",
  lastName: "Smith",
};
