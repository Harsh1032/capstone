module.exports = (client) => {
  const TopUpResource = require("../models/TopUpResource")(client);
  const TopUpValue = require("../models/TopUpValue")(client);

  return {
    getTopUpResources: async (req, res) => {
      try {
        const resources = await TopUpResource.findAll();
        res.json(resources);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    getTopUpValues: async (req, res) => {
      try {
        const topUpValues = await TopUpValue.findAll();
        res.json(topUpValues);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  };
};
