import { FC } from "react";
import type { LoginSubmitProps } from "../types/index";

const LoginSubmit: FC<LoginSubmitProps> = (props) => {
  const {
    handleSubmit,
    authority,
    loginError,
    loginLoading,
    setLoginError,
    setLoginLoading,
    onLoginSuccess,
    onShowIframe,
  } = props;
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate the Keycloak auth URL for iframe
    try {
      setLoginError(null);
      
      // Build Keycloak authorization URL
      const storedAuthority = authority || localStorage.getItem("authority");
      const subsidiary = localStorage.getItem('subsidiary') || 'allied';
      const env = storedAuthority || 'development';
      
      const envHostMap: Record<string, string> = {
        'development': 'dev-keycloak.colibricore.io',
        'dev': 'dev-keycloak.colibricore.io',
        'test': 'test-keycloak.colibricore.io',
        'staging': 'staging-keycloak.colibricore.io',
        'stage': 'staging-keycloak.colibricore.io',
        'production': 'keycloak.colibricore.io',
        'prod': 'keycloak.colibricore.io',
      };
      
      const host = envHostMap[env] || envHostMap['development'];
      const baseUrl = `https://${host}/realms/${subsidiary}`;
      const redirectUri = window.location.origin + window.location.pathname;
      
      // Generate a random state for CSRF protection
      const state = Math.random().toString(36).substring(2, 15);
      const nonce = Math.random().toString(36).substring(2, 15);
      
      const authUrl = `${baseUrl}/protocol/openid-connect/auth?` + new URLSearchParams({
        client_id: 'colibricore',
        redirect_uri: redirectUri,
        response_type: 'code',
        scope: 'openid profile email',
        state: state,
        nonce: nonce,
      }).toString();
      
      console.log('[LoginSubmit] Generated auth URL:', authUrl);
      
      // Show iframe with auth URL
      if (onShowIframe) {
        setLoginLoading(true);
        onShowIframe(authUrl);
      }
    } catch (error) {
      console.error('Failed to generate auth URL:', error);
      setLoginError('Failed to initialize login');
      setLoginLoading(false);
    }
  };
  
  return (
    <form
      className="flex flex-col gap-2.5 items-stretch"
      onSubmit={onSubmit}
    >
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600">
          Click below to sign in securely through our authentication portal
        </p>
      </div>

      {loginError ? <div className="mt-1.5 text-[#b00020] text-[13px]">{loginError}</div> : null}
      
      <div className="mt-4">
        <button
          className="w-full h-12 rounded-lg border-none bg-[#bdbdbd] enabled:bg-[#a24796] text-white font-semibold cursor-pointer disabled:opacity-90 disabled:cursor-not-allowed"
          type="submit"
          disabled={loginLoading}
        >
          {loginLoading ? "Loading Login..." : "Sign In with Keycloak SSO"}
        </button>
      </div>
    </form>
  );
};
export default LoginSubmit;
