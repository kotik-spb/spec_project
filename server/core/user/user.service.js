const User = require("./user.model");
const bcrypt = require("bcrypt");
const UserRepository = require("./user.repository");

class UserService {

  static async login({email, password}) {
    try {
      const user = await UserRepository.getUserByParams({email});
      if (!user) {
        throw new Error("Пользователя не существует")
      }
      const isCorrectPassword = await bcrypt.compare(password, user.password);

      if (!isCorrectPassword) {
        throw new Error("Неверный пароль")
      }
      const {firstName, lastName, id} = user;

      return {firstName, lastName, id}
    } catch (error) {
      console.log('Ошибка в User/Service/login');
      throw new Error(error.message);
    }
  }
  
  static async createUser({email, password, firstName, lastName}) {
    try {
      const user = await UserRepository.getUserByParams({email})

      if (!user) {
        const hashedPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, password: hashedPassword, firstName, lastName})
        console.log(user);
        return user
      }
    } catch (error) {
      console.log("Ошибка при создании пользователя", error);
    }
  }
}

module.exports = UserService;