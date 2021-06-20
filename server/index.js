require('dotenv').config()
const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const router = require('./router/index');
const db = require('./db');
const models = require('./models');
const User = require('./core/user/user.model');
const UserRepository = require('./core/user/user.repository');
const app = express();

app.use(cors());
app.use('/api', router);
app.use(express.json());

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();
    console.log('Successfully connected to the DB');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

startServer();