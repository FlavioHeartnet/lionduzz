# Products API

## Endpoints

### GET /products
- **Description**: Get a list of all products.
- **Response**:
  - `id`: string
  - `name`: string
  - `description`: string
  - `price`: number
  - `type`: string
  - `creatorId`: string

### GET /products/:id
- **Description**: Get a single product by ID.
- **Response**:
  - `id`: string
  - `name`: string
  - `description`: string
  - `price`: number
  - `type`: string
  - `creatorId`: string

### POST /products
- **Description**: Create a new product.
- **Request Body**:
  - `name`: string
  - `description`: string
  - `price`: number
  - `type`: string
- **Response**:
  - `id`: string
  - `name`: string
  - `description`: string
  - `price`: number
  - `type`: string
  - `creatorId`: string

### PUT /products/:id
- **Description**: Update a product.
- **Request Body**:
  - `name`: string
  - `description`: string
  - `price`: number
  - `type`: string
- **Response**:
  - `id`: string
  - `name`: string
  - `description`: string
  - `price`: number
  - `type`: string
  - `creatorId`: string

### DELETE /products/:id
- **Description**: Delete a product.
- **Response**: 204 No Content
