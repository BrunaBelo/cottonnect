import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/",
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Content-Type' : 'application/json;charset=utf-8',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default api;