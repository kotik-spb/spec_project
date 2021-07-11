export interface IPost {
  id: number,
  title: string,
  content: string
  createdAt: string,
  updatedAt: string,
  userId: number
}

export interface IPostParams extends IPost {
  editPost(idPost: number): void,
  // deletePost(idPost: number): void
  askNeedToDeletePost(idPost: number): void
}