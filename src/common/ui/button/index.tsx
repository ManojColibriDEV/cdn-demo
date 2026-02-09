import { FC, ReactNode } from "react";
import { ButtonVariant, ButtonType } from "../../../constants";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: ButtonType;
  variant?: ButtonVariant;
  className?: string;
  children?: ReactNode;
  ariaLabel?: string;
  mainButtonStyle?: {
    backgroundColor?: string;
    color?: string;
    border?: string;
  };
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  type = ButtonType.BUTTON,
  variant = ButtonVariant.PRIMARY,
  className,
  children,
  ariaLabel,
  mainButtonStyle,
}) => {
  // Base classes shared by all variants
  const baseClasses =
    "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!";

  // Variant-specific classes
  const variantClasses = {
    [ButtonVariant.PRIMARY]:
      "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [ButtonVariant.OUTLINE]:
      "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [ButtonVariant.LINK]:
      "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!",
  };

  // Combine classes: base + variant + custom className
  const finalClasses = className
    ? `${baseClasses} ${variantClasses[variant]} ${className}`
    : `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button
      className={finalClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel || (typeof label === "string" ? label : undefined)}
      aria-disabled={disabled}
      style={{ ...mainButtonStyle, borderStyle: "solid !important" }}
    >
      {children || label}
    </button>
  );
};

export default Button;
