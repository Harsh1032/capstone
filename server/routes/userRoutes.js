const express = require('express');

module.exports = (client) => {
  const router = express.Router();
  const userController = require('../controllers/userController')(client);

  router.get('/user', userController.getUser);
  router.post('/user', userController.createUser);
  router.post('/login', userController.loginUser);
  router.post('/logout', (req, res) => {
    res.json({ message: 'Logged out successfully' });
  });
  return router;
};
