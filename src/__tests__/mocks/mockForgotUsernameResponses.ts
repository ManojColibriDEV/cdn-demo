/**
 * Mock Data: Forgot Username API Responses
 * Contains mock responses for forgot username functionality
 */

export const mockForgotUsernameSuccessResponse = {
  success: true,
  message: "Username verification link has been sent to your email",
};

export const mockForgotUsernameNotFoundResponse = {
  error: "Not found",
  message: "We couldn't find an account with that email.",
};

export const mockForgotUsernameErrorResponse = {
  error: "Service error",
  message: "Unable to send verification link. Please try again later.",
};

export const mockForgotUsernameRequest = {
  email: "user@example.com",
};
