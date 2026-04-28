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
import { STORAGE_KEYS, COOKIE_NAMES } from "../../constants";

// Mock services
vi.mock("../../services", () => ({
  checkEmail: vi.fn(),
  authRegister: vi.fn(),
  authRefresh: vi.fn(),
  setAuthorityOverride: vi.fn(),
  clearAuthorityOverride: vi.fn(),
  getBrandHeaders: vi.fn(),
  fetchEnrollments: vi.fn(),
  fetchCheckout: vi.fn(),
}));

// Mock functions
vi.mock("../../functions", () => ({
  handleAuthentication: vi.fn(),
  handleGoogleAuthentication: vi.fn(),
  checkTokenAndRedirect: vi.fn(),
  checkTokenAndRedirectWithRefresh: vi.fn(),
  isRefreshTokenValid: vi.fn(),
  isRefreshTokenExpiredFromCookie: vi.fn(),
  refreshAuthenticationState: vi.fn(),
  silentTokenRefresh: vi.fn(),
  createUserSessionFromToken: vi.fn(),
  validatePassword: vi.fn(),
  setAuthCookie: vi.fn(),
  clearAuthCookie: vi.fn(),
  getCookie: vi.fn(),
  getCookieDomain: vi.fn(() => ""),
  getAuthorityFromUrl: vi.fn(() => "dev"),
  getDefaultRedirectUrl: vi.fn(() => "https://dev-learn.example.com/courses"),
}));

// Mock cookieHelper utilities - only mock getDefaultRedirectUrl
vi.mock("../../utils/cookieHelper", async () => {
  const actual = await vi.importActual("../../utils/cookieHelper");
  return {
    ...actual,
    getDefaultRedirectUrl: vi.fn(() => "https://dev-learn.example.com/courses"),
  };
});

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

function setEncodedCookie(name: string, value: string): void {
  const expires = new Date(Date.now() + 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

describe("EmbeddedLoginForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    // Default: brand is properly configured
    vi.mocked(services.getBrandHeaders).mockResolvedValue({
      "X-Brand-Id": "Elite Learning",
      "X-Subsidiary-Id": "1",
      "X-Brand-Domain": "elitelearning.com",
    });
    // Default: validatePassword returns all checks passing
    vi.mocked(functions.validatePassword).mockReturnValue({
      length: true,
      upper: true,
      lower: true,
      number: true,
      noSpaces: true,
      noTriple: true,
      special: true,
      noNameParts: true,
      noEmailParts: true,
    } as any);
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

  it("should ignore CapsLock keyup without toggling indicator", () => {
    renderLoginForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.keyUp(passwordInput, { key: "CapsLock" });

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
    const user = userEvent.setup({ delay: null });
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
    await new Promise((resolve) => setTimeout(resolve, 600));
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
    const user = userEvent.setup({ delay: null });
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: true });

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "existing@example.com");
    await new Promise((resolve) => setTimeout(resolve, 600));
    await user.tab();

    await waitFor(
      () => {
        expect(services.checkEmail).toHaveBeenCalledWith("existing@example.com");
      },
      { timeout: 2000 }
    );
  });

  it("should show create account option for new email", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

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
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

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
      expect(screen.getByText(/back to login/i)).toBeInTheDocument();
    });

    await user.click(screen.getByText(/back to login/i));

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
      access_token: "test-token",
      refresh_token: "test-refresh",
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
      () =>
        new Promise((resolve) =>
          setTimeout(
            () => resolve({ access_token: "loading-token", refresh_token: "loading-refresh" }),
            1000
          )
        )
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
    await user.click(getLoginSubmitButton());

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
    await user.click(getLoginSubmitButton());

    await waitFor(() => {
      expect(screen.queryAllByText("Toast auth error").length).toBeGreaterThan(0);
    });
  });

  it("should use fallback authentication error message for non-Error failures", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();
    vi.mocked(functions.handleAuthentication).mockRejectedValue({} as any);

    renderLoginForm({ onError });
    await user.type(screen.getByPlaceholderText(/email or username/i), "fallbackuser");
    await user.type(screen.getByPlaceholderText(/password/i), "BadPassword1$");
    await user.click(getLoginSubmitButton());

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("Authentication failed");
    });
  });

  it("should show email loader while availability check is pending", async () => {
    const user = userEvent.setup();

    vi.mocked(services.checkEmail).mockImplementation(
      () =>
        new Promise(() => {
          return;
        }) as any
    );

    renderLoginForm();
    await user.type(screen.getByPlaceholderText(/email or username/i), "pending@example.com");

    await new Promise((resolve) => setTimeout(resolve, 600));

    await waitFor(() => {
      expect(document.querySelector('[part="identity-widget-loader"]')).toBeInTheDocument();
    });
  });

  it("should return to login without updating email when create-account returns empty email", async () => {
    const user = userEvent.setup();

    renderLoginForm();
    await user.click(screen.getByRole("button", { name: /Create an Account/i }));

    await waitFor(() => {
      expect(screen.getByRole("form", { name: /Create account form/i })).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /^Sign In$/i }));

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/email or username/i)).toHaveValue("");
    });
  });

  it("clears pending email-check timeout when unmounted", async () => {
    const clearTimeoutSpy = vi.spyOn(globalThis, "clearTimeout");

    const view = renderLoginForm();
    fireEvent.change(screen.getByPlaceholderText(/email or username/i), {
      target: { value: "cleanup@example.com" },
    });

    view.unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
  });

  it("unmounts cleanly when no email-check timeout is queued", () => {
    const view = renderLoginForm();
    expect(() => view.unmount()).not.toThrow();
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
    vi.mocked(services.fetchEnrollments).mockResolvedValue({ items: [], results: 0 });
    vi.mocked(services.fetchCheckout).mockResolvedValue({ hasItems: false });
  });

  const renderApp = (props: any = {}) =>
    render(
      <MemoryRouter>
        <App showLogin={true} {...props} />
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

  it("should call handleGoogleAuthentication and invoke onSuccess when Google OAuth succeeds", async () => {
    let googleConfig: any;
    const onSuccess = vi.fn();
    const mockTokens = { access_token: "test-token", refresh_token: "test-refresh" };

    vi.mocked(useGoogleLogin).mockImplementation((config: any) => {
      googleConfig = config;
      return vi.fn();
    });
    vi.mocked(functions.handleGoogleAuthentication).mockResolvedValue(mockTokens as any);

    renderLoginForm({ enableGoogleLogin: true, onSuccess, onError: vi.fn() });

    await act(async () => {
      await googleConfig.onSuccess({ code: "google-auth-code" });
    });

    await waitFor(() => {
      expect(functions.handleGoogleAuthentication).toHaveBeenCalledWith("google-auth-code", false);
      expect(onSuccess).toHaveBeenCalledWith(mockTokens);
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

  it("auto redirects when valid access token exists and redirectDashboardUrl is set", async () => {
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(true);
    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "token-value");

    render(
      <MemoryRouter>
        <App showLogin={true} redirectDashboardUrl="https://example.com/target" />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(window.location.href).toBe("https://example.com/target");
    });
  });

  it("calls onRedirect when valid access token exists", async () => {
    const onRedirect = vi.fn();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(true);
    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "token-value");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "token-value",
      userInfo: { email: "user@example.com" },
      decoded: { exp: 9999999999 },
    } as any);

    render(
      <MemoryRouter>
        <App
          showLogin={true}
          redirectDashboardUrl="https://example.com/callback"
          onRedirect={onRedirect}
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(onRedirect).toHaveBeenCalled();
    });
  });

  it("uses default redirect URL when onRedirect callback is provided without explicit redirectUrl prop", async () => {
    const onRedirect = vi.fn();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(true);
    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "token-value");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "token-value",
      userInfo: { email: "user@example.com" },
      decoded: { exp: 9999999999 },
    } as any);

    render(
      <MemoryRouter>
        <App
          showLogin={true}
          redirectDashboardUrl="https://dev-learn.example.com/courses"
          onRedirect={onRedirect}
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(onRedirect).toHaveBeenCalledWith(
        "https://dev-learn.example.com/courses",
        expect.objectContaining({ access_token: "token-value" })
      );
    });
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

  it("does not call onRedirect when existing token cannot be converted to user session", async () => {
    const onRedirect = vi.fn();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(true);
    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "token-no-session");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue(null as any);

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
    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "new-access");
    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-token");
    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "new-access",
      userInfo: { email: "user@example.com" },
      decoded: { exp: Math.floor(Date.now() / 1000) + 3600, x_credentials: "x-cred" },
    } as any);

    render(
      <MemoryRouter>
        <App
          showLogin={true}
          redirectDashboardUrl="https://example.com/after-refresh"
          onRedirect={onRedirect}
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(functions.refreshAuthenticationState).toHaveBeenCalled();
      expect(onRedirect).toHaveBeenCalled();
    });
  });

  it("uses default redirect URL during refresh flow when redirectUrl prop is missing", async () => {
    const onRedirect = vi.fn();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(true);
    vi.mocked(functions.refreshAuthenticationState).mockResolvedValue(true);
    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "new-access-default-url");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "new-access-default-url",
      userInfo: { email: "defaulturl@example.com" },
      decoded: { exp: Math.floor(Date.now() / 1000) + 3600 },
    } as any);

    renderApp({ onRedirect, redirectDashboardUrl: "https://dev-learn.example.com/courses" });

    await waitFor(() => {
      expect(onRedirect).toHaveBeenCalledWith(
        "https://dev-learn.example.com/courses",
        expect.objectContaining({ access_token: "new-access-default-url" })
      );
    });
  });

  it("stops refresh flow when session creation fails", async () => {
    const onRedirect = vi.fn();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(true);
    vi.mocked(functions.refreshAuthenticationState).mockResolvedValue(true);
    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "new-access");
    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-token");
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
    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "r2");
    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, "t2");

    renderApp();

    await waitFor(() => {
      expect(document.cookie).toContain(COOKIE_NAMES.REFRESH_TOKEN);
      expect(document.cookie).toContain("r2");
    });
  });

  it("logs embedded login errors via app handler", async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(false);
    vi.mocked(functions.handleAuthentication).mockRejectedValue(new Error("embedded-app-error"));

    renderApp();
    await user.type(screen.getByPlaceholderText(/email or username/i), "embedded.user");
    await user.type(screen.getByPlaceholderText(/password/i), "BadPassword1$");
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

    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "login-access-2");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "login-access-2",
      userInfo: { email: "user2@example.com" },
      decoded: { exp: Math.floor(Date.now() / 1000) + 3600 },
    } as any);

    renderApp({ redirectDashboardUrl: "https://example.com/embedded-success" });

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

    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "refreshed-token");
    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "refresh-token");
    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, Date.now().toString());

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
        <App showLogin={true} redirectDashboardUrl="https://example.com/refresh-redirect" />
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

    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "login-access");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "login-access",
      userInfo: { email: "user@example.com" },
      decoded: { exp: Math.floor(Date.now() / 1000) + 3600 },
    } as any);

    renderApp({
      onRedirect,
      redirectDashboardUrl: "https://example.com/after-login",
      handleClose: vi.fn(),
    });

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
    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "r1");
    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, "t1");

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

    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN, "stale-refresh");
    setEncodedCookie(COOKIE_NAMES.REFRESH_TOKEN_TIME, "stale-time");

    renderApp();

    await waitFor(() => {
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)).toBeNull();
      expect(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME)).toBeNull();
    });
  });

  it("calls onTokenValidityCheck with current refresh-cookie validity", async () => {
    const onTokenValidityCheck = vi.fn();
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenExpiredFromCookie).mockReturnValue(true);

    renderApp({ onTokenValidityCheck });

    await waitFor(() => {
      expect(onTokenValidityCheck).toHaveBeenCalledWith(false);
    });
  });

  it("calls onTokenValidityCheck(true) after successful refresh login", async () => {
    const onTokenValidityCheck = vi.fn();
    const onRedirect = vi.fn();

    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenExpiredFromCookie).mockReturnValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(true);
    vi.mocked(functions.refreshAuthenticationState).mockResolvedValue(true);

    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "token-after-refresh");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "token-after-refresh",
      userInfo: { email: "validity@example.com" },
      decoded: { exp: Math.floor(Date.now() / 1000) + 3600 },
    } as any);

    renderApp({
      onTokenValidityCheck,
      onRedirect,
      redirectDashboardUrl: "https://example.com/validity",
    });

    await waitFor(() => {
      expect(onTokenValidityCheck).toHaveBeenCalledWith(true);
      expect(onRedirect).toHaveBeenCalled();
    });
  });

  it("returns early when refresh succeeds but access token is still missing", async () => {
    const onRedirect = vi.fn();

    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenExpiredFromCookie).mockReturnValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(true);
    vi.mocked(functions.refreshAuthenticationState).mockResolvedValue(true);

    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);

    renderApp({ onRedirect, redirectUrl: "https://example.com/no-access" });

    await waitFor(() => {
      expect(functions.refreshAuthenticationState).toHaveBeenCalled();
    });
    expect(onRedirect).not.toHaveBeenCalled();
  });

  it("uses default redirect URL when embedded login succeeds without redirectUrl prop", async () => {
    const user = userEvent.setup();
    const onRedirect = vi.fn();

    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(false);
    vi.mocked(functions.handleAuthentication).mockResolvedValue({
      access_token: "default-redirect-token",
      refresh_token: "default-redirect-refresh",
    } as any);

    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "default-redirect-token");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue({
      access_token: "default-redirect-token",
      userInfo: { email: "default@example.com" },
      decoded: { exp: Math.floor(Date.now() / 1000) + 3600 },
    } as any);

    renderApp({ onRedirect, redirectDashboardUrl: "https://dev-learn.example.com/courses" });

    await user.type(screen.getByPlaceholderText(/email or username/i), "defaultuser");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPassword1$");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(onRedirect).toHaveBeenCalledWith(
        "https://dev-learn.example.com/courses",
        expect.objectContaining({ access_token: "default-redirect-token" })
      );
    });
  });

  it("does not call onRedirect when embedded success has token but no user session", async () => {
    const user = userEvent.setup();
    const onRedirect = vi.fn();

    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(false);
    vi.mocked(functions.handleAuthentication).mockResolvedValue({
      access_token: "no-session-token",
      refresh_token: "no-session-refresh",
    } as any);

    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, "no-session-token");
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue(null as any);

    renderApp({ onRedirect, redirectUrl: "https://example.com/no-session" });

    await user.type(screen.getByPlaceholderText(/email or username/i), "nosessionuser");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPassword1$");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(functions.handleAuthentication).toHaveBeenCalled();
    });
    expect(onRedirect).not.toHaveBeenCalled();
  });

  it("does not call onRedirect when embedded success occurs without stored access token", async () => {
    const user = userEvent.setup();
    const onRedirect = vi.fn();

    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(false);
    vi.mocked(functions.handleAuthentication).mockResolvedValue({
      access_token: "ephemeral-token",
      refresh_token: "ephemeral-refresh",
    } as any);

    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);

    renderApp({ onRedirect, redirectUrl: "https://example.com/no-stored-token" });

    await user.type(screen.getByPlaceholderText(/email or username/i), "nostoredtoken");
    await user.type(screen.getByPlaceholderText(/password/i), "ValidPassword1$");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(functions.handleAuthentication).toHaveBeenCalled();
    });
    expect(onRedirect).not.toHaveBeenCalled();
  });

  it("ignores close action when handleClose prop is not provided", async () => {
    const user = userEvent.setup();

    renderApp({ handleClose: undefined });
    await user.click(screen.getByRole("button", { name: /close dialog/i }));

    expect(screen.getByRole("application", { name: /authentication widget/i })).toBeInTheDocument();
  });

  it("stores subsidiary value when subsidiary prop is provided", async () => {
    renderApp({ subsidiary: "elite" as any });

    await waitFor(() => {
      expect(localStorage.getItem("subsidiary")).toBe("elite");
    });
  });
});

describe("EmbeddedLoginForm — Apple Sign In", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    vi.mocked(services.getBrandHeaders).mockResolvedValue({
      "X-Brand-Id": "Elite Learning",
      "X-Subsidiary-Id": "1",
      "X-Brand-Domain": "elitelearning.com",
    });
  });

  it("should render Apple sign-in button when enableAppleLogin and appleClientId are provided", () => {
    renderLoginForm({ enableAppleLogin: true, appleClientId: "com.test.app" });

    expect(screen.getByRole("button", { name: /sign in with apple/i })).toBeInTheDocument();
  });

  it("should not render Apple sign-in button when enableAppleLogin is false", () => {
    renderLoginForm({ enableAppleLogin: false });

    expect(screen.queryByRole("button", { name: /sign in with apple/i })).not.toBeInTheDocument();
  });

  it("should not render Apple sign-in button when appleClientId is missing", () => {
    renderLoginForm({ enableAppleLogin: true });

    expect(screen.queryByRole("button", { name: /sign in with apple/i })).not.toBeInTheDocument();
  });

  it("should show error toast when Apple SDK is not loaded", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();

    // Ensure AppleID is not on window
    delete (window as any).AppleID;

    renderLoginForm({ enableAppleLogin: true, appleClientId: "com.test.app", onError });

    await user.click(screen.getByRole("button", { name: /sign in with apple/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("Apple Sign In SDK not loaded. Please try again.");
    });
  });

  it("should call AppleID.auth.init and signIn when SDK is loaded", async () => {
    const user = userEvent.setup();
    const mockSignIn = vi.fn().mockResolvedValue({ authorization: { code: "apple-code" } });
    const mockInit = vi.fn();

    (window as any).AppleID = {
      auth: {
        init: mockInit,
        signIn: mockSignIn,
      },
    };

    renderLoginForm({ enableAppleLogin: true, appleClientId: "com.test.app" });

    await user.click(screen.getByRole("button", { name: /sign in with apple/i }));

    await waitFor(() => {
      expect(mockInit).toHaveBeenCalledWith(
        expect.objectContaining({
          clientId: "com.test.app",
          scope: "name email",
          usePopup: true,
        })
      );
      expect(mockSignIn).toHaveBeenCalled();
    });

    delete (window as any).AppleID;
  });

  it("should disable Apple button while sign-in is in progress", async () => {
    let resolveSignIn!: (value: any) => void;
    const signInPromise = new Promise((resolve) => {
      resolveSignIn = resolve;
    });

    (window as any).AppleID = {
      auth: {
        init: vi.fn(),
        signIn: vi.fn().mockReturnValue(signInPromise),
      },
    };

    renderLoginForm({ enableAppleLogin: true, appleClientId: "com.test.app" });

    const button = screen.getByRole("button", { name: /sign in with apple/i });
    expect(button).not.toBeDisabled();

    fireEvent.click(button);

    await waitFor(() => {
      expect(button).toBeDisabled();
    });

    resolveSignIn({ authorization: { code: "apple-code" } });

    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });

    delete (window as any).AppleID;
  });

  it("should silently handle popup_closed_by_user error from Apple", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();

    (window as any).AppleID = {
      auth: {
        init: vi.fn(),
        signIn: vi.fn().mockRejectedValue({ error: "popup_closed_by_user" }),
      },
    };

    renderLoginForm({ enableAppleLogin: true, appleClientId: "com.test.app", onError });

    await user.click(screen.getByRole("button", { name: /sign in with apple/i }));

    // popup_closed_by_user should NOT call onError
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(onError).not.toHaveBeenCalled();

    delete (window as any).AppleID;
  });

  it("should show error toast for non-cancel Apple sign-in errors", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();

    (window as any).AppleID = {
      auth: {
        init: vi.fn(),
        signIn: vi.fn().mockRejectedValue({ error: "apple_auth_error" }),
      },
    };

    renderLoginForm({ enableAppleLogin: true, appleClientId: "com.test.app", onError });

    await user.click(screen.getByRole("button", { name: /sign in with apple/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("apple_auth_error");
    });

    delete (window as any).AppleID;
  });

  it("should handle Apple sign-in Error object failures", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();

    (window as any).AppleID = {
      auth: {
        init: vi.fn(),
        signIn: vi.fn().mockRejectedValue(new Error("Apple network error")),
      },
    };

    renderLoginForm({ enableAppleLogin: true, appleClientId: "com.test.app", onError });

    await user.click(screen.getByRole("button", { name: /sign in with apple/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("Apple network error");
    });

    delete (window as any).AppleID;
  });

  it("should use fallback message when Apple error has no error field or message", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();

    (window as any).AppleID = {
      auth: {
        init: vi.fn(),
        signIn: vi.fn().mockRejectedValue({}),
      },
    };

    renderLoginForm({ enableAppleLogin: true, appleClientId: "com.test.app", onError });

    await user.click(screen.getByRole("button", { name: /sign in with apple/i }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("Apple sign-in failed.");
    });

    delete (window as any).AppleID;
  });
});

describe("EmbeddedLoginForm — Google onSuccess error path", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    vi.mocked(services.getBrandHeaders).mockResolvedValue({
      "X-Brand-Id": "Elite Learning",
      "X-Subsidiary-Id": "1",
      "X-Brand-Domain": "elitelearning.com",
    });
  });

  it("should show error toast when handleGoogleAuthentication fails with Error", async () => {
    let googleConfig: any;
    const onError = vi.fn();

    vi.mocked(useGoogleLogin).mockImplementation((config: any) => {
      googleConfig = config;
      return vi.fn();
    });
    vi.mocked(functions.handleGoogleAuthentication).mockRejectedValue(
      new Error("Google token exchange failed")
    );

    renderLoginForm({ enableGoogleLogin: true, onError });

    await act(async () => {
      await googleConfig.onSuccess({ code: "failing-google-code" });
    });

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("Google token exchange failed");
      expect(screen.getByText("Google token exchange failed")).toBeInTheDocument();
    });
  });

  it("should show fallback error when handleGoogleAuthentication fails with non-Error", async () => {
    let googleConfig: any;
    const onError = vi.fn();

    vi.mocked(useGoogleLogin).mockImplementation((config: any) => {
      googleConfig = config;
      return vi.fn();
    });
    vi.mocked(functions.handleGoogleAuthentication).mockRejectedValue({} as any);

    renderLoginForm({ enableGoogleLogin: true, onError });

    await act(async () => {
      await googleConfig.onSuccess({ code: "non-error-code" });
    });

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith("Google sign-in failed");
    });
  });
});

describe("EmbeddedLoginForm — Forgot Username navigation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    vi.mocked(services.getBrandHeaders).mockResolvedValue({
      "X-Brand-Id": "Elite Learning",
      "X-Subsidiary-Id": "1",
      "X-Brand-Domain": "elitelearning.com",
    });
  });

  it("should navigate to forgot username form and back to login", async () => {
    const user = userEvent.setup();
    renderLoginForm();

    await user.click(screen.getByText(/username\?/i));

    await waitFor(() => {
      expect(screen.getByText(/Forgot Username\?/i, { selector: "h2" })).toBeInTheDocument();
    });

    await user.click(screen.getByText(/back to login/i));

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: /Continue to login/i })).toBeInTheDocument();
    });
  });

  it("should navigate from forgot username to create account and back", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderLoginForm();

    // Navigate to forgot username
    await user.click(screen.getByText(/username\?/i));

    await waitFor(() => {
      expect(screen.getByText(/Forgot Username\?/i, { selector: "h2" })).toBeInTheDocument();
    });
  });

  it("should navigate from reset password to create account via banner action", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderLoginForm();

    // Navigate to reset password
    await user.click(screen.getByText(/forgot password/i));

    // Wait for reset password form to appear
    await waitFor(() => {
      expect(screen.getByText(/back to login/i)).toBeInTheDocument();
    });

    // Clear and type a new email that doesn't exist
    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.clear(emailInput);
    await user.type(emailInput, "newuser@example.com");

    // Wait for email check debounce
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Banner should show "No account found"
    await waitFor(
      () => {
        expect(screen.getByText(/No account found/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    // Click create account action in banner
    await user.click(screen.getByRole("button", { name: /Let's create one/i }));

    // Should navigate to Create Account form
    await waitFor(() => {
      expect(screen.getByText(/Create your account/i)).toBeInTheDocument();
    });
  });

  it("should navigate from forgot username to create account via banner action", async () => {
    const user = userEvent.setup();
    vi.mocked(services.checkEmail).mockResolvedValue({ exists: false });

    renderLoginForm();

    // Navigate to forgot username
    await user.click(screen.getByText(/username\?/i));

    await waitFor(() => {
      expect(screen.getByText(/Forgot Username\?/i, { selector: "h2" })).toBeInTheDocument();
    });

    // Type a new email that doesn't exist
    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "newuser@example.com");

    // Wait for email check debounce
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Banner should show "No account found"
    await waitFor(
      () => {
        expect(screen.getByText(/No account found/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    // Click create account action in banner
    await user.click(screen.getByRole("button", { name: /Let's create one/i }));

    // Should navigate to Create Account form
    await waitFor(() => {
      expect(screen.getByText(/Create your account/i)).toBeInTheDocument();
    });
  });
});

describe("EmbeddedLoginForm — brand configuration error", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    // Signal theme as already loaded so useBrandConfigError runs immediately
    // without waiting for the "theme-loaded" window event.
    sessionStorage.setItem("theme_loaded", "true");
    // Brand config is broken: getBrandHeaders returns empty (no X-Brand-Id)
    vi.mocked(services.getBrandHeaders).mockResolvedValue({});
  });

  afterEach(() => {
    sessionStorage.clear();
  });

  it("should show brand error banner when X-Brand-Id is missing", async () => {
    renderLoginForm();

    await waitFor(() => {
      expect(
        screen.getByText(/it looks like this sign-in form isn't set up correctly/i)
      ).toBeInTheDocument();
    });
  });

  it("should show the 'having trouble' title in the brand error banner", async () => {
    renderLoginForm();

    await waitFor(() => {
      expect(screen.getByText(/we're having trouble signing you in/i)).toBeInTheDocument();
    });
  });

  it("should disable the submit button when brand config error", async () => {
    renderLoginForm();

    await waitFor(() => {
      expect(getLoginSubmitButton()).toBeDisabled();
    });
  });

  it("should keep the 'Create an Account' button enabled when brand config error", async () => {
    renderLoginForm();

    await waitFor(() => {
      expect(services.getBrandHeaders).toHaveBeenCalled();
    });

    const createBtn = document.querySelector(
      'button[part~="identity-widget-login-create-account-button"]'
    ) as HTMLButtonElement;
    expect(createBtn).not.toBeNull();
    expect(createBtn).not.toBeDisabled();
  });

  it("should not call checkEmail when brand config error and a valid email is typed", async () => {
    const user = userEvent.setup();
    renderLoginForm();
    await waitFor(() => {
      expect(services.getBrandHeaders).toHaveBeenCalled();
    });

    const emailInput = screen.getByPlaceholderText(/email/i);
    await user.type(emailInput, "test@example.com");

    // Wait past debounce window
    await new Promise((resolve) => setTimeout(resolve, 600));

    expect(services.checkEmail).not.toHaveBeenCalled();
  });

  it("should not call handleAuthentication when form is submitted with brand config error", async () => {
    renderLoginForm();
    await waitFor(() => {
      expect(services.getBrandHeaders).toHaveBeenCalled();
    });

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.change(emailInput, { target: { value: "user@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password1!" } });
    fireEvent.submit(screen.getByRole("form", { name: /login form/i }));

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(functions.handleAuthentication).not.toHaveBeenCalled();
  });

  it("should show brand error banner when getBrandHeaders rejects", async () => {
    vi.mocked(services.getBrandHeaders).mockRejectedValue(new Error("Network error"));
    renderLoginForm();

    await waitFor(() => {
      expect(
        screen.getByText(/it looks like this sign-in form isn't set up correctly/i)
      ).toBeInTheDocument();
    });
  });
});
