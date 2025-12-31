# Callback URL Configuration Guide

## Overview

The Colibri Identity Widget requires a callback URL where users are redirected after authenticating with Keycloak. This guide explains how to configure the callback URL for your specific deployment.

## Default Behavior

By default, the widget uses `${window.location.origin}/callback` as the redirect URI. This works well for:
- Single Page Applications (SPAs)
- Servers with proper routing configured

However, when embedding the widget in a static website or third-party site, you need to specify a custom callback URL.

## Custom Callback URL

### Web Component Attribute

Use the `callbackUrl` attribute to specify where Keycloak should redirect after authentication:

```html
<keycloak-widget
  environment="development"
  subsidiary="allied"
  callbackUrl="https://yoursite.com/auth-callback.html"
>
</keycloak-widget>
```

### Callback Page Setup

The callback URL must point to a page that:
1. Loads the Colibri Identity Widget
2. Handles the OAuth callback automatically
3. Redirects the user after successful authentication

#### Example Callback Page

Create a file named `auth-callback.html` (or your preferred name) on your website:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Authentication Callback</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f9fafb;
    }
    .loader {
      text-align: center;
    }
    .spinner {
      display: inline-block;
      width: 48px;
      height: 48px;
      border: 4px solid #e5e7eb;
      border-top-color: #2563eb;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    h2 {
      margin-top: 1.5rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: #374151;
    }
    p {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="loader">
    <div class="spinner"></div>
    <h2>Completing sign in...</h2>
    <p>Please wait while we process your authentication.</p>
  </div>

  <!-- Load the Colibri Identity Widget -->
  <script type="module" crossorigin src="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/index.js"></script>
  <link rel="stylesheet" crossorigin href="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/index.css">

  <script>
    // Initialize the widget with your configuration
    const widget = document.createElement('keycloak-widget');
    widget.setAttribute('environment', 'development'); // Change to 'staging' or 'production'
    widget.setAttribute('subsidiary', 'allied');
    widget.setAttribute('callbackUrl', window.location.href);
    widget.style.display = 'none'; // Hide the widget on callback page
    document.body.appendChild(widget);

    // Listen for authentication redirect event
    widget.addEventListener('redirect', (event) => {
      const { redirectUrl, userSession } = event.detail;
      
      // Store user session if needed
      if (userSession) {
        console.log('User authenticated:', userSession);
        sessionStorage.setItem('user_session', JSON.stringify(userSession));
      }

      // Redirect to the intended page
      window.location.href = redirectUrl || '/';
    });
  </script>
</body>
</html>
```

## Integration Examples

### Example 1: Using on dev.elitelearning.com

On your main page (e.g., `/login-widget-test/`):

```html
<keycloak-widget
  environment="development"
  subsidiary="allied"
  callbackUrl="https://dev.elitelearning.com/auth-callback.html"
>
</keycloak-widget>

<script type="module" crossorigin src="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/index.js"></script>
<link rel="stylesheet" crossorigin href="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/index.css">
```

Then create `auth-callback.html` in your website root using the template above.

### Example 2: Using with Local Development

```html
<keycloak-widget
  environment="development"
  subsidiary="allied"
  callbackUrl="http://localhost:3000/callback.html"
>
</keycloak-widget>
```

### Example 3: Production Environment

```html
<keycloak-widget
  environment="production"
  subsidiary="allied"
  callbackUrl="https://yoursite.com/auth-callback.html"
>
</keycloak-widget>
```

## Keycloak Configuration

⚠️ **Important**: You must add your callback URL to the Keycloak client's "Valid Redirect URIs" list.

1. Log in to Keycloak Admin Console
2. Navigate to your realm (e.g., `allied`)
3. Go to **Clients** → **colibricore**
4. Add your callback URL to **Valid Redirect URIs**:
   - `https://dev.elitelearning.com/auth-callback.html`
   - `https://yoursite.com/auth-callback.html`
5. Click **Save**

## Troubleshooting

### "Invalid parameter: redirect_uri" Error

This means the callback URL is not whitelisted in Keycloak. Add it to Valid Redirect URIs.

### "Cannot GET /callback" Error

Your website doesn't have a callback page. Create the callback page using the template above.

### Authentication Works But Nothing Happens

Check that:
1. The callback page loads the widget with the correct `environment`
2. You're listening for the `redirect` event
3. The `redirectUrl` is valid

### User Session Not Available

The user session is stored in `sessionStorage` with key `user_session`. You can access it:

```javascript
const userSession = JSON.parse(sessionStorage.getItem('user_session'));
console.log(userSession);
```

## Advanced: Dynamic Callback URL

If you need to determine the callback URL dynamically:

```javascript
const widget = document.querySelector('keycloak-widget');
const callbackUrl = window.location.origin + '/auth-callback.html';
widget.setAttribute('callbackUrl', callbackUrl);
```

## Support

For issues or questions, contact the Colibri development team.
