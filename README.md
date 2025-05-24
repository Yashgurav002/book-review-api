# 📚 Book Review API

A RESTful API built with Node.js and Express.js that allows users to register, log in, and manage book reviews. Authenticated users can add books, review them, and search the catalog.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT (JSON Web Token) for Authentication
* Postman for API testing

---

## 🔐 Authentication Endpoints

* `POST /users/signup`
  Register a new user with name, email, and password.

* `POST /users/login`
  Log in a user and receive a JWT token for authentication.

---

## 📘 Book Endpoints

* `POST /books`
  Add a new book (requires authentication)

* `GET /books`
  Get all books with pagination and optional filters:

  * `?page=1&limit=10`
  * `?author=Yash Gurav&genre=IT`

* `GET /books/:id`
  Get details of a book by ID. Includes:

  * Average rating
  * Paginated reviews

* `GET /books/search?q=keyword`
  Search books by partial match in title or author

---

## ✍️ Review Endpoints

* `POST /books/:id/reviews`
  Submit a review for a book (one per user per book)

* `PUT /reviews/:id`
  Update your own review (requires authentication)

* `DELETE /reviews/:id`
  Delete your own review (requires authentication)

---

## 🧱 Project Structure

```
project-root/
├── models/         # Mongoose schemas (User, Book, Review)
├── controllers/    # Request handlers for each feature
├── routes/         # Route definitions
├── middleware/     # JWT authentication middleware
├── .env            # Environment variables
├── db.js           # MongoDB connection setup
├── index.js        # Server entry point
```

---

## 📦 Setup Instructions

1. Clone the repo:

```bash
git clone https://github.com/your-username/book-review-api.git
cd book-review-api
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server:

```bash
npm run dev
```

---

## 🔍 Example API Requests (Postman or curl)

### Signup

```http
POST /users/signup
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}
```

### Login

```http
POST /users/login
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Create a Book

```http
POST /books
Authorization: Bearer <token>
{
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt",
  "genre": "Technology",
  "publishedYear": 1999
}
```

### Submit a Review

```http
POST /books/:id/reviews
Authorization: Bearer <token>
{
  "reviewText": "Great read!",
  "rating": 5
}
```

---

## 🧠 Design Decisions

* Passwords are hashed using bcrypt before storage.
* JWT is used to protect all user actions post-login.
* Mongoose schemas enforce data validation and relationships.
* Pagination implemented using skip/limit.
* One review per user per book is enforced by controller logic.

---

## 🗃️ Database Schema Summary

### User

* name: String
* email: String (unique)
* password: String (hashed)

### Book

* title: String
* author: String
* genre: String
* description: String
* publishedYear: Number
* createdBy: ObjectId (ref: User)

### Review

* book: ObjectId (ref: Book)
* user: ObjectId (ref: User)
* reviewText: String
* rating: Number (1-5)

---

## 📤 Submission

* All endpoints are tested using Postman (collection JSON included)
* Code is modular, clean, and follows best practices
* This README outlines setup, usage, and API structure for reviewers

✅ Project Completed
