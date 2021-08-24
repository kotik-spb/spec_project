const postRepository = require("../repositories/post.repository")

class PostService {
  async getPostsByUser() {
    const userId = 1;
    const posts = await postRepository.getAllPostsByUser(userId)
    return posts;
  }

  async getPostById(idPost) {
    const post = await postRepository.getPostByParams(idPost)
    return post;
  }

  async createPost(postData) {
    const post = await postRepository.createPost(postData)
    return post;  
  }

  async deletePost(idPost) {
    const post = await postRepository.getPostByParams(idPost);
    if (!post) {
      throw new Error("No post with such an ID!");
    }
    await postRepository.deletePost(post);
  }

  async updatePost(idPost, newData) {
    const post = await postRepository.updatePostById(idPost, newData);
    return post;
  }
}

module.exports = new PostService()


