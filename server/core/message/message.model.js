const {DataTypes, Deferrable} = require("sequelize");

const db = require("../../db");
const MessageType = require("./additionalModels/messageType.model");
const User = require("../user/user.model");
const Chat = require("../chat/chat.model");

const Message = db.define('message', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
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
  idChat: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Chat,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    },
    field: 'id_chat'
  },
  idTypeMessage: {
    type: DataType.INTEGER,
    references: {
      model: MessageType,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    },
    field: 'id_type_message'
  }
})

module.exports = Message;