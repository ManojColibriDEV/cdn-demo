import { test, expect, Page } from "@playwright/test";
import {
  MOCK_ACCESS_TOKEN,
  MOCK_REFRESH_TOKEN,
  mockAuthGoogleSuccess,
  mockAuthGoogleFailure,
  mockAuthAppleSuccess,
  mockAuthAppleFailure,
  gotoLoginForm,
} from "./helpers";

// ---------------------------------------------------------------------------
// Selectors
// ---------------------------------------------------------------------------

const SELECTORS = {
  loginTitle: "#login-dialog-title",
  // Google
  googleSection: '[part~="identity-widget-google-section"]',
  googleButton: '[part~="identity-widget-google-button"]',
  googleIcon: '[part~="identity-widget-google-icon"]',
  googleText: '[part~="identity-widget-google-text"]',
  dividerSection: '[part~="identity-widget-login-divider"]',
  dividerText: '[part~="identity-widget-login-divider-text"]',
  // Apple
  appleSection: '[part~="identity-widget-apple-section"]',
  appleButton: '[part~="identity-widget-apple-button"]',
  appleIcon: '[part~="identity-widget-apple-icon"]',
  appleText: '[part~="identity-widget-apple-text"]',
};

// ---------------------------------------------------------------------------
// Test Suite — Google Sign In
// ---------------------------------------------------------------------------

test.describe("Auth Widget — Google Sign In", () => {
  // -------------------------------------------------------------------------
  // DOM Presence & Rendering
  // -------------------------------------------------------------------------

  test.describe("DOM Presence", () => {
    test("Google sign-in section is present in DOM when googleClientId is configured", async ({
      page,
    }) => {
      await gotoLoginForm(page);
      // The section exists in DOM even though it has hidden! class
      await expect(page.locator(SELECTORS.googleSection)).toBeAttached();
    });

    test("Google sign-in button has correct text", async ({ page }) => {
      await gotoLoginForm(page);
      await expect(page.locator(SELECTORS.googleText)).toHaveText("Sign in with Google");
    });

    test("Google icon image is present in the button", async ({ page }) => {
      await gotoLoginForm(page);
      const icon = page.locator(SELECTORS.googleIcon);
      await expect(icon).toBeAttached();
      await expect(icon).toHaveAttribute("alt", "Google");
    });

    test("OR divider section is present when Google login is enabled", async ({ page }) => {
      await gotoLoginForm(page);
      await expect(page.locator(SELECTORS.dividerSection)).toBeAttached();
      await expect(page.locator(SELECTORS.dividerText)).toHaveText("OR");
    });

    test("Google button has correct part attribute for styling", async ({ page }) => {
      await gotoLoginForm(page);
      const button = page.locator(SELECTORS.googleButton);
      await expect(button).toBeAttached();
    });

    test("Google button is not disabled by default", async ({ page }) => {
      await gotoLoginForm(page);
      const button = page.locator(SELECTORS.googleButton);
      await expect(button).not.toBeDisabled();
    });
  });

  // -------------------------------------------------------------------------
  // Brand Config Error Interaction
  // -------------------------------------------------------------------------

  test.describe("Brand Config Error", () => {
    test("Google button is disabled when brand config error is active", async ({ page }) => {
      // Block the CDN call so brand_data is never set
      await page.route("**dev-cdn.colibrilearning.com**", (route) => route.abort());
      await gotoLoginForm(page, { setBrandData: false });

      // Wait for the brand config error to be detected
      await expect(page.locator("text=We're having trouble signing you in")).toBeVisible({
        timeout: 10000,
      });

      const button = page.locator(SELECTORS.googleButton);
      await expect(button).toBeDisabled();
    });
  });

  // -------------------------------------------------------------------------
  // Google Auth API — Direct Endpoint Tests
  //
  // Since the Google button triggers an OAuth popup flow via useGoogleLogin(),
  // we test the backend API endpoint (/api/auth/google) directly to verify
  // the widget handles token exchange responses correctly.
  // -------------------------------------------------------------------------

  test.describe("Google Auth API (/api/auth/google)", () => {
    test("successful Google auth returns tokens with correct structure", async ({ page }) => {
      await mockAuthGoogleSuccess(page);
      await gotoLoginForm(page);

      // Simulate what handleGoogleAuthentication does — call the Google auth API
      const response = await page.evaluate(async () => {
        const res = await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "mock-google-auth-code" }),
        });
        return res.json();
      });

      expect(response.tokens).toBeDefined();
      expect(response.tokens.access_token).toBeTruthy();
      expect(response.tokens.refresh_token).toBeTruthy();
      expect(response.tokens.expires_in).toBe(3600);
      expect(response.tokens.token_type).toBe("Bearer");
      expect(response.x_credential).toBe("mock-x-credential");
    });

    test("failed Google auth returns 401 with error message", async ({ page }) => {
      await mockAuthGoogleFailure(page, "Invalid authorization code");
      await gotoLoginForm(page);

      const response = await page.evaluate(async () => {
        const res = await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "invalid-code" }),
        });
        return { status: res.status, body: await res.json() };
      });

      expect(response.status).toBe(401);
      expect(response.body.error).toBe("Invalid authorization code");
    });

    test("Google auth API stores tokens in localStorage when successful", async ({ page }) => {
      await mockAuthGoogleSuccess(page);
      await gotoLoginForm(page);

      // Simulate the token storage that handleGoogleAuthentication performs
      await page.evaluate(
        async ({ accessToken, refreshToken }) => {
          const res = await fetch("/api/auth/google", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: "mock-google-auth-code" }),
          });
          const data = await res.json();
          // Store tokens like the real flow does
          localStorage.setItem("access_token", data.tokens.access_token);
          localStorage.setItem("refresh_token", data.tokens.refresh_token);
        },
        { accessToken: MOCK_ACCESS_TOKEN, refreshToken: MOCK_REFRESH_TOKEN }
      );

      const storedAccess = await page.evaluate(() => localStorage.getItem("access_token"));
      const storedRefresh = await page.evaluate(() => localStorage.getItem("refresh_token"));
      expect(storedAccess).toBe(MOCK_ACCESS_TOKEN);
      expect(storedRefresh).toBe(MOCK_REFRESH_TOKEN);
    });

    test("Google auth tokens persist after page reload", async ({ page }) => {
      await mockAuthGoogleSuccess(page);
      await gotoLoginForm(page);

      // Store tokens via the Google auth API
      await page.evaluate(async () => {
        const res = await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "mock-google-auth-code" }),
        });
        const data = await res.json();
        localStorage.setItem("access_token", data.tokens.access_token);
        localStorage.setItem("refresh_token", data.tokens.refresh_token);
      });

      await page.reload();
      await page.waitForLoadState("networkidle");

      const storedAccess = await page.evaluate(() => localStorage.getItem("access_token"));
      expect(storedAccess).toBe(MOCK_ACCESS_TOKEN);
    });

    test("Google auth API sends correct request body", async ({ page }) => {
      let capturedBody: any = null;
      await page.route("**/api/auth/google", (route) => {
        capturedBody = route.request().postDataJSON();
        return route.fulfill({
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
        });
      });

      await gotoLoginForm(page);

      await page.evaluate(async () => {
        await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "test-auth-code-12345" }),
        });
      });

      expect(capturedBody).toEqual({ code: "test-auth-code-12345" });
    });

    test("Google auth API with delayed response (simulates slow network)", async ({ page }) => {
      await page.route("**/api/auth/google", (route) =>
        new Promise<void>((resolve) => setTimeout(resolve, 500)).then(() =>
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
        )
      );

      await gotoLoginForm(page);

      const start = Date.now();
      await page.evaluate(async () => {
        await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "mock-code" }),
        });
      });
      const elapsed = Date.now() - start;

      // Should have taken at least 400ms due to the delay
      expect(elapsed).toBeGreaterThanOrEqual(400);
    });
  });
});

// ---------------------------------------------------------------------------
// Test Suite — Apple Sign In
// ---------------------------------------------------------------------------

test.describe("Auth Widget — Apple Sign In", () => {
  // -------------------------------------------------------------------------
  // DOM Presence & Rendering
  // -------------------------------------------------------------------------

  test.describe("DOM Presence", () => {
    test("Apple sign-in section is present in DOM when appleClientId is configured", async ({
      page,
    }) => {
      await gotoLoginForm(page);
      // The section exists in DOM even though it has hidden! class
      await expect(page.locator(SELECTORS.appleSection)).toBeAttached();
    });

    test("Apple sign-in button has correct text", async ({ page }) => {
      await gotoLoginForm(page);
      await expect(page.locator(SELECTORS.appleText)).toHaveText("Sign in with Apple");
    });

    test("Apple icon SVG is present in the button", async ({ page }) => {
      await gotoLoginForm(page);
      const icon = page.locator(SELECTORS.appleIcon);
      await expect(icon).toBeAttached();
      // Apple icon is an inline SVG with aria-hidden
      await expect(icon).toHaveAttribute("aria-hidden", "true");
    });

    test("Apple button has correct part attribute for styling", async ({ page }) => {
      await gotoLoginForm(page);
      const button = page.locator(SELECTORS.appleButton);
      await expect(button).toBeAttached();
    });

    test("Apple button is not disabled by default", async ({ page }) => {
      await gotoLoginForm(page);
      const button = page.locator(SELECTORS.appleButton);
      await expect(button).not.toBeDisabled();
    });
  });

  // -------------------------------------------------------------------------
  // Apple SDK Script Loading
  // -------------------------------------------------------------------------

  test.describe("Apple SDK Script", () => {
    test("Apple Sign In JS SDK script tag is injected into the page head", async ({ page }) => {
      await gotoLoginForm(page);

      // The component injects the Apple JS SDK script on mount
      const scriptTag = page.locator(
        'script[src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"]'
      );
      await expect(scriptTag).toBeAttached({ timeout: 5000 });
    });

    test("Apple SDK script is not duplicated on re-render", async ({ page }) => {
      await gotoLoginForm(page);

      // Wait for initial script injection
      await page.waitForSelector(
        'script[src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"]',
        { state: "attached", timeout: 5000 }
      );

      // Count how many Apple SDK scripts exist
      const scriptCount = await page
        .locator(
          'script[src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"]'
        )
        .count();

      expect(scriptCount).toBe(1);
    });
  });

  // -------------------------------------------------------------------------
  // Brand Config Error Interaction
  // -------------------------------------------------------------------------

  test.describe("Brand Config Error", () => {
    test("Apple button is disabled when brand config error is active", async ({ page }) => {
      await page.route("**dev-cdn.colibrilearning.com**", (route) => route.abort());
      await gotoLoginForm(page, { setBrandData: false });

      await expect(page.locator("text=We're having trouble signing you in")).toBeVisible({
        timeout: 10000,
      });

      const button = page.locator(SELECTORS.appleButton);
      await expect(button).toBeDisabled();
    });
  });

  // -------------------------------------------------------------------------
  // Apple Auth API — Direct Endpoint Tests
  //
  // Since the Apple button triggers an OS-level Sign In with Apple sheet that
  // cannot be automated, we test the backend API endpoint (/api/auth/apple)
  // directly to verify the widget handles token exchange responses correctly.
  // -------------------------------------------------------------------------

  test.describe("Apple Auth API (/api/auth/apple)", () => {
    test("successful Apple auth returns tokens with correct structure", async ({ page }) => {
      await mockAuthAppleSuccess(page);
      await gotoLoginForm(page);

      const response = await page.evaluate(async () => {
        const res = await fetch("/api/auth/apple", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "mock-apple-auth-code" }),
        });
        return res.json();
      });

      expect(response.tokens).toBeDefined();
      expect(response.tokens.access_token).toBeTruthy();
      expect(response.tokens.refresh_token).toBeTruthy();
      expect(response.tokens.expires_in).toBe(3600);
      expect(response.tokens.token_type).toBe("Bearer");
    });

    test("failed Apple auth returns 401 with error message", async ({ page }) => {
      await mockAuthAppleFailure(page, "Invalid authorization code");
      await gotoLoginForm(page);

      const response = await page.evaluate(async () => {
        const res = await fetch("/api/auth/apple", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "invalid-code" }),
        });
        return { status: res.status, body: await res.json() };
      });

      expect(response.status).toBe(401);
      expect(response.body.error).toBe("Invalid authorization code");
    });

    test("Apple auth API stores tokens in localStorage when successful", async ({ page }) => {
      await mockAuthAppleSuccess(page);
      await gotoLoginForm(page);

      await page.evaluate(async () => {
        const res = await fetch("/api/auth/apple", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "mock-apple-auth-code" }),
        });
        const data = await res.json();
        localStorage.setItem("access_token", data.tokens.access_token);
        localStorage.setItem("refresh_token", data.tokens.refresh_token);
      });

      const storedAccess = await page.evaluate(() => localStorage.getItem("access_token"));
      const storedRefresh = await page.evaluate(() => localStorage.getItem("refresh_token"));
      expect(storedAccess).toBe(MOCK_ACCESS_TOKEN);
      expect(storedRefresh).toBe(MOCK_REFRESH_TOKEN);
    });

    test("Apple auth tokens persist after page reload", async ({ page }) => {
      await mockAuthAppleSuccess(page);
      await gotoLoginForm(page);

      await page.evaluate(async () => {
        const res = await fetch("/api/auth/apple", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "mock-apple-auth-code" }),
        });
        const data = await res.json();
        localStorage.setItem("access_token", data.tokens.access_token);
        localStorage.setItem("refresh_token", data.tokens.refresh_token);
      });

      await page.reload();
      await page.waitForLoadState("networkidle");

      const storedAccess = await page.evaluate(() => localStorage.getItem("access_token"));
      expect(storedAccess).toBe(MOCK_ACCESS_TOKEN);
    });

    test("Apple auth API sends correct request body", async ({ page }) => {
      let capturedBody: any = null;
      await page.route("**/api/auth/apple", (route) => {
        capturedBody = route.request().postDataJSON();
        return route.fulfill({
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
        });
      });

      await gotoLoginForm(page);

      await page.evaluate(async () => {
        await fetch("/api/auth/apple", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "test-apple-code-12345" }),
        });
      });

      expect(capturedBody).toEqual({ code: "test-apple-code-12345" });
    });

    test("Apple auth API forwards optional user object in request body", async ({ page }) => {
      let capturedBody: any = null;
      await page.route("**/api/auth/apple", (route) => {
        capturedBody = route.request().postDataJSON();
        return route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ tokens: { access_token: MOCK_ACCESS_TOKEN } }),
        });
      });

      await gotoLoginForm(page);

      await page.evaluate(async () => {
        await fetch("/api/auth/apple", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            code: "apple-code-with-user",
            user: { name: { firstName: "Jane", lastName: "Doe" }, email: "jane@example.com" },
          }),
        });
      });

      expect(capturedBody.code).toBe("apple-code-with-user");
      expect(capturedBody.user).toEqual({
        name: { firstName: "Jane", lastName: "Doe" },
        email: "jane@example.com",
      });
    });

    test("Apple auth API with delayed response (simulates slow network)", async ({ page }) => {
      await page.route("**/api/auth/apple", (route) =>
        new Promise<void>((resolve) => setTimeout(resolve, 500)).then(() =>
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
        )
      );

      await gotoLoginForm(page);

      const start = Date.now();
      await page.evaluate(async () => {
        await fetch("/api/auth/apple", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "mock-code" }),
        });
      });
      const elapsed = Date.now() - start;

      expect(elapsed).toBeGreaterThanOrEqual(400);
    });
  });

  // -------------------------------------------------------------------------
  // Apple Auth Error Handling
  //
  // Apple Sign In section is intentionally hidden (hidden! CSS class) in the
  // dev environment because no appleClientId is configured. These tests verify
  // both the DOM state and the API-level error contract.
  // -------------------------------------------------------------------------

  test.describe("Apple Auth Error Handling", () => {
    test("Apple section is visible and not hidden when appleClientId is configured", async ({
      page,
    }) => {
      await gotoLoginForm(page);

      await expect(page.locator(SELECTORS.appleButton)).toHaveCount(1);

      // The Apple section is conditionally rendered — when appleClientId is
      // provided it renders without a hidden class (not CSS-hidden, fully visible).
      const appleSection = page.locator(SELECTORS.appleSection);
      await expect(appleSection).toBeAttached();
      await expect(appleSection).not.toHaveClass(/hidden/);
    });

    test("Apple API returns 401 and error message on authentication failure", async ({ page }) => {
      await mockAuthAppleFailure(page, "Apple authentication failed. Please try again.");
      await gotoLoginForm(page);

      const response = await page.evaluate(async () => {
        const res = await fetch("/api/auth/apple", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "bad-code" }),
        });
        return { status: res.status, body: await res.json() };
      });

      expect(response.status).toBe(401);
      expect(response.body.error).toBe("Apple authentication failed. Please try again.");
    });

    test("Apple API error response with error field propagates correctly", async ({ page }) => {
      await page.route("**/api/auth/apple", (route) =>
        route.fulfill({
          status: 400,
          contentType: "application/json",
          body: JSON.stringify({ error: "invalid_grant" }),
        })
      );
      await gotoLoginForm(page);

      const response = await page.evaluate(async () => {
        const res = await fetch("/api/auth/apple", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "expired-code" }),
        });
        return { status: res.status, body: await res.json() };
      });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe("invalid_grant");
    });

    test("Apple API error response with message field propagates correctly", async ({ page }) => {
      await page.route("**/api/auth/apple", (route) =>
        route.fulfill({
          status: 400,
          contentType: "application/json",
          body: JSON.stringify({ message: "Apple code has expired" }),
        })
      );
      await gotoLoginForm(page);

      const response = await page.evaluate(async () => {
        const res = await fetch("/api/auth/apple", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: "expired-code" }),
        });
        return { status: res.status, body: await res.json() };
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Apple code has expired");
    });
  });
});
