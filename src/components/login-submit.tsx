import { FC } from "react";
import type { LoginSubmitProps } from "../types/index";

const LoginSubmit: FC<LoginSubmitProps> = (props) => {
  const {
    handleSubmit,
    redirectUrl,
    environment,
    onRedirect,
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
          email: '',
          password: '',
          redirectUrl,
          environment,
          onRedirect,
          setLoginError,
          setLoginLoading,
        })
      }
    >
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600">
          Click below to sign in securely through our authentication portal
        </p>
      </div>

      {loginError ? <div className="mt-1.5 text-[#b00020] text-[13px]">{loginError}</div> : null}
      
      <div className="mt-4">
        <button
          className="w-full h-12 rounded-lg border-none bg-[#bdbdbd] enabled:bg-[#a24796] text-white font-semibold cursor-pointer disabled:opacity-90 disabled:cursor-not-allowed"
          type="submit"
          disabled={loginLoading}
        >
          {loginLoading ? "Redirecting to Login..." : "Sign In with Colibri Identity"}
        </button>
      </div>
    </form>
  );
};
export default LoginSubmit;
