import DataService from "./DataService";

const ReglementationService = {
  async getAllReglementations() {
    const response = await DataService.get("/api/reglementations", {
      headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
    });
    return response.data;
  },

  async getReglementationById(id) {
    const response = await DataService.get(`/api/reglementations/${id}`, {
      headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
    });
    return response.data;
  },

  async createReglementation(formData) {
    const response = await DataService.post("/api/reglementations", formData);
    return response.data;
  },

  async updateReglementation(id, formData) {
    const response = await DataService.put(
      `/api/reglementations/${id}`,
      formData
    );
    return response.data;
  },

  async deleteReglementation(id) {
    const response = await DataService.delete(`/api/reglementations/${id}`);
    return response.data;
  }
};

export default ReglementationService;
