module.exports = (client) => {
  return {
    findById: async (userId) => {
      const query = `
        SELECT u.*, 
               COALESCE(SUM(tv.value), 0) AS balance, 
               COALESCE(SUM(uer.valuePoint), 0) - 
               COALESCE((SELECT SUM(p.value) 
                        FROM Withdrawn w 
                        JOIN Package p ON w.packageId = p.id 
                        WHERE w.userID = u.user_id), 0) 
               AS points
        FROM Users u
        LEFT JOIN Deposit d ON u.user_id = d.userID
        LEFT JOIN TopUpValue tv ON d.topUpValueID = tv.id
        LEFT JOIN UserEventRecord uer ON u.user_id = uer.userID
        WHERE u.user_id = $1
        GROUP BY u.user_id;
      `;
      const values = [userId];
      try {
        const result = await client.query(query, values);
        return result.rows[0];
      } catch (error) {
        throw error;
      }
    },
    create: async (username, password) => {
      const query = `INSERT INTO Users (username, password) VALUES ($1, $2) RETURNING *;`;
      const values = [username, password];
      try {
        const result = await client.query(query, values);
        return result.rows[0];
      } catch (error) {
        throw error;
      }
    },
    findByCredentials: async (username, password) => {
      const query = `
        SELECT u.*, 
               COALESCE(SUM(tv.value), 0) AS balance, 
               COALESCE(SUM(uer.valuePoint), 0) - 
               COALESCE((SELECT SUM(p.value) 
                        FROM Withdrawn w 
                        JOIN Package p ON w.packageId = p.id 
                        WHERE w.userID = u.user_id), 0) 
               AS points
        FROM Users u
        LEFT JOIN Deposit d ON u.user_id = d.userID
        LEFT JOIN TopUpValue tv ON d.topUpValueID = tv.id
        LEFT JOIN UserEventRecord uer ON u.user_id = uer.userID
        WHERE u.username = $1 AND u.password = $2
        GROUP BY u.user_id;
      `;
      const values = [username, password];
      try {
        const result = await client.query(query, values);
        return result.rows[0];
      } catch (error) {
        throw error;
      }
    },
  };
};
