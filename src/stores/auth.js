import { defineStore } from "pinia";
import DataService from "../services/DataService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem("token", token);
      DataService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },

    async fetchUser() {
      try {
        const response = await DataService.get("/api/me");
        this.user = response.data.data; // Ajustez en fonction de la structure de votre réponse API
      } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error; // Relancer l'erreur pour la gérer dans le composant
      }
    },

    async registerUsager(usagerData) {
      try {
        const response = await DataService.post(
          "/api/register/usager",
          usagerData
        );
        this.user = response.data.usager; // Ajustez en fonction de la structure de votre réponse API
        this.setToken(response.data.access_token); // Assurez-vous que le token est renvoyé
      } catch (error) {
        console.error("Registration failed:", error);
        throw error; // Propager l'erreur
      }
    },

    async registerPartenaire(partenaireData) {
      try {
        const response = await DataService.post(
          "/api/register/partenaire",
          partenaireData
        );
        this.user = response.data.partenaire; // Ajustez en fonction de la structure de votre réponse API
        this.setToken(response.data.access_token); // Assurez-vous que le token est renvoyé
      } catch (error) {
        console.error("Registration failed:", error);
        throw error; // Propager l'erreur
      }
    },

    async login(credentials) {
      try {
        const response = await DataService.post("/api/login", credentials);
        this.user = response.data.user; // Ajustez en fonction de la structure de votre réponse API
        this.setToken(response.data.access_token);
      } catch (error) {
        console.error("Login failed:", error);
        throw error; // Propager l'erreur
      }
    },

    async logout() {
      try {
        await DataService.post("/api/logout");
        this.user = null;
        this.token = null;
        localStorage.removeItem("token");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    // isAdmin: (state) => state.user && state.user.type_user === "administrateur", // Cette ligne a été retirée
  },
});