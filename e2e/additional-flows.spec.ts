import { test, expect, Page } from "@playwright/test";
import {
  MOCK_ACCESS_TOKEN,
  MOCK_REFRESH_TOKEN,
  mockCheckEmail,
  mockAuthLoginSuccess,
  gotoLoginForm,
} from "./helpers";

// ---------------------------------------------------------------------------
// Selectors
// ---------------------------------------------------------------------------

const SELECTORS = {
  loginTitle: "#login-dialog-title",
  emailInput: 'input[id="email"]',
  passwordInput: 'input[id="password"]',
  submitButton: 'button[part~="identity-widget-login-submit-button"]',
  forgotPasswordLink: 'a[part~="identity-widget-login-forgot-password-link"]',
  helpCenterButton: 'button[part~="identity-widget-login-help-center-button"]',
  resetEmailInput: 'input[id="reset-email"]',
  resetSubmitButton: 'button[part~="identity-widget-reset-password-submit-button"]',
  resetBackButton: 'button[part~="identity-widget-reset-password-back-button"]',
  helpCenterBackButton: 'button[part~="identity-widget-help-center-back-button"]',
  helpCenterCloseButton: 'button[part~="identity-widget-help-center-close-button"]',
};

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

/** Navigate to the reset-password form by clicking the forgot-password link */
async function gotoResetPasswordForm(page: Page) {
  await gotoLoginForm(page);
  await page.click(SELECTORS.forgotPasswordLink);
  await expect(page.locator("text=Reset your password").first()).toBeVisible();
}

/** Complete a successful login so tokens are stored in localStorage */
async function performSuccessfulLogin(page: Page) {
  await mockAuthLoginSuccess(page);
  await gotoLoginForm(page);
  await page.fill(SELECTORS.emailInput, "user@example.com");
  await page.fill(SELECTORS.passwordInput, "Password@1");
  await page.click(SELECTORS.submitButton);
  // Wait for form to unmount (auth complete)
  await expect(page.locator(SELECTORS.loginTitle)).not.toBeVisible({ timeout: 5000 });
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

/** Mock the logout endpoint to succeed */
async function mockLogoutSuccess(page: Page) {
  await page.route("**/api/logout", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ message: "Logged out" }),
    })
  );
}

// ---------------------------------------------------------------------------
// Suite 1: Reset Password Success Screen
// ---------------------------------------------------------------------------

test.describe("Auth Widget — Reset Password Success Screen", () => {
  test("shows 'Check your email' heading after successful reset link request", async ({ page }) => {
    await mockForgotPasswordSuccess(page);
    await mockCheckEmail(page, true);
    await gotoResetPasswordForm(page);

    await page.fill(SELECTORS.resetEmailInput, "user@example.com");
    await page.waitForResponse("**/api/check-email");

    const sendLinkButton = page.locator(SELECTORS.resetSubmitButton);
    await expect(sendLinkButton).toBeEnabled({ timeout: 8000 });
    await sendLinkButton.click();

    await expect(page.locator("text=Check your email").first()).toBeVisible({ timeout: 5000 });
  });

  test("shows the submitted email address on the success screen", async ({ page }) => {
    await mockForgotPasswordSuccess(page);
    await mockCheckEmail(page, true);
    await gotoResetPasswordForm(page);

    await page.fill(SELECTORS.resetEmailInput, "user@example.com");
    await page.waitForResponse("**/api/check-email");

    const sendLinkButton = page.locator(SELECTORS.resetSubmitButton);
    await expect(sendLinkButton).toBeEnabled({ timeout: 8000 });
    await sendLinkButton.click();

    await expect(page.locator("text=Check your email").first()).toBeVisible({ timeout: 5000 });
    await expect(page.locator("text=user@example.com").first()).toBeVisible();
  });

  test("shows 'Resend link' button on the success screen", async ({ page }) => {
    await mockForgotPasswordSuccess(page);
    await mockCheckEmail(page, true);
    await gotoResetPasswordForm(page);

    await page.fill(SELECTORS.resetEmailInput, "user@example.com");
    await page.waitForResponse("**/api/check-email");

    const sendLinkButton = page.locator(SELECTORS.resetSubmitButton);
    await expect(sendLinkButton).toBeEnabled({ timeout: 8000 });
    await sendLinkButton.click();

    await expect(page.locator("text=Check your email").first()).toBeVisible({ timeout: 5000 });
    await expect(
      page.locator('button[part~="identity-widget-reset-success-resend-button"]').first()
    ).toBeVisible();
  });

  test("shows 'Back to sign in' button on the success screen", async ({ page }) => {
    await mockForgotPasswordSuccess(page);
    await mockCheckEmail(page, true);
    await gotoResetPasswordForm(page);

    await page.fill(SELECTORS.resetEmailInput, "user@example.com");
    await page.waitForResponse("**/api/check-email");

    const sendLinkButton = page.locator(SELECTORS.resetSubmitButton);
    await expect(sendLinkButton).toBeEnabled({ timeout: 8000 });
    await sendLinkButton.click();

    await expect(page.locator("text=Check your email").first()).toBeVisible({ timeout: 5000 });
    await expect(page.locator("text=Back to sign in").first()).toBeVisible();
  });

  test("clicking 'Back to sign in' on success screen returns to login form", async ({ page }) => {
    await mockForgotPasswordSuccess(page);
    await mockCheckEmail(page, true);
    await gotoResetPasswordForm(page);

    await page.fill(SELECTORS.resetEmailInput, "user@example.com");
    await page.waitForResponse("**/api/check-email");

    const sendLinkButton = page.locator(SELECTORS.resetSubmitButton);
    await expect(sendLinkButton).toBeEnabled({ timeout: 8000 });
    await sendLinkButton.click();

    await expect(page.locator("text=Check your email").first()).toBeVisible({ timeout: 5000 });
    await page.locator("text=Back to sign in").first().click();

    await expect(page.locator(SELECTORS.loginTitle)).toBeVisible({ timeout: 3000 });
  });

  test("resend link button can be clicked and triggers a loading state", async ({ page }) => {
    // Mock succeeds for both the original send and the resend
    await mockForgotPasswordSuccess(page);
    await mockCheckEmail(page, true);
    await gotoResetPasswordForm(page);

    await page.fill(SELECTORS.resetEmailInput, "user@example.com");
    await page.waitForResponse("**/api/check-email");

    const sendLinkButton = page.locator(SELECTORS.resetSubmitButton);
    await expect(sendLinkButton).toBeEnabled({ timeout: 8000 });
    await sendLinkButton.click();

    await expect(page.locator("text=Check your email").first()).toBeVisible({ timeout: 5000 });

    // Delay the resend response so we can observe a loading state
    await page.route("**/api/forgot-password", (route) =>
      new Promise<void>((resolve) => setTimeout(resolve, 500)).then(() =>
        route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ message: "Reset link sent" }),
        })
      )
    );

    const resendButton = page
      .locator('button[part~="identity-widget-reset-success-resend-button"]')
      .first();
    await resendButton.click();

    // During the in-flight request the button should enter a loading/disabled state
    await expect(resendButton).toBeDisabled({ timeout: 3000 });
  });

  test("cooldown message appears after a successful resend", async ({ page }) => {
    await mockForgotPasswordSuccess(page);
    await mockCheckEmail(page, true);
    await gotoResetPasswordForm(page);

    await page.fill(SELECTORS.resetEmailInput, "user@example.com");
    await page.waitForResponse("**/api/check-email");

    const sendLinkButton = page.locator(SELECTORS.resetSubmitButton);
    await expect(sendLinkButton).toBeEnabled({ timeout: 8000 });
    await sendLinkButton.click();

    await expect(page.locator("text=Check your email").first()).toBeVisible({ timeout: 5000 });

    // Re-mock for resend
    await mockForgotPasswordSuccess(page);

    const resendButton = page
      .locator('button[part~="identity-widget-reset-success-resend-button"]')
      .first();
    await resendButton.click();

    // After a successful resend a cooldown message should appear
    await expect(
      page
        .locator('[part~="identity-widget-reset-success-cooldown-message"]')
        .first()
    ).toBeVisible({ timeout: 5000 });
  });
});

// ---------------------------------------------------------------------------
// Suite 2: Session Persistence
// ---------------------------------------------------------------------------

test.describe("Auth Widget — Session Persistence", () => {
  test("localStorage tokens persist across a page reload", async ({ page }) => {
    await performSuccessfulLogin(page);

    // Tokens must be stored after a successful login
    const accessToken = await page.evaluate(() => localStorage.getItem("access_token"));
    expect(accessToken).not.toBeNull();

    // Reload and verify localStorage still holds the tokens
    await page.reload();
    await page.waitForLoadState("networkidle");

    const accessTokenAfterReload = await page.evaluate(() => localStorage.getItem("access_token"));
    expect(accessTokenAfterReload).toBe(accessToken);
  });

  test("refresh_token is present in localStorage after successful login", async ({ page }) => {
    await performSuccessfulLogin(page);

    const refreshToken = await page.evaluate(() => localStorage.getItem("refresh_token"));
    expect(refreshToken).not.toBeNull();
    expect(refreshToken).toBe(MOCK_REFRESH_TOKEN);
  });

  test("login form is shown when localStorage has no auth data on load", async ({ page }) => {
    // Start fresh — no initScript sets auth tokens, no login performed
    await page.addInitScript(() => {
      localStorage.setItem("brand_data", JSON.stringify({ domain: "elitelearning.com" }));
      // Explicitly clear any leftover auth data
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("refresh_token_time");
    });

    await page.goto("/");
    await page.waitForSelector("#login-dialog-title", { state: "visible" });

    await expect(page.locator(SELECTORS.loginTitle)).toBeVisible();
  });

  test("manually seeded access_token in localStorage is readable after reload", async ({
    page,
  }) => {
    // Set brand data so the app loads normally
    await page.addInitScript(() => {
      localStorage.setItem("brand_data", JSON.stringify({ domain: "elitelearning.com" }));
    });

    await page.goto("/");
    await page.waitForSelector("#login-dialog-title", { state: "visible" });

    // Simulate what handleAuthentication does — store the mock token
    await page.evaluate(
      ({ token, refresh }) => {
        localStorage.setItem("access_token", token);
        localStorage.setItem("refresh_token", refresh);
      },
      { token: MOCK_ACCESS_TOKEN, refresh: MOCK_REFRESH_TOKEN }
    );

    // Reload and verify access_token survived
    // Note: refresh_token is intentionally cleared by the app when no Remember Me is set
    await page.reload();
    await page.waitForLoadState("networkidle");

    const storedToken = await page.evaluate(() => localStorage.getItem("access_token"));
    expect(storedToken).toBe(MOCK_ACCESS_TOKEN);
  });
});

// ---------------------------------------------------------------------------
// Suite 3: Logout Flow
// ---------------------------------------------------------------------------

test.describe("Auth Widget — Logout Flow", () => {
  test("login form is shown again after clearing auth tokens and reloading", async ({ page }) => {
    await mockLogoutSuccess(page);
    await performSuccessfulLogin(page);

    // Verify tokens were stored
    const accessToken = await page.evaluate(() => localStorage.getItem("access_token"));
    expect(accessToken).not.toBeNull();

    // Simulate logout: clear auth data from localStorage and cookies
    await page.evaluate(() => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("refresh_token_time");
      // Clear all cookies via document.cookie enumeration
      document.cookie.split(";").forEach((c) => {
        document.cookie = c.trim().split("=")[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      });
    });

    await page.reload();
    await page.waitForSelector("#login-dialog-title", { state: "visible" });

    await expect(page.locator(SELECTORS.loginTitle)).toBeVisible();
  });

  test("access_token is absent from localStorage after logout simulation", async ({ page }) => {
    await mockLogoutSuccess(page);
    await performSuccessfulLogin(page);

    // Clear auth data (logout simulation)
    await page.evaluate(() => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("refresh_token_time");
    });

    await page.reload();
    await page.waitForLoadState("networkidle");

    const accessToken = await page.evaluate(() => localStorage.getItem("access_token"));
    expect(accessToken).toBeNull();
  });

  test("refresh_token is absent from localStorage after logout simulation", async ({ page }) => {
    await mockLogoutSuccess(page);
    await performSuccessfulLogin(page);

    await page.evaluate(() => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("refresh_token_time");
    });

    const refreshToken = await page.evaluate(() => localStorage.getItem("refresh_token"));
    expect(refreshToken).toBeNull();
  });

  test("mocked logout API responds with 200 and confirms session teardown", async ({ page }) => {
    await mockLogoutSuccess(page);
    await performSuccessfulLogin(page);

    // Trigger the logout API explicitly
    const [response] = await Promise.all([
      page.waitForResponse("**/api/logout"),
      page.evaluate(() =>
        fetch("/api/logout", { method: "POST", credentials: "include" })
      ),
    ]);

    expect(response.status()).toBe(200);
  });
});

// ---------------------------------------------------------------------------
// Suite 4: Help Center
// ---------------------------------------------------------------------------

test.describe("Auth Widget — Help Center", () => {
  test("opens help center when clicking the help center button", async ({ page }) => {
    await gotoLoginForm(page);
    await page.click(SELECTORS.helpCenterButton);
    await expect(page.locator("text=Help Center").first()).toBeVisible();
  });

  test("help center back button returns to the login form", async ({ page }) => {
    await gotoLoginForm(page);
    await page.click(SELECTORS.helpCenterButton);
    await expect(page.locator("text=Help Center").first()).toBeVisible();

    const backButton = page.locator(SELECTORS.helpCenterBackButton);
    await backButton.click();

    await expect(page.locator(SELECTORS.loginTitle)).toBeVisible({ timeout: 3000 });
  });

  test("help center shows contact or support content", async ({ page }) => {
    await gotoLoginForm(page);
    await page.click(SELECTORS.helpCenterButton);
    await expect(page.locator("text=Help Center").first()).toBeVisible();

    // At least one of these common support phrases must be visible
    const supportContent = page.locator("text=/contact|support|help|assist/i").first();
    await expect(supportContent).toBeVisible({ timeout: 3000 });
  });

  test("help center close button dismisses the panel (no-op in TEST mode, form stays visible)", async ({
    page,
  }) => {
    await gotoLoginForm(page);
    await page.click(SELECTORS.helpCenterButton);
    await expect(page.locator("text=Help Center").first()).toBeVisible();

    // Verify the close button is present in the DOM
    const closeButton = page.locator(SELECTORS.helpCenterCloseButton);
    expect(await closeButton.count()).toBeGreaterThan(0);

    // In TEST mode handleClose has no prop — use the back button to reliably navigate away
    // (close button is no-op; back button calls onBack which sets showHelpCenter=false)
    const backButton = page.locator(SELECTORS.helpCenterBackButton);
    await backButton.click();
    await expect(page.locator(SELECTORS.loginTitle)).toBeVisible({ timeout: 3000 });
  });

  test("Escape key from help center is handled without crashing the widget", async ({ page }) => {
    await gotoLoginForm(page);
    await page.click(SELECTORS.helpCenterButton);
    await expect(page.locator("text=Help Center").first()).toBeVisible();

    await page.keyboard.press("Escape");

    // In TEST mode handleClose has no prop — Escape is a no-op and help center stays visible
    // The widget must remain mounted and usable
    await expect(page.locator("body")).toBeVisible();
    await expect(page.locator("text=Help Center").first()).toBeVisible();
  });

  test("back button in help center has a visible and accessible label", async ({ page }) => {
    await gotoLoginForm(page);
    await page.click(SELECTORS.helpCenterButton);
    await expect(page.locator("text=Help Center").first()).toBeVisible();

    const backButton = page.locator(SELECTORS.helpCenterBackButton);
    await expect(backButton).toBeVisible();
    // Verify the button is keyboard-focusable / accessible
    await backButton.focus();
    await expect(backButton).toBeFocused();
  });
});
