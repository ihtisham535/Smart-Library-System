# Complete Project Structure

This document shows the complete file structure for the Login and Signup application.

## Backend Structure

```
backend/
├── config/
│   ├── database.js          # MongoDB connection configuration
│   └── jwt.js               # JWT token generation and verification
├── controllers/
│   └── authController.js    # Authentication controller (signup, login, getMe)
├── middleware/
│   ├── auth.js              # Authentication middleware (JWT verification)
│   ├── errorHandler.js      # Global error handler middleware
│   └── notFound.js          # 404 handler middleware
├── models/
│   └── User.js              # User Mongoose model with password hashing
├── routes/
│   └── auth.js              # Authentication routes
├── .env                     # Environment variables (create from ENV_TEMPLATE.txt)
├── .gitignore               # Git ignore file
├── ENV_TEMPLATE.txt         # Environment variables template
├── package.json             # Backend dependencies and scripts
├── README.md                # Backend documentation
└── server.js                # Main server file
```

## Frontend Structure

```
frontend/
├── public/
│   └── vite.svg             # Vite logo
├── src/
│   ├── components/
│   │   ├── Auth.css         # Styles for auth forms
│   │   ├── Login.jsx        # Login component
│   │   └── Signup.jsx       # Signup component
│   ├── contexts/
│   │   └── AuthContext.jsx  # Authentication context (optional)
│   ├── services/
│   │   └── authService.js   # API service functions
│   ├── utils/
│   │   ├── constants.js     # API endpoints and constants
│   │   └── helpers.js       # Helper functions (localStorage, auth)
│   ├── assets/
│   │   └── react.svg        # React logo
│   ├── App.css              # Main app styles
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # React entry point
├── .env.example             # Frontend environment variables template
├── .gitignore               # Git ignore file
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Frontend dependencies and scripts
├── README.md                # Frontend documentation
└── vite.config.js           # Vite configuration
```

## Key Files

### Backend Files

1. **server.js** - Main Express server setup
2. **config/database.js** - MongoDB connection
3. **config/jwt.js** - JWT token utilities
4. **models/User.js** - User schema with password hashing
5. **controllers/authController.js** - Signup, login, and getMe logic
6. **routes/auth.js** - API route definitions
7. **middleware/auth.js** - JWT authentication middleware
8. **middleware/errorHandler.js** - Global error handling
9. **.env** - Environment variables (MongoDB URI, JWT secret, etc.)

### Frontend Files

1. **src/App.jsx** - Main application component with routing
2. **src/components/Login.jsx** - Login form component
3. **src/components/Signup.jsx** - Signup form component
4. **src/services/authService.js** - API calls to backend
5. **src/utils/constants.js** - API endpoints and constants
6. **src/utils/helpers.js** - LocalStorage and auth helper functions
7. **vite.config.js** - Vite build configuration

## Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```env
MONGODB_URI=your_mongodb_atlas_connection_string_here
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Run backend:
```bash
npm start
# or for development
npm run dev
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file (optional):
```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend:
```bash
npm run dev
```

## API Endpoints

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

## Features

✅ User registration with validation
✅ User login with JWT authentication
✅ Password hashing with bcrypt
✅ Protected routes with JWT middleware
✅ Error handling middleware
✅ MongoDB Atlas integration
✅ Modern React UI with Vite
✅ Axios for API calls
✅ LocalStorage for token management
✅ Form validation
✅ Responsive design


