

const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS middleware
app.use(cors());

// Your other middleware and routes
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define your routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
