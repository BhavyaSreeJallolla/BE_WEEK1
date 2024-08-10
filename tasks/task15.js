const express = require('express');
const path = require('path'); // Required for path resolution
const app = express();
const port = process.env.PORT || 3000; // Use port from environment variable or default to 3000

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file from the / route (optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
