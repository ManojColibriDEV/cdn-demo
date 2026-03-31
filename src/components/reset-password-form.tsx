import { useState, useRef, useEffect } from "react";
import Button from "../common/ui/button";
import Input from "../common/ui/input";
import Banner from "../common/ui/banner";
import Loader from "../common/ui/loader";
import { forgotPassword, checkEmail } from "../services";
import type { ResetPasswordFormProps } from "../types";
import { useBrandConfigError } from "../hooks/useBrandConfigError";
import ResetPasswordSuccess from "./reset-password-success";
import checkSuccessImg from "../icons/badge-check.svg";
import {
  MessageType,
  EMAIL_REGEX,
  TIMING,
  ERROR_MESSAGES,
  INFO_MESSAGES,
  ButtonType,
  ButtonVariant,
} from "../constants";

const ResetPasswordForm = ({
  email: initialEmail,
  onBack,
  handleClose,
  onCreateAccount,
}: ResetPasswordFormProps) => {
  const [email, setEmail] = useState(initialEmail || "");
  const [loading, setLoading] = useState(false);
  const [successSent, setSuccessSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailCheckError, setEmailCheckError] = useState(false);
  const [emailCheckErrorMessage, setEmailCheckErrorMessage] = useState("");
  const [showBanner, setShowBanner] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const brandConfigError = useBrandConfigError();
  const overlayRef = useRef<HTMLDivElement>(null);
  const cooldownRef = useRef<NodeJS.Timeout | null>(null);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    cooldownRef.current = setTimeout(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);
    return () => {
      if (cooldownRef.current) clearTimeout(cooldownRef.current);
    };
  }, [cooldown]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [handleClose]);

  // Email validation effect
  useEffect(() => {
    // Don't make any API calls when brand isn't configured
    if (brandConfigError) return;

    const valid = EMAIL_REGEX.test(email);
    setIsEmailValid(valid);

    if (!valid || !email) {
      setEmailExists(false);
      setEmailCheckError(false);
      setEmailCheckErrorMessage("");
      setShowBanner(false);
      return;
    }

    // Debounce email check
    const timer = setTimeout(async () => {
      setCheckingEmail(true);
      try {
        const response = await checkEmail(email);
        console.log("[ResetPassword] Email check response:", response);
        if (response.exists) {
          setEmailExists(true);
          setShowBanner(false);
        } else {
          setEmailExists(false);
          setShowBanner(true);
        }
        console.log("[ResetPassword] Email exists:", response.exists);
      } catch (error) {
        console.error("[ResetPassword] Error checking email:", error);
        // Show error banner for API failure
        const errorMsg =
          error instanceof Error ? error.message : "Unable to verify email. Please try again.";
        setEmailCheckError(true);
        setEmailCheckErrorMessage(errorMsg);
        setShowBanner(true);
        setEmailExists(false);
      } finally {
        setCheckingEmail(false);
      }
    }, TIMING.EMAIL_CHECK_DEBOUNCE);

    return () => clearTimeout(timer);
  }, [email, brandConfigError]);

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (brandConfigError) return;

    if (!email) {
      setErrorMessage(ERROR_MESSAGES.EMAIL_REQUIRED);
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      await forgotPassword(email);
      console.log("[ResetPassword] Reset link sent to:", email);
      setCooldown(TIMING.RESEND_COOLDOWN_SECONDS);
      setSuccessSent(true);
    } catch (error) {
      console.error("[ResetPassword] Failed to send reset link:", error);
      const errorMsg = error instanceof Error ? error.message : ERROR_MESSAGES.RESET_LINK_FAILED;
      setErrorMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleResendLink = async () => {
    if (cooldown > 0) return;
    setLoading(true);
    setErrorMessage("");

    try {
      await forgotPassword(email);
      console.log("[ResetPassword] Reset link resent to:", email);
      setCooldown(TIMING.RESEND_COOLDOWN_SECONDS);
    } catch (error) {
      console.error("[ResetPassword] Failed to resend reset link:", error);
      setSuccessSent(false);
      const errorMsg = error instanceof Error ? error.message : ERROR_MESSAGES.RESET_LINK_FAILED;
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
        cooldown={cooldown}
        onResendLink={handleResendLink}
        onBack={onBack}
        onClose={handleClose}
      />
    );
  }

  // Initial Form - Send reset link
  return (
    <div
      part="identity-widget-reset-password-overlay"
      className="identity-widget-reset-password-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4"
      ref={overlayRef}
      onMouseDown={onOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-password-dialog-title"
    >
      <div
        part="identity-widget-reset-password-modal"
        className="identity-widget-reset-password-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!"
        role="document"
      >
        {/* Close Button */}
        <Button
          onClick={handleClose}
          variant={ButtonVariant.LINK}
          part="identity-widget-reset-password-close-button"
          className="identity-widget-reset-password-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!"
          type={ButtonType.BUTTON}
          ariaLabel="Close dialog"
        >
          <svg
            part="identity-widget-reset-password-close-icon"
            className="identity-widget-reset-password-close-icon w-6! h-6!"
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

        {/* Header */}
        <div
          part="identity-widget-reset-password-header"
          className="identity-widget-reset-password-header mb-6! text-center!"
        >
          <h2
            id="reset-password-dialog-title"
            part="identity-widget-reset-password-title"
            className="identity-widget-reset-password-title text-2xl! font-bold! text-gray-800! mb-2!"
          >
            Reset your password
          </h2>
          <p
            part="identity-widget-reset-password-subtitle"
            className="identity-widget-reset-password-subtitle text-sm! text-gray-600!"
          >
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>

        <form
          part="identity-widget-reset-password-form"
          onSubmit={handleSubmit}
          className="identity-widget-reset-password-form space-y-4!"
          aria-label="Reset password form"
        >
          {/* Email Address - Editable with validation */}
          <div
            part="identity-widget-reset-password-email-field"
            className="identity-widget-reset-password-email-field mt-0! ml-0! mb-4! mr-0!"
          >
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
              className="identity-widget-reset-password-email-input w-full!"
              autoComplete="email"
              endIcon={
                <>
                  {checkingEmail && <Loader />}
                  {!checkingEmail && emailExists && isEmailValid && !emailCheckError && (
                    <img
                      part="identity-widget-reset-password-email-verified-icon"
                      className="identity-widget-reset-password-email-verified-icon"
                      src={checkSuccessImg}
                      alt="User found"
                      aria-label="User found"
                      style={{ width: 18, height: 18 }}
                    />
                  )}
                </>
              }
            />
          </div>

          {/* Brand configuration error banner */}
          {brandConfigError && (
            <Banner
              type={MessageType.ERROR}
              title={ERROR_MESSAGES.BRAND_CONFIG_TITLE}
              message={ERROR_MESSAGES.BRAND_CONFIG_MESSAGE}
              className="identity-widget-reset-password-brand-error-banner mb-4!"
            />
          )}

          {/* Banner for non-existing email */}
          {!brandConfigError && showBanner && !emailExists && isEmailValid && !emailCheckError && (
            <Banner
              type={MessageType.INFO}
              message={INFO_MESSAGES.EMAIL_NOT_FOUND}
              actionText={onCreateAccount ? "Let's create one to continue?" : undefined}
              onActionClick={
                onCreateAccount
                  ? () => {
                      setShowBanner(false);
                      onCreateAccount();
                    }
                  : undefined
              }
              onClose={() => setShowBanner(false)}
              className="identity-widget-reset-password-email-not-found-banner mb-4!"
            />
          )}

          {/* Banner for check-email API failure */}
          {!brandConfigError && showBanner && emailCheckError && (
            <Banner
              type={MessageType.ERROR}
              message={emailCheckErrorMessage}
              onClose={() => {
                setShowBanner(false);
                setEmailCheckError(false);
                setEmailCheckErrorMessage("");
              }}
              className="identity-widget-reset-password-email-check-error-banner mb-4!"
            />
          )}

          {/* Error Banner */}
          {errorMessage && (
            <Banner
              type={MessageType.ERROR}
              message={errorMessage}
              actionText="Want to sign in instead?"
              onActionClick={onBack}
              onClose={() => setErrorMessage("")}
              className="identity-widget-reset-password-submit-error-banner mb-4!"
            />
          )}

          {/* Cooldown message */}
          {cooldown > 0 && (
            <p
              part="identity-widget-reset-password-cooldown-message"
              className="identity-widget-reset-password-cooldown-message text-sm! text-amber-600! text-center! mb-2!"
              role="status"
              aria-live="polite"
            >
              A password reset link has already been sent. Please wait {cooldown} seconds before
              requesting another.
            </p>
          )}

          {/* Send Reset Link Button */}
          <Button
            type={ButtonType.SUBMIT}
            part="identity-widget-submit-button identity-widget-reset-password-submit-button"
            disabled={
              loading || !email || !isEmailValid || !emailExists || brandConfigError || cooldown > 0
            }
            className="identity-widget-submit-button identity-widget-reset-password-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:cursor-not-allowed! m-0!"
            onClick={() => {
              console.log("[ResetPassword] Button state:", {
                loading,
                email,
                isEmailValid,
                emailExists,
              });
            }}
          >
            {loading ? (
              <span
                part="identity-widget-reset-password-submit-loading"
                className="identity-widget-reset-password-submit-loading flex! items-center! justify-center!"
              >
                <svg
                  part="identity-widget-reset-password-submit-spinner"
                  className="identity-widget-reset-password-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    part="identity-widget-reset-password-submit-spinner-track"
                    className="identity-widget-reset-password-submit-spinner-track opacity-25!"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    part="identity-widget-reset-password-submit-spinner-fill"
                    className="identity-widget-reset-password-submit-spinner-fill opacity-75!"
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

          {/* Divider */}
          <div
            part="identity-widget-reset-password-divider"
            className="identity-widget-reset-password-divider border-t! border-gray-200! my-4!"
          ></div>

          {/* Forgot Email Section */}
          <div
            part="identity-widget-reset-password-help-section"
            className="identity-widget-reset-password-help-section"
          >
            <h3
              part="identity-widget-reset-password-help-title"
              className="identity-widget-reset-password-help-title text-base! font-bold! text-gray-800! mb-1!"
            >
              Forgot Email?
            </h3>
            <p
              part="identity-widget-reset-password-help-desc"
              className="identity-widget-reset-password-help-desc text-sm! text-gray-600!"
            >
              If you no longer have access to the email address on file or have forgotten which one
              you used, please{" "}
              <a
                href="/contact-us"
                part="identity-widget-reset-password-support-link"
                className="identity-widget-reset-password-support-link text-[var(--button-primary-bg)]! hover:underline!"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact our support team
              </a>
              .
            </p>
          </div>

          {/* Back to Login */}
          <div
            part="identity-widget-reset-password-back-wrap"
            className="identity-widget-reset-password-back-wrap flex! justify-center! mt-4!"
          >
            <a
              href="#"
              part="identity-widget-reset-password-back-link"
              className="identity-widget-reset-password-back-link text-[var(--button-primary-bg)]! hover:underline! text-sm! font-medium! flex! items-center! gap-1!"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
            >
              &larr; Back to login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
