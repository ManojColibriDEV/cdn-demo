import { useEffect, useRef, useState, type ReactNode } from "react";
import Button from "../common/ui/button";
import Input from "../common/ui/input";
import { ButtonType, ButtonVariant } from "../constants";

interface HelpCenterProps {
  onBack: () => void;
  handleClose: () => void;
}

interface HelpCenterHighlightProps {
  children: ReactNode;
}

interface HelpCenterStepTagProps {
  label: string;
}

const HelpCenterHighlight = ({ children }: HelpCenterHighlightProps) => (
  <span
    className="px-1! rounded-sm! font-medium!"
    style={{ backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 28%, white)" }}
  >
    {children}
  </span>
);

const HelpCenterStepTag = ({ label }: HelpCenterStepTagProps) => (
  <span
    className="inline-flex! items-center! rounded-full! px-3! py-1! text-xs! font-semibold! uppercase! tracking-wide!"
    style={{
      color: "var(--button-primary-bg)",
      backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 16%, white)",
    }}
  >
    {label}
  </span>
);

const HelpCenter = ({ onBack, handleClose }: HelpCenterProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const demoEmail = "name@email.com";
  const [emailAnimationIndex, setEmailAnimationIndex] = useState(0);

  const animatedEmail = demoEmail.slice(0, emailAnimationIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [handleClose]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (emailAnimationIndex < demoEmail.length) {
      timer = setTimeout(() => setEmailAnimationIndex((prev) => prev + 1), 120);
    } else {
      timer = setTimeout(() => setEmailAnimationIndex(0), 1200);
    }

    return () => clearTimeout(timer);
  }, [emailAnimationIndex]);

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  return (
    <div
      part="identity-widget-help-center-overlay"
      className="identity-widget-help-center-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4"
      ref={overlayRef}
      onMouseDown={onOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-center-dialog-title"
    >
      <div
        part="identity-widget-help-center-modal"
        className="identity-widget-help-center-modal bg-white! rounded-lg! p-8! w-full! max-w-2xl! relative! max-h-[90vh]! overflow-y-auto! border! border-solid! border-gray-200! shadow-lg!"
        role="document"
      >
        <style>
          {`@keyframes helpCenterClick { 0%,100% { transform: scale(1); } 45% { transform: scale(0.97); } 65% { transform: scale(1.01); } }
            @keyframes helpCenterInputFocus { 0%,100% { box-shadow: 0 0 0 0 rgba(120,120,120,0); } 50% { box-shadow: 0 0 0 3px rgba(120,120,120,0.12); } }`}
        </style>
        <Button
          onClick={handleClose}
          variant={ButtonVariant.LINK}
          part="identity-widget-help-center-close-button"
          className="identity-widget-help-center-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!"
          type={ButtonType.BUTTON}
          ariaLabel="Close dialog"
        >
          <svg
            part="identity-widget-help-center-close-icon"
            className="identity-widget-help-center-close-icon w-6! h-6!"
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

        <div className="mb-6! text-center! border-b! border-solid! border-gray-200! pb-5!">
          <h2
            id="help-center-dialog-title"
            part="identity-widget-help-center-title"
            className="identity-widget-help-center-title text-2xl! font-bold! text-gray-800! mb-2!"
          >
            Help Center
          </h2>
          <p
            part="identity-widget-help-center-subtitle"
            className="identity-widget-help-center-subtitle text-sm! text-gray-600!"
          >
            Having trouble logging in to your account? Follow these troubleshooting steps.
          </p>
        </div>

        <div className="space-y-6! text-left!">
          <section className="space-y-3! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-4!">
            <h3 className="text-base! font-bold! text-gray-800!">Common reasons sign in fails</h3>
            <p className="text-sm! text-gray-700!">
              Whether you're a member, guest, or viewer, there are a few things that might be
              happening when sign in fails:
            </p>
            <ul className="list-disc! pl-6! text-sm! text-gray-700! space-y-1!">
              <li>You have multiple accounts</li>
              <li>You're using the wrong email address or username</li>
              <li>You forgot your password</li>
              <li>Your account access may require additional verification</li>
            </ul>
            <p className="text-sm! text-gray-700!">
              Here are the recommended steps to troubleshoot.
            </p>
          </section>

          <section className="space-y-3! rounded-md! border! border-solid! border-gray-200! p-4!">
            <h3 className="text-lg! font-bold! text-gray-800!">
              Check your email address or username
            </h3>
            <p className="text-sm! text-gray-700!">
              Occasionally, we find that someone is attempting to sign in with an incorrect email
              address or username.
            </p>
            <p className="text-sm! text-gray-700!">
              <strong>Solution:</strong> Try logging in with other email addresses or usernames you
              might have used. If you have multiple email addresses redirected to one inbox, try
              each of them.
            </p>
          </section>

          <section className="space-y-3! rounded-md! border! border-solid! border-gray-200! p-4!">
            <h3 className="text-lg! font-bold! text-gray-800!">Reset your password</h3>
            <p className="text-sm! text-gray-700!">
              If you are sure you are using the correct email address or username, you might have
              forgotten your password. No problem.
            </p>
            <p className="text-sm! text-gray-700!">
              <strong>Solution:</strong> Click the{" "}
              <HelpCenterHighlight>"Forgot Password?"</HelpCenterHighlight> link on the login page
              to start the password reset process.
            </p>

            <div className="relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!">
              <div className="mb-3!">
                <HelpCenterStepTag label="Step 1" />
              </div>
              <p className="text-xl! font-bold! text-center! text-gray-800! mb-4!">
                Continue to login
              </p>
              <div className="space-y-3!">
                <Input label="Email or Username" value="name@email.com" disabled />
                <Input label="Password" value="••••••••" disabled />
                <div className="flex! items-center! justify-between! text-sm!">
                  <label className="flex! items-center! text-gray-500!">
                    <input type="checkbox" disabled className="mr-2!" />
                    Remember me
                  </label>
                  <span
                    className="relative! inline-flex! items-center!"
                    style={{ animation: "helpCenterClick 1.3s ease-in-out infinite" }}
                  >
                    <span className="text-sm! font-medium! cursor-default!">Forgot Password?</span>
                  </span>
                </div>
                <Button type={ButtonType.BUTTON} disabled className="w-full!">
                  Sign In
                </Button>
              </div>
            </div>

            <p className="text-sm! text-gray-700!">
              Next, enter your account email address. It should look something like this:
            </p>

            <div className="relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!">
              <div className="mb-3!">
                <HelpCenterStepTag label="Step 2" />
              </div>
              <p className="text-xl! font-bold! text-center! text-gray-800! mb-2!">
                Reset your password
              </p>
              <p className="text-sm! text-gray-600! text-center! mb-4!">
                Enter your email and we'll send you a link to reset your password.
              </p>
              <div
                className="rounded-md!"
                style={{ animation: "helpCenterInputFocus 1.4s ease-in-out infinite" }}
              >
                <Input
                  label="Email Address"
                  value={animatedEmail}
                  disabled
                  endIcon={<span className="text-gray-500! animate-pulse!">|</span>}
                />
              </div>
            </div>

            <p className="text-sm! text-gray-700!">
              Then click on <HelpCenterHighlight>"Send reset link"</HelpCenterHighlight>.
            </p>

            <div className="relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!">
              <div className="mb-3!">
                <HelpCenterStepTag label="Step 3" />
              </div>
              <p className="text-xl! font-bold! text-center! text-gray-800! mb-2!">
                Reset your password
              </p>
              <p className="text-sm! text-gray-600! text-center! mb-4!">
                Enter your email and we'll send you a link to reset your password.
              </p>
              <Input label="Email Address" value={animatedEmail} disabled />
              <span
                className="block!"
                style={{ animation: "helpCenterClick 1.2s ease-in-out infinite" }}
              >
                <Button type={ButtonType.BUTTON} disabled className="w-full! mt-4!">
                  Send reset link
                </Button>
              </span>
            </div>

            <p className="text-sm! text-gray-700!">
              Next, you will receive an email with instructions to reset your password.
            </p>
          </section>
        </div>

        <div
          part="identity-widget-help-center-tip"
          className="identity-widget-help-center-tip mt-6! mb-6! rounded-lg! border! border-solid! border-green-300! bg-green-50! px-5! py-4!"
          role="note"
          aria-label="Password reset tip"
        >
          <p className="m-0! text-sm! leading-[1.5]! text-gray-800! font-medium!">
            <strong>Tip:</strong> Double-check that the email address written in the field above the
            "Reset Password" button is the correct address! You will have to check that
            account&apos;s inbox to continue this process.
          </p>
        </div>

        <Button
          type={ButtonType.BUTTON}
          variant={ButtonVariant.OUTLINE}
          onClick={onBack}
          part="identity-widget-help-center-back-button"
          className="identity-widget-help-center-back-button w-full! mt-8!"
        >
          Back to sign in
        </Button>
      </div>
    </div>
  );
};

export default HelpCenter;
