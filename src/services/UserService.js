import DataService from "./DataService";

const UserService = {
  async getAllUsers() {
    try {
      const response = await DataService.get("/api/users");
      return response.data.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
      throw error;
    }
  },

  async countUsersByType(type) {
    try {
      const response = await DataService.get(`/api/users/type/${type}`);
      return response.data.total;
    } catch (error) {
      console.error(`Erreur lors du comptage des utilisateurs de type ${type}:`, error);
      throw error;
    }
  }
};

export default UserService;