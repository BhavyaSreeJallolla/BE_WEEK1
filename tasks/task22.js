
const express = require('express');
const app = express();
const port = 5000;

// Route to handle GET request and respond with JSON
app.get('/data', (req, res) => {
  const responseData = {
    message: "Hello, world!",
    status: "success",
    data: {
      userId: 1,
      username: "johndoe",
      email: "johndoe@example.com"
    }
  };
  res.json(responseData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
