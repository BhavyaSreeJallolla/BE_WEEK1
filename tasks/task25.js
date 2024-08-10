
const express = require('express');
const app = express();
const PORT = 5000;

// Route that sends a specific status code and message
app.get('/status/:code', (req, res) => {
  const statusCode = parseInt(req.params.code, 10); // Get the status code from the URL parameter
  
  // Send the response with the specific status code and message
  res.status(statusCode).send(`This is a ${statusCode} status code response.`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
