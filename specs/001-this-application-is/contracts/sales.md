# Sales API

## Endpoints

### GET /sales
- **Description**: Get a list of all sales for the authenticated creator.
- **Response**:
  - `id`: string
  - `productId`: string
  - `customerId`: string
  - `price`: number
  - `createdAt`: timestamp

### POST /sales
- **Description**: Create a new sale.
- **Request Body**:
  - `productId`: string
- **Response**:
  - `id`: string
  - `productId`: string
  - `customerId`: string
  - `price`: number
  - `createdAt`: timestamp
