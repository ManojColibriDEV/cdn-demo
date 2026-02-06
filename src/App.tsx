import { useEffect, Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import EmbeddedLoginForm from "./components/embedded-login-form";
import {
  checkTokenAndRedirect,
  isRefreshTokenValid,
  buildRedirectUrl,
  setAuthCookie,
  getDefaultRedirectUrl,
  createUserSessionFromToken,
} from "./functions";
import { authRefresh } from "./services";
import type { AppProps } from "./types";

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
          // Only auto-redirect if autoRedirection is enabled (uses default URL if redirectUrl not provided)
          const targetUrl = props.redirectUrl || getDefaultRedirectUrl();
          if (props.autoRedirection) {
            window.location.href = buildRedirectUrl(targetUrl);
          } else {
            // If auto-redirect is disabled, trigger onRedirect callback only
            if (onRedirect && props.redirectUrl) {
              const targetUrl = props.redirectUrl || getDefaultRedirectUrl();
              // Try to get user session from stored data
              const accessToken = localStorage.getItem("access_token");
              if (accessToken) {
                const userSession = createUserSessionFromToken(accessToken);
                if (userSession) {
                  onRedirect(targetUrl, userSession);
                }
              }
            }
          }
          return;
        }

        // If no valid access token, try to use refresh token (only if Remember Me was checked)
        const hasValidRefreshToken = isRefreshTokenValid();
        if (hasValidRefreshToken) {
          const refreshToken = localStorage.getItem("refresh_token");
          if (refreshToken) {
            const response = await authRefresh(refreshToken);

            if (response && response.tokens && response.tokens.access_token) {
              const tokens = response.tokens;

              // Create user session from token (includes decoded metadata)
              const userSession = createUserSessionFromToken(tokens.access_token);
              if (!userSession) {
                return;
              }

              const expiresIn =
                (userSession.decoded.exp || 0) - Math.floor(Date.now() / 1000);

              // Store new access token in cookies (with encoding)
              setAuthCookie(
                "access_token",
                tokens.access_token,
                expiresIn,
                true,
              );
              // Store X-Credential without encoding to preserve exact format
              if (userSession.decoded.x_credentials) {
                setAuthCookie(
                  "X-Credential",
                  userSession.decoded.x_credentials,
                  expiresIn,
                  false,
                );
              }

              // Store access token in localStorage (always)
              localStorage.setItem("access_token", tokens.access_token);
              localStorage.setItem("access_token_expires", (Date.now() + expiresIn * 1000).toString());
              
              // NOTE: X-Credential is stored in cookies only, not localStorage

              // Update refresh token in localStorage (always store it)
              if (tokens.refresh_token) {
                localStorage.setItem("refresh_token", tokens.refresh_token);
                // Only update timestamp if remember me was originally checked
                // This preserves the original user choice
                const hadRememberMe = localStorage.getItem("refresh_token_time");
                if (hadRememberMe) {
                  localStorage.setItem(
                    "refresh_token_time",
                    Date.now().toString(),
                  );
                }
              }
              console.log("[App] Auto-login successful");
              setIsAuthenticated(true);

              // Trigger onRedirect callback with userSession from decoded token
              const targetUrl = props.redirectUrl || getDefaultRedirectUrl();
              if (onRedirect) {
                console.log(
                  "[App] Triggering onRedirect callback with user session:",
                  userSession,
                );
                onRedirect(targetUrl, userSession);
              }

              // Redirect to target URL (with xcred for cross-domain auth)
              // Only auto-redirect if autoRedirection prop is true
              if (props.autoRedirection) {
                window.location.href = buildRedirectUrl(
                  targetUrl,
                  userSession.decoded.x_credentials,
                );
              }
            }
          }
        } else {
          // Clear expired refresh token
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("refresh_token_time");
        }
      } catch (error) {
        console.error("[App] Auto-login failed:", error);
        // Clear invalid tokens
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("refresh_token_time");
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

    // Mark user as authenticated
    setIsAuthenticated(true);

    // Get x_credentials from userSession for cross-domain auth
    const xCredential =
      userSession?.userInfo?.x_credentials || userSession?.x_credentials;
    const targetUrl = props.redirectUrl || getDefaultRedirectUrl();
    if (onRedirect) {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        const userSession = createUserSessionFromToken(accessToken);
        if (userSession) {
          onRedirect(targetUrl, userSession);
        }
      }
    }

    if (props.autoRedirection) {
      setTimeout(() => {
        // Append xcred to redirect URL for cross-domain authentication
        window.location.href = buildRedirectUrl(targetUrl, xCredential);
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
    <div role="application" aria-label="Authentication Widget">
      <Routes>
        <Route
          path="*"
          element={
            <Fragment>
              {/* Show login form only when user is NOT authenticated and showLogin prop is true */}
              {/* If user is authenticated (has valid access token or remember me), hide the form */}
              {props.showLogin && !isAuthenticated && (
                <EmbeddedLoginForm
                  onSuccess={handleEmbeddedLoginSuccess}
                  onError={handleEmbeddedLoginError}
                  handleClose={handleClose}
                  authority={authority}
                  title={props.loginTitle}
                  subtitle={props.loginSubtitle}
                />
              )}
            </Fragment>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
