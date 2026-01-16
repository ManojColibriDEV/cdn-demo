import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Button from "./common/ui/button";
import EmbeddedLoginForm from "./components/embedded-login-form";
import { checkTokenAndRedirect } from "./functions";
import { clearTokens } from "./utils/tokenStorage";


const App = (props: {
  authority?: string;
  subsidiary?: string;
  isShowToggle?: string;
  callbackUrl: string;
  redirectUrl?: string;
  onRedirect?: (url: string, userSession?: any) => void;
  loginTitle?: string;
  loginSubtitle?: string;
}) => {
  const { authority, subsidiary, callbackUrl, onRedirect } = props;

  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  // Check for valid token and auto-redirect on mount
  useEffect(() => {
    if (props.redirectUrl) {
      const hasValidToken = checkTokenAndRedirect(props.redirectUrl);
      setIsAuthenticated(hasValidToken);
    }
  }, [props.redirectUrl]);

  useEffect(() => {
    authority && localStorage.setItem("authority", authority);
    subsidiary && localStorage.setItem("subsidiary", subsidiary);

    if (callbackUrl) {
      localStorage.setItem("callbackUrl", callbackUrl);
    } else if (!localStorage.getItem("callbackUrl")) {
      localStorage.setItem("callbackUrl", window.location.href.split('?')[0]);
    }
  }, [authority, subsidiary, callbackUrl]);

  const handleLoginClick = () => {
    setOpen(true);
  };

  const handleEmbeddedLoginSuccess = (userSession: any) => {
    setOpen(false);
    setIsAuthenticated(true);

    const targetUrl = props.redirectUrl || callbackUrl;
    if (onRedirect) {
      onRedirect(targetUrl, userSession);
    }

    if (props.redirectUrl) {
      setTimeout(() => {
        window.location.href = props.redirectUrl!;
      }, 100);
    }
  };

  const handleEmbeddedLoginError = (error: string) => {
    console.log("[App] Embedded login error:", error);
  };

  const handleLogout = () => {
    clearTokens();
    setIsAuthenticated(false);
    window.location.href = callbackUrl || window.location.origin;
  };

  return (
    <Routes>
      <Route path="*" element={
        <div className="max-w-7xl! mx-auto! p-8! text-center!">

          {/* Show logout button if authenticated */}
          {isAuthenticated && false && (
            <div className="mb-4!">
              <p className="mb-2! text-gray-700">You are logged in!</p>
              <Button
                label="Logout"
                onClick={handleLogout}
                disabled={false}
              />
            </div>
          )}

          {/* Show login button if not authenticated */}
          {!isAuthenticated && (
            <>
              {open ? (
                <EmbeddedLoginForm
                  onSuccess={handleEmbeddedLoginSuccess}
                  onError={handleEmbeddedLoginError}
                  onClose={() => setOpen(false)}
                  authority={authority}
                  title={props.loginTitle}
                  subtitle={props.loginSubtitle}
                />
              ) : (
                <Button
                  label="Login with Colibri Identity"
                  onClick={handleLoginClick}
                  disabled={false}
                />
              )}
            </>
          )}
        </div>
      } />
    </Routes>
  );
};

export default App;
