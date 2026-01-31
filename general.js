const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
  const response = await axios.get(`${BASE_URL}/books`);
  return response.data;
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
  return response.data;
}

// Get books by author
async function getBooksByAuthor(author) {
  const response = await axios.get(`${BASE_URL}/books/author/${author}`);
  return response.data;
}

// Get books by title
async function getBooksByTitle(title) {
  const response = await axios.get(`${BASE_URL}/books/title/${title}`);
  return response.data;
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
};
