module.exports = (client) => {
  return {
      create: async (userID, userWithdrawName, packageId, content) => {
          const query = `INSERT INTO Withdrawn (userID, userWithdrawName, packageId, content, status)
                         VALUES ($1, $2, $3, $4, 'Pending') RETURNING *;`;
          const values = [userID, userWithdrawName, packageId, content];
          try {
              // Retrieve package value
              const packageQuery = `SELECT value FROM Package WHERE id = $1`;
              const packageResult = await client.query(packageQuery, [packageId]);
              const packageValue = packageResult.rows[0]?.value;

              // Ensure package exists
              if (!packageValue) {
                  throw new Error("Invalid package ID");
              }

              // Create withdrawal record
              const result = await client.query(query, values);

              // No need to update balance directly, as it's dynamically calculated

              return result.rows[0];
          } catch (error) {
              throw error;
          }
      }
  };
};
