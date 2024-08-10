const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next handler
});

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
  const updatedData = req.body;
  res.json({
    message: 'Data updated',
    data: updatedData
  });
});

// Define the /delete/:id route to handle DELETE requests
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    message: `Deleted item with ID: ${id}`
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
