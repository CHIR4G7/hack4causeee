# Hack4Cause Backend

Node.js + Express + MongoDB backend for the Hack4Cause project.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create environment file:

   ```bash
   cp .env.example .env
   ```

3. Update the `.env` file with your configuration values.

4. Start the development server:
   ```bash
   npm run dev
   ```

The server will start on http://localhost:5000

## Directory Structure

```
backend/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   └── server.js       # Main server file
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests

## API Endpoints

Base URL: `http://localhost:5000`

- `GET /` - Health check endpoint

## Environment Variables

See `.env.example` for required environment variables.

## License

ISC
