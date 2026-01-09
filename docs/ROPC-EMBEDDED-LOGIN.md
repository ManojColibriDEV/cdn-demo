# ROPC Embedded Login Configuration

## Overview

The widget now supports two authentication modes:

1. **Popup Mode** (OAuth2/OIDC) - Opens Keycloak in a popup window
2. **Embedded Mode** (ROPC) - Custom login form within the widget

## ROPC (Resource Owner Password Credentials) Flow

ROPC allows users to enter username/password directly in your app, which then exchanges credentials for tokens with Keycloak.

### ⚠️ Security Considerations

- **ROPC is less secure** than OAuth2 redirect flow
- Use only when popup/redirect is not feasible
- Credentials are transmitted to your app (increases attack surface)
- Recommended only for trusted first-party applications
- OAuth2 popup/redirect is the recommended approach

## Keycloak Configuration

### Enable Direct Access Grants

1. **Login to Keycloak Admin Console**
   - Navigate to your realm (elite, allied, or mckissock)

2. **Open Client Settings**
   - Go to: Clients → `colibricore`

3. **Enable ROPC**
   - Scroll to "Capability config" or "Authentication Flow"
   - Enable: **"Direct access grants"**
   - Click "Save"

4. **Verify Settings**
   ```
   Client ID: colibricore
   Client Authentication: OFF (public client)
   Direct Access Grants: ON ✓
   Standard Flow: ON ✓
   ```

## Widget Usage

### Popup Mode (Recommended)
```html
<keycloak-widget 
  authority="dev" 
  subsidiary="elite" 
  authMode="popup"
  callbackUrl="https://your-app.com/callback"
  redirectUrl="https://your-app.com/dashboard">
</keycloak-widget>
```

### Embedded Mode (ROPC)
```html
<keycloak-widget 
  authority="dev" 
  subsidiary="elite" 
  authMode="embedded"
  callbackUrl="https://your-app.com"
  redirectUrl="https://your-app.com/dashboard">
</keycloak-widget>
```

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `authMode` | `'popup' \| 'embedded'` | `'popup'` | Authentication mode |
| `authority` | `string` | `'dev'` | Environment: dev, test, staging, prod |
| `subsidiary` | `string` | `'allied'` | Realm: elite, allied, mckissock |
| `callbackUrl` | `string` | current page | OAuth callback URL (popup mode only) |
| `redirectUrl` | `string` | - | Where to redirect after login |

## How It Works

### Popup Mode
1. User clicks "Login"
2. Popup window opens with Keycloak login page
3. User authenticates in popup
4. Popup closes, tokens saved
5. Main window redirects to `redirectUrl`

### Embedded Mode
1. User clicks "Login"
2. Custom login form appears in widget
3. User enters username/password
4. Widget calls Keycloak token endpoint directly
5. Tokens saved, redirect to `redirectUrl`

## API Response

Both modes return the same session data:

```javascript
{
  tokens: {
    access_token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // ROPC only
  },
  userInfo: {
    sub: "user-id",
    email: "user@example.com",
    name: "User Name",
    // ... other claims
  },
  userSession: {
    // Decoded JWT claims
    x_credentials: "user-specific-credential"
  }
}
```

## CORS Configuration

For ROPC to work, ensure Keycloak allows CORS from your domain:

1. Keycloak Admin → Clients → colibricore
2. Set "Web Origins": `https://your-app.com` or `*` for development
3. Save

## Testing

### Local Development

1. **Build widget**:
   ```bash
   npm run build
   ```

2. **Open test page**:
   ```bash
   # Use Live Server or similar
   open widget-test.html
   ```

3. **Test both modes**:
   - Popup: Click first login button
   - Embedded: Click second login button, enter credentials

### Valid Test Credentials

Use your Keycloak user accounts:
- Username: `testuser` (or email)
- Password: Your Keycloak password

## Troubleshooting

### "Invalid grant" error
- **Cause**: Direct Access Grants not enabled
- **Fix**: Enable in Keycloak client settings

### "CORS error"
- **Cause**: Web Origins not configured
- **Fix**: Add your domain to Web Origins

### "Invalid client credentials"
- **Cause**: Client authentication enabled (should be OFF)
- **Fix**: Set Client Authentication to OFF for public client

### "Account is not fully set up"
- **Cause**: User requires email verification or other setup
- **Fix**: Complete user setup in Keycloak

## Migration from Popup to Embedded

```html
<!-- Before (Popup) -->
<keycloak-widget authority="dev" subsidiary="elite"></keycloak-widget>

<!-- After (Embedded) -->
<keycloak-widget 
  authority="dev" 
  subsidiary="elite" 
  authMode="embedded">
</keycloak-widget>
```

No code changes needed - just add `authMode="embedded"` attribute.

## Best Practices

1. **Use Popup for public apps** - More secure, follows OAuth2 standards
2. **Use Embedded for internal apps** - When you control both client and server
3. **Always use HTTPS** in production
4. **Store tokens securely** - Use httpOnly cookies when possible
5. **Implement token refresh** - Use refresh tokens for long-lived sessions
6. **Handle errors gracefully** - Show user-friendly error messages

## Environment URLs

| Environment | Keycloak URL |
|-------------|-------------|
| Development | `https://dev-keycloak.colibricore.io` |
| Test | `https://test-keycloak.colibricore.io` |
| Staging | `https://staging-keycloak.colibricore.io` |
| Production | `https://keycloak.colibricore.io` |

## Support

For Keycloak configuration help, contact your Keycloak administrator.
