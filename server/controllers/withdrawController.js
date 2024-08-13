module.exports = (client) => {
  const Withdrawn = require('../models/Withdrawn')(client);
  const Package = require('../models/Package')(client);

  return {
    createWithdraw: async (req, res) => {
      try {
          const { userID, userWithdrawName, packageName, content } = req.body;

          // Retrieve the ID of the package based on the name
          const packageQuery = 'SELECT id, value FROM Package WHERE name = $1';
          const packageResult = await client.query(packageQuery, [packageName]);
          const packageId = packageResult.rows[0]?.id;
          const packageValue = packageResult.rows[0]?.value;

          if (!packageId) {
              return res.status(400).json({ error: 'Invalid package name' });
          }

          // Create the withdrawal using the retrieved packageId
          const withdraw = await Withdrawn.create(userID, userWithdrawName, packageId, content);

          res.json(withdraw);
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
  },
      getPackages: async (req, res) => {
          try {
              const packages = await Package.findAll();
              res.json(packages);
          } catch (error) {
              res.status(500).json({ error: error.message });
          }
      }
  };
};
