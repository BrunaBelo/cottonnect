import api from "./api";

export const getStates = async () => {
  const result = await api.get('/states')

  return result
}