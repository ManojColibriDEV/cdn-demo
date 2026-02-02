import { useState, useRef, useEffect } from "react";
import Button from "../common/ui/button";
import Input from "../common/ui/input";
import Banner from "../common/ui/banner";
import Loader from "../common/ui/loader";
import { handleAuthentication } from "../functions";
import { checkEmail } from "../services";
import CreateAccountForm from "./create-account-form";
import ResetPasswordForm from "./reset-password-form";
import checkSuccessImg from "../icons/badge-check.svg";

interface EmbeddedLoginFormProps {
  onSuccess: (userSession: any) => void;
  onError: (error: string) => void;
  handleClose: () => void;
  authority?: string;
  title?: string;
  subtitle?: string;
  initialEmail?: string;
}

const EmbeddedLoginForm = ({
  onSuccess,
  onError,
  handleClose,
  authority,
  title = "Continue to login",
  subtitle = "Continue by signing in.",
  initialEmail = "",
}: EmbeddedLoginFormProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Un-Checked by default
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const emailCheckTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      return;
    }

    // Only validate email if input contains @ (is an email, not username)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.includes('@')) {
      // If it's a username (no @), allow login without checking
      setEmailExists(true);
      setShowBanner(false);
      return;
    }

    // Validate email format before making API call
    if (!emailRegex.test(email)) {
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
        // On error, allow user to proceed
        setEmailExists(true);
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
      const errorMsg =
        error instanceof Error ? error.message : "Authentication failed";
      setErrorMessage(errorMsg);
      onError(errorMsg);
    } finally {
      setLoading(false);
    }
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

        <div className="mb-3! text-center!">
          <h2 className="text-2xl! font-bold! text-gray-800! mb-0!">{title}</h2>
          <p className="text-sm! text-gray-600! mt-1!">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2!">
          <div className="mt-0! ml-0! mb-4! mr-0!">
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
                  {!checkingEmail && emailExists && isEmailValid && (
                    <img
                      src={checkSuccessImg}
                      alt="user found"
                      style={{ width: 18, height: 18 }}
                    />
                  )}
                </>
              }
            />
          </div>

          {/* Banner for non-existing user - appears after email field */}
          {showBanner && !emailExists && isEmailValid && (
            <Banner
              type="info"
              message="We couldn't find an account with this email."
              actionText="Let's create one to continue?"
              onActionClick={() => {
                setShowBanner(false);
                setShowCreateAccount(true);
              }}
              onClose={() => setShowBanner(false)}
              className="mb-4!"
            />
          )}

          <div className="mt-0! ml-0! mb-0! mr-0!">
            <div className="relative! w-full!">
              <Input
                label="Password"
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage(""); // Clear error when user types
                }}
                placeholder="Enter Password..."
                disabled={loading}
                className="w-full!"
                autoComplete="current-password"
                error={errorMessage}
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

          <div className="flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!">
            <label className="flex! items-center! m-0!">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
              />
              <span className="text-gray-600!">Remember me</span>
            </label>
            <a
              href="#"
              className="text-[--button-link-text]-700! hover:text-[--button-link-text]-700! no-underline!"
              onClick={(e) => {
                e.preventDefault();
                setShowResetPassword(true);
              }}
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            disabled={
              loading ||
              !email
            }
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
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </Button>

          <div className="relative! mt-4! mb-4!">
            <div className="absolute! inset-0! flex! items-center!">
              <div className="w-full! border-t! border-gray-300"></div>
            </div>
            <div className="relative! flex! justify-center! text-sm!">
              <span className="px-2! bg-white text-gray-500">OR</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowCreateAccount(true)}
            disabled={loading}
            className="w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!"
          >
            <span>Create an Account</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmbeddedLoginForm;
