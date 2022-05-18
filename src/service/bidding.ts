import api from "./api";
import { Bidding } from "../interfaces/bidding";

export const createBidding = async(biddingData: Bidding): Promise<Bidding> => {
  let bidding = {} as Bidding;

  try {
    const response = await api.post("/biddings", biddingData)
    bidding = response.data;
  } catch (error) {
    console.log(`Erro ao criar gratificação ${error}`)
  }

  return bidding;
}

export const checkExistsBidFromAuction = async(auctionId: String): Promise<Bidding[]> => {
  let bidding = [] as Bidding[];

  try {
    const response = await api.get("/biddings/find-bidding", { params: { auctionId: auctionId } });
    bidding = response.data;
  } catch (error) {
    console.log(`Erro ao buscar gratificação ${error}`);
  }

  return bidding;
}

export const getBidWinner = async(auctionId: String): Promise<Bidding> => {
  let bidding = {} as Bidding;

  try {
    const response = await api.get("/biddings/get-winner", { params: { auctionId: auctionId } });
    bidding = response.data;
  } catch (error) {
    console.log(`Erro ao buscar ganhador do leilão ${error}`);
  }

  return bidding;
}
