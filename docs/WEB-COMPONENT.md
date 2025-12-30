# Web Component Deep Dive

## Introduction

This document provides an in-depth exploration of the Colibri Identity Login Widget's web component implementation. Learn how the custom element works under the hood, its lifecycle, isolation strategies, and integration patterns.

---

## Table of Contents

1. [Web Component Basics](#web-component-basics)
2. [Custom Element Lifecycle](#custom-element-lifecycle)
3. [Attribute Reactivity](#attribute-reactivity)
4. [Styling & Isolation](#styling--isolation)
5. [Event System](#event-system)
6. [Embedding Patterns](#embedding-patterns)
7. [Advanced Techniques](#advanced-techniques)
8. [Performance Considerations](#performance-considerations)
9. [Browser Compatibility](#browser-compatibility)
10. [Debugging](#debugging)

---

## Web Component Basics

### What is a Web Component?

A Web Component is a set of web platform APIs that allow you to create reusable custom HTML elements with encapsulated functionality.

**Our widget uses**:
- ✅ Custom Elements (defining `<keycloak-widget>`)
- ✅ JavaScript Modules (UMD bundle)
- ❌ Shadow DOM (not used - see [Styling & Isolation](#styling--isolation))
- ❌ HTML Templates (React handles templating)

### Registration

The widget registers as a custom HTML element:

```javascript
// In main.tsx
if (import.meta.env.VITE_RENDER_MODE === 'WEBCOMPONENT') {
  class KeycloakWidget extends HTMLElement {
    root: Root | null = null;

    connectedCallback() {
      // Create React root and render
      this.root = createRoot(this);
      this.root.render(
        <StrictMode>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </StrictMode>
      );
    }

    disconnectedCallback() {
      // Cleanup when removed
      this.root?.unmount();
    }
  }

  customElements.define('keycloak-widget', KeycloakWidget);
}
```

**Key Points**:
- Extends `HTMLElement` base class
- Uses `customElements.define()` to register tag name
- Must contain a hyphen (`keycloak-widget`)
- Case-insensitive in HTML, camelCase in JS

---

## Custom Element Lifecycle

### Lifecycle Callbacks

The widget implements these standard lifecycle methods:

```typescript
class KeycloakWidget extends HTMLElement {
  // 1. Constructor
  constructor() {
    super();
    // Initialize properties
    // ⚠️ Don't access attributes or children here
  }

  // 2. Connected to DOM
  connectedCallback() {
    // Element added to document
    // ✅ Safe to access attributes
    // ✅ Safe to render
    this.root = createRoot(this);
    this.root.render(<App />);
  }

  // 3. Disconnected from DOM
  disconnectedCallback() {
    // Element removed from document
    // ✅ Cleanup subscriptions
    // ✅ Unmount React
    this.root?.unmount();
  }

  // 4. Attribute changed (future)
  attributeChangedCallback(name, oldValue, newValue) {
    // Attribute value changed
    // ✅ Re-render if needed
  }

  // 5. Adopted to new document (rare)
  adoptedCallback() {
    // Element moved to new document
  }
}
```

### Lifecycle Flow Diagram

```
┌─────────────────┐
│   Constructor   │
│   Called        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Element Added   │
│ to DOM          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ connectedCallback│ ◄── React App Rendered
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Element Active  │ ◄── User Interactions
│ in Document     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Element Removed │
│ from DOM        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│disconnectedCallback│ ◄── React Unmounted
└─────────────────┘
```

### React Integration

The widget bridges custom element lifecycle with React:

```typescript
connectedCallback() {
  // Create React root attached to the custom element
  this.root = createRoot(this); // 'this' is the <keycloak-widget> element
  
  // Render React app inside the custom element
  this.root.render(
    <StrictMode>
      <MemoryRouter> {/* Use MemoryRouter for isolation */}
        <App />
      </MemoryRouter>
    </StrictMode>
  );
}

disconnectedCallback() {
  // Unmount React when element removed
  this.root?.unmount();
  this.root = null;
}
```

**Why MemoryRouter?**
- Doesn't rely on browser URL
- Avoids conflicts with host page routing
- Self-contained navigation state
- Works in any embedding context

---

## Attribute Reactivity

### Observed Attributes

To make attributes reactive, declare them:

```typescript
class KeycloakWidget extends HTMLElement {
  static observedAttributes = ['redirecturl', 'environment', 'subsidiary', 'theme'];
  
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (oldValue !== newValue) {
      // Re-render or update state
      this.handleAttributeChange(name, newValue);
    }
  }
  
  handleAttributeChange(name: string, value: string | null) {
    switch(name) {
      case 'redirecturl':
        // Update redirect logic
        break;
      case 'theme':
        // Update theme
        break;
    }
  }
}
```

### Reading Attributes

```html
<keycloak-widget redirecturl="/dashboard" environment="prod"></keycloak-widget>
```

```javascript
const widget = document.querySelector('keycloak-widget');

// Get attribute
const redirectUrl = widget.getAttribute('redirecturl'); // "/dashboard"

// Check existence
const hasTheme = widget.hasAttribute('theme'); // false

// Set attribute
widget.setAttribute('redirecturl', '/new-path');

// Remove attribute
widget.removeAttribute('environment');
```

### Attribute vs Property

**HTML Attributes** (lowercase, kebab-case):
```html
<keycloak-widget redirect-url="/dashboard"></keycloak-widget>
```

**JavaScript Properties** (camelCase):
```javascript
widget.redirectUrl = '/dashboard';
```

**Best Practice**: Define property getters/setters:

```typescript
class KeycloakWidget extends HTMLElement {
  get redirectUrl() {
    return this.getAttribute('redirecturl') || '/';
  }
  
  set redirectUrl(value: string) {
    this.setAttribute('redirecturl', value);
  }
}

// Usage
widget.redirectUrl = '/dashboard'; // Sets attribute automatically
```

---

## Styling & Isolation

### No Shadow DOM Approach

The widget **does not use Shadow DOM**. Instead:

**Advantages**:
- ✅ Global styles can reach widget content
- ✅ Simpler Tailwind CSS integration
- ✅ No slot/part complexity
- ✅ Easier to debug

**Disadvantages**:
- ❌ No style encapsulation
- ❌ Host page styles can leak in
- ❌ Widget styles can leak out

### Style Loading Strategy

```html
<!-- Host page must include widget CSS -->
<link rel="stylesheet" href="https://cdn.../login-widget.css" />

<keycloak-widget></keycloak-widget>
```

**Why external CSS?**
- Tailwind generates single CSS file
- Browser caching benefits
- Easier to update styles independently
- Smaller JavaScript bundle

### Preventing Style Conflicts

**Namespace Tailwind Classes**:
```jsx
// All widget content wrapped in namespaced container
<div className="keycloak-widget-root">
  {/* Widget content */}
</div>
```

**Use Specific Selectors**:
```css
/* Target only widget elements */
.keycloak-widget-root button {
  /* Widget button styles */
}
```

**Host Page Protection**:
```css
/* Prevent widget from affecting host */
keycloak-widget {
  all: initial; /* Reset all properties */
  display: block;
}
```

### CSS Custom Properties

Use CSS variables for theming:

```css
:root {
  --keycloak-primary-color: #a64d9a;
  --keycloak-teal-color: #33bfb6;
  --keycloak-font-family: 'Brandon Grotesque', sans-serif;
}

keycloak-widget {
  color: var(--keycloak-primary-color);
}
```

**Override from host page**:
```html
<style>
  keycloak-widget {
    --keycloak-primary-color: #ff0000; /* Custom primary color */
  }
</style>
```

---

## Event System

### Dispatching Custom Events

```typescript
class KeycloakWidget extends HTMLElement {
  notifyLoginSuccess(userData: any) {
    const event = new CustomEvent('login-success', {
      detail: userData,
      bubbles: true,    // Event bubbles up DOM
      composed: true,   // Event crosses shadow boundaries
      cancelable: false
    });
    
    this.dispatchEvent(event);
  }
  
  notifyLoginError(error: any) {
    this.dispatchEvent(new CustomEvent('login-error', {
      detail: error,
      bubbles: true,
      composed: true
    }));
  }
}
```

### Listening to Events

**In Host Page**:
```javascript
const widget = document.querySelector('keycloak-widget');

widget.addEventListener('login-success', (event) => {
  console.log('User data:', event.detail);
  // Redirect, show notification, etc.
});

widget.addEventListener('login-error', (event) => {
  console.error('Login failed:', event.detail);
});
```

**Event Delegation** (for dynamically added widgets):
```javascript
document.addEventListener('login-success', (event) => {
  if (event.target.tagName === 'KEYCLOAK-WIDGET') {
    console.log('Login from widget:', event.detail);
  }
});
```

### Available Events (Future)

| Event Name | Detail | Description |
|------------|--------|-------------|
| `redirect` ✅ | `{ url: string }` | **IMPLEMENTED** - Widget needs to redirect after login |
| `login-success` | `{ user, token }` | User successfully logged in |
| `login-error` | `{ error, message }` | Login failed |
| `register-success` | `{ user }` | User successfully registered |
| `register-error` | `{ error, message }` | Registration failed |
| `modal-open` | `{}` | Login modal opened |
| `modal-close` | `{}` | Login modal closed |

### Redirect Event Pattern (Best Practice)

The widget dispatches a `redirect` event after successful authentication instead of directly navigating. This provides clean separation and avoids iframe/popup blocking issues.

**Implementation**:

```javascript
// In the widget (main.tsx)
class KeycloakWidget extends HTMLElement {
  private handleRedirect = (url: string) => {
    this.dispatchEvent(
      new CustomEvent("redirect", {
        detail: { url },
        bubbles: true,
        composed: true
      })
    );
  }
}
```

**Usage in Host Page**:

```html
<keycloak-widget 
  id="auth"
  redirectUrl="/dashboard"
></keycloak-widget>

<script>
  document.getElementById("auth")
    .addEventListener("redirect", function(e) {
      console.log("Redirecting to:", e.detail.url);
      
      // You control the redirect
      window.location.href = e.detail.url;
    });
</script>
```

**Advanced Example with SPA Router**:

```javascript
// For React Router
widget.addEventListener("redirect", (e) => {
  const targetUrl = e.detail.url;
  
  // Use React Router instead of full page reload
  if (targetUrl.startsWith('/')) {
    navigate(targetUrl); // React Router
  } else {
    window.location.href = targetUrl;
  }
});

// For Vue Router
widget.addEventListener("redirect", (e) => {
  router.push(e.detail.url);
});
```

**Benefits**:
- ✅ Works perfectly in WordPress, iframes, and all CMS platforms
- ✅ No popup blocking issues
- ✅ Full control over navigation behavior
- ✅ Easy to add analytics or custom logic
- ✅ Clean separation between widget and host page

---

## Embedding Patterns

### Pattern 1: Direct HTML

Simplest approach:

```html
<keycloak-widget redirecturl="/dashboard"></keycloak-widget>
```

### Pattern 2: Dynamic Creation

Create widget programmatically:

```javascript
function showLoginWidget(container, options = {}) {
  const widget = document.createElement('keycloak-widget');
  
  // Set attributes
  Object.entries(options).forEach(([key, value]) => {
    widget.setAttribute(key, value);
  });
  
  // Add to DOM
  container.appendChild(widget);
  
  return widget;
}

// Usage
const widget = showLoginWidget(
  document.getElementById('widget-container'),
  { redirecturl: '/dashboard', environment: 'production' }
);
```

### Pattern 3: Conditional Loading

Load widget only when needed:

```javascript
let widgetLoaded = false;

async function loadWidget() {
  if (widgetLoaded) return;
  
  // Load CSS
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://cdn.../login-widget.css';
  document.head.appendChild(css);
  
  // Load JavaScript
  await new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.../keycloak-widget.umd.js';
    script.onload = resolve;
    document.body.appendChild(script);
  });
  
  widgetLoaded = true;
}

// Trigger loading
document.getElementById('loginBtn').addEventListener('click', async () => {
  await loadWidget();
  
  const widget = document.createElement('keycloak-widget');
  widget.setAttribute('redirecturl', '/dashboard');
  document.body.appendChild(widget);
});
```

### Pattern 4: React Wrapper Component

```jsx
import { useEffect, useRef } from 'react';

// Declare custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'keycloak-widget': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          redirecturl?: string;
          environment?: string;
        },
        HTMLElement
      >;
    }
  }
}

export function KeycloakWidget({ redirectUrl, onLoginSuccess }) {
  const widgetRef = useRef(null);

  useEffect(() => {
    const widget = widgetRef.current;
    if (!widget) return;

    const handleLogin = (event) => {
      onLoginSuccess?.(event.detail);
    };

    widget.addEventListener('login-success', handleLogin);
    
    return () => {
      widget.removeEventListener('login-success', handleLogin);
    };
  }, [onLoginSuccess]);

  return (
    <keycloak-widget
      ref={widgetRef}
      redirecturl={redirectUrl}
    />
  );
}

// Usage
<KeycloakWidget 
  redirectUrl="/dashboard"
  onLoginSuccess={(data) => console.log('Logged in:', data)}
/>
```

### Pattern 5: Multiple Instances

Manage multiple widgets:

```javascript
class WidgetManager {
  constructor() {
    this.widgets = new Map();
  }
  
  create(id, container, options) {
    const widget = document.createElement('keycloak-widget');
    
    Object.entries(options).forEach(([key, value]) => {
      widget.setAttribute(key, value);
    });
    
    container.appendChild(widget);
    this.widgets.set(id, widget);
    
    return widget;
  }
  
  remove(id) {
    const widget = this.widgets.get(id);
    if (widget) {
      widget.remove();
      this.widgets.delete(id);
    }
  }
  
  removeAll() {
    this.widgets.forEach(widget => widget.remove());
    this.widgets.clear();
  }
}

// Usage
const manager = new WidgetManager();

manager.create('admin', document.getElementById('admin-area'), {
  redirecturl: '/admin',
  subsidiary: 'admin'
});

manager.create('user', document.getElementById('user-area'), {
  redirecturl: '/user',
  subsidiary: 'user'
});

// Later cleanup
manager.removeAll();
```

---

## Advanced Techniques

### Method Invocation

Expose methods on the custom element:

```typescript
class KeycloakWidget extends HTMLElement {
  // Public API methods
  openModal() {
    // Trigger modal open
    this.dispatchEvent(new CustomEvent('trigger-modal-open'));
  }
  
  closeModal() {
    // Trigger modal close
    this.dispatchEvent(new CustomEvent('trigger-modal-close'));
  }
  
  reset() {
    // Reset widget state
    this.root?.unmount();
    this.connectedCallback();
  }
}
```

**Usage**:
```javascript
const widget = document.querySelector('keycloak-widget');

// Open modal programmatically
widget.openModal();

// Close modal
widget.closeModal();

// Reset widget
widget.reset();
```

### Data Passing to React

Pass configuration from attributes to React:

```typescript
class KeycloakWidget extends HTMLElement {
  connectedCallback() {
    const config = {
      redirectUrl: this.getAttribute('redirecturl') || '/',
      environment: this.getAttribute('environment') || 'test',
      subsidiary: this.getAttribute('subsidiary') || 'allied',
      theme: this.getAttribute('theme') || 'light'
    };
    
    this.root = createRoot(this);
    this.root.render(
      <StrictMode>
        <MemoryRouter>
          <App config={config} />
        </MemoryRouter>
      </StrictMode>
    );
  }
}
```

### Slot Alternative (Without Shadow DOM)

Since we don't use Shadow DOM, we can use regular DOM manipulation:

```typescript
class KeycloakWidget extends HTMLElement {
  connectedCallback() {
    // Read content before React overwrites
    const customContent = this.innerHTML;
    
    this.root = createRoot(this);
    this.root.render(
      <App customContent={customContent} />
    );
  }
}
```

**Usage**:
```html
<keycloak-widget>
  <!-- This content passed to React -->
  <div>Custom header content</div>
</keycloak-widget>
```

---

## Performance Considerations

### Lazy Registration

Register custom element only when needed:

```javascript
if (!customElements.get('keycloak-widget')) {
  customElements.define('keycloak-widget', KeycloakWidget);
}
```

### Memory Management

```typescript
class KeycloakWidget extends HTMLElement {
  disconnectedCallback() {
    // ✅ Unmount React
    this.root?.unmount();
    this.root = null;
    
    // ✅ Remove event listeners
    this.removeAllListeners();
    
    // ✅ Clear references
    this.config = null;
  }
  
  removeAllListeners() {
    // Clean up any attached listeners
    this.replaceWith(this.cloneNode(true));
  }
}
```

### Avoiding Re-renders

```typescript
attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
  // Only re-render if value actually changed
  if (oldValue === newValue) return;
  
  // Debounce rapid changes
  clearTimeout(this.updateTimeout);
  this.updateTimeout = setTimeout(() => {
    this.updateAttribute(name, newValue);
  }, 100);
}
```

### Bundle Size Optimization

Current widget bundle:
- JavaScript: ~180KB (UMD)
- CSS: ~45KB

**Optimizations**:
- Tree-shaking unused code
- Minification
- Compression (gzip/brotli)
- Code splitting (future)

---

## Browser Compatibility

### Custom Elements Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 67+ | ✅ Native |
| Firefox | 63+ | ✅ Native |
| Safari | 10.1+ | ✅ Native |
| Edge | 79+ | ✅ Native |
| IE 11 | - | ❌ Requires polyfill |

### Polyfills

For older browsers:

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2/webcomponents-loader.js"></script>
<script src="https://unpkg.com/@webcomponents/custom-elements@1/custom-elements.min.js"></script>
```

Then load widget:

```html
<script>
  window.addEventListener('WebComponentsReady', function() {
    // Load widget
    const script = document.createElement('script');
    script.src = 'keycloak-widget.umd.js';
    document.body.appendChild(script);
  });
</script>
```

---

## Debugging

### Check Registration

```javascript
// Check if custom element is defined
console.log(customElements.get('keycloak-widget')); // Should return class

// Wait for definition
customElements.whenDefined('keycloak-widget').then(() => {
  console.log('Widget is defined');
});
```

### Inspect Element

```javascript
const widget = document.querySelector('keycloak-widget');

console.log('Widget:', widget);
console.log('Attributes:', Array.from(widget.attributes));
console.log('Root:', widget.root);
console.log('Connected:', widget.isConnected);
```

### Monitor Lifecycle

```typescript
class KeycloakWidget extends HTMLElement {
  constructor() {
    super();
    console.log('[Widget] Constructor called');
  }

  connectedCallback() {
    console.log('[Widget] Connected to DOM');
    console.log('[Widget] Attributes:', this.attributes);
    // ... rest of code
  }

  disconnectedCallback() {
    console.log('[Widget] Disconnected from DOM');
    // ... rest of code
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`[Widget] Attribute "${name}" changed:`, oldValue, '→', newValue);
  }
}
```

### DevTools

**Chrome DevTools**:
1. Elements panel → Find `<keycloak-widget>`
2. Right-click → Store as global variable
3. Console: `temp1.openModal()` to call methods

**React DevTools**:
1. Install React DevTools extension
2. Inspect component tree inside widget
3. View props, state, hooks

---

## Best Practices

### ✅ DO

- Always unmount React in `disconnectedCallback`
- Use `MemoryRouter` for routing isolation
- Implement `attributeChangedCallback` for reactivity
- Dispatch custom events for communication
- Load CSS before JavaScript
- Use versioned CDN URLs
- Test in multiple browsers
- Validate attribute values
- Handle errors gracefully

### ❌ DON'T

- Don't use browser history API (use MemoryRouter)
- Don't assume Shadow DOM (we don't use it)
- Don't access DOM in constructor
- Don't create memory leaks (clean up properly)
- Don't mutate widget internals from outside
- Don't rely on global variables
- Don't block the main thread

---

## Future Enhancements

- [ ] Shadow DOM support (optional)
- [ ] Full attribute reactivity
- [ ] Rich event system
- [ ] TypeScript definitions export
- [ ] npm package distribution
- [ ] Storybook documentation
- [ ] Unit tests for web component lifecycle
- [ ] Performance monitoring
- [ ] A11y improvements

---

## References

- [MDN: Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Custom Elements Spec](https://html.spec.whatwg.org/multipage/custom-elements.html)
- [React in Web Components](https://reactjs.org/docs/web-components.html)
- [Web Components Best Practices](https://web.dev/custom-elements-best-practices/)

---

**Last Updated**: December 29, 2025
