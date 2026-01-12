import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Button from "./common/ui/button";
import LoginModal from "./components/login-modal";
import EmbeddedLoginForm from "./components/embedded-login-form";
import { handleSignInCallback } from "./auth/oidcService";
import { resolveAuthority } from "./utils/authorityResolver";
import { useKeycloak } from '@react-keycloak/web';
import { clearTokens } from "./utils/tokenStorage";

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
        // Check if we're in a popup window
        const isPopup = window.opener && !window.opener.closed;
        
        if (isPopup) {
          console.log('[OAuthCallback] Running in popup window - will wait for Keycloak to process');
          
          // DO NOTHING - let ReactKeycloakProvider process the OAuth callback
          // The parent App component will listen to keycloak.authenticated and send tokens
          // Just wait for the parent window listener to detect authentication
          console.log('[OAuthCallback] Waiting for parent window to handle authentication...');
          return;
        }

        // Not in popup - handle normally with old logic
        const storedAuthority = authority || localStorage.getItem('authority');
        const auth = resolveAuthority(storedAuthority);
        const userSession = await handleSignInCallback(auth);

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
            type: 'keycloak-auth-error',
            error: err instanceof Error ? err.message : 'Authentication failed'
          }, window.location.origin);
          setTimeout(() => {
            window.close();
          }, 1000);
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

  const { keycloak, initialized } = useKeycloak()

  console.log("keycloak initialized:", {keycloak, initialized, authenticated: keycloak.authenticated});

  const [open, setOpen] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [hasRedirected, setHasRedirected] = useState(false);

  // Don't handle callback manually when using Keycloak provider - it handles it automatically
  const isOAuthCallback = false; // Disabled - let ReactKeycloakProvider handle callbacks

  useEffect(() => {
    // If we're in a popup window and authenticated, send tokens to parent and close
    if (initialized && window.opener && !window.opener.closed && keycloak.authenticated && keycloak.token) {
      console.log('[App] Popup window authenticated - sending tokens to parent');
      
      window.opener.postMessage({
        type: 'keycloak-tokens',
        token: keycloak.token,
        refreshToken: keycloak.refreshToken,
        idToken: keycloak.idToken,
      }, window.location.origin);
      
      // Close popup after sending tokens
      setTimeout(() => {
        console.log('[App] Closing popup window');
        window.close();
      }, 100);
      
      return;
    }
    
    // Handle authentication and redirects - ONLY in main window, never in popups
    if (initialized && !window.opener) {
      console.log('[App] Keycloak initialized - Authenticated:', keycloak.authenticated);
      
      if (keycloak.authenticated && keycloak.token) {
        console.log('[App] User is authenticated with token');
        
        // Check if token is expired
        const tokenParsed = keycloak.tokenParsed;
        const currentTime = Math.floor(Date.now() / 1000);
        const isTokenExpired = tokenParsed?.exp ? tokenParsed.exp < currentTime : false;
        
        console.log('[App] Token expiry check:', {
          exp: tokenParsed?.exp,
          currentTime,
          isExpired: isTokenExpired,
          expiresIn: tokenParsed?.exp ? tokenParsed.exp - currentTime : 0
        });

        if (isTokenExpired) {
          // Token is expired - try to refresh
          console.log('[App] Token expired - attempting refresh');
          keycloak.updateToken(30)
            .then((refreshed) => {
              if (refreshed) {
                console.log('[App] Token refreshed successfully');
                localStorage.setItem('user_state', 'authenticated');
                
                // After refresh, redirect if needed
                if (props.redirectUrl && !hasRedirected) {
                  handleRedirectAfterAuth();
                }
              } else {
                console.log('[App] Token still valid after refresh check');
              }
            })
            .catch((error) => {
              console.error('[App] Token refresh failed:', error);
              clearTokens();
            });
        } else {
          // Token is valid
          localStorage.setItem('user_state', 'authenticated');
          
          // Clean up OAuth params from URL if present
          const currentUrl = new URL(window.location.href);
          if (currentUrl.searchParams.has('code') || currentUrl.searchParams.has('state')) {
            console.log('[App] Cleaning OAuth params from URL');
            currentUrl.searchParams.delete('code');
            currentUrl.searchParams.delete('state');
            currentUrl.searchParams.delete('session_state');
            window.history.replaceState({}, '', currentUrl.toString());
          }
          
          // Redirect to redirectUrl if provided and we haven't redirected yet
          if (props.redirectUrl && !hasRedirected) {
            handleRedirectAfterAuth();
          }
        }
      }
    } else if (window.opener) {
      console.log('[App] Running in popup window - skipping redirect logic');
    }
  }, [initialized, keycloak.authenticated, keycloak.token]);

  const handleRedirectAfterAuth = () => {
    console.log('[App] Redirecting to:', props.redirectUrl);
    setHasRedirected(true);
    
    if (onRedirect) {
      const userSession = {
        access_token: keycloak.token,
        refresh_token: keycloak.refreshToken,
        id_token: keycloak.idToken,
        userInfo: keycloak.tokenParsed,
      };
      onRedirect(props.redirectUrl!, userSession);
    }
    
    setTimeout(() => {
      window.location.href = props.redirectUrl!;
    }, 100);
  };

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
      const redirectUri = `${window.location.origin}/callback`;
      const keycloakLoginUrl = await keycloak.createLoginUrl({
        redirectUri: redirectUri,
      });

      // Open Keycloak login in popup window
      const width = 500;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      
      const popup = window.open(
        keycloakLoginUrl,
        'keycloak-login',
        `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,location=no`
      );

      if (!popup) {
        throw new Error('Popup blocked. Please allow popups for this site.');
      }

      console.log('[App] Keycloak login popup opened');

      // Listen for popup messages
      const messageHandler = async (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;

        if (event.data.type === 'keycloak-tokens') {
          console.log('[App] Received tokens from popup');
          window.removeEventListener('message', messageHandler);
          clearInterval(popupCheckInterval);
          
          // Close popup immediately if still open
          if (popup && !popup.closed) {
            popup.close();
          }
          
          try {
            // Manually set tokens on the Keycloak instance
            keycloak.token = event.data.token;
            keycloak.refreshToken = event.data.refreshToken;
            keycloak.idToken = event.data.idToken;
            
            // Parse the token to set tokenParsed
            if (event.data.token) {
              const base64Url = event.data.token.split('.')[1];
              const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
              const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
              }).join(''));
              keycloak.tokenParsed = JSON.parse(jsonPayload);
            }
            
            // Trigger the onTokens callback to save tokens
            console.log('[App] Manually triggering token save');
            const { saveTokens } = await import('./utils/tokenStorage');
            saveTokens(event.data.token, event.data.refreshToken, event.data.idToken);
            
            // Mark as authenticated
            keycloak.authenticated = true;
            
            setLoginLoading(false);
            console.log('[App] Tokens applied successfully, redirecting...');
            
            // Now redirect to the target URL
            if (props.redirectUrl) {
              setTimeout(() => {
                window.location.href = props.redirectUrl!;
              }, 100);
            }
          } catch (err) {
            console.error('[App] Failed to apply tokens:', err);
            setLoginError('Failed to complete authentication');
            setLoginLoading(false);
          }
          
        } else if (event.data.type === 'keycloak-auth-error') {
          console.error('[App] Popup auth error:', event.data.error);
          window.removeEventListener('message', messageHandler);
          setLoginError(event.data.error || 'Authentication failed');
          setLoginLoading(false);
        }
      };

      window.addEventListener('message', messageHandler);

      // Check if popup was closed without completing auth
      const popupCheckInterval = setInterval(() => {
        if (popup.closed) {
          clearInterval(popupCheckInterval);
          window.removeEventListener('message', messageHandler);
          if (loginLoading) {
            setLoginError('Login cancelled');
            setLoginLoading(false);
          }
        }
      }, 500);

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
      // Use the Keycloak instance from the provider
      const redirectUri = window.location.origin + window.location.pathname;
      console.log('[App] Redirecting to Keycloak with redirectUri:', redirectUri);
      await keycloak.login({
        redirectUri: redirectUri,
      });
      // Note: This will redirect away, so the loading state won't be reset
    } catch (err) {
      const e = err as { message?: string };
      setLoginError(e?.message || "Sign in failed");
      setLoginLoading(false);
    }
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