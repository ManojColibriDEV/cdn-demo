# Test Coverage Guide

## Overview

This project uses **Vitest** with **V8 coverage** to track code coverage. Coverage reports are automatically generated during builds and show which lines of code are tested.

---

## Quick Start

### View Coverage Report (HTML)

```bash
# Run tests with coverage and open HTML report
npm run coverage:report
```

This will:
1. Run all tests with coverage
2. Generate HTML report in `coverage/` folder
3. Automatically open `coverage/index.html` in your browser

### Run Coverage Only

```bash
# Generate coverage without opening report
npm run test:coverage
```

### Watch Mode with Coverage

```bash
# Run tests in watch mode with live coverage updates
npm run test:coverage:watch
```

---

## Coverage Reports

### HTML Report (Interactive)

**Location**: `coverage/index.html`

**Features**:
- ✅ File-by-file coverage breakdown
- ✅ Line-by-line highlighting (red = uncovered, green = covered)
- ✅ Branch coverage visualization
- ✅ Function coverage analysis
- ✅ Sortable columns
- ✅ Drill-down into specific files

**Usage**:
1. Run `npm run test:coverage`
2. Open `coverage/index.html` in browser
3. Click on any file to see line-by-line coverage
4. Red lines = NOT tested
5. Green lines = Tested

### Console Output

Coverage summary appears in terminal after running tests:

```
=============================== Coverage summary ===============================
Statements   : 66.35% ( 629/948 )  ← 66% of code executed
Branches     : 62.48% ( 413/661 )  ← 62% of if/else paths tested
Functions    : 65.77% ( 98/149 )   ← 66% of functions called
Lines        : 65.97% ( 607/920 )  ← 66% of lines executed
================================================================================
```

### JSON Reports

**Location**: `coverage/coverage-summary.json`

Machine-readable format for CI/CD integration.

### LCOV Report

**Location**: `coverage/lcov.info`

Standard format for external tools (SonarQube, Codecov, etc.)

---

## Coverage Thresholds

Build **fails** if coverage drops below:

| Metric      | Threshold | Current |
|-------------|-----------|---------|
| Lines       | 65%       | ~66%    |
| Statements  | 65%       | ~66%    |
| Functions   | 65%       | ~66%    |
| Branches    | 60%       | ~62%    |

**Goal**: Gradually increase thresholds to 80%+ as test coverage improves.

---

## What Gets Covered

### Included Files

All production code:
```
src/**/*.{ts,tsx}
```

### Excluded Files

- `src/__tests__/**` - Test files
- `src/**/*.test.{ts,tsx}` - Test files
- `src/**/*.spec.{ts,tsx}` - Test files
- `**/*.d.ts` - Type definitions
- `**/*.config.*` - Config files
- `src/main.tsx` - Entry point (hard to test)
- `src/vite-env.d.ts` - Vite types
- `node_modules/` - Dependencies
- `dist/` - Build output

---

## Understanding Coverage

### Line Coverage

**What it means**: Percentage of code lines executed during tests

**Example**:
```typescript
function add(a, b) {
  return a + b;  // ← This line covered if test calls add()
}
```

**How to improve**: Add tests that call uncovered lines

---

### Branch Coverage

**What it means**: Percentage of if/else branches tested

**Example**:
```typescript
function isPositive(num) {
  if (num > 0) {
    return true;   // ← Branch A
  } else {
    return false;  // ← Branch B
  }
}
```

Both branches covered only if tests call with:
- `isPositive(5)` → Branch A
- `isPositive(-5)` → Branch B

**How to improve**: Test all conditional paths

---

### Function Coverage

**What it means**: Percentage of functions called during tests

**Example**:
```typescript
function helper1() { }  // ← Covered if test calls it
function helper2() { }  // ← NOT covered if never called
```

**How to improve**: Add tests that call uncovered functions

---

### Statement Coverage

**What it means**: Percentage of executable statements run

**Similar to line coverage but counts statements, not lines**

---

## CI/CD Integration

### CodeBuild

Coverage runs automatically during build:

```yaml
# buildspec.yml
build:
  commands:
    - npm run test:coverage  # Generates coverage
    - cat coverage/coverage-summary.json  # Shows summary
```

Coverage reports are saved as build artifacts:

```yaml
artifacts:
  secondary-artifacts:
    coverage:
      files: '**/*'
      base-directory: coverage
```

**Access**: Download from CodeBuild console → Artifacts → coverage-report

---

## Improving Coverage

### Find Uncovered Code

1. Run: `npm run test:coverage`
2. Open: `coverage/index.html`
3. Look for red-highlighted lines
4. Write tests for those lines

### Focus Areas

Check console output for low coverage:

```
src/services      |   64.21 |    37.27 |   70.37 |   64.21 |
  index.ts         |   66.12 |    33.33 |   85.71 |   66.12 | ← Low branch coverage (33%)
```

Click on `index.ts` in HTML report to see exact lines missing coverage.

---

## File-by-File Coverage

### High Coverage (Good!)

```
src/constants     |     100 |      100 |     100 |     100 |
  index.ts         |     100 |      100 |     100 |     100 | ← Perfect!
```

### Needs Improvement

```
src/tools         |       0 |        0 |       0 |       0 |
  vite-plugin...  |       0 |        0 |       0 |       0 | ← No tests!
```

---

## Viewing Coverage After Build

### Local Development

```bash
# Option 1: Run and auto-open
npm run coverage:report

# Option 2: Run, then open manually
npm run test:coverage
start coverage/index.html  # Windows
open coverage/index.html   # Mac
xdg-open coverage/index.html  # Linux
```

### VS Code

1. Install extension: "Coverage Gutters"
2. Run: `npm run test:coverage`
3. Press: `Ctrl+Shift+P` → "Coverage Gutters: Display Coverage"
4. See coverage inline in editor

---

## Coverage Updates

### Real-time Updates

```bash
# Watch mode - coverage updates as you code
npm run test:coverage:watch
```

### After Each Commit

```bash
# Pre-commit hook (if configured)
git commit → runs test:coverage automatically
```

---

## Troubleshooting

### "Coverage too low" Error

```
ERROR: Coverage for lines (65.97%) does not meet global threshold (80%)
```

**Fix**: Either:
1. Add more tests to increase coverage
2. Lower threshold in `vitest.config.ts` (temporarily)

### Coverage Folder Too Large

```bash
# Clean coverage folder
rm -rf coverage
npm run test:coverage
```

### HTML Report Not Opening

```bash
# Windows
start coverage/index.html

# Mac
open coverage/index.html

# Linux
xdg-open coverage/index.html
```

---

## Best Practices

1. ✅ **Run coverage before committing**
   ```bash
   npm run test:coverage
   ```

2. ✅ **Check HTML report regularly**
   - Find gaps in test coverage
   - Prioritize critical paths

3. ✅ **Aim for 80%+ coverage**
   - Especially for critical business logic
   - UI components can be lower

4. ✅ **Don't obsess over 100%**
   - Some code is hard to test (error handlers, edge cases)
   - Focus on meaningful tests, not just numbers

5. ✅ **Review coverage in PRs**
   - Coverage should not decrease
   - New features should include tests

---

## Coverage File Structure

```
coverage/
├── index.html              ← Main HTML report (start here)
├── coverage-summary.json   ← Machine-readable summary
├── lcov.info              ← LCOV format
├── cobertura-coverage.xml ← XML format
└── src/                   ← Per-file HTML reports
    ├── components/
    │   ├── index.html
    │   └── embedded-login-form.tsx.html  ← Click to see line coverage
    ├── services/
    └── utils/
```

---

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run test:coverage` | Run tests with coverage |
| `npm run coverage:report` | Run + open HTML report |
| `npm run test:coverage:watch` | Watch mode with coverage |
| `npm test` | Run tests only (no coverage) |

| File | Purpose |
|------|---------|
| `coverage/index.html` | Interactive HTML report |
| `coverage/coverage-summary.json` | JSON summary |
| `vitest.config.ts` | Coverage configuration |

| Threshold | Minimum |
|-----------|---------|
| Lines | 65% |
| Statements | 65% |
| Functions | 65% |
| Branches | 60% |

---

## Next Steps

1. Run: `npm run coverage:report`
2. Review: HTML report in browser
3. Identify: Red-highlighted uncovered lines
4. Write: Tests for uncovered code
5. Repeat: Until coverage improves

**Goal**: Increase coverage to 80%+ over time while maintaining quality tests.
