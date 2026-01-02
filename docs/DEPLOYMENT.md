# Deployment Guide

Complete guide for deploying the Colibri Identity Login Widget to CDN and production environments.

---

## Table of Contents

1. [Overview](#overview)
2. [Build Process](#build-process)
3. [CDN Deployment](#cdn-deployment)
4. [Version Management](#version-management)
5. [Rollback Strategies](#rollback-strategies)
6. [CI/CD Integration](#cicd-integration)
7. [Monitoring & Analytics](#monitoring--analytics)
8. [Security](#security)
9. [Performance](#performance)
10. [Troubleshooting](#troubleshooting)

---

## Overview

### Deployment Architecture

```
┌─────────────────┐
│  Source Code    │
│  (GitHub)       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Build Process  │
│  (Vite)         │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Artifacts      │
│  - UMD Bundle   │
│  - CSS File     │
└────────┬────────┘
         │
         ├──────────────────┐
         ▼                  ▼
┌─────────────────┐  ┌─────────────────┐
│  GitHub Pages   │  │  jsDelivr CDN   │
│  (Hosting)      │  │  (Distribution) │
└─────────────────┘  └─────────────────┘
         │                  │
         └────────┬─────────┘
                  ▼
         ┌─────────────────┐
         │  End Users      │
         │  (Websites)     │
         └─────────────────┘
```

### Deployment Targets

| Target | Purpose | Update Strategy |
|--------|---------|----------------|
| **jsDelivr CDN** | Global distribution | Automatic via GitHub tags |
| **GitHub Pages** | Direct hosting | Manual push to gh-pages branch |
| **Custom CDN** | Enterprise control | Upload to S3/CloudFront |

---

## Build Process

### Production Build

```bash
# Clean previous builds
npm run clean

# Run production build
npm run build

# Verify output
ls -lh dist/
```

**Expected Output**:
```
dist/
├── keycloak-widget.umd.js      (~180KB)
├── login-widget.css            (~45KB)
└── index.html                  (test page)
```

### Build Configuration

**vite.config.ts**:
```typescript
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'KeycloakWidget',
      fileName: 'keycloak-widget',
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') 
            return 'login-widget.css';
          return assetInfo.name;
        }
      }
    },
    cssCodeSplit: false,  // Single CSS file
    minify: 'terser',     // Better minification
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.logs
        drop_debugger: true
      }
    }
  }
});
```

### Environment-Specific Builds

**Development**:
```bash
VITE_RENDER_MODE=TEST npm run dev
```

**Production Web Component**:
```bash
VITE_RENDER_MODE=WEBCOMPONENT npm run build
```

**Staging Build**:
```bash
VITE_ENV=staging npm run build
```

---

## CDN Deployment

### Method 1: jsDelivr (Recommended)

**Automatic deployment** via GitHub releases.

#### Step 1: Create Git Tag

```bash
# Create version tag
git tag -a v1.0.0 -m "Release v1.0.0"

# Push tag to GitHub
git push origin v1.0.0
```

#### Step 2: CDN URL Available

URLs automatically available:

**Latest Version**:
```html
<!-- Always latest (use with caution) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/login-widget.css" />
<script src="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@main/dist/keycloak-widget.umd.js"></script>
```

**Specific Version** (Recommended):
```html
<!-- Pinned version (recommended for stability) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@v1.0.0/dist/login-widget.css" />
<script src="https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@v1.0.0/dist/keycloak-widget.umd.js"></script>
```

#### Step 3: Purge Cache (if needed)

```bash
# Purge specific file
curl https://purge.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@v1.0.0/dist/keycloak-widget.umd.js

# Purge all files
curl https://purge.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@v1.0.0/
```

**Benefits**:
- ✅ Global CDN (200+ POPs)
- ✅ Automatic HTTPS
- ✅ Free tier available
- ✅ GitHub integration
- ✅ Version control built-in

---

### Method 2: GitHub Pages

**Manual hosting** on GitHub Pages.

#### Step 1: Build

```bash
npm run build
```

#### Step 2: Deploy to gh-pages Branch

```bash
# Install gh-pages package
npm install -D gh-pages

# Add to package.json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}

# Deploy
npm run deploy
```

#### Step 3: Access Files

```html
<link rel="stylesheet" href="https://manojcolibridev.github.io/cdn-demo/login-widget.css" />
<script src="https://manojcolibridev.github.io/cdn-demo/keycloak-widget.umd.js"></script>
```

**Benefits**:
- ✅ Free hosting
- ✅ Direct GitHub integration
- ✅ Custom domain support

**Limitations**:
- ❌ No global CDN
- ❌ Manual deployment
- ❌ Slower than dedicated CDN

---

### Method 3: AWS S3 + CloudFront

**Enterprise-grade** hosting with full control.

#### Step 1: Build

```bash
npm run build
```

#### Step 2: Upload to S3

```bash
# Install AWS CLI
brew install awscli  # macOS
# or
choco install awscli  # Windows

# Configure AWS
aws configure

# Sync to S3
aws s3 sync dist/ s3://colibri-widgets/cdn-demo/v1.0.0/ \
  --acl public-read \
  --cache-control "public, max-age=31536000"
```

#### Step 3: CloudFront Distribution

```bash
# Create CloudFront distribution
aws cloudfront create-distribution \
  --origin-domain-name colibri-widgets.s3.amazonaws.com \
  --default-root-object index.html
```

#### Step 4: Access Files

```html
<link rel="stylesheet" href="https://d12345abcde.cloudfront.net/cdn-demo/v1.0.0/login-widget.css" />
<script src="https://d12345abcde.cloudfront.net/cdn-demo/v1.0.0/keycloak-widget.umd.js"></script>
```

**Benefits**:
- ✅ Full control
- ✅ Custom domain
- ✅ Advanced caching
- ✅ DDoS protection
- ✅ Analytics

**Costs**:
- First 10M requests/month free
- $0.085/GB data transfer
- CloudFront fees apply

---

### Method 4: Cloudflare CDN

**Fast and affordable** CDN option.

#### Step 1: Upload via Cloudflare Pages

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler pages deploy dist --project-name=colibri-widget
```

#### Step 2: Access Files

```html
<link rel="stylesheet" href="https://colibri-widget.pages.dev/login-widget.css" />
<script src="https://colibri-widget.pages.dev/keycloak-widget.umd.js"></script>
```

**Benefits**:
- ✅ Fast global network
- ✅ Generous free tier
- ✅ Easy deployment
- ✅ Built-in analytics

---

## Version Management

### Semantic Versioning

Follow **SemVer** (MAJOR.MINOR.PATCH):

```
v1.2.3
│ │ └─── PATCH: Bug fixes, minor changes (1.2.3 → 1.2.4)
│ └───── MINOR: New features, backward compatible (1.2.3 → 1.3.0)
└─────── MAJOR: Breaking changes (1.2.3 → 2.0.0)
```

### Creating a Release

#### Complete Release Workflow

```bash
# 1. Ensure clean state
git checkout main
git pull origin main

# 2. Validate build
npm run lint
npm run build
npm run dev  # Manual test

# 3. Update version in package.json
npm version patch   # 1.0.0 → 1.0.1
# OR
npm version minor   # 1.0.0 → 1.1.0
# OR
npm version major   # 1.0.0 → 2.0.0

# 4. Push changes and tags
git push origin main
git push --tags

# 5. Create GitHub release (triggers CDN deployment)
gh release create v1.2.3 \
  --title "v1.2.3 - Feature Description" \
  --notes "Release notes here"

# 6. Verify CDN (wait 5-10 minutes)
curl -I https://cdn.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@v1.2.3/dist/keycloak-widget.umd.js
```

### Version Tagging Best Practices

**Tag Format**: Always use `v` prefix (e.g., `v1.2.3`)

```bash
# Create annotated tag (recommended)
git tag -a v1.2.3 -m "Release v1.2.3: Add authority auto-detection"

# Lightweight tag (not recommended)
git tag v1.2.3

# Push specific tag
git push origin v1.2.3

# Push all tags
git push --tags
```

### jsDelivr CDN Integration

### Semantic Versioning

Follow [semver](https://semver.org/):

```
vMAJOR.MINOR.PATCH

v1.0.0
│ │ │
│ │ └─── Patch: Bug fixes (backwards compatible)
│ └───── Minor: New features (backwards compatible)
└─────── Major: Breaking changes
```

**Examples**:
- `v1.0.0` → `v1.0.1`: Bug fix (safe to update)
- `v1.0.1` → `v1.1.0`: New feature (safe to update)
- `v1.1.0` → `v2.0.0`: Breaking change (requires testing)

### Release Process

#### 1. Update Version

**package.json**:
```json
{
  "version": "1.1.0"
}
```

#### 2. Update Changelog

**CHANGELOG.md**:
```markdown
## [1.1.0] - 2025-12-29

### Added
- Dark theme support
- New `theme` attribute
- Custom events (login-success, login-error)

### Changed
- Improved error messages
- Faster bundle size

### Fixed
- Modal z-index conflict
- IE11 polyfill issue
```

#### 3. Commit Changes

```bash
git add package.json CHANGELOG.md
git commit -m "chore: bump version to 1.1.0"
```

#### 4. Create Tag

```bash
git tag -a v1.1.0 -m "Release v1.1.0

- Dark theme support
- Custom events
- Bug fixes"

git push origin main
git push origin v1.1.0
```

#### 5. GitHub Release

Create release on GitHub:
1. Go to Releases
2. Click "Draft a new release"
3. Select tag `v1.1.0`
4. Add release notes
5. Publish release

---

## Rollback Strategies

### CDN Rollback

#### Strategy 1: Version Pinning

Users on specific versions unaffected:

```html
<!-- v1.0.0 users stay on v1.0.0 -->
<script src="...@v1.0.0/keycloak-widget.umd.js"></script>

<!-- v1.1.0 users can rollback by changing URL -->
<script src="...@v1.0.0/keycloak-widget.umd.js"></script>
```

#### Strategy 2: Latest Tag Redirect

```bash
# Retag latest to previous version
git tag -f latest v1.0.0
git push -f origin latest
```

#### Strategy 3: CDN Cache Purge

```bash
# Purge broken version
curl -X POST https://purge.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@v1.1.0/

# Users will get previous cached version until cache expires
```

### S3/CloudFront Rollback

```bash
# Copy old version to current
aws s3 cp \
  s3://colibri-widgets/cdn-demo/v1.0.0/ \
  s3://colibri-widgets/cdn-demo/latest/ \
  --recursive

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id E123456 \
  --paths "/*"
```

### Emergency Rollback Plan

**Pre-Rollback Checklist**:
- [ ] Identify broken version
- [ ] Confirm rollback target version
- [ ] Notify stakeholders
- [ ] Document issue

**Rollback Steps**:
1. Update CDN/S3 to previous version
2. Purge caches
3. Verify rollback successful
4. Post-mortem analysis

---

## CI/CD Integration

### GitHub Actions

**`.github/workflows/deploy.yml`**:

```yaml
name: Deploy Widget

on:
  push:
    tags:
      - 'v*'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          VITE_RENDER_MODE: WEBCOMPONENT
      
      - name: Run Tests
        run: npm test
      
      - name: Upload to S3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --acl public-read --cache-control "max-age=31536000"
        env:
          AWS_S3_BUCKET: colibri-widgets
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          SOURCE_DIR: 'dist'
          DEST_DIR: 'cdn-demo/${{ github.ref_name }}'
      
      - name: Invalidate CloudFront
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      
      - name: Create Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          draft: false
          prerelease: false
```

### GitLab CI

**`.gitlab-ci.yml`**:

```yaml
stages:
  - build
  - deploy

build:
  stage: build
  image: node:18
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/
    expire_in: 1 hour

deploy:
  stage: deploy
  image: amazon/aws-cli
  only:
    - tags
  script:
    - aws s3 sync dist/ s3://colibri-widgets/cdn-demo/$CI_COMMIT_TAG/
    - aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*"
```

---

## Monitoring & Analytics

### CDN Monitoring

**jsDelivr Stats**:
```
https://www.jsdelivr.com/package/gh/ManojColibriDEV/cdn-demo
```

**Metrics**:
- Total requests
- Bandwidth usage
- Geographic distribution
- Hit rate

### Error Tracking

**Sentry Integration**:

```typescript
// In main.tsx
import * as Sentry from '@sentry/react';

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: 'YOUR_SENTRY_DSN',
    environment: 'production',
    release: 'keycloak-widget@1.0.0'
  });
}
```

### Usage Analytics

**Google Analytics**:

```html
<!-- In widget -->
<script>
  gtag('event', 'widget_loaded', {
    'widget_version': '1.0.0',
    'page_path': window.location.pathname
  });
</script>
```

---

## Security

### Content Security Policy

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' https://cdn.jsdelivr.net;
  style-src 'self' https://cdn.jsdelivr.net;
  connect-src 'self' https://dev-idb.colibrirealestate.com;
  img-src 'self' data:;
  font-src 'self';
">
```

### Subresource Integrity (SRI)

**Generate hash**:
```bash
openssl dgst -sha384 -binary dist/keycloak-widget.umd.js | openssl base64 -A
```

**Use in HTML**:
```html
<script 
  src="https://cdn.../keycloak-widget.umd.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"
></script>
```

### HTTPS Only

```bash
# Enforce HTTPS in S3 bucket policy
{
  "Condition": {
    "Bool": {
      "aws:SecureTransport": "false"
    }
  },
  "Effect": "Deny"
}
```

---

## Performance

### Bundle Size Optimization

**Current Sizes**:
- JavaScript: ~180KB (minified)
- CSS: ~45KB (minified)
- Total: ~225KB

**Optimization Techniques**:
- ✅ Minification
- ✅ Tree-shaking
- ✅ Code splitting (future)
- ✅ Lazy loading

### Caching Strategy

**Cache Headers**:
```
Cache-Control: public, max-age=31536000, immutable
```

**Versioned URLs**:
```
/v1.0.0/keycloak-widget.umd.js  # Cached forever
/latest/keycloak-widget.umd.js   # Short cache (1 hour)
```

### Compression

**Enable Gzip/Brotli**:
```bash
# Build with compression
npm run build

# Verify compression
curl -H "Accept-Encoding: gzip" -I https://cdn.../widget.js
```

---

## Troubleshooting

### Build Failures

**Error**: `Module not found`
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error**: `Out of memory`
```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Deployment Failures

**S3 Upload Failed**:
```bash
# Check AWS credentials
aws sts get-caller-identity

# Verify bucket permissions
aws s3 ls s3://colibri-widgets/
```

**CDN Not Updating**:
```bash
# Purge cache
curl https://purge.jsdelivr.net/gh/ManojColibriDEV/cdn-demo@v1.0.0/

# Check version
curl -I https://cdn.../keycloak-widget.umd.js
```

---

## Checklist

### Pre-Deployment

- [ ] Update version in package.json
- [ ] Update CHANGELOG.md
- [ ] Run `npm test`
- [ ] Run `npm run build`
- [ ] Test built files locally
- [ ] Review bundle size
- [ ] Check for console errors

### Deployment

- [ ] Commit and push changes
- [ ] Create and push git tag
- [ ] Verify CDN updated
- [ ] Test from CDN URL
- [ ] Create GitHub release
- [ ] Update documentation

### Post-Deployment

- [ ] Monitor error rates
- [ ] Check CDN analytics
- [ ] Verify user reports
- [ ] Update changelog
- [ ] Notify stakeholders

---

## Resources

- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [jsDelivr Docs](https://www.jsdelivr.com/documentation)
- [AWS S3 Guide](https://docs.aws.amazon.com/s3/)
- [CloudFront Guide](https://docs.aws.amazon.com/cloudfront/)

---

**Last Updated**: December 29, 2025
