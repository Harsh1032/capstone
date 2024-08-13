module.exports = (client) => {
  return {
    findAll: async () => {
      const query = `SELECT id, name, value FROM TopUpValue`;
      try {
        const result = await client.query(query);
        return result.rows;
      } catch (error) {
        throw error;
      }
    },
  };
};
