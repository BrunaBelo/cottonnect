import api from "./api";

export const tokenValidation = async(): Promise<boolean> => {
  const token = localStorage.getItem("user-token");
  if(!token){
    return false;
  }

  //implementar chamada a api para verificar validade do token
  try{
    const response = await api.get("users/token-renewal");
    const newToken = response.data.token;
    console.log(newToken)
    localStorage.setItem("user-token", newToken);
  }
  catch{
    return false;
  }

  return true;
  }
