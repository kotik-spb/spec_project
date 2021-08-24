const {handleError} = require("../error");

module.exports = function (err, req, res, next) {
  handleError(err, res);
}