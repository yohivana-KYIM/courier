import DataService from './DataService';

const PaysService = {
  // Récupérer la liste des pays
 

  async getAllPays(search = '') {
    try {
      const response = await DataService.get('/api/pays', { params: { search } });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des pays:', error);
      throw error;
    }
  }
  ,



  // Route protégée pour créer un nouveau pays
  async createPays(paysData) {
    try {
      const response = await DataService.post('/api/pays', paysData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du pays:', error.response ? error.response.data : error);
      throw error;
    }
  },

  // Route protégée pour récupérer un pays par ID
  async getPaysById(id) {
    try {
      const response = await DataService.get(`/api/pays/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du pays avec ID ${id}:`, error.response ? error.response.data : error);
      throw error;
    }
  },

  // Route protégée pour mettre à jour un pays
  async updatePays(id, paysData) {
    try {
      const response = await DataService.put(`/api/pays/${id}`, paysData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du pays avec ID ${id}:`, error.response ? error.response.data : error);
      throw error;
    }
  },

  // Route protégée pour supprimer un pays
  async deletePays(id) {
    try {
      const response = await DataService.delete(`/api/pays/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression du pays avec ID ${id}:`, error.response ? error.response.data : error);
      throw error;
    }
  },
};

export default PaysService;
