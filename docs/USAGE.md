# Usage Guide

## Overview

This guide explains how to use the Colibri Identity Login Widget in your projects. Whether you're embedding it in a website, integrating with React, or using it in WordPress, this guide has you covered.

---

## Quick Start

### Basic HTML Integration

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Include the CSS -->
    <link 
      rel="stylesheet" 
      href="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/login-widget.css"
    />
  </head>
  <body>
    <!-- Add the widget -->
    <keycloak-widget 
      redirectUrl="/dashboard"
    ></keycloak-widget>

    <!-- Include the JavaScript -->
    <script src="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/keycloak-widget.umd.js"></script>
  </body>
</html>
```

**That's it!** The login button and modal will appear on your page.

---

## Installation Methods

### Method 1: CDN (Recommended for Production)

**Advantages**:
- No build process required
- Automatic updates (if using @main)
- Fast global CDN delivery
- Simple integration

**Latest Version**:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/login-widget.css" />
<script src="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/keycloak-widget.umd.js"></script>
```

**Specific Version** (Recommended for stability):
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@v1.0.0/dist/login-widget.css" />
<script src="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@v1.0.0/dist/keycloak-widget.umd.js"></script>
```

### Method 2: Self-Hosted

**Advantages**:
- Full control over files
- No external dependencies
- Custom modifications possible

**Steps**:

1. Download the files from the GitHub repository
2. Place in your project:
   ```
   /public/widgets/
   ├── login-widget.css
   └── keycloak-widget.umd.js
   ```

3. Reference in HTML:
   ```html
   <link rel="stylesheet" href="/public/widgets/login-widget.css" />
   <script src="/public/widgets/keycloak-widget.umd.js"></script>
   ```

### Method 3: npm Package (Future)

```bash
npm install @colibri/login-widget
```

---

## Widget Attributes

The widget accepts these HTML attributes for configuration:

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `redirectUrl` | string | `"/"` | URL to redirect after successful authentication |
| `environment` | string | `"test"` | Environment setting (`test`, `staging`, `production`) |
| `subsidiary` | string | `"allied"` | Brand/subsidiary identifier |
| `theme` | string | `"light"` | Visual theme (`light`, `dark`) |

### Using Attributes

```html
<keycloak-widget 
  redirectUrl="https://mysite.com/dashboard"
  environment="production"
  subsidiary="allied"
  theme="light"
></keycloak-widget>
```

---

## Event Handling

The widget dispatches custom events that allow your application to respond to user actions. This is the **recommended best practice** for handling redirects and maintaining clean separation between the widget and your application.

### Redirect Event

After successful authentication, the widget dispatches a `redirect` event instead of automatically navigating. This gives you full control over the post-login behavior.

**Basic Example**:

```html
<keycloak-widget 
  id="auth"
  redirectUrl="/dashboard"
></keycloak-widget>

<script>
  document.getElementById("auth")
    .addEventListener("redirect", function(e) {
      // e.detail.url contains the redirect URL
      console.log("Redirecting to:", e.detail.url);
      window.location.href = e.detail.url;
    });
</script>
```

**Event Details**:
- **Event name**: `redirect`
- **Event detail**: `{ url: string }`
- **Bubbles**: `true`
- **Composed**: `true` (crosses shadow DOM boundaries)

**Advanced Example - Custom Logic**:

```html
<script>
  document.getElementById("auth")
    .addEventListener("redirect", function(e) {
      const targetUrl = e.detail.url;
      
      // Add custom logic before redirect
      if (targetUrl.includes('/dashboard')) {
        // Track analytics
        gtag('event', 'login_success', {
          'redirect_url': targetUrl
        });
        
        // Show loading state
        document.body.classList.add('redirecting');
        
        // Small delay for UX
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 500);
      } else {
        // Immediate redirect for other URLs
        window.location.href = targetUrl;
      }
    });
</script>
```

**WordPress/CMS Integration**:

```html
<keycloak-widget 
  id="auth"
  redirectUrl="<?php echo home_url('/member-dashboard'); ?>"
></keycloak-widget>

<script>
  document.getElementById("auth")
    .addEventListener("redirect", function(e) {
      // You can integrate with WordPress AJAX or other CMS features
      window.location.href = e.detail.url;
    });
</script>
```

**Benefits of Event-Based Approach**:
- ✅ No iframe or popup blocking issues
- ✅ Clean separation of concerns
- ✅ Full control over navigation
- ✅ Easy to add analytics, logging, or custom logic
- ✅ Works perfectly with SPAs and traditional websites

---

## Common Use Cases

### 1. Simple Login Widget

Display a login button that opens a modal:

```html
<keycloak-widget redirectUrl="/home"></keycloak-widget>
```

### 2. Post-Login Redirect

Redirect to specific page after login:

```html
<keycloak-widget redirectUrl="https://mysite.com/account/profile"></keycloak-widget>
```

### 3. Multiple Widgets on Same Page

Each widget can have different configurations:

```html
<!-- Admin login -->
<div class="admin-section">
  <h2>Admin Access</h2>
  <keycloak-widget 
    redirectUrl="/admin/dashboard"
    subsidiary="admin"
  ></keycloak-widget>
</div>

<!-- Student login -->
<div class="student-section">
  <h2>Student Portal</h2>
  <keycloak-widget 
    redirectUrl="/student/courses"
    subsidiary="student"
  ></keycloak-widget>
</div>
```

### 4. Conditional Loading

Load widget only when needed:

```html
<button id="showLogin">Login</button>

<script>
  document.getElementById('showLogin').addEventListener('click', () => {
    // Create widget dynamically
    const widget = document.createElement('keycloak-widget');
    widget.setAttribute('redirectUrl', '/dashboard');
    document.body.appendChild(widget);
  });
</script>
```

### 5. Programmatic Control

Control widget via JavaScript:

```html
<div id="widget-container"></div>

<script>
  // Create widget
  const widget = document.createElement('keycloak-widget');
  widget.setAttribute('redirectUrl', '/dashboard');
  
  // Add to page
  document.getElementById('widget-container').appendChild(widget);
  
  // Remove widget later
  // widget.remove();
</script>
```

---

## Framework Integration

### React Integration

```jsx
import { useEffect, useRef } from 'react';

function LoginWidget({ redirectUrl }) {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.../login-widget.css';
    document.head.appendChild(link);

    // Load Script
    const script = document.createElement('script');
    script.src = 'https://cdn.../keycloak-widget.umd.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <keycloak-widget 
      ref={widgetRef}
      redirectUrl={redirectUrl}
    />
  );
}

// Usage
function App() {
  return (
    <div>
      <h1>My App</h1>
      <LoginWidget redirectUrl="/dashboard" />
    </div>
  );
}
```

### Vue Integration

```vue
<template>
  <div>
    <h1>My App</h1>
    <keycloak-widget :redirectUrl="redirectUrl" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      redirectUrl: '/dashboard'
    };
  },
  mounted() {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.../login-widget.css';
    document.head.appendChild(link);

    // Load Script
    const script = document.createElement('script');
    script.src = 'https://cdn.../keycloak-widget.umd.js';
    document.body.appendChild(script);
  }
};
</script>
```

### Angular Integration

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>My App</h1>
    <keycloak-widget [attr.redirectUrl]="redirectUrl"></keycloak-widget>
  `
})
export class AppComponent implements OnInit {
  redirectUrl = '/dashboard';

  ngOnInit() {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.../login-widget.css';
    document.head.appendChild(link);

    // Load Script
    const script = document.createElement('script');
    script.src = 'https://cdn.../keycloak-widget.umd.js';
    document.body.appendChild(script);
  }
}
```

---

## CMS Integration

### WordPress

**Method 1: Theme Integration**

Add to `footer.php`:
```php
<?php
// Add before </body> tag
?>
<link rel="stylesheet" href="https://cdn.../login-widget.css" />
<keycloak-widget redirectUrl="<?php echo home_url('/my-account'); ?>"></keycloak-widget>
<script src="https://cdn.../keycloak-widget.umd.js"></script>
```

**Method 2: Shortcode**

Add to `functions.php`:
```php
function colibri_login_widget_shortcode($atts) {
    $atts = shortcode_atts(array(
        'redirect' => '/',
    ), $atts);
    
    wp_enqueue_style('colibri-widget', 'https://cdn.../login-widget.css');
    wp_enqueue_script('colibri-widget', 'https://cdn.../keycloak-widget.umd.js', array(), null, true);
    
    return '<keycloak-widget redirectUrl="' . esc_attr($atts['redirect']) . '"></keycloak-widget>';
}
add_shortcode('colibri_login', 'colibri_login_widget_shortcode');
```

Use in posts/pages:
```
[colibri_login redirect="/dashboard"]
```

### Drupal

Create a custom block:

```php
<?php
namespace Drupal\colibri_widget\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * @Block(
 *   id = "colibri_login_widget",
 *   admin_label = @Translation("Colibri Login Widget"),
 * )
 */
class ColibriLoginBlock extends BlockBase {
  public function build() {
    return [
      '#markup' => '<keycloak-widget redirectUrl="/user/dashboard"></keycloak-widget>',
      '#attached' => [
        'library' => ['colibri_widget/widget'],
      ],
    ];
  }
}
```

### Shopify

Add to `theme.liquid`:
```liquid
<!-- Before </body> -->
<link rel="stylesheet" href="https://cdn.../login-widget.css" />
<keycloak-widget redirectUrl="{{ shop.url }}/account"></keycloak-widget>
<script src="https://cdn.../keycloak-widget.umd.js"></script>
```

---

## Styling & Customization

### Widget Container Styling

Wrap the widget and apply your own styles:

```html
<div class="my-widget-container">
  <keycloak-widget redirectUrl="/dashboard"></keycloak-widget>
</div>

<style>
  .my-widget-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
```

### Custom Button Styles

The widget button can be styled externally:

```html
<style>
  /* Target the button inside the widget */
  keycloak-widget button {
    background: your-color !important;
    border-radius: 20px !important;
  }
</style>
```

**Note**: Widget uses Tailwind CSS internally. Use `!important` to override if needed.

### Theme Support

**Light Theme** (default):
```html
<keycloak-widget theme="light"></keycloak-widget>
```

**Dark Theme** (future support):
```html
<keycloak-widget theme="dark"></keycloak-widget>
```

---

## Advanced Usage

### Listening to Events

The widget can emit custom events (future feature):

```javascript
const widget = document.querySelector('keycloak-widget');

// Listen for successful login
widget.addEventListener('login-success', (event) => {
  console.log('User logged in:', event.detail);
  // Redirect, show message, etc.
});

// Listen for errors
widget.addEventListener('login-error', (event) => {
  console.error('Login failed:', event.detail);
});

// Listen for registration
widget.addEventListener('register-success', (event) => {
  console.log('User registered:', event.detail);
});
```

### Accessing Widget Internals

```javascript
const widget = document.querySelector('keycloak-widget');

// Get current configuration
console.log(widget.getAttribute('redirectUrl'));

// Update configuration
widget.setAttribute('redirectUrl', '/new-path');

// Remove widget
widget.remove();
```

### Multiple Widget Instances

```javascript
// Create multiple widgets
const config = [
  { id: 'admin', redirectUrl: '/admin', subsidiary: 'admin' },
  { id: 'user', redirectUrl: '/dashboard', subsidiary: 'user' },
];

config.forEach(cfg => {
  const widget = document.createElement('keycloak-widget');
  widget.setAttribute('id', cfg.id);
  widget.setAttribute('redirectUrl', cfg.redirectUrl);
  widget.setAttribute('subsidiary', cfg.subsidiary);
  
  document.getElementById(cfg.id + '-container').appendChild(widget);
});
```

---

## Loading Strategies

### Async Loading (Recommended)

```html
<link rel="stylesheet" href="widget.css" />
<script src="widget.js" async></script>
```

**Benefits**:
- Doesn't block page rendering
- Faster perceived performance

### Defer Loading

```html
<script src="widget.js" defer></script>
```

**Benefits**:
- Executes after HTML is parsed
- Maintains script order

### Lazy Loading

```html
<button id="loadWidget">Show Login</button>

<script>
  document.getElementById('loadWidget').addEventListener('click', () => {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'widget.css';
    document.head.appendChild(link);
    
    // Load JS
    const script = document.createElement('script');
    script.src = 'widget.js';
    script.onload = () => {
      // Widget is ready
      const widget = document.createElement('keycloak-widget');
      widget.setAttribute('redirectUrl', '/dashboard');
      document.body.appendChild(widget);
    };
    document.body.appendChild(script);
  });
</script>
```

---

## Performance Optimization

### Preloading

```html
<head>
  <!-- Preload critical resources -->
  <link rel="preload" href="widget.css" as="style" />
  <link rel="preload" href="widget.js" as="script" />
  
  <!-- Then load normally -->
  <link rel="stylesheet" href="widget.css" />
</head>
```

### CDN Caching

The CDN automatically caches files. For best performance:

1. Use versioned URLs (e.g., `@v1.0.0`)
2. Set long cache times in your server config
3. Use CDN's edge locations

### Resource Hints

```html
<head>
  <!-- DNS prefetch -->
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
  
  <!-- Preconnect -->
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
</head>
```

---

## Security Considerations

### Content Security Policy (CSP)

If using CSP, add these directives:

```html
<meta http-equiv="Content-Security-Policy" content="
  script-src 'self' https://cdn.jsdelivr.net;
  style-src 'self' https://cdn.jsdelivr.net;
  connect-src 'self' https://dev-idb.colibrirealestate.com;
">
```

### HTTPS Only

Always serve the widget over HTTPS:

```html
<!-- ✅ Good -->
<script src="https://cdn.../widget.js"></script>

<!-- ❌ Bad -->
<script src="http://cdn.../widget.js"></script>
```

### Subresource Integrity (Future)

```html
<script 
  src="https://cdn.../widget.js"
  integrity="sha384-..."
  crossorigin="anonymous"
></script>
```

---

## Troubleshooting

### Widget Not Appearing

**Check**:
1. CSS file loaded successfully (check Network tab)
2. JS file loaded successfully
3. No JavaScript errors in console
4. Widget element present in HTML

**Solution**:
```html
<!-- Ensure both files are loaded -->
<link rel="stylesheet" href="widget.css" />
<script src="widget.js"></script>

<!-- Check in console -->
<script>
  console.log('Widget loaded:', window.KeycloakWidget);
</script>
```

### Styles Not Applying

**Check**:
1. CSS file loaded before widget renders
2. No conflicting CSS from your site
3. Correct CSS file version

**Solution**:
```html
<head>
  <!-- Load CSS in <head> -->
  <link rel="stylesheet" href="widget.css" />
</head>
<body>
  <keycloak-widget></keycloak-widget>
  <script src="widget.js"></script>
</body>
```

### CORS Errors

**Issue**: API calls blocked by CORS policy

**Solution**: Ensure backend allows your domain:
```
Access-Control-Allow-Origin: https://yourdomain.com
```

### Widget Conflicts with Other Scripts

**Issue**: Multiple scripts loading React

**Solution**: Widget is self-contained. No action needed unless you see errors.

### Redirect Not Working

**Check**:
1. `redirectUrl` attribute set correctly
2. URL is valid and accessible
3. No authentication errors

**Debug**:
```javascript
const widget = document.querySelector('keycloak-widget');
console.log('Redirect URL:', widget.getAttribute('redirectUrl'));
```

---

## Browser Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| iOS Safari | 14+ | ✅ Fully Supported |
| Chrome Android | 90+ | ✅ Fully Supported |

**IE11**: ❌ Not supported (requires polyfills)

---

## Best Practices

### ✅ DO

- Use versioned CDN URLs for production
- Load CSS before JavaScript
- Use HTTPS for all resources
- Test on multiple browsers
- Validate redirectUrl attribute
- Monitor console for errors

### ❌ DON'T

- Load multiple versions simultaneously
- Modify widget bundle files
- Use HTTP in production
- Ignore security headers (CSP, CORS)
- Hardcode sensitive data in attributes

---

## Migration Guide

### From v0.x to v1.x

1. **Update CDN URL**:
   ```html
   <!-- Old -->
   <script src="...@v0.5.0/widget.js"></script>
   
   <!-- New -->
   <script src="...@v1.0.0/keycloak-widget.umd.js"></script>
   ```

2. **Update CSS File Name**:
   ```html
   <!-- Old -->
   <link href="...@v0.5.0/widget.css" />
   
   <!-- New -->
   <link href="...@v1.0.0/login-widget.css" />
   ```

3. **Check Attribute Names** (if changed)

---

## Examples Repository

Full working examples: [GitHub Examples](https://github.com/ManojColibriDEV/cdn-demo/tree/main/examples)

- Plain HTML
- React App
- Vue App
- Angular App
- WordPress Theme
- Next.js Integration

---

## Getting Help

- **Documentation**: [Full Docs](./README.md)
- **Issues**: [GitHub Issues](https://github.com/ManojColibriDEV/cdn-demo/issues)
- **Support**: support@colibri.com

---

**Last Updated**: December 29, 2025
