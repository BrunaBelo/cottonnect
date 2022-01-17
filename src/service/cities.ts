import api from "./api"

export const getCities = async(stateId: string) => {
  const result = await api.get(`/states/${stateId}/cities`)

  return result
}