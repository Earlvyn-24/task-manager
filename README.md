# ✅ Task Manager App

A Node.js and Express-based Task Manager REST API that allows users to sign up, log in, manage tasks, and log out securely using JWT authentication. Built as part of a backend development course.

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt (Password hashing)
- Multer (File uploads)
- Sharp (Image processing)
- Postman (for testing)

## 📦 Features

- User signup, login, and logout
- User profile (view, update, delete)
- Avatar upload with image resizing
- Create, read, update, delete (CRUD) for tasks
- Filter, paginate, and sort tasks
- Authentication middleware using JWT
- Error handling with async/await

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Earlvyn-24/task-manager.git
cd task-manager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the root of the project

```env
PORT=3000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open Postman and test API routes

Use Postman to test endpoints like:

- `POST /users` – Register a user  
- `POST /users/login` – Log in  
- `POST /tasks` – Create a task  
- `GET /tasks` – Get all tasks (with optional filtering, sorting, and pagination)

---

## 📌 Notes

- This is a backend-only project (no frontend).
- Use Postman or similar tools to interact with the API.
- Uses async/await for all async operations.
