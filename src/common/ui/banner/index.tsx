import { FC, ReactNode } from 'react';
import infoWarningCircle from '../../../icons/info-warning-circle.svg';
import { MessageType, AriaRole, AriaLive } from '../../../constants';

type BannerType = MessageType.SUCCESS | MessageType.WARNING | MessageType.ERROR | MessageType.INFO;

interface BannerProps {
  type: BannerType;
  message: string;
  actionText?: string;
  onActionClick?: () => void;
  onClose?: () => void;
  className?: string;
  children?: ReactNode;
}

const Banner: FC<BannerProps> = ({ 
  type, 
  message, 
  actionText, 
  onActionClick, 
  onClose,
  className = '',
  children 
}) => {
  const getTypeStyles = () => {
    switch (type) {
      case MessageType.SUCCESS:
        return {
          bg: 'bg-green-50!',
          border: 'border-green-200!',
          text: 'text-green-800!',
          iconBg: 'bg-green-100!',
          iconColor: 'text-green-600!',
          actionColor: 'text-green-700!',
          actionHover: 'hover:text-green-800!',
          closeButtonHover: 'hover:text-green-800!',
        };
      case MessageType.WARNING:
        return {
          bg: 'bg-yellow-50!',
          border: 'border-yellow-200!',
          text: 'text-yellow-800!',
          iconBg: 'bg-yellow-100!',
          iconColor: 'text-yellow-600!',
          actionColor: 'text-yellow-700!',
          actionHover: 'hover:text-yellow-800!',
          closeButtonHover: 'hover:text-yellow-800!',
        };
      case MessageType.ERROR:
        return {
          bg: 'bg-red-50!',
          border: 'border-red-200!',
          text: 'text-red-800!',
          iconBg: 'bg-red-100!',
          iconColor: 'text-red-600!',
          actionColor: 'text-red-700!',
          actionHover: 'hover:text-red-800!',
          closeButtonHover: 'hover:text-red-800!',
        };
      case MessageType.INFO:
      default:
        return {
          bg: 'bg-cyan-50!',
          border: 'border-l-4! border-l-cyan-500!',
          text: 'text-gray-700!',
          iconBg: 'bg-cyan-100!',
          iconColor: 'text-cyan-600!',
          actionColor: 'text-cyan-600!',
          actionHover: 'hover:text-cyan-700!',
          closeButtonHover: 'hover:text-cyan-700!',
        };
    }
  };

  const getIcon = () => {
    switch (type) {
      case MessageType.SUCCESS:
        return (
          <svg className="w-5! h-5!" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case MessageType.WARNING:
        return (
          <svg className="w-5! h-5!" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case MessageType.ERROR:
        return (
          <svg className="w-5! h-5!" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case MessageType.INFO:
      default:
        return (
          <img src={infoWarningCircle} alt="info" className="w-5! h-5!" />
        );
    }
  };

  const styles = getTypeStyles();

  // Map banner types to ARIA roles
  const getAriaRole = () => {
    switch (type) {
      case MessageType.ERROR:
        return AriaRole.ALERT;
      case MessageType.WARNING:
      case MessageType.INFO:
        return AriaRole.STATUS;
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
      className={`flex! items-center! py-3! px-4! rounded! ${styles.bg} ${styles.border} ${className}`}
    >
      <div className={`flex-shrink-0! ${styles.iconColor}!`} aria-hidden="true">
        {getIcon()}
      </div>
      <div className="ml-3! flex-1! flex! items-center! gap-2!">
        <span className={`text-sm! font-medium! ${styles.text}`}>
          {message}
        </span>
        {actionText && onActionClick && (
          <button
            type="button"
            onClick={onActionClick}
            aria-label={actionText}
            className={`text-sm! font-medium! ${styles.actionColor} ${styles.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! shadow-none!`}
          >
            {actionText}
          </button>
        )}
        {children}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss banner"
          className={`ml-2! flex-shrink-0! inline-flex! ${styles.iconColor} ${styles.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`}
        >
          <span className="sr-only">Dismiss</span>
          <svg className="w-5! h-5!" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Banner;
