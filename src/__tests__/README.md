# Testing Documentation

## Overview

This project uses **Vitest** for unit and integration testing, with React Testing Library for component tests. The test suite covers services, components, utilities, and validation functions.

## Test Structure

```
src/__tests__/
├── setup.ts                           # Global test setup and configuration
├── mocks/                             # Mock data and API responses
│   ├── mockAuthResponses.ts          # Authentication API mocks
│   ├── mockRegistrationResponses.ts  # Registration API mocks
│   ├── mockSubsidiaryResponses.ts    # Subsidiary/Global API mocks
│   ├── mockThemeResponses.ts         # Theme and brand config mocks
│   └── mockPasswordResetResponses.ts # Password reset API mocks
├── services/                          # Service layer tests
│   ├── authService.test.ts           # Auth, register, email check tests
│   └── themeService.test.ts          # Theme loading and brand detection tests
├── utils/                             # Utility function tests
│   └── cookieHelper.test.ts          # Cookie operations and domain handling tests
├── functions/                         # Business logic tests
│   └── validation.test.ts            # Password validation, token checks, URL building
└── components/                        # Component tests
    ├── ui/                            # UI component tests
    │   ├── Button.test.tsx           # Button variants, states, clicks
    │   ├── Input.test.tsx            # Input validation, events
    │   ├── Banner.test.tsx           # Message banners
    │   ├── Toast.test.tsx            # Toast notifications
    │   └── Loader.test.tsx           # Loading indicators
    ├── EmbeddedLoginForm.test.tsx    # Login form integration tests
    ├── CreateAccountForm.test.tsx    # Registration form tests
    └── ResetPasswordForm.test.tsx    # Password reset tests
```

## Running Tests

### Watch Mode (Development)
```bash
npm test
# or
npm run test:watch
```

### Single Run (CI/CD)
```bash
npm run test:run
```

### With UI Dashboard
```bash
npm run test:ui
```

### With Coverage Report
```bash
npm run test:coverage
```

Coverage reports are generated in:
- **HTML**: `coverage/index.html` (open in browser)
- **JSON**: `coverage/coverage.json`
- **LCOV**: `coverage/lcov.info`

## Mock Data Conventions

All mock data follows a consistent naming pattern:

### Response Mocks
- `mock[Feature][Status]Response` - API response mocks
  - Example: `mockAuthLoginSuccessResponse`, `mockCheckEmailAvailableResponse`

### Request Mocks
- `mock[Feature]RequestData` - Request payload mocks
  - Example: `mockRegisterRequestData`, `mockForgotPasswordRequest`

### Entity Mocks
- `mock[Entity]Data` - Domain entity mocks
  - Example: `mockBrandData`, `mockUserSessionInfo`

## Test Categories

### 1. Service Tests (`services/`)
Tests for API integration and data fetching:
- ✅ Authentication (login, register, refresh token)
- ✅ Email validation
- ✅ Password reset requests
- ✅ Theme loading and brand detection
- ✅ Subsidiary fetching
- ✅ Error handling and network failures

### 2. Component Tests (`components/`)
React component integration tests:
- ✅ User interactions (typing, clicking, form submission)
- ✅ Validation feedback
- ✅ State management
- ✅ Error displays
- ✅ Loading states
- ✅ Conditional rendering

### 3. Utility Tests (`utils/`)
Pure function tests:
- ✅ Cookie operations (set, get, clear)
- ✅ Domain detection (dev, test, stage, prod)
- ✅ URL transformations
- ✅ Cross-subdomain support

### 4. Function Tests (`functions/`)
Business logic validation:
- ✅ Password strength validation
- ✅ Password rules (length, characters, no name/email parts)
- ✅ Token expiration checks
- ✅ Remember Me logic
- ✅ Redirect URL building

## Writing New Tests

### Service Test Example
```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { myService } from '../../services';
import { mockMyServiceResponse } from '../mocks/mockMyServiceResponses';

describe('MyService', () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    vi.clearAllMocks();
  });

  it('should fetch data successfully', async () => {
    mockAxios.onGet('/api/endpoint').reply(200, mockMyServiceResponse);
    
    const result = await myService();
    
    expect(result).toEqual(mockMyServiceResponse);
  });
});
```

### Component Test Example
```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from '../../components/MyComponent';

describe('MyComponent', () => {
  it('should handle user interaction', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(<MyComponent onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalled();
  });
});
```

## Best Practices

1. **Isolation**: Each test should be independent and not rely on other tests
2. **Mocking**: Use separate mock files for API responses in `__tests__/mocks/`
3. **Cleanup**: `beforeEach` and `afterEach` hooks clean up state automatically
4. **User Events**: Use `@testing-library/user-event` for realistic user interactions
5. **Async Testing**: Use `waitFor` for async operations and state updates
6. **Descriptive Names**: Test names should clearly describe what is being tested
7. **Arrange-Act-Assert**: Structure tests with setup, action, and verification

## Coverage Goals

Target coverage metrics:
- **Services**: 90%+ (critical business logic)
- **Components**: 80%+ (user-facing features)
- **Utils**: 95%+ (pure functions)
- **Functions**: 90%+ (validation logic)

## Troubleshooting

### Common Issues

**Tests timing out:**
- Increase timeout in `waitFor` options
- Check for missing mock implementations

**Mock not working:**
- Verify mock is defined in correct file
- Ensure `vi.clearAllMocks()` in `beforeEach`
- Check import paths match exactly

**Component not rendering:**
- Wrap in `<BrowserRouter>` if using React Router
- Check for missing required props
- Verify component imports

**Coverage not accurate:**
- Exclude test files and mocks in `vitest.config.ts`
- Run `npm run test:coverage` with clean cache

## CI/CD Integration

Tests run automatically in CI pipeline:
```yaml
# In buildspec.yml or CI config
test:
  commands:
    - npm run test:run
    - npm run test:coverage
```

## Additional Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library User Event](https://testing-library.com/docs/user-event/intro)
- [Axios Mock Adapter](https://github.com/ctimmerm/axios-mock-adapter)
