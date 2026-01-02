# Development Guide

## Getting Started

This guide covers everything you need to know to develop, test, and contribute to the Colibri Identity Login Widget.

---

## Prerequisites

### Required Software

| Tool | Minimum Version | Recommended | Purpose |
|------|----------------|-------------|---------|
| Node.js | 18.x | 20.x LTS | Runtime environment |
| npm | 9.x | 10.x | Package manager |
| Git | 2.x | Latest | Version control |
| VS Code | Latest | Latest | IDE (recommended) |

### Optional Tools

- **React DevTools**: Browser extension for debugging
- **Tailwind CSS IntelliSense**: VS Code extension
- **ESLint Extension**: VS Code extension
- **TypeScript Extension**: Built into VS Code

---

## Initial Setup

### 1. Clone Repository

```bash
git clone https://github.com/ManojColibriDEV/cdn-demo.git
cd cdn-demo
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- React 19 & React DOM
- TypeScript & type definitions
- Tailwind CSS & Vite plugin
- React Router
- Axios for HTTP requests
- Development tools (ESLint, Vite, etc.)

### 3. Environment Configuration

Create or verify `.env` file:

```env
# API Endpoints
VITE_WIDGET_LOGIN_URL="https://dev-idb.colibrirealestate.com/widget/loginprepare?targetUrl=%2Froute%2Fcheckoutsignin&returnUrl=%2Fwp&idpsource=local5173widget"
PRE_AUTH_URL="https://dev-idb.colibrirealestate.com/widget/loginprepare?targetUrl=%2Froute%2Fcheckoutsignin&returnUrl=%2Fwp&idpsource=local5173widget"

# Rendering Mode
VITE_RENDER_MODE=TEST
```

### 4. Verify Setup

```bash
npm run dev
```

Visit `http://localhost:5173` - you should see the login button.

---

## Development Workflow

### Running Development Server

```bash
npm run dev
```

**Features**:
- Hot Module Replacement (HMR)
- Fast refresh
- Automatic recompilation
- Runs on `http://localhost:5173`

**Environment Variables**:
- Automatically loads from `.env`
- Accessible via `import.meta.env.VITE_*`

### File Watching

Vite automatically watches these files:
- `src/**/*.{ts,tsx,js,jsx}`
- `*.html`
- `.env`
- `tailwind.config.js`

**Note**: Changes to `vite.config.ts` or `package.json` require server restart.

---

## Project Structure Deep Dive

### Source Code Organization

```
src/
├── common/ui/              # Reusable UI components
│   ├── button/
│   │   └── index.tsx       # Button component
│   ├── input/
│   │   └── index.tsx       # Input field component
│   └── loader/
│       └── index.tsx       # Loading spinner
│
├── components/             # Feature-specific components
│   ├── confirm-information.tsx    # Registration confirmation
│   ├── login-modal.tsx            # Main modal container
│   ├── login-submit.tsx           # Login form
│   ├── registration-form.tsx      # Registration form
│   └── update-password.tsx        # Password update form
│
├── functions/              # Utility functions
│   └── index.ts            # Validation, helpers
│
├── icons/                  # Image assets
│   ├── check-success.png
│   └── info-error.png
│
├── mock/                   # Mock data
│   ├── api-mock.ts         # Mock API responses
│   └── registration-form-mock.ts  # Form configurations
│
├── services/               # API layer
│   └── index.ts            # HTTP service functions
│
├── types/                  # TypeScript types
│   └── index.ts            # Interface definitions
│
├── App.tsx                 # Root component
├── main.tsx                # Application entry point
├── index.css               # Global styles (Tailwind)
└── custom.d.ts             # TypeScript declarations
```

### Configuration Files

```
├── .env                    # Environment variables
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind customization
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # App-specific TS config
└── vite.config.ts          # Vite build configuration
```

---

## Creating New Components

### UI Component Template

Location: `src/common/ui/component-name/index.tsx`

```typescript
import { FC } from 'react';

interface ComponentNameProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const ComponentName: FC<ComponentNameProps> = ({ 
  label, 
  onClick, 
  className = '' 
}) => {
  return (
    <div className={`base-classes ${className}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default ComponentName;
```

**Checklist**:
- [ ] Create TypeScript interface for props
- [ ] Use Tailwind CSS classes
- [ ] Export as default
- [ ] Add PropTypes or TypeScript validation
- [ ] Document complex props

### Feature Component Template

Location: `src/components/component-name.tsx`

```typescript
import { FC, useState } from 'react';
import type { ComponentProps } from '../types';

const ComponentName: FC<ComponentProps> = ({ initialData, onSubmit }) => {
  const [state, setState] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAction = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Business logic
      await onSubmit(state);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Component UI */}
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default ComponentName;
```

---

## Working with TypeScript

### Adding New Types

Location: `src/types/index.ts`

```typescript
// Component Props
export interface NewComponentProps {
  title: string;
  data: DataType[];
  onSelect: (item: DataType) => void;
}

// API Response
export interface ApiResponse {
  success: boolean;
  data: any;
  message?: string;
}

// Form Data
export interface FormValues {
  email: string;
  password: string;
}
```

### Type Guards

```typescript
function isValidEmail(value: any): value is string {
  return typeof value === 'string' && value.includes('@');
}
```

### Using Generics

```typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const response: ApiResponse<UserData> = await fetchUser();
```

---

## Styling with Tailwind CSS

### Important Configuration

The widget uses a scoped `important` selector to ensure styles work when embedded in external sites:

```javascript
// tailwind.config.js
export default {
  important: '#auth', // Scopes all utilities to widget container
  // ...
}
```

**Why?**
- ✅ Prevents conflicts with host page styles
- ✅ Ensures widget styles take precedence
- ✅ Works in WordPress, CMSs, and other platforms
- ✅ Avoids global `!important` pollution

**Usage**: The widget container must have `id="auth"`:
```html
<keycloak-widget id="auth"></keycloak-widget>
```

**Note**: Do NOT use `important: true` as it causes issues in production builds.

### Common Patterns

**Layout**:
```typescript
<div className="flex items-center justify-between gap-4">
  <div className="flex-1">Content</div>
  <div className="flex-shrink-0">Sidebar</div>
</div>
```

**Form Fields**:
```typescript
<input 
  className="w-full py-2.5 px-3 border border-gray-300 rounded-lg 
             focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
             outline-none transition-colors"
/>
```

**Buttons**:
```typescript
<button 
  className="bg-primary hover:bg-primary-hover text-white 
             py-3 px-6 rounded-lg font-semibold 
             transition-colors duration-200 
             disabled:opacity-50 disabled:cursor-not-allowed"
>
  Submit
</button>
```

### Custom Classes

Edit `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        'brand': '#your-color',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
}
```

### Responsive Design

```typescript
<div className="
  w-full          // Mobile
  md:w-1/2        // Tablet
  lg:w-1/3        // Desktop
  xl:w-1/4        // Large desktop
">
  Responsive Content
</div>
```

---

## API Integration

### Adding New API Endpoint

Location: `src/services/index.ts`

```typescript
import axios from 'axios';

export const newApiFunction = async (params: ParamsType) => {
  try {
    const response = await axios.post('/api/endpoint', params);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
```

### Using API in Components

```typescript
import { newApiFunction } from '../services';

const MyComponent = () => {
  const handleSubmit = async (data) => {
    try {
      const result = await newApiFunction(data);
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
```

### API Proxy Configuration

For development, edit `vite.config.ts`:

```typescript
server: {
  proxy: {
    '/api': {
      target: 'https://your-api.com',
      changeOrigin: true,
      secure: true,
      rewrite: (path) => path.replace(/^\/api/, '/api'),
    },
  },
}
```

---

## Testing Modes

### TEST Mode (Development)

**Setup**:
```env
VITE_RENDER_MODE=TEST
```

```bash
npm run dev
```

**Characteristics**:
- Full React app
- BrowserRouter with URL navigation
- DevTools available
- HMR enabled
- Mounted to `#root` in `index.html`

**When to Use**:
- Local development
- Feature testing
- Debugging
- UI adjustments

### WEBCOMPONENT Mode (Production)

**Setup**:
```env
VITE_RENDER_MODE=WEBCOMPONENT
```

```bash
npm run build
```

**Testing**:
Open `widget-test.html` in browser or:

```bash
# Serve the built files
npx serve .
# Visit http://localhost:3000/widget-test.html
```

**Characteristics**:
- Custom HTML element
- MemoryRouter (no URL changes)
- Isolated component
- Production bundle

**When to Use**:
- Testing web component functionality
- Integration testing
- Pre-deployment verification

---

## Building for Production

### Build Command

```bash
npm run build
```

**Output**:
```
dist/
├── keycloak-widget.umd.js    # ~180KB gzipped
└── login-widget.css          # ~45KB gzipped
```

### Build Process

1. **TypeScript Compilation**: `.tsx` → `.js`
2. **Bundling**: All dependencies bundled
3. **Minification**: Code & CSS minified
4. **Tree Shaking**: Unused code removed
5. **Asset Optimization**: Images optimized

### Build Configuration

Edit `vite.config.ts`:

```typescript
build: {
  cssCodeSplit: false,        // Single CSS file
  minify: 'terser',           // Minification tool
  sourcemap: false,           // Set true for debugging
  lib: {
    entry: "src/main.tsx",
    name: "KeycloakWidget",
    formats: ["umd"],
    fileName: () => "keycloak-widget.umd.js",
  },
}
```

### Analyzing Bundle Size

```bash
npm run build -- --mode analyze
```

Or use:
```bash
npx vite-bundle-visualizer
```

---

## Debugging

### Browser DevTools

**React DevTools**:
- Install browser extension
- Inspect component tree
- View props and state
- Profile performance

**Console Logging**:
```typescript
console.log('Debug:', variable);
console.table(arrayData);
console.error('Error:', error);
```

### VS Code Debugging

`.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

### TypeScript Errors

```bash
# Type check without building
npx tsc --noEmit
```

### Network Debugging

Use browser DevTools Network tab:
- Monitor API calls
- Check request/response
- Verify headers
- Debug CORS issues

---

## Code Quality

### Linting

```bash
# Run ESLint
npm run lint

# Auto-fix issues
npm run lint -- --fix
```

### Formatting

Recommended: Install Prettier

```bash
npm install --save-dev prettier
```

`.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### Type Checking

```bash
# Continuous type checking
npx tsc --watch --noEmit
```

---

## Git Workflow

### Branching Strategy

```
main              # Production-ready code
├── develop       # Development branch
├── feature/*     # New features
├── fix/*         # Bug fixes
└── release/*     # Release preparation
```

### Commit Convention

Follow **Conventional Commits** for clear history:

```bash
# Format: type(scope): message

feat(auth): add password reset functionality
fix(button): correct hover state styling
docs(readme): update installation instructions
refactor(api): simplify error handling
test(login): add unit tests for validation
chore(deps): update dependencies
perf(bundle): reduce bundle size
```

**Common Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build process, dependencies
- `perf`: Performance improvements
- `style`: Code style/formatting

### Commit Workflow

#### 1. Stage Changes

```bash
# Check status
git status

# Stage specific files
git add src/components/login-modal.tsx

# Stage all changes
git add .

# Stage interactively
git add -p
```

#### 2. Commit Changes

```bash
# Commit with message
git commit -m "feat(auth): add OAuth callback handling"

# Commit with detailed description
git commit -m "feat(auth): add OAuth callback handling" -m "- Implement callback URL parsing
- Add token exchange logic
- Update documentation"
```

#### 3. Push Changes

```bash
# Push to current branch
git push

# Push to specific branch
git push origin feature/oauth-callback

# Force push (use with caution)
git push --force-with-lease
```

### Before Committing Checklist

```bash
# 1. Lint code
npm run lint

# 2. Type check
npx tsc --noEmit

# 3. Build successfully
npm run build

# 4. Test manually
npm run dev
```

---

## Release Process

### Version Numbering (Semantic Versioning)

Follow **SemVer** (MAJOR.MINOR.PATCH):

```
v1.2.3
│ │ └─── PATCH: Bug fixes, minor changes
│ └───── MINOR: New features (backward compatible)
└─────── MAJOR: Breaking changes
```

**Examples**:
- `v1.0.0` → `v1.0.1` - Bug fix
- `v1.0.1` → `v1.1.0` - New feature
- `v1.1.0` → `v2.0.0` - Breaking change

### Step-by-Step Release

#### 1. Prepare Release

```bash
# Ensure on main branch
git checkout main
git pull origin main

# Run final tests
npm run lint
npm run build

# Test the build
npm run dev
```

#### 2. Update Version

```bash
# Update package.json version
npm version patch   # 1.0.0 → 1.0.1 (bug fixes)
npm version minor   # 1.0.0 → 1.1.0 (new features)
npm version major   # 1.0.0 → 2.0.0 (breaking changes)

# Or manually edit package.json
{
  "version": "1.2.3"
}
```

#### 3. Create and Push Git Tag

```bash
# Create annotated tag
git tag -a v1.2.3 -m "Release v1.2.3 - Add authority auto-detection"

# Push commits
git push origin main

# Push tag
git push origin v1.2.3

# Or push all tags
git push --tags
```

#### 4. Create GitHub Release

**Option A: GitHub CLI**
```bash
gh release create v1.2.3 \
  --title "v1.2.3 - Authority Auto-Detection" \
  --notes "### Features
- Auto-detect environment from domain
- Simplified authority configuration
- New environment shortcuts

### Bug Fixes
- Fix Tailwind important selector issue

### Documentation
- Update API reference
- Add authority configuration guide"
```

**Option B: GitHub Web UI**
1. Go to: https://github.com/ManojColibriDEV/cdn-demo/releases/new
2. Choose tag: `v1.2.3`
3. Add release title: `v1.2.3 - Authority Auto-Detection`
4. Add release notes (see template below)
5. Click "Publish release"

#### 5. Verify CDN Deployment

Wait 5-10 minutes for jsDelivr to update, then verify:

```bash
# Check specific version
curl -I https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@v1.2.3/dist/keycloak-widget.umd.js

# Purge cache if needed
curl https://purge.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@v1.2.3/dist/keycloak-widget.umd.js
```

### Release Notes Template

```markdown
## v1.2.3 - Authority Auto-Detection

**Release Date**: January 3, 2026

### ✨ New Features
- 🚀 Auto-detect environment from domain URL
- 🎯 Simplified authority configuration with shortcuts (dev/staging/prod)
- 📝 New `resolveAuthority` utility

### 🐛 Bug Fixes
- Fixed Tailwind `important` selector causing production build issues
- Resolved TypeScript `import.meta.env` type errors

### 📚 Documentation
- Added Authority Configuration Guide
- Updated API Reference with new attributes
- Enhanced Development Guide with Tailwind notes

### 🔄 Breaking Changes
None - Fully backward compatible

### 📦 Migration Guide
```html
<!-- Old (still works) -->
<keycloak-widget authority="https://dev-keycloak.colibricore.io"></keycloak-widget>

<!-- New (recommended) -->
<keycloak-widget authority="dev"></keycloak-widget>
```

### 🔗 Links
- [Full Changelog](https://github.com/ManojColibriDEV/cdn-demo/compare/v1.2.2...v1.2.3)
- [Documentation](https://github.com/ManojColibriDEV/cdn-demo/blob/main/README.md)
```

### Quick Release Commands

```bash
# Complete release workflow (example)
git checkout main
git pull origin main
npm run lint
npm run build
npm version minor  # Creates commit and tag
git push origin main
git push origin v1.2.0
gh release create v1.2.0 --title "v1.2.0" --notes "Release notes here"
```

### Rollback a Release

If you need to rollback:

```bash
# Delete remote tag
git push --delete origin v1.2.3

# Delete local tag
git tag -d v1.2.3

# Delete GitHub release (use web UI or gh CLI)
gh release delete v1.2.3

# Revert commits if needed
git revert <commit-hash>
git push origin main
```

---

## Common Development Tasks

### Adding a New Environment Variable

1. Add to `.env`:
   ```env
   VITE_NEW_VAR=value
   ```

2. Access in code:
   ```typescript
   const value = import.meta.env.VITE_NEW_VAR;
   ```

3. Add TypeScript definition (optional):
   ```typescript
   // src/vite-env.d.ts
   interface ImportMetaEnv {
     VITE_NEW_VAR: string;
   }
   ```

### Adding a New Icon

1. Place in `src/icons/icon-name.png`
2. Import in component:
   ```typescript
   import iconName from '../icons/icon-name.png';
   ```
3. Use in JSX:
   ```typescript
   <img src={iconName} alt="Description" />
   ```

### Creating Mock Data

`src/mock/new-mock.ts`:
```typescript
export const mockData = {
  items: [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ],
};

export const getMockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500);
  });
};
```

### Adding Form Validation

```typescript
const validateEmail = (email: string): string | null => {
  if (!email) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Invalid email format';
  }
  return null;
};

// In component
const [emailError, setEmailError] = useState<string | null>(null);

const handleChange = (e) => {
  const error = validateEmail(e.target.value);
  setEmailError(error);
};
```

---

## Performance Optimization

### React.memo for Expensive Components

```typescript
import { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  // Complex rendering
  return <div>{/* ... */}</div>;
});
```

### Lazy Loading

```typescript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### useMemo for Expensive Calculations

```typescript
import { useMemo } from 'react';

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
```

---

## Troubleshooting

### Common Issues

**1. Port Already in Use**
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

**2. Module Not Found**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**3. Tailwind Classes Not Working**
- Restart dev server
- Check `tailwind.config.js` content paths
- Verify `@import "tailwindcss"` in `index.css`

**4. Build Fails**
```bash
# Clear cache
rm -rf dist
rm -rf node_modules/.vite

# Rebuild
npm run build
```

**5. TypeScript Errors**
```bash
# Restart TypeScript server in VS Code
# Cmd+Shift+P → "TypeScript: Restart TS Server"
```

---

## Best Practices

### Component Design

✅ **DO**:
- Keep components focused and small
- Use TypeScript interfaces
- Extract reusable logic
- Use meaningful prop names
- Handle loading and error states

❌ **DON'T**:
- Mix business logic with presentation
- Use inline styles (use Tailwind)
- Ignore TypeScript warnings
- Leave console.logs in production code

### State Management

✅ **DO**:
- Keep state close to where it's used
- Lift state up when needed
- Use controlled components for forms
- Clean up in useEffect

❌ **DON'T**:
- Create unnecessary state
- Mutate state directly
- Forget dependency arrays in useEffect

### Styling

✅ **DO**:
- Use Tailwind utility classes
- Follow responsive design patterns
- Use custom theme colors
- Keep consistent spacing

❌ **DON'T**:
- Write custom CSS files
- Use arbitrary values excessively
- Ignore mobile-first approach

---

## Development Checklist

Before submitting code:

- [ ] Code compiles without TypeScript errors
- [ ] ESLint shows no errors
- [ ] Component tested in TEST mode
- [ ] Component tested in WEBCOMPONENT mode
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors in browser
- [ ] Proper error handling implemented
- [ ] Loading states added where needed
- [ ] Code commented where necessary
- [ ] Git commit message follows convention

---

## Getting Help

### Resources

- **React Docs**: https://react.dev
- **TypeScript Docs**: https://www.typescriptlang.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vite**: https://vitejs.dev

### Internal Documentation

- [Architecture](./ARCHITECTURE.md)
- [Usage Guide](./USAGE.md)
- [Web Component Guide](./WEB-COMPONENT.md)

---

## Contributing

See contribution guidelines in main README.

---

**Last Updated**: December 29, 2025
