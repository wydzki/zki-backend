const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route for the root
app.get('/', (req, res) => {
  res.send('Hello from your Node.js backend!');
});

// Example API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from your API!' });
});

// Start server
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
