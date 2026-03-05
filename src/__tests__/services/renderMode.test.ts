import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import MockAdapter from "axios-mock-adapter";

describe("services render mode behavior", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("uses relative URLs when VITE_RENDER_MODE is TEST", async () => {
    vi.resetModules();
    vi.stubEnv("VITE_RENDER_MODE", "TEST");

    const axiosModule = await import("axios");
    const localMock = new MockAdapter(axiosModule.default);

    localMock.onPost(/\/api\/auth$/).reply((config) => {
      expect(config.url).toMatch(/\/api\/auth$/);
      return [200, { tokens: { access_token: "a", refresh_token: "r" } }];
    });

    const svc = await import("../../services");
    const result = await svc.authLogin("test@example.com", "Password123$");

    expect(result.tokens.access_token).toBe("a");
    localMock.restore();
  });
});
