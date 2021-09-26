import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import AppRouter from './components/helpers/AppRouter';
import "./styles/main.scss"
import { useAppDispatch, useAppSelector } from './store/hooks';
import { checkAuth } from './store/features/auth/authThunks';
import router from './utils/history';
import axios from 'axios';

function App() {
  const {user, auth} = useAppSelector(({user, auth}) => ({user, auth}));
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    dispatch(checkAuth());
    if (!auth.isAuth && router.location.pathname !== "/registration") {
      console.log(router);
      
      router.push("/login");

    }
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
      {
        auth.isAuth
          ? <h2>{user.currentUser.firstName} {user.currentUser.lastName}</h2>
          : <h1>Пользователь не авторизован</h1>
      }
      
      <Router>
        { auth.isAuth &&  <Navbar />}
        <Container className="d-flex justify-content-center align-items-center">
          <AppRouter />
        </Container>
        {/* // TODO error handler toast component */}
      </Router>
    </Container>
  );
}

export default App;
