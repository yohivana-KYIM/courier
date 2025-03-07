import DataService from "./DataService";

const RoleService = {
  async getAllRoles() {
    try {
      const response = await DataService.get("/api/roles");
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des roles :", error);
      throw error;
    }
  },

  async getRole(id) {
    try {
      const response = await DataService.get(`/api/roles/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du role avec l'ID ${id} :`, error);
      throw error;
    }
  },

  async createRole(roleData) {
    try {
      const response = await DataService.post("/api/roles", roleData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du role :", error);
      throw error;
    }
  },

  async updateRole(id, roleData) {
    try {
      const response = await DataService.put(`/api/roles/${id}`, roleData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du role avec l'ID ${id} :`, error);
      throw error;
    }
  },

  async deleteRole(id) {
    try {
      const response = await DataService.delete(`/api/roles/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression du role avec l'ID ${id} :`, error);
      throw error;
    }
  },
};

export default RoleService;
