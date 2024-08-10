
const express = require('express');
const app = express();
const port = 5000;

// Correct path to userRoutes
const userRoutes = require('../routes/userRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Use user routes
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
