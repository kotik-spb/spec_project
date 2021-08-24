import { IAuthResponse, ILoginData, IRegistrationData  } from './../types/auth';
import { AxiosResponse } from "axios";
import { $axiosApiInstance } from "../http"

export default class AuthService {
  static async registration(payload: IRegistrationData): Promise<AxiosResponse<IAuthResponse>>{
    return $axiosApiInstance.post<IAuthResponse>('/user/registration', payload);
  }

  static async login(payload: ILoginData): Promise<AxiosResponse<IAuthResponse>> {
    return $axiosApiInstance.post<IAuthResponse>('/user/login', payload);
  }

  static async logout() {
    return $axiosApiInstance.post("/user/logout")
  }
}