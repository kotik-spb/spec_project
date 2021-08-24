export interface IUser {
  id: number;
  email: string;
}
export interface IRegistrationResData {
  id: number
}

export interface ILoginResData {
  id: number;
  firstName: string;
  lastName: string;
}

export interface IAuthPageProps {
  isLogin: boolean
}

