# Widget Props and Events Reference

Complete reference for all properties, events, and methods available in the Colibri Identity Widget.

## Table of Contents
- [Component Properties](#component-properties)
- [Events](#events)
- [Methods](#methods)
- [User Session Object](#user-session-object)
- [Quick Examples](#quick-examples)

---

## Component Properties

### HTML Attributes (Web Component / CDN Usage)

When using the widget as a web component via CDN or direct HTML:

| Attribute | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `authority` | string | No | Auto-detected | Authentication server environment: `dev`, `stage`, `prod`. Auto-detected from URL if omitted. |
| `redirectUrl` | string | No | - | URL to navigate to after successful authentication. If omitted, no automatic redirect occurs. |
| `login-title` | string | No | `'Continue to login'` | Title text displayed at top of login modal. Use kebab-case in HTML. |
| `loginTitle` | string | No | `'Continue to login'` | Same as above, but camelCase for React/JSX. |
| `login-subtitle` | string | No | `'Continue by signing in.'` | Subtitle text below title. Use kebab-case in HTML. |
| `loginSubtitle` | string | No | `'Continue by signing in.'` | Same as above, but camelCase for React/JSX. |
| `custom-primary-color` | string | No | Brand default | Custom color for buttons and primary UI. Accepts hex, RGB, or named colors. Use kebab-case in HTML. |
| `customPrimaryColor` | string | No | Brand default | Same as above, but camelCase for React/JSX. |
| `show-login` | string | No | `'false'` | Set to `'true'` to auto-open login modal on page load. |

**Example HTML:**
```html
<keycloak-widget 
    authority="dev"
    redirectUrl="https://myapp.com/dashboard"
    login-title="Welcome Back"
    login-subtitle="Sign in to continue"
    custom-primary-color="#17a2b8"
></keycloak-widget>
```

**Example React/JSX:**
```jsx
<keycloak-widget 
    authority="dev"
    redirectUrl="https://myapp.com/dashboard"
    loginTitle="Welcome Back"
    loginSubtitle="Sign in to continue"
    customPrimaryColor="#17a2b8"
/>
```

### React Component Props (When using LoginWidget wrapper)

When using the React wrapper component:

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `authority` | string | No | Auto-detected | Authentication environment. |
| `redirectUrl` | string | No | - | Post-login redirect URL. |
| `loginTitle` | string | No | `'Continue to login'` | Login modal title. |
| `loginSubtitle` | string | No | `'Continue by signing in.'` | Login modal subtitle. |
| `customPrimaryColor` | string | No | Brand default | Custom primary color override. |
| `widgetId` | string | No | `'auth-embedded'` | HTML element ID. |
| `onRedirect` | function | No | - | Callback: `(url: string, userSession: any) => void`. **Disables auto-redirect when provided.** |
| `onClose` | function | No | - | Callback: `() => void`. Triggered when modal closes without authentication. |
| `onLogout` | function | No | - | Callback: `() => void`. Triggered when user logs out. |
| `autoOpen` | boolean | No | `false` | Auto-open login modal on component mount. |

---

## Events

The widget dispatches three custom events that bubble up from the Shadow DOM:

### Event: `redirect`

**Trigger:** User successfully authenticates

**Event Detail Structure:**
```typescript
{
    url: string;                    // Redirect URL (from redirectUrl prop or default)
    userSession: {
        access_token: string;       // JWT access token
        userInfo: {
            studentId: string;      // User's student ID
            sub: string;            // User ID (subject)
            email: string;          // User email address
            email_verified: boolean;// Email verification status
            name: string;           // Full name
            given_name: string;     // First name
            family_name: string;    // Last name
            preferred_username: string; // Username
            x_credentials: string;  // Cross-domain auth credential
        }
    };
    tokens: {
        access_token: string;       // Same as above (duplicate for convenience)
    };
}
```

**HTML Usage:**
```javascript
widget.addEventListener('redirect', (event) => {
    const { url, userSession } = event.detail;
    console.log('User authenticated:', userSession);
    console.log('Access token:', userSession.access_token);
    console.log('User info:', userSession.userInfo);
    
    // Manual redirect if needed
    // window.location.href = url;
});
```

**React Wrapper Usage:**
```tsx
<LoginWidget
    onRedirect={(url, userSession) => {
        console.log('Authenticated!', userSession);
        // Save to state/context
        setUser(userSession.userInfo);
        // Navigate if needed
        navigate(url);
    }}
/>
```

### Event: `close`

**Trigger:** User closes login modal without authenticating (clicks X or overlay)

**Event Detail:** None (empty event)

**HTML Usage:**
```javascript
widget.addEventListener('close', () => {
    console.log('User closed login modal');
    // Handle cancellation
});
```

**React Wrapper Usage:**
```tsx
<LoginWidget
    onClose={() => {
        console.log('Modal closed');
        // Handle cancellation
    }}
/>
```

### Event: `logout`

**Trigger:** `logout()` method is called

**Event Detail:** None (empty event)

**Side Effects:**
- Clears `localStorage` tokens (access_token, refresh_token, etc.)
- Clears all authentication cookies
- Closes login modal if open
- Removes user session state

**HTML Usage:**
```javascript
widget.addEventListener('logout', () => {
    console.log('User logged out');
    // Update UI to logged-out state
    updateUI({ isAuthenticated: false });
});
```

**React Wrapper Usage:**
```tsx
<LoginWidget
    onLogout={() => {
        console.log('Logged out');
        setUser(null);
        setIsAuthenticated(false);
    }}
/>
```

---

## Methods

Public methods available on the widget element:

### `login()`

Opens the login modal.

**HTML Usage:**
```javascript
const widget = document.getElementById('auth-widget');
widget.login();
```

**React Usage:**
```tsx
const widgetRef = useRef(null);

// Later...
widgetRef.current?.login();
```

**When to use:**
- User clicks "Login" button
- Accessing protected route
- Session expired
- Manual authentication trigger

### `logout()`

Logs out the current user and clears all authentication data.

**What it does:**
1. Removes tokens from `localStorage`:
   - `user_state`
   - `access_token`
   - `refresh_token`
   - `refresh_token_time`
2. Clears all cookies
3. Closes login modal if open
4. Dispatches `logout` event
5. Calls `onLogout` callback if provided

**HTML Usage:**
```javascript
const widget = document.getElementById('auth-widget');
widget.logout();
```

**React Usage:**
```tsx
const widgetRef = useRef(null);

// Later...
widgetRef.current?.logout();
```

**When to use:**
- User clicks "Logout" button
- Session invalidation
- Security requirement (e.g., after password change)
- Forced logout

---

## User Session Object

Structure of the `userSession` object returned in the `redirect` event:

```typescript
interface UserSession {
    access_token: string;           // JWT access token for API calls
    
    userInfo: {
        studentId: string;          // Unique student identifier
        sub: string;                // User ID (OIDC subject)
        email: string;              // User's email address
        email_verified: boolean;    // Whether email is verified
        name: string;               // Full name (given + family)
        given_name: string;         // First name
        family_name: string;        // Last name
        preferred_username: string; // Username (usually email prefix)
        x_credentials: string;      // Cross-domain authentication credential
        
        // Token metadata
        exp: number;                // Token expiration (Unix timestamp)
        iat: number;                // Token issued at (Unix timestamp)
        iss: string;                // Token issuer
        aud: string;                // Token audience
    };
}
```

**Example User Session:**
```json
{
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userInfo": {
        "studentId": "12345",
        "sub": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "email": "john.doe@example.com",
        "email_verified": true,
        "name": "John Doe",
        "given_name": "John",
        "family_name": "Doe",
        "preferred_username": "john.doe",
        "x_credentials": "xyz789...",
        "exp": 1735890000,
        "iat": 1735886400,
        "iss": "https://dev-keycloak.colibrilearning.com",
        "aud": "colibri-widget"
    }
}
```

**Using User Session Data:**

```tsx
const handleRedirect = (url, userSession) => {
    // Extract user info
    const { userInfo } = userSession;
    
    // Display user name
    console.log(`Welcome, ${userInfo.name}!`);
    
    // Check token expiry
    const expiresAt = new Date(userInfo.exp * 1000);
    console.log(`Token expires at: ${expiresAt}`);
    
    // Store for API calls
    localStorage.setItem('access_token', userSession.access_token);
    
    // Use x_credentials for cross-domain auth
    const redirectWithCred = `${url}?xcred=${userInfo.x_credentials}`;
    window.location.href = redirectWithCred;
};
```

---

## Quick Examples

### Example 1: Basic Login/Logout

```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic Example</title>
</head>
<body>
    <button id="loginBtn">Login</button>
    <button id="logoutBtn" style="display:none;">Logout</button>
    <div id="userInfo" style="display:none;"></div>

    <keycloak-widget id="auth" authority="dev"></keycloak-widget>

    <script src="https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js"></script>
    <script>
        const widget = document.getElementById('auth');
        const loginBtn = document.getElementById('loginBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const userInfo = document.getElementById('userInfo');

        loginBtn.onclick = () => widget.login();
        logoutBtn.onclick = () => widget.logout();

        widget.addEventListener('redirect', (e) => {
            const { userSession } = e.detail;
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'block';
            userInfo.style.display = 'block';
            userInfo.textContent = `Welcome, ${userSession.userInfo.name}!`;
        });

        widget.addEventListener('logout', () => {
            loginBtn.style.display = 'block';
            logoutBtn.style.display = 'none';
            userInfo.style.display = 'none';
        });
    </script>
</body>
</html>
```

### Example 2: React with Session Persistence

```tsx
import React, { useState, useRef, useEffect } from 'react';
import LoginWidget from './LoginWidget';

function App() {
    const widgetRef = useRef(null);
    const [user, setUser] = useState(null);

    // Load session on mount
    useEffect(() => {
        const session = localStorage.getItem('userSession');
        if (session) {
            setUser(JSON.parse(session));
        }
    }, []);

    const handleRedirect = (url, userSession) => {
        localStorage.setItem('userSession', JSON.stringify(userSession));
        setUser(userSession.userInfo);
    };

    const handleLogout = () => {
        localStorage.removeItem('userSession');
        setUser(null);
    };

    return (
        <div>
            {user ? (
                <>
                    <h1>Welcome, {user.name}!</h1>
                    <button onClick={() => widgetRef.current?.logout()}>
                        Logout
                    </button>
                </>
            ) : (
                <button onClick={() => widgetRef.current?.login()}>
                    Login
                </button>
            )}

            <LoginWidget
                ref={widgetRef}
                authority="dev"
                onRedirect={handleRedirect}
                onLogout={handleLogout}
            />
        </div>
    );
}
```

### Example 3: Protected Route

```tsx
function ProtectedRoute({ children }) {
    const widgetRef = useRef(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const session = localStorage.getItem('userSession');
        if (!session) {
            // Auto-open login if not authenticated
            setTimeout(() => widgetRef.current?.login(), 100);
        } else {
            setIsAuthenticated(true);
        }
    }, []);

    if (!isAuthenticated) {
        return (
            <>
                <h2>Login Required</h2>
                <LoginWidget
                    ref={widgetRef}
                    authority="prod"
                    autoOpen={true}
                    onRedirect={() => setIsAuthenticated(true)}
                />
            </>
        );
    }

    return children;
}
```

### Example 4: Custom Branding

```tsx
<LoginWidget
    authority="prod"
    redirectUrl="https://myapp.com/dashboard"
    loginTitle="Welcome to MyApp"
    loginSubtitle="Your personalized learning platform"
    customPrimaryColor="#FF6B6B"
    onRedirect={handleRedirect}
/>
```

---

## Important Notes

### Auto-Redirect Behavior

**Key Rule:** When `onRedirect` callback is provided, automatic redirect is **disabled**.

```tsx
// Auto-redirect ENABLED (no callback)
<keycloak-widget redirectUrl="https://myapp.com/dashboard" />

// Auto-redirect DISABLED (callback provided)
<LoginWidget
    redirectUrl="https://myapp.com/dashboard"
    onRedirect={(url, session) => {
        // YOU must handle redirect
        window.location.href = url;
    }}
/>
```

### Token Storage

The widget automatically stores tokens:
- **Access Token**: Cookie (encoded for security)
- **Refresh Token**: localStorage
- **X-Credential**: Cookie (NOT encoded - preserves exact format)

Logout clears all of these automatically.

### Cross-Domain Authentication

Use `x_credentials` for cross-domain authentication:

```tsx
const handleRedirect = (url, userSession) => {
    const xcred = userSession.userInfo.x_credentials;
    const redirectUrl = `${url}?xcred=${xcred}`;
    window.location.href = redirectUrl;
};
```

### Security Best Practices

1. **Validate tokens server-side** - Don't trust client-side data
2. **Use HTTPS** - Always use secure connections
3. **Check token expiry** - Validate before API calls
4. **Clear on logout** - Use widget's `logout()` method
5. **HttpOnly cookies** - Preferred for token storage in production

---

## Need More Help?

- **Full React Guide**: See [REACT-CDN-COMPONENT.md](./REACT-CDN-COMPONENT.md)
- **API Reference**: See [API-REFERENCE.md](./API-REFERENCE.md)
- **Usage Examples**: See [USAGE.md](./USAGE.md)
- **Architecture**: See [ARCHITECTURE.md](./ARCHITECTURE.md)
