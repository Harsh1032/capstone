module.exports = (client) => {
    const Package = require('../models/Package')(client);
  
    return {
      getPackages: async (req, res) => {
        try {
          const packages = await Package.findAll();
          res.json(packages);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
    };
  };
  