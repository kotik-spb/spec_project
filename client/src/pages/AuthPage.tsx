import React, { FC } from 'react'
import Login from '../components/LoginComponent'
import Registration from '../components/RegistrationComponent'
import { IAuthPageProps } from '../types/user'

const AuthPage: FC<IAuthPageProps> = ({isLogin}) => {
  return (
    <div style={{height: '100vh - 56px' }}>
      {
        isLogin
          ? <Login />
          : <Registration />
      }
    </div>
  )
}

export default AuthPage;
