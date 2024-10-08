# Plant Pal API

Plant Pal API is a backend service for managing plant-related information and user authentication.

## Table of Contents

-   [Features](#features)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API Endpoints](#api-endpoints)
-   [Build](#build)

## Features

-   User authentication
-   Plant information management
-   RESTful API design
-   Express.js framework

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   Node.js (v14.x or later)
-   npm (v6.x or later)
-   PostgreSQL (for Prisma ORM)

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/annabel-anh/plant-pal-api.git
    cd plant-pal-api
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Set up your environment variables:

    - Copy `.env.example` to `.env`
    - Update the variables in `.env` with your configuration

4. Set up the database:

    ```
    npx prisma migrate dev
    ```

5. Seed the database (if applicable):
    ```
    npm run seed
    ```

## Usage

To start the server in production mode:

```
npm run build
npm start
```

The API will be available at `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

-   `GET /`: Welcome message
-   `/api/v1/...`: API routes (add more specific endpoints here)
-   `/auth/...`: Authentication routes

For a complete list of endpoints and their descriptions, please refer to the API documentation (if available).

## Build

To compile the TypeScript code to JavaScript:

```
npm run build
```

This will create a `dist` folder with the compiled JavaScript files.
