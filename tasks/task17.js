

const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();

// Use CORS middleware
app.use(cors());

// Set up rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (15 minutes)
  message: 'Too many requests from this IP, please try again later.'
});

// Apply the rate limiting middleware to all routes
app.use(limiter);

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
