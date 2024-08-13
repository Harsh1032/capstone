module.exports = (client) => {
    return {
        create: async (userId, eventId, valuePoint) => {
            const query = `
                INSERT INTO UserEventRecord (userID, eventID, valuePoint)
                VALUES ($1, $2, $3)
                RETURNING *;
            `;
            const values = [userId, eventId, valuePoint];
            try {
                const result = await client.query(query, values);
                return result.rows[0];
            } catch (error) {
                throw error;
            }
        },

        findByUserId: async (userId) => {
            const query = `SELECT * FROM UserEventRecord WHERE userID = $1`;
            const values = [userId];
            try {
                const result = await client.query(query, values);
                return result.rows;
            } catch (error) {
                throw error;
            }
        }
    };
};
