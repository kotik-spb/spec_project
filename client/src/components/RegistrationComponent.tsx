import { AxiosResponse } from 'axios';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ISignUpResData } from '../types/user';
import { createUser } from '../services/userService';

const SignUp = () => {
  
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordReapeat, setPasswordReapeat] = useState<string>("");
  const history = useHistory<History>();

  async function register(e: SyntheticEvent<HTMLFormElement> ): Promise<void> {
    
    e.preventDefault();

    if (
        email && password && firstName && lastName && passwordReapeat
        && (passwordReapeat === password)
      ) {
        try {
          const {data}:AxiosResponse<ISignUpResData> = await createUser({email, password, firstName, lastName})
          history.push(`/id_${data.id}`);
          localStorage.setItem("ID_USER", (data.id).toString());
        } catch (error) {
          console.error('Ошибка при попытке регистрации');
          console.log(error); 
        }
    }    
    
  }

  return (
    <Form
      className="p-4"
      style={{
        minWidth: 500,
        border: "1px solid #e5e5e5",
        borderRadius: 10
      }}
      onSubmit={register}
    >

      <Form.Group controlId="formFirstName">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите имя"
          value={firstName}
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setFirstName(target.value)}
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Фамилия</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите фамилию"
          value={lastName}
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setLastName(target.value)}
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setEmail(target.value)}
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setPassword(target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPasswordRepeat">
        <Form.Label>Пароль (повторно)</Form.Label>
        <Form.Control
          type="password"
          placeholder="Введите пароль повторно"
          value={passwordReapeat}
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setPasswordReapeat(target.value)}
        />
      </Form.Group>
{/* 
      <Form.Group controlId="formCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="dark" type="submit">
        Зарегистрироваться
      </Button>
    </Form>
  )
}

export default SignUp;