
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/redirect', (req, res) => {
  res.redirect('https://www.example.com');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
