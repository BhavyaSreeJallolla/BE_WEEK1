
const express = require('express');
const app = express();
const PORT = 5000;

// Define a test route
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Define other routes as needed here

// Custom 404 error handler
app.use((req, res, next) => {
  res.status(404).send('Sorry, we could not find that!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
