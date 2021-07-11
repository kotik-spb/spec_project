const db = require('../../db');
const User = require('../user/user.model');
const { DataTypes, Deferrable } = require('sequelize/types');

const Chat = db.define('chat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idMember: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    },
    field: 'id_member'
  },
  idOwner: {
    type: DataType.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    },
    field: 'id_owner'
  },
  isDialog: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})

module.exports = Chat;