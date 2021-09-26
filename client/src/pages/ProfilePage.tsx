import { ChangeEvent, SyntheticEvent, useState, useRef, useEffect, createRef } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Post from '../components/Post';
import Modal from '../components/Modal';
import { IPost } from '../types/post';
import * as postService from "../services/postService";
import FileUploader from '../components/helpers/FileUploader';

const Profile = () => {
  // TODO заменить хуки useState на useReducer
  const [posts, setPosts] = useState<IPost[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [currentEditPostId, setCurrentEditPostId] = useState<number>(0);
  const [idPostToDelete, setIdPostToDelete] = useState<number>(0);
  const [show, setShow] = useState(false);
  
  const $formRef = useRef<HTMLFormElement>(null);

  const handleAccept = () => {
    setShow(false);
    deletePost(idPostToDelete);
    setIdPostToDelete(0);
  };

  const handleCancel = () => {
    setShow(false);
    setIdPostToDelete(0)
  };
  

  useEffect(() => {
    fetchPostsByUser()
  },[]);

  async function fetchPostsByUser(): Promise<void> {
    const {data} = await postService.fetchPostsByUser()
    setPosts(data);
  }

  async function fetchPostById(idPost: number) {
    try {
      const {data} = await postService.fetchPostById(idPost);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  
  async function createPost(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (title && content) {
      try {
        const {data} = await postService.createPost({title,content});

        console.log("Новый пост был успешно добавлен!");
        console.log(data);

        await fetchPostsByUser();
        setTitle("");
        setContent("");
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function editPost(idPost:number) {
    try {
      setIsEditMode(true);
      setCurrentEditPostId(idPost)
      $formRef?.current?.scrollIntoView({behavior: "smooth"});

      const post = await fetchPostById(idPost);

      if (post) {
        setTitle(post.title);
        setContent(post.content);
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  function cancelPostUpdating() {
    setIsEditMode(false);
    setCurrentEditPostId(0);
    setTitle("");
    setContent("");
  }

  async function updatePost() {
    try {
      console.log('catched in udpate');
      if (!(title && content)) {
        throw new Error("Не заполнена тема или тело поста")
      }
      
      await postService.updatePostById({idPost: currentEditPostId, title, content})

      console.log('Пост успешно обновлен!');
      setCurrentEditPostId(0);
      setIsEditMode(false);
      setTitle("");
      setContent("");
      await fetchPostsByUser();
    } catch (error) {
      console.log(error);
    }
  }

  function askNeedToDeletePost(idPost: number) {
    setIdPostToDelete(idPost);
    setShow(true);
  }

  async function deletePost(idPost:number) {
    try {
      await postService.deletePostById(idPost);
      await fetchPostsByUser();
      console.log('Пост успешно удален');
    } catch (error) {
      console.log(error); 
    }
  }

  async function loadImage() {
    console.log('Здесь будет содержаться логика загрузки страницы');
  }

  return (
    <Container className="pt-3">
      <Row>
        <Col sm="4">
          <p>
            Kind of Image
          </p>
          <form>
            <FileUploader/>
          </form>
        </Col>
        <Col sm="8">
          <div>
            <h2><strong>Иван Иванов</strong></h2>
            <ul>
              <li>Пол: мужской</li>
              <li>Город: Санкт-Петербург</li>
            </ul>
          </div>
          <div>
          <h4>Посты</h4>
          <Form onSubmit={createPost} ref={$formRef}>
            <Form.Group className="mb-3">
              <Form.Label>Тема</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите заголовок поста"
                value={title}
                onChange={({target}:ChangeEvent<HTMLInputElement>) => setTitle(target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Чем вы хотите поделиться?
              </Form.Label>
              <Form.Control
                onChange={({target}:ChangeEvent<HTMLInputElement>) => setContent(target.value)}
                value={content}
                as="textarea"
                placeholder="Напишите ваши мысли"
                rows={3}
              />
            </Form.Group>
            {
              isEditMode
                ? (
                  <>
                    <Button onClick={updatePost} className="mx-1" variant="dark" type="button">
                      Сохранить
                    </Button>
                    <Button onClick={cancelPostUpdating} className="mx-1" variant="danger" type="button">
                      Отменить
                    </Button>
                  </>
                )
                : (
                  <Button
                    variant="dark"
                    type="submit"
                  >
                    Отправить
                  </Button>
                )
            }
          </Form>
          <div className="pt-3">
            {
              posts.length
                ? posts.map(post => <Post key={post.id} {...post} editPost={editPost} askNeedToDeletePost={askNeedToDeletePost} />)
                : "Записи отсутствуют"
            }
          </div>
          </div>
        </Col>
      </Row>
      <Modal
        show={show}
        handleCancel={handleCancel}
        handleAccept={handleAccept}
      />
    </Container>
  )
}

export default Profile
