module.exports = (client) => {
  return {
      findAll: async () => {
          const query = `
              SELECT e.*, 
                     (SELECT COUNT(*) FROM UserEventRecord WHERE eventID = e.id) AS event_count 
              FROM Event e;
          `;
          try {
              const result = await client.query(query);
              return result.rows;
          } catch (error) {
              throw error;
          }
      },

      findById: async (eventID) => {
          const query = `SELECT * FROM Event WHERE id = $1`;
          const values = [eventID];
          try {
              const result = await client.query(query, values);
              return result.rows[0];
          } catch (error) {
              throw error;
          }
      },

      createEventRecord: async (userID, eventID, valuePoint) => {
          const query = `
              INSERT INTO UserEventRecord (userID, eventID, valuePoint)
              VALUES ($1, $2, $3) RETURNING *;
          `;
          const values = [userID, eventID, valuePoint];
          try {
              const result = await client.query(query, values);
              return result.rows[0];
          } catch (error) {
              throw error;
          }
      },

      getUserEventRecords: async (userID) => {
          const query = `
              SELECT u.username, e.name as eventName, r.valuePoint, r.createdAt
              FROM UserEventRecord r
              JOIN Users u ON r.userID = u.user_id
              JOIN Event e ON r.eventID = e.id
              WHERE r.userID = $1
              ORDER BY r.createdAt DESC;
          `;
          const values = [userID];
          try {
              const result = await client.query(query, values);
              return result.rows;
          } catch (error) {
              throw error;
          }
      }
  };
};
