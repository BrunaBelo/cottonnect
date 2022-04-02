import { IPhoto } from "./Iphoto";
import selectCategory from "./select-category";

export interface Idonation {
  id: string,
  title: string,
  description: string,
  closingDate: Date,
  photos?: IPhoto[],
  categories?: selectCategory[] | string[]
}
