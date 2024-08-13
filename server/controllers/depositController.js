module.exports = (client) => {
  const Deposit = require('../models/Deposit')(client);

  return {
    createDeposit: async (req, res) => {
      try {
        const { userID, topUpResourceName, topUpValueName, topUpNumber, topUpSeries } = req.body;

        if (!userID || !topUpResourceName || !topUpValueName || !topUpNumber || !topUpSeries) {
          return res.status(400).json({ error: 'All fields are required' });
        }

        // Retrieve the ID of the top-up resource based on the name
        const resourceQuery = 'SELECT id FROM TopUpResource WHERE name = $1';
        const resourceResult = await client.query(resourceQuery, [topUpResourceName]);
        const topUpResourceID = resourceResult.rows[0]?.id;

        if (!topUpResourceID) {
          return res.status(400).json({ error: 'Invalid top-up resource name' });
        }

        // Retrieve the value and ID of the top-up value based on the name
        const valueQuery = `SELECT id, value FROM TopUpValue WHERE name = $1`;
        const valueResult = await client.query(valueQuery, [topUpValueName.trim()]);
        const topUpValueID = valueResult.rows[0]?.id;

        if (!topUpValueID) {
          return res.status(400).json({ error: 'Invalid top-up value' });
        }

        // Create the deposit using the retrieved IDs
        const deposit = await Deposit.create(userID, topUpResourceID, topUpValueID, topUpNumber, topUpSeries);

        res.json(deposit);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  };
};
