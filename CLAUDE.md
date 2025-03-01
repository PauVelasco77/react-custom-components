# CLAUDE.md - Guidelines for this codebase

## Build, Lint & Test Commands
- `npm run lint` or `yarn lint` - Run ESLint on all files
- `npm run test` or `yarn test` - Run all tests with Vitest
- `npm run test src/components/ComponentName/componentName.test.tsx` - Run specific test file
- `npm run coverage` or `yarn coverage` - Generate test coverage report
- `npm run storybook` or `yarn storybook` - Start Storybook dev server on port 6006
- `npm run build-storybook` or `yarn build-storybook` - Build Storybook for production

## Code Style Guidelines
- **Component Structure**: Create components in dedicated folders with component.tsx, component.css, component.types.ts, component.stories.tsx, and component.test.tsx files
- **TypeScript**: Use strict typing, interfaces for props, and ComponentPropsWithRef for extending HTML elements
- **Naming**: PascalCase for components, camelCase for variables, kebab-case for CSS classes
- **Testing**: Use vitest with @testing-library/react, Following Given/When/Then pattern in describe/test blocks, compose stories for testing
- **CSS**: Component-scoped CSS files with BEM-like naming convention, use classnames utility for conditional styling
- **Error Handling**: Form validation with detailed error messages, aria attributes for accessibility
- **React Patterns**: Functional components with hooks, props destructuring with default values
- **Accessibility**: Include ARIA attributes and explicit role attributes where needed