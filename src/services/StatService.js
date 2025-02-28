import DataService from "./DataService";

const StatService = {
    async getAllStats() {
        try {
            const response = await DataService.get("/api/stats", {
                headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
            });
            return response.data;
        } catch (error) {
            console.error("❌ Erreur lors de la récupération des stats :", error.response?.data || error.message);
            throw error;
        }
    },

    async getStatById(id) {
        try {
            const response = await DataService.get(`/api/stats/${id}`, {
                headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
            });
            return response.data;
        } catch (error) {
            console.error(`❌ Erreur lors de la récupération de la stat ID ${id} :`, error.response?.data || error.message);
            throw error;
        }
    },

    async createStat(statData) {
        try {
            const response = await DataService.post("/api/stats", statData);
            return response.data;
        } catch (error) {
            console.error("❌ Erreur lors de la création de la stat :", error.response?.data || error.message);
            throw error;
        }
    },

    async updateStat(id, statData) {
        try {
            const response = await DataService.put(`/api/stats/${id}`, statData);
            return response.data;
        } catch (error) {
            console.error(`❌ Erreur lors de la mise à jour de la stat ID ${id} :`, error.response?.data || error.message);
            throw error;
        }
    },

    async deleteStat(id) {
        try {
            await DataService.delete(`/api/stats/${id}`);
            return { message: "✅ Stat supprimée avec succès" };
        } catch (error) {
            console.error(`❌ Erreur lors de la suppression de la stat ID ${id} :`, error.response?.data || error.message);
            throw error;
        }
    }
};

export default StatService;