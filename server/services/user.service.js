const bcrypt = require("bcrypt");
const userRepository = require("../repositories/user.repository");
const UserDto = require("../dtos/user.dto");
const mailSerivce = require("../services/mail.service");
const v4 = require("uuid").v4;
const tokenService = require("./token.service");
const { ErrorHandler } = require("../error");
const tokenRepository = require("../repositories/token.repository");

class UserService {

  async registration({email, password, firstName, lastName}) {
    const existingUser = await userRepository.getUserByParams({email})
    
    if (existingUser) {
      throw new ErrorHandler(409, "Пользователь с таким email уже существует")
    }
    
    const idActivation = v4();
    const hashedPassword = await bcrypt.hash(password, 5);
    
    const user = await userRepository.createUser({email, password: hashedPassword, firstName, lastName, idActivation})
    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({...userDto});
    // await mailSerivce.sendActivationLink({
    //   email: userDto.email,
    //   firstName: userDto.firstName,
    //   lastName: userDto.lastName,
    //   activationUid: idActivation
    // });

    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {...tokens, user: userDto}
  }

  async activateAccount(idActivation) {
    const user = await userRepository.getUserByParams({idActivation})

    if (!user) {
      throw new ErrorHandler(400, "Пользователь с такой ссылкой активации не найден")
    }

    user.isActivated = true;
    await user.save();

    return user.id; 
  }

  async login({email, password}) {
      const user = await userRepository.getUserByParams({email});
      if (!user) {
        throw new ErrorHandler(400, "Пользователя не существует")
      }
      const isCorrectPassword = await bcrypt.compare(password, user.password);

      if (!isCorrectPassword) {
        throw new ErrorHandler(400, "Неверный пароль")
      }

      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({...userDto});

      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      console.log(JSON.stringify({...tokens, user: userDto}));

      return {...tokens, user: userDto}
  }

  async logout(refreshToken) {
    await tokenRepository.deleteTokenByParams({refreshToken});
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw new ErrorHandler(401, "Токен отсутствует");
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenData = await tokenService.findToken(refreshToken);

    if (!userData || !tokenData) {
      throw new ErrorHandler(401, "Токен не валиден или его не существует");
    }

    const user = await userRepository.getUserByParams({id: userData.id});

    if (!user) {
      throw new ErrorHandler(401, "Пользователя не существует");
    }

    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({...userDto});

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {...tokens, user: {...userDto}}
  }
}

module.exports = new UserService();

// interface IUserRepository {
//   getUserByParams(): Promise<>;
// }