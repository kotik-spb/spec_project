import axios from 'axios';

export function fetchPostsByUser() {
  return axios.get("http://localhost:5000/api/user/1/posts")
}

export function fetchPostById(idPost: number) {
  return axios.get(`http://localhost:5000/api/user/1/posts/${idPost}`)
}

export function createPost({title, content}: IPostData) {
  return axios.post(
    "http://localhost:5000/api/user/1/posts",
    {title, content}
  )
}

export function updatePostById({idPost, title, content}: IPostData) {
  return axios.patch(
    `http://localhost:5000/api/user/1/posts/${idPost}`,
    {title, content}
  );
}

export function deletePostById(idPost: number) {
  return axios.delete(`http://localhost:5000/api/user/1/posts/${idPost}`);
}

interface IPostData {
  title: string;
  content: string;
  idPost?: number;
}