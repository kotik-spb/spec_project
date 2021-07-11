const db = require("../../../db");
const {DataTypes} = require("sequelize");

const MessageType = db.define('messageType', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'message_types'
})

module.exports = MessageType;