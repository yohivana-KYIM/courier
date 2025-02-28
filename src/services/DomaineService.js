import DataService from "./DataService";

const DomaineService = {
  // Récupérer tous les domaines avec traduction
  async getAllDomaines() {
    try {
      const response = await DataService.get("/api/domaines", {
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" },
      });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des domaines :", error);
      throw error;
    }
  },

  // Récupérer un domaine par son ID avec traduction
  async getDomaineById(id) {
    try {
      const response = await DataService.get(`/api/domaines/${id}`, {
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" },
      });
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du domaine ID ${id} :`, error);
      throw error;
    }
  },

  // Créer un nouveau domaine avec traduction automatique
  async createDomaine(data) {
    try {
      const response = await DataService.post("/api/domaines", data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du domaine :", error);
      throw error;
    }
  },

  // Mettre à jour un domaine existant avec traduction automatique
  async updateDomaine(id, data) {
    try {
      const response = await DataService.put(`/api/domaines/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du domaine ID ${id} :`, error);
      throw error;
    }
  },

  // Supprimer un domaine
  async deleteDomaine(id) {
    try {
      await DataService.delete(`/api/domaines/${id}`);
      return { message: "✅ Domaine supprimé avec succès" };
    } catch (error) {
      console.error(`Erreur lors de la suppression du domaine ID ${id} :`, error);
      throw error;
    }
  }
};

export default DomaineService;
