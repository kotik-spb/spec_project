const Post = require("./post.model");
const postRepository = require("./post.repository")

class PostService {
  static async getPostsByUser() {
    try {
      const userId = 1;
      const posts = await postRepository.getAllPostsByUser(userId)
      return posts;
    } catch (error) {
      throw Error(error.message);
    }
  }

  static async getPostById(idPost) {
    try {
      const post = await postRepository.getPostByParams(idPost)
      return post;
    } catch (error) {
      throw Error(error.message);
    }
  }

  static async createPost({title, content, userId}) {
    try {
      const post = await Post.create({
        title,
        content,
        userId
      });

      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deletePost(idPost) {
    try {
      const post = await postRepository.getPostByParams(idPost);
      if (!post) {
        throw new Error("No post with such an ID!");
      }
      await post.destroy()
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async updatePost(idPost, newData) {
    try {
      const post = await postRepository.updatePostById(idPost, newData);
      return post;
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = PostService