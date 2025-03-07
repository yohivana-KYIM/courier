import axios from "axios";

const DataService = axios.create({
 //
  //baseURL: "https://accentprojets.cm/public",
baseURL: 'http://localhost:8000',
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

// Ajouter l'intercepteur pour l'autorisation
DataService.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

DataService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      //  Si vous obtenez un 401 non autorisé,
      localStorage.removeItem("token");
      // rediriger l'utilisateur vers la page de connexion.
      window.location.href = '/login'
      // on redirige pas car le code ne tourne pas sur le navigateur
    }
    return Promise.reject(error);
  }
);

export default DataService;
