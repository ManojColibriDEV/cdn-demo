import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import EmbeddedLoginForm from "./components/embedded-login-form";
import { getDefaultRedirectUrl } from "./utils/cookieHelper";

const App = (props: {
  authority?: string;
  subsidiary?: string;
  redirectUrl?: string;
  onRedirect?: (url: string, userSession?: any) => void;
  loginTitle?: string;
  loginSubtitle?: string;
  showLogin?: boolean;
  handleClose?: () => void;
}) => {
  const { authority, subsidiary, onRedirect } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    authority && localStorage.setItem("authority", authority);
    subsidiary && localStorage.setItem("subsidiary", subsidiary);
  }, [authority, subsidiary]);

  const handleEmbeddedLoginSuccess = (userSession: any) => {
    if (props.handleClose) {
      props.handleClose();
    }
    setIsAuthenticated(true);

    const targetUrl = props.redirectUrl || getDefaultRedirectUrl();
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
              onClose={handleClose}
              authority={authority}
            />
          )}
        </>
      } />
    </Routes>
  );
};

export default App;
