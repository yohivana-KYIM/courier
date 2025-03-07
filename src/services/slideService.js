import DataService from "./DataService";

const SlideService = {
  async getAllSlides() {
    try {
      const response = await DataService.get("/api/slides", {
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
      });
      return response.data;
    } catch (error) {
      console.error(
        "❌ Erreur lors de la récupération des slides :",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async getSlideById(id) {
    try {
      const response = await DataService.get(`/api/slides/${id}`, {
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
      });
      return response.data;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la récupération du slide ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async createSlide(formData) {
    try {
      const response = await DataService.post("/api/slides", formData);
      return response.data;
    } catch (error) {
      console.error(
        "❌ Erreur lors de la création du slide :",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async updateSlide(id, formData) {
    try {
      const response = await DataService.put(`/api/slides/${id}`, formData);
      return response.data;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la mise à jour du slide ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  },

  async deleteSlide(id) {
    try {
      await DataService.delete(`/api/slides/${id}`);
      return { message: "✅ Slide supprimé avec succès" };
    } catch (error) {
      console.error(
        `❌ Erreur lors de la suppression du slide ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  }
};

export default SlideService;
