const User = require("./user.model");

class UserRepository {
  
  static async getAllUsers() {
    try {
      const users = await User.findAll();
      return users
    } catch (error) {
      throw new Error("Ошибка в User/Repository")
    }
  }

  static async getUserByParams(params) {
    try {
      const user = await User.findAll({
        where: {...params}
      })
      return user.length ? user[0] : null
    } catch (error) {
      console.log('Ошибка при попытке сделать запрос на получения пользователя');
    }
  }
}

module.exports = UserRepository;