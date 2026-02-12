# Test Coverage - Quick Reference

## 🎯 Current Coverage Status

| Metric | Coverage | Target | Status |
|--------|----------|--------|--------|
| **Lines** | 66% | 65% | ✅ PASS |
| **Statements** | 66% | 65% | ✅ PASS |
| **Functions** | 66% | 65% | ✅ PASS |
| **Branches** | 63% | 60% | ✅ PASS |

## 📊 View Coverage Report

### Option 1: Quick Open
```bash
npm run coverage:report
```
- Runs tests
- Generates coverage
- Opens HTML report automatically

### Option 2: View Existing Report
```bash
# Open coverage/index.html in browser
start coverage/index.html  # Windows
open coverage/index.html   # Mac
```

## 📁 Coverage Reports Location

```
coverage/
├── index.html              ← Open this in browser!
├── coverage-summary.json   ← JSON for CI/CD
├── lcov.info              ← For external tools
└── src/                   ← Per-file reports
```

## 🔍 Understanding the HTML Report

1. **Open** `coverage/index.html` in browser
2. **Click** on any file to see line-by-line coverage
3. **Look for**:
   - 🟢 **Green lines** = Tested ✅
   - 🔴 **Red lines** = NOT tested ❌
   - **Numbers in margin** = Times executed

## 📈 Coverage by Module

| Module | Lines | Branches | Functions | Statements |
|--------|-------|----------|-----------|------------|
| **src/common/ui** | 81% | 79% | 80% | 81% |
| **src/components** | 76% | 67% | 76% | 76% |
| **src/constants** | 100% | 100% | 100% | 100% |
| **src/utils** | 84% | 83% | 80% | 84% |
| **src/services** | 64% | 70% | 37% | 64% |
| **src/functions** | 54% | 64% | 69% | 54% |
| **src/tools** | 0% | 0% | 0% | 0% |

## 🎯 Areas Needing Tests

### ❌ Zero Coverage
- `src/tools/vite-plugin-css-injector.ts` (0%)
- `src/types/index.ts` (0%)

### ⚠️ Low Coverage (<60%)
- `src/functions/index.ts` (54%)
- `src/services/index.ts` (37% function coverage)

## 🚀 Quick Commands

| Command | What It Does |
|---------|-------------|
| `npm run test:coverage` | Run tests + generate coverage |
| `npm run coverage:report` | Run tests + open HTML report |
| `npm run test:coverage:watch` | Watch mode with live coverage |
| `npm run build` | Full build (includes coverage check) |

## 📋 CI/CD Integration

Coverage runs automatically on every build:

```yaml
# buildspec.yml
- npm run test:coverage  # Runs during build
- cat coverage/coverage-summary.json  # Shows in logs
```

Coverage reports saved as build artifacts in CodeBuild.

## ✅ Coverage Checklist

Before committing:

- [ ] Run `npm run test:coverage`
- [ ] Check coverage didn't decrease
- [ ] Review red lines in HTML report
- [ ] Add tests for critical uncovered code
- [ ] Ensure build passes (coverage > thresholds)

## 🎓 Learn More

Full documentation: [docs/COVERAGE.md](./COVERAGE.md)

---

**Last Updated**: Auto-generated on every test run
**Coverage Tool**: Vitest with V8 provider
**Report Format**: HTML, JSON, LCOV, Cobertura
