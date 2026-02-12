import { useEffect, Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import EmbeddedLoginForm from "./components/embedded-login-form";
import {
  checkTokenAndRedirect,
  isRefreshTokenValid,
  setAuthCookie,
  getDefaultRedirectUrl,
  createUserSessionFromToken,
  getCookie
} from "./functions";
import { authRefresh } from "./services";
import type { AppProps } from "./types";
import { STORAGE_KEYS, COOKIE_NAMES, LOG_PREFIX } from "./constants";

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
            window.location.href = targetUrl;
          } else {
            // If auto-redirect is disabled, trigger onRedirect callback only
            if (onRedirect && props.redirectUrl) {
              const targetUrl = props.redirectUrl || getDefaultRedirectUrl();
              // Try to get user session from stored data
              const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
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
        const getAccessToken = getCookie(COOKIE_NAMES.ACCESS_TOKEN);
        if (hasValidRefreshToken && getAccessToken) {
          const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
          if (refreshToken) {
            const response = await authRefresh(refreshToken);

            if (response && response.tokens && response.tokens.access_token) {
              const tokens = response.tokens;

              // Create user session from token (includes decoded metadata)
              const userSession = createUserSessionFromToken(tokens.access_token);
              if (!userSession) {
                return;
              }

              const expiresIn = (userSession.decoded.exp || 0) - Math.floor(Date.now() / 1000);

              // Store new access token in cookies (with encoding)
              setAuthCookie(COOKIE_NAMES.ACCESS_TOKEN, tokens.access_token, expiresIn, true);
              // Store X-Credential without encoding to preserve exact format
              if (userSession.decoded.x_credentials) {
                setAuthCookie(
                  COOKIE_NAMES.X_CREDENTIAL,
                  userSession.decoded.x_credentials,
                  expiresIn,
                  false
                );
              }

              // Store access token in localStorage (always)
              localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, tokens.access_token);
              localStorage.setItem(
                STORAGE_KEYS.ACCESS_TOKEN_EXPIRES,
                (Date.now() + expiresIn * 1000).toString()
              );

              // NOTE: X-Credential is stored in cookies only, not localStorage

              // Update refresh token in localStorage (always store it)
              if (tokens.refresh_token) {
                localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, tokens.refresh_token);
                // Only update timestamp if remember me was originally checked
                // This preserves the original user choice
                const hadRememberMe = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TIME);
                if (hadRememberMe) {
                  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TIME, Date.now().toString());
                }
              }
              console.log(`${LOG_PREFIX.AUTH} Auto-login successful`);
              setIsAuthenticated(true);

              // Trigger onRedirect callback with userSession from decoded token
              const targetUrl = props.redirectUrl || getDefaultRedirectUrl();
              if (onRedirect) {
                console.log(
                  `${LOG_PREFIX.AUTH} Triggering onRedirect callback with user session:`,
                  userSession
                );
                onRedirect(targetUrl, userSession);
              }

              // Redirect to target URL (credentials stored in cookies)
              // Only auto-redirect if autoRedirection prop is true
              if (props.autoRedirection) {
                window.location.href = targetUrl;
              }
            }
          }
        } else {
          // Clear expired refresh token
          localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
          localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN_TIME);
        }
      } catch (error) {
        console.error(`${LOG_PREFIX.AUTH} Auto-login failed:`, error);
        // Clear invalid tokens
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN_TIME);
      }
    };

    attemptAutoLogin();
  }, [props.redirectUrl]);

  useEffect(() => {
    authority && localStorage.setItem("authority", authority);
    subsidiary && localStorage.setItem("subsidiary", subsidiary);
  }, [authority, subsidiary]);

  const handleEmbeddedLoginSuccess = () => {
    if (props.handleClose) {
      props.handleClose();
    }

    // Mark user as authenticated
    setIsAuthenticated(true);

    const targetUrl = props.redirectUrl || getDefaultRedirectUrl();
    if (onRedirect) {
      const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
      if (accessToken) {
        const userSession = createUserSessionFromToken(accessToken);
        if (userSession) {
          onRedirect(targetUrl, userSession);
        }
      }
    }

    if (props.autoRedirection) {
      setTimeout(() => {
        // Redirect without URL parameters - credentials stored in cookies only
        window.location.href = targetUrl;
      }, 100);
    }
  };

  const handleEmbeddedLoginError = (error: string) => {
    console.log(`${LOG_PREFIX.AUTH} Embedded login error:`, error);
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
