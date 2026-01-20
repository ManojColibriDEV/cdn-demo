import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import EmbeddedLoginForm from "./components/embedded-login-form";
import { checkTokenAndRedirect } from "./functions";

const App = (props: {
  authority?: string;
  subsidiary?: string;
  isShowToggle?: string;
  callbackUrl: string;
  redirectUrl?: string;
  onRedirect?: (url: string, userSession?: any) => void;
  loginTitle?: string;
  loginSubtitle?: string;
  showLogin?: boolean;
  handleClose?: () => void;
}) => {
  const { authority, subsidiary, callbackUrl, onRedirect } = props;

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

  const handleEmbeddedLoginSuccess = (userSession: any) => {
    if (props.handleClose) {
      props.handleClose();
    }
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

  const handleClose = () => {
    if (props.handleClose) {
      props.handleClose();
    }
  };

  return (
    <Routes>
      <Route path="*" element={
        <>
          {/* Show login form when showLogin prop is true and not authenticated */}
          {!isAuthenticated && props.showLogin && (
            <EmbeddedLoginForm
              onSuccess={handleEmbeddedLoginSuccess}
              onError={handleEmbeddedLoginError}
              handleClose={handleClose}
              authority={authority}
              title={props.loginTitle}
              subtitle={props.loginSubtitle}
            />
          )}
        </>
      } />
    </Routes>
  );
};

export default App;
