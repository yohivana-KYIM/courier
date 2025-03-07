import DataService from './DataService';

const VilleService = {
  // Fetch all cities with optional search query
  async getAllVilles(query = '') {
    try {
      const response = await DataService.get('/api/villes', {
        params: { query }, // Pass search query if it exists
      });
      return response.data; // Returns list of cities
    } catch (error) {
      console.error('Erreur lors de la récupération des villes:', error);
      throw error;
    }
  },

 



  async getVillesByPays(paysId) {
    try {
      const response = await DataService.get(`/api/pays/${paysId}/villes`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des villes pour le pays ${paysId}:`, error);
      throw error;
    }
  },


  // Fetch a single city by its ID
  async getVilleById(id) {
    try {
      const response = await DataService.get(`/api/villes/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la ville avec ID ${id}:`, error);
      throw error;
    }
  },

  // Create a new city
  async createVille(villeData) {
    try {
      const response = await DataService.post('/api/villes', villeData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de la ville:', error);
      throw error;
    }
  },

  // Update an existing city by ID
  async updateVille(id, villeData) {
    try {
      const response = await DataService.put(`/api/villes/${id}`, villeData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la ville avec ID ${id}:`, error);
      throw error;
    }
  },

  // Delete a city by ID
  async deleteVille(id) {
    try {
      const response = await DataService.delete(`/api/villes/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression de la ville avec ID ${id}:`, error);
      throw error;
    }
  }
};

export default VilleService;
