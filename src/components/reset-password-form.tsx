import { useState, useRef, useEffect } from "react";
import Button from "../common/ui/button";
import Input from "../common/ui/input";
import Banner from "../common/ui/banner";
import { forgotPassword, checkEmail } from "../services";
import type { ResetPasswordFormProps } from "../types";
import ResetPasswordSuccess from "./reset-password-success";
import checkSuccessImg from "../icons/badge-check.svg";

const ResetPasswordForm = ({
  email: initialEmail,
  onBack,
  handleClose,
}: ResetPasswordFormProps) => {
  const [email, setEmail] = useState(initialEmail || "");
  const [loading, setLoading] = useState(false);
  const [successSent, setSuccessSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [handleClose]);

  // Email validation effect
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(email);
    setIsEmailValid(valid);

    if (!valid || !email) {
      setEmailExists(false);
      return;
    }

    // Debounce email check
    const timer = setTimeout(async () => {
      setCheckingEmail(true);
      try {
        const response = await checkEmail(email);
        console.log('[ResetPassword] Email check response:', response);
        setEmailExists(response.exists);
        console.log('[ResetPassword] Email exists:', response.exists);
      } catch (error) {
        console.error("[ResetPassword] Error checking email:", error);
        setEmailExists(false);
      } finally {
        setCheckingEmail(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [email]);

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Email is required");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      await forgotPassword(email);
      console.log("[ResetPassword] Reset link sent to:", email);
      setSuccessSent(true);
    } catch (error) {
      console.error("[ResetPassword] Failed to send reset link:", error);
      const errorMsg =
        error instanceof Error
          ? error.message
          : "Failed to send reset link. Please try again.";
      setErrorMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleResendLink = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      await forgotPassword(email);
      console.log("[ResetPassword] Reset link resent to:", email);
    } catch (error) {
      console.error("[ResetPassword] Failed to resend reset link:", error);
      setSuccessSent(false);
      const errorMsg =
        error instanceof Error
          ? error.message
          : "Failed to resend reset link. Please try again.";
      setErrorMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Success Screen - After password reset link is sent
  if (successSent) {
    return (
      <ResetPasswordSuccess
        email={email}
        loading={loading}
        onResendLink={handleResendLink}
        onBack={onBack}
        onClose={handleClose}
      />
    );
  }

  // Initial Form - Send reset link
  return (
    <div
      className="fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4"
      ref={overlayRef}
      onMouseDown={onOverlayClick}
    >
      <div className="bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!">
        {/* Close Button */}
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

        {/* Header */}
        <div className="mb-6! text-center!">
          <h2 className="text-2xl! font-bold! text-gray-800! mb-2!">
            Reset your password
          </h2>
          <p className="text-sm! text-gray-600!">
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4!">
          {/* Email Address - Editable with validation */}
          <div className="mt-0! ml-0! mb-4! mr-0!">
            <Input
              label="Email Address"
              id="reset-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage("");
              }}
              placeholder="Enter email"
              disabled={loading}
              className="w-full!"
              autoComplete="email"
              endIcon={
                <>
                  {checkingEmail && (
                    <div className="animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!"></div>
                  )}
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

          {/* Error Banner */}
          {errorMessage && (
            <Banner
              type="error"
              message={errorMessage}
              actionText="Want to sign in instead?"
              onActionClick={onBack}
              onClose={() => setErrorMessage("")}
              className="mb-4!"
            />
          )}

          {/* Send Reset Link Button */}
          <Button
            type="submit"
            disabled={loading || !email || !isEmailValid || !emailExists}
            className="w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!"
            onClick={() => {
              console.log('[ResetPassword] Button state:', { loading, email, isEmailValid, emailExists });
            }}
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
                Sending...
              </span>
            ) : (
              "Send reset link"
            )}
          </Button>

          {/* Back to Sign In Button */}
          <button
            type="button"
            onClick={onBack}
            disabled={loading}
            className="w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! mt-4!"
          >
            <span>Back to sign in</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
