const Post = require("./post.model");

class PostRepository {
  async getAllPostsByUser(userId) {
    try {
      const posts = await Post.findAll({
        where:{
          id_user: userId
        }
      });

      return posts.sort(((a,b) => b.createdAt - a.createdAt));
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
}

module.exports = new PostRepository();