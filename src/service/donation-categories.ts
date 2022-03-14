import api from "./api";

export const getCategories = async () => {
  const result = await api.get('/donation-categories', {
    params: {
      token: localStorage.getItem('user-token')
    }
  })

  return result
}
