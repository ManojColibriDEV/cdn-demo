import { useEffect, useRef, useState, FC } from "react";
import LoginSubmit from "./login-submit";
import RegistrationForm from "./registration-form";
import {
  handleSubmit,
} from "../functions";
import type { LoginModalProps, ActiveTab } from "../types/index";

const LoginModal: FC<LoginModalProps> = ({ open, isShowToggle, onClose, authority, onLoginSuccess, redirectUrl }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("signin");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [requiresUpgrade] = useState(false);
  const [registrationData, setRegistrationData] = useState<any>(null);
  const [showIframe, setShowIframe] = useState(false);
  const [iframeUrl, setIframeUrl] = useState<string>('');

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleLoginSuccess = (userSession: any) => {
    // Close the modal
    onClose();
    setShowIframe(false);
    
    // Call parent callback if provided
    if (onLoginSuccess) {
      onLoginSuccess(userSession);
    }
    
    // Redirect if redirectUrl is provided
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };
  
  // Listen for messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Verify origin (adjust based on your Keycloak domain)
      if (!event.origin.includes('keycloak')) return;
      
      if (event.data.type === 'keycloak-auth-success') {
        handleLoginSuccess(event.data.userSession);
      } else if (event.data.type === 'keycloak-auth-error') {
        setLoginError(event.data.error);
        setShowIframe(false);
        setLoginLoading(false);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [redirectUrl, onLoginSuccess]);

  const handleRegistration = (data: any) => {
    setRegistrationData(data);
    // Here you would typically send the registration data to your backend
    // For now, we'll just log it
  };

  const handleReview = (data: any) => {
    console.log("Review data:", data);
  };

  const handleReset = () => {
    setRegistrationData(null);
  };

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      // trap focus to modal
      const first = modalRef.current?.querySelector<
        HTMLInputElement | HTMLButtonElement | HTMLAnchorElement
      >("input, button, a");
      first?.focus();
    }
  }, [open]);

  function onOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  if (!open) return null;

  return (
    <div className="fixed! inset-0! bg-[#6161612c] flex! items-center! justify-center! z-[2000]!" ref={overlayRef} onMouseDown={onOverlayClick}>
      <div
        className={
          activeTab === "signup" ? "w-[800px]! bg-white rounded-[14px]! py-5! px-7! shadow-[0_10px_30px_rgba(0,0,0,0.35)]! font-brandon! max-h-[calc(100vh-60px)]! overflow-y-auto!" : "w-[520px]! bg-white rounded-[14px]! py-5! px-7! shadow-[0_10px_30px_rgba(0,0,0,0.35)]! font-brandon! max-h-[calc(100vh-60px)]! overflow-y-auto!"
        }
        role="dialog"
        aria-modal="true"
        ref={modalRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {!requiresUpgrade && (
          <div>
            <h2 className="m-0! text-[28px]! text-center! font-bold!">Welcome Back</h2>
            <p className="my-0! mb-3.5! text-center! text-[#9aa0a6] text-sm!">
              {activeTab === "signup"
                ? "Sign up for a new account"
                : "Sign in to continue to your account"}
            </p>
          </div>
        )}

        {!requiresUpgrade && isShowToggle === "true" && (
          <div className="flex! gap-3! mb-4! w-full! bg-[#f3f3f3] p-1.5! rounded-[10px]! box-border!">
            <button
              className={"flex-1! py-3! px-4! rounded-lg! bg-transparent border-none! text-[#6b6b6b] font-semibold! cursor-pointer! text-center! " + (activeTab === "signin" ? "!bg-[#1866d6] !text-white shadow-none! outline-none!" : "")}
              onClick={() => setActiveTab("signin")}
            >
              Sign In
            </button>
            <button
              className={"flex-1! py-3! px-4! rounded-lg! bg-transparent border-none! text-[#6b6b6b] font-semibold! cursor-pointer! text-center! " + (activeTab === "signup" ? "!bg-[#1866d6] !text-white shadow-none! outline-none!" : "")}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>
        )}
        
        {activeTab === "signin" ? (
          showIframe ? (
            <div className="relative!">
              <div className="mb-4! flex! justify-between! items-center!">
                <h3 className="text-lg! font-semibold!">Sign In</h3>
                <button
                  onClick={() => {
                    setShowIframe(false);
                    setLoginLoading(false);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕ Close
                </button>
              </div>
              {loginError && (
                <div className="mb-4! p-3! bg-red-50 border! border-red-200 rounded! text-red-600 text-sm!">
                  {loginError}
                </div>
              )}
              <div className="relative! bg-white rounded-lg! overflow-hidden! border! border-gray-200">
                <iframe
                  src={iframeUrl}
                  className="w-full! h-[550px]! border-0!"
                  title="Keycloak Login"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                  allow="payment"
                />
              </div>
              <div className="mt-4! p-3! bg-yellow-50 border! border-yellow-200 rounded! text-yellow-800 text-xs!">
                <strong>Note:</strong> If the login form doesn't appear above, Keycloak may be blocking iframe embedding. 
                Please contact your administrator to configure the Content-Security-Policy header with frame-ancestors directive.
              </div>
            </div>
          ) : (
            <LoginSubmit
              handleSubmit={handleSubmit}
              loginError={loginError}
              loginLoading={loginLoading}
              setLoginError={setLoginError}
              setLoginLoading={setLoginLoading}
              authority={authority}
              onLoginSuccess={handleLoginSuccess}
              onShowIframe={(url) => {
                setIframeUrl(url);
                setShowIframe(true);
              }}
            />
          )
        ) : (
          <RegistrationForm
            onRegister={handleRegistration}
            onReview={handleReview}
            onReset={handleReset}
            initialValues={registrationData}
            loading={false}
            error={null}
          />
        )}
      </div>
    </div>
  );
};

export default LoginModal;
