const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://luciferbrine04:dKQ9gOB6GHUHbYdK@lucy.hdza0s9.mongodb.net/blog')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas:', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
