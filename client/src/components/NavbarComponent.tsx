import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import AuthService from '../services/AuthService';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setAuthState } from '../store/features/auth/authSlice';
import { setUser } from '../store/features/userSlice';
import { IUser } from '../types/user';

const NavbarComponent = () => {

  const user = useAppSelector(({user}) => user);
  const dispatch = useAppDispatch();

  async function logout() {
    try {
      dispatch(setAuthState(false));
      dispatch(setUser({} as IUser));
      await AuthService.logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand
        href={
          user.currentUser?.id
            ? `/id_${user.currentUser.id}`
            : "/login"
        }
      >
        X Project
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Link className={"nav-link"}
              to={
                user.currentUser?.id
                  ? `/id_${user.currentUser.id}`
                  : "id_1"
              }
            >Профиль</Link>
            <Link className={"nav-link"} to="/chats">Чаты</Link>
            <Link className={"nav-link"} to="/contacts">Контакты</Link>
        </Nav>
        <Nav>
          <Link className={"nav-link"} to="/settings">Настройки</Link>
          <Link onClick={logout} className={"nav-link"} to="/login">Выйти</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent;