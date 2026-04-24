/**
 * Component Tests: App
 * Tests for the root App component — authentication state, authority handling,
 * localStorage storage, logout counter resets, redirect callbacks, and
 * the embedded login form lifecycle.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import * as services from "../../services";
import * as functions from "../../functions";
import { STORAGE_KEYS, COOKIE_NAMES } from "../../constants";

// ---------------------------------------------------------------------------
// Module mocks
// ---------------------------------------------------------------------------

vi.mock("../../functions", () => ({
  checkTokenAndRedirectWithRefresh: vi.fn(),
  isRefreshTokenExpiredFromCookie: vi.fn(),
  isRefreshTokenValid: vi.fn(),
  refreshAuthenticationState: vi.fn(),
  silentTokenRefresh: vi.fn(),
  createUserSessionFromToken: vi.fn(),
  getDefaultRedirectUrl: vi.fn(),
}));

vi.mock("../../services", () => ({
  setAuthorityOverride: vi.fn(),
  clearAuthorityOverride: vi.fn(),
  getBrandHeaders: vi.fn(),
}));

vi.mock("../../components/embedded-login-form", () => ({
  default: ({ onSuccess, handleClose }: { onSuccess: () => void; handleClose: () => void }) => (
    <form data-testid="embedded-login-form">
      <button type="button" data-testid="login-submit" onClick={onSuccess}>
        Sign In
      </button>
      <button type="button" data-testid="login-close" onClick={handleClose}>
        Close
      </button>
    </form>
  ),
}));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const mockUserSession = {
  email: "john.doe@example.com",
  name: "John Doe",
  given_name: "John",
  family_name: "Doe",
  preferred_username: "john.doe@example.com",
  email_verified: true,
  sub: "test-user-id",
};

const renderApp = (props: Record<string, unknown> = {}) => {
  const defaultProps = {
    showLogin: true,
  };
  return render(
    <MemoryRouter>
      <App {...defaultProps} {...props} />
    </MemoryRouter>
  );
};

function setEncodedCookie(name: string, value: string): void {
  const expires = new Date(Date.now() + 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// ---------------------------------------------------------------------------
// Test suite
// ---------------------------------------------------------------------------

describe("App Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();

    // Safe defaults — user is NOT authenticated
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(false);
    vi.mocked(functions.isRefreshTokenExpiredFromCookie).mockReturnValue(true);
    vi.mocked(functions.isRefreshTokenValid).mockReturnValue(false);
    vi.mocked(functions.refreshAuthenticationState).mockResolvedValue(false);
    vi.mocked(functions.silentTokenRefresh).mockResolvedValue(undefined);
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue(null);
    vi.mocked(functions.getDefaultRedirectUrl).mockReturnValue(
      "https://dev-learn.example.com/courses"
    );
  });

  // -------------------------------------------------------------------------
  // Rendering based on authentication state
  // -------------------------------------------------------------------------

  it("renders EmbeddedLoginForm when showLogin=true and user is not authenticated", async () => {
    renderApp({ showLogin: true });

    await waitFor(() => {
      expect(screen.getByTestId("embedded-login-form")).toBeInTheDocument();
    });
  });

  it("hides EmbeddedLoginForm when user is already authenticated (checkTokenAndRedirectWithRefresh returns true)", async () => {
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(true);

    renderApp({ showLogin: true });

    await waitFor(() => {
      expect(screen.queryByTestId("embedded-login-form")).not.toBeInTheDocument();
    });
  });

  it("does not render EmbeddedLoginForm when showLogin=false", async () => {
    renderApp({ showLogin: false });

    // Allow effects to settle
    await waitFor(() => {
      expect(functions.checkTokenAndRedirectWithRefresh).toHaveBeenCalled();
    });

    expect(screen.queryByTestId("embedded-login-form")).not.toBeInTheDocument();
  });

  // -------------------------------------------------------------------------
  // Authority override
  // -------------------------------------------------------------------------

  it("calls setAuthorityOverride when authority prop is provided", async () => {
    renderApp({ authority: "https://keycloak.example.com/realms/colibri" });

    await waitFor(() => {
      expect(services.setAuthorityOverride).toHaveBeenCalledWith(
        "https://keycloak.example.com/realms/colibri"
      );
    });
  });

  it("calls clearAuthorityOverride when authority prop is not provided", async () => {
    renderApp();

    await waitFor(() => {
      expect(services.clearAuthorityOverride).toHaveBeenCalled();
    });

    expect(services.setAuthorityOverride).not.toHaveBeenCalled();
  });

  // -------------------------------------------------------------------------
  // localStorage persistence
  // -------------------------------------------------------------------------

  it("stores authority in localStorage when authority prop is provided", async () => {
    renderApp({ authority: "https://keycloak.example.com/realms/colibri" });

    await waitFor(() => {
      expect(localStorage.getItem("iam_authority")).toBe(
        "https://keycloak.example.com/realms/colibri"
      );
    });
  });

  it("stores subsidiary in localStorage when subsidiary prop is provided", async () => {
    renderApp({ subsidiary: "elite" });

    await waitFor(() => {
      expect(localStorage.getItem("subsidiary")).toBe("elite");
    });
  });

  it("stores both authority and subsidiary in localStorage when both props are provided", async () => {
    renderApp({
      authority: "https://keycloak.example.com/realms/colibri",
      subsidiary: "mckissock",
    });

    await waitFor(() => {
      expect(localStorage.getItem("iam_authority")).toBe(
        "https://keycloak.example.com/realms/colibri"
      );
      expect(localStorage.getItem("subsidiary")).toBe("mckissock");
    });
  });

  // -------------------------------------------------------------------------
  // logoutCounter — resetting isAuthenticated
  // -------------------------------------------------------------------------

  it("resets isAuthenticated (shows login form again) when logoutCounter changes", async () => {
    // First render: user is authenticated
    vi.mocked(functions.checkTokenAndRedirectWithRefresh).mockResolvedValue(true);

    const { rerender } = render(
      <MemoryRouter>
        <App showLogin={true} logoutCounter={0} />
      </MemoryRouter>
    );

    // User should be hidden (authenticated)
    await waitFor(() => {
      expect(screen.queryByTestId("embedded-login-form")).not.toBeInTheDocument();
    });

    // Simulate logout by incrementing the counter
    act(() => {
      rerender(
        <MemoryRouter>
          <App showLogin={true} logoutCounter={1} />
        </MemoryRouter>
      );
    });

    // isAuthenticated resets to false → form becomes visible again
    await waitFor(() => {
      expect(screen.getByTestId("embedded-login-form")).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------------------------
  // handleEmbeddedLoginSuccess — onRedirect callback
  // -------------------------------------------------------------------------

  it("calls onRedirect callback after successful login when redirectUrl and access token are present", async () => {
    const onRedirect = vi.fn();
    const fakeToken = "fake-access-token";

    setEncodedCookie(COOKIE_NAMES.ACCESS_TOKEN, fakeToken);
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue(mockUserSession);

    renderApp({
      showLogin: true,
      onRedirect,
      redirectUrl: "https://dev-learn.example.com/dashboard",
      autoRedirection: false,
    });

    await waitFor(() => {
      expect(screen.getByTestId("embedded-login-form")).toBeInTheDocument();
    });

    act(() => {
      screen.getByTestId("login-submit").click();
    });

    await waitFor(() => {
      expect(onRedirect).toHaveBeenCalledWith(
        "https://dev-learn.example.com/dashboard",
        mockUserSession
      );
    });
  });

  it("does not call onRedirect when no access token is stored after login", async () => {
    const onRedirect = vi.fn();

    // No token in cookies — createUserSessionFromToken returns null
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue(null);

    renderApp({
      showLogin: true,
      onRedirect,
      redirectUrl: "https://dev-learn.example.com/dashboard",
      autoRedirection: false,
    });

    await waitFor(() => {
      expect(screen.getByTestId("embedded-login-form")).toBeInTheDocument();
    });

    act(() => {
      screen.getByTestId("login-submit").click();
    });

    // Allow one microtask tick for the synchronous handleEmbeddedLoginSuccess to complete
    await act(async () => {});

    expect(onRedirect).not.toHaveBeenCalled();
  });

  // -------------------------------------------------------------------------
  // handleClose prop
  // -------------------------------------------------------------------------

  it("calls handleClose prop when the form close button is clicked", async () => {
    const handleClose = vi.fn();

    renderApp({ showLogin: true, handleClose });

    await waitFor(() => {
      expect(screen.getByTestId("embedded-login-form")).toBeInTheDocument();
    });

    act(() => {
      screen.getByTestId("login-close").click();
    });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  // -------------------------------------------------------------------------
  // autoRedirection — window.location.href redirect after login
  // -------------------------------------------------------------------------

  it("redirects via window.location.href when autoRedirection=true and login succeeds", async () => {
    const fakeToken = "fake-access-token";
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, fakeToken);
    vi.mocked(functions.createUserSessionFromToken).mockReturnValue(mockUserSession);
    vi.mocked(functions.getDefaultRedirectUrl).mockReturnValue(
      "https://dev-learn.example.com/courses"
    );

    renderApp({
      showLogin: true,
      autoRedirection: true,
      redirectUrl: "https://dev-learn.example.com/courses",
    });

    await waitFor(() => {
      expect(screen.getByTestId("embedded-login-form")).toBeInTheDocument();
    });

    act(() => {
      screen.getByTestId("login-submit").click();
    });

    // Wait for the setTimeout(..., 100) inside handleEmbeddedLoginSuccess
    await act(async () => {
      await new Promise((r) => setTimeout(r, 150));
    });

    expect(window.location.href).toBe("https://dev-learn.example.com/courses");
  });

  // -------------------------------------------------------------------------
  // Cleanup
  // -------------------------------------------------------------------------

  it("calls clearAuthorityOverride on unmount", async () => {
    const { unmount } = renderApp({ authority: "https://keycloak.example.com/realms/colibri" });

    // Let effects settle
    await act(async () => {});

    vi.mocked(services.clearAuthorityOverride).mockClear();

    unmount();

    expect(services.clearAuthorityOverride).toHaveBeenCalledTimes(1);
  });
});
