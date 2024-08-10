
const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Route to handle POST request with URL-encoded data
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Received data: Name - ${name}, Email - ${email}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
