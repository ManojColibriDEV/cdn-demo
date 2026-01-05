# Authority Configuration Guide

## Overview

The widget now supports simplified authority configuration. Instead of passing full Keycloak URLs, you can use environment shortcuts or let the widget auto-detect the environment from your domain.

## Usage Options

### Option 1: Environment Shortcuts (Recommended)

Pass a simple environment name:

```html
<!-- Development -->
<keycloak-widget authority="dev" subsidiary="allied"></keycloak-widget>

<!-- Staging -->
<keycloak-widget authority="staging" subsidiary="allied"></keycloak-widget>

<!-- Production -->
<keycloak-widget authority="prod" subsidiary="allied"></keycloak-widget>
```

**Supported shortcuts:**
- `dev` or `development` → `https://dev-keycloak.colibricore.io`
- `staging` → `https://staging-keycloak.colibricore.io`
- `prod` or `production` → `https://keycloak.colibricore.io`

### Option 2: Auto-Detection (Easiest)

Omit the `authority` attribute entirely, and the widget will auto-detect based on your domain:

```html
<!-- Will auto-detect environment from window.location.hostname -->
<keycloak-widget subsidiary="allied"></keycloak-widget>
```

**Auto-detection rules:**
- Domain contains "dev" → Uses dev environment
- Domain contains "staging" → Uses staging environment
- All other domains → Uses production environment

**Examples:**
- `https://dev.myapp.com` → Auto-detects as `dev`
- `https://staging.myapp.com` → Auto-detects as `staging`
- `https://myapp.com` → Auto-detects as `prod`

### Option 3: Custom Full URL

For custom Keycloak instances, you can still pass the full URL:

```html
<keycloak-widget 
  authority="https://custom-keycloak.example.com" 
  subsidiary="allied">
</keycloak-widget>
```

## Migration Guide

### Before (Old Method)
```html
<keycloak-widget 
  authority="https://dev-keycloak.colibricore.io" 
  subsidiary="allied">
</keycloak-widget>
```

### After (New Method)
```html
<!-- Simplest: Just use environment shortcut -->
<keycloak-widget 
  authority="dev" 
  subsidiary="allied">
</keycloak-widget>

<!-- Or: Auto-detect (no authority attribute) -->
<keycloak-widget subsidiary="allied"></keycloak-widget>
```

## Implementation Details

The authority resolution happens in [`src/utils/authorityResolver.ts`](../src/utils/authorityResolver.ts) and is applied at the widget initialization level, ensuring all internal components receive the fully resolved URL.

### Resolution Priority

1. If `authority` is a recognized shortcut (`dev`, `staging`, `prod`) → Use mapped URL
2. If `authority` starts with `http://` or `https://` → Use as-is
3. If `authority` is empty/null → Auto-detect from domain
4. If `authority` is unrecognized → Auto-detect from domain

## Benefits

✅ **Simpler configuration** - No need to remember full URLs  
✅ **Environment-aware** - Auto-detection reduces configuration errors  
✅ **Backward compatible** - Full URLs still work  
✅ **Flexible** - Choose the method that works best for your use case
