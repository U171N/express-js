
// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Parse requests of content-type 'application/json'
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('MongoDB connection error:', error);
  });

// Define a simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the CRUD application' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


//import usr routes supaya bisa dirunning
const userRoutes  = require('./routes/userRoutes');


//menjalankan script
app.use('/users',userRoutes);