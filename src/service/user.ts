import api from "./api";
import { AxiosResponse } from "axios";
import { UserData } from "../interfaces/userData";

export const createUser = async(userData: UserData): Promise<AxiosResponse> => {
  const response = await api.post("/users", userData)

  return response
}

export const validateUser = async (type: string, value: any): Promise<boolean>  => {
  const response = await api.get(`/users/validate-user?type=${type}&value=${value}`)

  return response.data.result
}