import DataService from "./Services/DataService"; // Assurez-vous que le chemin est correct
import { useAuthStore } from './auth'; // Importez le store d'authentification

export default {
  beforeRouteEnter(to, from, next) {
    const authStore = useAuthStore();

    if (to.meta.requiresAuth) {
      if (!authStore.isAuthenticated) {
        next({ name: 'loginadmin' }); // Redirige vers la page de connexion si non authentifié
      } else {
        next(); // L'utilisateur est authentifié, continuez
      }
    } else {
      next(); // Pas de protection requise, continuez
    }
  },
};
