import { FC, ReactNode } from 'react';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: ReactNode;
  mainButtonStyle?: {
    backgroundColor?: string;
    color?: string;
    border?: string;
  }
}

const Button: FC<ButtonProps> = ({ label, onClick, disabled, type = 'button', className, children, mainButtonStyle }) => {
  const baseClasses = "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!";
  
  return (
    <button 
      className={className || baseClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={mainButtonStyle}
    >
      {children || label}
    </button>
  );
};

export default Button;
