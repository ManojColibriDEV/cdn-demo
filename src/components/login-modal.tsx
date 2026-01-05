import { useEffect, useRef, useState, FC } from "react";
import LoginSubmit from "./login-submit";
import RegistrationForm from "./registration-form";
import {
  handleSubmit,
} from "../functions";
import type { LoginModalProps, ActiveTab } from "../types/index";

const LoginModal: FC<LoginModalProps> = ({ open, isShowToggle, onClose, authority }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("signin");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [requiresUpgrade] = useState(false);
  const [registrationData, setRegistrationData] = useState<any>(null);

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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
    <div className="fixed inset-0 bg-[#61616187] flex items-center justify-center z-[2000]" ref={overlayRef} onMouseDown={onOverlayClick}>
      <div
        className={
          activeTab === "signup" ? "w-[800px] bg-white rounded-[14px] py-5 px-7 shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-brandon max-h-[calc(100vh-60px)] overflow-y-auto" : "w-[520px] bg-white rounded-[14px] py-5 px-7 shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-brandon max-h-[calc(100vh-60px)] overflow-y-auto"
        }
        role="dialog"
        aria-modal="true"
        ref={modalRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {!requiresUpgrade && (
          <div>
            <h2 className="m-0 text-[28px] text-center font-bold">Welcome Back</h2>
            <p className="my-0 mb-3.5 text-center text-[#9aa0a6] text-sm">
              {activeTab === "signup"
                ? "Sign up for a new account"
                : "Sign in to continue to your account"}
            </p>
          </div>
        )}

        {!requiresUpgrade && isShowToggle === "true" && (
          <div className="flex gap-3 mb-4 w-full bg-[#f3f3f3] p-1.5 rounded-[10px] box-border">
            <button
              className={"flex-1 py-3 px-4 rounded-lg bg-transparent border-none text-[#6b6b6b] font-semibold cursor-pointer text-center " + (activeTab === "signin" ? "!bg-[#1866d6] !text-white shadow-none outline-none" : "")}
              onClick={() => setActiveTab("signin")}
            >
              Sign In
            </button>
            <button
              className={"flex-1 py-3 px-4 rounded-lg bg-transparent border-none text-[#6b6b6b] font-semibold cursor-pointer text-center " + (activeTab === "signup" ? "!bg-[#1866d6] !text-white shadow-none outline-none" : "")}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>
        )}
        
        {activeTab === "signin" ? (
          <LoginSubmit
            handleSubmit={handleSubmit}
            loginError={loginError}
            loginLoading={loginLoading}
            setLoginError={setLoginError}
            setLoginLoading={setLoginLoading}
            authority={authority}
          />
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
