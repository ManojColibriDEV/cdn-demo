# 🚀 Quick Reference - Redirect Event Pattern

## Minimal Example

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/login-widget.css" />
</head>
<body>
  <keycloak-widget id="auth" redirectUrl="/dashboard"></keycloak-widget>
  
  <script src="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/keycloak-widget.umd.js"></script>
  <script>
    document.getElementById("auth").addEventListener("redirect", e => {
      window.location.href = e.detail.url;
    });
  </script>
</body>
</html>
```

## Event Details

| Property | Value |
|----------|-------|
| Event Name | `redirect` |
| Event Type | `CustomEvent` |
| Detail | `{ url: string }` |
| Bubbles | `true` |
| Composed | `true` |
| Cancelable | `false` |

## Common Patterns

### Basic Navigation
```javascript
widget.addEventListener("redirect", e => {
  window.location.href = e.detail.url;
});
```

### React Router
```javascript
widget.addEventListener("redirect", e => {
  navigate(e.detail.url);
});
```

### Vue Router
```javascript
widget.addEventListener("redirect", e => {
  router.push(e.detail.url);
});
```

### With Analytics
```javascript
widget.addEventListener("redirect", e => {
  gtag('event', 'login_success', { redirect_url: e.detail.url });
  window.location.href = e.detail.url;
});
```

### With Loading State
```javascript
widget.addEventListener("redirect", e => {
  document.body.classList.add('loading');
  setTimeout(() => window.location.href = e.detail.url, 500);
});
```

## Benefits

- ✅ No iframe blocking issues
- ✅ No popup blocking
- ✅ Works in WordPress/CMS
- ✅ SPA-friendly
- ✅ Clean separation
- ✅ Easy analytics integration

## Need Help?

See full documentation:
- [USAGE.md](docs/USAGE.md) - Complete usage guide
- [API-REFERENCE.md](docs/API-REFERENCE.md) - Full API docs
- [example-redirect-event.html](example-redirect-event.html) - Live example
