import selectCategory from "./select-category";

export interface DonationData {
  title?: string,
  descrition?: any,
  closingDate?: Date,
  photos?: File[] | null,
  categories?: selectCategory[]
}