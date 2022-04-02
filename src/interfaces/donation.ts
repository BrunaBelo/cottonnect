import { Photo } from "./photo";
import selectCategory from "./select-category";

export interface Donation {
  id: string,
  title: string,
  description: string,
  photos?: Photo[],
  categories?: selectCategory[] | string[]
}
