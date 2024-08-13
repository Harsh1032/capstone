const express = require('express');

module.exports = (client) => {
  const router = express.Router();
  const depositController = require('../controllers/depositController')(client);
  const authenticateToken = require('../utils/authenticateToken');

  router.post('/deposit', authenticateToken, depositController.createDeposit);

  return router;
};
