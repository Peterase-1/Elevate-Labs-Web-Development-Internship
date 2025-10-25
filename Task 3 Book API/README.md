# 📚 Book Management REST API (ESM Version)

## Description
A simple Node.js + Express API to perform CRUD operations on a list of books stored in memory.

## Features
- GET `/books` → Get all books
- POST `/books` → Add a new book
- PUT `/books/:id` → Update a book by ID
- DELETE `/books/:id` → Delete a book by ID

## How to Run
1. Run `npm install`
2. Start server: `npm start`
3. Use Postman to test endpoints on `http://localhost:3000/books`

## Example
POST body:
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}
```
