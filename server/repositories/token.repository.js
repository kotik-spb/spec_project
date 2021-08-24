const Token = require("../models/token.model");

class TokenRepository {
  async getTokenByParam(fieldName, fieldValue) {
    const token = await Token.findOne({where: {[fieldName]: fieldValue}});
    return token;
  }
}

module.exports = new TokenRepository();