# template-nextjs-serverless

template for nextjs using serverless framework v3

static pages(cloudfront + s3)

**This repository is a template. Do not store any real secrets or credentials in the codebase. All sensitive information (API keys, tokens, credentials, etc.) must be managed via environment variables or secret managers.**

## requires

### softwares

```
"node": ">=22.x"
```

## release command

init: `git flow init`

```
CURRENT_VERSION=1.0.0
git flow release start "${CURRENT_VERSION}"
git flow release finish "${CURRENT_VERSION}"
git push origin main develop
git push --tags
```
