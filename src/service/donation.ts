import { AxiosResponse } from "axios"
import api from "./api"

export const findDonation = async(id: string): Promise<AxiosResponse> => {
  let donation = {} as AxiosResponse
  try {
    donation = await api.get(`/donations/${id}`)
  } catch (error) {
    console.log('Carai tio deu ruim')
  }

  return donation
}
