import { AxiosResponse } from "axios";
import { DonationData } from "../interfaces/donationData";
import api from "./api";

export const getCategories = async () => {
  const result = await api.get('/categories', {
    params: {
      token: localStorage.getItem('user-token')
    }
  })

  return result
}

export const createDonation = async(donation: DonationData): Promise<AxiosResponse> => {
  const response = await api.post("/donations", donation)

  return response
}

