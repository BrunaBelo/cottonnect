import { DonationPhoto } from "./donation-photo";
import selectCategory from "./select-category";

export interface DonationData {
  title?: string,
  descrition?: any,
  closingDate?: Date,
  photos?: File[] | DonationPhoto[] | null,
  categories?: selectCategory[] | string[]
}