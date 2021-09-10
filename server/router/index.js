const router = require('express').Router();
const postController = require('../controllers/post.controller');
const userController = require('../controllers/user.controller');

// TODO прочитать про REST API
router.get('/user', userController.getAllUsers);
router.get('/user/:id/posts', postController.getPostsByUser);
router.get('/user/:id/posts/:idPost', postController.getPostById);
router.get('/user/activate/:idActivation', userController.activateAccount);

router.post('/user/registration', userController.registration);
router.post('/user/login', userController.login);
router.post('/user/file', userController.uploadFile)
router.post('/user/:id/posts', postController.createPost);

router.patch('/user/:id/posts/:idPost', postController.updatePost);

router.delete('/user/:id/posts/:idPost', postController.deletePost);

module.exports = router;