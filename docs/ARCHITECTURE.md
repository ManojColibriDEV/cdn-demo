# Architecture Documentation

## Overview

The Colibri Identity Login Widget is architected as a dual-mode React application that can function both as a standalone web application and as an embeddable web component. This document details the architectural decisions, patterns, and structure.

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Entry Point (main.tsx)                   │
│                  Environment-based Routing                   │
└────────────┬────────────────────────────────┬────────────────┘
             │                                │
    ┌────────▼─────────┐           ┌─────────▼──────────┐
    │   TEST Mode      │           │  WEBCOMPONENT Mode │
    │  BrowserRouter   │           │   Custom Element   │
    │  (Development)   │           │   (Production)     │
    └────────┬─────────┘           └─────────┬──────────┘
             │                                │
             └────────────┬───────────────────┘
                          │
                  ┌───────▼────────┐
                  │   App Component │
                  │  (Root React)   │
                  └───────┬────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
   ┌────▼─────┐    ┌──────▼──────┐   ┌─────▼──────┐
   │  UI Layer │    │ Business    │   │ Service    │
   │ Components│    │  Logic      │   │   Layer    │
   └───────────┘    └─────────────┘   └────────────┘
```

---

## Core Architectural Patterns

### 1. Dual Rendering Strategy

**Pattern**: Environment-based Conditional Rendering

The application uses the `VITE_RENDER_MODE` environment variable to determine how to initialize:

```typescript
const renderMode = import.meta.env.VITE_RENDER_MODE;

if (renderMode === 'TEST') {
  // Standard React app with BrowserRouter
  createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  );
} else {
  // Web Component with MemoryRouter
  class KeycloakWidget extends HTMLElement {
    // ... web component implementation
  }
  customElements.define("keycloak-widget", KeycloakWidget);
}
```

**Benefits**:
- Single codebase for both modes
- Easy testing and development
- Production-ready web component
- No code duplication

### 2. Component Composition

**Pattern**: Presentational and Container Components

```
App (Container)
├── LoginModal (Container)
│   ├── LoginSubmit (Presentational)
│   │   └── InputField (UI Component)
│   └── RegistrationForm (Container)
│       ├── InputField (UI Component)
│       ├── Loader (UI Component)
│       └── ConfirmInformation (Presentational)
└── Button (UI Component)
```

**Responsibilities**:
- **Container Components**: Manage state, handle business logic, API calls
- **Presentational Components**: Render UI, receive props, emit events
- **UI Components**: Pure, reusable elements with no business logic

### 3. State Management

**Pattern**: Local Component State with Props Drilling

- React `useState` for local state
- Props for parent-child communication
- No global state management library (Redux/MobX)
- Sufficient for widget scope

**State Flow**:
```
App State: modalOpen
    ↓ (props)
LoginModal State: email, password, errors
    ↓ (props & callbacks)
LoginSubmit State: showPassword
```

### 4. Service Layer Architecture

**Pattern**: Centralized API Service

```typescript
// services/index.ts
export const checkAvailableEmail = async (email: string) => { /* ... */ }
export const getTenentDetails = async () => { /* ... */ }
export const registerUser = async (payload) => { /* ... */ }
```

**Benefits**:
- Single source of truth for API calls
- Easy to mock for testing
- Decoupled from components
- Centralized error handling

---

## Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI framework |
| TypeScript | Latest | Type safety |
| Tailwind CSS | 4.1.18 | Styling |
| Vite | Latest | Build tool |
| React Router | 7.10.1 | Routing |

### Build & Development

| Tool | Purpose |
|------|---------|
| Vite | Fast HMR, optimized builds |
| ESLint | Code linting |
| TypeScript Compiler | Type checking |
| Tailwind CSS Vite Plugin | CSS processing |

---

## Directory Structure

```
src/
├── common/              # Shared utilities
│   └── ui/              # Reusable UI components
│       ├── button/      # Button component
│       ├── input/       # Input field component
│       └── loader/      # Loading spinner
│
├── components/          # Feature components
│   ├── login-modal.tsx       # Main authentication modal
│   ├── login-submit.tsx      # Login form
│   ├── registration-form.tsx # User registration
│   ├── confirm-information.tsx
│   └── update-password.tsx
│
├── functions/           # Utility functions
│   └── index.ts         # Validation, helpers
│
├── icons/               # SVG and image assets
│
├── mock/                # Mock data for development
│   ├── api-mock.ts
│   └── registration-form-mock.ts
│
├── services/            # API integration
│   └── index.ts         # HTTP service layer
│
├── types/               # TypeScript definitions
│   └── index.ts         # Interface definitions
│
├── App.tsx              # Root component
├── main.tsx             # Entry point
└── index.css            # Global styles (Tailwind)
```

---

## Component Architecture

### UI Components (common/ui/)

**Characteristics**:
- Pure, stateless components
- Tailwind CSS styling
- TypeScript interfaces
- No business logic
- Highly reusable

**Example - Button Component**:
```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  mainButtonStyle?: React.CSSProperties;
}

const Button: FC<ButtonProps> = ({ label, onClick, mainButtonStyle }) => {
  return (
    <button 
      className="bg-primary hover:bg-primary-hover ..." 
      onClick={onClick}
      style={mainButtonStyle}
    >
      {label}
    </button>
  );
};
```

### Feature Components (components/)

**Characteristics**:
- Stateful components
- Business logic
- API integration
- Form validation
- Event handling

**Example - LoginModal**:
```typescript
const LoginModal: FC<LoginModalProps> = ({ open, onClose, redirectUrl }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  
  // Business logic, API calls, validation
  // ...
  
  return (/* JSX */);
};
```

---

## Data Flow

### Authentication Flow

```
User Action (Click Login)
    ↓
App.tsx (opens modal)
    ↓
LoginModal.tsx (renders form)
    ↓
LoginSubmit.tsx (collects credentials)
    ↓
handleSubmit() function
    ↓
services/index.ts (API call)
    ↓
Backend Authentication
    ↓
JWT Token Received
    ↓
localStorage/sessionStorage
    ↓
Redirect to redirectUrl
```

### Registration Flow

```
User Opens Registration
    ↓
RegistrationForm.tsx
    ↓
Validate Email (checkAvailableEmail)
    ↓
Collect User Data
    ↓
Validate Password Strength
    ↓
Show Confirmation (ConfirmInformation.tsx)
    ↓
Submit Registration (registerUser)
    ↓
Auto-login
    ↓
Redirect
```

---

## Web Component Implementation

### Custom Element Definition

```typescript
class KeycloakWidget extends HTMLElement {
  private root?: Root;
  private mountPoint!: HTMLDivElement;

  static get observedAttributes() {
    return ["redirectUrl", "environment", "subsidiary", "theme"];
  }

  connectedCallback() {
    // Create mount point
    this.mountPoint = document.createElement("div");
    this.appendChild(this.mountPoint);
    this.render();
  }

  attributeChangedCallback() {
    // Re-render on attribute change
    this.render();
  }

  disconnectedCallback() {
    // Cleanup
    this.root?.unmount();
  }

  private render() {
    if (!this.root) {
      this.root = createRoot(this.mountPoint);
    }
    
    this.root.render(
      <StrictMode>
        <MemoryRouter>
          <App {...this.getProps()} />
        </MemoryRouter>
      </StrictMode>
    );
  }
}
```

### Key Architectural Decisions

1. **MemoryRouter vs BrowserRouter**
   - Web component uses MemoryRouter (no URL changes)
   - Prevents conflicts with host page routing
   - Maintains internal navigation state

2. **Attribute-based Configuration**
   - Uses HTML attributes for configuration
   - Reactive to attribute changes
   - Standard web component pattern

3. **Isolated Rendering**
   - Mounts to internal div
   - No Shadow DOM (for CSS simplicity)
   - Self-contained React tree

---

## Styling Architecture

### Tailwind CSS Integration

**Philosophy**: Utility-first CSS

```
Traditional CSS:
.button { 
  background-color: #a64d9a; 
  padding: 12px 24px; 
  ... 
}

Tailwind Approach:
className="bg-primary py-3 px-6 rounded-lg ..."
```

**Benefits**:
- No CSS file maintenance
- No naming conventions needed
- Smaller bundle (only used utilities)
- Consistent spacing/colors

### Custom Theme Configuration

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#a64d9a',
      'primary-hover': '#8b3d7f',
      teal: '#33bfb6',
    },
    fontFamily: {
      'brandon': ['Brandon Grotesque Bold', 'Open Sans'],
    },
  },
}
```

### CSS Output

- Single CSS file: `login-widget.css`
- Contains only used utilities
- No CSS module splitting
- Must be included in HTML

---

## Build Architecture

### Development Mode

```typescript
// vite.config.ts - Dev Server
server: {
  proxy: {
    "/api": { target: "https://dev-demo-env.colibricore.io" },
    "/brand": { target: "https://dev-idb.colibrirealestate.com" },
  },
}
```

**Features**:
- Hot Module Replacement (HMR)
- API proxying (no CORS issues)
- Fast rebuilds
- Source maps

### Production Build

```typescript
// vite.config.ts - Build
build: {
  cssCodeSplit: false,  // Single CSS file
  lib: {
    entry: "src/main.tsx",
    name: "KeycloakWidget",
    formats: ["umd"],    // Universal Module Definition
    fileName: () => "keycloak-widget.umd.js",
  },
}
```

**Output**:
1. `keycloak-widget.umd.js` - Self-contained bundle
2. `login-widget.css` - All styles

**Bundling Strategy**:
- All dependencies bundled
- No external dependencies
- UMD format for maximum compatibility
- Tree-shaking enabled

---

## Type System

### TypeScript Integration

**Key Interfaces**:

```typescript
// Component Props
interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  redirectUrl?: string;
}

// API Responses
interface TenantDetailsResponse {
  TenantId: string;
  BrandFullName: string;
  RegistrationConsent?: string;
  // ...
}

// Form Data
interface RegistrationPayload {
  emailAddress: string;
  givenName: string;
  familyName: string;
  password: string;
  // ...
}
```

**Benefits**:
- Compile-time error detection
- IntelliSense/autocomplete
- Self-documenting code
- Refactoring confidence

---

## Security Architecture

### Authentication

- JWT token-based
- Tokens stored in localStorage/sessionStorage
- Automatic token refresh (if implemented)
- Secure HTTP-only cookies (backend)

### Cross-Site Scripting (XSS)

**Protection**:
- React auto-escapes content
- `dangerouslySetInnerHTML` used sparingly
- User input sanitized
- Content Security Policy compatible

### Cross-Origin Resource Sharing (CORS)

**Handled by Backend**:
- Widget makes requests to configured endpoints
- Backend must whitelist widget origin
- Preflight requests supported

---

## Performance Considerations

### Bundle Size

| File | Size (Gzipped) |
|------|----------------|
| keycloak-widget.umd.js | ~180KB |
| login-widget.css | ~45KB |
| **Total** | **~225KB** |

### Optimization Techniques

1. **Code Splitting**: N/A (single bundle for simplicity)
2. **Tree Shaking**: Enabled (unused code removed)
3. **Minification**: Enabled in production
4. **Lazy Loading**: Components loaded on-demand
5. **Memoization**: React.memo for expensive components

### Load Time Optimization

```html
<!-- Async loading recommended -->
<link rel="stylesheet" href="widget.css" />
<script src="widget.js" async></script>
```

---

## Scalability & Extensibility

### Adding New Features

1. **New Component**: Add to `src/components/`
2. **New UI Element**: Add to `src/common/ui/`
3. **New API**: Add to `src/services/`
4. **New Type**: Add to `src/types/`

### Adding New Attributes

```typescript
// main.tsx
static get observedAttributes() {
  return ["redirectUrl", "newAttribute"];
}

private getProps() {
  return {
    redirectUrl: this.getAttribute("redirectUrl"),
    newAttribute: this.getAttribute("newAttribute"),
  };
}
```

### Multiple Widgets

The architecture supports multiple widget instances:

```html
<keycloak-widget id="widget1" redirectUrl="/admin"></keycloak-widget>
<keycloak-widget id="widget2" redirectUrl="/user"></keycloak-widget>
```

Each instance:
- Has isolated React tree
- Maintains separate state
- Independent lifecycle

---

## Testing Architecture

### Unit Testing (Recommended)

```typescript
// Example with React Testing Library
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});
```

### Integration Testing

```typescript
// Test full authentication flow
test('user can login', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Login'));
  fireEvent.change(screen.getByLabelText('Email'), { 
    target: { value: 'user@test.com' } 
  });
  fireEvent.click(screen.getByText('Sign In'));
  await waitFor(() => {
    expect(mockApi).toHaveBeenCalled();
  });
});
```

### E2E Testing

- Playwright or Cypress recommended
- Test web component in real browser
- Test integration with host pages

---

## Deployment Architecture

### CDN Strategy

```
GitHub Repository (Source)
    ↓
GitHub Actions (CI/CD)
    ↓
Build Process (npm run build)
    ↓
Artifacts (dist/)
    ↓
CDN (jsDelivr/Cloudflare)
    ↓
Consumer Websites
```

### Version Management

```bash
# Tag release
git tag v1.0.0
git push origin v1.0.0

# Use specific version
<script src="https://cdn.../widget@v1.0.0/widget.js"></script>
```

### Rollback Strategy

- Keep multiple versions on CDN
- Consumers specify version in URL
- Easy rollback by changing version number

---

## Error Handling Architecture

### Component Level

```typescript
try {
  await loginUser(credentials);
} catch (error) {
  setLoginError(error.message);
  console.error('Login failed:', error);
}
```

### Global Error Boundary (Recommended)

```typescript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log to monitoring service
    console.error(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}
```

---

## Monitoring & Observability

### Recommended Integrations

1. **Error Tracking**: Sentry
2. **Analytics**: Google Analytics
3. **Performance**: Web Vitals
4. **Logging**: Custom logging service

### Implementation

```typescript
// In service layer
const logError = (error: Error, context: any) => {
  if (window.Sentry) {
    Sentry.captureException(error, { extra: context });
  }
};
```

---

## Future Architecture Improvements

### Potential Enhancements

1. **Shadow DOM**: Full style encapsulation
2. **State Management**: Redux/Zustand for complex state
3. **GraphQL**: Replace REST APIs
4. **Server-Side Rendering**: Pre-render widget
5. **Web Workers**: Offload heavy processing
6. **Progressive Web App**: Offline support

### Backward Compatibility

- Maintain semantic versioning
- Deprecation warnings before breaking changes
- Migration guides for major versions

---

## Architecture Decision Records (ADR)

### ADR-001: Use UMD over ES Modules

**Decision**: Build as UMD bundle

**Rationale**:
- Maximum browser compatibility
- Works without build tools
- Single file distribution

**Alternatives Considered**:
- ES Modules: Requires modern browsers
- CommonJS: Not browser-friendly

### ADR-002: No Shadow DOM

**Decision**: Mount React to light DOM

**Rationale**:
- Simplifies CSS distribution
- Easier debugging
- Better Tailwind integration

**Trade-offs**:
- Less style encapsulation
- Potential CSS conflicts (mitigated by specific class names)

### ADR-003: Dual Rendering Mode

**Decision**: Single codebase, environment-based rendering

**Rationale**:
- Easier development
- No code duplication
- Consistent behavior

**Alternatives Considered**:
- Separate projects: More maintenance
- Build-time switching: Less flexible

---

## Conclusion

The architecture balances:
- **Simplicity**: Easy to understand and maintain
- **Flexibility**: Works as app or component
- **Performance**: Optimized bundle size
- **Developer Experience**: Fast builds, TypeScript, Tailwind
- **Production Ready**: Tested, documented, deployable

This architecture supports current needs while allowing for future growth.
