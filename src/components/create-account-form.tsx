import { useState, useRef, useEffect } from "react";
import Button from "../common/ui/button";
import Input from "../common/ui/input";
import Banner from "../common/ui/banner";
import Toast from "../common/ui/toast";
import Loader from "../common/ui/loader";
import { validatePassword, handleAuthentication } from "../functions";
import { authRegister, checkEmail } from "../services";
import type { PasswordChecks } from "../types";
import checkSuccessImg from "../icons/check-success.png";

interface CreateAccountFormProps {
  onSuccess: (userSession: any) => void;
  onError: (error: string) => void;
  handleClose: () => void;
  onSignIn: (email?: string) => void;
  authority?: string;
  title?: string;
  subtitle?: string;
  initialEmail?: string;
}

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
  const [showPassword, setShowPassword] = useState(false);
  const [passwordChecks, setPasswordChecks] = useState<PasswordChecks | null>(
    null,
  );
  const [touched, setTouched] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [rememberMe, setRememberMe] = useState(true); // Checked by default
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<
    "success" | "warning" | "error" | "info"
  >("info");
  const overlayRef = useRef<HTMLDivElement>(null);
  const emailCheckTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      return;
    }

    // Validate email format before making API call
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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
        console.error("[CreateAccount] Email check failed:", error);
        // On error, don't block the user
        setEmailExists(false);
        setShowBanner(false);
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

  // Validate password whenever it changes
  useEffect(() => {
    if (password) {
      const userData =
        email || firstName || lastName
          ? {
            email: email,
            displayName: `${firstName} ${lastName}`.trim(),
          }
          : null;
      const checks = validatePassword(password, userData);
      setPasswordChecks(checks);
    } else {
      setPasswordChecks(null);
    }
  }, [password, email, firstName, lastName]);

  // Check if all password requirements are met
  const isPasswordValid = passwordChecks
    ? passwordChecks.length &&
    passwordChecks.upper &&
    passwordChecks.lower &&
    passwordChecks.number &&
    passwordChecks.noSpaces &&
    passwordChecks.noTriple &&
    passwordChecks.special &&
    passwordChecks.noNameParts &&
    passwordChecks.noEmailParts
    : false;

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

    // Mark form as touched to show validation errors
    setTouched(true);

    if (!email || !firstName || !lastName || !password) {
      onError("Please fill in all required fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      onError("Please enter a valid email address");
      return;
    }

    if (!isPasswordValid) {
      onError("Password does not meet requirements");
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
        "[CreateAccount] Registration successful:",
        registrationResult.message,
      );

      // After successful registration, automatically log in the user
      // Use the username (extracted from email) for login
      try {
        const tokens = await handleAuthentication(
          username,
          password,
          rememberMe,
        );

        // Call success callback with tokens
        onSuccess(tokens);
      } catch (loginError) {
        console.error(
          "[CreateAccount] Auto-login failed after registration:",
          loginError,
        );
        const loginErrorMsg =
          loginError instanceof Error
            ? loginError.message
            : "Auto-login failed";
        onError(loginErrorMsg);
      }
    } catch (error) {
      console.error("[CreateAccount] Registration failed:", error);
      const errorMsg =
        error instanceof Error ? error.message : "Registration failed";

      // Show toast for errors
      setToastMessage(errorMsg);
      setToastType("error");
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
          duration={5000}
          onClose={() => setToastMessage("")}
        />
      )}

      <div
        className="fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4"
        ref={overlayRef}
        onMouseDown={onOverlayClick}
      >
        <div className="bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!">
          <button
            onClick={handleClose}
            className="absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!"
            type="button"
          >
            <svg
              className="w-6! h-6!"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mb-6! text-center!">
            <h2 className="text-2xl! font-bold! text-gray-800! mb-1!">
              {title}
            </h2>
            <p className="text-sm! text-gray-600! mt-1!">{subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4!">
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
                error={
                  touched && !email ? "Required" : emailError ? emailError : ""
                }
                endIcon={
                  <>
                    {checkingEmail && <Loader />}
                    {!checkingEmail &&
                      !emailExists &&
                      email &&
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
                        <img
                          src={checkSuccessImg}
                          alt="available"
                          style={{ width: 18, height: 18 }}
                        />
                      )}
                  </>
                }
              />
            </div>

            {/* Banner for existing user - appears after email field */}
            {showBanner && emailExists && (
              <Banner
                type="info"
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

            {/* First Name and Last Name */}
            <div className="grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!">
              <Input
                label="First Name"
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                disabled={loading || emailExists || !isEmailValid}
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
                disabled={loading || emailExists || !isEmailValid}
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
                  }}
                  placeholder="Enter Password..."
                  disabled={loading || emailExists || !isEmailValid}
                  className="w-full!"
                  autoComplete="new-password"
                  error={
                    touched && !password
                      ? "Required"
                      : touched && password && !isPasswordValid
                        ? "Password must be 9-15 characters with at least one uppercase, lowercase, number, and special character (@.$%^_-). Example: MyPass123$"
                        : ""
                  }
                  endIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <svg
                          className="w-5! h-5!"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
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

            {/* Remember me checkbox */}
            <div className="flex! items-center! mt-4! ml-0! mb-4! mr-0!">
              <label className="flex! items-center! m-0!">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                />
                <span className="text-gray-600! text-sm!">Remember me</span>
              </label>
            </div>

            {/* Create Account Button */}
            <Button
              type="submit"
              disabled={loading || emailExists || !isEmailValid}
              className="w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!"
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
            <div className="relative! mt-6! mb-6!">
              <div className="absolute! inset-0! flex! items-center!">
                <div className="w-full! border-t! border-gray-300"></div>
              </div>
              <div className="relative! flex! justify-center! text-sm!">
                <span className="px-2! bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="button"
              onClick={() => onSignIn(email)}
              disabled={loading}
              className="w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!"
            >
              <span>Sign In</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAccountForm;
