const express = require('express');

module.exports = (client) => {
  const router = express.Router();
  const packageController = require('../controllers/packageController')(client);

  router.get('/package', packageController.getPackages);

  return router;
};
