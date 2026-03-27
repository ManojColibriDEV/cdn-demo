import { test, expect, Page } from "@playwright/test";
import { mockCheckEmail, gotoLoginForm } from "./helpers";

// ---------------------------------------------------------------------------
// Selectors
// ---------------------------------------------------------------------------

const LOGIN = {
  title: "#login-dialog-title",
  emailInput: 'input[id="email"]',
  createAccountButton: 'button[part~="identity-widget-login-create-account-button"]',
  forgotPasswordLink: 'a[part~="identity-widget-login-forgot-password-link"]',
  forgotUsernameLink: 'a[part~="identity-widget-login-forgot-username-link"]',
};

const RESET_PASSWORD = {
  title: "#reset-password-dialog-title",
  emailInput: 'input[id="reset-email"]',
  backButton: 'a[part~="identity-widget-reset-password-back-link"]',
  submitButton: 'button[part~="identity-widget-reset-password-submit-button"]',
};

const FORGOT_USERNAME = {
  title: "#forgot-username-dialog-title",
  emailInput: 'input[id="forgot-username-email"]',
  backLink: 'a[part~="identity-widget-forgot-username-back-link"]',
};

const CREATE_ACCOUNT = {
  title: "#create-account-dialog-title",
  emailInput: 'input[id="email"]',
  signInButton: 'button[part~="identity-widget-create-account-signin-button"]',
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Navigate to the reset password form */
async function gotoResetPasswordForm(page: Page) {
  await gotoLoginForm(page);
  await page.click(LOGIN.forgotPasswordLink);
  await expect(page.locator("text=Reset your password").first()).toBeVisible();
}

/** Navigate to the forgot username form */
async function gotoForgotUsernameForm(page: Page) {
  await gotoLoginForm(page);
  await page.click(LOGIN.forgotUsernameLink);
  await expect(page.locator(FORGOT_USERNAME.title)).toBeVisible();
}

// ---------------------------------------------------------------------------
// Suite 1: Login ↔ Reset Password Navigation
// ---------------------------------------------------------------------------

test.describe("Cross-Form Navigation — Login ↔ Reset Password", () => {
  test("email is pre-filled in reset password form from login form", async ({ page }) => {
    await mockCheckEmail(page, true);
    await gotoLoginForm(page);

    await page.fill(LOGIN.emailInput, "carried@example.com");
    await page.click(LOGIN.forgotPasswordLink);

    await expect(page.locator("text=Reset your password").first()).toBeVisible();
    await expect(page.locator(RESET_PASSWORD.emailInput)).toHaveValue("carried@example.com");
  });

  test("navigating back from reset password returns to login form", async ({ page }) => {
    await gotoResetPasswordForm(page);
    await page.locator(RESET_PASSWORD.backButton).click();
    await expect(page.locator(LOGIN.title)).toBeVisible();
  });

  test("login form inputs are still functional after returning from reset password", async ({
    page,
  }) => {
    await mockCheckEmail(page, true);
    await gotoResetPasswordForm(page);
    await page.locator(RESET_PASSWORD.backButton).click();

    await expect(page.locator(LOGIN.title)).toBeVisible();
    await page.fill(LOGIN.emailInput, "back@example.com");
    await expect(page.locator(LOGIN.emailInput)).toHaveValue("back@example.com");
  });
});

// ---------------------------------------------------------------------------
// Suite 2: Login ↔ Forgot Username Navigation
// ---------------------------------------------------------------------------

test.describe("Cross-Form Navigation — Login ↔ Forgot Username", () => {
  test("email is pre-filled in forgot username form from login form", async ({ page }) => {
    await mockCheckEmail(page, true);
    await gotoLoginForm(page);

    await page.fill(LOGIN.emailInput, "prefilled@example.com");
    await page.click(LOGIN.forgotUsernameLink);

    await expect(page.locator(FORGOT_USERNAME.title)).toBeVisible();
    await expect(page.locator(FORGOT_USERNAME.emailInput)).toHaveValue("prefilled@example.com");
  });

  test("navigating back from forgot username returns to login form", async ({ page }) => {
    await gotoForgotUsernameForm(page);
    await page.click(FORGOT_USERNAME.backLink);
    await expect(page.locator(LOGIN.title)).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Suite 3: Login ↔ Create Account Navigation
// ---------------------------------------------------------------------------

test.describe("Cross-Form Navigation — Login ↔ Create Account", () => {
  test("navigates to create account form from login", async ({ page }) => {
    await mockCheckEmail(page, false);
    await gotoLoginForm(page);
    await page.click(LOGIN.createAccountButton);
    await expect(page.locator(CREATE_ACCOUNT.title)).toHaveText("Create your account");
  });

  test("navigates back to login from create account via sign in button", async ({ page }) => {
    await mockCheckEmail(page, false);
    await gotoLoginForm(page);
    await page.click(LOGIN.createAccountButton);
    await expect(page.locator(CREATE_ACCOUNT.title)).toBeVisible();

    await page.click(CREATE_ACCOUNT.signInButton);
    await expect(page.locator(LOGIN.title)).toBeVisible();
  });

  test("email typed in login carries over to create account form", async ({ page }) => {
    await mockCheckEmail(page, false);
    await gotoLoginForm(page);

    await page.fill(LOGIN.emailInput, "newuser@example.com");
    // Wait for check-email to resolve
    await page.waitForResponse("**/api/check-email");

    // Click the banner action to go to create account
    await page.click("text=Let's create one to continue?", { timeout: 5000 });

    await expect(page.locator(CREATE_ACCOUNT.title)).toBeVisible();
    await expect(page.locator(CREATE_ACCOUNT.emailInput)).toHaveValue("newuser@example.com");
  });

  test("login form is usable again after returning from create account", async ({ page }) => {
    await mockCheckEmail(page, false);
    await gotoLoginForm(page);
    await page.click(LOGIN.createAccountButton);
    await expect(page.locator(CREATE_ACCOUNT.title)).toBeVisible();

    await page.click(CREATE_ACCOUNT.signInButton);
    await expect(page.locator(LOGIN.title)).toBeVisible();

    // Verify login form is functional
    await page.fill(LOGIN.emailInput, "recheck@example.com");
    await expect(page.locator(LOGIN.emailInput)).toHaveValue("recheck@example.com");
  });
});

// ---------------------------------------------------------------------------
// Suite 4: Reset Password → Create Account Navigation
// ---------------------------------------------------------------------------

test.describe("Cross-Form Navigation — Reset Password → Create Account", () => {
  test("navigates from reset password to create account via email-not-found banner", async ({
    page,
  }) => {
    await mockCheckEmail(page, false);
    await gotoResetPasswordForm(page);

    await page.fill(RESET_PASSWORD.emailInput, "unknown@example.com");
    await page.waitForResponse("**/api/check-email");

    // The "Let's create one to continue?" action should be visible
    await page.click("text=Let's create one to continue?", { timeout: 5000 });

    await expect(page.locator(CREATE_ACCOUNT.title)).toHaveText("Create your account");
  });
});

// ---------------------------------------------------------------------------
// Suite 5: Forgot Username → Create Account Navigation
// ---------------------------------------------------------------------------

test.describe("Cross-Form Navigation — Forgot Username → Create Account", () => {
  test("navigates from forgot username to create account via email-not-found banner", async ({
    page,
  }) => {
    await mockCheckEmail(page, false);
    await gotoForgotUsernameForm(page);

    await page.fill(FORGOT_USERNAME.emailInput, "unknown@example.com");
    await page.waitForResponse("**/api/check-email");

    // The "Let's create one to continue?" action should be visible
    await page.click("text=Let's create one to continue?", { timeout: 5000 });

    await expect(page.locator(CREATE_ACCOUNT.title)).toHaveText("Create your account");
  });
});

// ---------------------------------------------------------------------------
// Suite 6: Multi-step Navigation Sequences
// ---------------------------------------------------------------------------

test.describe("Cross-Form Navigation — Multi-step Sequences", () => {
  test("Login → Reset Password → Back → Forgot Username → Back", async ({ page }) => {
    await gotoLoginForm(page);

    // Go to reset password
    await page.click(LOGIN.forgotPasswordLink);
    await expect(page.locator("text=Reset your password").first()).toBeVisible();

    // Back to login
    await page.locator(RESET_PASSWORD.backButton).click();
    await expect(page.locator(LOGIN.title)).toBeVisible();

    // Go to forgot username
    await page.click(LOGIN.forgotUsernameLink);
    await expect(page.locator(FORGOT_USERNAME.title)).toBeVisible();

    // Back to login
    await page.click(FORGOT_USERNAME.backLink);
    await expect(page.locator(LOGIN.title)).toBeVisible();
  });

  test("Login → Create Account → Sign In → Reset Password → Back", async ({ page }) => {
    await mockCheckEmail(page, false);
    await gotoLoginForm(page);

    // Go to create account
    await page.click(LOGIN.createAccountButton);
    await expect(page.locator(CREATE_ACCOUNT.title)).toBeVisible();

    // Back to login
    await page.click(CREATE_ACCOUNT.signInButton);
    await expect(page.locator(LOGIN.title)).toBeVisible();

    // Go to reset password
    await page.click(LOGIN.forgotPasswordLink);
    await expect(page.locator("text=Reset your password").first()).toBeVisible();

    // Back to login
    await page.locator(RESET_PASSWORD.backButton).click();
    await expect(page.locator(LOGIN.title)).toBeVisible();
  });

  test("rapid form switching does not break the UI", async ({ page }) => {
    await mockCheckEmail(page, false);
    await gotoLoginForm(page);

    // Rapid navigation: Login → Create Account → Sign In → Forgot Username → Back
    await page.click(LOGIN.createAccountButton);
    await expect(page.locator(CREATE_ACCOUNT.title)).toBeVisible();

    await page.click(CREATE_ACCOUNT.signInButton);
    await expect(page.locator(LOGIN.title)).toBeVisible();

    await page.click(LOGIN.forgotUsernameLink);
    await expect(page.locator(FORGOT_USERNAME.title)).toBeVisible();

    await page.click(FORGOT_USERNAME.backLink);
    await expect(page.locator(LOGIN.title)).toBeVisible();

    // Verify everything still works
    await page.fill(LOGIN.emailInput, "rapid@example.com");
    await expect(page.locator(LOGIN.emailInput)).toHaveValue("rapid@example.com");
  });
});
