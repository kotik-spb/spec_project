import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAuthResponse } from "../types/auth";

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
    return response
  },
  async (error) => {
    console.log("RESPONSE С ОШИБКОЙ");
    console.log(JSON.stringify(error));
    const originalConfig = error.config;
    if (error.response.status === 401 && error.config && !error.config._onceUsed) {
      try {
        error.config._onceUsed = true;
        const response = await $axiosApiInstance.get<IAuthResponse>("/refresh");
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