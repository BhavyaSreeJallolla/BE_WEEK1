
const express = require('express');
const app = express();
const port = 5000;

// Correct path to userRoutes.js
const userRoutes = require('../routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
