import { IAuthResponse } from './../../../types/auth';
import { API_URL } from './../../../http/index';
import { $axiosApiInstance } from '../../../http';
import {setAuthState, setLoadingState} from './authSlice';
import { AxiosResponse } from 'axios';
import { setUser } from '../userSlice';

export const checkAuth = () => async (dispatch: any) => {
  dispatch(setLoadingState(true));
  try {
      const {data}: AxiosResponse<IAuthResponse> = await $axiosApiInstance.get(`${API_URL}/user/refresh`);
      localStorage.setItem("token", data.accessToken);
      console.log(data);
      dispatch(setUser(data.user));
      dispatch(setAuthState(true));
      dispatch(setLoadingState(false))
  } catch (error) {
    console.log(error);
  }
}