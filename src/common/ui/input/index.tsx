import React, { forwardRef } from 'react';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  error?: string | boolean | null;
  helperText?: string;
  optional?: boolean;
  className?: string;
  // when rendering select
  options?: Array<{ value: string; label: string }>;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
  const { label, startIcon, endIcon, error, helperText, optional, className, options, ...rest } = props as InputFieldProps;
  const hasError = !!error || !!helperText;
  const isSelect = rest.type === 'select' || !!options;
  return (
    <div className={`flex! flex-col! ${className || ''}`}>
      {label && (
        <label className="block! mb-1.5! font-semibold! text-left!">
          {label} {optional && <span className="text-gray-500 italic text-[13px]">(Optional)</span>}
        </label>
      )}
      <div className="flex! items-center! relative!">
        {startIcon && <span className="flex! items-center! justify-center! px-2! mr-1.5!" aria-hidden>{startIcon}</span>}
        {isSelect ? (
          <select 
            ref={ref as any} 
            className={`flex-1! py-2.5! pr-11! pl-3! border! ${hasError ? 'border-[#d64545]' : 'border-[#cbd5d5]'} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`}
            {...(rest as any)}
          >
            {options && options.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        ) : (
          <input 
            ref={ref} 
            className={`flex-1! py-2.5! pr-11! pl-3! border! ${hasError ? 'border-[#d64545]' : 'border-[#cbd5d5]'} rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`}
            {...(rest as any)} 
          />
        )}
        {endIcon && (
          <span className="flex! items-center! justify-center! absolute! right-2.5! top-1/2! -translate-y-1/2! pointer-events-auto! z-2!" aria-hidden>
            {endIcon}
          </span>
        )}
      </div>
      {error && typeof error === 'string' && <div className="text-[#d64545] text-[13px]! mt-1.5! text-left!">{error}</div>}
      {!error && helperText && <div className="text-[#d64545] text-[13px]! mt-1.5! text-left!">{helperText}</div>}
    </div>
  );
});

export default InputField;
