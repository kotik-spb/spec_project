const userRepository = require("./user.repository");

class UserController {
  constructor() {}

  async getAllUsers(req,res,next) {
    const users = await userRepository.getAllUsers();
    const filteredUsers = users.map(({id, firstName, lastName, createdAt}) => ({id, firstName, lastName, createdAt}))
    res.json({users: filteredUsers})
  }
}

module.exports = new UserController();