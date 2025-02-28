import DataService from "./DataService";

const CommunicationService = {
    async getAllCommunications() {
        const response = await DataService.get("/api/communications", {
            headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
        });
        return response.data;
    },

    async getCommunicationById(id) {
        const response = await DataService.get(`/api/communications/${id}`, {
            headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
        });
        return response.data;
    },

    async createCommunication(formData) {
        const response = await DataService.post("/api/communications", formData);
        return response.data;
    },

    async updateCommunication(id, formData) {
        const response = await DataService.put(`/api/communications/${id}`, formData);
        return response.data;
    },

    async deleteCommunication(id) {
        const response = await DataService.delete(`/api/communications/${id}`);
        return response.data;
    }
};

export default CommunicationService;