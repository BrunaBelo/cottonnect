import axios from "axios";

export const tokenValidation = async(): Promise<boolean> => {
  const token = localStorage.getItem("user-token");
  if(!token){
    return false;
  }

  try{
    const response = await axios.get("users/token-renewal", {
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type' : 'application/json;charset=utf-8',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "x-access-token": token
        }
    });

    const newToken = response.data.token;
    localStorage.setItem("user-token", newToken);
  }
  catch{
    return false;
  }

  return true;
}
