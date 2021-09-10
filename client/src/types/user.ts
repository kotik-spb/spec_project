export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  isActivated: boolean;
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

