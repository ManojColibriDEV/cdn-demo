import { useRef, useEffect } from "react";
import Button from "../common/ui/button";
import type { ResetPasswordSuccessProps } from "../types";
import { ButtonVariant, ButtonType } from "../constants";
import badgeCheckIcon from "../icons/badge-check.svg";

const ResetPasswordSuccess = ({
  email,
  loading,
  cooldown,
  onResendLink,
  onBack,
  onClose,
}: ResetPasswordSuccessProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      part="identity-widget-reset-success-overlay"
      className="identity-widget-reset-success-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4"
      ref={overlayRef}
      onMouseDown={onOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-success-dialog-title"
    >
      <div
        part="identity-widget-reset-success-modal"
        className="identity-widget-reset-success-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!"
        role="document"
      >
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant={ButtonVariant.LINK}
          part="identity-widget-reset-success-close-button"
          className="identity-widget-reset-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!"
          type={ButtonType.BUTTON}
          ariaLabel="Close dialog"
        >
          <svg
            part="identity-widget-reset-success-close-icon"
            className="identity-widget-reset-success-close-icon w-6! h-6!"
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

        {/* Success Icon */}
        <div
          part="identity-widget-reset-success-icon-wrap"
          className="identity-widget-reset-success-icon-wrap flex! justify-center! mb-4!"
        >
          <img
            part="identity-widget-reset-success-icon"
            src={badgeCheckIcon}
            alt="Success"
            aria-hidden="true"
            className="identity-widget-reset-success-icon w-16! h-16!"
          />
        </div>

        {/* Header */}
        <div
          part="identity-widget-reset-success-header"
          className="identity-widget-reset-success-header mb-6! text-center!"
        >
          <h2
            part="identity-widget-reset-success-title"
            id="reset-success-dialog-title"
            className="identity-widget-reset-success-title text-2xl! font-bold! text-gray-800! mb-3!"
          >
            Check your email
          </h2>
          <p
            part="identity-widget-reset-success-subtitle"
            className="identity-widget-reset-success-subtitle text-base! text-gray-700! mb-2!"
          >
            We've sent a password reset link to
          </p>
          <p
            part="identity-widget-reset-success-email"
            className="identity-widget-reset-success-email text-base! font-semibold! text-gray-900! mb-4!"
          >
            {email}
          </p>
          <p
            part="identity-widget-reset-success-copy"
            className="identity-widget-reset-success-copy text-sm! text-gray-800! mb-2!"
          >
            Follow the instructions in the email to reset your password and return to checkout.
          </p>
          <p
            part="identity-widget-reset-success-note"
            className="identity-widget-reset-success-note text-xs! text-gray-500!"
          >
            Didn't receive the email? Check your spam folder or try again in a few minutes.
          </p>
        </div>

        {/* Cooldown message */}
        {cooldown > 0 && (
          <p
            part="identity-widget-reset-success-cooldown-message"
            className="identity-widget-reset-success-cooldown-message text-sm! text-[var(--banner-error-text)]! text-center! mb-2!"
            role="status"
            aria-live="polite"
          >
            <b>We've already sent a reset link. Try again in {cooldown}s</b>
          </p>
        )}

        {/* Resend Link Button */}
        <Button
          type={ButtonType.BUTTON}
          onClick={onResendLink}
          disabled={loading || cooldown > 0}
          ariaLabel="Resend password reset link"
          part="identity-widget-submit-button identity-widget-reset-success-resend-button"
          className="identity-widget-submit-button identity-widget-reset-success-resend-button w-full! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! m-0! mb-4!"
        >
          {loading ? (
            <span
              part="identity-widget-reset-success-resend-loading"
              className="identity-widget-reset-success-resend-loading flex! items-center! justify-center!"
            >
              <svg
                part="identity-widget-reset-success-resend-spinner"
                className="identity-widget-reset-success-resend-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  part="identity-widget-reset-success-resend-spinner-track"
                  className="identity-widget-reset-success-resend-spinner-track opacity-25!"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  part="identity-widget-reset-success-resend-spinner-fill"
                  className="identity-widget-reset-success-resend-spinner-fill opacity-75!"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Resend link"
          )}
        </Button>

        {/* Back to Sign In Button */}
        <Button
          type={ButtonType.BUTTON}
          variant={ButtonVariant.OUTLINE}
          onClick={onBack}
          disabled={loading}
          part="identity-widget-reset-success-back-button"
          className="identity-widget-reset-success-back-button w-full! flex! items-center! justify-center! gap-3!"
        >
          <span
            part="identity-widget-reset-success-back-text"
            className="identity-widget-reset-success-back-text"
          >
            Back to sign in
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordSuccess;
