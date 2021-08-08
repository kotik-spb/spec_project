require('dotenv').config()
const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const router = require('./router/index');
const db = require('./db');
const app = express();

app.use('/static', express.static(__dirname + '/static'));
app.use(cors());
app.use(express.json());
app.use('/api', router);

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