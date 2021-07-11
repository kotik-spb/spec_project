const {Sequelize} = require('sequelize');

// const sequelize = new Sequelize(process.env.DEV_DATABASE);
module.exports = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_DEV_HOST,
  port: process.env.DB_DEV_PORT,
  username: process.env.DB_DEV_NAME,
  password: process.env.DB_DEV_PASSWORD,
  database: process.env.DB_DEV_DATABASE,
  logging: false
})