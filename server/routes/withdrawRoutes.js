const express = require('express');

module.exports = (client) => {
  const router = express.Router();
  const withdrawController = require('../controllers/withdrawController')(client);

  const authenticateToken = require('../utils/authenticateToken');

  router.post('/withdraw', authenticateToken, withdrawController.createWithdraw);

  return router;
};
