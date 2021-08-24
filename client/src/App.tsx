import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/NavbarComponent';
import AppRouter from './components/helpers/AppRouter';

import "./styles/main.scss"

function App() {
  
  return (
    <Container fluid>
      <h1>Пользователь не авторизован</h1>
      <Router>
        <Navbar />
        <Container className="d-flex justify-content-center align-items-center">
          <AppRouter />
        </Container>
      </Router>
    </Container>
  );
}

export default App;
