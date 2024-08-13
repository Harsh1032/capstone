const jwt = require('jsonwebtoken');

module.exports = (client) => {
    const User = require('../models/User')(client);
  
    return {
      getUser: async (req, res) => {
        try {
          const users = await User.findAll();
          res.json(users);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
  
      createUser: async (req, res) => {
        try {
          const { username, password } = req.body;
          const user = await User.create(username, password);
          res.json(user);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
  
      loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findByCredentials(username, password);
            if (user) {
                // Create a JWT token that expires in 1 day
                const token = jwt.sign(
                    { id: user.user_id }, 
                    process.env.JWT_SECRET || 'your-secret-key', 
                    { expiresIn: '1d' }  // Set token to expire in 1 day
                );
    
                // Send the token and user data back to the client
                res.json({
                    user,
                    token,
                });
            } else {
                res.status(401).json({ error: 'Invalid username or password' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    
    };
  };
  