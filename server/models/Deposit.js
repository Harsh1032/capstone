module.exports = (client) => {
  return {
    create: async (userID, topUpResourceID, topUpValueID, topUpNumber, topUpSeries) => {
      const query = `INSERT INTO Deposit (userID, topUpResourceID, topUpValueID, topUpNumber, topUpSeries)
                     VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
      const values = [userID, topUpResourceID, topUpValueID, topUpNumber, topUpSeries];
      try {
        const result = await client.query(query, values);
        return result.rows[0];
      } catch (error) {
        throw error;
      }
    },

    findById: async (userId) => {
      const query = `
        SELECT d.id, d.userID, tr.name as topUpResource, tv.value as topUpValue, d.topUpNumber, d.topUpSeries, d.createdAt
        FROM Deposit d
        JOIN TopUpResource tr ON d.topUpResourceID = tr.id
        JOIN TopUpValue tv ON d.topUpValueID = tv.id
        WHERE d.userID = $1
        ORDER BY d.createdAt DESC;
      `;
      const values = [userId];
      try {
        const result = await client.query(query, values);
        return result.rows;
      } catch (error) {
        throw error;
      }
    },
  };
};
