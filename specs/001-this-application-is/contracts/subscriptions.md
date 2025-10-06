# Subscriptions API

## Endpoints

### GET /subscriptions
- **Description**: Get a list of all subscriptions for the authenticated creator or customer.
- **Response**:
  - `id`: string
  - `creatorId`: string
  - `customerId`: string
  - `status`: string
  - `createdAt`: timestamp

### POST /subscriptions
- **Description**: Create a new subscription.
- **Request Body**:
  - `creatorId`: string
- **Response**:
  - `id`: string
  - `creatorId`: string
  - `customerId`: string
  - `status`: string
  - `createdAt`: timestamp

### DELETE /subscriptions/:id
- **Description**: Cancel a subscription.
- **Response**: 204 No Content
