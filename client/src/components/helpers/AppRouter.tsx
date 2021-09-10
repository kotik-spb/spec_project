import {Route, Switch} from 'react-router-dom';
import {publicRoutes, privateRoutes} from '../../routes';

const AppRouter = () => {
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
    </Switch>
  )
}

export default AppRouter