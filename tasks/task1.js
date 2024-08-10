const express = require('express');
const app = express();
const port = 5000;

// Define the /hello route
app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
