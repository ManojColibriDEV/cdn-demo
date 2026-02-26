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

export const mockGetSubsidariesResponse = [
  {
    subsidiaryId: 1,
    subsidiaryName: "McKissock LP",
    siteURL: "www.mckissock.com",
  },
  {
    subsidiaryId: 2,
    subsidiaryName: "Elite Professional Education LLC",
    siteURL: "www.elitelearning.com",
  },
  {
    subsidiaryId: 3,
    subsidiaryName: "Colibri Real Estate LLC",
    siteURL: "www.colibrirealestate.com",
  },
  {
    subsidiaryId: 16,
    subsidiaryName: "Superior School of Real Estate Ed",
    siteURL: "www.superiorschoolnc.com",
  },
  {
    subsidiaryId: 20,
    subsidiaryName: "Allied School LLC",
    siteURL: "www.alliedschools.com",
  },
  {
    subsidiaryId: 21,
    subsidiaryName: "Xcel Solutions LLC",
    siteURL: "www.xceltesting.com",
  },
  {
    subsidiaryId: 22,
    subsidiaryName: "Western",
    siteURL: "www.westernschools.com",
  },
  {
    subsidiaryId: 23,
    subsidiaryName: "CE Express",
    siteURL: "www.ce-express.com",
  },
  {
    subsidiaryId: 25,
    subsidiaryName: "Fitzgerald",
    siteURL: "www.fhea.com",
  },
  {
    subsidiaryId: 29,
    subsidiaryName: "Hondros Learning",
    siteURL: "www.hondroslearning.com",
  },
  {
    subsidiaryId: 31,
    subsidiaryName: "CompuCram",
    siteURL: "www.compucram.com",
  },
  {
    subsidiaryId: 34,
    subsidiaryName: "HomeCEU",
    siteURL: null,
  },
  {
    subsidiaryId: 35,
    subsidiaryName: "Rockwell Publishing Company LLC",
    siteURL: "www.rockwellinstitute.com",
  },
  {
    subsidiaryId: 36,
    subsidiaryName: "Gold Coast Professional Schools LLC",
    siteURL: "www.goldcoastschools.com",
  },
  {
    subsidiaryId: 58,
    subsidiaryName: "NetCEBuyer Inc",
    siteURL: "www.netce.com",
  },
  {
    subsidiaryId: 136,
    subsidiaryName: "Informed",
    siteURL: null,
  },
  {
    subsidiaryId: 137,
    subsidiaryName: "Securities Training Corporation",
    siteURL: "www.stcusa.com",
  },
  {
    subsidiaryId: 138,
    subsidiaryName: "STC School of Insurance",
    siteURL: "www.stcusa.com",
  },
  {
    subsidiaryId: 142,
    subsidiaryName: "Internal Employees",
    siteURL: "www.colibrigroup.com",
  },
];
