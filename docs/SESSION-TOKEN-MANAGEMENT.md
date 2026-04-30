# Session & Token Management

## Storage Strategy

All authentication state is stored in **cookies only**. No auth values are written to `localStorage`.

| Cookie | Description | TTL |
|--------|-------------|-----|
| `access_token` | Encoded JWT access token | Matches JWT `exp` |
| `access_token_expires` | Expiry timestamp (ms since epoch) | Matches JWT `exp` |
| `refresh_token` | JWT refresh token | 30 days |
| `refresh_token_time` | Session start timestamp | 1 day (no Remember Me) / 30 days (Remember Me) |

---

## Auto-Login on Page Load

Triggered by the `useEffect` in `App.tsx` (runs once on mount):

1. Check `refresh_token_time` cookie — if missing or expired → require manual login.
2. Check `access_token` cookie + decode JWT `exp` — if still valid → set `isAuthenticated = true`.
3. If access token is expired but refresh token is valid → call `refreshAuthenticationState()` → set `isAuthenticated = true`.
4. If refresh token is invalid/expired → clear `refresh_token` and `refresh_token_time` cookies.

---

## Silent Token Refresh

### How It Works

The `silentTokenRefresh()` function (in `src/functions/index.ts`) schedules a **one-shot `setTimeout`** timed to fire 2 minutes before the access token expires.

```
Token exp = 11:00 PM
Timer fires at = 10:58 PM  (exp - 120 seconds)
```

### Scheduling

1. Decode the current `access_token` JWT to read `exp`.
2. Calculate `delayMs = (exp - now - 120) * 1000`.
3. `Math.max(0, delayMs)` ensures immediate fire if token is already within 2 min of expiry.
4. After a successful refresh, read the new `access_token` and **reschedule** automatically.

### Lifecycle

The timer is started/restarted by this `useEffect` in `App.tsx`:

```typescript
useEffect(() => {
  void silentTokenRefresh();
  // cleanup: stopSilentRefreshTimer()
}, [isAuthenticated]);
```

| Trigger | What happens |
|---------|-------------|
| Component mount (page load) with valid tokens | Timer scheduled based on current token `exp` |
| After successful login (`isAuthenticated → true`) | Effect re-runs, timer scheduled for new token |
| Logout / tokens cleared | `silentTokenRefresh` exits early, timer stopped |

### Exit Conditions (no timer scheduled)

- `access_token` cookie is missing
- `refresh_token` cookie is missing or its JWT is expired

---

## Remember Me

| Setting | `refresh_token_time` cookie TTL | Auto-login window |
|---------|----------------------------------|-------------------|
| Checked | 30 days | 30 days |
| Not checked | 1 day | 1 day |

Both paths always store `refresh_token` for 30 days, but the session timestamp (`refresh_token_time`) controls whether auto-login is allowed on the next page visit.

---

## Token Refresh Logic (`refreshAuthenticationState`)

1. Get `refresh_token` from cookie.
2. POST to `/api/refresh` → receive new `access_token` (and optionally new `refresh_token`).
3. Write new `access_token` + `access_token_expires` to cookies.
4. If a new `refresh_token` is returned → update `refresh_token` cookie.
5. If within the 1-day session window → update `refresh_token_time` cookie timestamp.

---

## Logout / Token Clearing (`clearAuthTokens`)

Clears all cookies:
- `access_token`
- `access_token_expires`
- `refresh_token`
- `refresh_token_time`

Also removes any residual `localStorage` keys for backward compatibility:
- `refresh_token`, `refresh_token_time`, `access_token`, `access_token_expires`
