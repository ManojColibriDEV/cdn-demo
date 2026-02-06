import { useRef, useEffect } from "react";
import Button from "../common/ui/button";
import type { ResetPasswordSuccessProps } from "../types";
import badgeCheckIcon from "../icons/badge-check.svg";

const ResetPasswordSuccess = ({
  email,
  loading,
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
      className="fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4"
      ref={overlayRef}
      onMouseDown={onOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-success-dialog-title"
    >
      <div className="bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!" role="document">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="link"
          className="absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!"
          type="button"
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

        {/* Success Icon */}
        <div className="flex! justify-center! mb-4!">
          <img
            src={badgeCheckIcon}
            alt="Success"
            aria-hidden="true"
            className="w-16! h-16!"
          />
        </div>

        {/* Header */}
        <div className="mb-6! text-center!">
          <h2 id="reset-success-dialog-title" className="text-2xl! font-bold! text-gray-800! mb-3!">
            Check your email
          </h2>
          <p className="text-base! text-gray-700! mb-2!">
            We've sent a password reset link to
          </p>
          <p className="text-base! font-semibold! text-gray-900! mb-4!">
            {email}
          </p>
          <p className="text-sm! text-gray-800! mb-2!">
            Follow the instructions in the email to reset your password and
            return to checkout.
          </p>
          <p className="text-xs! text-gray-500!">
            Didn't receive the email? Check your spam folder or try again in a
            few minutes.
          </p>
        </div>

        {/* Resend Link Button */}
        <Button
          type="button"
          onClick={onResendLink}
          disabled={loading}
          ariaLabel="Resend password reset link"
          className="w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0! mb-4!"
        >
          {loading ? (
            <span className="flex! items-center! justify-center!">
              <svg
                className="animate-spin! -ml-1! mr-3! h-5! w-5! text-white"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
            "Resend link"
          )}
        </Button>

        {/* Back to Sign In Button */}
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          disabled={loading}
          className="w-full! flex! items-center! justify-center! gap-3!"
        >
          <span>Back to sign in</span>
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordSuccess;
