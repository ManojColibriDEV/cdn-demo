# Colibri Identity Login Widget

A reusable web component for authentication with Colibri Identity/Keycloak. Easily embed in any website, WordPress, or web application.

## Quick Start

### Basic Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/login-widget.css" />
  </head>
  <body>
    <!-- Add the widget -->
    <keycloak-widget 
      id="auth"
      redirectUrl="/dashboard"
    ></keycloak-widget>

    <!-- Load the script -->
    <script src="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/keycloak-widget.umd.js"></script>
    
    <!-- Listen for redirect events (BEST PRACTICE) -->
    <script>
      document.getElementById("auth")
        .addEventListener("redirect", function(e) {
          console.log("Redirecting to:", e.detail.url);
          window.location.href = e.detail.url;
        });
    </script>
  </body>
</html>
```

### Why Use Event Listeners?

The widget dispatches a `redirect` event after successful login instead of navigating directly. This approach:

✅ **Avoids iframe/popup blocking issues**  
✅ **Works in WordPress, SPAs, and all platforms**  
✅ **Provides clean separation between widget and host**  
✅ **Allows custom logic before redirect** (analytics, loading states, etc.)

See [example-redirect-event.html](example-redirect-event.html) for a complete working example.

## Documentation

- **[Usage Guide](docs/USAGE.md)** - Integration examples and common patterns
- **[API Reference](docs/API-REFERENCE.md)** - Complete API documentation
- **[Web Component Guide](docs/WEB-COMPONENT.md)** - Deep dive into web component implementation
- **[Architecture](docs/ARCHITECTURE.md)** - Technical architecture details
- **[Development Guide](docs/DEVELOPMENT.md)** - Development setup and workflow
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Deployment instructions

---

# Development

## Project README

Quick instructions for working with this project.

Prerequisites:
- Node.js (>=16), npm

Install dependencies

```bash
npm install
```

Development (hot reload)

```bash
npm run dev
```

Change dev server port

```bash
npm run dev -- --port 3000
```

Or set `PORT` env var:

Windows PowerShell:
```powershell
$env:PORT=3000; npm run dev
```
macOS / Linux:
```bash
PORT=3000 npm run dev
```

Build (production)

```bash
npm run build
```

Preview built output

```bash
npm run preview
```

TypeScript & shared types

- Shared types live in `src/types/index.ts`.
- Add new types there and import with `import type { MyType } from './types'`.
- Run `npm run build` to surface type errors.

Clone upstream repo

```bash
git clone https://github.com/McKissockLP/Colibri.Identity.Keycloak.git
cd Colibri.Identity.Keycloak
npm install
```

Commit message rules

Format:

```
<Ticket_Number> - <TYPE>: <short description>
```

- `<Ticket_Number>`: the tracking id for the work (example: `ID_165`).
- `<TYPE>`: a conventional uppercase verb such as `ADD`, `UPDATE`, `FIX`, `DOC`, `CHORE`.
- `<short description>`: imperative, concise summary of the change.

Example:

```
ID_165 - UPDATE: implement login widget UI and connect it with backend auth APIs
```

Guidelines:

- Keep the summary line short (ideally under 72 characters).
- Use the ticket number to link commits to work items.
- For multi-line commits: add a blank line after the summary, then a more
	detailed description and any relevant notes or migration steps.

Notes on CORS and local development

- Vite dev proxy for `/api` -> `https://dev-idb.elitelearning.com` is configured in `vite.config.ts` (development only).
- If you're using Create React App instead, the proxy is implemented in `src/setupProxy.js` using `http-proxy-middleware`.
- Use relative `/api/...` client paths so dev proxy can intercept requests.

Technologies used
-----------------

- **React** — UI library used to build the login widget and app UI.
- **Vite** — development server and bundler with fast HMR for development.
- **TypeScript** — static typing for safer code; shared types live in `src/types`.
- **Axios** — HTTP client used for API calls to the backend.
- **react-router / react-router-dom** — routing and navigation helpers used by the app.
- **http-proxy-middleware** — used in `src/setupProxy.js` for CRA-based proxying (dev only).
- **@vitejs/plugin-react** — Vite plugin used to enable React fast refresh and JSX support.
- **ESLint** — linting and code-quality tooling.
- **web-vitals** — optional perf metrics helper.

If you want me to expand any entry with version numbers or usage examples, tell me which ones.
