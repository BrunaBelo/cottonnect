import { AxiosResponse } from "axios";
import { DonationData } from "../interfaces/donation-data";
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
  const data = buildFormData(donation)
  let response = {} as AxiosResponse

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
  donation.categories?.forEach(item => {
    data.append('categories[]', item.toString())
  })
  if(donation.photos != null){
    Array.from(donation.photos).forEach(photo => {
      data.append('photos', photo, photo.name)
    })
  }

  return data
}