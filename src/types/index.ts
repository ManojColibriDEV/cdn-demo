// ============================================================================
// Component Props Interfaces
// ============================================================================

export interface CreateAccountFormProps {
  onSuccess: (userSession: any) => void;
  onError: (error: string) => void;
  handleClose: () => void;
  onSignIn: (email?: string) => void;
  authority?: string;
  title?: string;
  subtitle?: string;
  initialEmail?: string;
}

export interface EmbeddedLoginFormProps {
  onSuccess: (userSession: any) => void;
  onError: (error: string) => void;
  handleClose: () => void;
  authority?: string;
  title?: string;
  subtitle?: string;
  initialEmail?: string;
  enableGoogleLogin?: boolean;
  enableAppleLogin?: boolean;
  appleClientId?: string;
}

export interface ResetPasswordFormProps {
  email: string;
  onBack: () => void;
  handleClose: () => void;
  onCreateAccount?: () => void;
}

export interface ResetPasswordSuccessProps {
  email: string;
  loading: boolean;
  cooldown: number;
  onResendLink: () => void;
  onBack: () => void;
  onClose: () => void;
}

export interface ForgotUsernameFormProps {
  email: string;
  onBack: () => void;
  handleClose: () => void;
  onCreateAccount?: () => void;
}

export interface ForgotUsernameSuccessProps {
  email: string;
  loading: boolean;
  cooldown: number;
  onResendLink: () => void;
  onBack: () => void;
  onClose: () => void;
}

export interface AppProps {
  authority?: string;
  subsidiary?: string;
  redirectUrl?: string;
  redirectDashboardUrl?: string;
  redirectCheckoutUrl?: string;
  onRedirect?: (url: string, userSession?: any) => void;
  onTokenValidityCheck?: (isTokenValid: boolean) => void;
  loginTitle?: string;
  loginSubtitle?: string;
  showLogin?: boolean;
  handleClose?: () => void;
  logoutCounter?: number;
  customPrimaryColor?: string;
  autoRedirection?: boolean;
  googleClientId?: string;
  appleClientId?: string;
}

// ============================================================================
// Service Types (Theme & OIDC)
// ============================================================================

export interface BrandConfig {
  folder: string;
  name: string;
  domain: string;
  token: string;
}

export interface ThemeStyle {
  name: string;
  value: string;
}

export interface ThemeConfig {
  styles: ThemeStyle[];
}

export interface PKCEState {
  codeVerifier: string;
  codeChallenge: string;
  state: string;
  nonce: string;
}

// ============================================================================
// API Response Types
// ============================================================================

export interface RegisterRequest {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  brand?: {
    id: number;
    name: string;
    domain: string;
    realm: string;
  };
}

export interface AuthenticationTokens {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
  tokens?: {
    access_token?: string;
    refresh_token?: string;
  };
}

export interface CheckEmailResponse {
  exists: boolean;
}

// Enrollment and Checkout API Response Types
export interface EnrollmentResponse {
  items: any[];
  results?: number;
}

export interface CheckoutResponse {
  items: any[];
  results?: number;
}

// ============================================================================
// Password Validation Types
// ============================================================================

export interface UpgradeUser {
  displayName: string;
  email: string;
  studentId?: string;
}

export interface PasswordChecks {
  length: boolean;
  upper: boolean;
  lower: boolean;
  number: boolean;
  noSpaces: boolean;
  noTriple: boolean;
  special: boolean;
  noNameParts: boolean;
}
