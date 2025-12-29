# API Reference

Complete reference documentation for the Colibri Identity Login Widget API.

---

## Table of Contents

1. [Custom Element](#custom-element)
2. [HTML Attributes](#html-attributes)
3. [JavaScript Properties](#javascript-properties)
4. [Methods](#methods)
5. [Events](#events)
6. [Components API](#components-api)
7. [Type Definitions](#type-definitions)
8. [Utilities](#utilities)

---

## Custom Element

### `<keycloak-widget>`

The main custom HTML element for the login widget.

**Tag Name**: `keycloak-widget` (case-insensitive in HTML)

**Example**:
```html
<keycloak-widget 
  redirectUrl="/dashboard"
  environment="production"
  subsidiary="allied"
  theme="light"
></keycloak-widget>
```

**Browser Support**: Chrome 67+, Firefox 63+, Safari 10.1+, Edge 79+

---

## HTML Attributes

All attributes are **optional** and have default values.

### `redirectUrl`

**Type**: `string`  
**Default**: `"/"`  
**Description**: URL to redirect to after successful authentication.

```html
<keycloak-widget redirectUrl="/user/dashboard"></keycloak-widget>
```

**Valid Values**:
- Relative paths: `/dashboard`, `/user/profile`
- Absolute URLs: `https://example.com/dashboard`
- Hash routes: `/#/dashboard`

**Notes**:
- Must be a valid URL
- Will be validated before redirect
- Use URL encoding for special characters

---

### `environment`

**Type**: `"test" | "staging" | "production"`  
**Default**: `"test"`  
**Description**: Environment configuration for API endpoints.

```html
<keycloak-widget environment="production"></keycloak-widget>
```

**Values**:

| Value | Description | API Base URL |
|-------|-------------|--------------|
| `test` | Development/testing | `https://dev-idb.colibrirealestate.com` |
| `staging` | Staging environment | `https://staging-idb.colibrirealestate.com` |
| `production` | Production | `https://idb.colibrirealestate.com` |

**Notes**:
- Case-insensitive
- Invalid values fallback to `"test"`
- Affects API calls, not UI behavior

---

### `subsidiary`

**Type**: `string`  
**Default**: `"allied"`  
**Description**: Brand or subsidiary identifier for multi-tenant scenarios.

```html
<keycloak-widget subsidiary="north-american"></keycloak-widget>
```

**Valid Values**:
- `"allied"` - Allied brand
- `"north-american"` - North American brand
- Custom values (check with backend team)

**Use Cases**:
- Multi-brand deployments
- Tenant-specific configurations
- Custom branding

---

### `theme`

**Type**: `"light" | "dark"`  
**Default**: `"light"`  
**Description**: Visual theme for the widget (future support).

```html
<keycloak-widget theme="dark"></keycloak-widget>
```

**Status**: 🚧 Planned feature

---

## JavaScript Properties

Access attributes as JavaScript properties with camelCase naming.

### `redirectUrl`

```javascript
const widget = document.querySelector('keycloak-widget');

// Get
console.log(widget.redirectUrl); // "/dashboard"

// Set
widget.redirectUrl = '/new/path';
```

**Type**: `string`  
**Getter**: Returns current `redirectUrl` attribute value or default  
**Setter**: Updates `redirectUrl` attribute

---

### `environment`

```javascript
widget.environment = 'production';
console.log(widget.environment); // "production"
```

**Type**: `string`  
**Getter**: Returns current `environment` attribute  
**Setter**: Updates `environment` attribute

---

### `subsidiary`

```javascript
widget.subsidiary = 'north-american';
console.log(widget.subsidiary); // "north-american"
```

**Type**: `string`  
**Getter**: Returns current `subsidiary` attribute  
**Setter**: Updates `subsidiary` attribute

---

### `theme`

```javascript
widget.theme = 'dark';
console.log(widget.theme); // "dark"
```

**Type**: `string`  
**Getter**: Returns current `theme` attribute  
**Setter**: Updates `theme` attribute

---

## Methods

### `openModal()`

**Status**: 🚧 Planned

Programmatically opens the login modal.

```javascript
const widget = document.querySelector('keycloak-widget');
widget.openModal();
```

**Parameters**: None  
**Returns**: `void`  
**Throws**: None

**Example**:
```javascript
document.getElementById('customLoginBtn').addEventListener('click', () => {
  widget.openModal();
});
```

---

### `closeModal()`

**Status**: 🚧 Planned

Programmatically closes the login modal.

```javascript
widget.closeModal();
```

**Parameters**: None  
**Returns**: `void`  
**Throws**: None

---

### `reset()`

**Status**: 🚧 Planned

Resets the widget to initial state.

```javascript
widget.reset();
```

**Parameters**: None  
**Returns**: `void`  
**Throws**: None

**Use Cases**:
- Clear form data
- Reset validation errors
- Return to login tab

---

### `getState()`

**Status**: 🚧 Planned

Returns current widget state.

```javascript
const state = widget.getState();
console.log(state);
// {
//   isModalOpen: false,
//   currentTab: 'login',
//   isLoading: false,
//   user: null
// }
```

**Parameters**: None  
**Returns**: `WidgetState` object  
**Throws**: None

---

## Events

All events are **CustomEvent** instances with `detail` property containing event data.

### `login-success`

**Status**: 🚧 Planned

Fired when user successfully logs in.

```javascript
widget.addEventListener('login-success', (event) => {
  console.log('User logged in:', event.detail);
  // { user: {...}, token: "...", expiresAt: 1234567890 }
});
```

**Event Detail**:
```typescript
{
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
  };
  token: string;
  refreshToken: string;
  expiresAt: number; // Unix timestamp
}
```

**Bubbles**: `true`  
**Cancelable**: `false`  
**Composed**: `true`

---

### `login-error`

**Status**: 🚧 Planned

Fired when login fails.

```javascript
widget.addEventListener('login-error', (event) => {
  console.error('Login failed:', event.detail);
  // { error: "INVALID_CREDENTIALS", message: "Invalid email or password" }
});
```

**Event Detail**:
```typescript
{
  error: string;        // Error code
  message: string;      // Human-readable message
  statusCode?: number;  // HTTP status code
}
```

**Error Codes**:
- `INVALID_CREDENTIALS` - Wrong email/password
- `ACCOUNT_LOCKED` - Too many failed attempts
- `NETWORK_ERROR` - Connection failed
- `SERVER_ERROR` - Backend error

**Bubbles**: `true`  
**Cancelable**: `false`  
**Composed**: `true`

---

### `register-success`

**Status**: 🚧 Planned

Fired when user successfully registers.

```javascript
widget.addEventListener('register-success', (event) => {
  console.log('User registered:', event.detail);
});
```

**Event Detail**:
```typescript
{
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  requiresVerification: boolean;
}
```

**Bubbles**: `true`  
**Cancelable**: `false`  
**Composed**: `true`

---

### `register-error`

**Status**: 🚧 Planned

Fired when registration fails.

```javascript
widget.addEventListener('register-error', (event) => {
  console.error('Registration failed:', event.detail);
});
```

**Event Detail**:
```typescript
{
  error: string;
  message: string;
  field?: string;  // Field that caused error
}
```

**Error Codes**:
- `EMAIL_EXISTS` - Email already registered
- `INVALID_EMAIL` - Email format invalid
- `WEAK_PASSWORD` - Password doesn't meet requirements
- `VALIDATION_ERROR` - Form validation failed

---

### `modal-open`

**Status**: 🚧 Planned

Fired when login modal opens.

```javascript
widget.addEventListener('modal-open', () => {
  console.log('Modal opened');
});
```

**Event Detail**: `{}` (empty object)  
**Bubbles**: `true`  
**Cancelable**: `false`  
**Composed**: `true`

---

### `modal-close`

**Status**: 🚧 Planned

Fired when login modal closes.

```javascript
widget.addEventListener('modal-close', () => {
  console.log('Modal closed');
});
```

**Event Detail**: `{}` (empty object)  
**Bubbles**: `true`  
**Cancelable**: `false`  
**Composed**: `true`

---

### `tab-change`

**Status**: 🚧 Planned

Fired when user switches between login/register tabs.

```javascript
widget.addEventListener('tab-change', (event) => {
  console.log('Tab changed to:', event.detail.tab);
});
```

**Event Detail**:
```typescript
{
  tab: 'login' | 'register';
  previousTab: 'login' | 'register';
}
```

---

## Components API

Internal React components (for advanced customization).

### `<LoginModal>`

Main modal container component.

**Props**:
```typescript
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'register';
}
```

---

### `<LoginSubmit>`

Login form component.

**Props**:
```typescript
interface LoginSubmitProps {
  onSuccess: (data: AuthResponse) => void;
  onError: (error: Error) => void;
}
```

---

### `<RegistrationForm>`

Registration form component.

**Props**:
```typescript
interface RegistrationFormProps {
  mode: RegistrationMode;
  onSuccess: (data: RegisterResponse) => void;
  onBack?: () => void;
}
```

---

### `<InputField>`

Reusable input component.

**Props**:
```typescript
interface InputFieldProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'select';
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  options?: Array<{ value: string; label: string }>;
}
```

**Example**:
```tsx
<InputField
  label="Email"
  type="email"
  name="email"
  value={email}
  onChange={(name, value) => setEmail(value)}
  error={errors.email}
  required
  startIcon={<EmailIcon />}
/>
```

---

### `<Button>`

Reusable button component.

**Props**:
```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
}
```

**Example**:
```tsx
<Button 
  type="submit" 
  loading={isLoading}
  fullWidth
>
  Login
</Button>
```

---

### `<Loader>`

Loading spinner component.

**Props**:
```typescript
interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}
```

**Example**:
```tsx
<Loader size="md" />
```

---

## Type Definitions

### `RegistrationMode`

```typescript
export type RegistrationMode = 
  | 'REGISTRATION_TENANT' 
  | 'REGISTRATION_EMPLOYEE' 
  | 'REGISTRATION_BROKER' 
  | 'UPDATE_PASSWORD';
```

### `RegistrationFormData`

```typescript
export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  company?: string;
  position?: string;
  licenseNumber?: string;
  agreeToTerms: boolean;
}
```

### `AuthResponse`

```typescript
export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
  };
}
```

### `RegisterResponse`

```typescript
export interface RegisterResponse {
  success: boolean;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  requiresVerification: boolean;
}
```

### `ApiError`

```typescript
export interface ApiError {
  error: string;
  message: string;
  statusCode: number;
  details?: Record<string, any>;
}
```

---

## Utilities

### `getAvailableEmail`

Checks if email is available for registration.

```typescript
async function getAvailableEmail(
  email: string, 
  subsidiary: string
): Promise<boolean>
```

**Parameters**:
- `email`: Email to check
- `subsidiary`: Subsidiary identifier

**Returns**: `Promise<boolean>` - `true` if available

**Example**:
```typescript
import { getAvailableEmail } from './services';

const isAvailable = await getAvailableEmail('test@example.com', 'allied');
if (isAvailable) {
  console.log('Email is available');
}
```

---

### `postRegister`

Submits registration form.

```typescript
async function postRegister(
  data: RegistrationFormData,
  mode: RegistrationMode,
  subsidiary: string
): Promise<RegisterResponse>
```

**Parameters**:
- `data`: Registration form data
- `mode`: Registration mode
- `subsidiary`: Subsidiary identifier

**Returns**: `Promise<RegisterResponse>`

**Throws**: `ApiError`

---

### `postLogin`

Submits login credentials.

```typescript
async function postLogin(
  email: string,
  password: string,
  subsidiary: string
): Promise<AuthResponse>
```

**Parameters**:
- `email`: User email
- `password`: User password
- `subsidiary`: Subsidiary identifier

**Returns**: `Promise<AuthResponse>`

**Throws**: `ApiError`

---

## Error Handling

### Standard Error Structure

All API errors follow this structure:

```typescript
{
  error: string;       // Error code (e.g., "INVALID_CREDENTIALS")
  message: string;     // Human-readable message
  statusCode: number;  // HTTP status code
  details?: {          // Optional additional details
    field?: string;
    reason?: string;
  }
}
```

### Example Error Handling

```javascript
widget.addEventListener('login-error', (event) => {
  const { error, message, statusCode } = event.detail;
  
  switch (error) {
    case 'INVALID_CREDENTIALS':
      alert('Wrong email or password');
      break;
    case 'ACCOUNT_LOCKED':
      alert('Account locked. Try again later.');
      break;
    case 'NETWORK_ERROR':
      alert('Connection failed. Check internet.');
      break;
    default:
      alert(message);
  }
});
```

---

## Configuration

### Environment Variables

**Build Time** (in project):

```bash
VITE_RENDER_MODE=WEBCOMPONENT  # or TEST
VITE_API_BASE_URL=https://dev-idb.colibrirealestate.com
```

**Runtime** (via attributes):

```html
<keycloak-widget 
  environment="production"
  subsidiary="allied"
></keycloak-widget>
```

---

## TypeScript Support

### Global Type Declarations

Add to your `global.d.ts`:

```typescript
declare namespace JSX {
  interface IntrinsicElements {
    'keycloak-widget': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        redirectUrl?: string;
        environment?: 'test' | 'staging' | 'production';
        subsidiary?: string;
        theme?: 'light' | 'dark';
      },
      HTMLElement
    >;
  }
}
```

### Custom Element Interface

```typescript
interface KeycloakWidget extends HTMLElement {
  // Properties
  redirectUrl: string;
  environment: string;
  subsidiary: string;
  theme: string;
  
  // Methods
  openModal(): void;
  closeModal(): void;
  reset(): void;
  getState(): WidgetState;
}

interface WidgetState {
  isModalOpen: boolean;
  currentTab: 'login' | 'register';
  isLoading: boolean;
  user: null | UserData;
}
```

**Usage**:
```typescript
const widget = document.querySelector('keycloak-widget') as KeycloakWidget;
widget.openModal();
```

---

## Version History

### v1.0.0 (Current)

- ✅ Custom element registration
- ✅ Basic attributes (redirectUrl, environment, subsidiary, theme)
- ✅ Login functionality
- ✅ Registration functionality
- ✅ Tailwind CSS styling
- ✅ UMD bundle distribution

### v1.1.0 (Planned)

- 🚧 Public methods (openModal, closeModal, reset, getState)
- 🚧 Custom events (login-success, login-error, etc.)
- 🚧 Attribute reactivity
- 🚧 Dark theme support

### v2.0.0 (Future)

- 🔮 Shadow DOM support
- 🔮 OAuth/SSO integration
- 🔮 Biometric authentication
- 🔮 Multi-language support

---

## Support

- **Documentation**: [Full Docs](./README.md)
- **Issues**: [GitHub Issues](https://github.com/ManojColibriDEV/cdn-demo/issues)
- **Email**: support@colibri.com

---

**Last Updated**: December 29, 2025  
**API Version**: 1.0.0
