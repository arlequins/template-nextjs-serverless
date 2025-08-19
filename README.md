# template-nextjs-serverless

template for nextjs using serverless framework v3

static pages(cloudfront + s3)

**This repository is a template. Do not store any real secrets or credentials in the codebase. All sensitive information (API keys, tokens, credentials, etc.) must be managed via environment variables or secret managers.**

## requires

### softwares

```
"node": ">=22.x"
```

## background knowledges

- [Next.js](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
  - [components](https://ui.shadcn.com/docs/components)
- [Radix UI](https://www.radix-ui.com/)
- [v0.app](https://v0.app/)

### ui

- init: `npx shadcn@latest init`

#### add components

```
npx shadcn@latest add button
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
