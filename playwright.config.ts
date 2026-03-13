import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright E2E Test Configuration
 * Tests run on a dedicated port (5174) so they never clash with the regular
 * dev server (5173). The webServer block always starts Vite with
 * VITE_RENDER_MODE=TEST so the app renders as a React app — not a Web Component.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [["html", { outputFolder: "playwright-report", open: "never" }], ["list"]],

  use: {
    // Dedicated test port — separate from the normal `npm run dev` server
    baseURL: "http://localhost:5174",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  /* Start Vite on port 5174 with TEST mode forced */
  webServer: {
    command: "npx vite --port 5174",
    url: "http://localhost:5174",
    // Reuse only if a TEST-mode server is already up on 5174 (e.g. from a prior run)
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
    env: {
      VITE_RENDER_MODE: "TEST",
    },
  },
});
