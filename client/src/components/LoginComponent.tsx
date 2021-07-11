import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import axios, { AxiosResponse } from 'axios';
import { ILoginResData } from '../types/user';


const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory<History>();

  function logIn(e: SyntheticEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (email && password) {
      const data = {email, password};

      axios.post(
        "http://localhost:5000/api/user/login",
        data
      )
      .then(({data}:AxiosResponse<ILoginResData>) => {
        history.push(`/id_${data.id}`);
        localStorage.setItem("ID_USER", (data.id).toString());
      })
      .catch(e => {
        console.error('Ошибка при попытке авторизации');
        console.error(e);
      })
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