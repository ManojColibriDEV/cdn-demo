# Keycloak Iframe Configuration

To use the embedded iframe authentication, Keycloak must be configured to allow iframe embedding.

## ⚠️ Important Security Note

By default, Keycloak blocks iframe embedding using the `X-Frame-Options` header for security reasons. Enabling iframe support reduces security and should only be done if absolutely necessary.

---

## Configuration Steps

### Option 1: Enable Iframe for Specific Client (Recommended)

1. **Access Keycloak Admin Console:**
   - Dev: `https://dev-keycloak.colibricore.io/admin`
   - Select your realm (e.g., `elite`, `allied`, `mckissock`)

2. **Configure Client Settings:**
   - Navigate to: **Clients** → **colibricore** → **Settings**
   - Scroll to **Advanced Settings**
   - Find **Web Origins** and add your application domains:
     ```
     https://dev.elitelearning.com
     https://test.elitelearning.com
     https://staging.elitelearning.com
     https://elitelearning.com
     http://localhost:5173
     http://127.0.0.1:5500
     ```

3. **Content Security Policy (if using Keycloak 18+):**
   - Go to: **Realm Settings** → **Security Defenses** tab
   - Update **Content-Security-Policy** headers:
     ```
     frame-ancestors 'self' https://dev.elitelearning.com https://elitelearning.com http://localhost:5173 http://127.0.0.1:5500
     ```

### Option 2: Custom Theme with Modified Headers (Advanced)

If Keycloak still blocks iframe, you'll need to create a custom theme:

1. **Create Custom Theme:**
   ```bash
   # On Keycloak server
   cd /opt/keycloak/themes/
   mkdir custom-theme
   cd custom-theme
   mkdir login
   ```

2. **Create theme.properties:**
   ```properties
   # themes/custom-theme/login/theme.properties
   parent=keycloak
   ```

3. **Modify Response Headers:**
   Create a custom login theme template that allows iframe embedding.

4. **Apply Theme:**
   - In Keycloak Admin Console
   - **Realm Settings** → **Themes** tab
   - Set **Login Theme** to `custom-theme`

### Option 3: Reverse Proxy Configuration

If you control the reverse proxy/load balancer:

**Nginx Example:**
```nginx
location /auth/ {
    proxy_pass http://keycloak:8080;
    proxy_hide_header X-Frame-Options;
    add_header X-Frame-Options "ALLOW-FROM https://elitelearning.com";
}
```

**Apache Example:**
```apache
<Location /auth/>
    Header set X-Frame-Options "ALLOW-FROM https://elitelearning.com"
</Location>
```

---

## Testing Iframe Embedding

1. **Test in Browser Console:**
   ```javascript
   // Check if iframe is blocked
   const iframe = document.createElement('iframe');
   iframe.src = 'https://dev-keycloak.colibricore.io/realms/elite/protocol/openid-connect/auth?client_id=colibricore&redirect_uri=http://localhost:5173/&response_type=code&scope=openid';
   document.body.appendChild(iframe);
   
   // If blocked, you'll see an error in console
   ```

2. **Check Response Headers:**
   ```bash
   curl -I https://dev-keycloak.colibricore.io/realms/elite/protocol/openid-connect/auth
   
   # Look for:
   # X-Frame-Options: DENY (blocked)
   # X-Frame-Options: ALLOW-FROM https://elitelearning.com (allowed)
   # No X-Frame-Options header (allowed)
   ```

---

## Alternative Solutions

If iframe embedding cannot be enabled:

### 1. Use Popup (Recommended)
Switch back to popup-based authentication:
- Better security
- Recommended by OAuth 2.0 specs
- No Keycloak configuration needed

### 2. Full Page Redirect
Use the original redirect-based flow:
- Most compatible
- Works with all security settings
- Loses page state during login

### 3. Backend Authentication
Implement token exchange on your backend:
- Most secure
- No CORS issues
- Requires backend API

---

## Troubleshooting

### Iframe Shows Blank Page
**Cause:** X-Frame-Options blocking iframe

**Solution:**
1. Check browser console for errors
2. Verify Web Origins in Keycloak client config
3. Update Content-Security-Policy headers

### CORS Errors in Iframe
**Cause:** Web Origins not configured

**Solution:**
Add all your domains to Web Origins in Keycloak client settings

### Login Works but Callback Fails
**Cause:** PostMessage origin mismatch

**Solution:**
Ensure parent window origin matches Web Origins configuration

---

## Security Considerations

⚠️ **Enabling iframe embedding reduces security:**
- Vulnerable to clickjacking attacks
- Potential for credential theft via malicious parent frames
- Should only be allowed from trusted domains

**Mitigations:**
1. Use `frame-ancestors` in CSP (more secure than X-Frame-Options)
2. Only allow specific trusted domains
3. Implement additional CSRF protections
4. Consider using popup instead for better security

---

## Contact

For Keycloak configuration assistance:
- DevOps Team: devops@colibrigroup.com
- Security Team: security@colibrigroup.com
