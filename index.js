const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for both zki.lol and www.zki.lol
app.use(cors({
  origin: ['https://zki.lol', 'https://www.zki.lol'], // Allow both subdomains
  methods: ['GET', 'POST'], // Adjust if you use other methods
  credentials: true // If you're using cookies or other credentials
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Route for the root
app.get('/', (req, res) => {
  res.send('Hello from your Node.js backend!');
});

// Example API route
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Hello from your API!' });
});

// Start server
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
