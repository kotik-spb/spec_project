const db = require("../db");
const {DataTypes} = require("sequelize");

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "USER"
  },
  age: {
    type: DataTypes.INTEGER
  },
  isOnline: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  activationLink: {
    type: DataTypes.STRING,
    defaultValue: null
  }
})

module.exports = User;