const { Deferrable, DataTypes } = require("sequelize/types");

const db = require("../../db");
const User = require("../user/user.model");

const Token = db.define('token', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idAddress: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    },
    field: 'id_user'
  }
})

module.exports = Token;