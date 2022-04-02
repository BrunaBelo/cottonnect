import { AxiosResponse } from "axios";
import { AuctionFormData } from "../interfaces/auction-form-data";
import api from "./api";

export const getCategories = async () => {
  const result = await api.get('/categories', {
    params: {
      token: localStorage.getItem('user-token')
    }
  })

  return result
}

