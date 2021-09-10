const {Sequelize} = require('sequelize');

// module.exports = new Sequelize({
//   dialect: 'postgres',
//   host: "127.0.0.1",
//   port: "5432",
//   username: "postgres",
//   password: "admin123",
//   database: "social_network",
//   logging: false
// })

module.exports = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_DEV_HOST,
  port: process.env.DB_DEV_PORT,
  username: process.env.DB_DEV_NAME,
  password: process.env.DB_DEV_PASSWORD,
  database: process.env.DB_DEV_DATABASE,
  logging: false
})