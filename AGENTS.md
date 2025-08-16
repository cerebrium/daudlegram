# Agent Guidelines for daudlegram

## Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run lint` - Run ESLint (always run after code changes)
- No test framework configured

## Code Style
- TypeScript with strict mode enabled
- Use absolute imports with `@/` prefix for src/ directory
- Follow Next.js app router conventions (components in src/app/)
- Use TailwindCSS for styling with utility classes
- Import types with `import type { Type } from "module"`
- Use kebab-case for file names, PascalCase for components
- Prefer named exports for components, default exports for pages
- Use double quotes for strings, semicolons required
- Follow ESLint config (extends next/core-web-vitals, next/typescript)

## Patterns
- React Server Components by default (use "use client" when needed)
- Use Next.js Image component for images
- Use Metadata API for SEO in layout.tsx
- Font optimization with next/font/google
- Maintain responsive design with Tailwind breakpoints (sm:, md:, etc.)