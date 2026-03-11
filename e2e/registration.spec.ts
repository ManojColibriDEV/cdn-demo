import { test, expect, Page } from "@playwright/test";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

// A properly-structured mock JWT for E2E tests.
// jwtDecode() only base64-decodes the payload — no signature validation needed.
const MOCK_ACCESS_TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0ZXN0LWtleSJ9" +
  ".eyJleHAiOjE3MDk4NTM2MDAsImlhdCI6MTcwOTg1MDAwMCwianRpIjoiMTIzNDUtNjc4OTAtYWJjZGUtZWZnaGkiLCJpc3MiOiJodHRwczovL2Rldi1rZXljbG9hay5jb2xpYnJpbGVhcm5pbmcuY29tL3JlYWxtcy9jb2xpYnJpIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6InRlc3QtdXNlci1pZCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImNvbGlicmktY2xpZW50IiwiYWNyIjoiMSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiSm9obiBEb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImdpdmVuX25hbWUiOiJKb2huIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIn0" +
  ".signature";

const MOCK_REFRESH_TOKEN = "mock-refresh-token-value";

// A valid password that satisfies all requirements:
//   • 9–15 characters long
//   • has uppercase, lowercase, number, and a valid special character
//   • not equal to email or username
const VALID_PASSWORD = "TestPass@1";

// ---------------------------------------------------------------------------
// Selectors
// ---------------------------------------------------------------------------

const REG_SELECTORS = {
  emailInput: 'input[id="email"]',
  firstNameInput: 'input[id="firstName"]',
  lastNameInput: 'input[id="lastName"]',
  passwordInput: 'input[id="password"]',
  submitButton: 'button[part~="identity-widget-create-account-submit-button"]',
  signInButton: 'button[part~="identity-widget-create-account-signin-button"]',
  closeButton: 'button[part~="identity-widget-create-account-close-button"]',
  rememberMeCheckbox: 'input[aria-label="Remember me"]',
  showPasswordButton: 'button[aria-label="Show password"]',
  hidePasswordButton: 'button[aria-label="Hide password"]',
  capsLockWarning: '[role="status"]',
  formTitle: "#create-account-dialog-title",
  emailAvailableIcon: 'img[aria-label="Email is available"]',
  existingEmailBanner: "text=We found an existing account.",
  existingEmailBannerAction: "text=Want to sign in instead?",
  strengthLabel: '[part~="identity-widget-create-account-strength-label"]',
  strengthFill: '[part~="identity-widget-create-account-strength-fill"]',
  requirementsList: '[part~="identity-widget-create-account-requirements-list"]',
  loginTitle: "#login-dialog-title",
};

const LOGIN_CREATE_ACCOUNT_BUTTON = 'button[part~="identity-widget-login-create-account-button"]';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Navigate to the login form first */
async function gotoLoginForm(page: Page) {
  await page.goto("/");
  await page.waitForSelector(REG_SELECTORS.loginTitle, { state: "visible" });
}

/** Navigate to the create-account form via the login page */
async function gotoCreateAccountForm(page: Page) {
  await gotoLoginForm(page);
  await page.click(LOGIN_CREATE_ACCOUNT_BUTTON);
  await page.waitForSelector(REG_SELECTORS.formTitle, { state: "visible" });
}

/** Mock the POST /api/check-email endpoint */
async function mockCheckEmail(page: Page, exists: boolean) {
  await page.route("**/api/check-email", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ exists }),
    })
  );
}

/** Mock check-email to return a server error */
async function mockCheckEmailError(page: Page, status = 500) {
  await page.route("**/api/check-email", (route) =>
    route.fulfill({
      status,
      contentType: "application/json",
      body: JSON.stringify({ error: "Email verification service encountered an error" }),
    })
  );
}

/** Mock POST /api/register to succeed */
async function mockRegisterSuccess(page: Page) {
  await page.route("**/api/register", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ message: "User registered successfully" }),
    })
  );
}

/** Mock POST /api/register to fail with a simple error string */
async function mockRegisterFailure(page: Page, message = "Registration failed") {
  await page.route("**/api/register", (route) =>
    route.fulfill({
      status: 400,
      contentType: "application/json",
      body: JSON.stringify({ error: message }),
    })
  );
}

/** Mock POST /api/register to fail with the nested details.errorMessage structure */
async function mockRegisterFailureStructured(page: Page, errorMessage: string) {
  await page.route("**/api/register", (route) =>
    route.fulfill({
      status: 400,
      contentType: "application/json",
      body: JSON.stringify({
        error: "Bad Request",
        details: { errorMessage },
      }),
    })
  );
}

/** Mock POST /api/register to fail with a 500 that has no error/message body fields.
 * The service checks response body fields BEFORE the status code, so an empty body
 * is required to trigger the REGISTRATION_FAILED_RETRY message branch. */
async function mockRegisterServerError(page: Page) {
  await page.route("**/api/register", (route) =>
    route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify({}),
    })
  );
}

/** Mock POST /api/auth to succeed (used for auto-login after registration) */
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

/** Fill all required registration fields with valid values */
async function fillRegistrationForm(
  page: Page,
  options: {
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
  } = {}
) {
  const {
    email = "newuser@example.com",
    firstName = "Jane",
    lastName = "Smith",
    password = VALID_PASSWORD,
  } = options;

  await page.fill(REG_SELECTORS.emailInput, email);
  await page.fill(REG_SELECTORS.firstNameInput, firstName);
  await page.fill(REG_SELECTORS.lastNameInput, lastName);
  await page.fill(REG_SELECTORS.passwordInput, password);
}

// ---------------------------------------------------------------------------
// Test Suite
// ---------------------------------------------------------------------------

test.describe("Auth Widget — Registration Form", () => {
  // -------------------------------------------------------------------------
  // Rendering
  // -------------------------------------------------------------------------

  test.describe("Rendering", () => {
    test("renders create account form controls", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await expect(page.locator(REG_SELECTORS.formTitle)).toHaveText("Create your account");
      await expect(page.locator("text=Create an account to continue to checkout")).toBeVisible();
      await expect(page.locator(REG_SELECTORS.emailInput)).toBeVisible();
      await expect(page.locator(REG_SELECTORS.firstNameInput)).toBeVisible();
      await expect(page.locator(REG_SELECTORS.lastNameInput)).toBeVisible();
      await expect(page.locator(REG_SELECTORS.passwordInput)).toBeVisible();
      await expect(page.locator(REG_SELECTORS.rememberMeCheckbox)).toBeVisible();
      await expect(page.locator(REG_SELECTORS.submitButton)).toBeVisible();
      await expect(page.locator(REG_SELECTORS.signInButton)).toBeVisible();
      await expect(page.locator(REG_SELECTORS.closeButton)).toBeVisible();
    });

    test("password input is masked by default", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);
      await expect(page.locator(REG_SELECTORS.passwordInput)).toHaveAttribute("type", "password");
    });

    test("remember me checkbox is unchecked by default", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);
      await expect(page.locator(REG_SELECTORS.rememberMeCheckbox)).not.toBeChecked();
    });

    test("submit button is disabled when email is empty", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);
      await expect(page.locator(REG_SELECTORS.submitButton)).toBeDisabled();
    });

    test("submit button is disabled when email is invalid", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);
      await page.fill(REG_SELECTORS.emailInput, "not-an-email");
      await expect(page.locator(REG_SELECTORS.submitButton)).toBeDisabled();
    });

    test("submit button becomes enabled when a valid new email is entered", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);
      await page.fill(REG_SELECTORS.emailInput, "newuser@example.com");
      // Wait for check-email debounce + response
      await page.waitForTimeout(700);
      await expect(page.locator(REG_SELECTORS.submitButton)).toBeEnabled();
    });

    test("has correct ARIA attributes on the dialog", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);
      const dialog = page.locator('[role="dialog"][aria-labelledby="create-account-dialog-title"]');
      await expect(dialog).toBeVisible();
      await expect(dialog).toHaveAttribute("aria-modal", "true");
    });
  });

  // -------------------------------------------------------------------------
  // Password Visibility Toggle
  // -------------------------------------------------------------------------

  test.describe("Password Visibility Toggle", () => {
    test("reveals password when clicking show-password button", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.passwordInput, VALID_PASSWORD);
      await page.click(REG_SELECTORS.showPasswordButton);

      await expect(page.locator(REG_SELECTORS.passwordInput)).toHaveAttribute("type", "text");
      await expect(page.locator(REG_SELECTORS.hidePasswordButton)).toBeVisible();
    });

    test("hides password when clicking hide-password button", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.passwordInput, VALID_PASSWORD);
      await page.click(REG_SELECTORS.showPasswordButton);
      await page.click(REG_SELECTORS.hidePasswordButton);

      await expect(page.locator(REG_SELECTORS.passwordInput)).toHaveAttribute("type", "password");
      await expect(page.locator(REG_SELECTORS.showPasswordButton)).toBeVisible();
    });
  });

  // -------------------------------------------------------------------------
  // Caps Lock Warning
  // -------------------------------------------------------------------------

  test.describe("Caps Lock Warning", () => {
    test("shows caps lock warning on CapsLock keydown in password field", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.click(REG_SELECTORS.passwordInput);
      await page.keyboard.press("CapsLock");

      await expect(page.locator(REG_SELECTORS.capsLockWarning)).toContainText(/caps lock is on/i);
    });

    test("hides caps lock warning on second CapsLock keydown", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.click(REG_SELECTORS.passwordInput);
      await page.keyboard.press("CapsLock");
      await expect(page.locator(REG_SELECTORS.capsLockWarning)).toBeVisible();

      await page.keyboard.press("CapsLock");
      await expect(page.locator(REG_SELECTORS.capsLockWarning)).not.toBeVisible();
    });
  });

  // -------------------------------------------------------------------------
  // Email Validation (check-email API)
  // -------------------------------------------------------------------------

  test.describe("Email Validation", () => {
    test("shows available icon after entering a new email address", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.emailInput, "newuser@example.com");
      await expect(page.locator(REG_SELECTORS.emailAvailableIcon)).toBeVisible({ timeout: 3000 });
    });

    test("shows existing account banner when email is already registered", async ({ page }) => {
      await mockCheckEmail(page, true);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.emailInput, "existing@example.com");
      await expect(page.locator(REG_SELECTORS.existingEmailBanner)).toBeVisible({ timeout: 3000 });
      await expect(page.locator(REG_SELECTORS.existingEmailBannerAction)).toBeVisible();
    });

    test("disables submit button when email already exists", async ({ page }) => {
      await mockCheckEmail(page, true);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.emailInput, "existing@example.com");
      await page.waitForTimeout(700);

      await expect(page.locator(REG_SELECTORS.submitButton)).toBeDisabled();
    });

    test("dismisses existing email banner when clicking close on the banner", async ({ page }) => {
      await mockCheckEmail(page, true);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.emailInput, "existing@example.com");
      await page.waitForTimeout(700);
      await expect(page.locator(REG_SELECTORS.existingEmailBanner)).toBeVisible();

      // Click the banner close button (×); the Banner component renders it with part="identity-widget-banner-close"
      const bannerCloseBtn = page.locator('button[part~="identity-widget-banner-close"]');
      await bannerCloseBtn.click();

      await expect(page.locator(REG_SELECTORS.existingEmailBanner)).not.toBeVisible();
    });

    test("shows error banner when check-email API call fails", async ({ page }) => {
      await mockCheckEmailError(page, 500);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.emailInput, "user@example.com");
      // Wait for debounce + error response
      await expect(
        page.locator("text=Email verification service encountered an error").first()
      ).toBeVisible({ timeout: 3000 });
    });

    test("does not trigger email check for invalid email format", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      // Type something that isn't a valid email — no API call should show results
      await page.fill(REG_SELECTORS.emailInput, "notanemail");
      await page.waitForTimeout(700);

      await expect(page.locator(REG_SELECTORS.emailAvailableIcon)).not.toBeVisible();
      await expect(page.locator(REG_SELECTORS.existingEmailBanner)).not.toBeVisible();
    });

    test("navigates to sign in form when clicking 'Want to sign in instead?'", async ({ page }) => {
      await mockCheckEmail(page, true);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.emailInput, "existing@example.com");
      await page.click(REG_SELECTORS.existingEmailBannerAction, { timeout: 3000 });

      // Should navigate back to login and pre-fill the email
      await expect(page.locator(REG_SELECTORS.loginTitle)).toBeVisible({ timeout: 3000 });
      await expect(page.locator('input[id="email"]')).toHaveValue("existing@example.com");
    });
  });

  // -------------------------------------------------------------------------
  // Password Strength Indicator
  // -------------------------------------------------------------------------

  test.describe("Password Strength Indicator", () => {
    test("does not show strength indicator before password is entered", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await expect(page.locator(REG_SELECTORS.strengthLabel)).not.toBeVisible();
      await expect(page.locator(REG_SELECTORS.requirementsList)).not.toBeVisible();
    });

    test("shows requirements checklist once password is typed", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.passwordInput, "a");
      await expect(page.locator(REG_SELECTORS.requirementsList)).toBeVisible();
    });

    test("shows 'Weak' for a short simple password", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      // "a(" has a forbidden character "(" → onlyAllowedChars=false → score=2 → Weak
      await page.fill(REG_SELECTORS.passwordInput, "a(");
      await expect(page.locator(REG_SELECTORS.strengthLabel)).toHaveText("Weak");
    });

    test("shows 'Good' for a partially-satisfying password", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      // Meets: length, uppercase, lowercase, number — missing special char → Good not Strong
      await page.fill(REG_SELECTORS.passwordInput, "TestPass1");
      await expect(page.locator(REG_SELECTORS.strengthLabel)).toHaveText("Good");
    });

    test("shows 'Strong' when all password requirements are met", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.passwordInput, VALID_PASSWORD);
      await expect(page.locator(REG_SELECTORS.strengthLabel)).toHaveText("Strong");
    });

    test("shows length requirement as satisfied when password is 9+ characters", async ({
      page,
    }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      // Enter a password that is at least 9 characters
      await page.fill(REG_SELECTORS.passwordInput, "abcdefghi");

      // The "be 9-15 characters" list item should have green text
      const lengthItem = page.locator(
        '[part~="identity-widget-create-account-requirements-list"] li:first-child span[part~="identity-widget-create-account-requirement-text"]'
      );
      await expect(lengthItem).toHaveClass(/text-green-600/);
    });
  });

  // -------------------------------------------------------------------------
  // Form Validation
  // -------------------------------------------------------------------------

  test.describe("Form Validation", () => {
    test("shows required field errors when submitting empty form fields", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      // Only fill in email so the button is enabled, then submit without other fields
      await page.fill(REG_SELECTORS.emailInput, "newuser@example.com");
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.submitButton);

      // First/last name required indicators should appear
      await expect(page.locator("text=Required").first()).toBeVisible();
    });

    test("shows password error when submitting without a password", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.emailInput, "newuser@example.com");
      await page.fill(REG_SELECTORS.firstNameInput, "Jane");
      await page.fill(REG_SELECTORS.lastNameInput, "Smith");
      // Leave password empty
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.submitButton);

      await expect(page.locator("text=Password is required").first()).toBeVisible({
        timeout: 3000,
      });
    });

    test("shows password error when password is too short", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.emailInput, "newuser@example.com");
      await page.fill(REG_SELECTORS.firstNameInput, "Jane");
      await page.fill(REG_SELECTORS.lastNameInput, "Smith");
      await page.fill(REG_SELECTORS.passwordInput, "Ab1!");
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.submitButton);

      await expect(page.locator("text=Password must be 9-15 characters long").first()).toBeVisible({
        timeout: 3000,
      });
    });

    test("clears password error when user starts re-typing the password", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.emailInput, "newuser@example.com");
      await page.fill(REG_SELECTORS.firstNameInput, "Jane");
      await page.fill(REG_SELECTORS.lastNameInput, "Smith");
      await page.fill(REG_SELECTORS.passwordInput, "bad");
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.submitButton);

      await expect(page.locator('[id="password-error"]')).toBeVisible({ timeout: 3000 });

      // Re-type clears the error
      await page.fill(REG_SELECTORS.passwordInput, "N");
      await expect(page.locator('[id="password-error"]')).not.toBeVisible();
    });
  });

  // -------------------------------------------------------------------------
  // Successful Registration
  // -------------------------------------------------------------------------

  test.describe("Successful Registration", () => {
    test("completes registration and auto-logs in, dismissing form", async ({ page }) => {
      await mockCheckEmail(page, false);
      await mockRegisterSuccess(page);
      await mockAuthLoginSuccess(page);
      await gotoCreateAccountForm(page);

      await fillRegistrationForm(page);
      // Wait for email debounce
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.submitButton);

      // After auto-login succeeds the widget unmounts the form
      await expect(page.locator(REG_SELECTORS.formTitle)).not.toBeVisible({ timeout: 7000 });
    });

    test("shows loading state (spinner) while registration API is in-flight", async ({ page }) => {
      await mockCheckEmail(page, false);

      // Delay register response to observe spinner
      await page.route("**/api/register", (route) =>
        new Promise<void>((resolve) => setTimeout(resolve, 600)).then(() =>
          route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({ message: "User registered successfully" }),
          })
        )
      );
      await mockAuthLoginSuccess(page);
      await gotoCreateAccountForm(page);

      await fillRegistrationForm(page);
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.submitButton);

      await expect(page.locator("text=Creating Account...")).toBeVisible({ timeout: 3000 });
    });

    test("stores remember-me flag in localStorage when remember me is checked", async ({
      page,
    }) => {
      await mockCheckEmail(page, false);
      await mockRegisterSuccess(page);
      await mockAuthLoginSuccess(page);
      await gotoCreateAccountForm(page);

      await fillRegistrationForm(page);
      await page.waitForTimeout(700);
      await page.check(REG_SELECTORS.rememberMeCheckbox);
      await page.click(REG_SELECTORS.submitButton);

      await expect(page.locator(REG_SELECTORS.formTitle)).not.toBeVisible({ timeout: 7000 });

      const rememberMeFlag = await page.evaluate(() => localStorage.getItem("refresh_token_time"));
      expect(rememberMeFlag).not.toBeNull();
    });

    test("does NOT store remember-me flag in localStorage when remember me is unchecked", async ({
      page,
    }) => {
      await mockCheckEmail(page, false);
      await mockRegisterSuccess(page);
      await mockAuthLoginSuccess(page);
      await gotoCreateAccountForm(page);

      await fillRegistrationForm(page);
      await page.waitForTimeout(700);
      // remember me stays unchecked (default)
      await page.click(REG_SELECTORS.submitButton);

      await expect(page.locator(REG_SELECTORS.formTitle)).not.toBeVisible({ timeout: 7000 });

      const rememberMeFlag = await page.evaluate(() => localStorage.getItem("refresh_token_time"));
      expect(rememberMeFlag).toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // Failed Registration
  // -------------------------------------------------------------------------

  test.describe("Failed Registration", () => {
    test("shows error toast when registration API fails with a simple error", async ({ page }) => {
      await mockCheckEmail(page, false);
      await mockRegisterFailure(page, "Email is already in use");
      await gotoCreateAccountForm(page);

      await fillRegistrationForm(page);
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.submitButton);

      await expect(page.locator("text=Email is already in use").first()).toBeVisible({
        timeout: 5000,
      });
    });

    test("shows structured error message from details.errorMessage field", async ({ page }) => {
      await mockCheckEmail(page, false);
      await mockRegisterFailureStructured(page, "Username already exists in the system");
      await gotoCreateAccountForm(page);

      await fillRegistrationForm(page);
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.submitButton);

      await expect(page.locator("text=Username already exists in the system").first()).toBeVisible({
        timeout: 5000,
      });
    });

    test("shows retry message when registration API returns 500", async ({ page }) => {
      await mockCheckEmail(page, false);
      await mockRegisterServerError(page);
      await gotoCreateAccountForm(page);

      await fillRegistrationForm(page);
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.submitButton);

      await expect(page.locator("text=Registration failed. Please try again.").first()).toBeVisible(
        { timeout: 5000 }
      );
    });

    test("re-enables submit button after registration fails", async ({ page }) => {
      await mockCheckEmail(page, false);
      await mockRegisterFailure(page, "Something went wrong");
      await gotoCreateAccountForm(page);

      await fillRegistrationForm(page);
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.submitButton);

      // Wait for error to appear
      await expect(page.locator("text=Something went wrong").first()).toBeVisible({
        timeout: 5000,
      });

      // Submit button must be re-enabled so the user can retry
      await expect(page.locator(REG_SELECTORS.submitButton)).toBeEnabled();
    });

    test("form remains visible when auto-login fails after successful registration", async ({
      page,
    }) => {
      await mockCheckEmail(page, false);
      await mockRegisterSuccess(page);

      // Auto-login (POST /api/auth) fails — component calls onError but shows no visible toast
      await page.route("**/api/auth", (route) =>
        route.fulfill({
          status: 401,
          contentType: "application/json",
          body: JSON.stringify({ error: "Auto-login failed" }),
        })
      );
      await gotoCreateAccountForm(page);

      await fillRegistrationForm(page);
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.submitButton);

      // Registration succeeded but auto-login failed: form stays visible, no redirect
      await expect(page.locator(REG_SELECTORS.formTitle)).toBeVisible({ timeout: 5000 });
      // No access token should be stored since auto-login failed
      const accessToken = await page.evaluate(() => localStorage.getItem("access_token"));
      expect(accessToken).toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // Remember Me Toggle
  // -------------------------------------------------------------------------

  test.describe("Remember Me", () => {
    test("toggles the remember me checkbox", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      const checkbox = page.locator(REG_SELECTORS.rememberMeCheckbox);
      await expect(checkbox).not.toBeChecked();
      await checkbox.check();
      await expect(checkbox).toBeChecked();
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    });
  });

  // -------------------------------------------------------------------------
  // Navigation
  // -------------------------------------------------------------------------

  test.describe("Navigation", () => {
    test("navigates to create account form from login via 'Create an Account' button", async ({
      page,
    }) => {
      await mockCheckEmail(page, false);
      await gotoLoginForm(page);
      await page.click(LOGIN_CREATE_ACCOUNT_BUTTON);
      await expect(page.getByRole("form", { name: /Create account form/i })).toBeVisible();
    });

    test("navigates back to login form when clicking Sign In button", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.click(REG_SELECTORS.signInButton);
      await expect(page.locator(REG_SELECTORS.loginTitle)).toBeVisible({ timeout: 3000 });
    });

    test("pre-fills email on login form when navigating via Sign In from registration", async ({
      page,
    }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      await page.fill(REG_SELECTORS.emailInput, "typed@example.com");
      await page.waitForTimeout(700);
      await page.click(REG_SELECTORS.signInButton);

      // Email typed on registration form should be carried over to login form
      await expect(page.locator('input[id="email"]')).toHaveValue("typed@example.com");
    });

    test("close button is accessible, has correct aria-label, and is clickable", async ({
      page,
    }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      const closeBtn = page.locator(REG_SELECTORS.closeButton);
      await expect(closeBtn).toBeVisible();
      await expect(closeBtn).toHaveAttribute("aria-label", "Close dialog");
      // Clicking calls handleClose; in TEST mode it is a no-op so the form stays visible
      await closeBtn.click();
      await expect(page.locator(REG_SELECTORS.formTitle)).toBeVisible();
    });

    test("form remains fully usable after pressing the Escape key", async ({ page }) => {
      await mockCheckEmail(page, false);
      await gotoCreateAccountForm(page);

      // Fill some data first so there is real state to preserve
      await page.fill(REG_SELECTORS.emailInput, "test@example.com");
      await page.waitForTimeout(700);
      await page.keyboard.press("Escape");
      // handleClose is a no-op in TEST mode — form remains fully interactive
      await expect(page.locator(REG_SELECTORS.formTitle)).toBeVisible();
      await expect(page.locator(REG_SELECTORS.emailInput)).toHaveValue("test@example.com");
    });

    test("navigates to create account pre-filled with email from login form", async ({ page }) => {
      // On login, mockCheckEmail returns false so a "create account" banner shows
      await mockCheckEmail(page, false);
      await gotoLoginForm(page);

      // Type email that does not exist
      await page.fill('input[id="email"]', "brand-new@example.com");
      // Wait for "Let's create one to continue?" banner
      await page.click("text=Let's create one to continue?", { timeout: 3000 });

      // Registration form should open with the email pre-filled
      await expect(page.locator(REG_SELECTORS.formTitle)).toBeVisible();
      await expect(page.locator(REG_SELECTORS.emailInput)).toHaveValue("brand-new@example.com");
    });
  });
});
