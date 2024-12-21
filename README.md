# Justany Website

Personal website built with Vue 3, Vite, and TypeScript.

## Features

- Vue 3 with Composition API
- TypeScript support
- Vite for fast development and building
- Tailwind CSS for styling
- Vercel deployment with GitHub Actions
- Image optimization
- Analytics and Speed Insights

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Deployment

The site is automatically deployed to Vercel through GitHub Actions:
- Production deployments on push to `master`
- Preview deployments for all other branches

## Environment Variables

Required environment variables:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
