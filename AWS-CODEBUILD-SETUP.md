# AWS CodeBuild Setup Guide

This guide explains how to set up AWS CodeBuild/CodePipeline for automated deployment of the Keycloak Widget.

---

## Prerequisites

1. **AWS Account** with permissions for:
   - CodeBuild
   - CodePipeline
   - S3
   - CloudFront
   - Systems Manager (Parameter Store)
   - IAM

2. **S3 Buckets** for each environment:
   - `colibri-widget-dev`
   - `colibri-widget-test`
   - `colibri-widget-stage`
   - `colibri-widget-prod`

3. **CloudFront Distribution** (optional but recommended)

---

## Step 1: Create S3 Buckets

```bash
# Create buckets for each environment
aws s3 mb s3://colibri-widget-dev --region us-east-1
aws s3 mb s3://colibri-widget-test --region us-east-1
aws s3 mb s3://colibri-widget-stage --region us-east-1
aws s3 mb s3://colibri-widget-prod --region us-east-1

# Enable public read access (for CDN)
aws s3api put-bucket-policy --bucket colibri-widget-prod --policy file://s3-bucket-policy.json
```

**s3-bucket-policy.json:**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::colibri-widget-prod/auth/*"
    }
  ]
}
```

---

## Step 2: Store Parameters in AWS Systems Manager

Store sensitive configuration in Parameter Store:

```bash
# S3 bucket names
aws ssm put-parameter --name "/colibri/widget/dev/s3-bucket" --value "colibri-widget-dev" --type "String"
aws ssm put-parameter --name "/colibri/widget/test/s3-bucket" --value "colibri-widget-test" --type "String"
aws ssm put-parameter --name "/colibri/widget/stage/s3-bucket" --value "colibri-widget-stage" --type "String"
aws ssm put-parameter --name "/colibri/widget/prod/s3-bucket" --value "colibri-widget-prod" --type "String"

# CloudFront distribution ID (if using)
aws ssm put-parameter --name "/colibri/widget/cloudfront-id" --value "E1234567890ABC" --type "String"
```

---

## Step 3: Create IAM Role for CodeBuild

**Trust Policy (codebuild-trust-policy.json):**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "codebuild.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

**Permissions Policy (codebuild-permissions.json):**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:PutObjectAcl"
      ],
      "Resource": [
        "arn:aws:s3:::colibri-widget-*/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "ssm:GetParameter",
        "ssm:GetParameters"
      ],
      "Resource": "arn:aws:ssm:*:*:parameter/colibri/widget/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

**Create the role:**
```bash
# Create role
aws iam create-role \
  --role-name ColibriWidgetCodeBuildRole \
  --assume-role-policy-document file://codebuild-trust-policy.json

# Attach permissions
aws iam put-role-policy \
  --role-name ColibriWidgetCodeBuildRole \
  --policy-name ColibriWidgetBuildPermissions \
  --policy-document file://codebuild-permissions.json
```

---

## Step 4: Create CodeBuild Project

**Via AWS Console:**

1. Go to **AWS CodeBuild** → **Create project**

2. **Project configuration:**
   - **Project name**: `colibri-identity-widget`
   - **Description**: `Build and deploy Keycloak identity widget`

3. **Source:**
   - **Source provider**: GitHub
   - **Repository**: Your GitHub repo
   - **Branch filter**: `^refs/heads/(main|staging|test|dev)$`

4. **Environment:**
   - **Environment image**: Managed image
   - **Operating system**: Amazon Linux 2
   - **Runtime**: Standard
   - **Image**: `aws/codebuild/standard:7.0`
   - **Service role**: `ColibriWidgetCodeBuildRole`

5. **Buildspec:**
   - **Build specifications**: Use a buildspec file
   - **Buildspec name**: `buildspec.yml`

6. **Logs:**
   - Enable CloudWatch logs

**Via AWS CLI:**
```bash
aws codebuild create-project --cli-input-json file://codebuild-project.json
```

**codebuild-project.json:**
```json
{
  "name": "colibri-identity-widget",
  "source": {
    "type": "GITHUB",
    "location": "https://github.com/your-org/Colibri.Identity.Widget.git",
    "buildspec": "buildspec.yml"
  },
  "artifacts": {
    "type": "NO_ARTIFACTS"
  },
  "environment": {
    "type": "LINUX_CONTAINER",
    "image": "aws/codebuild/standard:7.0",
    "computeType": "BUILD_GENERAL1_SMALL",
    "environmentVariables": []
  },
  "serviceRole": "arn:aws:iam::ACCOUNT_ID:role/ColibriWidgetCodeBuildRole"
}
```

---

## Step 5: Set Up Branch-Based Deployment

The buildspec.yml automatically deploys to different environments based on branch:

| Branch | Environment | S3 Path |
|--------|-------------|---------|
| `main` | Production | `s3://colibri-widget-prod/auth/` |
| `staging` | Staging | `s3://colibri-widget-stage/auth/` |
| `test` | Test | `s3://colibri-widget-test/auth/` |
| Other | Development | `s3://colibri-widget-dev/auth/` |

**Workflow:**
1. Push to `dev` branch → deploys to dev environment
2. Push to `test` branch → deploys to test environment
3. Push to `staging` branch → deploys to staging environment
4. Push to `main` branch → deploys to production

---

## Step 6: Set Up CodePipeline (Optional)

For automated CI/CD with GitHub webhooks:

1. Go to **AWS CodePipeline** → **Create pipeline**

2. **Pipeline settings:**
   - **Pipeline name**: `colibri-widget-pipeline`
   - **Service role**: Create new role

3. **Source stage:**
   - **Source provider**: GitHub (Version 2)
   - **Connection**: Create new GitHub connection
   - **Repository**: Your repo
   - **Branch**: `main` (create separate pipelines for other branches)

4. **Build stage:**
   - **Build provider**: AWS CodeBuild
   - **Project name**: `colibri-identity-widget`

5. **Deploy stage:** Skip (deployment handled in buildspec.yml)

---

## Step 7: Configure Webhooks

Enable automatic builds on push:

```bash
aws codebuild create-webhook \
  --project-name colibri-identity-widget \
  --filter-groups '[[{"type":"EVENT","pattern":"PUSH"},{"type":"HEAD_REF","pattern":"^refs/heads/(main|staging|test|dev)$"}]]'
```

---

## Testing the Pipeline

1. **Trigger a build:**
   ```bash
   # Push to trigger build
   git add .
   git commit -m "Test deployment"
   git push origin dev
   ```

2. **Monitor build:**
   - Go to AWS CodeBuild → Build history
   - Check logs in real-time

3. **Verify deployment:**
   ```bash
   # Check S3
   aws s3 ls s3://colibri-widget-dev/auth/ --recursive
   
   # Test CDN URL
   curl https://cdn.bloomelements.com/auth/dev/keycloak-widget.umd.js -I
   ```

---

## CloudFront Setup (Optional)

If using CloudFront CDN:

1. **Create distribution:**
   - Origin: S3 bucket (`colibri-widget-prod`)
   - CNAME: `cdn.bloomelements.com`
   - SSL Certificate: Use ACM certificate

2. **Configure caching:**
   - Default TTL: 300 seconds (for `/auth/latest/*`)
   - Max TTL: 31536000 seconds (for `/auth/v*/*`)

3. **Update DNS:**
   - Add CNAME: `cdn.bloomelements.com` → CloudFront domain

---

## Monitoring & Alerts

Set up CloudWatch alarms:

```bash
# Build failure alarm
aws cloudwatch put-metric-alarm \
  --alarm-name colibri-widget-build-failures \
  --alarm-description "Alert on CodeBuild failures" \
  --metric-name FailedBuilds \
  --namespace AWS/CodeBuild \
  --statistic Sum \
  --period 300 \
  --threshold 1 \
  --comparison-operator GreaterThanThreshold
```

---

## Cost Estimation

**Monthly costs (approximate):**
- CodeBuild: ~$5-10 (100 builds/month)
- S3 Storage: ~$1-5 (1-10GB)
- CloudFront: ~$10-50 (depends on traffic)
- **Total**: ~$16-65/month

---

## Troubleshooting

### Build fails with "npm ci" error
- Check Node.js version in buildspec.yml matches package.json
- Try `npm install` instead of `npm ci`

### S3 upload fails
- Verify IAM role has `s3:PutObject` permission
- Check bucket name in Parameter Store

### CloudFront invalidation fails
- Verify distribution ID is correct
- Check IAM role has `cloudfront:CreateInvalidation` permission

---

## Alternative: GitHub Actions

If you prefer GitHub Actions instead of AWS CodeBuild, see `.github/workflows/deploy.yml` example in the repository.
