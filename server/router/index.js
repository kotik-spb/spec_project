const userController = require('../core/user/user.controller');

const router = require('express').Router();

router.get('/', (req,res,next) => {
  res.json('Im okay thanks')
})
router.get('/user', userController.getAllUsers)


module.exports = router;