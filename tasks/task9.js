const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define the /hello route to respond with JSON
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Define other routes
app.get('/goodbye', (req, res) => {
  res.send('Goodbye, Express!');
});

app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// Define the /echo route to handle incoming JSON data
app.post('/echo', (req, res) => {
  // Access the JSON data sent in the request body
  const receivedData = req.body;

  // Respond with the same data
  res.json({
    received: receivedData,
    message: 'Data received successfully!'
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
