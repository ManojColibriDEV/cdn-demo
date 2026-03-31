import { FC } from "react";
import Button from "../button";
import { ButtonType, ButtonVariant } from "../../../constants";

interface WeakPasswordModalProps {
  onResetPassword: () => void;
  onContinue: () => void;
}

const WeakPasswordModal: FC<WeakPasswordModalProps> = ({ onResetPassword, onContinue }) => {
  return (
    <div
      part="identity-widget-weak-password-overlay"
      className="identity-widget-weak-password-overlay fixed! inset-0! bg-[#0000004f]! flex! items-center! justify-center! z-[2100]! p-4!"
      role="dialog"
      aria-modal="true"
      aria-labelledby="weak-password-dialog-title"
    >
      <div
        part="identity-widget-weak-password-modal"
        className="identity-widget-weak-password-modal bg-white! rounded-lg! p-8! w-full! max-w-md! relative! text-center!"
        role="document"
      >
        {/* Warning Icon */}
        <div
          part="identity-widget-weak-password-icon-wrap"
          className="identity-widget-weak-password-icon-wrap flex! justify-center! mb-4!"
        >
          <svg
            className="w-12! h-12! text-yellow-500!"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        <h3
          id="weak-password-dialog-title"
          part="identity-widget-weak-password-title"
          className="identity-widget-weak-password-title text-lg! font-bold! text-gray-800! mb-2!"
        >
          Weak Password Detected
        </h3>

        <p
          part="identity-widget-weak-password-message"
          className="identity-widget-weak-password-message text-sm! text-gray-600! mb-6!"
        >
          Your password is weak. Would you like to reset it before proceeding?
        </p>

        <div
          part="identity-widget-weak-password-actions"
          className="identity-widget-weak-password-actions flex! gap-3! justify-center!"
        >
          <Button
            type={ButtonType.BUTTON}
            variant={ButtonVariant.OUTLINE}
            part="identity-widget-weak-password-no-button"
            onClick={onContinue}
            className="identity-widget-weak-password-no-button flex-1! m-0! py-2.5! px-5! text-sm! font-semibold! rounded-lg! shadow-none! border! border-solid! border-gray-300! text-gray-700! bg-white! hover:bg-gray-50! hover:border-gray-400! transition-colors! duration-200!"
          >
            No, Continue
          </Button>
          <Button
            type={ButtonType.BUTTON}
            variant={ButtonVariant.PRIMARY}
            part="identity-widget-weak-password-yes-button"
            onClick={onResetPassword}
            className="identity-widget-weak-password-yes-button flex-1! m-0! py-2.5! px-5! text-sm! font-semibold! rounded-lg! shadow-none! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! transition-colors! duration-200!"
          >
            Yes, Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WeakPasswordModal;
