const userRepository = require("../repositories/user.repository");
const userService = require('../services/user.service');

class UserController {
  async getAllUsers(req,res,next) {
    const users = await userRepository.getAllUsers();
    const filteredUsers = users.map(({id, email, firstName, lastName, createdAt}) => ({id, email, firstName, lastName, createdAt, idActivation}))
    res.json({users: filteredUsers})
  }

  async registration(req,res,next) {
    try {
      console.log(req.params);
      // const {email, password, firstName, lastName} = req.body;
      // const user = await userService.registration({email, password, firstName, lastName});
      // // TODO Приделать параметр maxAge со сроком жизни как у токена
      // res.cookie("refreshToken", user.refreshToken, {httpOnly: true})
      // return res.json(user)
      return res.json("КОНТРОЛЛЕР РЕГИСТРАЦИИ")
    } catch (error) {
      console.log('Ошибка при регистрации', error);
    }   
  }

  async activateAccount(req,res,next) {
    try {
      const {idActivation} = req.params;
      const idUser = await userService.activateAccount(idActivation);
      return res.redirect(`${process.env.CLIENT}/id_${idUser}`)
    } catch (error) {
      console.log("Ошибка при активации аккаунта");
    }
  }

  async login(req,res,next) {
    try {
      const {email, password} = req.body;
      const user = await userService.login({email, password});
      const { firstName, lastName, id } = user;
      console.log(user);
      return res.json({firstName, lastName, id})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = new UserController();