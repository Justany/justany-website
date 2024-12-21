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
- Automatic preview deployments
- Production deployments with release notes

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

The site is automatically deployed to Vercel through GitHub Actions:
- Production deployments on push to `master` and tags
- Preview deployments for all other branches and pull requests
- Automatic GitHub releases for tagged versions

## Environment Variables

Required environment variables:
- `VERCEL_TOKEN` - Vercel API token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID

## CI/CD

This project uses GitHub Actions for continuous integration and deployment:
- Automated testing and linting
- Preview deployments for pull requests
- Production deployments for master branch
- Automatic releases for tags
