# React Trivia Project Guidelines

## Commands
- Development: `npm run dev` (Vite dev server)
- Build: `npm run build` (TS & Vite build)
- Lint: `npm run lint` (ESLint)
- Preview: `npm run preview` (preview production build)
- Storybook: `npm run storybook` (start Storybook on port 6006)
- Build Storybook: `npm run build-storybook` (build static Storybook)
- Test Component: Run Storybook and test via UI (`*.stories.tsx` files)

## Code Style
- Use functional components with TypeScript interfaces
- Props destructuring with default values when appropriate
- Follow component organization in `/components/`:
  - `/common/` - base components (e.g., Card)
  - `/ui/` - specific UI elements (Button, Link, etc.)
  - `/layout/` - structural components (Header, etc.)
- Use TailwindCSS with class composition pattern
- Prefer named exports over default exports
- Organize imports: React, components, utilities, styles
- Use strict TypeScript (noUnusedLocals, noUnusedParameters)
- Follow consistent prop naming conventions
- Format with Prettier (implicit from package.json)

## Error Handling
- Use try/catch for async operations
- Provide meaningful error states in UI components
- Implement loading states for data fetching
- Use proper TypeScript error handling with specific types
- Implement error boundaries for component failures