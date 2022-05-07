import api from "./api";
import { UserData } from "../interfaces/user-data";

export const createUser = async(userData: UserData): Promise<UserData> => {
  let user = {} as UserData;

  try {
    const response = await api.post("/users", userData);
    user = response.data;
  } catch (error) {
    console.log("Erro ao criar novo usuário", error);
  }

  return user;
}

export const validateUser = async (type: string, value: any): Promise<boolean>  => {
  const userId = localStorage.getItem("user-id") || "";
  let isValid = false;

  try {
    const response = await api.get(`/users/validate-user?type=${type}&value=${value}&userId=${userId}`);
    isValid = response.data.result;
  } catch (error) {
    console.log("Erro ao buscar usuário", error);
  }

  return isValid;
}

export const login = async (email: string, password: string): Promise<boolean>  => {
  try {
    const response = await api.post('/users/login', {"email": email, "password": password});
    localStorage.setItem("user-token", response.data.token);
    localStorage.setItem("user-city", response.data.cityId);
    localStorage.setItem("user-id", response.data.id);
    return response.data;
  } catch (error) {
    return false;
  }
}

export const getCottonFlakesFromUser = async (): Promise<number> => {
  let cottons = 0;

  try {
    const response = await api.get("users/get-cotton-flakes");
    cottons = response.data.cottonFlakes;
  } catch (error) {
    console.log("Erro ao buscar moedas", error);
  }

  return cottons;
}

export const getUser = async (userId: string): Promise<UserData> => {
  let user = {} as UserData;

  try {
    const response = await api.get(`users/${userId}`);
    user = response.data;
  } catch (error) {
    console.log("Erro ao buscar usuário", error);
  }

  return user;
}

export const updateUser = async (userData: UserData): Promise<UserData> => {
  let user = {} as UserData;

  try {
    const response = await api.put(`users/${userData.id}`, userData);
    user = response.data;
  } catch (error) {
    console.log("Erro ao atualizar usuário", error);
  }

  return user;
}

export const forgotAccount = async (email: string): Promise<Boolean> => {
  let result = false;

  try {
    const response = await api.get(`users/forgot-account/${email}`);
    result = response.data;
  } catch (error) {
    console.log("Erro ao gerar link para recuperar conta", error);
  }

  return result;
}

export const changePassword = async (userId: string, password: string, code: string): Promise<Boolean> => {
  let result = false;

  try {
    const response = await api.post(`users/change-password`, {
      userId, password, code
    });

    result = response.data;
  } catch (error) {
    console.log("Erro ao alterar senha", error);
  }

  return result;
}

export const confirmationAccount = async (userId: string): Promise<Boolean> => {
  let result = false;

  try {
    const response = await api.get(`users/confirm-account?id=${userId}`);
    result = response.data;
  } catch (error) {
    console.log("Erro confirmar conta", error);
  }

  return result;
}

export const confirmationPhone = async (userId: string, code: string): Promise<Boolean> => {
  let result = false;

  try {
    const response = await api.get(`users/confirm-phone-number?userId=${userId}&code=${code}`);
    result = response.data;
  } catch (error) {
    console.log("Erro confirmar número de celular", error);
  }

  return result;
}

export const resendCodeVerification = async (userId: string): Promise<Boolean> => {
  let result = false;

  try {
    const response = await api.get(`users/resend-code-verification-phone?userId=${userId}`);
    result = response.data;
  } catch (error) {
    console.log("Erro ao reenviar codigo para o número de celular", error);
  }

  return result;
}

