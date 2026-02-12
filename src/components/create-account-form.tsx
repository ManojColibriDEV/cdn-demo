import { useState, useRef, useEffect } from "react";
import Button from "../common/ui/button";
import Input from "../common/ui/input";
import Banner from "../common/ui/banner";
import Toast from "../common/ui/toast";
import Loader from "../common/ui/loader";
import { handleAuthentication } from "../functions";
import { authRegister, checkEmail } from "../services";
import type { CreateAccountFormProps } from "../types";
import checkSuccessImg from "../icons/badge-check.svg";
import {
  MessageType,
  TIMING,
  EMAIL_REGEX,
  PASSWORD_RULES,
  PASSWORD_REGEX,
  PASSWORD_SPECIAL_CHARS_ALT,
  PASSWORD_ALLOWED_CHARS_ALT,
  PASSWORD_STRENGTH,
  PASSWORD_STRENGTH_COLORS,
  PASSWORD_STRENGTH_WIDTHS,
  LOG_PREFIX,
  ERROR_MESSAGES,
  ButtonType,
  ButtonVariant,
} from "../constants";

const CreateAccountForm = ({
  onSuccess,
  onError,
  handleClose,
  onSignIn,
  title = "Create your account",
  subtitle = "Create an account to continue to checkout",
  initialEmail = "",
}: CreateAccountFormProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [emailCheckError, setEmailCheckError] = useState(false);
  const [emailCheckErrorMessage, setEmailCheckErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Checked by default
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<
    MessageType.SUCCESS | MessageType.WARNING | MessageType.ERROR | MessageType.INFO
  >(MessageType.INFO);
  const overlayRef = useRef<HTMLDivElement>(null);
  const emailCheckTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Individual password validation checks
  const passwordChecks = {
    length:
      password.length >= PASSWORD_RULES.MIN_LENGTH && password.length <= PASSWORD_RULES.MAX_LENGTH,
    hasNumber: PASSWORD_REGEX.NUMBER.test(password),
    hasUppercase: PASSWORD_REGEX.UPPERCASE.test(password),
    hasLowercase: PASSWORD_REGEX.LOWERCASE.test(password),
    hasSpecialChar: PASSWORD_SPECIAL_CHARS_ALT.test(password),
    onlyAllowedChars: PASSWORD_ALLOWED_CHARS_ALT.test(password) || password === "",
    differentFromUsername: email ? password !== email && password !== email.split("@")[0] : true,
  };

  // Password strength calculation - Strong only when ALL requirements are met
  const getPasswordStrength = (pw: string): { strength: string; color: string; width: string } => {
    if (!pw) return { strength: "", color: "", width: PASSWORD_STRENGTH_WIDTHS.EMPTY };

    // Check if ALL requirements are met
    const allRequirementsMet =
      passwordChecks.length &&
      passwordChecks.hasNumber &&
      passwordChecks.hasUppercase &&
      passwordChecks.hasLowercase &&
      passwordChecks.hasSpecialChar &&
      passwordChecks.onlyAllowedChars &&
      passwordChecks.differentFromUsername;

    if (allRequirementsMet) {
      return {
        strength: PASSWORD_STRENGTH.STRONG,
        color: PASSWORD_STRENGTH_COLORS.STRONG,
        width: PASSWORD_STRENGTH_WIDTHS.STRONG,
      };
    }

    // Count how many requirements are met for intermediate states
    let score = 0;
    if (passwordChecks.length) score++;
    if (passwordChecks.hasNumber) score++;
    if (passwordChecks.hasUppercase) score++;
    if (passwordChecks.hasLowercase) score++;
    if (passwordChecks.hasSpecialChar) score++;
    if (passwordChecks.onlyAllowedChars) score++;
    if (passwordChecks.differentFromUsername) score++;

    if (score <= 2)
      return {
        strength: PASSWORD_STRENGTH.WEAK,
        color: PASSWORD_STRENGTH_COLORS.WEAK,
        width: PASSWORD_STRENGTH_WIDTHS.WEAK,
      };
    return {
      strength: PASSWORD_STRENGTH.GOOD,
      color: PASSWORD_STRENGTH_COLORS.GOOD,
      width: PASSWORD_STRENGTH_WIDTHS.GOOD,
    };
  };

  const passwordStrength = getPasswordStrength(password);

  // Password validation function
  const validatePasswordRules = (pw: string): { isValid: boolean; error: string } => {
    if (!pw) {
      return { isValid: false, error: ERROR_MESSAGES.PASSWORD_REQUIRED };
    }

    if (pw.length < PASSWORD_RULES.MIN_LENGTH || pw.length > PASSWORD_RULES.MAX_LENGTH) {
      return { isValid: false, error: ERROR_MESSAGES.PASSWORD_LENGTH };
    }

    if (!PASSWORD_REGEX.UPPERCASE.test(pw)) {
      return {
        isValid: false,
        error: ERROR_MESSAGES.PASSWORD_UPPERCASE,
      };
    }

    if (!PASSWORD_REGEX.LOWERCASE.test(pw)) {
      return {
        isValid: false,
        error: ERROR_MESSAGES.PASSWORD_LOWERCASE,
      };
    }

    if (!PASSWORD_REGEX.NUMBER.test(pw)) {
      return {
        isValid: false,
        error: ERROR_MESSAGES.PASSWORD_NUMBER,
      };
    }

    // Check for allowed special characters only: ! @ # $ % ^ & * . - _
    if (!PASSWORD_SPECIAL_CHARS_ALT.test(pw)) {
      return {
        isValid: false,
        error: ERROR_MESSAGES.PASSWORD_SPECIAL_CHAR,
      };
    }

    // Check for disallowed special characters
    if (!PASSWORD_ALLOWED_CHARS_ALT.test(pw)) {
      return {
        isValid: false,
        error: ERROR_MESSAGES.PASSWORD_INVALID_CHARS,
      };
    }

    return { isValid: true, error: "" };
  };

  // Check email existence when user types
  useEffect(() => {
    // Clear previous timeout
    if (emailCheckTimeoutRef.current) {
      clearTimeout(emailCheckTimeoutRef.current);
    }

    // Reset banner and email exists state when email is empty or invalid
    if (!email) {
      setShowBanner(false);
      setEmailExists(false);
      setEmailCheckError(false);
      setEmailCheckErrorMessage("");
      return;
    }

    // Validate email format before making API call
    if (!EMAIL_REGEX.test(email)) {
      setShowBanner(false);
      setEmailExists(false);
      return;
    }

    // Debounce email check by 500ms
    emailCheckTimeoutRef.current = setTimeout(async () => {
      setCheckingEmail(true);
      try {
        const result = await checkEmail(email);
        if (result.exists) {
          setEmailExists(true);
          setShowBanner(true);
        } else {
          setEmailExists(false);
          setShowBanner(false);
        }
      } catch (error) {
        console.error(`${LOG_PREFIX.CREATE_ACCOUNT} Email check failed:`, error);
        // Show error banner for API failure (no toast for check-email)
        const errorMsg = error instanceof Error ? error.message : "Unable to verify email. You can still proceed with registration.";
        setEmailCheckError(true);
        setEmailCheckErrorMessage(errorMsg);
        setShowBanner(true);
        setEmailExists(false);
      } finally {
        setCheckingEmail(false);
      }
    }, TIMING.EMAIL_CHECK_DEBOUNCE);

    // Cleanup timeout on unmount
    return () => {
      if (emailCheckTimeoutRef.current) {
        clearTimeout(emailCheckTimeoutRef.current);
      }
    };
  }, [email]);

  // Check if email is valid
  const isEmailValid = email && EMAIL_REGEX.test(email);

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

    // Mark form as touched to show validation errors
    setTouched(true);

    if (!email || !firstName || !lastName) {
      onError("Please fill in all required fields");
      return;
    }

    // Validate password
    const passwordValidation = validatePasswordRules(password);
    if (!passwordValidation.isValid) {
      setPasswordError(passwordValidation.error);
      onError(passwordValidation.error);
      setLoading(false);
      return;
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      setEmailError(ERROR_MESSAGES.EMAIL_INVALID);
      onError(ERROR_MESSAGES.EMAIL_INVALID);
      return;
    }

    setLoading(true);
    setEmailError("");
    setToastMessage("");

    try {
      // Extract username from email (part before @)
      const username = email.split("@")[0];

      // Call registration API
      const registrationResult = await authRegister({
        username,
        email,
        firstName,
        lastName,
        password,
      });

      console.log(
        `${LOG_PREFIX.CREATE_ACCOUNT} Registration successful:`,
        registrationResult.message
      );

      // After successful registration, automatically log in the user
      // Use the full email for login (Keycloak uses email as username)
      try {
        const tokens = await handleAuthentication(email, password, rememberMe);

        // Call success callback with tokens
        onSuccess(tokens);
      } catch (loginError) {
        console.error(
          `${LOG_PREFIX.CREATE_ACCOUNT} Auto-login failed after registration:`,
          loginError
        );
        const loginErrorMsg =
          loginError instanceof Error ? loginError.message : "Auto-login failed";
        onError(loginErrorMsg);
      }
    } catch (error) {
      console.error(`${LOG_PREFIX.CREATE_ACCOUNT} Registration failed:`, error);
      const errorMsg = error instanceof Error ? error.message : ERROR_MESSAGES.REGISTRATION_FAILED;

      // Show toast for errors
      setToastMessage(errorMsg);
      setToastType(MessageType.ERROR);
      onError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <Toast
          type={toastType}
          message={toastMessage}
          duration={TIMING.TOAST_DEFAULT_DURATION}
          onClose={() => setToastMessage("")}
        />
      )}

      <div
        className="fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4"
        ref={overlayRef}
        onMouseDown={onOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-account-dialog-title"
      >
        <div
          className="bg-white! rounded-lg! p-8! w-full! max-w-lg! relative! max-h-[90vh]! overflow-y-auto! [&::-webkit-scrollbar]:w-2! [&::-webkit-scrollbar-track]:bg-gray-100! [&::-webkit-scrollbar-thumb]:bg-gray-300! [&::-webkit-scrollbar-thumb]:rounded-full! [&::-webkit-scrollbar-thumb:hover]:bg-gray-400!"
          role="document"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#d1d5db #f3f4f6",
          }}
        >
          <Button
            onClick={handleClose}
            variant={ButtonVariant.LINK}
            className="absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!"
            type={ButtonType.BUTTON}
            ariaLabel="Close dialog"
          >
            <svg
              className="w-6! h-6!"
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

          <div className="mb-6! text-center!">
            <h2
              id="create-account-dialog-title"
              className="text-2xl! font-bold! text-gray-800! mb-1!"
            >
              {title}
            </h2>
            <p className="text-sm! text-gray-600! mt-1!">{subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4!" aria-label="Create account form">
            {/* Email Address */}
            <div className="mt-0! ml-0! mb-4! mr-0!">
              <Input
                label="Email Address"
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                placeholder="Enter email address"
                disabled={loading}
                className="w-full!"
                autoComplete="email"
                error={touched && !email ? "Required" : emailError ? emailError : ""}
                endIcon={
                  <>
                    {checkingEmail && <Loader />}
                    {!checkingEmail &&
                      !emailExists &&
                      !emailCheckError &&
                      email &&
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
                        <img
                          src={checkSuccessImg}
                          alt="Email available"
                          aria-label="Email is available"
                          style={{ width: 18, height: 18 }}
                        />
                      )}
                  </>
                }
              />
            </div>

            {/* Banner for existing user or API error - appears after email field */}
            {showBanner && emailExists && !emailCheckError && (
              <Banner
                type={MessageType.INFO}
                message="We found an existing account."
                actionText="Want to sign in instead?"
                onActionClick={() => {
                  setShowBanner(false);
                  onSignIn(email);
                }}
                onClose={() => setShowBanner(false)}
                className="mb-4!"
              />
            )}
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

            {/* First Name and Last Name */}
            <div className="grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!">
              <Input
                label="First Name"
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                disabled={loading}
                className="w-full!"
                autoComplete="given-name"
                error={touched && !firstName ? "Required" : ""}
              />
              <Input
                label="Last Name"
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                disabled={loading}
                className="w-full!"
                autoComplete="family-name"
                error={touched && !lastName ? "Required" : ""}
              />
            </div>

            {/* Password */}
            <div className="mt-0! ml-0! mb-4! mr-0!">
              <div className="relative! w-full!">
                <Input
                  label="Password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(""); // Clear error on change
                  }}
                  placeholder="Enter Password..."
                  disabled={loading}
                  className="w-full!"
                  autoComplete="new-password"
                  error={passwordError}
                  endIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!"
                      tabIndex={-1}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <svg
                          className="w-5! h-5!"
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
                          className="w-5! h-5!"
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
              </div>
            </div>

            {/* Password Strength Indicator */}
            {password && (
              <div className="mt-2! mb-4!">
                <div className="flex! items-center! justify-between! mb-2!">
                  <div className="w-full! bg-gray-200! rounded-full! h-2! mr-3!">
                    <div
                      className="h-2! rounded-full! transition-all! duration-300!"
                      style={{
                        width: passwordStrength.width,
                        backgroundColor: passwordStrength.color,
                      }}
                    ></div>
                  </div>
                  <span
                    className="text-sm! font-medium! whitespace-nowrap!"
                    style={{ color: passwordStrength.color }}
                  >
                    {passwordStrength.strength}
                  </span>
                </div>

                {/* Password Requirements Checklist */}
                <div className="mt-3!">
                  <p className="text-sm! font-medium! text-gray-700! mb-2!">Password must:</p>
                  <ul className="space-y-1!">
                    <li className="flex! items-center! text-sm!">
                      {passwordChecks.length ? (
                        <svg
                          className="w-4! h-4! mr-2! text-green-500!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4! h-4! mr-2! text-gray-400!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span
                        className={passwordChecks.length ? "text-green-600!" : "text-gray-500!"}
                      >
                        be 9-15 characters
                      </span>
                    </li>
                    <li className="flex! items-center! text-sm!">
                      {passwordChecks.hasNumber ? (
                        <svg
                          className="w-4! h-4! mr-2! text-green-500!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4! h-4! mr-2! text-gray-400!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span
                        className={passwordChecks.hasNumber ? "text-green-600!" : "text-gray-500!"}
                      >
                        have at least one number
                      </span>
                    </li>
                    <li className="flex! items-center! text-sm!">
                      {passwordChecks.hasUppercase ? (
                        <svg
                          className="w-4! h-4! mr-2! text-green-500!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4! h-4! mr-2! text-gray-400!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span
                        className={
                          passwordChecks.hasUppercase ? "text-green-600!" : "text-gray-500!"
                        }
                      >
                        have at least one uppercase letter
                      </span>
                    </li>
                    <li className="flex! items-center! text-sm!">
                      {passwordChecks.hasSpecialChar ? (
                        <svg
                          className="w-4! h-4! mr-2! text-green-500!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4! h-4! mr-2! text-gray-400!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span
                        className={
                          passwordChecks.hasSpecialChar ? "text-green-600!" : "text-gray-500!"
                        }
                      >
                        have at least one special character
                      </span>
                    </li>
                    <li className="flex! items-center! text-sm!">
                      {passwordChecks.onlyAllowedChars ? (
                        <svg
                          className="w-4! h-4! mr-2! text-green-500!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4! h-4! mr-2! text-gray-400!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span
                        className={
                          passwordChecks.onlyAllowedChars ? "text-green-600!" : "text-gray-500!"
                        }
                      >
                        use only the following special characters !@#$%^&*._-
                      </span>
                    </li>
                    <li className="flex! items-center! text-sm!">
                      {passwordChecks.differentFromUsername ? (
                        <svg
                          className="w-4! h-4! mr-2! text-green-500!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4! h-4! mr-2! text-gray-400!"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span
                        className={
                          passwordChecks.differentFromUsername
                            ? "text-green-600!"
                            : "text-gray-500!"
                        }
                      >
                        be different from username
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Remember me checkbox */}
            <div className="flex! items-center! mt-4! ml-0! mb-4! mr-0!">
              <label className="flex! items-center! m-0!">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                  aria-label="Remember me"
                />
                <span
                  className="text-gray-600! text-sm!"
                  style={{
                    fontWeight: "500",
                    color: "#5F5B7D",
                  }}
                >
                  Remember me
                </span>
              </label>
            </div>

            {/* Create Account Button */}
            <Button
              type={ButtonType.SUBMIT}
              disabled={loading || emailExists || !isEmailValid}
              className="w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!"
            >
              {loading ? (
                <span className="flex! items-center! justify-center!">
                  <svg
                    className="animate-spin! -ml-1! mr-3! h-5! w-5! text-white"
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
                  Creating Account...
                </span>
              ) : (
                "Create Account"
              )}
            </Button>

            {/* Divider */}
            <div className="relative! mt-4! mb-4!">
              <div className="absolute! inset-0! flex! items-center!">
                <div className="w-full! border-t! border-solid! border-gray-300!"></div>
              </div>
              <div className="relative! flex! justify-center! text-sm!">
                <span className="px-2! bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Sign In Button */}
            <Button
              type={ButtonType.BUTTON}
              variant={ButtonVariant.OUTLINE}
              onClick={() => onSignIn(email)}
              disabled={loading}
              className="w-full! flex! items-center! justify-center! gap-3!"
            >
              <span>Sign In</span>
            </Button>
          </form>
        </div>
      </div>
      {toastMessage && (
        <Toast message={toastMessage} type={toastType} onClose={() => setToastMessage("")} />
      )}
    </>
  );
};

export default CreateAccountForm;
