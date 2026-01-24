# Colibri Identity Widget - AI Coding Agent Instructions

## Project Overview

This is a **dual-mode React authentication widget** that builds as both a standalone web component (production) and a testable React app (development). It integrates with Keycloak OIDC for authentication and is distributed via NPM and AWS CodeArtifact.

**Core Architecture Pattern**: Environment-based conditional rendering controlled by `VITE_RENDER_MODE`:
- `TEST` mode → BrowserRouter, standalone React app (development)
- `WEBCOMPONENT` mode → Custom element `<keycloak-widget>` with MemoryRouter (production builds)

## Critical Build & Environment Patterns

### Dual-Mode Rendering System

The entire app switches rendering modes based on `VITE_RENDER_MODE` environment variable:

```typescript
// src/main.tsx - Entry point logic
if (renderMode === 'TEST') {
  // Standard React with BrowserRouter for local dev
  createRoot(document.getElementById('root')!).render(<BrowserRouter>...</BrowserRouter>);
} else {
  // Web Component with MemoryRouter for production
  class KeycloakWidget extends HTMLElement { ... }
  customElements.define("keycloak-widget", KeycloakWidget);
}
```

**When working on code**:
- Always consider both modes - changes must work in both environments
- Service layer (`src/services/index.ts`) detects `VITE_RENDER_MODE` to switch between dev proxies and production endpoints
- Production build FORCES `WEBCOMPONENT` mode via `vite.config.ts` define

### CSS Injection Strategy

**Critical**: CSS is injected into JS bundle, not served separately. Custom Vite plugin at `src/tools/vite-plugin-css-injector.ts`:
- Reads generated CSS from build
- Injects as `<style>` tag via JavaScript
- Deletes standalone CSS file from bundle
- This ensures single-file distribution for web component

### Build Commands

```bash
npm run dev           # Local development (TEST mode, proxies enabled)
npm run build         # Production build (forces WEBCOMPONENT mode)
npm run build:dev     # Build for dev environment (same as build)
npm run build:types   # Generate TypeScript declarations
```

**Production build behavior**:
- Forces `VITE_RENDER_MODE=WEBCOMPONENT` via `vite.config.ts`
- Outputs `dist/keycloak-widget.{es,umd}.js` (no CSS file)
- Generates type definitions in `dist/main.d.ts`

## Development Workflows

### Local Testing

1. Run `npm run dev` → starts Vite dev server with TEST mode
2. Visit http://localhost:5173/ → widget renders as standalone app
3. Proxies in `vite.config.ts` redirect API calls:
   - `/api/*` → dev-demo-env.colibrilearning.com
   - `/keycloak/*` → dev-keycloak.colibrilearning.com
   - `/brand/*`, `/register/*` → dev-idb.colibrirealestate.com

### Testing Web Component Mode

Use `widget-test.html` for integration testing:
```html
<script src="./dist/keycloak-widget.umd.js"></script>
<keycloak-widget authority="dev" subsidiary="elite" callback-url="..."></keycloak-widget>
```

### AWS Deployment (via CodeBuild)

See `buildspec.yml` for CI/CD:
1. Authenticates to CodeArtifact
2. Runs `npm run build:$ENVIRONMENT`
3. Publishes to NPM via `npm publish`
4. Syncs `dist/` to S3 bucket
5. Invalidates CloudFront distribution

## Code Patterns & Conventions

### Component Structure

**Container vs Presentational Pattern**:
- `App.tsx` → Root container, handles auth state, routing
- `components/embedded-login-form.tsx` → Login container
- `components/create-account-form.tsx` → Registration container
- `common/ui/*` → Pure UI components (Button, Input, Banner, Toast, Loader)

**No global state management** - uses React useState + props drilling (sufficient for widget scope)

### Service Layer (`src/services/`)

All API calls centralized here:
- `services/oidc.ts` → OIDC authentication flows (token exchange, userinfo, refresh)
- `services/index.ts` → Registration, email validation, tenant details
- **Environment detection**: Services check `VITE_RENDER_MODE` to use proxies (dev) vs full URLs (prod)

Example pattern:
```typescript
const RENDER_MODE = (import.meta as any).env.VITE_RENDER_MODE || 'WEBCOMPONENT';
const baseURL = RENDER_MODE === 'TEST' ? '/api' : 'https://prod-api.example.com';
```

### Authentication Flow

1. User enters credentials → `embedded-login-form.tsx`
2. Calls `authenticateWithOIDC()` from `services/oidc.ts`
3. Receives OIDC tokens (access_token, refresh_token)
4. Stores in cookies (access_token) + localStorage (refresh_token)
5. Triggers `onRedirect` callback or dispatches `redirect` event
6. Auto-login on reload via `authRefresh()` if refresh_token valid

**Token Storage**:
- Access token → `setAuthCookie()` in `utils/cookieHelper.ts` (encoded)
- Refresh token → localStorage with timestamp
- X-Credential header → Cookie without encoding (preserves exact format)

### Web Component Event System

The custom element supports **dual callback mechanisms**:

1. **Function props** (React/NPM usage):
```typescript
widgetRef.current.onRedirect = (url, userSession) => { /* handle */ };
widgetRef.current.onClose = () => { /* handle */ };
widgetRef.current.onLogout = () => { /* handle */ };
```

2. **DOM events** (vanilla JS usage):
```javascript
widget.addEventListener('redirect', (e) => { 
  const { url, userSession } = e.detail; 
});
```

**Auto-redirect behavior**: Only occurs if `onRedirect` function prop is NOT provided

### Validation Patterns

See `functions/index.ts` for reusable validators:
- `validatePassword()` → Complex password requirements (length, character types, no user data)
- Email validation via `checkEmail()` service call with 500ms debounce (see `create-account-form.tsx` useEffect)

### UI Component Patterns

All UI components in `common/ui/` follow:
- TypeScript interfaces for props
- Tailwind CSS styling (no CSS modules)
- Variants/states via props (`variant`, `type`, `state`)

Example: `common/ui/banner/index.tsx` for inline messages, `common/ui/toast/index.tsx` for notifications

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/main.tsx` | Entry point, dual-mode switch, web component definition |
| `src/App.tsx` | Root component, auto-login logic, routing |
| `vite.config.ts` | Build config, proxies, CSS injection, production overrides |
| `src/services/oidc.ts` | OIDC authentication flows (ROPC, token refresh, userinfo) |
| `src/tools/vite-plugin-css-injector.ts` | Custom Vite plugin for CSS-in-JS bundling |
| `buildspec.yml` | AWS CodeBuild CI/CD pipeline |
| `docs/ARCHITECTURE.md` | Detailed architecture documentation |
| `docs/WEB-COMPONENT.md` | Web component implementation deep dive |

## Common Pitfalls

1. **Don't hardcode environment URLs** → Always use `VITE_RENDER_MODE` detection in services
2. **CSS changes require full rebuild** → CSS injection happens at build time, not runtime
3. **TypeScript imports** → Use `(import.meta as any).env` instead of `process.env`
4. **Web component attributes** → Use kebab-case in HTML (`callback-url`), camelCase in TypeScript (`callbackUrl`)
5. **Production testing** → Must build and test with `widget-test.html`, dev mode won't catch web component issues
6. **Token encoding** → Access tokens are encoded in cookies, X-Credential is NOT (see `setAuthCookie` 3rd param)

## Documentation Resources

Extensive documentation in `docs/`:
- Quick start → `QUICK-REFERENCE.md`
- API reference → `API-REFERENCE.md`
- Deployment guide → `DEPLOYMENT.md`
- OIDC flows → `ROPC-EMBEDDED-LOGIN.md`
- Component docs → `BANNER-COMPONENT.md`, `TOAST-COMPONENT.md`
