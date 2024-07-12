This is a backend API built with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications. The API provides functionality for managing movies, users, and authentication.

Features

- Movie Management: Create, read, update, and delete movies.
- User Management: Create, read, update, and delete users.
- Authentication: User registration and login with JWT-based authentication.
- External API Integration: Fetch movie comments from an external API.
- Database Integration: MySQL database integration using TypeORM.

Prerequisites
- Before running the application, make sure you have the following installed:

- Node.js (version specified in package.json)
- MySQL (or any compatible database)

Installation
1. Clone the repository:
```git clone https://github.com/mushfiqweb/super-movie```
2. Navigate to the project directory: `cd movie-api/backend`

3. Install dependencies: `npm install`

4. Set up the database configuration in `src/config/database.config.ts.`

5. Run database migrations (if applicable):

# Run migrations
`npm run migrate`

# Running the Application
Development
- To start the application in development mode, run:`npm run start:dev`



The application will restart automatically on file changes.

Production
- To build and start the application in production mode, run:
```
npm run build
npm run start:prod
```


## API Documentation
For API doc, import `Movie_API_ENV.postman_environment.json` as Postman collection.
Import `SuperMovie.postman_collection.json` as Postman ENV.


## Testing
This project includes unit tests and end-to-end tests. To run the tests, execute the following commands:

## Run unit tests
npm run test

## Run end-to-end tests
npm run test:e2e



