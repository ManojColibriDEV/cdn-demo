import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import EmbeddedLoginForm from "./components/embedded-login-form";
import { checkTokenAndRedirect, isRefreshTokenValid, buildRedirectUrl, setAuthCookie, getDefaultRedirectUrl } from "./functions";
import { authRefresh } from "./services";
import type { AppProps } from "./types";
import { jwtDecode } from "jwt-decode";

const App = (props: AppProps) => {
  const { authority, subsidiary, onRedirect } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Auto-login using refresh token if available
  useEffect(() => {
    const attemptAutoLogin = async () => {
      try {
        // First check if access token is already valid
        const hasValidAccessToken = checkTokenAndRedirect();
        if (hasValidAccessToken) {
          setIsAuthenticated(true);
          if (props.redirectUrl && props.autoRedirection) {
            window.location.href = buildRedirectUrl(props.redirectUrl);
          }
          return;
        }

        // If no valid access token, try to use refresh token
        const hasValidRefreshToken = isRefreshTokenValid();
        if (hasValidRefreshToken) {
          const refreshToken = localStorage.getItem('refresh_token');
          if (refreshToken) {
            console.log('[App] Attempting auto-login with refresh token');
            const response = await authRefresh(refreshToken);

            if (response && response.tokens && response.tokens.access_token) {
              const tokens = response.tokens;

              // Decode token to get expiry time and user info
              const decoded: any = jwtDecode(tokens.access_token);
              const expiresIn = (decoded.exp || 0) - Math.floor(Date.now() / 1000);

              // Store new access token in cookies (with encoding)
              setAuthCookie('access_token', tokens.access_token, expiresIn, true);
              // Store X-Credential without encoding to preserve exact format
              if (decoded.x_credentials) {
                setAuthCookie('X-Credential', decoded.x_credentials, expiresIn, false);
              }

              // Update refresh token if new one provided
              if (tokens.refresh_token) {
                localStorage.setItem('refresh_token', tokens.refresh_token);
                localStorage.setItem('refresh_token_time', Date.now().toString());
              }

              localStorage.setItem('user_state', 'authenticated');
              setIsAuthenticated(true);
              console.log('[App] Auto-login successful');

              // Trigger onRedirect callback with userSession from decoded token
              const targetUrl = props.redirectUrl || getDefaultRedirectUrl();
              if (onRedirect) {
                const userSession = {
                  access_token: tokens.access_token,
                  userInfo: {
                    studentId: decoded.studentId,
                    sub: decoded.sub,
                    email_verified: decoded.email_verified,
                    x_credentials: decoded.x_credentials,
                    name: decoded.name,
                    preferred_username: decoded.preferred_username,
                    given_name: decoded.given_name,
                    family_name: decoded.family_name,
                    email: decoded.email
                  }
                };
                onRedirect(targetUrl, userSession);
              }

              // Redirect to target URL if provided (with xcred for cross-domain auth)
              // Only auto-redirect if autoRedirection prop is true
              if (props.redirectUrl && props.autoRedirection) {
                window.location.href = buildRedirectUrl(props.redirectUrl, decoded.x_credentials);
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
  }, [authority, subsidiary]);

  const handleEmbeddedLoginSuccess = (userSession: any) => {
    if (props.handleClose) {
      props.handleClose();
    }
    setIsAuthenticated(true);

    // Get x_credentials from userSession for cross-domain auth
    const xCredential = userSession?.userInfo?.x_credentials || userSession?.x_credentials;

    const targetUrl = props.redirectUrl || getDefaultRedirectUrl();
    if (onRedirect) {
      onRedirect(targetUrl, userSession);
    }

    // Only auto-redirect if autoRedirection prop is true
    if (props.redirectUrl && props.autoRedirection) {
      setTimeout(() => {
        // Append xcred to redirect URL for cross-domain authentication
        window.location.href = buildRedirectUrl(props.redirectUrl!, xCredential);
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
