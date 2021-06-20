const User = require("./user.model");

class UserRepository {
  constructor() {}
  
  async getAllUsers() {
    const users = await User.findAll();
    return users
  }
}

module.exports = new UserRepository();