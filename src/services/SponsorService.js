import DataService from "./DataService";

const SponsorService = {
  async getAllSponsors() {
    try {
      const response = await DataService.get("/api/sponsors", {
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
      });
      return response.data;
    } catch (error) {
      console.error(
        "❌ Erreur lors de la récupération des sponsors :",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async getSponsorById(id) {
    try {
      const response = await DataService.get(`/api/sponsors/${id}`, {
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
      });
      return response.data;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la récupération du sponsor ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async createSponsor(sponsorData) {
    try {
      const response = await DataService.post("/api/sponsors", sponsorData);
      return response.data;
    } catch (error) {
      console.error(
        "❌ Erreur lors de la création du sponsor :",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async updateSponsor(id, sponsorData) {
    try {
      const response = await DataService.put(
        `/api/sponsors/${id}`,
        sponsorData
      );
      return response.data;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la mise à jour du sponsor ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async deleteSponsor(id) {
    try {
      await DataService.delete(`/api/sponsors/${id}`);
      return { message: "✅ Sponsor supprimé avec succès" };
    } catch (error) {
      console.error(
        `❌ Erreur lors de la suppression du sponsor ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  }
};

export default SponsorService;
