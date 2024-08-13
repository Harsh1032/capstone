module.exports = (client) => {
  return {
    findAll: async () => {
      const query = `SELECT * FROM TopUpResource`;
      try {
        const result = await client.query(query);
        return result.rows;
      } catch (error) {
        throw error;
      }
    },
  };
};
