import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia();  // Create a Pinia instance
const app = createApp(App);
// Importer les styles globaux
import "./css/volt.css";
app.use(router);
app.use(pinia);  // Register Pinia with the app

app.mount('#app');