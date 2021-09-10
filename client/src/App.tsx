import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import AppRouter from './components/helpers/AppRouter';
import "./styles/main.scss"
import { useAppDispatch, useAppSelector } from './store/hooks';
import { checkAuth } from './store/features/auth/authThunks';
import axios from 'axios';

function App() {

  const {user, auth} = useAppSelector(({user, auth}) => ({user, auth}));
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    dispatch(checkAuth());
  }, [])

  const loadUsers = async () => {
    try {
      const {data} = await axios("http://localhost:5000/api/user");
      const users = data ?? [];
      setUsers(users);
    } catch (error) {
      
    }
  }
  
  return (
    <Container fluid>
      <div style={{background: "#000"}}>
      <div className="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="d-flex">
        <div className="toast-body">
          Hello, world! This is a 
        </div>
        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>  
      </div>
      <button onClick={loadUsers}>Load Users</button>
      <p>Auth State: {auth.isAuth.toString()}</p>
      <p>User State: {JSON.stringify(user.currentUser)}</p>
      <div>
        { users
           ? users.map((user: any) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.street}</p>
            </div>
          ))
          : null
        }
      </div>
      <h1>Пользователь не авторизован</h1>
      <Router>
        <Navbar />
        <Container className="d-flex justify-content-center align-items-center">
          <AppRouter />
        </Container>
        // TODO error handler toast component
      </Router>
    </Container>
  );
}

export default App;
