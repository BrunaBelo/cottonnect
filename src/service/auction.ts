import { AxiosResponse } from "axios";
import { Auction } from "../interfaces/auction";
import { AuctionFormData } from "../interfaces/auction-form-data";
import api from "./api";

export const getAutionInformation = async(auctionId: string): Promise<Auction> => {
  let auction = {} as Auction

  try {
    const response = await api.get(`auctions/${auctionId}`);
    auction = response.data;
  } catch (error) {
    console.log('Erro ao buscar leilão')
  }

  return auction;
}

export const createAuction = async(donation: AuctionFormData): Promise<AxiosResponse> => {
  const data = buildFormData(donation)
  let response = {} as AxiosResponse

  try{
    response = await api.post("/donations", data)
  }
  catch(err){
    console.log('Erro ao salvar leilão', err)
  }

  return response
}

const buildFormData = (donation: AuctionFormData) => {
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