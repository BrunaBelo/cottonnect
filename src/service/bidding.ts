import api from "./api";
import { Bidding } from "../interfaces/bidding";

export const createBidding = async(biddingData: Bidding): Promise<Bidding> => {
  let bidding = {} as Bidding;

  try {
    bidding = await api.post("/biddings", biddingData)
  } catch (error) {
    console.log(`Erro ao criar lance ${error}`)
  }

  return bidding;
}
