// ============================================================================
// Registration Component Props
// ============================================================================

export interface RegistrationFormProps {
  onRegister?: (data: any) => void;
  onReview?: (data: any) => void;
  onReset?: () => void;
  initialValues?: Record<string, string>;
  loading: boolean;
  error?: string | null;
}

// ============================================================================
// API Response Types
// ============================================================================

export interface LoginResponse {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
  status?: "SUCCESS" | "FAILED";
  message?: string;
  requiresPasswordUpgrade?: boolean;
  userData?: {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    email: string;
    studentId?: string;
  };
  user?: {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    email: string;
    studentId?: string;
  };
  redirect_url?: string;
  error?: string;
  error_description?: string;
}

export interface CheckMigrationStatusResponse {
  forgotPasswordUrl?: string;
  [key: string]: any;
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
  noEmailParts: boolean;
}

// ============================================================================
// Network Error Type
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

