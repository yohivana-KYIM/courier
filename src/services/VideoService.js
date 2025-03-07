import DataService from "./DataService";

const VideoService = {
    async getAllVideos() {
        try {
            const response = await DataService.get("/api/videos", {
                headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
            });
            return response.data;
        } catch (error) {
            console.error("❌ Erreur lors de la récupération des vidéos:", error.response?.data || error.message);
            throw error;
        }
    },

    async getVideoById(id) {
        try {
            const response = await DataService.get(`/api/videos/${id}`, {
                headers: { "Accept-Language": localStorage.getItem("locale") || "fr" }
            });
            return response.data;
        } catch (error) {
            console.error(`❌ Erreur lors de la récupération de la vidéo avec ID ${id}:`, error.response?.data || error.message);
            throw error;
        }
    },

    async createVideo(videoData) {
        try {
            const response = await DataService.post("/api/videos", videoData);
            return response.data;
        } catch (error) {
            console.error("❌ Erreur lors de la création de la vidéo:", error.response?.data || error.message);
            throw error;
        }
    },

    async updateVideo(id, videoData) {
        try {
            const response = await DataService.put(`/api/videos/${id}`, videoData);
            return response.data;
        } catch (error) {
            console.error(`❌ Erreur lors de la mise à jour de la vidéo avec ID ${id}:`, error.response?.data || error.message);
            throw error;
        }
    },

    async deleteVideo(id) {
        try {
            const response = await DataService.delete(`/api/videos/${id}`);
            return response.data;
        } catch (error) {
            console.error(`❌ Erreur lors de la suppression de la vidéo avec ID ${id}:`, error.response?.data || error.message);
            throw error;
        }
    }
};

export default VideoService;