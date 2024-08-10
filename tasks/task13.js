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

// Define routes
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.get('/goodbye', (req, res) => {
  res.send('Goodbye, Express!');
});

app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.post('/echo', (req, res) => {
  const receivedData = req.body;
  res.json({
    received: receivedData,
    message: 'Data received successfully!'
  });
});

app.put('/update', (req, res) => {
  const updatedData = req.body;
  res.json({
    message: 'Data updated',
    data: updatedData
  });
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    message: `Deleted item with ID: ${id}`
  });
});

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack to the console
  res.status(500).json({
    message: 'Something went wrong!',
    error: err.message
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
