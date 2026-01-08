# Bloom Elements Deployment Guide

Complete deployment guide for Colibri Identity Widget across all Bloom Elements environments.

---

## Prerequisites

Before deployment, ensure:

✅ All Keycloak realms are configured (see Keycloak Configuration section)
✅ Valid redirect URIs are set for all environments
✅ Web Origins are configured for CORS
✅ CDN/hosting is ready for artifact upload

---

## Environment Configuration

### Supported Environments

| Environment | Keycloak Host | Example Domain |
|-------------|---------------|----------------|
| **Development** | `dev-keycloak.colibricore.io` | `dev.elitelearning.com` |
| **Test** | `test-keycloak.colibricore.io` | `test.elitelearning.com` |
| **Staging** | `staging-keycloak.colibricore.io` | `staging.elitelearning.com` |
| **Production** | `keycloak.colibricore.io` | `elitelearning.com` |

### Supported Subsidiaries (Realms)

- `elite` → Elite Learning
- `allied` → Allied Schools
- `mckissock` → McKissock Learning

---

## Build Process

### 1. Build for Each Environment

```bash
# Development build
npm run build:dev

# Test build
npm run build:test

# Staging build
npm run build:stage

# Production build
npm run build:prod
```

**Output:** `dist/keycloak-widget.umd.js` and `dist/login-widget.css`

### 2. Verify Build

```bash
# Check file sizes
ls -lh dist/

# Expected output:
# keycloak-widget.umd.js  (~180-250KB)
# login-widget.css        (~40-50KB)
```

---

## Deployment Steps

### Step 1: Build the Widget

```bash
# For production
npm run build:prod
```

### Step 2: Upload to CDN

Upload these files to your CDN:

```
dist/keycloak-widget.umd.js → https://cdn.bloomelements.com/auth/v1/keycloak-widget.umd.js
dist/login-widget.css       → https://cdn.bloomelements.com/auth/v1/login-widget.css
```

**Version-specific uploads:**
```
dist/keycloak-widget.umd.js → https://cdn.bloomelements.com/auth/v1.2.3/keycloak-widget.umd.js
dist/login-widget.css       → https://cdn.bloomelements.com/auth/v1.2.3/login-widget.css
```

### Step 3: Configure Keycloak for Each Environment

For **EACH environment** (dev, test, staging, prod) and **EACH realm** (elite, allied, mckissock):

#### Keycloak Admin Console Configuration

1. **Access Keycloak Admin:**
   - Dev: `https://dev-keycloak.colibricore.io/admin`
   - Test: `https://test-keycloak.colibricore.io/admin`
   - Staging: `https://staging-keycloak.colibricore.io/admin`
   - Production: `https://keycloak.colibricore.io/admin`

2. **Select Realm:** Choose `elite`, `allied`, or `mckissock`

3. **Configure Client (`colibricore`):**

   Navigate to: **Clients** → **colibricore** → **Settings**

   **Basic Settings:**
   - **Client ID**: `colibricore`
   - **Client Protocol**: `openid-connect`
   - **Access Type**: `public`
   - **Standard Flow Enabled**: `ON`
   - **Implicit Flow Enabled**: `OFF`
   - **Direct Access Grants**: `ON`

   **Valid Redirect URIs** (add all Bloom Elements domains):
   ```
   # Development
   https://dev.elitelearning.com/*
   https://dev.alliedschools.com/*
   https://dev.mckissock.com/*
   http://localhost:5173/*
   
   # Test
   https://test.elitelearning.com/*
   https://test.alliedschools.com/*
   https://test.mckissock.com/*
   
   # Staging
   https://staging.elitelearning.com/*
   https://staging.alliedschools.com/*
   https://staging.mckissock.com/*
   
   # Production
   https://elitelearning.com/*
   https://www.elitelearning.com/*
   https://alliedschools.com/*
   https://www.alliedschools.com/*
   https://mckissock.com/*
   https://www.mckissock.com/*
   ```

   **Web Origins** (CRITICAL for CORS - add exact domains):
   ```
   # Development
   https://dev.elitelearning.com
   https://dev.alliedschools.com
   https://dev.mckissock.com
   http://localhost:5173
   
   # Test
   https://test.elitelearning.com
   https://test.alliedschools.com
   https://test.mckissock.com
   
   # Staging
   https://staging.elitelearning.com
   https://staging.alliedschools.com
   https://staging.mckissock.com
   
   # Production
   https://elitelearning.com
   https://www.elitelearning.com
   https://alliedschools.com
   https://www.alliedschools.com
   https://mckissock.com
   https://www.mckissock.com
   ```

   **Advanced Settings:**
   - **Access Token Lifespan**: `5 minutes` (300 seconds)
   - **SSO Session Idle**: `30 minutes`
   - **SSO Session Max**: `10 hours`

4. **Save Configuration**

---

## Integration in Bloom Elements

### WordPress Integration

Add to your WordPress theme's `header.php` or via plugin:

```html
<!-- Load Widget Assets -->
<link rel="stylesheet" href="https://cdn.bloomelements.com/auth/v1/login-widget.css">
<script src="https://cdn.bloomelements.com/auth/v1/keycloak-widget.umd.js"></script>

<!-- Widget Component -->
<keycloak-widget 
  environment="production"
  subsidiary="elite"
  callback-url="https://elitelearning.com/auth/callback">
</keycloak-widget>

<script>
  // Listen for login success
  document.addEventListener('keycloak-login-success', (event) => {
    const { tokens, userInfo, userSession } = event.detail;
    
    // Access token is automatically stored in cookies
    console.log('User logged in:', userSession);
    
    // Redirect or update UI
    window.location.href = '/dashboard';
  });
</script>
```

### Environment-Specific Configuration

**Development:**
```html
<keycloak-widget 
  environment="dev"
  subsidiary="elite">
</keycloak-widget>
```

**Test:**
```html
<keycloak-widget 
  environment="test"
  subsidiary="allied">
</keycloak-widget>
```

**Staging:**
```html
<keycloak-widget 
  environment="staging"
  subsidiary="mckissock">
</keycloak-widget>
```

**Production:**
```html
<keycloak-widget 
  environment="production"
  subsidiary="elite">
</keycloak-widget>
```

---

## Testing Checklist

### Pre-Deployment Testing

- [ ] Build completes without errors
- [ ] Bundle size is acceptable (<300KB)
- [ ] No console errors in dev environment
- [ ] Login flow works in dev/test

### Per-Environment Testing

For each environment (dev, test, staging, prod):

- [ ] Widget loads correctly
- [ ] Login redirects to correct Keycloak realm
- [ ] No CORS errors in browser console
- [ ] Access token cookie is set correctly
- [ ] X-Credential cookie is set (if applicable)
- [ ] Token auto-renewal works after 300 seconds
- [ ] Logout clears cookies and redirects properly
- [ ] Cross-subdomain cookie sharing works

### Browser Testing

Test on:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## Common Deployment Issues

### Issue 1: CORS Error

**Error:**
```
Access to fetch at 'https://dev-keycloak.colibricore.io/realms/elite/protocol/openid-connect/token' 
from origin 'https://dev.elitelearning.com' has been blocked by CORS policy
```

**Solution:**
- Add domain to **Web Origins** in Keycloak client config
- Ensure exact domain match (no wildcards in Web Origins for production)

### Issue 2: Invalid Redirect URI

**Error:**
```
Invalid parameter: redirect_uri
```

**Solution:**
- Add the full URL to **Valid Redirect URIs** in Keycloak
- Include wildcard path: `https://domain.com/*`

### Issue 3: Token Not Refreshing

**Symptoms:**
- User logged out after 5 minutes
- No silent renewal happening

**Solution:**
- Verify `automaticSilentRenew: true` in config
- Check Keycloak SSO session settings
- Verify Web Origins for iframe requests

### Issue 4: Cookies Not Shared Across Subdomains

**Symptoms:**
- Login works on `www.elitelearning.com` but not on `dashboard.elitelearning.com`

**Solution:**
- Cookie domain is auto-detected from hostname
- Verify cookie domain in browser DevTools → Application → Cookies
- Should be `.elitelearning.com` (with leading dot)

---

## Rollback Plan

If issues occur after deployment:

### Quick Rollback (CDN)

1. **Revert to previous version:**
   ```bash
   # Update CDN symlink to previous version
   v1/keycloak-widget.umd.js → v1.2.2/keycloak-widget.umd.js
   ```

2. **Clear CDN cache:**
   - Invalidate CloudFront/CDN cache for affected files
   - Wait 5-10 minutes for propagation

### Emergency Rollback (Client-Side)

Update HTML to load previous version:
```html
<script src="https://cdn.bloomelements.com/auth/v1.2.2/keycloak-widget.umd.js"></script>
```

---

## Monitoring & Analytics

### Key Metrics to Track

- **Login Success Rate**: % of successful authentications
- **Token Renewal Rate**: % of successful silent renewals
- **CORS Error Rate**: Track CORS failures
- **Average Login Time**: Time from click to success
- **Browser Compatibility**: Success rate per browser

### Logging

The widget logs to console (remove in production if needed):

```javascript
[OIDC] Config: {...}
[OIDC] UserManager initialized: {...}
[OIDC] Token silently renewed
[OIDC] Sign-in callback error: {...}
```

---

## Security Checklist

- [ ] Only use HTTPS in production (no HTTP)
- [ ] Keycloak client is set to `public` (no secret exposed)
- [ ] Token lifetime is reasonable (5 minutes recommended)
- [ ] SSO session timeout is configured
- [ ] Web Origins are explicitly listed (no `*` in production)
- [ ] Cookies have `Secure` flag in production
- [ ] Cookies have `SameSite=Lax` or `Strict`

---

## Support & Troubleshooting

### Debug Mode

Enable detailed logging:
```javascript
localStorage.setItem('oidc-debug', 'true');
```

### Check Current Configuration

```javascript
// In browser console
console.log('Environment:', document.querySelector('keycloak-widget').getAttribute('environment'));
console.log('Subsidiary:', document.querySelector('keycloak-widget').getAttribute('subsidiary'));
console.log('Cookies:', document.cookie);
console.log('Access Token:', document.cookie.match(/access_token=([^;]*)/)?.[1]);
```

### Contact

For deployment issues:
- Development Team: [dev-team@colibrigroup.com]
- DevOps: [devops@colibrigroup.com]
- Keycloak Admin: [identity@colibrigroup.com]

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-01-06 | Initial release with auto token refresh |
| 1.1.0 | TBD | Multi-environment support for Bloom Elements |

---

## Quick Reference

### Build Commands
```bash
npm run build:dev      # Development build
npm run build:test     # Test environment build
npm run build:stage    # Staging build
npm run build:prod     # Production build
```

### CDN URLs
```
Development:  https://cdn.bloomelements.com/auth/dev/keycloak-widget.umd.js
Test:         https://cdn.bloomelements.com/auth/test/keycloak-widget.umd.js
Staging:      https://cdn.bloomelements.com/auth/stage/keycloak-widget.umd.js
Production:   https://cdn.bloomelements.com/auth/v1/keycloak-widget.umd.js
```

### Widget Attributes
- `environment`: dev | test | staging | production
- `subsidiary`: elite | allied | mckissock
- `callback-url`: Optional custom callback URL
