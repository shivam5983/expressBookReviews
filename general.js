const axios = require("axios");

/* Get all books */
async function getAllBooks() {
  const res = await axios.get("http://localhost:5000/books");
  console.log(res.data);
}

/* Get by ISBN */
async function getByISBN(isbn) {
  const res = await axios.get(`http://localhost:5000/books/isbn/${isbn}`);
  console.log(res.data);
}

/* Get by Author */
async function getByAuthor(author) {
  const res = await axios.get(`http://localhost:5000/books/author/${author}`);
  console.log(res.data);
}

/* Get by Title */
async function getByTitle(title) {
  const res = await axios.get(`http://localhost:5000/books/title/${title}`);
  console.log(res.data);
}

module.exports = {
  getAllBooks,
  getByISBN,
  getByAuthor,
  getByTitle
};
