import { Auction } from "../interfaces/auction";
import api from "./api";

export const getAutionInformation = async(auctionId: string): Promise<Auction> => {
    const response = await api.get(`auctions/${ auctionId }`);
    const auction = response.data as Auction;
    
    return auction;
}
