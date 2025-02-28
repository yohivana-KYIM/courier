import DataService from "./DataService";

const SubscriberService = {
  // Récupérer tous les abonnés
  async getAllSubscribers() {
    try {
      const response = await DataService.get("/api/subscribers"); // Adaptez l'URL selon votre API
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des abonnés :", error);
      throw error; // Propagez l'erreur pour que le composant puisse la gérer
    }
  },

  // Récupérer un abonné par son ID
  async getSubscriberById(id) {
    try {
      const response = await DataService.get(`/api/subscribers/${id}`); // Adaptez l'URL
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la récupération de l'abonné avec l'ID ${id} :`,
        error
      );
      throw error;
    }
  },

  // Créer un nouvel abonné
  async createSubscriber(data) {
    try {
      const response = await DataService.post("/api/subscribers", data); // Adaptez l'URL
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de l'abonné :", error);
      throw error;
    }
  },

  // Mettre à jour un abonné existant
  async updateSubscriber(id, data) {
    try {
      const response = await DataService.put(`/api/subscribers/${id}`, data); // Adaptez l'URL
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour de l'abonné avec l'ID ${id} :`,
        error
      );
      throw error;
    }
  },

  // Supprimer un abonné
  async deleteSubscriber(id) {
    try {
      const response = await DataService.delete(`/api/subscribers/${id}`); // Adaptez l'URL
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression de l'abonné avec l'ID ${id} :`,
        error
      );
      throw error;
    }
  }
};

export default SubscriberService;