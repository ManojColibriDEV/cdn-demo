import { FC, useEffect, useState } from "react";
import { MessageType, AriaRole, AriaLive, TIMING, TOAST_CONFIG } from "../../../constants";

type ToastType = MessageType.SUCCESS | MessageType.WARNING | MessageType.ERROR | MessageType.INFO;

interface ToastProps {
  type: ToastType;
  message: string;
  duration?: number; // in milliseconds
  onClose?: () => void;
  className?: string;
}

const Toast: FC<ToastProps> = ({ type, message, duration = 5000, onClose, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), TIMING.ANIMATION_ENTRANCE_DELAY);

    // Auto-dismiss after duration
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
    }, TIMING.ANIMATION_EXIT_DURATION); // Match animation duration
  };

  const getTypeStyles = () => {
    switch (type) {
      case MessageType.SUCCESS:
        return {
          bg: "bg-green-600!",
          icon: "text-green-100!",
          text: "text-white!",
        };
      case MessageType.WARNING:
        return {
          bg: "bg-yellow-500!",
          icon: "text-yellow-100!",
          text: "text-white!",
        };
      case MessageType.ERROR:
        return {
          bg: "bg-red-600!",
          icon: "text-red-100!",
          text: "text-white!",
        };
      case MessageType.INFO:
      default:
        return {
          bg: "bg-blue-600!",
          icon: "text-blue-100!",
          text: "text-white!",
        };
    }
  };

  const getIcon = () => {
    switch (type) {
      case MessageType.SUCCESS:
        return (
          <svg className="w-6! h-6!" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case MessageType.WARNING:
        return (
          <svg className="w-6! h-6!" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        );
      case MessageType.ERROR:
        return (
          <svg className="w-6! h-6!" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        );
      case MessageType.INFO:
      default:
        return (
          <svg className="w-6! h-6!" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        );
    }
  };

  const styles = getTypeStyles();

  // Map toast types to ARIA roles
  const getAriaRole = () => {
    switch (type) {
      case MessageType.ERROR:
        return AriaRole.ALERT;
      case MessageType.WARNING:
      case MessageType.INFO:
      case MessageType.SUCCESS:
        return AriaRole.STATUS;
      default:
        return AriaRole.STATUS;
    }
  };

  return (
    <div
      role={getAriaRole()}
      aria-live={type === MessageType.ERROR ? AriaLive.ASSERTIVE : AriaLive.POLITE}
      aria-atomic="true"
      className={`fixed! top-4! right-4! z-[${TOAST_CONFIG.Z_INDEX}]! transition-all! duration-300! ${
        isVisible && !isExiting ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"
      } ${className}`}
      style={{ maxWidth: TOAST_CONFIG.MAX_WIDTH, width: TOAST_CONFIG.WIDTH }}
    >
      <div className={`flex! items-center! p-4! rounded-lg! shadow-lg! ${styles.bg}`}>
        <div className={`flex-shrink-0! ${styles.icon}`} aria-hidden="true">
          {getIcon()}
        </div>
        <div className={`ml-3! flex-1! ${styles.text}`}>
          <p className="text-sm! font-medium!">{message}</p>
        </div>
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close notification"
          className={`ml-4! flex-shrink-0! inline-flex! ${styles.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`}
        >
          <span className="sr-only">Close</span>
          <svg className="w-5! h-5!" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
