const UserRepository = require("./user.repository");
const UserService = require('./user.service');
class UserController {
  async getAllUsers(req,res,next) {
    const users = await UserRepository.getAllUsers();
    const filteredUsers = users.map(({id, email, firstName, lastName, createdAt}) => ({id, email, firstName, lastName, createdAt}))
    res.json({users: filteredUsers})
  }

  async login(req,res,next) {
    try {
      const {email, password} = req.body;
      const user = await UserService.login({email, password});
      const { firstName, lastName, id } = user;
      console.log(user);
      return res.json({firstName, lastName, id})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async register(req,res,next) {
    try {
      const {email, password, firstName, lastName} = req.body;
      const user = await UserService.createUser({email, password, firstName, lastName});
      return res.json({id: user.id})
    } catch (error) {
      console.log('Ошибка при регистрации', error);
    }   
  }
}

module.exports = new UserController();