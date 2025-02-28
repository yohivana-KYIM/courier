import DataService from "./DataService";

const PublicationService = {
    async getAllPublications() {
        const response = await DataService.get("/api/publications", {
            headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
        });
        return response.data;
    },

    async getPublicationById(id) {
        const response = await DataService.get(`/api/publications/${id}`, {
            headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
        });
        return response.data;
    },

    async createPublication(formData) {
        const response = await DataService.post("/api/publications", formData);
        return response.data;
    },

    async updatePublication(id, formData) {
        const response = await DataService.put(`/api/publications/${id}`, formData);
        return response.data;
    },

    async deletePublication(id) {
        const response = await DataService.delete(`/api/publications/${id}`);
        return response.data;
    }
};

export default PublicationService;