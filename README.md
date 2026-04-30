# Colibri Identity Widget

A reusable Keycloak OIDC authentication widget for the Colibri Identity platform. Distributed as both an NPM package and a CDN script, built as a Web Component with Shadow DOM isolation.

## Documentation

Full integration guide, API reference, props & events, and deployment instructions are maintained in Confluence:

**[Keycloak Widget Integration Guide](https://colibrigroup.atlassian.net/wiki/spaces/AP/pages/5297438774/Keycloak+Widget+Integration)**

---

## Quick Start

```bash
npm install @colibri/identity-widget
```

```html
<!-- CDN -->
<script src="https://dev-iam-widget.colibrilearning.com/keycloak-widget.umd.js"></script>
<keycloak-widget id="auth" authority="dev" subsidiary="elite"></keycloak-widget>
```

```js
document.getElementById("auth").addEventListener("redirect", (e) => {
  const { url, userSession } = e.detail;
  window.location.href = url;
});
```

---

## Development

```bash
npm install
npm run dev        # Dev server (TEST mode, proxies enabled)
npm run build      # Production build (WEBCOMPONENT mode)
npm run test       # Unit tests
npm run test:coverage  # Coverage report
```

---

## Key Features

- OIDC authentication via Keycloak (ROPC embedded flow)
- Shadow DOM isolation � host-page styles do not leak in
- Dynamic silent token refresh � fires 2 minutes before JWT expiry
- Remember Me support � auto-login up to 30 days
- Multi-brand / multi-tenant via `subsidiary` attribute
- Custom primary color override

---

## Token Storage

All auth state is stored in **cookies only** (no localStorage):

| Cookie | Contents |
|--------|----------|
| `access_token` | Encoded JWT access token |
| `access_token_expires` | Expiry timestamp (ms) |
| `refresh_token` | JWT refresh token (30-day TTL) |
| `refresh_token_time` | Session start timestamp (1 day or 30 days depending on Remember Me) |

Silent refresh is scheduled automatically using the `exp` claim from the access token JWT � it fires 2 minutes before expiry and reschedules itself after each successful refresh.

---

## Versioning

Versions follow the format **`YEAR.MONTH.HOTFIX`**:

| Segment | Description | Example |
|---------|-------------|---------|
| `YEAR` | Full 4-digit year | `2026` |
| `MONTH` | Month number, no leading zero | `4` |
| `HOTFIX` | Sequential fix number within the month, starting at `0` | `0`, `1`, `2` |

**Examples:**

| Version | Meaning |
|---------|---------|
| `2026.4.0` | First release of April 2026 |
| `2026.4.1` | First hotfix in April 2026 |
| `2026.4.2` | Second hotfix in April 2026 |
| `2026.5.0` | First release of May 2026 |

Update `version` in `package.json` manually before publishing — `npm version` is not used.

---

## Publishing

```bash
# Login to CodeArtifact
aws codeartifact login --tool npm --domain colibri --repository identity-widgets --region us-east-1

npm run build
# Update version in package.json to YEAR.MONTH.HOTFIX (e.g. 2026.4.1)
git push origin main --follow-tags
npm publish
```

For full deployment steps see the [Confluence guide](https://colibrigroup.atlassian.net/wiki/spaces/AP/pages/5297438774/Keycloak+Widget+Integration).
