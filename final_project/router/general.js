const axios = require("axios");

const BASE_URL = "http://localhost:5000";

/* Get all books */
async function getAllBooks() {
  const response = await axios.get(`${BASE_URL}/books`);
  return response.data;
}

/* Get book by ISBN */
async function getByISBN(isbn) {
  const response = await axios.get(`${BASE_URL}/books`);
  return response.data[isbn];
}

/* Get books by Author */
async function getByAuthor(author) {
  const response = await axios.get(`${BASE_URL}/books`);
  const books = response.data;

  const result = [];
  for (const key in books) {
    if (books[key].author === author) {
      result.push(books[key]);
    }
  }
  return result;
}

/* Get books by Title */
async function getByTitle(title) {
  const response = await axios.get(`${BASE_URL}/books`);
  const books = response.data;

  const result = [];
  for (const key in books) {
    if (books[key].title === title) {
      result.push(books[key]);
    }
  }
  return result;
}

module.exports = {
  getAllBooks,
  getByISBN,
  getByAuthor,
  getByTitle,
};
