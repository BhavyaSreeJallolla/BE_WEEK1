const express = require('express');
const app = express();

// Set port number directly in code
const port = 5000; // Specify your desired port here

// Define routes
app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
