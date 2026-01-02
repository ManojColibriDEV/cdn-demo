export interface RegistrationFormProps {
  onRegister?: (data: any) => void;
  onReview?: (data: any) => void;
  onReset?: () => void;
  initialValues?: Record<string, string>;
  loading: boolean;
  error?: string | null;
}

export interface ConfirmInformationProps {
  data: any;
  onBack: () => void;
  onConfirm: (data: any) => void;
  loading?: boolean;
  error?: string | null;
}
/**
 * Shared Types for Colibri Identity Keycloak
 * Centralized type definitions for API responses, component props, and functions
 */

// ============================================================================
// API Response Types
// ============================================================================

export interface UserData {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email: string;
  studentId?: string;
}

export interface OAuthTokenResponse {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
  error?: string;
  error_description?: string;
}

/**
 * OIDC Token Response from Keycloak
 * Standard OpenID Connect token endpoint response
 */
export interface OIDCTokenResponse {
  access_token: string;
  refresh_token: string;
  id_token?: string;
  token_type: string;
  expires_in: number;
  refresh_expires_in?: number;
  scope?: string;
  session_state?: string;
  error?: string;
  error_description?: string;
}

/**
 * User info from OIDC userinfo endpoint
 */
export interface OIDCUserInfo {
  sub: string;
  email?: string;
  email_verified?: boolean;
  name?: string;
  given_name?: string;
  family_name?: string;
  preferred_username?: string;
  [key: string]: any;
}

export interface LoginResponse extends OAuthTokenResponse {
  status?: "SUCCESS" | "FAILED";
  message?: string;
  requiresPasswordUpgrade?: boolean;
  userData?: UserData;
  user?: UserData;
  redirect_url?: string;
}

export interface CheckMigrationStatusResponse {
  forgotPasswordUrl?: string;
  [key: string]: any;
}

// ============================================================================
// Component Props Types
// ============================================================================

export interface LoginModalProps {
  open: boolean;
  isShowToggle: boolean;
  onClose: () => void;
  environment?: string;
}

// Extended ActiveTab type to include 'upgrade'
export type ActiveTab = "signin" | "signup" | "upgrade";

export interface LoginSubmitProps {
  handleSubmit: (props: HandleSubmitProps) => Promise<void>;
  environment?: string;
  loginError: string | null;
  loginLoading: boolean;
  setLoginError: (error: string | null) => void;
  setLoginLoading: (loading: boolean) => void;
}

export interface UpdatePasswordProps {
  upgradeMessage: string;
  upgradeUser: UpgradeUser | null;
  newPassword: string;
  confirmPassword: string;
  newShowPassword: boolean;
  passwordChecks: PasswordChecks;
  canUpdate: boolean;
  loginLoading: boolean;
  setNewPassword: (password: string) => void;
  setConfirmPassword: (password: string) => void;
  setNewShowPassword: (show: boolean) => void;
  setRequiresUpgrade: (requires: boolean) => void;
  setUpgradeUser: (user: UpgradeUser | null) => void;
  setLoginLoading: (loading: boolean) => void;
  setLoginError: (error: string | null) => void;
  navigate: (path: string) => void;
  handleUpdatePassword: (props: HandleUpdatePasswordProps) => Promise<void>;
}

// ============================================================================
// Function Parameter & Return Types
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
  noEmailParts: boolean;
}

export interface HandleSubmitProps {
  e: React.FormEvent<HTMLFormElement>;
  email?: string;
  password?: string;
  environment?: string;
  onRedirect?: (url: string) => void;
  setLoginError: (error: string | null) => void;
  setLoginLoading: (loading: boolean) => void;
}

export interface HandleUpdatePasswordProps {
  e: React.FormEvent<HTMLButtonElement>;
  newPassword: string;
  upgradeUser: UpgradeUser | null;
  setLoginLoading: (loading: boolean) => void;
  setLoginError: (error: string | null) => void;
  navigate: (path: string) => void;
}

// ============================================================================
// Axios/Network Error Type
// ============================================================================

export interface ApiError {
  response?: {
    data?: {
      message?: string;
      error_description?: string;
      error?: string;
    };
  };
  message?: string;
}

export interface CheckAvailableEmailResponse {
  isAvailable: boolean;
  message: string;
  isMobilePhoneAvailable: boolean;
  phoneMessage: string | null;
  success: boolean;
  statusCode: number;
  studentId: number | null;
  migrationId: string | null;
  emailMeritSaveType: string;
  idpUserGuid: string | null;
  emailMeritCategory: string;
  emailMeritMessage: string | null;
  traceIdentifier: string;
  isNeverAllow: boolean;
  subsidiaryIdOfExistingIdentity: number | null;
  isTraveler: boolean;
}

export type Address = {
  Address1: string;
  Address2: string | null;
  City: string;
  State: string;
  PostalCode: string;
  Country: string;
};

export type CustomRegistrationOptions = {
  CountriesSupported: string;
  PrimaryInterestOptions: unknown[];
  ShowCountryDropdown: boolean;
  CountryRequired: boolean;

  ShowDateOfBirth: boolean;
  DateOfBirthRequired: boolean;
};

export type TenantDetailsResponse = {
  TenantId: number;
  SubsidiaryId: number;
  Host: string;
  Domain: string;

  PhoneUs: string;
  PhoneOutsideUs: string | null;
  PhoneEnrollments: string;

  BrandFullName: string;
  TenantDescription: string;

  ShowFullBrandNameOnHeader: boolean;
  UseFullRegistration: boolean;
  CheckAvailabilityInCommonDb: boolean;

  Address: Address;

  Email: string;
  ContactUsUrl: string;

  AllowCreateIdentity: boolean;
  AllowCreateIdentityEx: boolean;

  TermsOfServiceUrl: string;
  PrivacyPolicyUrl: string;
  ConsentPreferenceCenterUrl: string | null;

  DefaultRoute: string;
  RegistrationConsent: string;

  ShowNameBreakdownOnConfirmationPage: boolean;
  ShowMobileNumberOnConfirmationPage: boolean;
  MaskMobileNumberOnConfirmationPage: boolean;
  ShowProfessionalDesignationsOnConfirmationPage: boolean;

  EnableEmailOTP: boolean;
  EnableMobileNumberOTP: boolean;

  CustomRegistrationOptions: CustomRegistrationOptions;
};

export interface FullResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  not_before_policy: number;
  session_state: string;
  scope: string;
}

export interface KeycloakLoginResponse {
  success: boolean;
  fullResponse: FullResponse;
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
  studentId: string;
  message: string;
}
