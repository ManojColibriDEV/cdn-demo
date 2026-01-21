import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import EmbeddedLoginForm from "./components/embedded-login-form";
import { checkTokenAndRedirect, isRefreshTokenValid } from "./functions";
import { authRefresh } from "./services";
import { setAuthCookie } from "./utils/cookieHelper";
import { jwtDecode } from "jwt-decode";

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

  // Auto-login using refresh token if available
  useEffect(() => {
    const attemptAutoLogin = async () => {
      try {
        // First check if access token is already valid
        const hasValidAccessToken = checkTokenAndRedirect();
        if (hasValidAccessToken) {
          setIsAuthenticated(true);
          if (props.redirectUrl) {
            window.location.href = props.redirectUrl;
          }
          return;
        }

        // If no valid access token, try to use refresh token
        const hasValidRefreshToken = isRefreshTokenValid();
        if (hasValidRefreshToken) {
          const refreshToken = localStorage.getItem('refresh_token');
          if (refreshToken) {
            console.log('[App] Attempting auto-login with refresh token');
            const tokens = await authRefresh(refreshToken);
            
            if (tokens && tokens.access_token) {
              // Decode token to get expiry time
              const decoded: any = jwtDecode(tokens.access_token);
              const expiresIn = (decoded.exp || 0) - Math.floor(Date.now() / 1000);
              
              // Store new access token in cookies
              setAuthCookie('access_token', tokens.access_token, expiresIn);
              if (tokens.credential) {
                setAuthCookie('X-Credential', tokens.credential, expiresIn);
              }
              
              // Update refresh token if new one provided
              if (tokens.refresh_token) {
                localStorage.setItem('refresh_token', tokens.refresh_token);
                localStorage.setItem('refresh_token_time', Date.now().toString());
              }
              
              localStorage.setItem('user_state', 'authenticated');
              setIsAuthenticated(true);
              console.log('[App] Auto-login successful');
              
              if (props.redirectUrl) {
                window.location.href = props.redirectUrl;
              }
            }
          }
        } else {
          // Clear expired refresh token
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('refresh_token_time');
        }
      } catch (error) {
        console.error('[App] Auto-login failed:', error);
        // Clear invalid tokens
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('refresh_token_time');
      }
    };

    attemptAutoLogin();
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
