import { useEffect, Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import EmbeddedLoginForm from "./components/embedded-login-form";
import {
  checkTokenAndRedirectWithRefresh,
  isRefreshTokenValid,
  isRefreshTokenExpiredFromCookie,
  refreshAuthenticationState,
  createUserSessionFromToken,
  silentTokenRefresh,
} from "./functions";
import {
  setAuthorityOverride,
  clearAuthorityOverride,
  fetchEnrollments,
  fetchCheckout,
} from "./services";
import type { AppProps, LoginSuccessPayload, EnrollmentResponse, CheckoutResponse } from "./types";
import { STORAGE_KEYS, COOKIE_NAMES, LOG_PREFIX } from "./constants";
import { getCookie } from "./utils/cookieHelper";

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

  // Determine redirect URL by calling enrollment and cart APIs.
  // Returns url, raw enrollments, and raw cart data.
  // Skips API calls only when no redirect URLs AND no onSuccess callback are configured.
  const determineRedirectUrl = async (
    directAccessToken?: string
  ): Promise<{
    url: string | null;
    enrollments: EnrollmentResponse | null;
    cart: CheckoutResponse | null;
  }> => {
    if (!props.redirectDashboardUrl && !props.redirectCheckoutUrl && !props.onSuccess) {
      console.log(
        `${LOG_PREFIX.AUTH} No redirectDashboardUrl, redirectCheckoutUrl, or onSuccess provided, skipping API calls`
      );
      return { url: null, enrollments: null, cart: null };
    }

    try {
      let accessToken = directAccessToken;

      if (!accessToken) {
        accessToken = getCookie(COOKIE_NAMES.ACCESS_TOKEN, false) || undefined;
      }

      if (!accessToken) {
        console.error(`${LOG_PREFIX.AUTH} No access token found for redirect determination`);
        return { url: null, enrollments: null, cart: null };
      }

      // Call both APIs in parallel and wait for both to complete
      const [enrollmentsResult, checkoutResult] = await Promise.allSettled([
        fetchEnrollments(accessToken),
        fetchCheckout(accessToken),
      ]);

      const enrollmentsData: EnrollmentResponse | null =
        enrollmentsResult.status === "fulfilled" ? enrollmentsResult.value : null;
      const cartData: CheckoutResponse | null =
        checkoutResult.status === "fulfilled" ? checkoutResult.value : null;

      const enrollmentCount =
        enrollmentsResult.status === "fulfilled"
          ? (enrollmentsResult.value?.results ?? enrollmentsResult.value?.items?.length ?? 0)
          : 0;

      const hasItems =
        checkoutResult.status === "fulfilled" ? checkoutResult.value?.hasItems === true : false;

      if (enrollmentsResult.status === "rejected") {
        console.warn(`${LOG_PREFIX.AUTH} Enrollments fetch failed:`, enrollmentsResult.reason);
      }
      if (checkoutResult.status === "rejected") {
        console.warn(`${LOG_PREFIX.AUTH} Cart fetch failed:`, checkoutResult.reason);
      }

      console.log(`${LOG_PREFIX.AUTH} enrollmentCount: ${enrollmentCount}, hasItems: ${hasItems}`);

      // Redirect rules:
      // enrollment > 0  AND hasItems === true  → redirectCheckoutUrl
      // enrollment === 0 AND hasItems === true  → redirectCheckoutUrl
      // enrollment > 0  AND hasItems === false → redirectDashboardUrl
      // enrollment === 0 AND hasItems === false → redirectDashboardUrl
      if (hasItems) {
        if (props.redirectCheckoutUrl) {
          console.log(`${LOG_PREFIX.AUTH} Redirecting to checkout: ${props.redirectCheckoutUrl}`);
          return { url: props.redirectCheckoutUrl, enrollments: enrollmentsData, cart: cartData };
        }
      } else {
        if (props.redirectDashboardUrl) {
          console.log(`${LOG_PREFIX.AUTH} Redirecting to dashboard: ${props.redirectDashboardUrl}`);
          return { url: props.redirectDashboardUrl, enrollments: enrollmentsData, cart: cartData };
        }
      }

      return { url: null, enrollments: enrollmentsData, cart: cartData };
    } catch (error) {
      console.error(`${LOG_PREFIX.AUTH} Error determining redirect URL:`, error);
      return { url: null, enrollments: null, cart: null };
    }
  };

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

          const { url: targetUrl } = await determineRedirectUrl();
          if (targetUrl) {
            const accessToken = getCookie(COOKIE_NAMES.ACCESS_TOKEN, false);
            const userSession = accessToken ? createUserSessionFromToken(accessToken) : null;
            if (onRedirect && userSession) {
              onRedirect(targetUrl, userSession);
            }
            window.location.href = targetUrl;
          }
          return;
        }

        // If no valid access token, try to use refresh token (only if Remember Me was checked)
        const hasValidRefreshToken = isRefreshTokenValid();
        if (hasValidRefreshToken) {
          const refreshed = await refreshAuthenticationState();
          if (refreshed) {
            const accessToken = getCookie(COOKIE_NAMES.ACCESS_TOKEN, false);
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

            const { url: targetUrl } = await determineRedirectUrl();
            if (targetUrl) {
              if (onRedirect) {
                onRedirect(targetUrl, userSession);
              }
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
  }, [
    props.redirectUrl,
    props.redirectDashboardUrl,
    props.redirectCheckoutUrl,
    onTokenValidityCheck,
  ]);

  useEffect(() => {
    authority && localStorage.setItem("iam_authority", authority);
    subsidiary && localStorage.setItem("subsidiary", subsidiary);
  }, [authority, subsidiary]);

  const handleEmbeddedLoginSuccess = (tokens?: any) => {
    if (props.handleClose) {
      props.handleClose();
    }

    setIsAuthenticated(true);

    if (onTokenValidityCheck) {
      onTokenValidityCheck(true);
    }

    const accessTokenFromLogin = tokens?.access_token;
    const accessToken = accessTokenFromLogin || getCookie(COOKIE_NAMES.ACCESS_TOKEN, false);
    const userSession = accessToken ? createUserSessionFromToken(accessToken) : null;

    void determineRedirectUrl(accessTokenFromLogin)
      .then(({ url: targetUrl, enrollments, cart }) => {
        if (props.onSuccess) {
          const payload: LoginSuccessPayload = {
            userDetails: userSession?.userInfo ?? null,
            enrollments,
            cart,
          };
          props.onSuccess(payload);
        }

        if (!targetUrl) return;

        if (userSession && onRedirect) {
          onRedirect(targetUrl, userSession);
        }

        window.location.href = targetUrl;
      })
      .catch((error) => {
        console.error(`${LOG_PREFIX.AUTH} determineRedirectUrl FAILED:`, error);
        if (props.onFailure) {
          props.onFailure(error instanceof Error ? error.message : String(error));
        }
      });
  };

  const handleEmbeddedLoginError = (error: string) => {
    console.log(`${LOG_PREFIX.AUTH} Embedded login error:`, error);
    if (props.onFailure) {
      props.onFailure(error);
    }
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
