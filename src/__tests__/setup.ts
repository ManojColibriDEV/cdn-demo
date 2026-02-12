/**
 * Vitest Test Setup File
 * Configures testing environment and global mocks
 */

import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// Cleanup after each test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  localStorage.clear();
  sessionStorage.clear();
  // Clear all cookies
  document.cookie.split(";").forEach((c) => {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
});

// Mock window.location
delete (window as any).location;
window.location = {
  ...window.location,
  href: "http://localhost:5173",
  hostname: "localhost",
  protocol: "http:",
  reload: vi.fn(),
  replace: vi.fn(),
  assign: vi.fn(),
} as any;

// Mock import.meta.env
(global as any).importMeta = {
  env: {
    VITE_RENDER_MODE: "TEST",
  },
};

// Mock customElements for web component tests
if (!window.customElements) {
  (window as any).customElements = {
    define: vi.fn(),
    get: vi.fn(),
    whenDefined: vi.fn().mockResolvedValue(undefined),
  };
}
