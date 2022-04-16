import { Category } from "./category";
import { Donation } from "./donation";
import { Photo } from "./photo";
import { UserData } from "./user-data";

export interface Auction {
	id: string,
	closingDate: Date,
	status: string,
	createdAt: Date,
	updatedAt: Date,
	userId: string,
	user: UserData,
	donationObjectId: string,
	donationObject: Donation,
	categories: Category[]
	photos: Photo[]
}
