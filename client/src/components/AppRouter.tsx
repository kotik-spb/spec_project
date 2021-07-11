import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import {publicRoutes, privateRoutes} from '../routes';

const AppRouter = () => {
  const idUser = localStorage.getItem("ID_USER");
  return (
    <>
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
      <Redirect exact from="/" to={idUser ? `/id_${idUser}` : '/login'}/>
      <Route path="*" component={NotFoundPage} />
    </>
  )
}

export default AppRouter


{/* <Route */}
// path={notFoundRoute.path}
// component={notFoundRoute.component}
// exact={notFoundRoute.exact}
// {...notFoundRoute.params}
{/* /> */}