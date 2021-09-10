const userRepository = require("../repositories/user.repository");
const userService = require('../services/user.service');
const path = require("path")

// TODO Спросить у Сани по поводу dependency injection
// Импорт сервиса и репы в конструкторе
class UserController {

  async getAllUsers(req,res,next) {
    const users = await userRepository.getAllUsers();
    const filteredUsers = users.map(({id, email, firstName, lastName, createdAt, idActivation}) => ({id, email, firstName, lastName, createdAt, idActivation}))
    res.json({users: filteredUsers})
  }

  async registration(req,res,next) {
    try {
      const {email, password, firstName, lastName} = req.body;
      const user = await userService.registration({email, password, firstName, lastName});
      // // TODO Приделать параметр maxAge со сроком жизни как у токена
      res.cookie("refreshToken", user.refreshToken, {httpOnly: true});
      return res.json(user)
    } catch (error) {
      console.log('TA FUCK');
      next(error)
    }   
  }

  async activateAccount(req,res,next) {
    try {
      const {idActivation} = req.params;
      const idUser = await userService.activateAccount(idActivation);
      return res.redirect(`${process.env.CLIENT}/id_${idUser}`)
    } catch (error) {
      next(error);
    }
  }

  async login(req,res,next) {
    try {
      const {email, password} = req.body;
      const user = await userService.login({email, password});
      const { firstName, lastName, id } = user;
      return res.json({firstName, lastName, id})
    } catch (error) {
      next(error)
    }
  }

  async logout(req,res,next) {
    try {
      const {refreshToken} = req.cookies;
      await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json({message: "Куки очищены"})
    } catch (error) {
      next(error)
    }
  }

  async refresh(req, res, next) {
    try {
      const {refreshToken} = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {httpOnly: true})
      return res.json(userData);
    } catch (error) {
      next(error)
    }
    
  async uploadFile(req, res, next) {
    console.log(req.files);
    const myFile = req.files.myFile;
    myFile.mv(`${path.resolve()}/static/${myFile.name}`);
    
    return res.json({files: req.files});
  }

}

module.exports = new UserController();