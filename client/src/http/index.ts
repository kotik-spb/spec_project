import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const API_URL = "http://localhost:5000/api";

export const $axiosApiInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true 
});

$axiosApiInstance.interceptors.request.use((config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  return new Promise((res,rej) => res(config));
})

$axiosApiInstance.interceptors.response.use(
  (response: AxiosResponse): Promise<AxiosResponse> => {
    return new Promise((res,rej) => res(response));
  }
)