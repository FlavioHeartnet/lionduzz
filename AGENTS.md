# Repository Guidelines

## Project Structure & Module Organization
The codebase is split between `backend/` (NestJS) and `frontend/` (Vite + React). Backend modules live in `backend/src`, with HTTP handlers in `controllers/`, reusable logic in `services/`, data contracts in `models/`, and guards/filters centralizing cross-cutting concerns. API tests live in `backend/test`. The React app is under `frontend/src`, organized by feature: visual building blocks in `components/`, route-level views in `pages/`, reusable hooks in `hooks/`, and shared utilities in `lib/`. Product documentation and specs are maintained in `specs/`—read the relevant plan before large changes.

## Build, Test & Development Commands
Run `npm install` inside both `backend` and `frontend` before first use. Key workflows:
- `cd backend && npm run start:dev`: hot-reloads the NestJS server.
- `cd backend && npm run build`: compiles TypeScript to `dist/` for production.
- `cd frontend && npm run dev`: launches the Vite dev server on localhost.
- `cd frontend && npm run build`: type-checks then outputs static assets to `dist/`.
Use `npm run lint` in each package to catch style issues early.

## Coding Style & Naming Conventions
TypeScript is the default language. Prettier enforces two-space indentation; run the backend formatter with `npm run format`. ESLint configurations in each package enforce import ordering and no implicit any. Match existing naming: Nest controllers `*.controller.ts`, providers `*.service.ts`, DTOs in `models/` as `PascalCase`. React components and hooks live in `PascalCase.tsx` and `useName.ts` files respectively. Co-locate component styles in `.css` files adjacent to their component when possible.

## Testing Guidelines
Backend unit tests follow Jest’s `.spec.ts` convention; run `npm run test` locally and `npm run test:cov` before release to ensure coverage reports in `backend/coverage/`. End-to-end suites use `npm run test:e2e` with the config in `test/jest-e2e.json`. Frontend integration flows follow Cypress syntax in `frontend/tests/integration/`; start the dev server, then execute `npx cypress run --spec frontend/tests/integration/test_auth.js`. Record any new scenarios using the same folder and descriptive `snake_case` filenames.

## Commit & Pull Request Guidelines
Recent history favors short, lowercase, imperative commits (e.g., `home page`, `add new components`); continue that style and group related changes. Each PR should describe the intent, list testing evidence, and link to the relevant spec entry. Include screenshots or GIFs for UI-facing changes and note any migrations or env updates. Confirm formatters and tests pass before requesting review.

## Security & Configuration Tips
Environment files are intentionally untracked—store secrets in local `.env` files under each app and document required keys in the PR. Never commit API keys or Stripe credentials; sanitize logs before sharing.
