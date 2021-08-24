const User = require("../models/user.model");

class UserRepository {
  
  async getAllUsers() {
    const users = await User.findAll();
    return users
  }

  async getUserByParams(params) {
    const user = await User.findOne({
      where: {...params}
    })    
    return user;
  }

  async createUser({email, password: hashedPassword, firstName, lastName, idActivation}) {
    const user = await User.create({email, password: hashedPassword, firstName, lastName, idActivation})
    return user
  }
}

module.exports = new UserRepository();