const router = require('express').Router();
const postController = require('../core/post/post.controller');
const userController = require('../core/user/user.controller');

router.get('/user', userController.getAllUsers);
router.get('/user/:id/posts', postController.getPostsByUser);
router.get('/user/:id/posts/:idPost', postController.getPostById);
router.post('/user/create', userController.register);
router.post('/user/login', userController.login);
router.post('/user/:id/posts', postController.createPost);
router.patch('/user/:id/posts/:idPost', postController.updatePost);
router.delete('/user/:id/posts/:idPost', postController.deletePost);


module.exports = router;