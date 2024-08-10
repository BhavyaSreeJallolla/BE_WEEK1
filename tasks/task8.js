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

app.post('/echo', (req, res) => {
  res.json(req.body);
});

app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// New route that sends a JSON response
app.get('/json', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
