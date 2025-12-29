import { FC } from "react";
import type { LoginSubmitProps } from "../types/index";

const LoginSubmit: FC<LoginSubmitProps> = (props) => {
  const {
    handleSubmit,
    email,
    password,
    showPassword,
    redirectUrl,
    setEmail,
    setPassword,
    setShowPassword,
    loginError,
    loginLoading,
    setLoginError,
    setLoginLoading,
  } = props;
  return (
    <form
      className="flex flex-col gap-2.5 items-stretch"
      onSubmit={(e) =>
        handleSubmit({
          e,
          email,
          password,
          redirectUrl,
          setLoginError,
          setLoginLoading,
        })
      }
    >
      <label className="text-sm text-[#444] mt-1.5 block text-left">Username or Email</label>
      <div className="relative w-full">
        <input
          className="block w-full box-border h-11 py-2.5 px-3 rounded-lg border border-[#d6e3f6] bg-white outline-none text-sm text-left focus:shadow-[0_0_0_3px_rgba(24,102,214,0.12)] focus:border-[#2b6fd6]"
          placeholder="Enter your email or username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <label className="text-sm text-[#444] mt-1.5 block text-left">Password</label>
      <div className="relative w-full">
        <input
          className="block w-full box-border h-11 py-2.5 pr-11 pl-3 rounded-lg border border-[#d6e3f6] bg-white outline-none text-sm text-left focus:shadow-[0_0_0_3px_rgba(24,102,214,0.12)] focus:border-[#2b6fd6]"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none p-1.5 flex items-center justify-center cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            {showPassword ? (
              <>
                <path
                  d="M12 5c4 0 7.5 4 9 7-1.5 3-5 7-9 7s-7.5-4-9-7c1.5-3 5-7 9-7z"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            ) : (
              <>
                <path
                  d="M2 2l20 20"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.94 17.94A10.94 10.94 0 0 1 12 19.5c-6 0-9.5-6.5-9.5-6.5a18.3 18.3 0 0 1 4.73-4.73"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {false && (
        <div className="flex justify-between items-center mt-1.5">
          <label className="text-sm text-[#444] inline-flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" className="w-4 h-4" /> Remember me
          </label>
          <a
            className="text-[#92278f] text-sm no-underline"
          >
            Forgot Password?
          </a>
        </div>
      )}

      {loginError ? <div className="mt-1.5 text-[#b00020] text-[13px]">{loginError}</div> : null}
      <div className="mt-4">
        <button
          className="w-full h-12 rounded-lg border-none bg-[#bdbdbd] enabled:bg-[#a24796] text-white font-semibold cursor-pointer disabled:opacity-90 disabled:cursor-not-allowed"
          type="submit"
        >
          {loginLoading ? "Signing In…" : "Sign In"}
        </button>
      </div>
    </form>
  );
};
export default LoginSubmit;
