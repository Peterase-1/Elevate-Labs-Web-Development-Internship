# Task 7: Fetch and Display Data from a Public API

## Objective
Use JavaScript Fetch API to get user data from a public API and display it on a webpage.

## Features
- ✅ Fetches user data from JSONPlaceholder API
- ✅ Displays user name, email, phone, company, address, and website
- ✅ Asynchronous JavaScript using async/await
- ✅ JSON parsing and data handling
- ✅ Error handling for network issues
- ✅ Loading state indicator
- ✅ Reload button to refetch data
- ✅ Responsive design with modern UI
- ✅ Smooth animations and hover effects

## Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Fetch API
- Async/Await
- JSON

## API Used
**JSONPlaceholder API**: https://jsonplaceholder.typicode.com/users

## Key Concepts Covered

### 1. **Fetch API**
The Fetch API provides a modern interface for making HTTP requests. It returns a Promise that resolves to the Response object.

### 2. **Promises**
Promises represent the eventual completion or failure of an asynchronous operation. They have three states: pending, fulfilled, or rejected.

### 3. **Async/Await**
Async/await is syntactic sugar over Promises, making asynchronous code look and behave more like synchronous code.

### 4. **JSON Parsing**
JSON (JavaScript Object Notation) is a lightweight data format. The `.json()` method parses the response body as JSON.

### 5. **Error Handling**
Try-catch blocks handle errors in async functions, including network failures and HTTP errors.

### 6. **REST API**
RESTful APIs use HTTP methods to perform CRUD operations. This project uses GET requests to retrieve data.

## How to Test Network Error Handling
1. Open the webpage in your browser
2. Open DevTools (F12)
3. Go to Network tab
4. Set throttling to "Offline"
5. Click "Reload Data" button
6. You'll see an error message about network connectivity
7. Re-enable network and click "Try Again"

## Interview Questions & Answers

### 1. What is Fetch API?
The Fetch API is a modern JavaScript interface for making HTTP requests. It provides a more powerful and flexible feature set than XMLHttpRequest.

### 2. How do promises work?
Promises are objects representing the eventual completion or failure of an asynchronous operation. They can be in one of three states: pending, fulfilled, or rejected.

### 3. Difference between synchronous and asynchronous code?
- **Synchronous**: Code executes line by line, blocking until each operation completes
- **Asynchronous**: Code can continue executing while waiting for operations to complete

### 4. How to handle errors in Fetch?
Use try-catch blocks with async/await, or `.catch()` with promises. Check `response.ok` for HTTP errors.

### 5. What is JSON?
JSON (JavaScript Object Notation) is a lightweight data format for storing and transporting data, using human-readable text.

### 6. What is CORS?
CORS (Cross-Origin Resource Sharing) is a security mechanism that allows or restricts resources to be requested from another domain.

### 7. How to parse JSON?
Use `JSON.parse()` for strings, or the `.json()` method on fetch responses.

### 8. Explain async/await
Async/await is syntactic sugar for Promises. `async` declares an asynchronous function, `await` pauses execution until a Promise resolves.

### 9. What are HTTP status codes?
- **200-299**: Success
- **300-399**: Redirection
- **400-499**: Client errors
- **500-599**: Server errors

### 10. What is REST API?
REST (Representational State Transfer) is an architectural style for designing networked applications using HTTP methods (GET, POST, PUT, DELETE).

## How to Run
1. Open `index.html` in a web browser
2. The page will automatically fetch and display user data
3. Click "Reload Data" to refresh the data
4. Test error handling by going offline and clicking reload

## File Structure
```
Task 7 Fetch API/
├── index.html      # Main HTML structure
├── script.js       # JavaScript with Fetch API logic
├── style.css       # Styling and animations
└── README.md       # Project documentation
```

## Author
Created as part of Web Development Internship - Elevate Labs

## License
This project is for educational purposes.
