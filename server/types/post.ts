interface IPost {
  id: number;
  title: string;
  content: string;
  idUser: number;
  createdAt: string;
  updatedAt: string;
}

interface IPostService {
  getPostByUser(): Promise<IPost[]>;
  getPostById(idPost: number): Promise<IPost>;
  createPost(postData): Promise<IPost>;
  deletePost(idPost: number): Promise<void>;
  updatePost(idPost: number, newData): Promise<IPost>;
}