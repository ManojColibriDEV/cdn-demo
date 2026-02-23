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

const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
  const {
    label,
    startIcon,
    endIcon,
    error,
    helperText,
    optional,
    className,
    options,
    id,
    ...rest
  } = props as InputFieldProps;
  const hasError = !!error || !!helperText;
  const isSelect = rest.type === "select" || !!options;

  // Generate unique ID if not provided
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  return (
    <div part="identity-widget-input-wrapper" className={`identity-widget-input-wrapper flex! flex-col! ${className || ""}`}>
      {label && (
        <label
          htmlFor={inputId}
          part="identity-widget-input-label"
          className="identity-widget-input-label block! text-sm! font-medium! text-gray-700 mb-1! text-left!"
        >
          {label} {optional && <span part="identity-widget-input-optional" className="identity-widget-input-optional text-gray-500 italic text-[13px]">(Optional)</span>}
        </label>
      )}
      <div part="identity-widget-input-container" className="identity-widget-input-container flex! items-center! relative!">
        {startIcon && (
          <span
            part="identity-widget-input-start-icon"
            className="identity-widget-input-start-icon flex! items-center! justify-center! absolute! left-2.5! pointer-events-auto! z-2!"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            aria-hidden
          >
            {startIcon}
          </span>
        )}
        {isSelect ? (
          <select
            ref={ref as any}
            id={inputId}
            part="identity-widget-input-select"
            aria-label={typeof label === "string" ? label : rest["aria-label"]}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : undefined}
            aria-required={rest.required}
            className={`identity-widget-input-select flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!`}
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: hasError ? "#d64545" : "#cbd5d5",
              ...rest.style,
            }}
            {...(rest as any)}
          >
            {options &&
              options.map((o) => (
                <option part="identity-widget-input-option" className="identity-widget-input-option" key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
          </select>
        ) : (
          <input
            ref={ref}
            id={inputId}
            part="identity-widget-input-field"
            aria-label={typeof label === "string" ? label : rest["aria-label"]}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : undefined}
            aria-required={rest.required}
            className={`identity-widget-input-field flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!`}
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: hasError ? "#d64545" : "#cbd5d5",
              ...rest.style,
            }}
            {...(rest as any)}
          />
        )}
        {endIcon && (
          <span
            part="identity-widget-input-end-icon"
            className="identity-widget-input-end-icon flex! items-center! justify-center! absolute! right-2.5! pointer-events-auto! z-2!"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            aria-hidden
          >
            {endIcon}
          </span>
        )}
      </div>
      {error && typeof error === "string" && (
        <div
          id={errorId}
          role="alert"
          aria-live="polite"
          part="identity-widget-input-error"
          className="identity-widget-input-error text-[#d64545] text-[13px]! mt-1.5! text-left!"
        >
          {error}
        </div>
      )}
      {!error && helperText && (
        <div
          id={helperId}
          role="status"
          aria-live="polite"
          part="identity-widget-input-helper"
          className="identity-widget-input-helper text-[#d64545] text-[13px]! mt-1.5! text-left!"
        >
          {helperText}
        </div>
      )}
    </div>
  );
});

export default InputField;
