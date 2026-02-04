import React, { forwardRef } from "react";

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

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const {
      label,
      startIcon,
      endIcon,
      error,
      helperText,
      optional,
      className,
      options,
      ...rest
    } = props as InputFieldProps;
    const hasError = !!error || !!helperText;
    const isSelect = rest.type === "select" || !!options;
    return (
      <div className={`flex! flex-col! ${className || ""}`}>
        {label && (
          <label className="block! text-sm! font-medium! text-gray-700 mb-1! text-left!">
            {label}{" "}
            {optional && (
              <span className="text-gray-500 italic text-[13px]">
                (Optional)
              </span>
            )}
          </label>
        )}
        <div className="flex! items-center! relative!">
          {startIcon && (
            <span
              className="flex! items-center! justify-center! absolute! left-2.5! pointer-events-auto! z-2!"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              aria-hidden
            >
              {startIcon}
            </span>
          )}
          {isSelect ? (
            <select
              ref={ref as any}
              className={`flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!`}
              style={{ 
                borderWidth: '1px', 
                borderStyle: 'solid', 
                borderColor: hasError ? '#d64545' : '#cbd5d5',
                ...rest.style 
              }}
              {...(rest as any)}
            >
              {options &&
                options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
            </select>
          ) : (
            <input
              ref={ref}
              className={`flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!`}
              style={{ 
                borderWidth: '1px', 
                borderStyle: 'solid', 
                borderColor: hasError ? '#d64545' : '#cbd5d5',
                ...rest.style 
              }}
              {...(rest as any)}
            />
          )}
          {endIcon && (
            <span
              className="flex! items-center! justify-center! absolute! right-2.5! pointer-events-auto! z-2!"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              aria-hidden
            >
              {endIcon}
            </span>
          )}
        </div>
        {error && typeof error === "string" && (
          <div className="text-[#d64545] text-[13px]! mt-1.5! text-left!">
            {error}
          </div>
        )}
        {!error && helperText && (
          <div className="text-[#d64545] text-[13px]! mt-1.5! text-left!">
            {helperText}
          </div>
        )}
      </div>
    );
  },
);

export default InputField;
