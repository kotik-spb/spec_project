const postRepository = require("../repositories/post.repository")

class PostService {
  async getPostsByUser() {
    try {
      const userId = 1;
      const posts = await postRepository.getAllPostsByUser(userId)
      return posts;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getPostById(idPost) {
    try {
      const post = await postRepository.getPostByParams(idPost)
      return post;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async createPost(postData) {
    try {
      const post = await postRepository.createPost(postData)
      return post;  
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deletePost(idPost) {
    try {
      const post = await postRepository.getPostByParams(idPost);
      if (!post) {
        throw new Error("No post with such an ID!");
      }
      await postRepository.deletePost(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updatePost(idPost, newData) {
    try {
      const post = await postRepository.updatePostById(idPost, newData);
      return post;
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = new PostService()


