/**
 * Mock Data: Password Reset API Responses
 * Contains mock responses for forgot password functionality
 */

export const mockForgotPasswordSuccessResponse = {
  success: true,
  message: "Password reset link has been sent to your email",
};

export const mockForgotPasswordNotFoundResponse = {
  error: "Not found",
  message: "We couldn't find an account with that email.",
};

export const mockForgotPasswordErrorResponse = {
  error: "Service error",
  message: "Unable to send reset link. Please try again later.",
};

export const mockForgotPasswordRequest = {
  email: "user@example.com",
};
