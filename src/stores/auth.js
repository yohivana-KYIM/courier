import { defineStore } from "pinia";
import DataService from "../services/DataService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || null,
    // Add other state properties if needed, e.g., loading state, error messages
  }),
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem("token", token);
      DataService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },

    async register(userData) {
      try {
        const response = await DataService.post("/api/register", userData);
        // Optionally log in the user after successful registration
        this.user = response.data.data; // Adjust based on your API response
        this.setToken(response.data.access_token);
        return response.data; // Return the response for component handling (e.g., success message)
      } catch (error) {
        console.error("Registration failed:", error);
        throw error; // Propagate the error to the component for handling
      }
    },

    async fetchUser() {
      try {
        const response = await DataService.get("/api/me");
        this.user = response.data.data; // Adjust based on the structure of your API response

        // Add Employee or Admin data to the user object in the store
        if (response.data.data.employee) {
          this.user.employee = response.data.data.employee;
        } else if (response.data.data.admin) {
          this.user.admin = response.data.data.admin;
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        this.user = null; // Clear user if fetch fails to avoid stale data
        this.token = null; // Clear token if user fetch fails
        localStorage.removeItem("token"); // Remove token from local storage
        throw error; // Relancer l'erreur pour la gérer dans le composant
      }
    },

    async login(credentials) {
      try {
        const response = await DataService.post("/api/login", credentials);
         this.user = response.data.data; // Adjust based on your API response

        // Add Employee or Admin data to the user object in the store
        if (response.data.data.employee) {
          this.user.employee = response.data.data.employee;
        } else if (response.data.data.admin) {
          this.user.admin = response.data.data.admin;
        }
        this.setToken(response.data.access_token);
        return response.data; // Return the response for component handling (e.g., success message)
      } catch (error) {
        console.error("Login failed:", error);
        throw error; // Propagate the error
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

    async forgotPassword(email) {
      try {
        const response = await DataService.post("/api/forgot-password", {
          email: email,
        });
        return response.data; // Return the response for component handling (e.g., success message)
      } catch (error) {
        console.error("Forgot password request failed:", error);
        throw error; // Propagate the error
      }
    },

    async resetPassword(resetData) {
      try {
        const response = await DataService.post("/api/reset-password", resetData);
        return response.data; // Return the response
      } catch (error) {
        console.error("Reset password failed:", error);
        throw error;
      }
    },

    async updateProfile(userData) {
      try {
        const response = await DataService.put("/api/update-profile", userData);
        this.user = response.data.data; // Update the user data in the store
        return response.data;
      } catch (error) {
        console.error("Update profile failed:", error);
        throw error;
      }
    },

    async deactivateAccount() {
      try {
        await DataService.delete("/api/deactivate-account");
        this.user = null;
        this.token = null;
        localStorage.removeItem("token");
      } catch (error) {
        console.error("Deactivate account failed:", error);
        throw error;
      }
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUserRole: (state) => (state.user ? state.user.role.name : null),
  },
});
