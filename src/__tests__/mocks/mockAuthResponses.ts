/**
 * Mock Data: Authentication API Responses
 * Contains mock responses for auth login, token refresh, and related endpoints
 */

export const mockAuthLoginSuccessResponse = {
  access_token:
    "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0ZXN0LWtleSJ9.eyJleHAiOjE3MDk4NTM2MDAsImlhdCI6MTcwOTg1MDAwMCwianRpIjoiMTIzNDUtNjc4OTAtYWJjZGUtZWZnaGkiLCJpc3MiOiJodHRwczovL2Rldi1rZXljbG9hay5jb2xpYnJpbGVhcm5pbmcuY29tL3JlYWxtcy9jb2xpYnJpIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6InRlc3QtdXNlci1pZCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImNvbGlicmktY2xpZW50IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkpvaG4gRG9lIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJnaXZlbl9uYW1lIjoiSm9obiIsImZhbWlseV9uYW1lIjoiRG9lIiwiZW1haWwiOiJqb2huLmRvZUBleGFtcGxlLmNvbSJ9.signature",
  refresh_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJyZWZyZXNoLWtleSJ9.eyJleHAiOjE3MDk4NTcyMDAsImlhdCI6MTcwOTg1MDAwMCwianRpIjoicmVmcmVzaC0xMjM0NSIsImlzcyI6Imh0dHBzOi8vZGV2LWtleWNsb2FrLmNvbGlicmlsZWFybmluZy5jb20vcmVhbG1zL2NvbGlicmkiLCJhdWQiOiJodHRwczovL2Rldi1rZXljbG9hay5jb2xpYnJpbGVhcm5pbmcuY29tL3JlYWxtcy9jb2xpYnJpIiwic3ViIjoidGVzdC11c2VyLWlkIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImNvbGlicmktY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6InNlc3Npb24tMTIzNDUiLCJzY29wZSI6ImVtYWlsIHByb2ZpbGUifQ.signature",
  expires_in: 3600,
  refresh_expires_in: 7200,
  token_type: "Bearer",
  "not-before-policy": 0,
  session_state: "session-12345",
  scope: "email profile",
};

export const mockAuthLoginErrorResponse = {
  error: "invalid_grant",
  error_description: "Invalid user credentials",
};

export const mockAuthLoginUnauthorizedResponse = {
  error: "Unauthorized",
  message: "Invalid credentials",
};

export const mockRefreshTokenSuccessResponse = {
  access_token: "new-access-token-after-refresh",
  refresh_token: "new-refresh-token-after-refresh",
  expires_in: 3600,
  refresh_expires_in: 7200,
  token_type: "Bearer",
};

export const mockRefreshTokenExpiredResponse = {
  error: "invalid_grant",
  error_description: "Token is not active",
};

export const mockUserSessionInfo = {
  email: "john.doe@example.com",
  name: "John Doe",
  given_name: "John",
  family_name: "Doe",
  preferred_username: "john.doe@example.com",
  email_verified: true,
  sub: "test-user-id",
};
