import api from "./api"

export const getCities = async(stateId: string) => {
  let cities = {};

  try {
    const result = await api.get(`/states/${stateId}/cities`);
    cities = result.data;
  } catch (error) {
    console.log(`Erro ao buscar cidades ${error}`);
  }

  return cities;
}
