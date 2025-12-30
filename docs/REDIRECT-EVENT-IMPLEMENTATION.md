# Redirect Event Implementation Summary

## ✅ Implementation Complete

The widget now uses **custom event dispatch pattern** for handling redirects after successful authentication. This is a best practice for web components that avoids iframe/popup blocking issues and provides clean separation between the widget and host application.

## What Was Changed

### 1. Core Function Changes

**File: `src/functions/index.ts`**
- Modified `handleSubmit` function to accept an `onRedirect` callback
- Replaced direct `window.location.href` navigation with callback invocation
- The function now calls `onRedirect(redirectUrl)` instead of navigating directly

### 2. Type Definitions

**File: `src/types/index.ts`**
- Added `onRedirect?: (url: string) => void` to `HandleSubmitProps`
- Added `onRedirect?: (url: string) => void` to `LoginModalProps`
- Added `onRedirect?: (url: string) => void` to `LoginSubmitProps`

### 3. Component Updates

**File: `src/App.tsx`**
- Added `onRedirect` prop to App component
- Passes `onRedirect` down to LoginModal component

**File: `src/components/login-modal.tsx`**
- Accepts `onRedirect` prop
- Passes it to LoginSubmit component

**File: `src/components/login-submit.tsx`**
- Accepts `onRedirect` prop
- Passes it to `handleSubmit` function

### 4. Web Component Implementation

**File: `src/main.tsx`**
- Added `handleRedirect` method to `KeycloakWidget` class
- Method dispatches custom `redirect` event with URL in detail
- Event has `bubbles: true` and `composed: true` for maximum compatibility
- `handleRedirect` is passed to App component via props

### 5. Documentation Updates

**File: `docs/USAGE.md`**
- Added comprehensive "Event Handling" section
- Included basic and advanced examples
- Documented WordPress/CMS integration pattern
- Listed all benefits of event-based approach

**File: `docs/API-REFERENCE.md`**
- Added `redirect` event documentation in Events section
- Marked as ✅ IMPLEMENTED
- Included TypeScript types and complete examples
- Added use cases and integration patterns

**File: `docs/WEB-COMPONENT.md`**
- Updated events table with redirect event
- Added "Redirect Event Pattern (Best Practice)" section
- Included SPA router integration examples (React Router, Vue Router)

**File: `README.md`**
- Updated quick start with event listener example
- Added "Why Use Event Listeners?" section
- Highlighted benefits and best practices

### 6. Example Files

**File: `widget-test.html`**
- Updated to use `redirectUrl` instead of `navigatePath`
- Added event listener script example
- Demonstrates the recommended pattern

**File: `example-redirect-event.html` (NEW)**
- Complete standalone example demonstrating the pattern
- Includes event logging visualization
- Shows best practices and implementation code
- Ready to use as a reference or demo

## How It Works

### 1. Widget Dispatches Event

When authentication succeeds, the widget dispatches a CustomEvent:

```javascript
this.dispatchEvent(
  new CustomEvent("redirect", {
    detail: { url: redirectUrl },
    bubbles: true,
    composed: true
  })
);
```

### 2. Host Page Listens

The host page attaches an event listener:

```javascript
document.getElementById("auth")
  .addEventListener("redirect", function(e) {
    window.location.href = e.detail.url;
  });
```

### 3. Full Control

The host application now has full control over:
- When to redirect
- How to redirect (page reload vs SPA navigation)
- What to do before redirecting (analytics, logging, etc.)
- Custom loading states

## Benefits

✅ **No iframe issues** - Works perfectly in any embedding context  
✅ **No browser blocking** - No popup blockers triggered  
✅ **Clean separation** - Widget doesn't control navigation  
✅ **Framework friendly** - Works with React Router, Vue Router, etc.  
✅ **Analytics ready** - Easy to track successful logins  
✅ **WordPress compatible** - Perfect for CMS integrations  

## Usage Examples

### Basic HTML

```html
<keycloak-widget id="auth" redirectUrl="/dashboard"></keycloak-widget>

<script>
  document.getElementById("auth")
    .addEventListener("redirect", function(e) {
      window.location.href = e.detail.url;
    });
</script>
```

### React SPA

```javascript
const widget = document.getElementById("auth");
widget.addEventListener("redirect", (e) => {
  // Use React Router instead of full page reload
  navigate(e.detail.url);
});
```

### WordPress

```html
<keycloak-widget 
  id="auth" 
  redirectUrl="<?php echo home_url('/member-dashboard'); ?>"
></keycloak-widget>

<script>
  jQuery(document).ready(function($) {
    document.getElementById("auth")
      .addEventListener("redirect", function(e) {
        window.location.href = e.detail.url;
      });
  });
</script>
```

### With Analytics

```javascript
document.getElementById("auth")
  .addEventListener("redirect", function(e) {
    // Track successful login
    gtag('event', 'login_success', {
      'redirect_url': e.detail.url
    });
    
    // Then redirect
    setTimeout(() => {
      window.location.href = e.detail.url;
    }, 500);
  });
```

## Testing

1. Build the widget: `npm run build`
2. Open `widget-test.html` or `example-redirect-event.html` in a browser
3. Perform a successful login
4. Check browser console for redirect event
5. Verify navigation works as expected

## Migration Guide

If you're updating from a previous version that used direct navigation:

**Before:**
```html
<keycloak-widget redirectUrl="/dashboard"></keycloak-widget>
<!-- Widget handled redirect internally -->
```

**After:**
```html
<keycloak-widget id="auth" redirectUrl="/dashboard"></keycloak-widget>

<script>
  document.getElementById("auth")
    .addEventListener("redirect", function(e) {
      window.location.href = e.detail.url;
    });
</script>
```

## Files Modified

- `src/types/index.ts`
- `src/functions/index.ts`
- `src/App.tsx`
- `src/components/login-modal.tsx`
- `src/components/login-submit.tsx`
- `src/main.tsx`
- `docs/USAGE.md`
- `docs/API-REFERENCE.md`
- `docs/WEB-COMPONENT.md`
- `README.md`
- `widget-test.html`

## Files Created

- `example-redirect-event.html`
- `REDIRECT-EVENT-IMPLEMENTATION.md` (this file)

## Build Status

✅ Build successful  
✅ No TypeScript errors  
✅ All files updated  
✅ Documentation complete  

---

**Implementation Date:** December 29, 2025  
**Pattern:** Custom Event Dispatch (Web Component Best Practice)
