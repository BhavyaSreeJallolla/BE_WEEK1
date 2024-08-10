// routes/userRoutes.js

const express = require('express');
const router = express.Router();

// Example route: GET /api/users
router.get('/', (req, res) => {
  res.send('List of users');
});

// Example route: POST /api/users
router.post('/', (req, res) => {
  res.send('Create a user');
});

// Example route: GET /api/users/:id
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User details for ID: ${userId}`);
});

module.exports = router;
