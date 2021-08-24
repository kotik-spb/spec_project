const postService = require("../services/post.service");

class PostController {

  async getPostsByUser(req, res, next) {
    try {
      const userId = 1;
      const posts = await postService.getPostsByUser(userId);
      return res.json(posts);
    } catch (error) {
      next(error)
    }
  }

  async getPostById(req, res, next) {
    try {
      const {idPost} = req.params;
      const post = await postService.getPostById(idPost);
      return res.json(post);
    } catch (error) {
      next(error)
    }
  }
  
  async createPost(req, res, next) {
    try {
      const userId = 1;
      const {title, content} = req.body;
      const post = await postService.createPost({title, content, userId});
      return res.json(post);
    } catch (error) {
      next(error)
    }

  }

  async updatePost(req,res,next) {
    try {
      const {idPost} = req.params;
      const {title, content} = req.body
      console.log(idPost, title, content);
      const post = await postService.updatePost(idPost, {title, content});
      return res.json(post);
    } catch (error) {
      next(error)
    }
  }

  async deletePost(req,res,next) {
    try {
      const {idPost} = req.params;
      console.log('Удаление поста контроллер', idPost);
      await postService.deletePost(idPost);
      return res.json("Пост был успешно удален");
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new PostController();