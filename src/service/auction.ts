import { Auction } from "../interfaces/auction";
import api from "./api";

export const getAutionInformation = async(auctionId: string): Promise<Auction> => {
  let auction = {} as Auction

  try {
    const response = await api.get(`auctions/${auctionId}`);
    auction = response.data;
  } catch (error) {
    console.log('Erro ao buscar doação')
  }

  return auction;
}
