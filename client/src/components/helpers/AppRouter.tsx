import { Route, Switch, Redirect} from 'react-router-dom';
import {publicRoutes, privateRoutes} from '../../routes';
import { useAppSelector } from '../../store/hooks';

const AppRouter = () => {
  const {isAuth} = useAppSelector(state => state.auth);
  
  return (
    <Switch>
      {
        publicRoutes.map((r, idx) => (
          <Route
            key={idx}
            path={r.path}
            component={r.component}
            exact={r.exact}
            {...r.params}
          />
        ))
      }
      {
        privateRoutes.map((r, idx) => (
          <Route
            key={idx}
            path={r.path}
            component={r.component}
            exact={r.exact}
            {...r.params}
          />
        ))
      }
      {
        !isAuth && <Redirect to="/login" />
      }
      {/* <Redirect exact  from="/" to={idUser ? `/id_${idUser}` : '/login'}/> */}
      {/* <Route path="*" component={NotFoundPage} /> */}
    </Switch>
  )
}

export default AppRouter


{/* <Route */}
// path={notFoundRoute.path}
// component={notFoundRoute.component}
// exact={notFoundRoute.exact}
// {...notFoundRoute.params}
{/* /> */}