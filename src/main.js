import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

// Création de l'application
const app = createApp(App)

// Création d'une seule instance de Pinia
const pinia = createPinia()

// Enregistrement des plugins
app.use(pinia)
app.use(router)
app.use(VueSweetalert2)
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  theme: 'bubble',
})

// Enregistrement du composant EasyDataTable globalement
app.component('EasyDataTable', Vue3EasyDataTable)

// Montage de l'application
app.mount('#app')
