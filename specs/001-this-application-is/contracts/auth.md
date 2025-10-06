# Auth API

## Endpoints

### POST /auth/register
- **Description**: Register a new user.
- **Request Body**:
  - `email`: string
  - `password`: string
  - `name`: string
- **Response**: 
  - `id`: string
  - `email`: string
  - `name`: string

### POST /auth/login
- **Description**: Log in a user.
- **Request Body**:
  - `email`: string
  - `password`: string
- **Response**:
  - `accessToken`: string

### POST /auth/google
- **Description**: Log in a user with Google.
- **Request Body**:
  - `idToken`: string
- **Response**:
  - `accessToken`: string
