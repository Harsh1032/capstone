module.exports = (client) => {
  const Event = require('../models/Event')(client);

  return {
      getEvents: async (req, res) => {
          try {
              const events = await Event.findAll();
              res.json(events);
          } catch (error) {
              res.status(500).json({ error: error.message });
          }
      },

      getEventDetails: async (req, res) => {
          try {
              const { eventID } = req.query;
              const event = await Event.findById(eventID);
              res.json(event);
          } catch (error) {
              res.status(500).json({ error: error.message });
          }
      },

      playEvent: async (req, res) => {
        try {
            const { eventID, userID, valuePoint } = req.body;
    
            // Fetch the current balance dynamically
            const userQuery = `
                SELECT u.*, 
                       COALESCE(SUM(tv.value), 0) AS balance
                FROM Users u
                LEFT JOIN Deposit d ON u.user_id = d.userID
                LEFT JOIN TopUpValue tv ON d.topUpValueID = tv.id
                WHERE u.user_id = $1
                GROUP BY u.user_id;
            `;
            const userResult = await client.query(userQuery, [userID]);
            const balance = userResult.rows[0]?.balance;
    
            if (!balance || balance < 50) {
                return res.status(400).json({ error: 'Insufficient balance to play the event.' });
            }
    
            // Since balance is calculated dynamically, there is no need to update it in the Users table
    
            // Record the event play
            const record = await Event.createEventRecord(userID, eventID, valuePoint);
            res.json(record);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    

      getUserRecords: async (req, res) => {
          try {
              const { userID } = req.query;
              const records = await Event.getUserEventRecords(userID);
              res.json(records);
          } catch (error) {
              res.status(500).json({ error: error.message });
          }
      }
  };
};
