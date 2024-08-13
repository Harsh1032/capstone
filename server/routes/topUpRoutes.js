const express = require('express');

module.exports = (client) => {
  const router = express.Router();
  const topUpController = require('../controllers/topUpController')(client);

  router.get('/top-up-resource', topUpController.getTopUpResources);
  router.get('/top-up-value', topUpController.getTopUpValues);

  return router;
};
