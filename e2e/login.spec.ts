import { test, expect, Page } from "@playwright/test";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

// A properly-structured mock JWT used for E2E tests.
// jwtDecode() only base64-decodes the payload — no signature validation needed.
// This token has exp: 1709853600 (past) which is fine: handleAuthentication stores
// tokens in localStorage regardless of expiry.
const MOCK_ACCESS_TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0ZXN0LWtleSJ9" +
  ".eyJleHAiOjE3MDk4NTM2MDAsImlhdCI6MTcwOTg1MDAwMCwianRpIjoiMTIzNDUtNjc4OTAtYWJjZGUtZWZnaGkiLCJpc3MiOiJodHRwczovL2Rldi1rZXljbG9hay5jb2xpYnJpbGVhcm5pbmcuY29tL3JlYWxtcy9jb2xpYnJpIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6InRlc3QtdXNlci1pZCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImNvbGlicmktY2xpZW50IiwiYWNyIjoiMSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiSm9obiBEb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImdpdmVuX25hbWUiOiJKb2huIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIn0" +
  ".signature";

const MOCK_REFRESH_TOKEN = "mock-refresh-token-value";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const SELECTORS = {
  emailInput: 'input[id="email"]',
  passwordInput: 'input[id="password"]',
  submitButton: 'button[part~="identity-widget-login-submit-button"]',
  createAccountButton: 'button[part~="identity-widget-login-create-account-button"]',
  rememberMeCheckbox: 'input[aria-label="Remember me"]',
  forgotPasswordLink: 'a[part~="identity-widget-login-forgot-link"]',
  closeButton: 'button[aria-label="Close dialog"]',
  showPasswordButton: 'button[aria-label="Show password"]',
  hidePasswordButton: 'button[aria-label="Hide password"]',
  helpCenterButton: 'button[part~="identity-widget-login-help-center-button"]',
  capsLockWarning: '[role="status"]',
  loginTitle: "#login-dialog-title",
};

/** Mock the auth login endpoint to return a success response.
 * NOTE: handleAuthentication() expects { tokens: {...} } nested structure
 * because authLogin() spreads response.data which the real API returns as { tokens: {...} }.
 */
async function mockAuthLoginSuccess(page: Page) {
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

/** Mock the auth login endpoint to return a 401 error */
async function mockAuthLoginFailure(page: Page, message = "Invalid credentials") {
  await page.route("**/api/auth", (route) =>
    route.fulfill({
      status: 401,
      contentType: "application/json",
      body: JSON.stringify({ error: message }),
    })
  );
}

/** Mock the check-email endpoint */
async function mockCheckEmail(page: Page, exists: boolean) {
  await page.route("**/api/check-email", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ exists }),
    })
  );
}

/** Mock the forgot-password endpoint to succeed */
async function mockForgotPasswordSuccess(page: Page) {
  await page.route("**/api/forgot-password", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ message: "Reset link sent" }),
    })
  );
}

/** Mock the forgot-password endpoint to fail */
async function mockForgotPasswordNotFound(page: Page) {
  await page.route("**/api/forgot-password", (route) =>
    route.fulfill({
      status: 404,
      contentType: "application/json",
      body: JSON.stringify({ error: "We couldn't find an account with that email." }),
    })
  );
}

/** Navigate to the app and wait for the login form to load */
async function gotoLoginForm(page: Page) {
  await page.goto("/");
  await page.waitForSelector(SELECTORS.loginTitle, { state: "visible" });
}

// ---------------------------------------------------------------------------
// Test Suite
// ---------------------------------------------------------------------------

test.describe("Auth Widget — Login Form", () => {
  // -------------------------------------------------------------------------
  // Rendering
  // -------------------------------------------------------------------------

  test.describe("Rendering", () => {
    test("renders login form controls", async ({ page }) => {
      await gotoLoginForm(page);

      await expect(page.locator(SELECTORS.loginTitle)).toHaveText("Continue to login");
      await expect(page.locator("text=Continue by signing in.")).toBeVisible();
      await expect(page.locator(SELECTORS.emailInput)).toBeVisible();
      await expect(page.locator(SELECTORS.passwordInput)).toBeVisible();
      await expect(page.locator(SELECTORS.submitButton)).toBeVisible();
      await expect(page.locator(SELECTORS.rememberMeCheckbox)).toBeVisible();
      await expect(page.locator(SELECTORS.forgotPasswordLink)).toBeVisible();
      await expect(page.locator(SELECTORS.createAccountButton)).toBeVisible();
      await expect(page.locator(SELECTORS.closeButton)).toBeVisible();
      await expect(page.locator(SELECTORS.helpCenterButton)).toBeVisible();
    });

    test("submit button is disabled when email is empty", async ({ page }) => {
      await gotoLoginForm(page);
      await expect(page.locator(SELECTORS.submitButton)).toBeDisabled();
    });

    test("submit button becomes enabled after typing an email", async ({ page }) => {
      await gotoLoginForm(page);
      await page.fill(SELECTORS.emailInput, "user@example.com");
      await expect(page.locator(SELECTORS.submitButton)).toBeEnabled();
    });

    test("password input is masked by default", async ({ page }) => {
      await gotoLoginForm(page);
      await expect(page.locator(SELECTORS.passwordInput)).toHaveAttribute("type", "password");
    });

    test("remember me checkbox is unchecked by default", async ({ page }) => {
      await gotoLoginForm(page);
      await expect(page.locator(SELECTORS.rememberMeCheckbox)).not.toBeChecked();
    });
  });

  // -------------------------------------------------------------------------
  // Password Visibility Toggle
  // -------------------------------------------------------------------------

  test.describe("Password Visibility Toggle", () => {
    test("reveals password when clicking show-password button", async ({ page }) => {
      await gotoLoginForm(page);
      await page.fill(SELECTORS.passwordInput, "MySecret123!");
      await page.click(SELECTORS.showPasswordButton);
      await expect(page.locator(SELECTORS.passwordInput)).toHaveAttribute("type", "text");
      await expect(page.locator(SELECTORS.hidePasswordButton)).toBeVisible();
    });

    test("hides password when clicking hide-password button", async ({ page }) => {
      await gotoLoginForm(page);
      await page.fill(SELECTORS.passwordInput, "MySecret123!");
      await page.click(SELECTORS.showPasswordButton);
      await page.click(SELECTORS.hidePasswordButton);
      await expect(page.locator(SELECTORS.passwordInput)).toHaveAttribute("type", "password");
    });
  });

  // -------------------------------------------------------------------------
  // Caps Lock Warning
  // -------------------------------------------------------------------------

  test.describe("Caps Lock Warning", () => {
    test("shows caps lock warning on CapsLock keydown", async ({ page }) => {
      await gotoLoginForm(page);
      await page.click(SELECTORS.passwordInput);
      await page.keyboard.press("CapsLock");
      await expect(page.locator(SELECTORS.capsLockWarning)).toContainText(/caps lock is on/i);
    });

    test("hides caps lock warning on second CapsLock keydown", async ({ page }) => {
      await gotoLoginForm(page);
      await page.click(SELECTORS.passwordInput);
      await page.keyboard.press("CapsLock");
      await expect(page.locator(SELECTORS.capsLockWarning)).toBeVisible();
      await page.keyboard.press("CapsLock");
      await expect(page.locator(SELECTORS.capsLockWarning)).not.toBeVisible();
    });
  });

  // -------------------------------------------------------------------------
  // Email Validation (check-email API)
  // -------------------------------------------------------------------------

  test.describe("Email Validation", () => {
    test("shows verified icon when registered email is entered", async ({ page }) => {
      await mockCheckEmail(page, true);
      await gotoLoginForm(page);

      await page.fill(SELECTORS.emailInput, "registered@example.com");
      // Wait for debounce + API response
      await expect(page.locator('img[aria-label="User found"]')).toBeVisible({ timeout: 3000 });
    });

    test("shows info banner when email is not registered", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoLoginForm(page);

      await page.fill(SELECTORS.emailInput, "unknown@example.com");
      await expect(page.locator("text=Let's create one to continue?")).toBeVisible({
        timeout: 3000,
      });
    });

    test("allows login with username (no @ symbol) without email check", async ({ page }) => {
      await gotoLoginForm(page);
      await page.fill(SELECTORS.emailInput, "john.doe");
      // No banner should appear for non-email input
      await expect(page.locator('img[aria-label="User found"]')).not.toBeVisible();
      await expect(page.locator(SELECTORS.submitButton)).toBeEnabled();
    });

    test("navigates to create account when clicking banner action", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoLoginForm(page);

      await page.fill(SELECTORS.emailInput, "newuser@example.com");
      await page.click("text=Let's create one to continue?", { timeout: 3000 });
      await expect(page.getByRole("form", { name: /Create account form/i })).toBeVisible();
    });
  });

  // -------------------------------------------------------------------------
  // Successful Login
  // -------------------------------------------------------------------------

  test.describe("Successful Login", () => {
    test("submits login with mocked auth API and stores tokens", async ({ page }) => {
      await mockAuthLoginSuccess(page);
      await gotoLoginForm(page);

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.fill(SELECTORS.passwordInput, "Password@1");
      await page.click(SELECTORS.submitButton);

      // After successful login setIsAuthenticated(true) → EmbeddedLoginForm unmounts
      await expect(page.locator(SELECTORS.loginTitle)).not.toBeVisible({ timeout: 5000 });
    });

    test("stores refresh token time flag when remember me is checked", async ({ page }) => {
      await mockAuthLoginSuccess(page);
      await gotoLoginForm(page);

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.fill(SELECTORS.passwordInput, "Password@1");
      await page.check(SELECTORS.rememberMeCheckbox);
      await page.click(SELECTORS.submitButton);

      // Wait for login to complete and form to unmount
      await expect(page.locator(SELECTORS.loginTitle)).not.toBeVisible({ timeout: 5000 });

      // handleAuthentication stores refresh_token always, but only sets refresh_token_time
      // when rememberMe=true — this flag controls auto-login on revisit
      const rememberMeFlag = await page.evaluate(() => localStorage.getItem("refresh_token_time"));
      expect(rememberMeFlag).not.toBeNull();
    });

    test("does NOT store remember-me flag in localStorage when remember me is unchecked", async ({
      page,
    }) => {
      await mockAuthLoginSuccess(page);
      await gotoLoginForm(page);

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.fill(SELECTORS.passwordInput, "Password@1");
      // remember me stays unchecked (default)
      await page.click(SELECTORS.submitButton);

      // Wait for login to complete
      await expect(page.locator(SELECTORS.loginTitle)).not.toBeVisible({ timeout: 5000 });

      // refresh_token_time MUST be absent — its absence prevents auto-login on revisit
      const rememberMeFlag = await page.evaluate(() => localStorage.getItem("refresh_token_time"));
      expect(rememberMeFlag).toBeNull();
    });

    test("shows loading spinner while login API is in-flight", async ({ page }) => {
      // Delay the mock with a native Promise — page.waitForTimeout() must NOT be used
      // inside a route callback because it ties back to the page context lifecycle.
      await page.route("**/api/auth", (route) =>
        new Promise<void>((resolve) => setTimeout(resolve, 600)).then(() =>
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

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.fill(SELECTORS.passwordInput, "Password@1");
      await page.click(SELECTORS.submitButton);

      await expect(page.locator("text=Signing in...")).toBeVisible({ timeout: 3000 });
    });
  });

  // -------------------------------------------------------------------------
  // Failed Login
  // -------------------------------------------------------------------------

  test.describe("Failed Login", () => {
    test("shows auth error banner when login API fails", async ({ page }) => {
      await mockAuthLoginFailure(page, "Invalid credentials");
      await gotoLoginForm(page);

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.fill(SELECTORS.passwordInput, "WrongPassword1!");
      await page.click(SELECTORS.submitButton);

      // Error message appears next to the password field or in toast
      await expect(page.locator("text=Invalid credentials").first()).toBeVisible({
        timeout: 5000,
      });
    });

    test("clears inline password error when user starts typing password again", async ({
      page,
    }) => {
      await mockAuthLoginFailure(page, "Invalid credentials");
      await gotoLoginForm(page);

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.fill(SELECTORS.passwordInput, "WrongPass1!");
      await page.click(SELECTORS.submitButton);

      // Wait for the inline field error specifically (id="password-error", role="alert")
      // The toast also shows the same text but persists for 5 s — we target the inline error only.
      await expect(page.locator("#password-error")).toBeVisible({ timeout: 5000 });

      // User starts re-typing → setErrorMessage("") clears the inline error
      await page.fill(SELECTORS.passwordInput, "N");
      await expect(page.locator("#password-error")).not.toBeVisible();
    });

    test("shows validation error when submitting empty email and password", async ({ page }) => {
      await gotoLoginForm(page);
      // The submit button is disabled when email is empty, so type a space then clear
      await page.fill(SELECTORS.emailInput, "a");
      await page.fill(SELECTORS.passwordInput, "");
      await page.click(SELECTORS.submitButton);

      await expect(page.locator("text=Please enter both username/email and password")).toBeVisible({
        timeout: 3000,
      });
    });
  });

  // -------------------------------------------------------------------------
  // Remember Me
  // -------------------------------------------------------------------------

  test.describe("Remember Me", () => {
    test("toggles the remember me checkbox", async ({ page }) => {
      await gotoLoginForm(page);

      const checkbox = page.locator(SELECTORS.rememberMeCheckbox);
      await expect(checkbox).not.toBeChecked();
      await checkbox.check();
      await expect(checkbox).toBeChecked();
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    });
  });

  // -------------------------------------------------------------------------
  // Forgot Password / Reset Password Flow
  // -------------------------------------------------------------------------

  test.describe("Forgot Password", () => {
    test("navigates to reset password form when clicking Forgot Password", async ({ page }) => {
      await gotoLoginForm(page);
      await page.click(SELECTORS.forgotPasswordLink);
      await expect(page.locator("text=Reset your password").first()).toBeVisible();
    });

    test("sends reset link and shows success screen", async ({ page }) => {
      await mockForgotPasswordSuccess(page);
      await mockCheckEmail(page, true);
      await gotoLoginForm(page);

      // Open reset password form
      await page.click(SELECTORS.forgotPasswordLink);

      const resetEmailInput = page.locator('input[id="reset-email"]');
      await resetEmailInput.fill("user@example.com");

      // Wait for email check debounce (500ms)
      await page.waitForTimeout(700);

      const sendLinkButton = page.locator(
        'button[part~="identity-widget-reset-password-submit-button"]'
      );
      await sendLinkButton.waitFor({ state: "visible" });
      await sendLinkButton.click();

      await expect(page.locator("text=Check your email").first()).toBeVisible({ timeout: 5000 });
    });

    test("shows error when reset password email is not found", async ({ page }) => {
      await mockForgotPasswordNotFound(page);
      await mockCheckEmail(page, true);
      await gotoLoginForm(page);

      await page.click(SELECTORS.forgotPasswordLink);

      const resetEmailInput = page.locator('input[id="reset-email"]');
      await resetEmailInput.fill("notfound@example.com");
      await page.waitForTimeout(700);

      const sendLinkButton = page.locator(
        'button[part~="identity-widget-reset-password-submit-button"]'
      );
      await sendLinkButton.waitFor({ state: "visible" });
      await sendLinkButton.click();

      await expect(
        page.locator("text=We couldn't find an account with that email.").first()
      ).toBeVisible({ timeout: 5000 });
    });

    test("navigates back to login form from reset password", async ({ page }) => {
      await gotoLoginForm(page);
      await page.click(SELECTORS.forgotPasswordLink);

      // Click back button
      const backButton = page.locator('button[part~="identity-widget-reset-password-back-button"]');
      await backButton.click();

      await expect(page.locator(SELECTORS.loginTitle)).toBeVisible();
    });
  });

  // -------------------------------------------------------------------------
  // Create Account Navigation
  // -------------------------------------------------------------------------

  test.describe("Create Account Navigation", () => {
    test("navigates to create account form when clicking Create an Account", async ({ page }) => {
      await gotoLoginForm(page);
      await page.click(SELECTORS.createAccountButton);
      await expect(page.getByRole("form", { name: /Create account form/i })).toBeVisible();
    });

    test("navigates back to login form from create account", async ({ page }) => {
      await gotoLoginForm(page);
      await page.click(SELECTORS.createAccountButton);

      const signInButton = page.locator(
        'button[part~="identity-widget-create-account-signin-button"]'
      );
      await signInButton.click();

      await expect(page.locator(SELECTORS.loginTitle)).toBeVisible({ timeout: 3000 });
    });
  });

  // -------------------------------------------------------------------------
  // Help Center Navigation
  // -------------------------------------------------------------------------

  test.describe("Help Center", () => {
    test("opens help center when clicking Visit our help center", async ({ page }) => {
      await gotoLoginForm(page);
      await page.click(SELECTORS.helpCenterButton);
      await expect(page.locator("text=Help Center").first()).toBeVisible();
    });

    test("navigates back to login form from help center", async ({ page }) => {
      await gotoLoginForm(page);
      await page.click(SELECTORS.helpCenterButton);

      const backButton = page.locator('button[part~="identity-widget-help-center-back-button"]');
      await backButton.click();

      await expect(page.locator(SELECTORS.loginTitle)).toBeVisible();
    });
  });

  // -------------------------------------------------------------------------
  // Close / Dismiss Interactions
  // Note: in standalone TEST mode main.tsx does NOT pass a handleClose prop to
  // <App>, so the close handler is a no-op and the widget stays visible.
  // These tests verify the interactions are accessible and don't break the form.
  // Dismiss-on-close is verified via the WEBCOMPONENT integration (widget-test.html).
  // -------------------------------------------------------------------------

  test.describe("Close / Dismiss Interactions", () => {
    test("X close button is accessible, clickable, and leaves form in clean state", async ({
      page,
    }) => {
      await gotoLoginForm(page);
      await page.click(SELECTORS.closeButton);
      // In standalone TEST mode handleClose is a no-op — form stays visible
      await expect(page.locator(SELECTORS.loginTitle)).toBeVisible();
      await expect(page.locator(SELECTORS.emailInput)).toBeVisible();
      // No unexpected error state after close button click
      await expect(page.locator("#password-error")).not.toBeVisible();
    });

    test("Escape key is handled and form remains fully usable", async ({ page }) => {
      await gotoLoginForm(page);
      await page.keyboard.press("Escape");
      // Form stays visible; inputs are still interactable
      await expect(page.locator(SELECTORS.loginTitle)).toBeVisible();
      await expect(page.locator(SELECTORS.submitButton)).toBeVisible();
      // Can still type after Escape
      await page.fill(SELECTORS.emailInput, "test@example.com");
      await expect(page.locator(SELECTORS.submitButton)).toBeEnabled();
    });

    test("overlay background click is handled and form remains fully usable", async ({ page }) => {
      await gotoLoginForm(page);
      const overlay = page.locator('[part="identity-widget-login-overlay"]');
      const box = await overlay.boundingBox();
      if (box) {
        await page.mouse.click(box.x + 10, box.y + 10);
      }
      // Form stays visible; widget is still accessible
      await expect(page.locator(SELECTORS.loginTitle)).toBeVisible();
      await expect(page.locator(SELECTORS.emailInput)).toBeVisible();
    });
  });

  // -------------------------------------------------------------------------
  // Accessibility
  // -------------------------------------------------------------------------

  test.describe("Accessibility", () => {
    test("login dialog has correct ARIA attributes", async ({ page }) => {
      await gotoLoginForm(page);

      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toHaveAttribute("aria-modal", "true");
      await expect(dialog).toHaveAttribute("aria-labelledby", "login-dialog-title");
    });

    test("login form has an accessible label", async ({ page }) => {
      await gotoLoginForm(page);
      await expect(page.getByRole("form", { name: /login form/i })).toBeVisible();
    });

    test("password field has autocomplete attribute set to current-password", async ({ page }) => {
      await gotoLoginForm(page);
      await expect(page.locator(SELECTORS.passwordInput)).toHaveAttribute(
        "autocomplete",
        "current-password"
      );
    });

    test("email field has autocomplete attribute set to username", async ({ page }) => {
      await gotoLoginForm(page);
      await expect(page.locator(SELECTORS.emailInput)).toHaveAttribute("autocomplete", "username");
    });
  });
});
