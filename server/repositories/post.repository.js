const Post = require("../models/post.model");

class PostRepository {
  async getAllPostsByUser(userId) {
    try {
      const posts = await Post.findAll({
        where:{
          id_user: userId
        },
        order: [['createdAt', 'DESC']]
      });

      return posts;
    } catch (error) {
      console.log(error);
      throw new Error("Ошибка в Post/Repository/getAllPostsByUser");
    }
  }

  async getPostByParams(idPost) {
    try {
      const post = await Post.findByPk(idPost);
      return post;
    } catch (error) {
      throw new Error("Ошибка в Post/Repository/getPostByParams");
    }
  }

  async createPost({title, content, userId}) {
    try {
      const post = await Post.create({
        title,
        content,
        userId
      });
      return post;
    } catch (error) {
      console.log(error);
    }
  }

  async updatePostById(idPost, {title, content}) {
    try {      
      const post = await Post.update(
        {title, content},
        { where: {id: idPost}}
      );
      
      return post;
    } catch (error) {
      throw new Error("Ошибка в Post/Repository/updatePostById");
    }
  }

  async deletePost(post) {
    try {
      await post.destroy()
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostRepository();