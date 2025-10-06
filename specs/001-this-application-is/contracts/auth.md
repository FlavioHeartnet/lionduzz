# Auth API

## Endpoints

### POST /auth/provider
- **Description**: Authenticate a user with a provider (e.g., Google).
- **Request Body**:
  - `idToken`: string
- **Response**:
  - `accessToken`: string

### POST /auth/sync
- **Description**: Synchronize a user from Firebase to the PostgreSQL database.
- **Request Body**:
  - `idToken`: string
- **Response**:
  - `id`: string
  - `email`: string
  - `name`: string