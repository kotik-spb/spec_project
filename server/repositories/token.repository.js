const Token = require("../models/token.model");

class TokenRepository {
  async getTokenByParam(params) {
    const token = await Token.findOne({where: params});
    return token;
  }

  async deleteTokenByParams(params) {
    await Token.destroy({
      where: params
    })
  }
}

module.exports = new TokenRepository();