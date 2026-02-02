# React CDN Integration - Complete Guide

This comprehensive guide explains how to integrate the Colibri Identity Widget using CDN in React applications, with full TypeScript support.

## Table of Contents
- [Quick Start](#quick-start)
- [Component Props](#component-props)
- [Events](#events)
- [Methods](#methods)
- [Complete Implementation](#complete-implementation)
- [TypeScript Setup](#typescript-setup)
- [Usage Examples](#usage-examples)
- [Troubleshooting](#troubleshooting)

---

## Quick Start

### Step 1: Create the Widget Component

Create `LoginWidget.tsx` in your project:

```tsx
import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

interface KeycloakWidgetElement extends HTMLElement {
    login: () => void;
    logout: () => void;
    addEventListener(type: 'redirect', listener: (e: CustomEvent<{ url: string; userSession: any }>) => void, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: 'close', listener: (e: CustomEvent) => void, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: 'logout', listener: (e: CustomEvent) => void, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: 'redirect', listener: (e: CustomEvent<{ url: string; userSession: any }>) => void, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: 'close', listener: (e: CustomEvent) => void, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: 'logout', listener: (e: CustomEvent) => void, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'keycloak-widget': any;
        }
    }
}

export interface LoginWidgetProps {
    // Widget configuration
    authority?: string;
    redirectUrl?: string;
    loginTitle?: string;
    loginSubtitle?: string;
    customPrimaryColor?: string;
    widgetId?: string;

    // Event handlers
    onRedirect?: (url: string, userSession: any) => void;
    onClose?: () => void;
    onLogout?: () => void;

    // Auto-open widget
    autoOpen?: boolean;
}

const LoginWidget = forwardRef<KeycloakWidgetElement, LoginWidgetProps>(({
    authority,
    redirectUrl,
    loginTitle = 'Continue to login',
    loginSubtitle = 'Continue by signing in.',
    customPrimaryColor,
    widgetId = 'auth-embedded',
    onRedirect,
    onClose,
    onLogout,
    autoOpen = false
}, ref) => {
    const widgetRef = useRef<KeycloakWidgetElement>(null);

    // Expose the widget ref to parent components
    useImperativeHandle(ref, () => widgetRef.current as KeycloakWidgetElement);

    // Load the CDN script only once
    useEffect(() => {
        // Check if script is already loaded
        const existingScript = document.querySelector('script[src="https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js"]');

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = "https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js";
            script.async = true;
            document.body.appendChild(script);
        }

        // Don't remove script on unmount to prevent re-registration
    }, []);

    // Set up event listeners
    useEffect(() => {
        const widget = widgetRef.current;
        if (widget) {
            const handleRedirect = (e: CustomEvent) => {
                const { url, userSession } = e.detail;
                console.log('Redirect event received:', { url, userSession });
                onRedirect?.(url, userSession);
            };

            const handleClose = () => {
                onClose?.();
            };

            const handleLogout = () => {
                onLogout?.();
            };

            widget.addEventListener('redirect', handleRedirect);
            widget.addEventListener('close', handleClose);
            widget.addEventListener('logout', handleLogout);

            return () => {
                widget.removeEventListener('redirect', handleRedirect);
                widget.removeEventListener('close', handleClose);
                widget.removeEventListener('logout', handleLogout);
            };
        }
    }, [onRedirect, onClose, onLogout]);

    // Auto-open widget if configured
    useEffect(() => {
        if (autoOpen && widgetRef.current) {
            setTimeout(() => {
                widgetRef.current?.login();
            }, 500);
        }
    }, [autoOpen]);

    return (
        <keycloak-widget
            ref={widgetRef}
            id={widgetId}
            authority={authority}
            redirectUrl={redirectUrl}
            login-title={loginTitle}
            login-subtitle={loginSubtitle}
            customPrimaryColor={customPrimaryColor}
        />
    );
});

LoginWidget.displayName = 'LoginWidget';

export default LoginWidget;
```

### Step 2: Use in Your App

```tsx
import React, { useState, useRef } from 'react';
import LoginWidget from './LoginWidget';

function App() {
    const widgetRef = useRef(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userSession, setUserSession] = useState(null);

    const handleRedirect = (url: string, userSession: any) => {
        console.log('User authenticated:', userSession);
        setUserSession(userSession);
        setIsAuthenticated(true);
    };

    const handleClose = () => {
        console.log('Login widget closed');
    };

    const handleLogout = () => {
        console.log('User logged out');
        setIsAuthenticated(false);
        setUserSession(null);
    };

    return (
        <div className="app">
            <h1>My Application</h1>
            
            {isAuthenticated ? (
                <div>
                    <p>Welcome, {userSession?.userInfo?.name}!</p>
                    <button onClick={() => widgetRef.current?.logout()}>Logout</button>
                </div>
            ) : (
                <button onClick={() => widgetRef.current?.login()}>Login</button>
            )}

            <LoginWidget
                ref={widgetRef}
                authority="dev"
                redirectUrl={window.location.origin}
                loginTitle="Welcome Back"
                loginSubtitle="Sign in to continue"
                customPrimaryColor="#17a2b8"
                onRedirect={handleRedirect}
                onClose={handleClose}
                onLogout={handleLogout}
            />
        </div>
    );
}

export default App;
```

---

## Component Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `authority` | `string` | No | Auto-detected | Environment: `dev`, `stage`, `prod`. Auto-detects from current URL if not provided. |
| `redirectUrl` | `string` | No | - | URL to redirect after successful authentication. If not provided, no automatic redirect occurs. |
| `loginTitle` | `string` | No | `'Continue to login'` | Title text displayed at the top of the login modal. |
| `loginSubtitle` | `string` | No | `'Continue by signing in.'` | Subtitle text displayed below the title in the login modal. |
| `customPrimaryColor` | `string` | No | Brand color | Custom color for buttons and primary UI elements. Accepts hex (`#17a2b8`), RGB (`rgb(23, 162, 184)`), or named colors (`blue`). Overrides brand theme colors. |
| `widgetId` | `string` | No | `'auth-embedded'` | HTML element ID for the widget component. |
| `onRedirect` | `function` | No | - | Callback function triggered when user successfully authenticates. Receives `(url: string, userSession: any)`. **When provided, automatic redirect is disabled** - you control navigation. |
| `onClose` | `function` | No | - | Callback function triggered when user closes the login modal without authenticating. |
| `onLogout` | `function` | No | - | Callback function triggered when user logs out via `logout()` method. |
| `autoOpen` | `boolean` | No | `false` | If `true`, automatically opens the login modal when component mounts. |

### Props Details

#### `authority`
Controls which Keycloak environment to connect to:
- `dev` - Development environment
- `stage` - Staging environment  
- `prod` - Production environment

If omitted, the widget auto-detects based on the current domain:
- `localhost` or `127.0.0.1` → `dev`
- Domains containing `dev-` → `dev`
- Domains containing `stage-` → `stage`
- All others → `prod`

#### `customPrimaryColor`
Overrides the brand's primary color for widget UI elements. Supports multiple formats:
```tsx
// Hex with #
<LoginWidget customPrimaryColor="#17a2b8" />

// Hex without #
<LoginWidget customPrimaryColor="17a2b8" />

// RGB
<LoginWidget customPrimaryColor="rgb(23, 162, 184)" />

// Named colors
<LoginWidget customPrimaryColor="blue" />
```

#### `onRedirect`
**Important:** When this callback is provided, the widget will **NOT** automatically redirect the user. You must handle navigation:

```tsx
const handleRedirect = (url: string, userSession: any) => {
    console.log('Authenticated! Redirect URL:', url);
    console.log('User Session:', userSession);
    
    // Option 1: Navigate programmatically
    window.location.href = url;
    
    // Option 2: Use React Router
    navigate(url);
    
    // Option 3: Save session and stay on current page
    localStorage.setItem('userSession', JSON.stringify(userSession));
};
```

---

## Events

The widget dispatches three custom events. You can listen to them via:
1. **Event handlers (Recommended for React)** - Use `onRedirect`, `onClose`, `onLogout` props
2. **DOM event listeners** - Use `addEventListener` on the widget element

### Event: `redirect`

Fired when user successfully authenticates.

**Event Detail:**
```typescript
{
    url: string;              // Redirect URL (redirectUrl prop or default)
    userSession: {
        access_token: string;
        userInfo: {
            studentId: string;
            sub: string;           // User ID
            email_verified: boolean;
            x_credentials: string; // Cross-domain auth credential
            name: string;
            preferred_username: string;
            given_name: string;
            family_name: string;
            email: string;
        }
    };
    tokens: {
        access_token: string;
    };
}
```

**React Usage (Recommended):**
```tsx
<LoginWidget
    onRedirect={(url, userSession) => {
        console.log('Authenticated!', userSession);
        // Handle navigation or state update
    }}
/>
```

**DOM Event Listener:**
```tsx
useEffect(() => {
    const widget = widgetRef.current;
    widget.addEventListener('redirect', (e) => {
        console.log('Redirect event:', e.detail);
    });
}, []);
```

### Event: `close`

Fired when user closes the login modal without authenticating (clicks X button or overlay).

**Event Detail:** None (empty event)

**React Usage:**
```tsx
<LoginWidget
    onClose={() => {
        console.log('User closed login modal');
    }}
/>
```

### Event: `logout`

Fired when `logout()` method is called. Clears all authentication tokens and cookies.

**Event Detail:** None (empty event)

**React Usage:**
```tsx
<LoginWidget
    onLogout={() => {
        console.log('User logged out');
        setIsAuthenticated(false);
        setUserSession(null);
    }}
/>
```

---

## Methods

Access widget methods via React ref:

### `login()`

Opens the login modal.

```tsx
const widgetRef = useRef(null);

// Open login modal
widgetRef.current?.login();
```

### `logout()`

Logs out the user by:
1. Clearing `localStorage` tokens
2. Clearing all authentication cookies
3. Closing the login modal if open
4. Dispatching `logout` event
5. Calling `onLogout` callback if provided

```tsx
const widgetRef = useRef(null);

// Logout user
widgetRef.current?.logout();
```

---

## Complete Implementation

```tsx
import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

interface KeycloakWidgetElement extends HTMLElement {
    login: () => void;
    logout: () => void;
    addEventListener(type: 'redirect', listener: (e: CustomEvent<{ url: string; userSession: any }>) => void, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: 'close', listener: (e: CustomEvent) => void, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: 'logout', listener: (e: CustomEvent) => void, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: 'redirect', listener: (e: CustomEvent<{ url: string; userSession: any }>) => void, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: 'close', listener: (e: CustomEvent) => void, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: 'logout', listener: (e: CustomEvent) => void, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'keycloak-widget': any;
        }
    }
}

export interface LoginWidgetProps {
    // Widget configuration
    authority?: string;
    redirectUrl?: string;
    loginTitle?: string;
    loginSubtitle?: string;
    customPrimaryColor?: string;
    widgetId?: string;

    // Event handlers
    onRedirect?: (url: string, userSession: any) => void;
    onClose?: () => void;
    onLogout?: () => void;

    // Auto-open widget
    autoOpen?: boolean;
}

const LoginWidget = forwardRef<KeycloakWidgetElement, LoginWidgetProps>(({
    authority,
    redirectUrl,
    loginTitle = 'Continue to login',
    loginSubtitle = 'Continue by signing in.',
    customPrimaryColor,
    widgetId = 'auth-embedded',
    onRedirect,
    onClose,
    onLogout,
    autoOpen = false
}, ref) => {
    const widgetRef = useRef<KeycloakWidgetElement>(null);

    // Expose the widget ref to parent components
    useImperativeHandle(ref, () => widgetRef.current as KeycloakWidgetElement);

    // Load the CDN script only once
    useEffect(() => {
        // Check if script is already loaded
        const existingScript = document.querySelector('script[src="https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js"]');

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = "https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js";
            script.async = true;
            document.body.appendChild(script);
        }

        // Don't remove script on unmount to prevent re-registration
    }, []);

    // Set up event listeners
    useEffect(() => {
        const widget = widgetRef.current;
        if (widget) {
            const handleRedirect = (e: CustomEvent) => {
                const { url, userSession } = e.detail;
                console.log('Redirect event received:', { url, userSession });
                onRedirect?.(url, userSession);
            };

            const handleClose = () => {
                onClose?.();
            };

            const handleLogout = () => {
                onLogout?.();
            };

            widget.addEventListener('redirect', handleRedirect);
            widget.addEventListener('close', handleClose);
            widget.addEventListener('logout', handleLogout);

            return () => {
                widget.removeEventListener('redirect', handleRedirect);
                widget.removeEventListener('close', handleClose);
                widget.removeEventListener('logout', handleLogout);
            };
        }
    }, [onRedirect, onClose, onLogout]);

    // Auto-open widget if configured
    useEffect(() => {
        if (autoOpen && widgetRef.current) {
            setTimeout(() => {
                widgetRef.current?.login();
            }, 500);
        }
    }, [autoOpen]);

    return (
        <keycloak-widget
            ref={widgetRef}
            id={widgetId}
            authority={authority}
            redirectUrl={redirectUrl}
            login-title={loginTitle}
            login-subtitle={loginSubtitle}
            customPrimaryColor={customPrimaryColor}
        />
    );
});

---

## Complete Implementation

### Full Example with State Management

```tsx
import React, { useState, useRef, useEffect } from 'react';
import LoginWidget from './LoginWidget';

function App() {
    const widgetRef = useRef(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userSession, setUserSession] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        const storedSession = localStorage.getItem('userSession');
        if (storedSession) {
            try {
                const session = JSON.parse(storedSession);
                setUserSession(session);
                setIsAuthenticated(true);
            } catch (e) {
                console.error('Failed to parse stored session');
                localStorage.removeItem('userSession');
            }
        }
        setLoading(false);
    }, []);

    const handleRedirect = (url: string, userSession: any) => {
        console.log('User authenticated:', userSession);
        
        // Save session to localStorage
        localStorage.setItem('userSession', JSON.stringify(userSession));
        
        // Update state
        setUserSession(userSession);
        setIsAuthenticated(true);
        
        // Option 1: Navigate to redirect URL
        // window.location.href = url;
        
        // Option 2: Stay on current page
        console.log('User authenticated, staying on current page');
    };

    const handleClose = () => {
        console.log('Login widget closed without authentication');
    };

    const handleLogout = () => {
        console.log('User logged out');
        
        // Clear session from localStorage
        localStorage.removeItem('userSession');
        
        // Update state
        setUserSession(null);
        setIsAuthenticated(false);
    };

    const openLogin = () => {
        widgetRef.current?.login();
    };

    const doLogout = () => {
        widgetRef.current?.logout();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="app">
            <header className="header">
                <h1>My Application</h1>
                {isAuthenticated ? (
                    <div className="user-menu">
                        <span>Welcome, {userSession?.userInfo?.name || userSession?.userInfo?.email}!</span>
                        <button onClick={doLogout} className="btn-logout">
                            Logout
                        </button>
                    </div>
                ) : (
                    <button onClick={openLogin} className="btn-login">
                        Login
                    </button>
                )}
            </header>

            <main className="main-content">
                {isAuthenticated ? (
                    <div className="dashboard">
                        <h2>Dashboard</h2>
                        <div className="user-details">
                            <h3>User Information:</h3>
                            <ul>
                                <li><strong>Name:</strong> {userSession?.userInfo?.name}</li>
                                <li><strong>Email:</strong> {userSession?.userInfo?.email}</li>
                                <li><strong>Username:</strong> {userSession?.userInfo?.preferred_username}</li>
                                <li><strong>Student ID:</strong> {userSession?.userInfo?.studentId}</li>
                            </ul>
                        </div>
                        
                        <div className="tokens">
                            <h3>Session Tokens:</h3>
                            <pre>{JSON.stringify(userSession, null, 2)}</pre>
                        </div>
                    </div>
                ) : (
                    <div className="welcome">
                        <h2>Welcome!</h2>
                        <p>Please login to access your account.</p>
                        <button onClick={openLogin} className="btn-primary">
                            Get Started
                        </button>
                    </div>
                )}
            </main>

            <LoginWidget
                ref={widgetRef}
                authority="dev"
                redirectUrl={window.location.origin}
                loginTitle="Welcome Back"
                loginSubtitle="Sign in to access your account"
                customPrimaryColor="#17a2b8"
                onRedirect={handleRedirect}
                onClose={handleClose}
                onLogout={handleLogout}
            />
        </div>
    );
}

export default App;
```

---

## TypeScript Setup

### Option 1: Global Type Declaration

Create or update `src/vite-env.d.ts`:

```typescript
/// <reference types="vite/client" />

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'keycloak-widget': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & {
                    ref?: React.Ref<any>;
                    authority?: string;
                    redirectUrl?: string;
                    'login-title'?: string;
                    'login-subtitle'?: string;
                    customPrimaryColor?: string;
                },
                HTMLElement
            >;
        }
    }
}

export {};
```

### Option 2: Component-Level Declaration

Add at the top of `LoginWidget.tsx`:

```typescript
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'keycloak-widget': any;
        }
    }
}
```

---

## Usage Examples

### Example 1: Auto-Open on Mount

```tsx
<LoginWidget
    ref={widgetRef}
    authority="dev"
    redirectUrl={window.location.origin}
    autoOpen={true}  // Opens automatically when component mounts
    onRedirect={handleRedirect}
/>
```

### Example 2: Protected Route

```tsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const widgetRef = useRef(null);

    useEffect(() => {
        const session = localStorage.getItem('userSession');
        if (!session) {
            // Open login if not authenticated
            setTimeout(() => widgetRef.current?.login(), 100);
        } else {
            setIsAuthenticated(true);
        }
    }, []);

    if (!isAuthenticated) {
        return (
            <LoginWidget
                ref={widgetRef}
                authority="prod"
                autoOpen={true}
                onRedirect={() => setIsAuthenticated(true)}
            />
        );
    }

    return children;
}

// Usage
<ProtectedRoute>
    <Dashboard />
</ProtectedRoute>
```

### Example 3: Custom Branding

```tsx
<LoginWidget
    ref={widgetRef}
    authority="prod"
    redirectUrl="https://myapp.com/dashboard"
    loginTitle="Welcome to MyApp"
    loginSubtitle="Access your personalized learning dashboard"
    customPrimaryColor="#FF6B6B"  // Custom red color
    onRedirect={handleRedirect}
/>
```

### Example 4: Session Persistence

```tsx
function App() {
    const widgetRef = useRef(null);
    const [user, setUser] = useState(null);

    // Load session on mount
    useEffect(() => {
        const session = localStorage.getItem('userSession');
        if (session) {
            const parsed = JSON.parse(session);
            // Check if token is still valid
            const tokenExpiry = parsed.userInfo?.exp * 1000;
            if (tokenExpiry > Date.now()) {
                setUser(parsed);
            } else {
                // Token expired, clear storage
                localStorage.removeItem('userSession');
            }
        }
    }, []);

    const handleRedirect = (url, userSession) => {
        // Save with timestamp
        const sessionWithTimestamp = {
            ...userSession,
            savedAt: Date.now()
        };
        localStorage.setItem('userSession', JSON.stringify(sessionWithTimestamp));
        setUser(userSession);
    };

    const handleLogout = () => {
        localStorage.removeItem('userSession');
        setUser(null);
    };

    return (
        <>
            {user ? (
                <div>
                    <p>Welcome back, {user.userInfo.name}!</p>
                    <button onClick={() => widgetRef.current?.logout()}>
                        Logout
                    </button>
                </div>
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
        </>
    );
}
```

### Example 5: Multiple Environments

```tsx
const ENVIRONMENTS = {
    development: 'dev',
    staging: 'stage',
    production: 'prod'
};

const currentEnv = process.env.NODE_ENV || 'development';

<LoginWidget
    authority={ENVIRONMENTS[currentEnv]}
    redirectUrl={process.env.REACT_APP_REDIRECT_URL}
    customPrimaryColor={process.env.REACT_APP_PRIMARY_COLOR}
    onRedirect={handleRedirect}
/>
```

---

## Environment URLs

Update the CDN URL based on your environment:

### Development
```tsx
script.src = "https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js";
```

### Staging
```tsx
script.src = "https://stage-iam-widget.colibrilearning.com/keycloak-widget.umd.js";
```

### Production
```tsx
script.src = "https://iam-widget.colibrilearning.com/keycloak-widget.umd.js";
```

**Recommendation:** Use an environment variable:

```tsx
const CDN_URL = process.env.REACT_APP_WIDGET_CDN_URL || 
    "https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js";

const script = document.createElement('script');
script.src = CDN_URL;
```

---

## Troubleshooting

### Issue: Widget doesn't appear

**Possible causes:**
1. Script not loaded yet
2. Custom element not defined
3. Widget element not in DOM

**Solutions:**
```tsx
// Add error handling to script loading
useEffect(() => {
    const existingScript = document.querySelector('script[src*="keycloak-widget"]');
    
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = CDN_URL;
        script.async = true;
        
        script.onload = () => {
            console.log('Widget script loaded successfully');
        };
        
        script.onerror = () => {
            console.error('Failed to load widget script');
        };
        
        document.body.appendChild(script);
    }
}, []);
```

### Issue: "Duplicate custom element" error

**Cause:** Script loaded multiple times, trying to register `<keycloak-widget>` again.

**Solution:** Check if element is already defined:

```tsx
useEffect(() => {
    // Only load if not already defined
    if (!customElements.get('keycloak-widget')) {
        const script = document.createElement('script');
        script.src = CDN_URL;
        document.body.appendChild(script);
    }
}, []);
```

### Issue: TypeScript errors on `keycloak-widget`

**Cause:** TypeScript doesn't recognize custom elements.

**Solution:** Add global declaration (see [TypeScript Setup](#typescript-setup))

### Issue: Event listeners not firing

**Cause:** Listeners attached before widget element mounted.

**Solution:** Wait for widget to mount:

```tsx
useEffect(() => {
    const widget = widgetRef.current;
    if (!widget) return;  // Exit if not mounted yet
    
    const handleRedirect = (e: CustomEvent) => {
        console.log('Event received:', e.detail);
    };
    
    widget.addEventListener('redirect', handleRedirect);
    
    return () => {
        widget.removeEventListener('redirect', handleRedirect);
    };
}, []);  // Empty deps = run once after mount
```

### Issue: `login()` method not working

**Cause:** Called before widget mounted or ref not set.

**Solution:** Add null check:

```tsx
const openLogin = () => {
    if (widgetRef.current) {
        widgetRef.current.login();
    } else {
        console.error('Widget not mounted yet');
    }
};
```

### Issue: Auto-redirect not working

**Cause:** `onRedirect` callback provided (disables auto-redirect by design).

**Solution:** Either:
1. Remove `onRedirect` to enable auto-redirect
2. Manually handle navigation in `onRedirect`:

```tsx
const handleRedirect = (url, userSession) => {
    console.log('Redirecting to:', url);
    window.location.href = url;  // Manual redirect
};
```

### Issue: Styles not applied / widget looks unstyled

**Cause:** Shadow DOM isolation preventing styles from loading.

**Solution:** This is handled automatically by the widget. If issues persist:
1. Check browser console for CSS injection errors
2. Verify widget script loaded completely
3. Check if `window.injectWidgetStyles` function exists

---

## Best Practices

1. **Single Widget Instance**
   - Use only one `<LoginWidget>` per page
   - Reuse the same instance across components via context/state

2. **Session Management**
   - Store tokens securely (HttpOnly cookies preferred)
   - Validate token expiry before using
   - Clear session on logout

3. **Error Handling**
   - Always provide `onClose` to handle user cancellation
   - Log authentication errors for debugging
   - Show user-friendly error messages

4. **Performance**
   - Load CDN script once (checked in component)
   - Lazy load widget component if not needed immediately
   - Cache user session to avoid redundant logins

5. **Security**
   - Use HTTPS for `redirectUrl`
   - Validate tokens server-side
   - Don't store sensitive data in localStorage (use httpOnly cookies)
   - Clear session data on logout

6. **Testing**
   - Test with different browsers
   - Verify mobile responsiveness
   - Test logout flow thoroughly
   - Test network failure scenarios

---

## Migration from NPM Package

If you're switching from NPM package to CDN:

**Before (NPM):**
```tsx
import '@colibri/identity-widget';

<keycloak-widget
    authority="dev"
    redirectUrl={url}
/>
```

**After (CDN with wrapper):**
```tsx
import LoginWidget from './LoginWidget';

<LoginWidget
    authority="dev"
    redirectUrl={url}
    onRedirect={handleRedirect}
/>
```

**Key Differences:**
- CDN version loads script dynamically
- Wrapper component provides React-friendly API
- Event handlers use props instead of addEventListener
- Better TypeScript support with wrapper

---

## Support

For issues or questions:
- Check widget console logs (start with `[Widget]`)
- Verify CDN script loaded in Network tab
- Check browser console for errors
- Review this documentation

**Common Log Messages:**
- `[Widget] login() called` - Login method invoked
- `[Widget] Rendering with props` - Widget rendering with current props
- `[Widget] Redirect event dispatched` - Authentication successful
- `[Widget] Applying custom primary color` - Custom color applied

```tsx
import React, { useState, useRef } from 'react';
import LoginWidget from './LoginWidget';

function App() {
    const widgetRef = useRef(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userSession, setUserSession] = useState(null);

    const handleRedirect = (url: string, userSession: any) => {
        console.log('User authenticated:', userSession);
        setUserSession(userSession);
        setIsAuthenticated(true);
        
        // Optional: Navigate to the redirect URL
        // window.location.href = url;
    };

    const handleClose = () => {
        console.log('Login widget closed');
    };

    const handleLogout = () => {
        console.log('User logged out');
        setIsAuthenticated(false);
        setUserSession(null);
    };

    const openLogin = () => {
        widgetRef.current?.login();
    };

    const doLogout = () => {
        widgetRef.current?.logout();
    };

    return (
        <div className="app">
            <h1>My Application</h1>
            
            {isAuthenticated ? (
                <div>
                    <p>Welcome, {userSession?.userInfo?.name}!</p>
                    <button onClick={doLogout}>Logout</button>
                </div>
            ) : (
                <button onClick={openLogin}>Login</button>
            )}

            <LoginWidget
                ref={widgetRef}
                authority="dev"
                redirectUrl={window.location.origin}
                loginTitle="Welcome Back"
                loginSubtitle="Sign in to continue"
                customPrimaryColor="#17a2b8"
                onRedirect={handleRedirect}
                onClose={handleClose}
                onLogout={handleLogout}
            />
        </div>
    );
}

export default App;
```

### Step 3: Auto-Open on Mount (Optional)

```tsx
<LoginWidget
    ref={widgetRef}
    authority="dev"
    redirectUrl={window.location.origin}
    autoOpen={true}  // Widget opens automatically on component mount
    onRedirect={handleRedirect}
    onClose={handleClose}
    onLogout={handleLogout}
/>
```

## Key Features

- ✅ **Single script load** - Prevents duplicate custom element registration
- ✅ **Full TypeScript support** - Proper typing for all methods and events
- ✅ **React-friendly event handlers** - Use props instead of addEventListener
- ✅ **Forwarded ref** - Access imperative methods (login/logout)
- ✅ **Auto-open capability** - Open widget automatically on mount
- ✅ **Reusable** - Use across your entire application
- ✅ **No NPM installation** - Pure CDN-based solution

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `authority` | `string` | - | Environment: `dev`, `prod`, etc. |
| `redirectUrl` | `string` | - | URL to redirect after login |
| `loginTitle` | `string` | `'Continue to login'` | Title displayed in login form |
| `loginSubtitle` | `string` | `'Continue by signing in.'` | Subtitle in login form |
| `customPrimaryColor` | `string` | - | Custom brand color (hex, RGB, or named) |
| `widgetId` | `string` | `'auth-embedded'` | HTML element ID |
| `onRedirect` | `function` | - | Callback when user logs in successfully |
| `onClose` | `function` | - | Callback when widget is closed |
| `onLogout` | `function` | - | Callback when user logs out |
| `autoOpen` | `boolean` | `false` | Auto-open widget on mount |

## Imperative Methods

Access these methods via ref:

```tsx
const widgetRef = useRef(null);

// Open login form
widgetRef.current?.login();

// Logout user
widgetRef.current?.logout();
```

## Environment URLs

Update the CDN URL based on your environment:

**Development:**
```tsx
script.src = "https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js";
```

**Production:**
```tsx
script.src = "https://iam-widget.colibrilearning.com/keycloak-widget.umd.js";
```

## Complete Example with State Management

```tsx
import React, { useState, useRef, useEffect } from 'react';
import LoginWidget from './LoginWidget';

function App() {
    const widgetRef = useRef(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userSession, setUserSession] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        const storedSession = localStorage.getItem('userSession');
        if (storedSession) {
            setUserSession(JSON.parse(storedSession));
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const handleRedirect = (url: string, userSession: any) => {
        console.log('User authenticated:', userSession);
        
        // Save session
        localStorage.setItem('userSession', JSON.stringify(userSession));
        setUserSession(userSession);
        setIsAuthenticated(true);
        
        // Optional: Navigate programmatically
        // window.location.href = url;
    };

    const handleClose = () => {
        console.log('Login widget closed');
    };

    const handleLogout = () => {
        console.log('User logged out');
        
        // Clear session
        localStorage.removeItem('userSession');
        setUserSession(null);
        setIsAuthenticated(false);
    };

    const openLogin = () => {
        widgetRef.current?.login();
    };

    const doLogout = () => {
        widgetRef.current?.logout();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="app">
            <header>
                <h1>My Application</h1>
                {isAuthenticated ? (
                    <div className="user-menu">
                        <span>Welcome, {userSession?.userInfo?.name || 'User'}!</span>
                        <button onClick={doLogout}>Logout</button>
                    </div>
                ) : (
                    <button onClick={openLogin}>Login</button>
                )}
            </header>

            <main>
                {isAuthenticated ? (
                    <div>
                        <h2>Dashboard</h2>
                        <pre>{JSON.stringify(userSession, null, 2)}</pre>
                    </div>
                ) : (
                    <div>
                        <h2>Please login to continue</h2>
                    </div>
                )}
            </main>

            <LoginWidget
                ref={widgetRef}
                authority="dev"
                redirectUrl={window.location.origin}
                loginTitle="Welcome Back"
                loginSubtitle="Sign in to access your account"
                customPrimaryColor="#17a2b8"
                onRedirect={handleRedirect}
                onClose={handleClose}
                onLogout={handleLogout}
            />
        </div>
    );
}

export default App;
```

## Troubleshooting

### Script Loading Issues

If the widget doesn't appear, check:

1. Console for "duplicate custom element" errors
2. Script loaded successfully in Network tab
3. Widget element exists in DOM

### TypeScript Errors

If you get TypeScript errors about `keycloak-widget`, ensure the global declaration is in your type definitions file or at the top of your component file.

### Event Listeners Not Firing

Make sure event listeners are attached after the widget element is mounted:

```tsx
useEffect(() => {
    const widget = widgetRef.current;
    if (widget) {
        // Attach listeners here
    }
}, []); // Empty dependency array ensures this runs after mount
```
