import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Button from "./common/ui/button";
import LoginModal from "./components/login-modal";
import { handleSignInCallback } from "./auth/oidcService";

export interface OAuthCallbackProps {
  environment?: string;
  onRedirect?: (url: string, userSession?: any) => void;
  callbackUrl: string;
}
const OAuthCallback = (props: OAuthCallbackProps) => {

  const { environment, onRedirect, callbackUrl } = props;
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const processCallback = async () => {
      try {
        const env = environment || localStorage.getItem('environment') || 'development';
        const userSession = await handleSignInCallback(env);
        if (onRedirect) {
          onRedirect(callbackUrl, userSession);
        } else {
          window.location.href = callbackUrl;
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Authentication failed');
      }
    };

    processCallback();
  }, [environment, onRedirect]);

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
  environment?: string;
  subsidiary?: string;
  isShowToggle: boolean;
  callbackUrl: string;
  onRedirect?: (url: string, userSession?: any) => void;
}) => {
  const { environment, subsidiary, isShowToggle = true, callbackUrl, onRedirect } = props;
  const [open, setOpen] = useState(false);

  // Check if current URL has OAuth callback parameters
  const urlParams = new URLSearchParams(window.location.search);
  const isOAuthCallback = urlParams.has('code') && urlParams.has('state');
  useEffect(() => {
    environment && localStorage.setItem("environment", environment);
    subsidiary && localStorage.setItem("subsidiary", subsidiary);
    // Always ensure callbackUrl is in localStorage, even after page reload
    if (callbackUrl) {
      localStorage.setItem("callbackUrl", callbackUrl);
    } else if (!localStorage.getItem("callbackUrl")) {
      // If no callbackUrl prop and nothing in storage, use current page
      localStorage.setItem("callbackUrl", callbackUrl);
    }
  }, [environment, subsidiary, callbackUrl]);

  // If OAuth callback parameters are present, handle callback regardless of path
  if (isOAuthCallback) {
    return <OAuthCallback environment={environment} callbackUrl={callbackUrl} onRedirect={onRedirect} />;
  }

  return (
    <Routes>
      <Route path="/callback" element={
        <OAuthCallback environment={environment} onRedirect={onRedirect} callbackUrl={callbackUrl} />
      } />
      <Route path="*" element={
        <div className="max-w-7xl mx-auto p-8 text-center">
          <Button
            label="Login with Colibri Identity"
            onClick={() => {
              setOpen(true);
            }}
          />

          {open && <LoginModal open={open} isShowToggle={isShowToggle} onClose={() => setOpen(false)} environment={environment} />}
        </div>
      } />
    </Routes>
  );
};

export default App;
