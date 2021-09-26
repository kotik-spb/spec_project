import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAuthResponse } from "../types/auth";

let ONCE_USED = false

export const API_URL = "http://localhost:5000/api";

export const $axiosApiInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

$axiosApiInstance.interceptors.request.use((config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return new Promise((res) => res(config));
})

$axiosApiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('ВЕРНЫЙ RESPONSE');
    console.log(response);
    return response
  },
  async (error) => {
    const originalConfig = error.config;
    if (error.response.status === 401 && error.config && !ONCE_USED) {
      try {
        ONCE_USED = true;
        const response = await $axiosApiInstance.get<IAuthResponse>("/user/refresh");
        localStorage.setItem("token", response.data.accessToken);
        return $axiosApiInstance.request(originalConfig)
      }
      catch (error) {
        console.log(error);
      }
    }
    throw error;
  }
)