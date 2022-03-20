import selectCategory from "./select-category";

export interface DonationData {
  title: string,
  description: string,
  closingDate?: Date,
  photos?: File[] | null,
  categories?: selectCategory[] | string[]
}