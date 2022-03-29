import axios from "axios";
import config from 'dotenv/config';

const getToken = (): string => {
  let token = localStorage.getItem('user-token')
  if(!token){
    token = ''
  }

  return token
}

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Content-Type' : 'application/json;charset=utf-8',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    "x-access-token": getToken()
    }
});

export default api;
