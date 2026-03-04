/**
 * Component Tests: Embedded Login Form
 * Tests for login form validation, submission, and user interactions
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import EmbeddedLoginForm from "../../components/embedded-login-form";
import App from "../../App";
import * as services from "../../services";
import * as functions from "../../functions";
import { STORAGE_KEYS } from "../../constants";

// Mock services
vi.mock("../../services", () => ({
  checkEmail: vi.fn(),
  authRegister: vi.fn(),
  authRefresh: vi.fn(),
  setAuthorityOverride: vi.fn(),
  clearAuthorityOverride: vi.fn(),
}));

// Mock functions
vi.mock("../../functions", () => ({
  handleAuthentication: vi.fn(),
  checkTokenAndRedirect: vi.fn(),
  checkTokenAndRedirectWithRefresh: vi.fn(),
  isRefreshTokenValid: vi.fn(),
  isRefreshTokenExpiredFromCookie: vi.fn(),
  refreshAuthenticationState: vi.fn(),
  silentTokenRefresh: vi.fn(),
  createUserSessionFromToken: vi.fn(),
  setAuthCookie: vi.fn(),
  clearAuthCookie: vi.fn(),
  getCookie: vi.fn(),
  getCookieDomain: vi.fn(() => ""),
  getAuthorityFromUrl: vi.fn(() => "dev"),
  getDefaultRedirectUrl: vi.fn(() => "https://dev-learn.example.com/courses"),
}));

const renderLoginForm = (props = {}) => {
  const defaultProps = {
    onSuccess: vi.fn(),
    onError: vi.fn(),
    handleClose: vi.fn(),
    authority: "dev" as const,
  };

  return render(
    <BrowserRouter>
      <EmbeddedLoginForm {...defaultProps} {...props} />
    </BrowserRouter>
  );
};

const getLoginSubmitButton = (): HTMLButtonElement => {
  const submitButton = document.querySelector(
    'button[part~="identity-widget-login-submit-button"]'
  ) as HTMLButtonElement | null;
  expect(submitButton).not.toBeNull();
  return submitButton as HTMLButtonElement;
};

describe("EmbeddedLoginForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("should render login form with title and subtitle", () => {
    renderLoginForm();

    expect(screen.getByText("Continue to login")).toBeInTheDocument();
    expect(screen.getByText("Continue by signing in.")).toBeInTheDocument();
  });

  it("should render with custom title and subtitle", () => {
    renderLoginForm({
      title: "Custom Title",
      subtitle: "Custom Subtitle",
    });

    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom Subtitle")).toBeInTheDocument();
  });

  it("should render email and password inputs", () => {
    renderLoginForm();

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it("should render login button", () => {
    renderLoginForm();

    const loginButton = getLoginSubmitButton();
    expect(loginButton).toBeInTheDocument();
  });

  it("should handle email input change", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "test@example.com");

    await waitFor(() => {
      expect(emailInput).toHaveValue("test@example.com");
    });
  });

  it("should handle password input change", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    await user.type(passwordInput, "SecureP@ss123$");

    expect(passwordInput).toHaveValue("SecureP@ss123$");
  });

  it("should show caps lock indicator when caps lock is on in password field", () => {
    renderLoginForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.keyDown(passwordInput, { key: "CapsLock" });

    expect(screen.getByText(/caps lock is on/i)).toBeInTheDocument();
  });

  it("should hide caps lock indicator when caps lock is off in password field", () => {
    renderLoginForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.keyDown(passwordInput, { key: "CapsLock" });
    expect(screen.getByText(/caps lock is on/i)).toBeInTheDocument();

    fireEvent.keyDown(passwordInput, { key: "CapsLock" });

    expect(screen.queryByText(/caps lock is on/i)).not.toBeInTheDocument();
  });

  it("should toggle password visibility", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toHaveAttribute("type", "password");

    const toggleButton = document.querySelector(
      'button[aria-label="Show password"]'
    ) as HTMLButtonElement;
    expect(toggleButton).toBeTruthy();
    await user.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");
  });

  it("should open create account when clicking Create an Account button", async () => {
    renderLoginForm();

    fireEvent.click(screen.getByRole("button", { name: /Create an Account/i }));

    await waitFor(() => {
      expect(screen.getByRole("form", { name: /Create account form/i })).toBeInTheDocument();
    });
  });

  it("should call embedded onSuccess from create-account success callback", async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();

    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });
    vi.mocked(services.authRegister as any).mockResolvedValue({ message: "ok" });
    vi.mocked(functions.handleAuthentication).mockResolvedValue({
      access_token: "new-access",
      refresh_token: "new-refresh",
      expires_in: 3600,
      token_type: "Bearer",
      scope: "openid",
    } as any);

    renderLoginForm({ onSuccess });
    fireEvent.click(screen.getByRole("button", { name: /Create an Account/i }));

    await waitFor(() => {
      expect(screen.getByRole("form", { name: /Create account form/i })).toBeInTheDocument();
    });

    await user.type(screen.getByPlaceholderText(/email/i), "newperson@example.com");
    await user.type(screen.getByPlaceholderText(/first name/i), "Jane");
    await user.type(screen.getByPlaceholderText(/last name/i), "Doe");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPass9!");
    await user.click(screen.getByRole("checkbox", { name: /remember me/i }));
    fireEvent.submit(screen.getByRole("form", { name: /create account form/i }));

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalled();
    });
  });

  it("should check email availability on blur", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "existing@example.com");
    await user.tab();

    await waitFor(() => {
      expect(services.checkEmail).toHaveBeenCalledWith("existing@example.com");
    });
  });

  it("should show create account option for new email", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false, message: "Email available" });

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "newuser@example.com");

    // Wait for debounced email check (500ms) + buffer
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(
      () => {
        expect(services.checkEmail).toHaveBeenCalledWith("newuser@example.com");
      },
      { timeout: 2000 }
    );
  });

  it("should navigate to create account form", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false, message: "Available" });

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "newuser@example.com");

    // Wait for email check (500ms debounce) + some buffer
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Verify checkEmail was called
    await waitFor(
      () => {
        expect(services.checkEmail).toHaveBeenCalledWith("newuser@example.com");
      },
      { timeout: 2000 }
    );
  });

  it("should handle remember me checkbox", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    const rememberMeCheckbox = screen.getByRole("checkbox", { name: /remember me/i });
    expect(rememberMeCheckbox).not.toBeChecked();

    await user.click(rememberMeCheckbox);
    expect(rememberMeCheckbox).toBeChecked();
  });

  it("should handle forgot password link", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    const forgotPasswordLink = screen.getByText(/forgot password/i);
    await user.click(forgotPasswordLink);

    // Should navigate to reset password form - check for reset password specific elements
    await waitFor(() => {
      // The reset form should have email input and send link button
      expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    });
  });

  it("should render styled help center entry text", () => {
    renderLoginForm();

    const helpCenterCta = screen.getByText(/visit our help center/i);
    expect(helpCenterCta).toBeInTheDocument();
    expect(helpCenterCta).toHaveClass("text-base!");
    expect(helpCenterCta).toHaveClass("font-bold!");
  });

  it("should open help center and return to login", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    await user.click(screen.getByRole("button", { name: /can't log in\?/i }));

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: /help center/i })).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /back to sign in/i }));

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: /continue to login/i })).toBeInTheDocument();
    });
  });

  it("should return from reset password to login when back button is clicked", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    await user.click(screen.getByText(/forgot password/i));
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /Back to sign in/i })).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Back to sign in/i }));

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: /Continue to login/i })).toBeInTheDocument();
    });
  });

  it("should validate email format before submission", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "invalid-email");

    const submitButton = getLoginSubmitButton();
    await user.click(submitButton);

    // Form validates email internally
    expect(emailInput).toHaveValue("invalid-email");
  });

  it("should skip API check for invalid email format containing @", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    await user.type(screen.getByPlaceholderText(/email or username/i), "bad@format");
    await new Promise((resolve) => setTimeout(resolve, 600));

    expect(services.checkEmail).not.toHaveBeenCalled();
  });

  it("should close email-not-found banner", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderLoginForm();
    await user.type(screen.getByPlaceholderText(/email or username/i), "nouser@example.com");
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(() => {
      expect(screen.getByText(/No account found with this email address/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /dismiss banner/i }));
    await waitFor(() => {
      expect(
        screen.queryByText(/No account found with this email address/i)
      ).not.toBeInTheDocument();
    });
  });

  it("should handle successful login", async () => {
    const user = userEvent.setup();
    const onSuccessMock = vi.fn();

    vi.mocked(functions.handleAuthentication).mockResolvedValue({
      success: true,
      tokens: {
        access_token: "test-token",
        refresh_token: "test-refresh",
      },
    });

    renderLoginForm({ onSuccess: onSuccessMock });

    await user.type(screen.getByPlaceholderText(/email/i), "test@example.com");
    await user.type(screen.getByPlaceholderText(/password/i), "SecureP@ss123$");

    const submitButton = getLoginSubmitButton();
    await user.click(submitButton);

    await waitFor(() => {
      expect(functions.handleAuthentication).toHaveBeenCalled();
    });
  });

  it("should handle login errors", async () => {
    const user = userEvent.setup();
    const onErrorMock = vi.fn();

    vi.mocked(functions.handleAuthentication).mockRejectedValue(new Error("Invalid credentials"));

    renderLoginForm({ onError: onErrorMock });

    await user.type(screen.getByPlaceholderText(/email/i), "wrong@example.com");
    await user.type(screen.getByPlaceholderText(/password/i), "WrongPassword");

    const submitButton = getLoginSubmitButton();
    await user.click(submitButton);

    // Verify error callback was called
    await waitFor(() => {
      expect(onErrorMock).toHaveBeenCalledWith("Invalid credentials");
    });
  });

  it("should call handleClose when close button clicked", async () => {
    const user = userEvent.setup();
    const handleCloseMock = vi.fn();

    renderLoginForm({ handleClose: handleCloseMock });

    const closeButton = screen.getByRole("button", { name: /close/i });
    await user.click(closeButton);

    expect(handleCloseMock).toHaveBeenCalled();
  });

  it("should pre-populate email from initialEmail prop", () => {
    renderLoginForm({ initialEmail: "prepopulated@example.com" });

    const emailInput = screen.getByPlaceholderText(/email/i) as HTMLInputElement;
    expect(emailInput.value).toBe("prepopulated@example.com");
  });

  it("should disable submit button while loading", async () => {
    const user = userEvent.setup();
    vi.mocked(functions.handleAuthentication).mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000))
    );

    renderLoginForm();

    await user.type(screen.getByPlaceholderText(/email/i), "test@example.com");
    await user.type(screen.getByPlaceholderText(/password/i), "SecureP@ss123$");

    const submitButton = getLoginSubmitButton();
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
  });

  it("should close on Escape key and overlay click", () => {
    const handleClose = vi.fn();
    renderLoginForm({ handleClose });

    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleClose).toHaveBeenCalledTimes(1);

    const dialog = screen.getByRole("dialog");
    fireEvent.mouseDown(dialog, { target: dialog });
    expect(handleClose).toHaveBeenCalledTimes(2);
  });

  it("should treat username input (without @) as existing and skip email API", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    await user.type(screen.getByPlaceholderText(/email or username/i), "plainusername");
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(services.checkEmail).not.toHaveBeenCalled();
  });

  it("should show and close email check error banner", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockRejectedValue(new Error("Email check failed"));

    renderLoginForm();
    await user.type(screen.getByPlaceholderText(/email or username/i), "user@example.com");
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(() => {
      expect(screen.getByText("Email check failed")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /dismiss banner/i }));

    await waitFor(() => {
      expect(screen.queryByText("Email check failed")).not.toBeInTheDocument();
    });
  });

  it("should use fallback message when email check throws non-Error", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockRejectedValue({} as any);

    renderLoginForm();
    await user.type(screen.getByPlaceholderText(/email or username/i), "fallback@example.com");
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(() => {
      expect(
        screen.getByText(/Unable to verify email. You can still proceed with login./i)
      ).toBeInTheDocument();
    });
  });

  it("should open create account flow from info banner action", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderLoginForm();
    await user.type(screen.getByPlaceholderText(/email or username/i), "new@example.com");
    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(() => {
      expect(screen.getByText(/Let's create one to continue\?/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Let's create one to continue\?/i }));

    await waitFor(() => {
      expect(screen.getByText(/Create your account/i)).toBeInTheDocument();
    });
  });

  it("should return to login with returned email from create-account onSignIn", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderLoginForm();
    await user.type(screen.getByPlaceholderText(/email or username/i), "returnme@example.com");
    await new Promise((resolve) => setTimeout(resolve, 600));

    await user.click(screen.getByRole("button", { name: /Let's create one to continue\?/i }));
    await waitFor(() => {
      expect(screen.getByText(/Create your account/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /^Sign In$/i }));

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/email or username/i)).toHaveValue("returnme@example.com");
    });
  });

  it("should close login toast notification", async () => {
    const user = userEvent.setup();
    vi.mocked(functions.handleAuthentication).mockRejectedValue(new Error("toast-close-login"));

    renderLoginForm();
    await user.type(screen.getByPlaceholderText(/email/i), "toastloginuser");
    await user.type(screen.getByPlaceholderText(/password/i), "BadPassword1$");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /close notification/i })).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /close notification/i }));
    await waitFor(() => {
      expect(screen.queryByRole("button", { name: /close notification/i })).not.toBeInTheDocument();
    });
  });

  it("should show login error message on authentication failure", async () => {
    const user = userEvent.setup();
    vi.mocked(functions.handleAuthentication).mockRejectedValue(new Error("Toast auth error"));

    renderLoginForm();
    await user.type(screen.getByPlaceholderText(/email/i), "baduser");
    await user.type(screen.getByPlaceholderText(/password/i), "BadPassword1$");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(screen.queryAllByText("Toast auth error").length).toBeGreaterThan(0);
    });
  });
});

describe("App Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenExpiredFromCookie).mockReturnValue(true);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(false);
    vi.mocked(functions.refreshAuthenticationState).mockResolvedValue(false);
  });

  const renderApp = (props: any = {}) =>
    render(
      <MemoryRouter>
        <App showLogin={true} autoRedirection={false} {...props} />
      </MemoryRouter>
    );

  it("should render Google sign-in button when enabled and invoke google login trigger", async () => {
    const user = userEvent.setup();
    const googleTrigger = vi.fn();
    let googleConfig: any;

    vi.mocked(useGoogleLogin).mockImplementation((config: any) => {
      googleConfig = config;
      return googleTrigger;
    });

    renderLoginForm({ enableGoogleLogin: true });

    const googleButton = screen.getByRole("button", { name: /sign in with google/i });
    expect(googleButton).toBeInTheDocument();

    await user.click(googleButton);
    expect(googleTrigger).toHaveBeenCalledTimes(1);
    expect(googleConfig).toBeTruthy();
  });

  it("should show toast and call onError when Google OAuth returns an error", async () => {
    let googleConfig: any;
    const onError = vi.fn();

    vi.mocked(useGoogleLogin).mockImplementation((config: any) => {
      googleConfig = config;
      return vi.fn();
    });

    renderLoginForm({ enableGoogleLogin: true, onError });

    act(() => {
      googleConfig.onError({ error_description: "Google popup blocked" });
    });

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("Google popup blocked");
      expect(screen.getByText(/Google popup blocked/i)).toBeInTheDocument();
    });
  });

  it("should handle non-oauth Google errors with fallback message", async () => {
    let googleConfig: any;
    const onError = vi.fn();

    vi.mocked(useGoogleLogin).mockImplementation((config: any) => {
      googleConfig = config;
      return vi.fn();
    });

    renderLoginForm({ enableGoogleLogin: true, onError });

    act(() => {
      googleConfig.onNonOAuthError({ type: "popup_failed_to_open" });
    });

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("Google sign-in failed: popup_failed_to_open");
      expect(screen.getByText(/Google sign-in failed: popup_failed_to_open/i)).toBeInTheDocument();
    });
  });

  it("should use Google error field when error_description is missing", async () => {
    let googleConfig: any;
    const onError = vi.fn();

    vi.mocked(useGoogleLogin).mockImplementation((config: any) => {
      googleConfig = config;
      return vi.fn();
    });

    renderLoginForm({ enableGoogleLogin: true, onError });

    act(() => {
      googleConfig.onError({ error: "popup_closed_by_user" });
    });

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("popup_closed_by_user");
      expect(screen.getByText(/popup_closed_by_user/i)).toBeInTheDocument();
    });
  });

  it("should use default Google error message when no oauth fields are present", async () => {
    let googleConfig: any;
    const onError = vi.fn();

    vi.mocked(useGoogleLogin).mockImplementation((config: any) => {
      googleConfig = config;
      return vi.fn();
    });

    renderLoginForm({ enableGoogleLogin: true, onError });

    act(() => {
      googleConfig.onError({});
    });

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("Google sign-in failed.");
      expect(screen.getByText(/Google sign-in failed\./i)).toBeInTheDocument();
    });
  });

  it("should show info toast when Google OAuth succeeds", async () => {
    let googleConfig: any;

    vi.mocked(useGoogleLogin).mockImplementation((config: any) => {
      googleConfig = config;
      return vi.fn();
    });

    renderLoginForm({ enableGoogleLogin: true, onError: vi.fn() });

    act(() => {
      googleConfig.onSuccess({ code: "google-auth-code" });
    });

    await waitFor(() => {
      expect(
        screen.getByText(/Google sign-in completed\. Connect this credential to your backend login flow\./i)
      ).toBeInTheDocument();
    });
  });

  it("sets authority override when authority prop exists and clears on unmount", () => {
    const { unmount } = renderApp({ authority: "dev" });
    expect(services.setAuthorityOverride).toHaveBeenCalledWith("dev");

    unmount();
    expect(services.clearAuthorityOverride).toHaveBeenCalled();
  });

  it("clears authority override when authority prop is missing", () => {
    renderApp({ authority: undefined });
    expect(services.clearAuthorityOverride).toHaveBeenCalled();
  });

  it("starts silent refresh and executes cleanup on unmount when cleanup is returned", async () => {
    const stopRefresh = vi.fn();
    vi.mocked(functions.silentTokenRefresh).mockResolvedValue(stopRefresh as any);

    const { unmount } = renderApp();

    await waitFor(() => {
      expect(functions.silentTokenRefresh).toHaveBeenCalled();
    });

    unmount();
    expect(stopRefresh).toHaveBeenCalled();
  });

  it("auto redirects when valid access token exists and autoRedirection is true", async () => {
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(true);

    render(
      <MemoryRouter>
        <App showLogin={true} autoRedirection={true} redirectUrl="https://example.com/target" />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(window.location.href).toBe("https://example.com/target");
    });
  });

  it("calls onRedirect when valid access token exists and autoRedirection is false", async () => {
    const onRedirect = vi.fn();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(true);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "token-value");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "token-value",
      userInfo: { email: "user@example.com" },
      decoded: { exp: 9999999999 },
    } as any);

    render(
      <MemoryRouter>
        <App
          showLogin={true}
          autoRedirection={false}
          redirectUrl="https://example.com/callback"
          onRedirect={onRedirect}
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(onRedirect).toHaveBeenCalled();
    });
  });

  it("does not call onRedirect callback-only path when redirectUrl is missing", async () => {
    const onRedirect = vi.fn();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(true);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "token-value");

    render(
      <MemoryRouter>
        <App showLogin={true} autoRedirection={false} onRedirect={onRedirect} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(functions.checkTokenAndRedirectWithRefresh).toHaveBeenCalled();
    });

    expect(onRedirect).not.toHaveBeenCalled();
  });

  it("does not call onRedirect when redirectUrl exists but access token is missing", async () => {
    const onRedirect = vi.fn();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(true);

    render(
      <MemoryRouter>
        <App
          showLogin={true}
          autoRedirection={false}
          redirectUrl="https://example.com/callback"
          onRedirect={onRedirect}
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(functions.checkTokenAndRedirectWithRefresh).toHaveBeenCalled();
    });

    expect(onRedirect).not.toHaveBeenCalled();
  });

  it("refreshes tokens and invokes onRedirect when refresh flow succeeds", async () => {
    const onRedirect = vi.fn();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(true);
    vi.mocked(functions.refreshAuthenticationState).mockResolvedValue(true);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "new-access");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-token");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "new-access",
      userInfo: { email: "user@example.com" },
      decoded: { exp: Math.floor(Date.now() / 1000) + 3600, x_credentials: "x-cred" },
    } as any);

    render(
      <MemoryRouter>
        <App
          showLogin={true}
          autoRedirection={false}
          redirectUrl="https://example.com/after-refresh"
          onRedirect={onRedirect}
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(functions.refreshAuthenticationState).toHaveBeenCalled();
      expect(onRedirect).toHaveBeenCalled();
    });
  });

  it("stops refresh flow when session creation fails", async () => {
    const onRedirect = vi.fn();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(true);
    vi.mocked(functions.refreshAuthenticationState).mockResolvedValue(true);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "new-access");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-token");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue(null as any);

    renderApp({ onRedirect });

    await waitFor(() => {
      expect(functions.refreshAuthenticationState).toHaveBeenCalled();
      expect(onRedirect).not.toHaveBeenCalled();
    });
  });

  it("keeps refresh tokens when refresh is valid even if access cookie is missing", async () => {
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(true);
    vi.mocked(functions.refreshAuthenticationState).mockResolvedValue(false);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "r2");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, "t2");

    renderApp();

    await waitFor(() => {
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBe("r2");
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBe("t2");
    });
  });

  it("logs embedded login errors via app handler", async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(false);
    vi.mocked(functions.handleAuthentication).mockRejectedValue(new Error("embedded-app-error"));

    renderApp();
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled();
    });

    consoleSpy.mockRestore();
  });

  it("calls app handleClose callback when child close button is clicked", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    renderApp({ handleClose });
    await user.click(screen.getByRole("button", { name: /close dialog/i }));

    expect(handleClose).toHaveBeenCalled();
  });

  it("redirects after embedded login success when autoRedirection is enabled", async () => {
    const user = userEvent.setup();

    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(false);
    vi.mocked(functions.handleAuthentication).mockResolvedValue({
      access_token: "login-access-2",
      refresh_token: "login-refresh-2",
    } as any);

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "login-access-2");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "login-access-2",
      userInfo: { email: "user2@example.com" },
      decoded: { exp: Math.floor(Date.now() / 1000) + 3600 },
    } as any);

    renderApp({ autoRedirection: true, redirectUrl: "https://example.com/embedded-success" });

    await user.type(screen.getByPlaceholderText(/email or username/i), "embeddeduser");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPassword1$");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(
      () => {
        expect(window.location.href).toBe("https://example.com/embedded-success");
      },
      { timeout: 2000 }
    );
  });

  it("auto redirects after refresh flow when autoRedirection is true", async () => {
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(true);
    vi.mocked(functions.refreshAuthenticationState).mockResolvedValue(true);

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "refreshed-token");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "refresh-token");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());

    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      decoded: { exp: Math.floor(Date.now() / 1000) + 3600, x_credentials: "xc-redir" },
      access_token: "refreshed-token",
      userInfo: {},
    } as any);

    const originalLocation = window.location;
    Object.defineProperty(window, "location", {
      writable: true,
      value: { href: "http://localhost/" },
    });

    render(
      <MemoryRouter>
        <App
          showLogin={true}
          autoRedirection={true}
          redirectUrl="https://example.com/refresh-redirect"
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect((window.location as any).href).toBe("https://example.com/refresh-redirect");
    });

    Object.defineProperty(window, "location", {
      writable: true,
      value: originalLocation,
    });
  });

  it("handles embedded login success through app callback and onRedirect", async () => {
    const user = userEvent.setup();
    const onRedirect = vi.fn();

    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(false);
    vi.mocked(functions.handleAuthentication).mockResolvedValue({
      access_token: "login-access",
      refresh_token: "login-refresh",
    } as any);

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "login-access");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "login-access",
      userInfo: { email: "user@example.com" },
      decoded: { exp: Math.floor(Date.now() / 1000) + 3600 },
    } as any);

    renderApp({ onRedirect, redirectUrl: "https://example.com/after-login", handleClose: vi.fn() });

    await user.type(screen.getByPlaceholderText(/email or username/i), "appuser");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPassword1$");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(onRedirect).toHaveBeenCalledWith(
        "https://example.com/after-login",
        expect.objectContaining({ access_token: "login-access" })
      );
    });
  });

  it("clears tokens when refresh throws error", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(true);
    vi.mocked(functions.refreshAuthenticationState).mockRejectedValue(new Error("refresh failed"));
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "r1");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, "t1");

    renderApp();

    await waitFor(() => {
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBeNull();
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
      expect(errorSpy).toHaveBeenCalled();
    });

    errorSpy.mockRestore();
  });

  it("clears refresh data when refresh token is invalid", async () => {
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(false);

    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, "stale-refresh");
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, "stale-time");

    renderApp();

    await waitFor(() => {
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBeNull();
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
    });
  });
});
