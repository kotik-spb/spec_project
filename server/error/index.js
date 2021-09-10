// TODO исправить названия класса
class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }

  static Unauthorized() {
    return new ErrorHandler(401, "Пользователь не авторизован");
  }
}

function handleError(err, res) {
  const {statusCode, message}= err;
  return res.status(statusCode).json({
    status: "error",
    statusCode,
    message
  })
}

module.exports = {
  ErrorHandler,
  handleError
}