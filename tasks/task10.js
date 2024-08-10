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
  const receivedData = req.body;
  res.json({
    received: receivedData,
    message: 'Data received successfully!'
  });
});

// Define the /update route to handle PUT requests
app.put('/update', (req, res) => {
  // Access the JSON data sent in the request body
  const updatedData = req.body;

  // Respond with a confirmation message
  res.json({
    message: 'Data updated',
    data: updatedData
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
