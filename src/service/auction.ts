import { AxiosResponse } from "axios";
import { Auction } from "../interfaces/auction";
import { AuctionFormData } from "../interfaces/auction-form-data";
import api from "./api";

export const getAutionInformation = async(auctionId: string): Promise<Auction> => {
  let auction = {} as Auction;

  try {
    const response = await api.get(`auctions/${auctionId}`);
    auction = response.data;
  } catch (error) {
    console.log('Erro ao buscar leilão');
  }

  return auction;
}

export const createAuction = async(auction: AuctionFormData): Promise<AxiosResponse> => {
  const data = buildFormData(auction);
  let response = {} as AxiosResponse;

  try{
    response = await api.post("/auctions", data);
  }
  catch(err){
    console.log('Erro ao criar leilão', err);
  }

  return response;
}

const buildFormData = (auction: AuctionFormData) => {
  const data = new FormData();
  data.append('title', auction.title);
  data.append('description', auction.description);
  data.append('closingDate', (auction.closingDate as Date).toString());
  auction.categories?.forEach(item => {
    data.append('categories[]', item.toString());
  })
  if(auction.photos != null){
    Array.from(auction.photos).forEach(photo => {
      data.append('photos', photo, photo.name);
    })
  }

  return data;
}

export const getAllAuctions = async(cityId: string): Promise<Auction[]> => {
  let auctions = [] as Auction[];

  try {
    const response = await api.get(`auctions?cityId=${cityId}`);
    auctions = response.data;
  } catch (error) {
    console.log('Erro ao buscar leilões');
  }

  return auctions;
}

export const getAuctionsDonated = async(): Promise<Auction[]> => {
  let auctions = [] as Auction[];

  try {
    const response = await api.get(`auctions/donated`);
    auctions = response.data;
  } catch (error) {
    console.log('Erro ao buscar leilões doados');
  }

  return auctions;
}

export const getAuctionsWon = async(): Promise<Auction[]> => {
  let auctions = [] as Auction[];

  try {
    const response = await api.get(`auctions/won`);
    auctions = response.data;
  } catch (error) {
    console.log('Erro ao buscar leilões ganhos');
  }

  return auctions;
}
