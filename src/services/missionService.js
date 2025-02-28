import DataService from "./DataService";

const MissionService = {
  /**
   * Récupère toutes les missions avec la langue sélectionnée
   */
  async getAllMissions() {
    try {
      const response = await DataService.get("/api/missions", {
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
      });
      return response.data;
    } catch (error) {
      console.error(
        "❌ Erreur lors de la récupération des missions :",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  /**
   * Récupère une mission par son ID avec la langue sélectionnée
   */
  async getMissionById(id) {
    try {
      const response = await DataService.get(`/api/missions/${id}`, {
        headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
      });
      return response.data;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la récupération de la mission ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  },

  /**
   * Crée une nouvelle mission (titre en français, traduit en anglais par le backend)
   */
  async createMission(missionData) {
    try {
      const response = await DataService.post("/api/missions", missionData);
      return response.data;
    } catch (error) {
      console.error(
        "❌ Erreur lors de la création de la mission :",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  /**
   * Met à jour une mission existante et met à jour la traduction anglaise
   */
  async updateMission(id, missionData) {
    try {
      const response = await DataService.put(
        `/api/missions/${id}`,
        missionData
      );
      return response.data;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la mise à jour de la mission ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  },

  /**
   * Supprime une mission par son ID
   */
  async deleteMission(id) {
    try {
      await DataService.delete(`/api/missions/${id}`);
      return { message: "✅ Mission supprimée avec succès" };
    } catch (error) {
      console.error(
        `❌ Erreur lors de la suppression de la mission ID ${id} :`,
        error.response?.data || error.message
      );
      throw error;
    }
  }
};

export default MissionService;
