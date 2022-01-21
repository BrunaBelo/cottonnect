import api from "./api";
import { AxiosResponse } from "axios";
import { UserData } from "../interfaces/userData";

export const createUser = async(userData: UserData): Promise<AxiosResponse> => {
  console.log(userData)
  const response = await api.post("/users", userData)

  console.log(response.data)
  return response
}