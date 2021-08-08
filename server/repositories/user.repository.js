const User = require("../models/user.model");

class UserRepository {
  
  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users
    } catch (error) {
      throw new Error("Ошибка в User/Repository")
    }
  }

  async getUserByParams(params) {
    try {
      const user = await User.findAll({
        where: {...params}
      })
      return user.length ? user[0] : null
    } catch (error) {
      console.log('Ошибка при попытке сделать запрос на получения пользователя');
    }
  }

  async createUser({email, password: hashedPassword, firstName, lastName}) {
    try {
      const user = await User.create({email, password: hashedPassword, firstName, lastName})
      return user
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserRepository();