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


export const createDonation = async(donation: DonationData): Promise<AxiosResponse | boolean> => {
  const data = buildFormData(donation)
  let response = false

  try{
    response = await api.post("/donations", data)
  }
  catch(err){
    console.log('Erro ao salvar doação', err)
  }

  return response
}

const buildFormData = (donation: DonationData) => {
  const data = new FormData();

  data.append('title', donation.title)
  data.append('description', donation.description)
  data.append('closingDate', (donation.closingDate as Date).toString())
  donation.photos?.forEach(photo => {
    data.append('photos', photo, photo.name)
  })
  donation.categories?.forEach(item => {
    data.append('categories[]', item.toString())
  })

  return data
}