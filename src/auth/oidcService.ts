import { setAuthCookie } from "../utils/cookieHelper";

/**
 * Sign in with username/password using custom authentication API
 */
export async function signInWithPassword(
  username: string,
  password: string,
  _environment?: string
): Promise<any> {
  const tokenEndpoint = `https://dev-demo-env.colibrilearning.com/api/auth`;

  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    });

    console.log("response", response)

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error_description || 'Authentication failed');
    }

    const data = await response.json();
    
    // Check if the response is successful
    if (!data.success || !data.tokens || !data.userinfo) {
      throw new Error('Invalid response from authentication server');
    }

    const { tokens, userinfo, brand } = data;
    const expiresIn = tokens.expires_in || 300;

    // Set access_token as cookie (cross-subdomain)
    setAuthCookie('access_token', tokens.access_token, expiresIn, true);

    // Store in localStorage
    localStorage.setItem('user_state', 'authenticated');
    localStorage.setItem('decoded', JSON.stringify(userinfo) || '');
    
    // Store brand information if available
    if (brand) {
      localStorage.setItem('brand', JSON.stringify(brand));
    }

    // Store X-Credential from userinfo without encoding
    if (userinfo.x_credentials) {
      setAuthCookie('X-Credential', userinfo.x_credentials, expiresIn, false);
    }

    console.log('[Auth] Password authentication complete');

    return {
      tokens: { 
        access_token: tokens.access_token, 
        refresh_token: tokens.refresh_token 
      },
      userInfo: userinfo,
      userSession: userinfo,
      brand: brand
    };
  } catch (error) {
    console.error('[Auth] Password sign in error:', error);
    throw error;
  }
}

