import { useEffect, Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import EmbeddedLoginForm from "./components/embedded-login-form";
import {
  checkTokenAndRedirectWithRefresh,
  isRefreshTokenValid,
  isRefreshTokenExpiredFromCookie,
  refreshAuthenticationState,
  getDefaultRedirectUrl,
  createUserSessionFromToken,
  silentTokenRefresh,
} from "./functions";
import { setAuthorityOverride, clearAuthorityOverride } from "./services";
import type { AppProps } from "./types";
import { STORAGE_KEYS, LOG_PREFIX } from "./constants";

const App = (props: AppProps) => {
  const { authority, subsidiary, onRedirect, onTokenValidityCheck } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [prevLogoutCounter, setPrevLogoutCounter] = useState(props.logoutCounter ?? 0);

  // React-recommended pattern for resetting state based on prop changes
  // https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  if ((props.logoutCounter ?? 0) !== prevLogoutCounter) {
    setPrevLogoutCounter(props.logoutCounter ?? 0);
    setIsAuthenticated(false);
  }

  // Set authority override when provided via props
  useEffect(() => {
    if (authority) {
      setAuthorityOverride(authority);
      console.log(`${LOG_PREFIX.AUTH} Authority override set to: ${authority}`);
    } else {
      clearAuthorityOverride();
      console.log(`${LOG_PREFIX.AUTH} Using automatic authority detection`);
    }

    // Cleanup: clear authority override when component unmounts
    return () => {
      clearAuthorityOverride();
    };
  }, [authority]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const startSilentRefresh = async () => {
      const stop = await silentTokenRefresh();
      if (typeof stop === "function") {
        cleanup = stop;
      }
    };

    void startSilentRefresh();

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, [isAuthenticated]);

  // Auto-login using refresh token if available
  useEffect(() => {
    const attemptAutoLogin = async () => {
      try {
        const isTokenValid = !isRefreshTokenExpiredFromCookie();
        if (onTokenValidityCheck) {
          onTokenValidityCheck(isTokenValid);
        }

        // First check if access token is already valid
        const hasValidAccessToken = await checkTokenAndRedirectWithRefresh();
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
        if (hasValidRefreshToken) {
          const refreshed = await refreshAuthenticationState();
          if (refreshed) {
            const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
            if (!accessToken) {
              return;
            }

            const userSession = createUserSessionFromToken(accessToken);
            if (!userSession) {
              return;
            }

            console.log(`${LOG_PREFIX.AUTH} Auto-login successful`);
            setIsAuthenticated(true);

            if (onTokenValidityCheck) {
              onTokenValidityCheck(true);
            }

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
  }, [props.redirectUrl, onTokenValidityCheck]);

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
                  enableGoogleLogin={Boolean(props.googleClientId)}
                  enableAppleLogin={Boolean(props.appleClientId)}
                  appleClientId={props.appleClientId}
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
