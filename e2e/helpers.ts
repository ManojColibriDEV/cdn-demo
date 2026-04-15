import { Page } from "@playwright/test";

// ---------------------------------------------------------------------------
// Shared Mock JWT
// ---------------------------------------------------------------------------

// A properly-structured mock JWT used for E2E tests.
// jwtDecode() only base64-decodes the payload — no signature validation needed.
// The exp value is in the past, which is fine: handleAuthentication stores
// tokens in localStorage regardless of expiry.
export const MOCK_ACCESS_TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0ZXN0LWtleSJ9" +
  ".eyJleHAiOjE3MDk4NTM2MDAsImlhdCI6MTcwOTg1MDAwMCwianRpIjoiMTIzNDUtNjc4OTAtYWJjZGUtZWZnaGkiLCJpc3MiOiJodHRwczovL2Rldi1rZXljbG9hay5jb2xpYnJpbGVhcm5pbmcuY29tL3JlYWxtcy9jb2xpYnJpIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6InRlc3QtdXNlci1pZCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImNvbGlicmktY2xpZW50IiwiYWNyIjoiMSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiSm9obiBEb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImdpdmVuX25hbWUiOiJKb2huIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIn0" +
  ".signature";

export const MOCK_REFRESH_TOKEN = "mock-refresh-token-value";

// ---------------------------------------------------------------------------
// Shared API Mock Helpers
// ---------------------------------------------------------------------------

/** Mock the POST /api/check-email endpoint */
export async function mockCheckEmail(page: Page, exists: boolean) {
  await page.route("**/api/check-email", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ exists }),
    })
  );
}

/** Mock the POST /api/auth endpoint to return a successful token response */
export async function mockAuthLoginSuccess(page: Page) {
  await page.route("**/api/auth", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        tokens: {
          access_token: MOCK_ACCESS_TOKEN,
          refresh_token: MOCK_REFRESH_TOKEN,
          expires_in: 3600,
          token_type: "Bearer",
          scope: "openid",
        },
      }),
    })
  );
}

/** Mock the POST /api/auth/google endpoint to return a successful token response */
export async function mockAuthGoogleSuccess(page: Page) {
  await page.route("**/api/auth/google", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        tokens: {
          access_token: MOCK_ACCESS_TOKEN,
          refresh_token: MOCK_REFRESH_TOKEN,
          expires_in: 3600,
          token_type: "Bearer",
          scope: "openid",
        },
        x_credential: "mock-x-credential",
      }),
    })
  );
}

/** Mock the POST /api/auth/google endpoint to return an error */
export async function mockAuthGoogleFailure(page: Page, message = "Google authentication failed") {
  await page.route("**/api/auth/google", (route) =>
    route.fulfill({
      status: 401,
      contentType: "application/json",
      body: JSON.stringify({ error: message }),
    })
  );
}

// ---------------------------------------------------------------------------
// Shared Navigation Helpers
// ---------------------------------------------------------------------------

/** Navigate to the app root and wait for the login form to be visible */
export async function gotoLoginForm(page: Page, options?: { setBrandData?: boolean }) {
  const { setBrandData = true } = options ?? {};
  if (setBrandData) {
    await page.addInitScript(() => {
      localStorage.setItem("brand_data", JSON.stringify({ domain: "elitelearning.com" }));
    });
  }
  await page.goto("/");
  await page.waitForSelector("#login-dialog-title", { state: "visible" });
}
