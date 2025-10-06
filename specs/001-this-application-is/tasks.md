# Tasks: Digital Product Marketplace

**Input**: Design documents from `/specs/001-this-application-is/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Web app**: `backend/src/`, `frontend/src/`

## Phase 3.1: Setup
- [X] T001 [P] **Backend**: Initialize NestJS project in `backend/`.
- [X] T002 [P] **Frontend**: Initialize Vite + React project in `frontend/`.
- [X] T003 [P] **Backend**: Install dependencies: `@nestjs/stripe`, `firebase-admin`, `pg`.
- [X] T004 [P] **Frontend**: Install dependencies: `firebase`, `stripe-js`, `react-router-dom`.
- [X] T005 [P] **Backend**: Configure linting and formatting tools.
- [X] T006 [P] **Frontend**: Configure linting and formatting tools.

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [X] T007 [P] **Backend**: Contract test POST /auth/provider in `backend/tests/contract/test_auth_provider.py`.
- [X] T008 [P] **Backend**: Contract test POST /auth/sync in `backend/tests/contract/test_auth_sync.py`.
- [X] T009 [P] **Backend**: Contract test GET /products in `backend/tests/contract/test_products_get.py`.
- [X] T010 [P] **Backend**: Contract test POST /products in `backend/tests/contract/test_products_post.py`.
- [X] T011 [P] **Backend**: Contract test GET /sales in `backend/tests/contract/test_sales_get.py`.
- [X] T012 [P] **Backend**: Contract test POST /sales in `backend/tests/contract/test_sales_post.py`.
- [X] T013 [P] **Backend**: Contract test GET /subscriptions in `backend/tests/contract/test_subscriptions_get.py`.
- [X] T014 [P] **Backend**: Contract test POST /subscriptions in `backend/tests/contract/test_subscriptions_post.py`.
- [X] T015 [P] **Frontend**: Integration test user registration and login in `frontend/tests/integration/test_auth.js`.

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [X] T016 [P] **Backend**: User model in `backend/src/models/user.entity.ts`.
- [X] T017 [P] **Backend**: Product model in `backend/src/models/product.entity.ts`.
- [X] T018 [P] **Backend**: Sale model in `backend/src/models/sale.entity.ts`.
- [X] T019 [P] **Backend**: Subscription model in `backend/src/models/subscription.entity.ts`.
- [X] T020 [P] **Backend**: AuthService in `backend/src/services/auth.service.ts`.
- [X] T021 [P] **Backend**: ProductService in `backend/src/services/product.service.ts`.
- [X] T022 [P] **Backend**: SaleService in `backend/src/services/sale.service.ts`.
- [X] T023 [P] **Backend**: SubscriptionService in `backend/src/services/subscription.service.ts`.
- [X] T024 **Backend**: Auth controller in `backend/src/controllers/auth.controller.ts`.
- [X] T025 **Backend**: Product controller in `backend/src/controllers/product.controller.ts`.
- [X] T026 **Backend**: Sale controller in `backend/src/controllers/sale.controller.ts`.
- [X] T027 **Backend**: Subscription controller in `backend/src/controllers/subscription.controller.ts`.
- [X] T028 [P] **Frontend**: Authentication views (Login, Register, Forgot Password) in `frontend/src/pages/auth`.
- [X] T029 [P] **Frontend**: Product views (List, Detail, Create, Edit) in `frontend/src/pages/products`.
- [X] T030 [P] **Frontend**: Sales report view in `frontend/src/pages/sales`.
- [X] T031 [P] **Frontend**: Subscription management view in `frontend/src/pages/subscriptions`.

## Phase 3.4: Integration
- [X] T032 **Backend**: Connect services to the database.
- [X] T033 **Backend**: Implement Firebase authentication guard.
- [X] T034 **Backend**: Implement Stripe integration for payments.
- [X] T035 **Backend**: Implement Mux integration for video uploads.
- [X] T036 **Frontend**: Connect views to backend APIs.

## Phase 3.5: Polish
- [X] T037 [P] **Backend**: Unit tests for services.
- [X] T038 [P] **Frontend**: Unit tests for components.
- [X] T039 [P] **Backend**: Add logging and error handling.
- [X] T040 [P] **Frontend**: Implement light and dark themes.
- [X] T041 [P] **Frontend**: Ensure mobile responsiveness.
- [X] T042 [P] **Docs**: Update `README.md` with setup and usage instructions.
- [X] T043 [P] **Frontend**: Setup Tailwind CSS.
- [X] T044 [P] **Frontend**: Redesign UI with shadcn/ui.
- [ ] T045 [P] **Frontend**: Redesign Login Page UI.

## Dependencies
- T001-T006 must be completed before all other tasks.
- T007-T015 must be completed before T016-T031.
- T016-T019 must be completed before T020-T023.
- T020-T023 must be completed before T024-T027.
- T032-T036 must be completed before T037-T042.
