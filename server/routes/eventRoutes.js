const express = require('express');

module.exports = (client) => {
  const router = express.Router();
  const eventController = require('../controllers/eventController')(client);

  router.get('/event', eventController.getEvents);
  router.get('/event/details', eventController.getEventDetails);
  router.post('/event-play', eventController.playEvent);

  return router;
};
