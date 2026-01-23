# Colibri Identity Widget

A reusable authentication widget for Colibri Identity platform. Available as both NPM package and CDN script.

---

## 📦 NPM Installation & Usage

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

**Option 1: From NPM Registry**
```bash
npm install @colibri/identity-widget
```

**Option 2: From Local Package (for testing)**
```bash
# Install from .tgz file
npm install ../path/to/colibri-identity-widget-1.0.0.tgz

# Or use absolute path
npm install D:/Users/Manoj.Ponugoti/Videos/PROJECTS/Colibri.Identity.Widget/colibri-identity-widget-1.0.0.tgz
```

**Option 3: From AWS CodeArtifact (private registry)**
```bash
# Login to CodeArtifact first
aws codeartifact login --tool npm --domain colibri --repository identity-widgets --region us-east-1

# Then install
npm install @colibri/identity-widget
```

### Usage in React/TypeScript Projects

**Complete Working Example (Copy & Paste Ready)**

```tsx
import { useRef, useEffect, useState } from 'react';
import '@colibri/identity-widget';

// TypeScript declaration for the custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'keycloak-widget': any;
    }
  }
}

interface WidgetElement extends HTMLElement {
  onRedirect?: (url: string, userSession?: any) => void;
  onClose?: () => void;
  onLogout?: () => void;
  login: () => void;
  logout: () => void;
}

function App() {
  const widgetRef = useRef<WidgetElement>(null);
  const [showWidget, setShowWidget] = useState(false);
  const [userSession, setUserSession] = useState<any>(null);

  const handleRedirect = (url: string, userSession: any) => {
    console.log('User authenticated:', userSession);
    console.log('Redirect URL:', url);
    setUserSession(userSession);
    setShowWidget(false);
    // Handle redirect or save user session
    // Note: Auto-redirect is disabled when using function props
    // You control the navigation
  };

  const handleClose = () => {
    console.log('Login form closed');
    setShowWidget(false);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setUserSession(null);
  };

  // Set function props on the widget element after mount
  useEffect(() => {
    const widget = widgetRef.current;
    if (widget) {
      widget.onRedirect = handleRedirect;
      widget.onClose = handleClose;
      widget.onLogout = handleLogout;
    }
  }, []);

  const handleLogin = () => {
    setShowWidget(true);
    setTimeout(() => {
      widgetRef.current?.login();
    }, 100);
  };

  const handleLogoutClick = () => {
    widgetRef.current?.logout();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#111827' }}>
          Colibri Identity Widget Test
        </h1>

        {/* User Status */}
        <div style={{ 
          background: 'white', 
          borderRadius: '0.5rem', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
          padding: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>User Status</h2>
          {userSession ? (
            <div>
              <p style={{ color: '#059669', fontWeight: '500', marginBottom: '0.5rem' }}>✓ Authenticated</p>
              <pre style={{ 
                background: '#f9fafb', 
                padding: '1rem', 
                borderRadius: '0.25rem', 
                overflow: 'auto',
                fontSize: '0.875rem',
                marginBottom: '1rem'
              }}>
                {JSON.stringify(userSession, null, 2)}
              </pre>
              <button 
                onClick={handleLogoutClick}
                style={{
                  padding: '0.5rem 1rem',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <p style={{ color: '#6b7280' }}>Not authenticated</p>
          )}
        </div>

        {/* Widget Controls */}
        <div style={{ 
          background: 'white', 
          borderRadius: '0.5rem', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
          padding: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Widget Controls</h2>
          <button 
            onClick={handleLogin}
            disabled={showWidget || !!userSession}
            style={{
              padding: '0.75rem 1.5rem',
              background: (showWidget || userSession) ? '#9ca3af' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: (showWidget || userSession) ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              fontWeight: '500'
            }}
          >
            Open Login Widget
          </button>
        </div>

        {/* Configuration Info */}
        <div style={{ 
          background: 'white', 
          borderRadius: '0.5rem', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
          padding: '1.5rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Configuration</h2>
          <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '0.25rem' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Authority:</strong> dev</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Subsidiary:</strong> elite</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Callback URL:</strong> {window.location.origin}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Widget Component */}
      <keycloak-widget
        ref={widgetRef}
        authority="dev"
        subsidiary="elite"
        callbackUrl={window.location.origin}
        show-login={showWidget ? "true" : "false"}
      />
    </div>
  );
}

export default App;
```

**Minimal Example (Just the Basics)**

```tsx
import { useRef, useEffect } from 'react';
import '@colibri/identity-widget';

function App() {
  const widgetRef = useRef<any>(null);

  const handleRedirect = (url: string, userSession: any) => {
    console.log('User authenticated:', userSession);
    // Handle your authentication logic here
  };

  useEffect(() => {
    const widget = widgetRef.current;
    if (widget) {
      widget.onRedirect = handleRedirect;
    }
  }, []);

  return (
    <div>
      <button onClick={() => widgetRef.current?.login()}>Login</button>
      
      <keycloak-widget
        ref={widgetRef}
        authority="dev"
        subsidiary="elite"
        callbackUrl={window.location.origin}
      />
    </div>
  );
}

export default App;
```

**Alternative: Using Event Listeners**

If you prefer event-driven approach instead of function props:

```tsx
import { useEffect, useRef } from 'react';
import '@colibri/identity-widget';

function App() {
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    const widget = widgetRef.current;
    
    if (widget) {
      // Listen for successful login
      widget.addEventListener('redirect', (e: any) => {
        console.log('User authenticated:', e.detail);
        // Handle redirect or save user session
      });

      // Listen for logout
      widget.addEventListener('logout', () => {
        console.log('User logged out');
      });

      // Listen for close
      widget.addEventListener('close', () => {
        console.log('Login form closed');
      });
    }
  }, []);

  const handleLogin = () => {
    widgetRef.current?.login();
  };

  const handleLogout = () => {
    widgetRef.current?.logout();
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      
      <keycloak-widget
        ref={widgetRef}
        authority="dev"
        subsidiary="elite"
        callbackUrl={window.location.origin}
      />
    </div>
  );
}

export default App;
```

### TypeScript Support

Create `src/vite-env.d.ts`:

```typescript
/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'keycloak-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        ref?: React.Ref<KeycloakWidgetElement>;
        authority?: string;
        subsidiary?: string;
        callbackUrl?: string;
        redirectUrl?: string;
        isShowToggle?: string;
        loginTitle?: string;
        loginSubtitle?: string;
        'show-login'?: string;
        // Function props for React/NPM usage
        onRedirect?: (url: string, userSession?: any) => void;
        onClose?: () => void;
        onLogout?: () => void;
      }, HTMLElement>;
    }
  }

  interface KeycloakWidgetElement extends HTMLElement {
    login(): void;
    logout(): void;
    // Function props
    onRedirect?: (url: string, userSession?: any) => void;
    onClose?: () => void;
    onLogout?: () => void;
  }
}

export {};
```

**Note:** When using function props (`onRedirect`, `onClose`, `onLogout`):
- The automatic redirect behavior is disabled for `onRedirect` - you control the navigation
- Events are still dispatched for backward compatibility
- Function props provide a more React-friendly API

---

## 🌐 CDN Usage

### Basic HTML Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Colibri Identity Widget - CDN Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    button {
      padding: 12px 24px;
      font-size: 16px;
      background-color: #17a2b8;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin: 5px;
    }
    button:hover {
      background-color: #138496;
    }
    .status {
      margin-top: 20px;
      padding: 15px;
      border-radius: 8px;
      background-color: #f0f0f0;
    }
  </style>
</head>
<body>
  <h1>Colibri Identity Widget Demo</h1>
  
  <div>
    <button id="loginBtn">Login</button>
    <button id="logoutBtn">Logout</button>
  </div>

  <div class="status">
    <h3>Status:</h3>
    <p id="status">Not authenticated</p>
    <div id="userInfo" style="display:none;">
      <p><strong>Name:</strong> <span id="userName"></span></p>
      <p><strong>Email:</strong> <span id="userEmail"></span></p>
    </div>
  </div>

  <!-- Widget Component -->
  <keycloak-widget 
    id="auth-widget"
    authority="dev" 
    subsidiary="elite"
    callbackUrl="http://localhost:8080/"
    login-title="Welcome Back"
    login-subtitle="Sign in to continue"
  ></keycloak-widget>

  <!-- Load Widget Script -->
  <script src="https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js"></script>

  <script>
    const widget = document.getElementById('auth-widget');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const statusEl = document.getElementById('status');
    const userInfoEl = document.getElementById('userInfo');
    const userNameEl = document.getElementById('userName');
    const userEmailEl = document.getElementById('userEmail');

    // Open login form
    loginBtn.addEventListener('click', () => {
      if (widget && widget.login) {
        widget.login();
      }
    });

    // Logout
    logoutBtn.addEventListener('click', () => {
      if (widget && widget.logout) {
        widget.logout();
      }
    });

    // Listen for successful login
    widget.addEventListener('redirect', (e) => {
      console.log('Authentication successful:', e.detail);
      
      const userSession = e.detail.userSession;
      if (userSession && userSession.userInfo) {
        statusEl.textContent = 'Authenticated';
        statusEl.style.color = 'green';
        userNameEl.textContent = userSession.userInfo.name || 'N/A';
        userEmailEl.textContent = userSession.userInfo.email || 'N/A';
        userInfoEl.style.display = 'block';
      }
    });

    // Listen for close event
    widget.addEventListener('close', () => {
      console.log('Login form closed');
    });

    // Listen for logout event
    widget.addEventListener('logout', () => {
      console.log('User logged out');
      statusEl.textContent = 'Not authenticated';
      statusEl.style.color = 'red';
      userInfoEl.style.display = 'none';
    });
  </script>
</body>
</html>
```

### CDN with Automatic Redirect

```html
<!DOCTYPE html>
<html>
<head>
  <title>Auto-Redirect Example</title>
</head>
<body>
  <h1>Login Required</h1>
  <button id="loginBtn">Sign In</button>

  <keycloak-widget 
    id="auth"
    authority="dev"
    subsidiary="elite"
    callbackUrl="https://myapp.com/callback"
    redirectUrl="https://myapp.com/dashboard"
  ></keycloak-widget>

  <script src="https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js"></script>
  
  <script>
    const widget = document.getElementById('auth');
    
    document.getElementById('loginBtn').addEventListener('click', () => {
      widget.login();
    });

    // Auto-redirect after successful login
    widget.addEventListener('redirect', (e) => {
      console.log('Redirecting to:', e.detail.url);
      window.location.href = e.detail.url;
    });
  </script>
</body>
</html>
```

### CDN Widget Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `authority` | string | Yes | Environment: `dev`, `stage`, `prod` |
| `subsidiary` | string | Yes | Brand: `elite`, `allied`, etc. |
| `callbackUrl` | string | Yes | URL to return to after authentication |
| `redirectUrl` | string | No | URL to redirect after successful login |
| `login-title` | string | No | Custom login modal title |
| `login-subtitle` | string | No | Custom login modal subtitle |
| `show-login` | string | No | `"true"` to show login form on load |

### CDN Widget Methods

```javascript
const widget = document.getElementById('auth-widget');

// Open login form
widget.login();

// Logout user
widget.logout();
```

### CDN Widget Events

```javascript
// Successful authentication
widget.addEventListener('redirect', (e) => {
  console.log('URL:', e.detail.url);
  console.log('User Session:', e.detail.userSession);
  console.log('Access Token:', e.detail.userSession.access_token);
  console.log('User Info:', e.detail.userSession.userInfo);
});

// Login form closed
widget.addEventListener('close', () => {
  console.log('User closed the login form');
});

// User logged out
widget.addEventListener('logout', () => {
  console.log('User has been logged out');
});
```

---

## 🔧 Development & Publishing

### Making Changes

1. **Create a feature branch**

```bash
git checkout -b CORES_ISSUE_UST_123
```

2. **Make your code changes**

Edit files in `src/` directory

3. **Test locally**

```bash
npm run dev
```

4. **Build the widget**

```bash
npm run build
```

5. **Update version in package.json**

**Option 1: Using npm version (Automatic - Recommended)**

This command automatically:
- Updates version in `package.json`
- Creates a git commit with message "v1.0.1"
- Creates a git tag (e.g., `v1.0.1`)

```bash
# Patch version (1.0.0 → 1.0.1) - For bug fixes
npm version patch

# Minor version (1.0.0 → 1.1.0) - For new features (backward compatible)
npm version minor

# Major version (1.0.0 → 2.0.0) - For breaking changes
npm version major
```

**Example Output:**
```bash
# Before: package.json shows "version": "1.0.0"
$ npm version patch
v1.0.1

# After: package.json updated to "version": "1.0.1"
# Git commit created: "v1.0.1"
# Git tag created: "v1.0.1"
```

**Custom Version:**
```bash
# Set specific version
npm version 1.2.3

# Pre-release versions
npm version 1.0.0-alpha.1
npm version 1.0.0-beta.2
```

**Option 2: Manual Update**

```bash
# 1. Edit package.json manually
# Change: "version": "1.0.0" to "version": "1.0.1"

# 2. Commit the change
git add package.json
git commit -m "UPDATE(UST_123): Bump version to 1.0.1"

# 3. Create tag manually (see step 6)
```

**When to use which:**
- ✅ Use `npm version` - Faster, automatic, less error-prone
- ⚠️ Manual update - Only when you need custom commit message

---

6. **Push version and tag to GitHub**

After running `npm version`, you need to push both the commit and the tag:

```bash
# Push the version commit
git push origin main

# Push the tag
git push origin v1.0.1

# OR push all tags at once
git push --tags
```

**Complete Example:**
```bash
# Update version
$ npm version patch
v1.0.1

# Push to GitHub
$ git push origin main
Counting objects: 1, done.
Writing objects: 100% (1/1), 245 bytes | 245.00 KiB/s, done.
To github.com:yourorg/Colibri.Identity.Widget.git
   abc1234..def5678  main -> main

# Push the tag
$ git push origin v1.0.1
Counting objects: 1, done.
Writing objects: 100% (1/1), 160 bytes | 160.00 KiB/s, done.
To github.com:yourorg/Colibri.Identity.Widget.git
 * [new tag]         v1.0.1 -> v1.0.1
```

**Push Multiple Tags:**
```bash
# If you have multiple tags to push
git push --tags

# Or push everything (commits + tags)
git push --follow-tags
```

---

7. **Creating and Managing Git Tags (Manual Method)**

If you didn't use `npm version`, create tags manually:

**Create Annotated Tag (Recommended):**
```bash
# Create tag with message
git tag -a v1.0.1 -m "Release version 1.0.1 - Bug fixes for login flow"

# Push the tag
git push origin v1.0.1
```

**Create Lightweight Tag:**
```bash
# Create simple tag
git tag v1.0.1

# Push the tag
git push origin v1.0.1
```

**View All Tags:**
```bash
# List all tags
git tag

# List tags with pattern
git tag -l "v1.0.*"

# Show tag details
git show v1.0.1
```

**Delete Tag (if mistake):**
```bash
# Delete local tag
git tag -d v1.0.1

# Delete remote tag
git push origin :refs/tags/v1.0.1

# OR (newer syntax)
git push origin --delete v1.0.1
```

**Create Tag for Older Commit:**
```bash
# Find commit hash
git log --oneline

# Create tag for specific commit
git tag -a v1.0.0 abc1234 -m "Retroactive tag for initial release"

# Push the tag
git push origin v1.0.0
```

8. **Create package tarball (for local testing)**

```bash
npm pack
```

This creates `colibri-identity-widget-<version>.tgz`

**When to use npm pack:**
- ✅ Testing widget in another project locally before publishing
- ✅ Sharing widget with teammates without publishing to registry
- ✅ Verifying package contents before publishing
- ✅ Creating a backup of the package

**Example:**
```bash
# After building
npm run build
npm pack
# Output: colibri-identity-widget-1.0.0.tgz

# Now you can install it in another project:
cd ../my-test-app
npm install ../Colibri.Identity.Widget/colibri-identity-widget-1.0.0.tgz
```

---

## 📤 Publishing to AWS CodeArtifact

### Prerequisites

- AWS CLI configured with proper credentials
- Access to CodeArtifact repository

### Configure NPM for CodeArtifact

```bash
# Login to CodeArtifact
aws codeartifact login --tool npm --domain colibri --repository identity-widgets --region us-east-1

# This sets up your .npmrc file automatically
```

### Publish Package

```bash
# 1. Build the package
npm run build

# 2. Create package tarball (optional - for verification)
npm pack

# 3. Publish to CodeArtifact
npm publish
```

**What happens:**
- `npm run build` - Compiles TypeScript and bundles the widget
- `npm pack` - Creates `.tgz` file (useful for testing before publishing)
- `npm publish` - Uploads package to AWS CodeArtifact registry

### Verify Publication

```bash
# List package versions
aws codeartifact list-package-versions \
  --domain colibri \
  --repository identity-widgets \
  --package @colibri/identity-widget \
  --format npm \
  --region us-east-1
```

### Install from CodeArtifact (Other Projects)

```bash
# Configure npm to use CodeArtifact
aws codeartifact login --tool npm --domain colibri --repository identity-widgets --region us-east-1

# Install the package
npm install @colibri/identity-widget
```

---

## 📝 Git Commit Conventions

### Commit Message Format

```
<TYPE>(TICKET_ID): <description>
```

### Commit Types

**For Updates/Features:**
```bash
git commit -m "UPDATE(UST_123): Add Remember Me functionality to login form"
git commit -m "UPDATE(UST_124): Implement auto-login with refresh token"
```

**For Bug Fixes:**
```bash
git commit -m "FIX(UST_125): Resolve TypeScript error in widget component"
git commit -m "FIX(UST_126): Fix modal rendering issue in Safari"
```

**For Documentation:**
```bash
git commit -m "DOC(UST_127): Update README with CDN usage examples"
```

**For Refactoring:**
```bash
git commit -m "REFACTOR(UST_128): Simplify authentication flow logic"
```

**For Chores:**
```bash
git commit -m "CHORE(UST_129): Update dependencies to latest versions"
```

---

## 🏷️ Git Tagging & Version Management

### Understanding Semantic Versioning

Format: `MAJOR.MINOR.PATCH` (e.g., `1.2.3`)

- **MAJOR** (1.x.x) - Breaking changes that require code changes in consuming apps
- **MINOR** (x.1.x) - New features that are backward compatible
- **PATCH** (x.x.1) - Bug fixes and minor improvements

**Examples:**
```bash
1.0.0 → 1.0.1  # Fixed login button styling (PATCH)
1.0.1 → 1.1.0  # Added Remember Me feature (MINOR)
1.1.0 → 2.0.0  # Changed authentication API (MAJOR - breaking)
```

### Using npm version (Recommended)

**Automatic Version Update + Git Tag:**

```bash
# Patch: Bug fixes (1.0.0 → 1.0.1)
npm version patch

# Minor: New features (1.0.0 → 1.1.0)
npm version minor

# Major: Breaking changes (1.0.0 → 2.0.0)
npm version major
```

**What `npm version` does automatically:**
1. ✅ Updates `package.json` version field
2. ✅ Creates a git commit with message like "v1.0.1"
3. ✅ Creates a git tag named "v1.0.1"

**Example:**
```bash
$ cat package.json | grep version
  "version": "1.0.0",

$ npm version patch
v1.0.1

$ cat package.json | grep version
  "version": "1.0.1",

$ git log --oneline -1
abc1234 (HEAD -> main, tag: v1.0.1) v1.0.1

$ git tag
v1.0.0
v1.0.1
```

### Pushing Tags to GitHub

**Push Single Tag:**
```bash
# After npm version patch creates v1.0.1 tag
git push origin v1.0.1
```

**Push All Tags:**
```bash
git push --tags
```

**Push Commits and Tags Together:**
```bash
# Push version commit
git push origin main

# Then push tag
git push origin v1.0.1

# OR push both at once
git push --follow-tags
```

**Complete Example:**
```bash
# 1. Update version (creates commit + tag locally)
$ npm version patch
v1.0.1

# 2. Push the version commit to main branch
$ git push origin main
Enumerating objects: 5, done.
To https://github.com/yourorg/Colibri.Identity.Widget.git
   abc1234..def5678  main -> main

# 3. Push the tag
$ git push origin v1.0.1
Enumerating objects: 1, done.
To https://github.com/yourorg/Colibri.Identity.Widget.git
 * [new tag]         v1.0.1 -> v1.0.1
```

### Manual Git Tagging

**Create Annotated Tag (Recommended):**
```bash
# Tag current commit
git tag -a v1.0.1 -m "Release v1.0.1 - Fix login redirect issue"

# Tag specific commit
git tag -a v1.0.0 abc1234 -m "Initial release"

# Push the tag
git push origin v1.0.1
```

**Create Lightweight Tag:**
```bash
# Simple tag without message
git tag v1.0.1

# Push the tag
git push origin v1.0.1
```

### View Tags

**List All Tags:**
```bash
# Show all tags
git tag

# Show tags matching pattern
git tag -l "v1.0.*"

# Show tags with commit info
git tag -n
```

**View Tag Details:**
```bash
# Show tag information and commit
git show v1.0.1

# Show only tag message
git tag -v v1.0.1
```

**Check Remote Tags:**
```bash
# List tags on remote
git ls-remote --tags origin
```

### Delete Tags

**Delete Local Tag:**
```bash
git tag -d v1.0.1
```

**Delete Remote Tag:**
```bash
# Method 1 (older syntax)
git push origin :refs/tags/v1.0.1

# Method 2 (recommended)
git push origin --delete v1.0.1
```

**Delete Both Local and Remote:**
```bash
# Delete local tag
git tag -d v1.0.1

# Delete remote tag
git push origin --delete v1.0.1
```

### Practical Tagging Scenarios

**Scenario 1: Fixed a Bug**
```bash
# Make bug fix changes
git add .
git commit -m "FIX(UST_200): Resolve modal close button not working"

# Bump patch version (1.0.0 → 1.0.1)
npm version patch

# Push to GitHub
git push origin main
git push origin v1.0.1
```

**Scenario 2: Added New Feature**
```bash
# Make feature changes
git add .
git commit -m "UPDATE(UST_201): Add dark mode support"

# Bump minor version (1.0.1 → 1.1.0)
npm version minor

# Push to GitHub
git push origin main
git push origin v1.1.0
```

**Scenario 3: Created Wrong Tag**
```bash
# Oops, created v1.0.2 but meant v1.0.1
git tag -d v1.0.2                    # Delete local tag
git push origin --delete v1.0.2      # Delete remote tag

# Create correct tag
npm version patch                     # Creates v1.0.1
git push origin main
git push origin v1.0.1
```

**Scenario 4: Retroactive Tag for Old Release**
```bash
# Find commit hash for old release
git log --oneline

# Create tag for that commit
git tag -a v0.9.0 abc1234 -m "Legacy release before v1.0.0"

# Push the tag
git push origin v0.9.0
```

### Branch Naming Convention

```bash
# Create new branch with ticket ID
git checkout -b CORES_ISSUE_UST_123

# Or rename current branch
git branch -m CORES_ISSUE_UST_123
```

### Complete Workflow Example

**Full Development to Release Workflow:**

```bash
# ========================================
# STEP 1: Create Feature Branch
# ========================================
git checkout -b CORES_ISSUE_UST_130

# ========================================
# STEP 2: Make Changes and Commit
# ========================================
git add .
git commit -m "UPDATE(UST_130): Add logout button after successful login"

# ========================================
# STEP 3: Push Feature Branch
# ========================================
git push origin CORES_ISSUE_UST_130

# ========================================
# STEP 4: Create Pull Request
# ========================================
# Go to GitHub/GitLab and create PR from CORES_ISSUE_UST_130 to main
# Wait for code review and approval
# Merge PR

# ========================================
# STEP 5: Update Main Branch Locally
# ========================================
git checkout main
git pull origin main

# ========================================
# STEP 6: Update Version (Auto-commits & Tags)
# ========================================
# Choose based on your changes:
npm version patch   # For bug fixes: 1.0.0 → 1.0.1
# npm version minor # For new features: 1.0.0 → 1.1.0
# npm version major # For breaking changes: 1.0.0 → 2.0.0

# This command does 3 things:
# 1. Updates "version" in package.json
# 2. Creates git commit: "v1.0.1"
# 3. Creates git tag: "v1.0.1"

# ========================================
# STEP 7: Push Version Commit and Tag
# ========================================
# Push the version commit
git push origin main

# Push the new tag
git push origin v1.0.1
# OR push all tags:
git push --tags

# ========================================
# STEP 8: Build the Widget
# ========================================
npm run build

# Output will be in dist/ folder:
# - dist/keycloak-widget.umd.js
# - dist/login-widget.css

# ========================================
# STEP 9: Create Package Tarball (Optional)
# ========================================
npm pack
# Creates: colibri-identity-widget-1.0.1.tgz

# Test in another project:
cd ../my-test-app
npm install ../Colibri.Identity.Widget/colibri-identity-widget-1.0.1.tgz

# ========================================
# STEP 10: Publish to AWS CodeArtifact
# ========================================
cd ../Colibri.Identity.Widget

# Login to CodeArtifact (if not already logged in)
aws codeartifact login --tool npm --domain colibri --repository identity-widgets --region us-east-1

# Publish the package
npm publish

# ========================================
# STEP 11: Verify Publication
# ========================================
aws codeartifact list-package-versions \
  --domain colibri \
  --repository identity-widgets \
  --package @colibri/identity-widget \
  --format npm \
  --region us-east-1

# You should see version 1.0.1 in the list
```

**Step-by-step Explanation:**

| Step | Command | What It Does |
|------|---------|-------------|
| 1 | `git checkout -b CORES_ISSUE_UST_130` | Create feature branch with ticket ID |
| 2 | `git commit -m "UPDATE(UST_130): ..."` | Commit changes with convention |
| 3 | `git push origin CORES_ISSUE_UST_130` | Push feature branch to remote |
| 4 | Create PR via UI | Request code review |
| 5 | `git pull origin main` | Update local main with merged changes |
| 6 | `npm version patch` | Update package.json, commit, create tag |
| 7 | `git push origin main` + `git push origin v1.0.1` | Push commit and tag to GitHub |
| 8 | `npm run build` | Compile and bundle widget files |
| 9 | `npm pack` | Create .tgz for local testing (optional) |
| 10 | `npm publish` | Upload to AWS CodeArtifact |
| 11 | `aws codeartifact list-package-versions` | Verify successful publication |

**Quick Reference - Version Update Only:**

```bash
# After merging PR to main:
git checkout main
git pull origin main
npm version patch              # Updates version, commits, tags
git push origin main           # Push version commit
git push origin v1.0.1         # Push tag
npm run build                  # Build widget
npm publish                    # Publish to registry
```

---

## 🧪 Testing the Widget

### Local Testing (Development)

```bash
# Start dev server
npm run dev

# Open browser at http://localhost:5173
```

### Testing Built Widget

```bash
# Build the widget
npm run build

# Serve the widget-test.html file
npx http-server -p 8080

# Open http://localhost:8080/widget-test.html
```

### Creating Package for Local Testing

```bash
# 1. Build the widget
npm run build

# 2. Create package tarball (.tgz file)
npm pack

# This creates: colibri-identity-widget-<version>.tgz
# Example output: colibri-identity-widget-1.0.0.tgz
```

### Testing in Another React Project

```bash
# Option 1: Install from local .tgz file
npm install ../path/to/Colibri.Identity.Widget/colibri-identity-widget-1.0.0.tgz

# Option 2: Install from relative path (creates symlink)
npm install ../path/to/Colibri.Identity.Widget

# Option 3: Install from absolute path
npm install D:/Users/Manoj.Ponugoti/Videos/PROJECTS/Colibri.Identity.Widget/colibri-identity-widget-1.0.0.tgz
```

**After Installation:**

```tsx
// Import and use the widget
import { useRef } from 'react';
import '@colibri/identity-widget';

function App() {
  const widgetRef = useRef<any>(null);
  
  return (
    <div>
      <button onClick={() => widgetRef.current?.login()}>Login</button>
      
      <keycloak-widget
        ref={widgetRef}
        authority="dev"
        subsidiary="elite"
        callbackUrl={window.location.origin}
      />
    </div>
  );
}
```

---

## 📋 Widget Props & Attributes - Complete Guide

### Overview

The widget accepts props (NPM) or attributes (CDN) to configure its behavior. Below is a comprehensive guide for each property.

---

### 1. `authority` (Environment)

**Type:** `string`  
**Default:** `"dev"`  
**Required:** Yes

Specifies the authentication environment/server to connect to.

**Values:**
- `"dev"` - Development environment
- `"stage"` - Staging environment
- `"prod"` - Production environment

**NPM Usage:**
```tsx
<keycloak-widget
  ref={widgetRef}
  authority="prod"
  subsidiary="elite"
  callbackUrl={window.location.origin}
/>
```

**CDN Usage:**
```html
<keycloak-widget 
  id="auth"
  authority="prod"
  subsidiary="elite"
></keycloak-widget>
```

**When to use:**
- Use `"dev"` for local development and testing
- Use `"stage"` for QA/staging environments
- Use `"prod"` for production deployments

---

### 2. `subsidiary` (Brand/Company)

**Type:** `string`  
**Default:** `"allied"`  
**Required:** Yes

Identifies the brand or company using the widget. This determines branding, styling, and which user database to authenticate against.

**Common Values:**
- `"elite"` - Elite Learning
- `"allied"` - Allied Health
- `"mckissock"` - McKissock Learning

**NPM Usage:**
```tsx
<keycloak-widget
  ref={widgetRef}
  authority="dev"
  subsidiary="elite"
  callbackUrl={window.location.origin}
/>
```

**CDN Usage:**
```html
<keycloak-widget 
  id="auth"
  authority="dev"
  subsidiary="elite"
></keycloak-widget>
```

**When to use:**
- Set this based on your company/brand
- Affects which Keycloak realm is used for authentication
- Must match your organization's configuration

---

### 3. `callbackUrl` (OAuth Callback URL)

**Type:** `string`  
**Default:** `window.location.origin`  
**Required:** Yes

The URL where the OAuth server will redirect after authentication. This is where your application receives the authorization code.

**NPM Usage:**
```tsx
// For single page apps
<keycloak-widget
  ref={widgetRef}
  authority="dev"
  subsidiary="elite"
  callbackUrl="http://localhost:3000/auth/callback"
/>

// For production
<keycloak-widget
  ref={widgetRef}
  authority="prod"
  subsidiary="elite"
  callbackUrl="https://myapp.com/callback"
/>
```

**CDN Usage:**
```html
<!-- Local development -->
<keycloak-widget 
  id="auth"
  authority="dev"
  subsidiary="elite"
  callbackUrl="http://localhost:8080/"
></keycloak-widget>

<!-- Production -->
<keycloak-widget 
  id="auth"
  authority="prod"
  subsidiary="elite"
  callbackUrl="https://myapp.com/auth/callback"
></keycloak-widget>
```

**Important Notes:**
- This URL must be registered in your Keycloak configuration
- For SPAs, typically set to your app's base URL or a dedicated callback route
- Must be an absolute URL (include protocol and domain)

---

### 4. `redirectUrl` (Final Destination After Login)

**Type:** `string`  
**Default:** `""` (empty)  
**Required:** No

The final URL where users should be redirected after successful authentication. This is different from `callbackUrl`.

**Flow:**
1. User logs in → OAuth server authenticates
2. OAuth redirects to `callbackUrl` (with auth code)
3. Widget processes auth code, gets tokens
4. Widget redirects to `redirectUrl` (final destination)

**NPM Usage:**
```tsx
// Redirect to dashboard after login
<keycloak-widget
  ref={widgetRef}
  authority="dev"
  subsidiary="elite"
  callbackUrl="http://localhost:3000/"
  redirectUrl="http://localhost:3000/dashboard"
/>

// No automatic redirect, handle manually
<keycloak-widget
  ref={widgetRef}
  authority="dev"
  subsidiary="elite"
  callbackUrl="http://localhost:3000/"
  redirectUrl=""
/>
```

**CDN Usage:**
```html
<!-- Auto-redirect to dashboard -->
<keycloak-widget 
  id="auth"
  authority="dev"
  subsidiary="elite"
  callbackUrl="https://myapp.com/"
  redirectUrl="https://myapp.com/dashboard"
></keycloak-widget>

<!-- No auto-redirect, use event listener -->
<keycloak-widget 
  id="auth"
  authority="dev"
  subsidiary="elite"
  callbackUrl="https://myapp.com/"
  redirectUrl=""
></keycloak-widget>

<script>
  const widget = document.getElementById('auth');
  widget.addEventListener('redirect', (e) => {
    // Custom logic before redirect
    console.log('User:', e.detail.userSession);
    
    // Manually redirect
    window.location.href = e.detail.url || '/dashboard';
  });
</script>
```

**When to use:**
- Set `redirectUrl` when you want automatic redirect after login
- Leave empty (`""`) when you want to handle redirect manually via event listener
- Useful for different redirect destinations based on user role

---

### 5. `loginTitle` (Modal Title)

**Type:** `string`  
**Default:** `"Continue to login"`  
**Required:** No

Custom title text shown at the top of the login modal.

**NPM Usage:**
```tsx
<keycloak-widget
  ref={widgetRef}
  authority="dev"
  subsidiary="elite"
  callbackUrl={window.location.origin}
  loginTitle="Welcome to Elite Learning"
/>
```

**CDN Usage:**
```html
<keycloak-widget 
  id="auth"
  authority="dev"
  subsidiary="elite"
  login-title="Welcome Back!"
></keycloak-widget>
```

**Note:** In CDN, use kebab-case: `login-title`

---

### 6. `loginSubtitle` (Modal Subtitle)

**Type:** `string`  
**Default:** `"Continue by signing in."`  
**Required:** No

Custom subtitle text shown below the title in the login modal.

**NPM Usage:**
```tsx
<keycloak-widget
  ref={widgetRef}
  authority="dev"
  subsidiary="elite"
  callbackUrl={window.location.origin}
  loginTitle="Student Portal"
  loginSubtitle="Sign in to access your courses and certifications"
/>
```

**CDN Usage:**
```html
<keycloak-widget 
  id="auth"
  authority="dev"
  subsidiary="elite"
  login-title="Student Portal"
  login-subtitle="Sign in to access your courses"
></keycloak-widget>
```

**Note:** In CDN, use kebab-case: `login-subtitle`

---

### 7. `showLogin` (Show Form on Mount)

**Type:** `boolean`  
**Default:** `false`  
**Required:** No

Controls whether the login modal should be displayed immediately when the widget loads.

**NPM Usage:**
```tsx
// Show login form immediately
<keycloak-widget
  ref={widgetRef}
  authority="dev"
  subsidiary="elite"
  callbackUrl={window.location.origin}
  showLogin={true}
/>

// Hidden by default, show via button
function App() {
  const widgetRef = useRef(null);
  
  return (
    <>
      <button onClick={() => widgetRef.current?.login()}>
        Sign In
      </button>
      
      <keycloak-widget
        ref={widgetRef}
        authority="dev"
        subsidiary="elite"
        callbackUrl={window.location.origin}
        showLogin={false}
      />
    </>
  );
}
```

**CDN Usage:**
```html
<!-- Show immediately -->
<keycloak-widget 
  id="auth"
  authority="dev"
  subsidiary="elite"
  show-login="true"
></keycloak-widget>

<!-- Hidden, show via button -->
<button id="loginBtn">Sign In</button>

<keycloak-widget 
  id="auth"
  authority="dev"
  subsidiary="elite"
  show-login="false"
></keycloak-widget>

<script>
  const widget = document.getElementById('auth');
  document.getElementById('loginBtn').addEventListener('click', () => {
    widget.login(); // Show the login form
  });
</script>
```

**Note:** In CDN, use kebab-case: `show-login`

---

### 8. `isShowToggle` (Show/Hide Toggle Button)

**Type:** `string`  
**Default:** `"true"`  
**Required:** No

Controls visibility of UI toggle elements within the widget (if any).

**NPM Usage:**
```tsx
<keycloak-widget
  ref={widgetRef}
  authority="dev"
  subsidiary="elite"
  callbackUrl={window.location.origin}
  isShowToggle="false"
/>
```

**CDN Usage:**
```html
<keycloak-widget 
  id="auth"
  authority="dev"
  subsidiary="elite"
  isShowToggle="false"
></keycloak-widget>
```

---

### 9. `onRedirect` Callback (NPM Only)

**Type:** `function`  
**Default:** Internal handler  
**Required:** No (NPM), N/A (CDN)

**What it does:**
`onRedirect` is a callback function that fires immediately after successful authentication. It receives the redirect URL and user session data.

**Function Signature:**
```typescript
onRedirect: (url: string, userSession?: UserSession) => void
```

**Parameters:**
- `url` - The URL to redirect to (from `redirectUrl` prop or default)
- `userSession` - Object containing user information and tokens

**UserSession Object:**
```typescript
{
  access_token: string;
  userInfo: {
    studentId: string;
    name: string;
    email: string;
    given_name: string;
    family_name: string;
    preferred_username: string;
    email_verified: boolean;
    x_credentials: string;
  }
}
```

**NPM Usage Example 1 - Basic:**
```tsx
import { useRef } from 'react';

function App() {
  const widgetRef = useRef(null);
  
  const handleRedirect = (url: string, userSession?: any) => {
    console.log('Login successful!');
    console.log('Redirect URL:', url);
    console.log('User:', userSession?.userInfo.name);
    console.log('Email:', userSession?.userInfo.email);
    console.log('Access Token:', userSession?.access_token);
    
    // Save user session to state or localStorage
    localStorage.setItem('user', JSON.stringify(userSession?.userInfo));
    localStorage.setItem('access_token', userSession?.access_token);
    
    // Redirect manually
    window.location.href = url;
  };
  
  return (
    <keycloak-widget
      ref={widgetRef}
      authority="dev"
      subsidiary="elite"
      callbackUrl={window.location.origin}
      redirectUrl="/dashboard"
      onRedirect={handleRedirect}
    />
  );
}
```

**NPM Usage Example 2 - With Analytics:**
```tsx
const handleRedirect = (url: string, userSession?: any) => {
  // Send analytics event
  analytics.track('User Logged In', {
    userId: userSession?.userInfo.studentId,
    email: userSession?.userInfo.email,
    timestamp: new Date().toISOString()
  });
  
  // Show success notification
  toast.success(`Welcome back, ${userSession?.userInfo.given_name}!`);
  
  // Update app state
  setUser(userSession?.userInfo);
  setIsAuthenticated(true);
  
  // Redirect after 2 seconds
  setTimeout(() => {
    window.location.href = url;
  }, 2000);
};

return (
  <keycloak-widget
    ref={widgetRef}
    authority="prod"
    subsidiary="elite"
    callbackUrl="https://myapp.com/"
    redirectUrl="https://myapp.com/courses"
    onRedirect={handleRedirect}
  />
);
```

**NPM Usage Example 3 - Role-Based Redirect:**
```tsx
const handleRedirect = (url: string, userSession?: any) => {
  const userRole = userSession?.userInfo.role; // Assuming role exists
  
  // Redirect based on user role
  if (userRole === 'admin') {
    window.location.href = '/admin/dashboard';
  } else if (userRole === 'instructor') {
    window.location.href = '/instructor/courses';
  } else {
    window.location.href = '/student/dashboard';
  }
};

return (
  <keycloak-widget
    ref={widgetRef}
    authority="prod"
    subsidiary="elite"
    callbackUrl={window.location.origin}
    redirectUrl="" // Empty because we handle it manually
    onRedirect={handleRedirect}
  />
);
```

**CDN Alternative - Using Event Listener:**

Since CDN doesn't support function props, use the `redirect` event instead:

```html
<keycloak-widget 
  id="auth"
  authority="dev"
  subsidiary="elite"
  callbackUrl="https://myapp.com/"
  redirectUrl="https://myapp.com/dashboard"
></keycloak-widget>

<script>
  const widget = document.getElementById('auth');
  
  widget.addEventListener('redirect', (e) => {
    // Access the same data as onRedirect
    const url = e.detail.url;
    const userSession = e.detail.userSession;
    
    console.log('Login successful!');
    console.log('URL:', url);
    console.log('User:', userSession.userInfo.name);
    console.log('Email:', userSession.userInfo.email);
    console.log('Access Token:', userSession.access_token);
    
    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(userSession.userInfo));
    localStorage.setItem('access_token', userSession.access_token);
    
    // Custom redirect logic
    if (userSession.userInfo.role === 'admin') {
      window.location.href = '/admin/dashboard';
    } else {
      window.location.href = url; // Use provided URL
    }
  });
</script>
```

---

### 10. `handleClose` Callback (NPM Only)

**Type:** `function`  
**Default:** Internal handler  
**Required:** No (NPM), N/A (CDN)

**What it does:**
Fires when the user closes the login modal without completing authentication.

**Function Signature:**
```typescript
handleClose: () => void
```

**NPM Usage:**
```tsx
const handleClose = () => {
  console.log('Login form closed');
  // Track abandonment
  analytics.track('Login Abandoned');
};

return (
  <keycloak-widget
    ref={widgetRef}
    authority="dev"
    subsidiary="elite"
    callbackUrl={window.location.origin}
    handleClose={handleClose}
  />
);
```

**CDN Alternative - Using Event Listener:**
```html
<keycloak-widget id="auth"></keycloak-widget>

<script>
  const widget = document.getElementById('auth');
  
  widget.addEventListener('close', () => {
    console.log('Login form closed');
    // Handle close event
  });
</script>
```

---

## Complete Integration Examples

### NPM - Full Example with All Props

```tsx
import { useRef, useState } from 'react';
import '@colibri/identity-widget';

function App() {
  const widgetRef = useRef<any>(null);
  const [user, setUser] = useState(null);
  
  const handleRedirect = (url: string, userSession?: any) => {
    console.log('=== Authentication Successful ===');
    console.log('Redirect URL:', url);
    console.log('User Info:', userSession?.userInfo);
    console.log('Access Token:', userSession?.access_token);
    
    // Save user session
    setUser(userSession?.userInfo);
    localStorage.setItem('user', JSON.stringify(userSession?.userInfo));
    localStorage.setItem('access_token', userSession?.access_token);
    
    // Show success message
    alert(`Welcome, ${userSession?.userInfo.name}!`);
    
    // Redirect to dashboard
    setTimeout(() => {
      window.location.href = url || '/dashboard';
    }, 1500);
  };
  
  const handleClose = () => {
    console.log('Login form closed by user');
  };
  
  const handleLogin = () => {
    widgetRef.current?.login();
  };
  
  const handleLogout = () => {
    widgetRef.current?.logout();
    setUser(null);
    localStorage.clear();
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>My Application</h1>
      
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
      
      <keycloak-widget
        ref={widgetRef}
        authority="dev"
        subsidiary="elite"
        isShowToggle="true"
        callbackUrl={window.location.origin}
        redirectUrl="/dashboard"
        loginTitle="Student Portal"
        loginSubtitle="Sign in to access your courses"
        showLogin={false}
        onRedirect={handleRedirect}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
```

### CDN - Full Example with All Attributes

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Application</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    button { padding: 10px 20px; margin: 5px; cursor: pointer; }
    .user-info { margin: 20px 0; padding: 15px; background: #f0f0f0; border-radius: 8px; }
  </style>
</head>
<body>
  <h1>My Application</h1>
  
  <div id="auth-section">
    <button id="loginBtn">Sign In</button>
    <button id="logoutBtn" style="display:none;">Logout</button>
  </div>
  
  <div id="userInfo" class="user-info" style="display:none;">
    <h3>Welcome!</h3>
    <p><strong>Name:</strong> <span id="userName"></span></p>
    <p><strong>Email:</strong> <span id="userEmail"></span></p>
    <p><strong>Student ID:</strong> <span id="studentId"></span></p>
  </div>
  
  <!-- Widget with all attributes -->
  <keycloak-widget 
    id="auth-widget"
    authority="dev"
    subsidiary="elite"
    isShowToggle="true"
    callbackUrl="http://localhost:8080/"
    redirectUrl="http://localhost:8080/dashboard.html"
    login-title="Student Portal"
    login-subtitle="Sign in to access your courses"
    show-login="false"
  ></keycloak-widget>
  
  <script src="https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js"></script>
  
  <script>
    const widget = document.getElementById('auth-widget');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userInfoDiv = document.getElementById('userInfo');
    
    // Show login form
    loginBtn.addEventListener('click', () => {
      widget.login();
    });
    
    // Logout
    logoutBtn.addEventListener('click', () => {
      widget.logout();
    });
    
    // Handle successful authentication
    widget.addEventListener('redirect', (e) => {
      console.log('=== Authentication Successful ===');
      console.log('Redirect URL:', e.detail.url);
      console.log('User Session:', e.detail.userSession);
      console.log('Access Token:', e.detail.userSession.access_token);
      
      const userSession = e.detail.userSession;
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(userSession.userInfo));
      localStorage.setItem('access_token', userSession.access_token);
      
      // Update UI
      document.getElementById('userName').textContent = userSession.userInfo.name;
      document.getElementById('userEmail').textContent = userSession.userInfo.email;
      document.getElementById('studentId').textContent = userSession.userInfo.studentId;
      
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'inline-block';
      userInfoDiv.style.display = 'block';
      
      // Show success message
      alert(`Welcome, ${userSession.userInfo.name}!`);
      
      // Optional: Redirect after delay
      // setTimeout(() => {
      //   window.location.href = e.detail.url;
      // }, 2000);
    });
    
    // Handle login form close
    widget.addEventListener('close', () => {
      console.log('Login form closed by user');
    });
    
    // Handle logout
    widget.addEventListener('logout', () => {
      console.log('User logged out');
      
      // Clear localStorage
      localStorage.clear();
      
      // Update UI
      loginBtn.style.display = 'inline-block';
      logoutBtn.style.display = 'none';
      userInfoDiv.style.display = 'none';
      
      alert('You have been logged out');
    });
    
    // Check if user is already logged in
    window.addEventListener('DOMContentLoaded', () => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userEmail').textContent = user.email;
        document.getElementById('studentId').textContent = user.studentId;
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        userInfoDiv.style.display = 'block';
      }
    });
  </script>
</body>
</html>
```

---

## 📋 Props Quick Reference Table

| Property | Type | Default | NPM Prop Name | CDN Attribute | Description |
|----------|------|---------|---------------|---------------|-------------|
| Authority | string | `"dev"` | `authority` | `authority` | Environment: dev/stage/prod |
| Subsidiary | string | `"allied"` | `subsidiary` | `subsidiary` | Brand identifier |
| Show Toggle | string | `"true"` | `isShowToggle` | `isShowToggle` | Show UI toggle elements |
| Callback URL | string | `window.location.origin` | `callbackUrl` | `callbackUrl` | OAuth callback URL |
| Redirect URL | string | `""` | `redirectUrl` | `redirectUrl` | Final redirect after login |
| Login Title | string | `"Continue to login"` | `loginTitle` | `login-title` | Modal title text |
| Login Subtitle | string | `"Continue by signing in."` | `loginSubtitle` | `login-subtitle` | Modal subtitle text |
| Show Login | boolean | `false` | `showLogin` | `show-login` | Show form on mount |
| On Redirect | function | N/A | `onRedirect` | Event: `redirect` | Callback after auth success |
| Handle Close | function | N/A | `handleClose` | Event: `close` | Callback when form closes |

---

## 📋 Widget API Reference

### Methods

| Method | Description |
|--------|-------------|
| `login()` | Opens the login modal |
| `logout()` | Logs out the user and clears session |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `redirect` | `{ url, userSession }` | Fired after successful authentication |
| `close` | none | Fired when login form is closed |
| `logout` | none | Fired when user logs out |

### User Session Object

```typescript
{
  access_token: string;
  userInfo: {
    studentId: string;
    name: string;
    email: string;
    given_name: string;
    family_name: string;
    preferred_username: string;
    email_verified: boolean;
    x_credentials: string;
  }
}
```

---

## 🐛 Troubleshooting

### TypeScript Errors in React

If you see errors with `<keycloak-widget>` element, ensure you have the type declaration file:

Create `src/vite-env.d.ts` as shown in the TypeScript Support section above, then restart your TypeScript server in VS Code:
- Press `Ctrl+Shift+P`
- Type "TypeScript: Restart TS Server"
- Press Enter

### Widget Not Loading from CDN

1. Check browser console for errors
2. Verify the CDN URL is accessible: `https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js`
3. Ensure script tag is after the widget element

### Events Not Firing

Make sure event listeners are attached after the widget element is in the DOM:

```javascript
// ✅ Good - wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const widget = document.getElementById('auth-widget');
  widget.addEventListener('redirect', handleRedirect);
});

// ❌ Bad - might run before widget is ready
const widget = document.getElementById('auth-widget');
widget.addEventListener('redirect', handleRedirect);
```

---

##  Version History

### Version 1.0.2
- Added registration page functionality
- Implemented email validation to check if user already exists before registration or login
- Added comprehensive error handlers in login and registration widgets
- Added "Remember me" checkbox in both login and registration forms
- Enhanced user experience with visual feedback (loader, checkmarks, banners)
- Improved form validation and field enabling/disabling based on email verification
- **Added function props support (`onRedirect`, `onClose`, `onLogout`) for better React/NPM integration**
- Function props provide more React-friendly API compared to event listeners
- Auto-redirect is disabled when using `onRedirect` prop to give developers full control

### Version 1.0.1
- Initial release with basic login functionality

