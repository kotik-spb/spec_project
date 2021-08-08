import axios from "axios";

export function signIn({email, password}: ISign) {
  return axios.post(
    "http://localhost:5000/api/user/login",
    {email, password}
  )
}

export function createUser({email, password, firstName, lastName}: ISign) {
  return axios.post(
  "http://localhost:5000/api/user/create",
    {email, password, firstName, lastName}
  )
}

interface ISign {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

