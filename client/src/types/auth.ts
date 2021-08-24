import { IUser } from './user';

export interface IAuthResponse {
  user: IUser;
  refreshToken: string;
  accessToken: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegistrationData extends ILoginData {
  firstName: string;
  lastName: string;
}