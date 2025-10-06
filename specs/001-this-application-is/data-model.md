# Data Model: Digital Product Marketplace

## Entities

### User
- **id**: string (UUID)
- **email**: string (unique)
- **password**: string (hashed)
- **name**: string
- **role**: string (admin, creator, customer)
- **createdAt**: timestamp
- **updatedAt**: timestamp

### Product
- **id**: string (UUID)
- **name**: string
- **description**: string
- **price**: number
- **type**: string (course, ebook, online_training)
- **creatorId**: string (foreign key to User)
- **createdAt**: timestamp
- **updatedAt**: timestamp

### Sale
- **id**: string (UUID)
- **productId**: string (foreign key to Product)
- **customerId**: string (foreign key to User)
- **price**: number
- **createdAt**: timestamp

### Subscription
- **id**: string (UUID)
- **creatorId**: string (foreign key to User)
- **customerId**: string (foreign key to User)
- **status**: string (active, canceled, etc.)
- **createdAt**: timestamp
- **updatedAt**: timestamp
