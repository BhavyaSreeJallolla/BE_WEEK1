// index.js
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); // For parsing application/json

// In-memory database (for demonstration purposes)
let books = [];
let nextId = 1;

// GET /books - Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET /books/:id - Get a single book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
  const book = {
    id: nextId++,
    ...req.body
  };
  books.push(book);
  res.status(201).json(book);
});

// PUT /books/:id - Update a book by ID
app.put('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    books[index] = { id: books[index].id, ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).send('Book not found');
  }
});

// DELETE /books/:id - Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    books.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Book not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/*GET /books: Retrieves all books.
GET /books/:id: Retrieves a single book by ID.
POST /books: Adds a new book. You need to send the book details in the request body.
PUT /books/:id: Updates a book by ID. Send the updated details in the request body.
DELETE /books/:id: Deletes a book by ID.
*/