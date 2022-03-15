import axios from "axios";

const getToken = (): string => {
  let token = localStorage.getItem('user-token')
  if(!token){
    token = ''
  }

  return token
}

const api = axios.create({
  baseURL: "http://localhost:3333/",
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Content-Type' : 'application/json;charset=utf-8',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    "x-access-token": getToken()
    }
});

export default api;