interface IPost {
  id: number;
  title: string;
  content: string;
  idUser: number;
  createdAt: string;
  updatedAt: string;
}

interface IUserController {
  getAllUsers(): Promise;
  registration(): Promise;
  activateAccount(): Promise;
  login(): Promise;
  logout(): Promise;
  refresh(): Promise;
  uploadFile(): Promise;
}

interface IPostController {
  
}

interface IPostService {
  getPostByUser(): Promise<IPost[]>;
  getPostById(idPost: number): Promise<IPost>;
  createPost(postData): Promise<IPost>;
  deletePost(idPost: number): Promise<void>;
  updatePost(idPost: number, newData): Promise<IPost>;
}

interface IUserService {
  registration(ANY): Promise<ANY>;
  activateAccount(idActivation: string): Promise<string>;
  login(): Promise;
  logout(): Promise;
  refresh(): Promise;
}

interface ITokenService {
  saveToken(): Promise;
  generateTokens(): Promise;
  createTokens(): Promise;
  validateRefreshToken(): Promise;
  validateAccessToken(): Promise;
  findToken(): Promise;
}

interface IUserRepository {
  getAllUsers(): Promise;
  getUserByParams(): Promise;
  createUser(): Promise;
}

interface ITokenRepository {
  getTokensByParam(): Promise;
  deleteTokenByParams(): Promise;
}

interface IPostRepository {
  getAllPostsByUser(): Promise;
  getPostByParams(idPost: string): Promise;
  createPost(): Promise;
  updatePostById(): Promise;
  deletePost(): Promise;
}