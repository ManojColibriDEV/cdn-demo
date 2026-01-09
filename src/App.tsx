import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Button from "./common/ui/button";
import LoginModal from "./components/login-modal";
import EmbeddedLoginForm from "./components/embedded-login-form";
import { handleSignInCallback, signIn, signInRedirect } from "./auth/oidcService";
import { resolveAuthority } from "./utils/authorityResolver";

export interface OAuthCallbackProps {
  authority?: string;
  onRedirect?: (url: string, userSession?: any) => void;
  callbackUrl: string;
  redirectUrl?: string;
}
const OAuthCallback = (props: OAuthCallbackProps) => {

  const { authority, onRedirect, callbackUrl, redirectUrl } = props;
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const processCallback = async () => {
      try {
        const storedAuthority = authority || localStorage.getItem('authority');
        const auth = resolveAuthority(storedAuthority);
        const userSession = await handleSignInCallback(auth);

        // Check if we're in a popup window
        if (window.opener && !window.opener.closed) {
          // We're in a popup - send message to parent and close
          console.log('[OAuthCallback] In popup - sending message to parent');
          window.opener.postMessage({
            type: 'keycloak-login-success',
            userSession: userSession,
            redirectUrl: redirectUrl || callbackUrl
          }, window.location.origin);

          // Close the popup
          window.close();
          return;
        }

        // Not in popup - handle normally
        const targetUrl = redirectUrl || callbackUrl;

        if (onRedirect) {
          onRedirect(targetUrl, userSession);
        } else {
          window.location.href = targetUrl;
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Authentication failed');

        // If in popup, send error to parent
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage({
            type: 'keycloak-login-error',
            error: err instanceof Error ? err.message : 'Authentication failed'
          }, window.location.origin);
          window.close();
        }
      }
    };

    processCallback();
  }, [authority, onRedirect, redirectUrl, callbackUrl]);

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="text-center max-w-md p-8">
          <div className="text-red-600 text-xl font-semibold mb-4">Authentication Failed</div>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="mb-4">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-700">Completing sign in...</h2>
        <p className="mt-2 text-sm text-gray-500">Please wait while we process your authentication.</p>
      </div>
    </div>
  );
};

const App = (props: {
  authority?: string;
  subsidiary?: string;
  isShowToggle: string;
  callbackUrl: string;
  redirectUrl: string;
  authMode?: 'popup' | 'redirect' | 'embedded';
  onRedirect?: (url: string, userSession?: any) => void;

}) => {
  const { authority, subsidiary, isShowToggle, callbackUrl, onRedirect, authMode = 'popup' } = props;
  const [open, setOpen] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Check if current URL has OAuth callback parameters
  const urlParams = new URLSearchParams(window.location.search);
  const isOAuthCallback = urlParams.has('code') && urlParams.has('state');

  useEffect(() => {
    authority && localStorage.setItem("authority", authority);
    subsidiary && localStorage.setItem("subsidiary", subsidiary);
    // Always ensure callbackUrl is in localStorage, even after page reload
    if (callbackUrl) {
      localStorage.setItem("callbackUrl", callbackUrl);
    } else if (!localStorage.getItem("callbackUrl")) {
      // If no callbackUrl prop and nothing in storage, use current page
      localStorage.setItem("callbackUrl", window.location.href.split('?')[0]);
    }

    // Listen for messages from popup window
    const handleMessage = (event: MessageEvent) => {
      // Verify origin
      if (event.origin !== window.location.origin) return;

      if (event.data.type === 'keycloak-login-success') {
        const { userSession, redirectUrl: targetUrl } = event.data;
        console.log('[App] Login success from popup:', userSession);
        setLoginLoading(false);

        if (onRedirect) {
          onRedirect(targetUrl, userSession);
          window.location.href = targetUrl;
        } else if (targetUrl) {
          window.location.href = targetUrl;
        }
      } else if (event.data.type === 'keycloak-login-error') {
        setLoginError(event.data.error);
        setLoginLoading(false);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [authority, subsidiary, callbackUrl, onRedirect]);

  const handleLoginClick = async () => {
    if (authMode === 'embedded') {
      // Open embedded login form modal
      setOpen(true);
      return;
    }

    if (authMode === 'redirect') {
      // Redirect mode - same tab
      await handleRedirectLogin();
      return;
    }

    // Popup mode - OAuth flow in popup window
    await handlePopupLogin();
  };

  const handlePopupLogin = async () => {
    setLoginError(null);
    setLoginLoading(true);

    try {
      const storedAuthority = authority || localStorage.getItem("authority");
      const auth = resolveAuthority(storedAuthority);

      // Trigger SSO login popup
      const userSession = await signIn(auth);
      setLoginLoading(false);

      console.log('[App] Popup login successful:', userSession);

      // Handle redirect in main window
      const targetUrl = props.redirectUrl || callbackUrl;
      if (onRedirect) {
        onRedirect(targetUrl, userSession);
      } else if (props.redirectUrl) {
        window.location.href = props.redirectUrl;
      }
    } catch (err) {
      const e = err as { message?: string };
      setLoginError(e?.message || "Sign in failed");
      setLoginLoading(false);
    }
  };

  const handleRedirectLogin = async () => {
    setLoginError(null);
    setLoginLoading(true);

    try {
      const storedAuthority = authority || localStorage.getItem("authority");
      const auth = resolveAuthority(storedAuthority);

      // Trigger SSO login redirect (same tab)
      await signInRedirect(auth);
      // Note: This will redirect away, so the loading state won't be reset
    } catch (err) {
      const e = err as { message?: string };
      setLoginError(e?.message || "Sign in failed");
      setLoginLoading(false);
    }
  };

  const handleOIDCPopupLogin = async () => {
    // For embedded mode - this triggers redirect to Keycloak
    await handleRedirectLogin();
  };

  const handleEmbeddedLoginSuccess = (userSession: any) => {
    console.log('[App] Embedded login successful:', userSession);
    setOpen(false);

    const targetUrl = props.redirectUrl || callbackUrl;
    if (onRedirect) {
      onRedirect(targetUrl, userSession);
    } else if (props.redirectUrl) {
      window.location.href = props.redirectUrl;
    }
  };

  const handleEmbeddedLoginError = (error: string) => {
    setLoginError(error);
  };

  // If OAuth callback parameters are present, handle callback regardless of path
  if (isOAuthCallback) {
    return <OAuthCallback authority={authority} callbackUrl={callbackUrl} redirectUrl={props.redirectUrl} onRedirect={onRedirect} />;
  }

  return (
    <Routes>
      <Route path="/callback" element={
        <OAuthCallback authority={authority} onRedirect={onRedirect} callbackUrl={callbackUrl} redirectUrl={props.redirectUrl} />
      } />
      <Route path="*" element={
        <div className="max-w-7xl mx-auto p-8 text-center">
          {loginError && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {loginError}
            </div>
          )}

          {authMode === 'embedded' && open ? (
            <EmbeddedLoginForm
              onSuccess={handleEmbeddedLoginSuccess}
              onError={handleEmbeddedLoginError}
              onClose={() => setOpen(false)}
              authority={authority}
            />
          ) : !open ? (
            <Button
              label={loginLoading ? "Opening Login..." : "Login with Colibri Identity"}
              onClick={handleLoginClick}
              disabled={loginLoading}
            />
          ) : null}

          {open && authMode === 'popup' && <LoginModal
                open={open}
                isShowToggle={isShowToggle}
                onClose={() => setOpen(false)}
                authority={authority}
                redirectUrl={props.redirectUrl}
                onLoginSuccess={(userSession) => {
                  console.log('[App] Login successful:', userSession);
                  if (onRedirect && props.redirectUrl) {
                    onRedirect(props.redirectUrl, userSession);
                  }
                }}
              />}
        </div>
      } />
    </Routes>
  );
};

export default App;