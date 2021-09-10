const {handleError, ErrorHandler} = require("../error");

module.exports = function (err, req, res, next) {
  if (err instanceof ErrorHandler) {
    handleError(err, res);
  }
  else {
    res.status(500).json({
      status: "error",
      statusCode: 500,
      message: "Непредвиденная ошибка"
    })
  }

}