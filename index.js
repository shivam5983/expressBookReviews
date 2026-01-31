const express = require("express");
const bodyParser = require("body-parser");
// const books = require("./books.json");
const books = require("./final_project/router/booksdb.js");

const app = express();
app.use(bodyParser.json());

let users = [];

/* TASK 2: Get all books */
app.get("/books", (req, res) => {
  res.json(books);
});

/* TASK 3: Get book by ISBN */
app.get("/books/isbn/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  res.json(books[isbn] || { message: "Book not found" });
});

/* TASK 4: Get book by author */
app.get("/books/author/:author", (req, res) => {
  const result = [];
  Object.values(books).forEach((book) => {
    if (book.author.toLowerCase() === req.params.author.toLowerCase()) {
      result.push(book);
    }
  });
  res.json(result);
});

/* TASK 5: Get book by title */
app.get("/books/title/:title", (req, res) => {
  const result = [];
  Object.values(books).forEach((book) => {
    if (book.title.toLowerCase() === req.params.title.toLowerCase()) {
      result.push(book);
    }
  });
  res.json(result);
});

/* TASK 6: Get reviews */
app.get("/books/review/:isbn", (req, res) => {
  const book = books[req.params.isbn];

  if (!book || Object.keys(book.reviews).length === 0) {
    return res.json({ message: "No reviews found for this book" });
  }

  res.json(book.reviews);
});

/* TASK 7: Register */
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.json({ message: "User registered successfully" });
});

/* TASK 8: Login */
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );
  res.json(
    user ? { message: "Login successful" } : { message: "Invalid credentials" },
  );
});

/* TASK 9: Add / Modify review */
app.post("/books/review/:isbn", (req, res) => {
  const { username, review } = req.body;
  books[req.params.isbn].reviews[username] = review;
  res.json({
    message: "Review added/updated",
    reviews: books[req.params.isbn].reviews,
  });
});

/* TASK 10: Delete review */
app.delete("/books/review/:isbn/:username", (req, res) => {
  delete books[req.params.isbn].reviews[req.params.username];
  res.json({ message: "Review deleted" });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
