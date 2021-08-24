const tokenRepository = require("../repositories/token.repository");
const tokenModel = require("../models/token.model");
const jwt = require("jsonwebtoken");

class TokenService {
  async saveToken(userId, refreshToken) {
    const token = await tokenRepository.getTokenByParam("userId", userId);

    if (token) {
      token.refreshToken = refreshToken;
      return token.save();
    }

    const tokenData = tokenModel.create({userId, refreshToken});
    return tokenData;
  }
  
  generateTokens(payload) {
    const accessToken = this.createToken(payload, process.env.JWT_ACCESS_SECRET_KEY);
    const refreshToken = this.createToken(payload, process.env.JWT_REFRESH_SECRET_KEY);

    return {accessToken, refreshToken}
  }

  createToken(payload, secretKey) {
    const token = jwt.sign(
      payload,
      secretKey,
      {expiresIn: "30m"}
    );

    return token;
  }
}

module.exports = new TokenService();