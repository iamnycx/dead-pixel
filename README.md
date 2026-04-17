# dead-pixel

A modern pixel-perfect library featuring animated pixel icons and a Next.js web app. Built for speed, scalability, and developer experience.

## Monorepo Structure

- **apps/web**: Next.js application showcasing the icons and UI components.
- **packages/icons**: Animated pixel icon library for React.
- **packages/typescript-config**: Shared TypeScript configurations.
- **packages/eslint-config**: Shared ESLint configurations.

## Features

- TurboRepo for fast monorepo builds
- Animated pixel icon library (React)
- Next.js 14 app with modern UI
- Shared TypeScript and ESLint configs
- Prettier, ESLint, Husky, and lint-staged for code quality

## Getting Started

1. **Install dependencies** (requires Node.js ≥18 and Bun):
   ```sh
   bun install
   ```
2. **Run the development server:**
   ```sh
   bun run dev
   ```
   Or use npm/yarn/pnpm as preferred.
3. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000) to view the web app.

## Scripts

- `dev` – Start all apps in development mode
- `build` – Build all packages and apps
- `lint` – Lint all code
- `format` – Format codebase with Prettier
- `check-types` – Type-check all packages

## Contributing

1. Fork the repo and create your branch.
2. Make changes and add tests if needed.
3. Run lint and tests before submitting a PR.

## License

MIT

---

Made with ❤️ by [nycx](https://nycx.is-a.dev/)
