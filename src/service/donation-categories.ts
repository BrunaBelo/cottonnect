import { Category } from "../interfaces/category";
import api from "./api";

export const getCategories = async (): Promise<Category[]> => {
  let categories = [] as Category[];

  try {
    const result = await api.get('/categories', { params: { token: localStorage.getItem('user-token')}});
    categories = result.data;
  } catch (error) {
    console.log(`Erro ao buscar categorias ${error}`);
  }

  return categories;
}

