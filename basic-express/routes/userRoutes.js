const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user
router.post('/users', (req, res) => {
  const user = new User(req.body);
  user.save()
    .then(() => {
      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Get all users
router.get('/', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Get a user by ID
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Update a user
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Delete a user
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

module.exports = router;
