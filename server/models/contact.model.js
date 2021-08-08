const db = require("../db")
const {DataTypes} = require("sequelize")
const User = require("./user.model")

const Contact = db.define('contact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    },
    field: 'id_user'
  },
  idContact: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})