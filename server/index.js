const express = require("express");
const app = express();
const cors = require("cors");
const {Client} = require('pg');

//middleware
app.use(express.json());
app.use(cors());

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Phenomenal1!",
  database: "fifaData"
})


client.connect()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Database connection error:', err.stack));


  const userRoutes = require('./routes/userRoutes')(client);
  const depositRoutes = require('./routes/depositRoutes')(client);
  const withdrawRoutes = require('./routes/withdrawRoutes')(client);
  const topUpRoutes = require('./routes/topUpRoutes')(client);
  const packageRoutes = require('./routes/packageRoutes')(client);
  const eventRoutes = require('./routes/eventRoutes')(client);
  
  app.use('/api', userRoutes);
  app.use('/api', depositRoutes);
  app.use('/api', withdrawRoutes);
  app.use('/api', topUpRoutes);
  app.use('/api', packageRoutes);
  app.use('/api', eventRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
