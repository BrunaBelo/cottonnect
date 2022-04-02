import { Category } from "./category";
import { Idonation } from "./Idonation";
import { IPhoto } from "./Iphoto";

export interface Auction {
	id: string,
	closingDate: Date,
	status: string,
	createdAt: Date,
	updatedAt: Date,
	userId: string,
	donationObjectId: string,
	donationObject: Idonation,
	categories: Category[]
	photos: IPhoto[]
}
