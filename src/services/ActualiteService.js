import DataService from "./DataService";

const ActualiteService = {
  async getAllActualites() {
    try {
      const response = await DataService.get("/api/actualites", {
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" },
      });
      return response.data;
    } catch (error) {
      console.error(
        "❌ Erreur lors de la récupération des actualités :",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async getActualiteBySlug(slug) {  // Changed to slug
    try {
      const response = await DataService.get(`/api/actualites/${slug}`, { // Changed to slug
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" },
      });
      return response.data;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la récupération de l'actualité avec le slug ${slug} :`, // Changed to slug
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async createActualite(actualiteData) {
    try {
      const response = await DataService.post("/api/actualites", actualiteData);
      return response.data;
    } catch (error) {
      console.error(
        "❌ Erreur lors de la création de l'actualité :",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async updateActualite(id, actualiteData) {
    try {
      const response = await DataService.put(`/api/actualites/${id}`, actualiteData);
      return response.data;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la mise à jour de l'actualité ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async deleteActualite(id) {
    try {
      await DataService.delete(`/api/actualites/${id}`);
      return { message: "✅ Actualité supprimée avec succès" };
    } catch (error) {
      console.error(
        `❌ Erreur lors de la suppression de l'actualité ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  },
};

export default ActualiteService;