import api from "./api";

export default class UserService {
  constructor() {}

  async create(formUser: JSON) {
    try {
      const response = await api.post('users/', formUser);
      return response.status;
    } catch (error) {
      throw error;
    }
  }
}
