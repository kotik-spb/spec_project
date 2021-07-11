const Post = require("./post.model");
const postRepository = require("./post.repository");
const PostService = require("./post.service");

class PostController {

  async getPostsByUser(req,res,next) {
    try {
      const userId = 1;
      const posts = await PostService.getPostsByUser(userId);
      return res.json(posts);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async getPostById(req,res,next) {
    try {
      const {idPost} = req.params;
      const post = await PostService.getPostById(idPost);
      return res.json(post);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json(error.message);
    }
  }
  
  async createPost(req,res,next) {
    try {
      const userId = 1;
      const {title, content} = req.body;
      const post = await PostService.createPost({title, content, userId});
      return res.json(post);
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

  async updatePost(req,res,next) {
    try {
      const {idPost} = req.params;
      const {title, content} = req.body
      console.log(idPost, title, content);
      const post = await PostService.updatePost(idPost, {title, content});
      return res.json(post);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async deletePost(req,res,next) {
    try {
      const {idPost} = req.params;
      console.log('Удаление поста контроллер', idPost);
      await PostService.deletePost(idPost);
      return res.json("Пост был успешно удален");
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = new PostController();