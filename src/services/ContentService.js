import DataService from "./DataService";

const ContentService = {
  // Récupérer tous les contenus
  async getAllContents() {
    try {
      const response = await DataService.get("/api/contents");
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des contenus :", error);
      throw error;
    }
  },

  // Récupérer les contenus par type
  async getContentsByType(type) {
    try {
      const response = await DataService.get(`/api/contents/${type}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la récupération des contenus de type ${type} :`,
        error
      );
      throw error;
    }
  },

  // Créer un nouveau contenu
  async createContent(contentData) {
    try {
      const response = await DataService.post("/api/contents", contentData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du contenu :", error);
      throw error;
    }
  },

  // Mettre à jour un contenu existant
  async updateContent(id, contentData) {
    try {
      const response = await DataService.put(
        `/api/contents/${id}`,
        contentData
      );
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour du contenu ID ${id} :`,
        error
      );
      throw error;
    }
  },

  // Supprimer un contenu
  async deleteContent(id) {
    try {
      const response = await DataService.delete(`/api/contents/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression du contenu ID ${id} :`,
        error
      );
      throw error;
    }
  },
};

export default ContentService;
