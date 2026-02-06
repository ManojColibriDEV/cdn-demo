/**
 * Application Constants
 * Centralized location for all hardcoded values, enums, and configuration
 */

// ==================== ENUMS ====================

/**
 * Message/Notification Types
 * Used for Banners, Toasts, and other UI feedback components
 */
export enum MessageType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

/**
 * Button Variants
 * Defines different button styles
 */
export enum ButtonVariant {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  LINK = 'link',
}

/**
 * Button Types
 * HTML button type attributes
 */
export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

/**
 * Environment/Authority Types
 * Defines deployment environments
 */
export enum Authority {
  DEV = 'dev',
  TEST = 'test',
  STAGE = 'stage',
  PROD = 'prod',
}

/**
 * Render Modes
 * Application rendering modes (React app vs Web Component)
 */
export enum RenderMode {
  TEST = 'TEST',
  WEBCOMPONENT = 'WEBCOMPONENT',
}

/**
 * ARIA Roles
 * Accessibility roles for screen readers
 */
export enum AriaRole {
  ALERT = 'alert',
  STATUS = 'status',
}

/**
 * ARIA Live Regions
 * Accessibility live region politeness levels
 */
export enum AriaLive {
  ASSERTIVE = 'assertive',
  POLITE = 'polite',
  OFF = 'off',
}

// ==================== STORAGE KEYS ====================

/**
 * LocalStorage Keys
 */
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  ACCESS_TOKEN_EXPIRES: 'access_token_expires',
  REFRESH_TOKEN_TIME: 'refresh_token_time',
  BRAND_DATA: 'brand_data',
} as const;

/**
 * Cookie Names
 */
export const COOKIE_NAMES = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  X_CREDENTIAL: 'X-Credential',
  X_CREDENTIAL_OLD: 'x_credential', // Legacy cookie name for cleanup
} as const;

/**
 * HTTP Headers
 */
export const HTTP_HEADERS = {
  X_BRAND_ID: 'X-Brand-Id',
  X_SUBSIDIARY_ID: 'X-Subsidiary-Id',
  X_BRAND_DOMAIN: 'X-Brand-Domain',
} as const;

// ==================== API ENDPOINTS ====================

/**
 * API Endpoint Paths
 */
export const API_ENDPOINTS = {
  AUTH: '/api/auth',
  REGISTER: '/api/register',
  CHECK_EMAIL: '/api/check-email',
  FORGOT_PASSWORD: '/api/forgot-password',
  REFRESH_TOKEN: '/api/refresh',
  GLOBAL_SUBSIDIARIES: '/global/subsidiaries',
} as const;

// ==================== HTTP STATUS CODES ====================

/**
 * HTTP Status Codes
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// ==================== VALIDATION CONSTANTS ====================

/**
 * Password Validation Rules
 */
export const PASSWORD_RULES = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15,
  MIN_PART_LENGTH_FOR_NAME_CHECK: 2,
  MIN_TOKEN_LENGTH_FOR_EMAIL_CHECK: 3,
} as const;

/**
 * Email Validation Regex
 */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Password Validation Regexes
 */
export const PASSWORD_REGEX = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/,
  SPECIAL_CHAR: /[@.$%^_\-]/,
  ALLOWED_CHARS: /^[A-Za-z0-9@.$%^_\-]+$/,
  NO_SPACES: /\s/,
  NO_TRIPLE: /(.)\1\1/,
} as const;

/**
 * Alternative Password Special Characters (for registration form)
 */
export const PASSWORD_SPECIAL_CHARS_ALT = /[!@#$%^&*._-]/;
export const PASSWORD_ALLOWED_CHARS_ALT = /^[A-Za-z0-9!@#$%^&*._-]+$/;

// ==================== TIMING CONSTANTS ====================

/**
 * Timing/Duration Constants (in milliseconds)
 */
export const TIMING = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5000,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300,
  TOKEN_REFRESH_MAX_AGE_DAYS: 7,
} as const;

/**
 * Token Expiry Constants
 */
export const TOKEN_EXPIRY = {
  REFRESH_TOKEN_MAX_AGE_MS: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7,
} as const;

// ==================== URL CONSTANTS ====================

/**
 * URL Parameters
 */
export const URL_PARAMS = {
  XCRED: 'xcred',
} as const;

/**
 * Default Paths
 */
export const DEFAULT_PATHS = {
  COURSES: '/courses',
} as const;

/**
 * Environment Prefixes
 */
export const ENV_PREFIXES = {
  DEV: 'dev',
  TEST: 'test',
  STAGE: 'stage',
  DEV_LEARN: 'dev-learn',
  TEST_LEARN: 'test-learn',
  STAGE_LEARN: 'stage-learn',
  LEARN: 'learn',
} as const;

/**
 * Localhost Identifiers
 */
export const LOCALHOST = {
  HOSTNAME: 'localhost',
  IP: '127.0.0.1',
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/,
} as const;

// Auth Gateway URLs (for /api/* endpoints: auth, register, check-email, forgot-password, refresh)
export const AUTH_GATEWAY_URLS = {
  [Authority.DEV]: (import.meta as any).env.VITE_AUTH_GATEWAY_URL_DEV,
  [Authority.TEST]: (import.meta as any).env.VITE_AUTH_GATEWAY_URL_TEST,
  [Authority.STAGE]: (import.meta as any).env.VITE_AUTH_GATEWAY_URL_STAGE,
  [Authority.PROD]: (import.meta as any).env.VITE_AUTH_GATEWAY_URL_PROD,
} as const;

// Global API URLs (for /global/* endpoints: subsidiaries, etc.)
export const GLOBAL_API_URLS = {
  [Authority.DEV]: (import.meta as any).env.VITE_GLOBAL_API_URL_DEV,
  [Authority.TEST]: (import.meta as any).env.VITE_GLOBAL_API_URL_TEST,
  [Authority.STAGE]: (import.meta as any).env.VITE_GLOBAL_API_URL_STAGE,
  [Authority.PROD]: (import.meta as any).env.VITE_GLOBAL_API_URL_PROD,
} as const;

// ==================== ERROR MESSAGES ====================

/**
 * Common Error Messages
 */
export const ERROR_MESSAGES = {
  // Authentication Errors
  INVALID_CREDENTIALS: 'Invalid credentials',
  AUTH_FAILED: 'Authentication failed',
  
  // Registration Errors
  REGISTRATION_FAILED: 'Registration failed',
  REGISTRATION_FAILED_RETRY: 'Registration failed. Please try again.',
  
  // Password Errors
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_LENGTH: 'Password must be 9-15 characters long',
  PASSWORD_UPPERCASE: 'Password must contain at least one uppercase letter',
  PASSWORD_LOWERCASE: 'Password must contain at least one lowercase letter',
  PASSWORD_NUMBER: 'Password must contain at least one number',
  PASSWORD_SPECIAL_CHAR: 'Password must contain at least one special character (!@#$%^&*._-)',
  PASSWORD_INVALID_CHARS: 'Password contains invalid characters. Only letters, numbers, and !@#$%^&*._- are allowed',
  PASSWORD_MATCH_USERNAME: 'Password cannot match your username or email',
  
  // Email Errors
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Please enter a valid email address',
  EMAIL_CHECK_FAILED: 'Unable to verify email. Please try again.',
  
  // Field Errors
  FIELD_REQUIRED: 'This field is required',
  FIRST_NAME_REQUIRED: 'First name is required',
  LAST_NAME_REQUIRED: 'Last name is required',
  
  // Reset Password Errors
  RESET_LINK_FAILED: 'Failed to send reset link. Please try again.',
  
  // Generic Errors
  SOMETHING_WENT_WRONG: 'Something went wrong. Please try again.',
} as const;

/**
 * Success Messages
 */
export const SUCCESS_MESSAGES = {
  REGISTRATION_SUCCESS: 'Account created successfully!',
  RESET_LINK_SENT: 'Password reset link sent successfully!',
  LOGIN_SUCCESS: 'Login successful!',
} as const;

/**
 * Info Messages
 */
export const INFO_MESSAGES = {
  EMAIL_NOT_FOUND: 'No account found with this email address.',
  EMAIL_CHECK_IN_PROGRESS: 'Checking email...',
  LOADING: 'Loading...',
} as const;

// ==================== CONSOLE LOG PREFIXES ====================

/**
 * Console Log Prefixes for Debugging
 */
export const LOG_PREFIX = {
  AUTH: '[Auth]',
  TOKEN: '[Token]',
  EMAIL_CHECK: '[EmailCheck]',
  REGISTRATION: '[Registration]',
  RESET_PASSWORD: '[ResetPassword]',
  EMBEDDED_LOGIN: '[EmbeddedLogin]',
  CREATE_ACCOUNT: '[CreateAccount]',
  COOKIE: '[Cookie]',
  CHECK_TOKEN_AND_REDIRECT: '[checkTokenAndRedirect]',
} as const;

// ==================== UI CONSTANTS ====================

/**
 * Toast Configuration
 */
export const TOAST_CONFIG = {
  MAX_WIDTH: '90vw',
  WIDTH: '400px',
  Z_INDEX: 9999,
} as const;

/**
 * Password Strength Levels
 */
export const PASSWORD_STRENGTH = {
  WEAK: 'Weak',
  GOOD: 'Good',
  STRONG: 'Strong',
} as const;

/**
 * Password Strength Colors
 */
export const PASSWORD_STRENGTH_COLORS = {
  WEAK: '#EF4444',
  GOOD: '#10B981',
  STRONG: '#10B981',
} as const;

/**
 * Password Strength Widths
 */
export const PASSWORD_STRENGTH_WIDTHS = {
  EMPTY: '0%',
  WEAK: '25%',
  GOOD: '60%',
  STRONG: '100%',
} as const;

// ==================== TYPE EXPORTS ====================

/**
 * Type: Message Type Union
 */
export type MessageTypeValue = typeof MessageType[keyof typeof MessageType];

/**
 * Type: Button Variant Union
 */
export type ButtonVariantValue = typeof ButtonVariant[keyof typeof ButtonVariant];

/**
 * Type: Authority Union
 */
export type AuthorityValue = typeof Authority[keyof typeof Authority];

/**
 * Type: Render Mode Union
 */
export type RenderModeValue = typeof RenderMode[keyof typeof RenderMode];
