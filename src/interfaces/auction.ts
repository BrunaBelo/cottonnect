import { Category } from "./category";
import { DonationData } from "./donationData";
import { Photo } from "./photo";

export interface Auction {
	id: string,
	closingDate: Date,
	status: string,
	createdAt: Date,
	updatedAt: Date,
	userId: string,
	donationObjectId: string,
	donationObject: DonationData,
	categories: Category[]
	photos: Photo[]
}
