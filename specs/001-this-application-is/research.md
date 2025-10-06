# Research: Digital Product Marketplace

## Stripe Integration with NestJS

- **Decision**: Use the `@nestjs/stripe` module.
- **Rationale**: This module provides a simple and straightforward way to integrate Stripe with a NestJS application. It handles the configuration and provides a service that can be injected into other services.
- **Alternatives considered**: Using the official Stripe Node.js library directly. This would require more boilerplate code to set up and manage the Stripe client.

## Firebase Authentication with NestJS

- **Decision**: Use the `firebase-admin` package for verifying ID tokens on the backend. The backend will receive the ID token from the frontend, verify it, and then create a user in the PostgreSQL database.
- **Rationale**: This is the official and recommended way to integrate Firebase Authentication with a custom backend. It provides a secure way to verify the authenticity of users and allows for syncing user data with the application's database.
- **Alternatives considered**: None, as this is the standard approach.

## Mux for Video Streaming

- **Decision**: Use the Mux Node.js SDK for interacting with the Mux API.
- **Rationale**: The official SDK is the most reliable and feature-complete way to work with Mux. It provides methods for uploading videos, managing assets, and generating playback URLs.
- **Alternatives considered**: None, as this is the standard approach.
