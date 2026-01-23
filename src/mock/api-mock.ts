// https://dev-idb.colibrirealestate.com/brands/colibrirealestate/tenantdetail.json
export const getTenantDetailMock = {
  TenantId: 3,
  SubsidiaryId: 3,
  Host: "dev-idb",
  Domain: "colibrirealestate.com",
  PhoneUs: "866.739.7277",
  PhoneOutsideUs: null,
  PhoneEnrollments: "844.701.2946",
  BrandFullName: "Colibri Real Estate",
  TenantDescription: "Colibri Real Estate",
  ShowFullBrandNameOnHeader: false,
  UseFullRegistration: true,
  CheckAvailabilityInCommonDb: true,
  Address: {
    Address1: "399 South Spring Avenue",
    Address2: null,
    City: "St. Louis",
    State: "MO",
    PostalCode: "63110",
    Country: "US",
  },
  Email: "customercare@colibrirealestate.com",
  ContactUsUrl: "https://www.colibrirealestate.com/contact-us/",
  AllowCreateIdentity: false,
  AllowCreateIdentityEx: true,
  TermsOfServiceUrl: "https://www.colibrirealestate.com/terms-conditions/",
  PrivacyPolicyUrl: "https://www.colibrirealestate.com/privacy-policy/",
  ConsentPreferenceCenterUrl: null,
  DefaultRoute: "/route/checkoutsignin",
  RegistrationConsent:
    'By creating an account, you agree to {{BrandFullName}}’s Privacy Policy and Terms of Service. By providing my personal information, including phone number, I consent to receive email messages, auto-dialed calls, texts, and prerecorded messages from {{BrandFullName}} with information and offers, including current and possible future services, customer service and billing and agree to the <a href="{{TermsOfServiceUrl}}" target="_blank">Terms of Service</a> & <a href="{{PrivacyPolicyUrl}}" target="_blank">Privacy Policy</a>. If, at any time, you wish to opt out of electronic or text communications, reply STOP to cancel, HELP for help. Msg & data rates may apply.  I understand that my consent is not required to purchase, and that cancellation of purchase does not automatically revoke this consent.',

  ShowNameBreakdownOnConfirmationPage: false,
  ShowMobileNumberOnConfirmationPage: true,
  MaskMobileNumberOnConfirmationPage: true,
  ShowProfessionalDesignationsOnConfirmationPage: false,

  EnableEmailOTP: false,
  EnableMobileNumberOTP: false,
  CustomRegistrationOptions: {
    CountriesSupported: "US,CA",
    PrimaryInterestOptions: [],
    ShowCountryDropdown: true,
    CountryRequired: false,

    ShowDateOfBirth: true,
    DateOfBirthRequired: false,
  },
};

// Mock data for authLogin API
export const authLoginMock = {
  "success": true,
  "brand": {
    "id": 0,
    "name": "Elite",
    "domain": "elitelearning",
    "realm": "allied"
  },
  "tokens": {
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzemZtODRJVXEtVXBrS25OVUNhSXdwb2xLQy1vWFJpS2tIODRsTUVhT3dvIn0.eyJleHAiOjE3Njg5MzgwODEsImlhdCI6MTc2ODkzNzc4MSwianRpIjoib25ydHJvOjQ3MzBmNGE5LWU4M2UtMDVkOS03ZmIyLWY2ZjM1NjdmNWFhZiIsImlzcyI6Imh0dHBzOi8vZGV2LWtleWNsb2FrLmNvbGlicmljb3JlLmlvL3JlYWxtcy9hbGxpZWQiLCJhdWQiOlsiY291cnNlLWFwaSIsImFzc2Vzc21lbnQtYXBpIiwiZ2xvYmFsLWFwaSIsImIyYi1hcGkiLCJtYXJrZXRpbmctYXBpIiwiY29yZS1yZWd1bGF0b3J5LWFwaSIsImxlYXJuZXItYXBpIiwiY29yZS1lY29tbWVyY2UtYXBpIiwicHJvZmlsZS1hcGkiLCJtZW1iZXJzaGlwLWFwaSIsImFjY291bnQiXSwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY29saWJyaWNvcmUiLCJzaWQiOiJmYmNhNTE1MS1jYTlhLWFhMjgtNmNmMS0zMWVhYmE4MzFkMGQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vZGV2LWNvdXJzZS5hbGxpZWRzY2hvb2xzLmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMyIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMiIsImh0dHBzOi8vZGV2LmVsaXRlbGVhcm5pbmcuY29tIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSIsImh0dHBzOi8vZGV2LWxlYXJuLmFsbGllZHNjaG9vbHMuY29tIiwiKiIsImh0dHBzOi8vZGV2LWRlbW8tZW52LmNvbGlicmljb3JlLmlvIiwiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaHR0cDovL2xvY2FsaG9zdDo4MTAwIiwiaHR0cHM6Ly9kZXYuYWxsaWVkc2Nob29scy5jb20iXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1hbGxpZWQiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzdHVkZW50SWQiOiI1MDAwMDc2MTYiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInhfY3JlZGVudGlhbHMiOiJTdHVkZW50OjUwMDAwNzYxNjpIMGJWbUtGWkRROVM0RXNkRXR4Sk93d3JhVlU9OlRydWU6IiwibmFtZSI6IkFudG9uIEFieXpvdiIsInByZWZlcnJlZF91c2VybmFtZSI6ImFudG9uLmFieXpvdiIsImdpdmVuX25hbWUiOiJBbnRvbiIsImZhbWlseV9uYW1lIjoiQWJ5em92IiwiZW1haWwiOiJhbnRvbi5hYnl6b3ZAY29saWJyaWdyb3VwLmNvbSJ9.c-mE_QsXl_vux_mWpGSXI-aWtwyf0XPwj1RigqIaGkgLpLmsyriwzvi9hXFL6HkCrMBCMtsnI8bngp9k4YgvRBgHqdYeq2D1W39aobrx3hQJt7T7EGyqllSfXPuIo_Gdg7fu-kzovWnE_7cBUAHHPduVxSh_U1hnG8PbbCJiw9kA0sws8Q5mA2cQ_j96coJEZP8ATxHuQSyfMYN0tPxjmFB7QD6GkACHPB87U5jwPLF2WehjWQfmiO5X75jDuzU0SkXekIL21C6CNd48iNPBSjhM7mdx5Vc0PhfZOP_lwNtB_vmILWbgWSLJwqt_me7CF6mxH-lY4_PFtLLAcSA2Nw",
    "refresh_token": "eyJhbGciOiJIUzUxMiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwMjQ3MjAwYy0zMzcyLTQyNmItYWVhMi1kYjkxYjM5YTdlZWUifQ.eyJleHAiOjE3Njg5Mzk1ODEsImlhdCI6MTc2ODkzNzc4MSwianRpIjoiODdiZjMyNjMtZGVhZi1iNGMxLTRlMWQtZTZkMWFiYTg0ZmUwIiwiaXNzIjoiaHR0cHM6Ly9kZXYta2V5Y2xvYWsuY29saWJyaWNvcmUuaW8vcmVhbG1zL2FsbGllZCIsImF1ZCI6Imh0dHBzOi8vZGV2LWtleWNsb2FrLmNvbGlicmljb3JlLmlvL3JlYWxtcy9hbGxpZWQiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiY29saWJyaWNvcmUiLCJzaWQiOiJmYmNhNTE1MS1jYTlhLWFhMjgtNmNmMS0zMWVhYmE4MzFkMGQiLCJzY29wZSI6Im9wZW5pZCByb2xlcyBhY3IgcHJvZmlsZSBlbWFpbCB3ZWItb3JpZ2lucyJ9.FMFyThTF0Dtef475ZF9anL8j8QOUbxvj0UrH2Kzvout-A_5hO6c8GzRz6Uz3ncYZ3IwxTQh1lc5zS0EB3rDK2Q",
    "token_type": "Bearer",
    "expires_in": 300,
    "scope": "openid profile email"
  },
  "userinfo": {
    "studentId": "500007616",
    "sub": "6a268217-4a8a-44b0-9de4-54024192cb9b",
    "email_verified": false,
    "x_credentials": "Student:500007616:H0bVmKFZDQ9S4EsdEtxJOwwraVU=:True:",
    "name": "Anton Abyzov",
    "preferred_username": "anton.abyzov",
    "given_name": "Anton",
    "family_name": "Abyzov",
    "email": "anton.abyzov@colibrigroup.com"
  }
}

// Data after decoding refresh_token
export const decodedRefreshTokenMock = {
  "exp": 1768939581,
  "iat": 1768937781,
  "jti": "87bf3263-deaf-b4c1-4e1d-e6d1aba84fe0",
  "iss": "https://dev-keycloak.colibricore.io/realms/allied",
  "aud": "https://dev-keycloak.colibricore.io/realms/allied",
  "typ": "Refresh",
  "azp": "colibricore",
  "sid": "fbca5151-ca9a-aa28-6cf1-31eaba831d0d",
  "scope": "openid roles acr profile email web-origins"
}

// Mock data for authRegister API - Success
export const authRegisterSuccessMock = {
  "success": true,
  "message": "User registered successfully",
  "brand": {
    "id": 11,
    "name": "Colibri Learning",
    "domain": "colibrilearning",
    "realm": "allied"
  }
};

// Mock data for authRegister API - Error (User already exists)
export const authRegisterErrorMock = {
  "error": "Registration failed",
  "details": {
    "errorMessage": "User exists with same email"
  }
};

// Mock data for authRefresh API
export const authRefreshMock = {
  "success": true,
  "tokens": {
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzemZtODRJVXEtVXBrS25OVUNhSXdwb2xLQy1vWFJpS2tIODRsTUVhT3dvIn0.eyJleHAiOjE3Njg5Njk5NDQsImlhdCI6MTc2ODk2OTY0NCwianRpIjoib25ydHJ0OmM2OTA2ZmQ0LWJhNzctMzUxOS00NGUwLTI2NzQ4YTMwYWRhZCIsImlzcyI6Imh0dHBzOi8vZGV2LWtleWNsb2FrLmNvbGlicmljb3JlLmlvL3JlYWxtcy9hbGxpZWQiLCJhdWQiOlsiY291cnNlLWFwaSIsImFzc2Vzc21lbnQtYXBpIiwiZ2xvYmFsLWFwaSIsImIyYi1hcGkiLCJtYXJrZXRpbmctYXBpIiwiY29yZS1yZWd1bGF0b3J5LWFwaSIsImxlYXJuZXItYXBpIiwiY29yZS1lY29tbWVyY2UtYXBpIiwicHJvZmlsZS1hcGkiLCJtZW1iZXJzaGlwLWFwaSIsImFjY291bnQiXSwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY29saWJyaWNvcmUiLCJzaWQiOiI0OTk0YWExZS04NjgzLWRhNzItMWY2NC1jNDBmYzQ2ZGU0MmEiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vZGV2LWNvdXJzZS5hbGxpZWRzY2hvb2xzLmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMyIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMiIsImh0dHBzOi8vZGV2LmVsaXRlbGVhcm5pbmcuY29tIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSIsImh0dHBzOi8vZGV2LWxlYXJuLmFsbGllZHNjaG9vbHMuY29tIiwiKiIsImh0dHBzOi8vZGV2LWRlbW8tZW52LmNvbGlicmljb3JlLmlvIiwiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaHR0cDovL2xvY2FsaG9zdDo4MTAwIiwiaHR0cHM6Ly9kZXYuYWxsaWVkc2Nob29scy5jb20iXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1hbGxpZWQiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzdHVkZW50SWQiOiI1MDAwMDc2MTYiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInhfY3JlZGVudGlhbHMiOiJTdHVkZW50OjUwMDAwNzYxNjpIMGJWbUtGWkRROVM0RXNkRXR4Sk93d3JhVlU9OlRydWU6IiwibmFtZSI6IkFudG9uIEFieXpvdiIsInByZWZlcnJlZF91c2VybmFtZSI6ImFudG9uLmFieXpvdiIsImdpdmVuX25hbWUiOiJBbnRvbiIsImZhbWlseV9uYW1lIjoiQWJ5em92IiwiZW1haWwiOiJhbnRvbi5hYnl6b3ZAY29saWJyaWdyb3VwLmNvbSJ9.TPK7FxTGE6MpuPkc8lvnMzgS2HgZe1sOUTivO9HSTsNsIcAUEMbPB17qDNxZY6Ri0vnKx5TrOLrHF3iOlNkqsUQC0Ep5IAvkc8tU81clvfTUMwVXYgc7cLwWHoWKQF_8cGE6d3hLYC-GR8zKZ5vHH_jPLhCY8179WnpPwUZcpdtOxWO8UTLkROT3Yj97a_Tln0xtkPYxmrQMNsxjrUnjOVRIiYMvSykskdMOE1_YYO0Wq7I6fHcMXRVcXI9KjnmWYKGwsHwZVrIuyQxuVVqdT-0iQ38Y1UKKsrK2XU3X7LlgXh-lJ5MTfoi6SqS5LUWEoKdH8KdyEUWXHw5dapJpcg",
    "refresh_token": "eyJhbGciOiJIUzUxMiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwMjQ3MjAwYy0zMzcyLTQyNmItYWVhMi1kYjkxYjM5YTdlZWUifQ.eyJleHAiOjE3Njg5NzE0NDQsImlhdCI6MTc2ODk2OTY0NCwianRpIjoiMGRjNzI1MmUtOGIxYi1lODRkLTNkYzQtMDEwMTk3YjZhMTdjIiwiaXNzIjoiaHR0cHM6Ly9kZXYta2V5Y2xvYWsuY29saWJyaWNvcmUuaW8vcmVhbG1zL2FsbGllZCIsImF1ZCI6Imh0dHBzOi8vZGV2LWtleWNsb2FrLmNvbGlicmljb3JlLmlvL3JlYWxtcy9hbGxpZWQiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiY29saWJyaWNvcmUiLCJzaWQiOiI0OTk0YWExZS04NjgzLWRhNzItMWY2NC1jNDBmYzQ2ZGU0MmEiLCJzY29wZSI6Im9wZW5pZCByb2xlcyBhY3IgcHJvZmlsZSBlbWFpbCB3ZWItb3JpZ2lucyJ9.GqyCmTsPzc8hEaDFqQ9qCEBH-_hQ-YF7gRDCYkCq1Cm8EOtNuYIrfCS3ZhmrYrKKMHCSWGLGas3IXrsxUCEknA",
    "token_type": "Bearer",
    "expires_in": 300
  }
}