require('dotenv').config()
const express = require('express');
const fileUpload = require("express-fileupload");
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const router = require('./router/index');
const db = require('./db');
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddleware = require('./middleware/error.middleware');

app.use(fileUpload({
  createParentPath: true
}));
app.use(cookieParser())
app.use('/static', express.static(__dirname + '/static'));
app.use(cors({origin: process.env.CLIENT_URL, credentials: true}));
app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

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