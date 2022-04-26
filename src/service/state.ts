import api from "./api";

export const getStates = async () => {
  let states = {};

  try {
    const result = await api.get('/states');
    states = result.data;
  } catch (error) {
    console.log(`Erro ao buscar estados ${error}`);
  }

  return states;
}
