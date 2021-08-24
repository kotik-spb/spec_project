const Post = require("../models/post.model");

class PostRepository {
  async getAllPostsByUser(userId) {
    const posts = await Post.findAll({
      where:{
        id_user: userId
      },
      order: [['createdAt', 'DESC']]
    });

    return posts;
  }

  async getPostByParams(idPost) {
    const post = await Post.findByPk(idPost);
    return post;
  }

  async createPost({title, content, userId}) {
    const post = await Post.create({
      title,
      content,
      userId
    });
    return post;
  }

  async updatePostById(idPost, {title, content}) {
    const post = await Post.update(
      {title, content},
      { where: {id: idPost}}
    );
    
    return post;
  }

  async deletePost(post) {
    await post.destroy()
  }
}

module.exports = new PostRepository();