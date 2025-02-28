import DataService from "./DataService"; // Import du service API

const PresentationService = {
  /**
   * Récupère toutes les présentations avec la langue sélectionnée
   */
  async getAllPresentations() {
    try {
      const response = await DataService.get("/api/presentations", {
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
      });
      console.log("✅ Réponse API presentations:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "❌ Erreur lors de la récupération des présentations :",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  /**
   * Récupère une présentation par son ID avec la langue sélectionnée
   */
  async getPresentationById(id) {
    try {
      const response = await DataService.get(`/api/presentations/${id}`, {
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
      });
      return response.data;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la récupération de la présentation ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  },

  /**
   * Crée une nouvelle présentation
   */
  async createPresentation(presentationData) {
    try {
      const response = await DataService.post(
        "/api/presentations",
        presentationData
      );
      return response.data;
    } catch (error) {
      console.error(
        "❌ Erreur lors de la création de la présentation :",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  /**
   * Met à jour une présentation existante
   */
  async updatePresentation(id, presentationData) {
    try {
      const response = await DataService.put(
        `/api/presentations/${id}`,
        presentationData
      );
      return response.data;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la mise à jour de la présentation ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  },

  /**
   * Supprime une présentation
   */
  async deletePresentation(id) {
    try {
      await DataService.delete(`/api/presentations/${id}`);
      return { message: "✅ Présentation supprimée avec succès" };
    } catch (error) {
      console.error(
        `❌ Erreur lors de la suppression de la présentation ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  }
};

export default PresentationService;
