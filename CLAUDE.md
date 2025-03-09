# React Trivia Project Guidelines

## Commands
- Development: `npm run dev` (Vite dev server)
- Build: `npm run build` (TS & Vite build)
- Lint: `npm run lint` (ESLint)
- Preview: `npm run preview` (preview production build)

## Code Style
- Use functional components with TypeScript interfaces
- Props destructuring with default values when appropriate
- Follow component organization:
  - `/components/common/` - base reusable components
  - `/components/ui/` - specific UI elements
  - `/components/layout/` - structural components
- Use TailwindCSS with class composition pattern
- Prefer named exports over default exports
- Explicitly import React and hooks
- Organize imports by category (React, components, utilities)
- Use strict TypeScript with explicit typing

## Error Handling
- Use try/catch for async operations
- Provide meaningful error states in UI components
- Implement loading states for data fetching operations