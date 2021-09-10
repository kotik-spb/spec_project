const { ErrorHandler } = require("../error");
const tokenService = require("../services/token.service");

module.exports = function(req,res,next) {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      throw ErrorHandler.Unauthorized();
    }

    const accessToken = authorizationHeader.split(" ")[1];

    if (!accessToken) {
      throw ErrorHandler.Unauthorized();
    }

    const userData = tokenService .validateAccessToken(accessToken);

    if (!userData) {
      throw ErrorHandler.Unauthorized();
    }

    req.user = userData;
    next();
  } catch (error) {
    next(error)
  }
}