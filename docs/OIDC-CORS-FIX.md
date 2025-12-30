# OIDC Integration - CORS Fix

## Problem
CORS error when authenticating because the browser blocks requests from `localhost:5173` to `dev-keycloak.colibricore.io`.

## Solution
Added a proxy configuration to route Keycloak requests through the Vite dev server, which bypasses CORS restrictions during development.

## Changes Made

### 1. Updated `vite.config.ts`
Added `/keycloak` proxy:
```typescript
"/keycloak": {
  target: "https://dev-keycloak.colibricore.io",
  changeOrigin: true,
  secure: true,
  rewrite: (path) => path.replace(/^\/keycloak/, ""),
}
```

### 2. Updated `src/config/oidc.ts`
Modified to use proxy URLs in development mode:
- Detects development mode with `import.meta.env.DEV`
- Converts full URLs to proxy paths (e.g., `/keycloak/realms/allied/protocol/openid-connect/token`)
- In production, uses full URLs directly

## How It Works

**Development:**
- Request to: `/keycloak/realms/allied/protocol/openid-connect/token`
- Proxy forwards to: `https://dev-keycloak.colibricore.io/realms/allied/protocol/openid-connect/token`
- No CORS error because request originates from same domain

**Production:**
- Uses full URLs directly
- CORS is configured on the Keycloak server

## Next Steps

1. **Restart the dev server:**
   ```bash
   npm run dev
   ```

2. **Test the login again** - CORS error should be resolved

3. **Verify the request in Network tab** - Should see `/keycloak/...` URLs succeeding

## Important Notes

- This proxy only works in **development mode** (`npm run dev`)
- In production build, the widget will use full URLs directly
- Ensure your Keycloak server has proper CORS configuration for production domains
- The `clientId` is set to `colibricore` - verify this matches your Keycloak client configuration

## Testing Checklist

- [ ] Restart dev server
- [ ] Open login modal
- [ ] Enter valid credentials
- [ ] Check Network tab - should see `/keycloak/...` requests
- [ ] Verify successful authentication
- [ ] Check localStorage for tokens (`access_token`, `refresh_token`, `user_state`)
