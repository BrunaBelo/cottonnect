import { Category } from "./category";
import { Donation } from "./donation";
import { Photo } from "./photo";

export interface Auction {
	id: string,
	closingDate: Date,
	status: string,
	createdAt: Date,
	updatedAt: Date,
	userId: string,
	donationObjectId: string,
	donationObject: Donation,
	categories: Category[]
	photos: Photo[]
}
