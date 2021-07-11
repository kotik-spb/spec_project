import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

const NavbarComponent = () => {

  const logout = () => {
    console.log('Helllo World');
    
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand
        href={
          localStorage.getItem("ID_USER")
            ? `/id_${localStorage.getItem("ID_USER")}`
            : "id_1"
        }
      >
        X Project
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Link className={"nav-link"}
              to={
                localStorage.getItem("ID_USER")
                  ? `/id_${localStorage.getItem("ID_USER")}`
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