const tokenRepository = require("../repositories/token.repository");
const Token = require("../models/token.model");
const jwt = require("jsonwebtoken");

class TokenService {
  async saveToken(userId, refreshToken) {
    const token = await tokenRepository.getTokenByParam({userId});

    if (token) {
      token.refreshToken = refreshToken;
      return token.save();
    } 
    
    return await Token.create({userId, refreshToken});
  }
  
  generateTokens(payload) {
    const accessToken = this.createToken(payload, process.env.JWT_ACCESS_SECRET_KEY, "15m");
    const refreshToken = this.createToken(payload, process.env.JWT_REFRESH_SECRET_KEY, "30m");

    return {accessToken, refreshToken}
  }

  createToken(payload, secretKey, expiresIn) {
    const token = jwt.sign(
      payload,
      secretKey,
      {expiresIn}
    );

    return token;
  }

  validateRefreshToken(refreshToken) {
    try {
      const decodedToken = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY)
      return decodedToken;
    } catch (error) {
      return null;
    }
  }

  validateAccessToken(accessToken) {
    try {
      const decodedToken = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET_KEY)
      return decodedToken;
    } catch (error) {
      return null;
    }
  }

  async findToken(refreshToken) {
    const existingToken = tokenRepository.getTokenByParam({refreshToken});
    return existingToken;
  }
}

module.exports = new TokenService();