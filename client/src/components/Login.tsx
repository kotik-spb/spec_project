import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import AuthService from '../services/AuthService';
import { useAppDispatch } from '../store/hooks';
import { setUser } from '../store/features/userSlice';


const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory<History>();
  const dispatch = useAppDispatch();

  async function logIn(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (email && password) {
      try {
        const {data} = await AuthService.login({email, password})
        localStorage.setItem("token", data.accessToken);
        dispatch(setUser(data.user));
        history.push(`/id_${data.user.id}`);
      }
      catch (error) {
        console.error('Ошибка при попытке авторизации');
        console.log(error);
      }    
    }
  }

  return (
    <Form
      className="p-4"
      style={{minWidth: 500, border: "1px solid #e5e5e5", borderRadius: 10}}
      onSubmit={logIn}
    >

      <Form.Group controlId="formEmail">
        <Form.Label>Почта Email</Form.Label>
        <Form.Control
          value={email}
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setEmail(target.value)}
          type="email"
          placeholder="Введите email"
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          value={password}
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setPassword(target.value)}
          type="password"
          placeholder="Введите пароль"
        />
      </Form.Group>
{/* 
      <Form.Group controlId="formCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button
        variant="dark"
        type="submit"
      >
        Войти
      </Button>

    </Form>
  )
}

export default Login;