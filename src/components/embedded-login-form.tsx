import { useState, useRef, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Button from "../common/ui/button";
import Input from "../common/ui/input";
import { authLogin } from "../services";
import { validatePassword } from "../functions";
import type { PasswordChecks } from "../types";
import { setAuthCookie } from "../utils/cookieHelper";

interface EmbeddedLoginFormProps {
  onSuccess: (userSession: any) => void;
  onError: (error: string) => void;
  onClose: () => void;
  authority?: string;
  title?: string;
  subtitle?: string;
}

const EmbeddedLoginForm = ({
  onSuccess,
  onError,
  onClose,
  title = "Continue to login",
  subtitle = "Continue by signing in."
}: EmbeddedLoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordChecks, setPasswordChecks] = useState<PasswordChecks | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(true); // Checked by default
  const overlayRef = useRef<HTMLDivElement>(null);

  // Validate password whenever it changes
  useEffect(() => {
    if (password) {
      const checks = validatePassword(password, null);
      setPasswordChecks(checks);
    } else {
      setPasswordChecks(null);
    }
  }, [password]);

  // Check if all password requirements are met
  const isPasswordValid = passwordChecks
    ? passwordChecks.length &&
    passwordChecks.upper &&
    passwordChecks.lower &&
    passwordChecks.number &&
    passwordChecks.noSpaces &&
    passwordChecks.noTriple &&
    passwordChecks.special
    : false;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Please enter both username and password");
      onError("Please enter both username and password");
      return;
    }

    setLoading(true);
    setErrorMessage(""); // Clear previous errors

    try {

      // Use the service function
      const { tokens } = await authLogin(username, password);

      // Store tokens if provided
      if (tokens.access_token) {
        const decoded: any = jwtDecode(tokens.access_token);
        const expiresIn = (decoded.exp || 0) - Math.floor(Date.now() / 1000);

        // Set cookies
        setAuthCookie('access_token', tokens.access_token, expiresIn);

        if (decoded.x_credentials) {
          setAuthCookie('X-Credential', decoded.x_credentials, expiresIn);
        }

        // Store in localStorage
        localStorage.setItem('user_state', 'authenticated');
        localStorage.setItem('decoded', JSON.stringify(decoded) || '');

        if (tokens.refresh_token) {
          localStorage.setItem('refresh_token', tokens.refresh_token);
        }
      }

      // Call success callback with result
      onSuccess(tokens);
    } catch (error) {
      console.error('[EmbeddedLogin] Login failed:', error);
      const errorMsg = error instanceof Error ? error.message : 'Authentication failed';
      setErrorMessage(errorMsg);
      onError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-[2000]! p-4"
      ref={overlayRef}
      onMouseDown={onOverlayClick}
    >
      <div className="bg-white! rounded-lg! shadow-lg! p-8! w-full! max-w-lg! relative!">
        <button
          onClick={onClose}
          className="absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! "
          type="button"
        >
          <svg className="w-6! h-6!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-3! text-center!">
          <h2 className="text-2xl! font-bold! text-gray-800! mb-0!">{title}</h2>
          <p className="text-sm! text-gray-600! mt-1!">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2!">
          <div className="mt-0! ml-0! mb-4! mr-0!">
            <label htmlFor="username" className="block! text-sm! font-medium! text-gray-700 mb-1! text-left!">
              Email Address or Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter email or username"
              disabled={loading}
              className="w-full!"
              autoComplete="username"
            />
          </div>

          <div className="mt-0! ml-0! mb-0! mr-0!">
            <label htmlFor="password" className="block! text-sm! font-medium! text-gray-700 mb-1! text-left!">
              Password
            </label>
            <div className="relative! w-full!">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage(""); // Clear error when user types
                }}
                placeholder="Enter Password..."
                disabled={loading}
                className="w-full!"
                autoComplete="current-password"
                error={errorMessage}
                endIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <svg className="w-5! h-5!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5! h-5!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                }
              />
            </div>
          </div>

          <div className="flex! items-center! justify-between! text-sm! mt-4! ml-0! mb-4! mr-0!">
            <label className="flex! items-center!">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2! rounded! border-gray-300!"
              />
              <span className="text-gray-600!">Remember me</span>
            </label>
            {false && <a href="#" className="text-blue-600! hover:text-blue-700! no-underline!">
              Forgot Password?
            </a>}
          </div>

          <Button
            type="submit"
            disabled={loading || !username || !password || !isPasswordValid || !rememberMe}
            className="w-full! bg-[#17a2b8] enabled:bg-[#17a2b8] hover:bg-[#138496] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!"
          >
            {loading ? (
              <span className="flex! items-center! justify-center!">
                <svg className="animate-spin! -ml-1! mr-3! h-5! w-5! text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25!" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75!" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </Button>

          {/* Divider */}
          {false && <div className="relative!">
            <div className="absolute! inset-0! flex! items-center!">
              <div className="w-full! border-t! border-gray-300"></div>
            </div>
            <div className="relative! flex! justify-center! text-sm!">
              <span className="px-2! bg-white text-gray-500">OR</span>
            </div>
          </div>}

          {false && <button
            type="button"
            // onClick={handleSSOLogin}
            // disabled={!initialized}
            disabled={false}
            className="w-full! flex! items-center! justify-center! gap-3! bg-white border-2! border-[#17a2b8] text-[#17a2b8] py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!"
          >
            <span>Create an Account</span>
          </button>}
        </form>
      </div>
    </div>
  );
};

export default EmbeddedLoginForm;
