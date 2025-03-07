import DataService from "./DataService";

const InterviewService = {
    async getAllInterviews() {
        try {
            const response = await DataService.get("/api/interviews", {
                headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
            });
            return response.data;
        } catch (error) {
            console.error("❌ Error fetching interviews:", error.response?.data || error.message);
            throw error;
        }
    },

    async getInterviewBySlug(slug) {
        try {
            const response = await DataService.get(`/api/interviews/${slug}`, {
                headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
            });
            return response.data;
        } catch (error) {
            console.error("❌ Error fetching interview by slug:", error.response?.data || error.message);
            throw error;
        }
    },

    async createInterview(data) {
        try {
            const response = await DataService.post("/api/interviews", data);
            return response.data;
        } catch (error) {
            console.error("❌ Error creating interview:", error.response?.data || error.message);
            throw error;
        }
    },

    async updateInterview(id, data) {
        try {
            const response = await DataService.put(`/api/interviews/${id}`, data);
            return response.data;
        } catch (error) {
            console.error("❌ Error updating interview:", error.response?.data || error.message);
            throw error;
        }
    },

    async deleteInterview(id) {
        try {
            const response = await DataService.delete(`/api/interviews/${id}`);
            return response.data;
        } catch (error) {
            console.error("❌ Error deleting interview:", error.response?.data || error.message);
            throw error;
        }
    }
};

export default InterviewService;