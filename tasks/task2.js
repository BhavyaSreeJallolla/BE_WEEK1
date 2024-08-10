const express = require('express');
const app = express();
const port = 5000;

// Define the /hello route
app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});

// Define the /goodbye route
app.get('/goodbye', (req, res) => {
  res.send('Goodbye, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
