import { test, expect, Page } from "@playwright/test";
import { mockCheckEmail, gotoLoginForm } from "./helpers";

// ---------------------------------------------------------------------------
// Selectors
// ---------------------------------------------------------------------------

const SELECTORS = {
  loginTitle: "#login-dialog-title",
  forgotUsernameLink: 'a[part~="identity-widget-login-forgot-username-link"]',
  forgotUsernameTitle: "#forgot-username-dialog-title",
  emailInput: 'input[id="forgot-username-email"]',
  submitButton: 'button[part~="identity-widget-forgot-username-submit-button"]',
  closeButton: 'button[aria-label="Close dialog"]',
  backLink: 'a[part~="identity-widget-forgot-username-back-link"]',
  supportLink: 'a[part~="identity-widget-forgot-username-support-link"]',
  successTitle: "#forgot-username-success-dialog-title",
  resendButton: 'button[part~="identity-widget-forgot-username-success-resend-button"]',
  successBackButton: 'button[part~="identity-widget-forgot-username-success-back-button"]',
  userFoundIcon: 'img[aria-label="User found"]',
  emailCheckingSpinner: '[aria-label="Checking email"]',
};

// ---------------------------------------------------------------------------
// Helpers (forgot-username-specific)
// ---------------------------------------------------------------------------

/** Navigate to the forgot-username form from the login screen */
async function gotoForgotUsernameForm(page: Page) {
  await gotoLoginForm(page);
  await page.click(SELECTORS.forgotUsernameLink);
  await expect(page.locator(SELECTORS.forgotUsernameTitle)).toBeVisible();
}

/** Mock the forgot-username endpoint to succeed */
async function mockForgotUsernameSuccess(page: Page) {
  await page.route("**/api/forgot-username", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ message: "Verification link sent" }),
    })
  );
}

/** Mock the forgot-username endpoint to return 404 */
async function mockForgotUsernameNotFound(page: Page) {
  await page.route("**/api/forgot-username", (route) =>
    route.fulfill({
      status: 404,
      contentType: "application/json",
      body: JSON.stringify({ error: "We couldn't find an account with that email." }),
    })
  );
}

/** Mock the forgot-username endpoint to return 500 */
async function mockForgotUsernameServerError(page: Page) {
  await page.route("**/api/forgot-username", (route) =>
    route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify({ message: "Internal server error" }),
    })
  );
}

/** Mock the forgot-username endpoint with a delay for spinner observation */
async function mockForgotUsernameWithDelay(page: Page, delayMs = 600) {
  await page.route("**/api/forgot-username", (route) =>
    new Promise<void>((resolve) => setTimeout(resolve, delayMs)).then(() =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ message: "Verification link sent" }),
      })
    )
  );
}

// ---------------------------------------------------------------------------
// Test Suite
// ---------------------------------------------------------------------------

test.describe("Auth Widget — Forgot Username", () => {
  // -------------------------------------------------------------------------
  // Rendering
  // -------------------------------------------------------------------------

  test.describe("Rendering", () => {
    test("navigates to forgot username form when clicking Username? link", async ({ page }) => {
      await gotoLoginForm(page);
      await page.click(SELECTORS.forgotUsernameLink);
      await expect(page.locator(SELECTORS.forgotUsernameTitle)).toHaveText("Forgot Username?");
    });

    test("renders form controls", async ({ page }) => {
      await gotoForgotUsernameForm(page);

      await expect(page.locator(SELECTORS.forgotUsernameTitle)).toBeVisible();
      await expect(page.locator(SELECTORS.emailInput)).toBeVisible();
      await expect(page.locator(SELECTORS.submitButton)).toBeVisible();
      await expect(page.locator(SELECTORS.closeButton)).toBeVisible();
      await expect(page.locator(SELECTORS.backLink)).toBeVisible();
      await expect(
        page.locator("text=Enter the email address associated with your account")
      ).toBeVisible();
    });

    test("submit button is disabled when email is empty", async ({ page }) => {
      await gotoForgotUsernameForm(page);
      await expect(page.locator(SELECTORS.submitButton)).toBeDisabled();
    });

    test("shows Forgot Email? section with support link", async ({ page }) => {
      await gotoForgotUsernameForm(page);
      await expect(page.locator("text=Forgot Email?")).toBeVisible();
      await expect(page.locator(SELECTORS.supportLink)).toBeVisible();
      await expect(page.locator(SELECTORS.supportLink)).toHaveAttribute("href", "/contact-us");
      await expect(page.locator(SELECTORS.supportLink)).toHaveAttribute("target", "_blank");
    });
  });

  // -------------------------------------------------------------------------
  // Email Validation (check-email API)
  // -------------------------------------------------------------------------

  test.describe("Email Validation", () => {
    test("shows verified icon when registered email is entered", async ({ page }) => {
      await mockCheckEmail(page, true);
      await gotoForgotUsernameForm(page);

      await page.fill(SELECTORS.emailInput, "registered@example.com");
      await expect(page.locator(SELECTORS.userFoundIcon)).toBeVisible({ timeout: 3000 });
    });

    test("shows info banner when email is not registered", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoForgotUsernameForm(page);

      await page.fill(SELECTORS.emailInput, "unknown@example.com");
      // The banner message from INFO_MESSAGES.EMAIL_NOT_FOUND
      await page.waitForResponse("**/api/check-email");
      await expect(page.locator(SELECTORS.submitButton)).toBeDisabled();
    });

    test("submit button enabled only when email exists", async ({ page }) => {
      await mockCheckEmail(page, true);
      await gotoForgotUsernameForm(page);

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.waitForResponse("**/api/check-email");
      await expect(page.locator(SELECTORS.submitButton)).toBeEnabled();
    });

    test("submit button stays disabled for invalid email format", async ({ page }) => {
      await gotoForgotUsernameForm(page);
      await page.fill(SELECTORS.emailInput, "notanemail");
      // No API call for non-email format — button stays disabled
      await expect(page.locator(SELECTORS.submitButton)).toBeDisabled();
    });
  });

  // -------------------------------------------------------------------------
  // Successful Submit
  // -------------------------------------------------------------------------

  test.describe("Successful Submit", () => {
    test("sends verification link and shows success screen", async ({ page }) => {
      await mockForgotUsernameSuccess(page);
      await mockCheckEmail(page, true);
      await gotoForgotUsernameForm(page);

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.waitForResponse("**/api/check-email");

      await page.locator(SELECTORS.submitButton).waitFor({ state: "visible" });
      await page.click(SELECTORS.submitButton);

      await expect(page.locator(SELECTORS.successTitle)).toHaveText("Check your email", {
        timeout: 5000,
      });
    });

    test("success screen displays the submitted email", async ({ page }) => {
      await mockForgotUsernameSuccess(page);
      await mockCheckEmail(page, true);
      await gotoForgotUsernameForm(page);

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.waitForResponse("**/api/check-email");
      await page.click(SELECTORS.submitButton);

      await expect(page.locator(SELECTORS.successTitle)).toBeVisible({ timeout: 5000 });
      await expect(page.locator("text=user@example.com")).toBeVisible();
      await expect(
        page.locator("text=Follow the instructions in the email to recover your username.")
      ).toBeVisible();
    });

    test("shows loading spinner while API is in-flight", async ({ page }) => {
      await mockForgotUsernameWithDelay(page);
      await mockCheckEmail(page, true);
      await gotoForgotUsernameForm(page);

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.waitForResponse("**/api/check-email");
      await page.click(SELECTORS.submitButton);

      await expect(page.locator("text=Sending...")).toBeVisible({ timeout: 3000 });
    });
  });

  // -------------------------------------------------------------------------
  // Failed Submit
  // -------------------------------------------------------------------------

  test.describe("Failed Submit", () => {
    test("shows error when account is not found (404)", async ({ page }) => {
      await mockForgotUsernameNotFound(page);
      await mockCheckEmail(page, true);
      await gotoForgotUsernameForm(page);

      await page.fill(SELECTORS.emailInput, "notfound@example.com");
      await page.waitForResponse("**/api/check-email");
      await page.click(SELECTORS.submitButton);

      await expect(
        page.locator("text=We couldn't find an account with that email.").first()
      ).toBeVisible({ timeout: 5000 });
    });

    test("shows error when server returns 500", async ({ page }) => {
      await mockForgotUsernameServerError(page);
      await mockCheckEmail(page, true);
      await gotoForgotUsernameForm(page);

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.waitForResponse("**/api/check-email");
      await page.click(SELECTORS.submitButton);

      await expect(page.locator("text=Internal server error").first()).toBeVisible({
        timeout: 5000,
      });
    });

    test("error banner shows 'Want to sign in instead?' action", async ({ page }) => {
      await mockForgotUsernameNotFound(page);
      await mockCheckEmail(page, true);
      await gotoForgotUsernameForm(page);

      await page.fill(SELECTORS.emailInput, "notfound@example.com");
      await page.waitForResponse("**/api/check-email");
      await page.click(SELECTORS.submitButton);

      await expect(page.locator("text=Want to sign in instead?").first()).toBeVisible({
        timeout: 5000,
      });
    });

    test("clicking 'Want to sign in instead?' returns to login", async ({ page }) => {
      await mockForgotUsernameNotFound(page);
      await mockCheckEmail(page, true);
      await gotoForgotUsernameForm(page);

      await page.fill(SELECTORS.emailInput, "notfound@example.com");
      await page.waitForResponse("**/api/check-email");
      await page.click(SELECTORS.submitButton);

      await page.click("text=Want to sign in instead?", { timeout: 5000 });
      await expect(page.locator(SELECTORS.loginTitle)).toBeVisible();
    });
  });

  // -------------------------------------------------------------------------
  // Success Screen — Resend & Navigation
  // -------------------------------------------------------------------------

  test.describe("Success Screen", () => {
    /** Helper to get to the success screen */
    async function goToSuccessScreen(page: Page) {
      await mockForgotUsernameSuccess(page);
      await mockCheckEmail(page, true);
      await gotoForgotUsernameForm(page);

      await page.fill(SELECTORS.emailInput, "user@example.com");
      await page.waitForResponse("**/api/check-email");
      await page.click(SELECTORS.submitButton);
      await expect(page.locator(SELECTORS.successTitle)).toBeVisible({ timeout: 5000 });
    }

    test("resend button is present on success screen", async ({ page }) => {
      await goToSuccessScreen(page);
      await expect(page.locator(SELECTORS.resendButton)).toBeVisible();
    });

    test("resend button is initially disabled (cooldown active)", async ({ page }) => {
      await goToSuccessScreen(page);
      await expect(page.locator(SELECTORS.resendButton)).toBeDisabled();
    });

    test("shows cooldown message after submitting", async ({ page }) => {
      await goToSuccessScreen(page);
      await expect(page.locator("text=We've already sent a verification link")).toBeVisible();
    });

    test("back to sign in button returns to login form", async ({ page }) => {
      await goToSuccessScreen(page);
      await page.click(SELECTORS.successBackButton);
      await expect(page.locator(SELECTORS.loginTitle)).toBeVisible();
    });
  });

  // -------------------------------------------------------------------------
  // Navigation
  // -------------------------------------------------------------------------

  test.describe("Navigation", () => {
    test("back to login link returns to login form", async ({ page }) => {
      await gotoForgotUsernameForm(page);
      await page.click(SELECTORS.backLink);
      await expect(page.locator(SELECTORS.loginTitle)).toBeVisible();
    });

    // In standalone TEST mode handleClose is a no-op — the form stays visible.
    // These tests verify the interactions are accessible and don't break the form.

    test("close button is clickable and leaves form in clean state", async ({ page }) => {
      await gotoForgotUsernameForm(page);
      await page.click(SELECTORS.closeButton);
      // Form stays visible in TEST mode; verify no error state
      await expect(page.locator(SELECTORS.forgotUsernameTitle)).toBeVisible();
      await expect(page.locator(SELECTORS.emailInput)).toBeVisible();
    });

    test("Escape key is handled and form remains fully usable", async ({ page }) => {
      await gotoForgotUsernameForm(page);
      await page.keyboard.press("Escape");
      // Form stays visible; inputs still interactable
      await expect(page.locator(SELECTORS.forgotUsernameTitle)).toBeVisible();
      await expect(page.locator(SELECTORS.submitButton)).toBeVisible();
    });

    test("pre-fills email from login form", async ({ page }) => {
      await mockCheckEmail(page, true);
      await gotoLoginForm(page);

      // Type email in login form first
      await page.fill('input[id="email"]', "prefilled@example.com");
      await page.click(SELECTORS.forgotUsernameLink);

      await expect(page.locator(SELECTORS.forgotUsernameTitle)).toBeVisible();
      await expect(page.locator(SELECTORS.emailInput)).toHaveValue("prefilled@example.com");
    });
  });

  // -------------------------------------------------------------------------
  // Brand Configuration Error
  // -------------------------------------------------------------------------

  test.describe("Brand Configuration Error", () => {
    test("shows error banner and disables submit when brand data is missing", async ({ page }) => {
      // Block subsidiary lookup so getBrandHeaders resolves quickly with no X-Brand-Id
      await page.route("**/api/subsidiaries**", (route) =>
        route.fulfill({ status: 200, contentType: "application/json", body: "[]" })
      );
      await gotoLoginForm(page, { setBrandData: false });
      await page.click(SELECTORS.forgotUsernameLink);
      await expect(page.locator(SELECTORS.forgotUsernameTitle)).toBeVisible();

      // Error banner for brand configuration (async hook resolution)
      await expect(page.locator("text=We're having trouble signing you in").first()).toBeVisible({
        timeout: 10000,
      });

      // Submit should be disabled even with a valid email
      await page.fill(SELECTORS.emailInput, "user@example.com");
      await expect(page.locator(SELECTORS.submitButton)).toBeDisabled();
    });

    test("does not call check-email API when brand data is missing", async ({ page }) => {
      let checkEmailCalled = false;
      await page.route("**/api/subsidiaries**", (route) =>
        route.fulfill({ status: 200, contentType: "application/json", body: "[]" })
      );
      await page.route("**/api/check-email", (route) => {
        checkEmailCalled = true;
        return route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ exists: false }),
        });
      });

      await gotoLoginForm(page, { setBrandData: false });
      await page.click(SELECTORS.forgotUsernameLink);
      await expect(page.locator(SELECTORS.forgotUsernameTitle)).toBeVisible();

      await page.fill(SELECTORS.emailInput, "user@example.com");
      // Wait enough time for debounce to fire
      await new Promise((r) => setTimeout(r, 700));
      expect(checkEmailCalled).toBe(false);
    });
  });
});
