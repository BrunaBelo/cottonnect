import api from "./api";
import { AxiosResponse } from "axios";
import { UserData } from "../interfaces/user-data";

export const createUser = async(userData: UserData): Promise<AxiosResponse> => {
  const response = await api.post("/users", userData);

  return response;
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
    const response = await api.put(`users/`, userData);
    user = response.data;
  } catch (error) {
    console.log("Erro ao atualizar usuário", error);
  }

  return user;
}
