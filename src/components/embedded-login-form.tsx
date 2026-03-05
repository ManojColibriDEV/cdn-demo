import { useState, useRef, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import Button from "../common/ui/button";
import Input from "../common/ui/input";
import Banner from "../common/ui/banner";
import Toast from "../common/ui/toast";
import Loader from "../common/ui/loader";
import { handleAuthentication } from "../functions";
import { checkEmail } from "../services";
import type { EmbeddedLoginFormProps } from "../types";
import CreateAccountForm from "./create-account-form";
import ResetPasswordForm from "./reset-password-form";
import HelpCenter from "./help-center";
import checkSuccessImg from "../icons/badge-check.svg";
import googleIcon from "../icons/google-icon.svg";
import { MessageType, EMAIL_REGEX, ButtonType, ButtonVariant, INFO_MESSAGES } from "../constants";
import { isCapsLockEnabled } from "../utils/keyboard";

const EmbeddedLoginForm = ({
  onSuccess,
  onError,
  handleClose,
  authority,
  title = "Continue to login",
  subtitle = "Continue by signing in.",
  initialEmail = "",
  enableGoogleLogin = false,
}: EmbeddedLoginFormProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Un-Checked by default
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showHelpCenter, setShowHelpCenter] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [emailCheckError, setEmailCheckError] = useState(false);
  const [emailCheckErrorMessage, setEmailCheckErrorMessage] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<
    MessageType.SUCCESS | MessageType.WARNING | MessageType.ERROR | MessageType.INFO
  >(MessageType.INFO);
  const overlayRef = useRef<HTMLDivElement>(null);
  const emailCheckTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleGoogleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: (codeResponse) => {
      console.log("[EmbeddedLogin] Google auth-code response received", codeResponse);
      setToastMessage(
        "Google sign-in completed. Connect this credential to your backend login flow."
      );
      setToastType(MessageType.INFO);
      setErrorMessage("");
    },
    onError: (errorResponse) => {
      const googleError =
        errorResponse.error_description || errorResponse.error || "Google sign-in failed.";
      setToastMessage(googleError);
      setToastType(MessageType.ERROR);
      onError(googleError);
    },
    onNonOAuthError: (error) => {
      const googleError = `Google sign-in failed: ${error.type}`;
      setToastMessage(googleError);
      setToastType(MessageType.ERROR);
      onError(googleError);
    },
  });

  // Check email existence when user types
  useEffect(() => {
    // Clear previous timeout
    if (emailCheckTimeoutRef.current) {
      clearTimeout(emailCheckTimeoutRef.current);
    }

    // Reset email exists state when email is empty
    if (!email) {
      setEmailExists(false);
      setShowBanner(false);
      setEmailCheckError(false);
      setEmailCheckErrorMessage("");
      return;
    }

    // Only validate email if input contains @ (is an email, not username)
    if (!email.includes("@")) {
      // If it's a username (no @), allow login without checking
      setEmailExists(true);
      setShowBanner(false);
      return;
    }

    // Validate email format before making API call
    if (!EMAIL_REGEX.test(email)) {
      setEmailExists(false);
      setShowBanner(false);
      return;
    }

    // Debounce email check by 500ms
    emailCheckTimeoutRef.current = setTimeout(async () => {
      setCheckingEmail(true);
      try {
        const result = await checkEmail(email);
        // For login, we want emailExists to be true when user is found
        if (result.exists) {
          setEmailExists(true);
          setShowBanner(false);
        } else {
          setEmailExists(false);
          setShowBanner(true);
        }
      } catch (error) {
        console.error("[EmbeddedLogin] Email check failed:", error);
        // Show error banner for API failure (no toast for check-email)
        const errorMsg =
          error instanceof Error
            ? error.message
            : "Unable to verify email. You can still proceed with login.";
        setEmailCheckError(true);
        setEmailCheckErrorMessage(errorMsg);
        setShowBanner(true);
        setEmailExists(false);
      } finally {
        setCheckingEmail(false);
      }
    }, 500);

    // Cleanup timeout on unmount
    return () => {
      if (emailCheckTimeoutRef.current) {
        clearTimeout(emailCheckTimeoutRef.current);
      }
    };
  }, [email]);

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = email && emailRegex.test(email);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [handleClose]);

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter both username/email and password");
      onError("Please enter both username/email and password");
      return;
    }

    setLoading(true);
    setErrorMessage(""); // Clear previous errors

    try {
      // Use the common authentication function
      const tokens = await handleAuthentication(email, password, rememberMe);

      // Call success callback with result
      onSuccess(tokens);
    } catch (error) {
      console.error("[EmbeddedLogin] Login failed:", error);
      const errorMsg = error instanceof Error ? error.message : "Authentication failed";
      setErrorMessage(errorMsg);
      setToastMessage(errorMsg);
      setToastType(MessageType.ERROR);
      onError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordCapsLock = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "CapsLock" && event.type === "keydown") {
      setCapsLockOn((prev) => !prev);
      return;
    }

    if (event.key === "CapsLock") {
      return;
    }

    setCapsLockOn(isCapsLockEnabled(event));
  };
  // If showing reset password form, render that instead
  if (showResetPassword) {
    return (
      <ResetPasswordForm
        email={email}
        onBack={() => setShowResetPassword(false)}
        handleClose={handleClose}
      />
    );
  }

  if (showHelpCenter) {
    return <HelpCenter onBack={() => setShowHelpCenter(false)} handleClose={handleClose} />;
  }

  // If showing create account form, render that instead
  if (showCreateAccount) {
    return (
      <CreateAccountForm
        onSuccess={(userSession) => {
          setShowCreateAccount(false);
          onSuccess(userSession);
        }}
        onError={onError}
        handleClose={handleClose}
        onSignIn={(returnedEmail) => {
          setShowCreateAccount(false);
          if (returnedEmail) {
            setEmail(returnedEmail);
          }
        }}
        authority={authority}
        initialEmail={email}
      />
    );
  }

  return (
    <div
      part="identity-widget-login-overlay"
      className="identity-widget-login-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4"
      ref={overlayRef}
      onMouseDown={onOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-dialog-title"
    >
      <div
        part="identity-widget-login-modal"
        className="identity-widget-login-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!"
        role="document"
      >
        <Button
          onClick={handleClose}
          variant={ButtonVariant.LINK}
          part="identity-widget-login-close-button"
          className="identity-widget-login-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!"
          type={ButtonType.BUTTON}
          ariaLabel="Close dialog"
        >
          <svg
            part="identity-widget-login-close-icon"
            className="identity-widget-login-close-icon w-6! h-6!"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>

        <div
          part="identity-widget-login-header"
          className="identity-widget-login-header mb-3! text-center!"
        >
          <h2
            part="identity-widget-login-title"
            id="login-dialog-title"
            className="identity-widget-login-title text-2xl! font-bold! text-gray-800! mb-0!"
          >
            {title}
          </h2>
          <p
            part="identity-widget-login-subtitle"
            className="identity-widget-login-subtitle text-sm! text-gray-600! mt-1!"
          >
            {subtitle}
          </p>
        </div>

        <form
          part="identity-widget-login-form"
          onSubmit={handleSubmit}
          className="identity-widget-login-form space-y-2!"
          aria-label="Login form"
        >
          {enableGoogleLogin && (
            <>
              <div
                part="identity-widget-google-section"
                className="identity-widget-google-section mt-0! mb-4! hidden! justify-center!"
              >
                <Button
                  type={ButtonType.BUTTON}
                  variant={ButtonVariant.OUTLINE}
                  part="identity-widget-google-button"
                  onClick={() => handleGoogleLogin()}
                  disabled={loading}
                  className="identity-widget-google-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!"
                >
                  <img
                    part="identity-widget-google-icon"
                    src={googleIcon}
                    alt="Google"
                    className="identity-widget-google-icon w-[18px]! h-[18px]!"
                  />
                  <span part="identity-widget-google-text" className="identity-widget-google-text">
                    Sign in with Google
                  </span>
                </Button>
              </div>

              <div
                part="identity-widget-login-divider"
                className="identity-widget-login-divider relative! mt-2! mb-4! hidden!"
              >
                <div
                  part="identity-widget-login-divider-line-wrap"
                  className="identity-widget-login-divider-line-wrap absolute! inset-0! flex! items-center!"
                >
                  <div
                    part="identity-widget-login-divider-line"
                    className="identity-widget-login-divider-line w-full! border-t! border-solid! border-gray-300!"
                  ></div>
                </div>
                <div
                  part="identity-widget-login-divider-text-wrap"
                  className="identity-widget-login-divider-text-wrap relative! flex! justify-center! text-sm!"
                >
                  <span
                    part="identity-widget-login-divider-text"
                    className="identity-widget-login-divider-text px-2! bg-white text-gray-500"
                  >
                    OR
                  </span>
                </div>
              </div>
            </>
          )}

          <div
            part="identity-widget-login-email-field"
            className="identity-widget-login-email-field mt-0! ml-0! mb-4! mr-0!"
          >
            <Input
              label="Email or Username"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email or username"
              disabled={loading}
              className="w-full!"
              autoComplete="username"
              endIcon={
                <>
                  {checkingEmail && <Loader />}
                  {!checkingEmail && emailExists && isEmailValid && !emailCheckError && (
                    <img
                      part="identity-widget-login-email-verified-icon"
                      className="identity-widget-login-email-verified-icon"
                      src={checkSuccessImg}
                      alt="User verified"
                      aria-label="User found"
                      style={{ width: 18, height: 18 }}
                    />
                  )}
                </>
              }
            />
          </div>

          {/* Banner for non-existing user - appears after email field */}
          {showBanner && !emailExists && isEmailValid && !emailCheckError && (
            <Banner
              type={MessageType.INFO}
              message={INFO_MESSAGES.EMAIL_NOT_FOUND}
              actionText="Let's create one to continue?"
              onActionClick={() => {
                setShowBanner(false);
                setShowCreateAccount(true);
              }}
              onClose={() => setShowBanner(false)}
              className="mb-4!"
            />
          )}

          {/* Banner for API error */}
          {showBanner && emailCheckError && (
            <Banner
              type={MessageType.ERROR}
              message={emailCheckErrorMessage}
              onClose={() => {
                setShowBanner(false);
                setEmailCheckError(false);
                setEmailCheckErrorMessage("");
              }}
              className="mb-4!"
            />
          )}

          <div
            part="identity-widget-login-password-field"
            className="identity-widget-login-password-field mt-0! ml-0! mb-0! mr-0!"
          >
            <div
              part="identity-widget-login-password-input-wrap"
              className="identity-widget-login-password-input-wrap relative! w-full!"
            >
              <Input
                label="Password"
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage(""); // Clear error when user types
                }}
                onKeyDown={handlePasswordCapsLock}
                onKeyUp={handlePasswordCapsLock}
                placeholder="Enter Password..."
                disabled={loading}
                className="w-full!"
                autoComplete="current-password"
                error={errorMessage}
                endIcon={
                  <button
                    type="button"
                    part="identity-widget-login-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    className="identity-widget-login-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!"
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg
                        part="identity-widget-login-password-hide-icon"
                        className="identity-widget-login-password-hide-icon w-5! h-5!"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        part="identity-widget-login-password-show-icon"
                        className="identity-widget-login-password-show-icon w-5! h-5!"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                }
              />
              {capsLockOn && (
                <p
                  part="identity-widget-login-password-capslock"
                  className="identity-widget-login-password-capslock mt-1! text-sm! text-gray-600!"
                  role="status"
                  aria-live="polite"
                >
                  {INFO_MESSAGES.CAPS_LOCK_ON}
                </p>
              )}
            </div>
          </div>

          <div
            part="identity-widget-login-meta-row"
            className="identity-widget-login-meta-row flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!"
          >
            <label
              part="identity-widget-login-remember-label"
              className="identity-widget-login-remember-label flex! items-center! m-0!"
            >
              <input
                type="checkbox"
                part="identity-widget-login-remember-checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="identity-widget-login-remember-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                aria-label="Remember me"
              />
              <span
                part="identity-widget-login-remember-text"
                className="identity-widget-login-remember-text text-gray-600!"
                style={{
                  fontWeight: "500",
                  color: "#5F5B7D",
                }}
              >
                Remember me
              </span>
            </label>
            <a
              href="#"
              part="identity-widget-login-forgot-link"
              className="identity-widget-login-forgot-link no-underline! --button-primary-text!"
              style={{
                fontWeight: "500",
              }}
              onClick={(e) => {
                e.preventDefault();
                setShowResetPassword(true);
              }}
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type={ButtonType.SUBMIT}
            part="identity-widget-submit-button identity-widget-login-submit-button"
            disabled={loading || !email}
            className="identity-widget-submit-button identity-widget-login-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-10! disabled:cursor-not-allowed! m-0!"
          >
            {loading ? (
              <span
                part="identity-widget-login-submit-loading"
                className="identity-widget-login-submit-loading flex! items-center! justify-center!"
              >
                <svg
                  part="identity-widget-login-submit-spinner"
                  className="identity-widget-login-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25!"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75!"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </Button>
          {/* Divider */}
          <div
            part="identity-widget-login-bottom-divider"
            className="identity-widget-login-bottom-divider relative! mt-4! mb-4!"
          >
            <div
              part="identity-widget-login-bottom-divider-line-wrap"
              className="identity-widget-login-bottom-divider-line-wrap absolute! inset-0! flex! items-center!"
            >
              <div
                part="identity-widget-login-bottom-divider-line"
                className="identity-widget-login-bottom-divider-line w-full! border-t! border-solid! border-gray-300!"
              ></div>
            </div>
            <div
              part="identity-widget-login-bottom-divider-text-wrap"
              className="identity-widget-login-bottom-divider-text-wrap relative! flex! justify-center! text-sm!"
            >
              <span
                part="identity-widget-login-bottom-divider-text"
                className="identity-widget-login-bottom-divider-text px-2! bg-white text-gray-500"
              >
                OR
              </span>
            </div>
          </div>

          <Button
            type={ButtonType.BUTTON}
            variant={ButtonVariant.OUTLINE}
            part="identity-widget-login-create-account-button"
            onClick={() => setShowCreateAccount(true)}
            disabled={loading}
            className="identity-widget-login-create-account-button w-full! flex! items-center! justify-center! gap-3! m-0!"
          >
            <span
              part="identity-widget-login-create-account-text"
              className="identity-widget-login-create-account-text"
            >
              Create an Account
            </span>
          </Button>

          <div
            part="identity-widget-login-help-center-wrap"
            className="identity-widget-login-help-center-wrap text-center! mt-4!"
          >
            <button
              type="button"
              part="identity-widget-login-help-center-button"
              className="identity-widget-login-help-center-button group bg-transparent! border-none! p-0! text-sm! font-normal! cursor-pointer!"
              onClick={() => setShowHelpCenter(true)}
            >
              <span className="text-gray-800!">Can&apos;t log in? </span>
              <span className="text-blue-400! text-base! font-bold! transition-all! duration-150! group-hover:underline!">
                Visit our help center
              </span>
            </button>
          </div>
        </form>
      </div>
      {toastMessage && (
        <Toast message={toastMessage} type={toastType} onClose={() => setToastMessage("")} />
      )}
    </div>
  );
};

export default EmbeddedLoginForm;
