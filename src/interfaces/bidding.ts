import { UserData } from "./user-data";

export interface Bidding {
	id?: string,
	bidAmount: number;
  winner?: boolean;
  userId?: string;
  auctionId?: string;
  user?: UserData
}
