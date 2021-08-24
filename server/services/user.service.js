const bcrypt = require("bcrypt");
const userRepository = require("../repositories/user.repository");
const UserDto = require("../dtos/user.dto");
const mailSerivce = require("../services/mail.service");
const v4 = require("uuid").v4;
const tokenService = require("./token.service");
class UserService {

  async registration({email, password, firstName, lastName}) {
    const existingUser = await userRepository.getUserByParams({email})

    if (existingUser) {
      throw new Error("Пользователь с таким email уже существует")
    }
    
    const idActivation = v4();
    const hashedPassword = await bcrypt.hash(password, 5);
    
    const user = await userRepository.createUser({email, password: hashedPassword, firstName, lastName, idActivation})

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({...userDto});
    await mailSerivce.sendActivationLink({
      email: userDto.email,
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      activationUid: idActivation
    });

    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {...tokens, ...userDto}
  }

  async activateAccount(idActivation) {
    const user = await userRepository.getUserByParams({idActivation})

    if (!user) {
      throw new Error("Пользователь с такой ссылкой активации не найден")
    }

    user.isActivated = true;
    await user.save();

    return user.id; 
  }

  async login({email, password}) {
    try {
      const user = await userRepository.getUserByParams({email});
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
}

module.exports = new UserService();

// interface IUserRepository {
//   getUserByParams(): Promise<>;
// }