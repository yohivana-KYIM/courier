<template>
  <div class="custom-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow rounded-4 overflow-hidden">
        <!-- Modal Header avec design amélioré -->
        <div class="modal-header border-bottom p-4" style="background-color: #fff8f3;">
          <h5 class="modal-title fw-bold text-orange">
            <i class="bi bi-pencil-fill me-2"></i>
            Modifier un Post
          </h5>
          <button 
            type="button" 
            class="btn-close" 
            @click="$emit('close')" 
            aria-label="Close"
          ></button>
        </div>
        
        <!-- Corps du modal avec état de chargement -->
        <div class="modal-body p-4">
          <div v-if="isLoading" class="text-center py-5 loading-pulse">
            <div class="spinner-border text-orange" role="status">
              <span class="visually-hidden">Chargement...</span>
            </div>
            <p class="mt-3 text-muted">Chargement des données...</p>
          </div>
          
          <form v-else @submit.prevent="updatePost" class="fade-in">
            <div class="mb-4">
              <label for="editNomPost" class="form-label fw-medium">Nom du Post</label>
              <div class="input-group">
                <span class="input-group-text" style="background-color: #fff8f3;">
                  <i class="bi bi-card-heading text-orange"></i>
                </span>
                <input 
                  type="text" 
                  class="form-control border-start-0 shadow-none" 
                  id="editNomPost" 
                  v-model="post.nomPost" 
                  placeholder="Entrez le nom du post"
                  required
                  autofocus
                >
              </div>
              <div class="form-text text-muted mt-2">
                <i class="bi bi-info-circle me-1"></i>
                ID: {{ post.id }}
              </div>
            </div>
            
            <!-- Boutons d'action -->
            <div class="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
              <button 
                type="button" 
                class="btn btn-light px-4 py-2 rounded-3 d-inline-flex align-items-center" 
                @click="$emit('close')"
              >
                <i class="bi bi-x-lg me-2"></i>
                Annuler
              </button>
              <button 
                type="submit" 
                class="btn btn-black px-4 py-2 rounded-3 d-inline-flex align-items-center"
              >
                <i class="bi bi-check-lg me-2"></i>
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PostService from '../../../services/PostService';
import Swal from 'sweetalert2';

const props = defineProps({
  postId: {
    type: String,
    required: true,
  },
});

const post = ref({
  id: null,
  nomPost: '',
});

const isLoading = ref(true);
const emit = defineEmits(['close', 'postUpdated']);

onMounted(async () => {
  await fetchPost();
});

const fetchPost = async () => {
  isLoading.value = true;
  try {
    const data = await PostService.getPost(props.postId);
    post.value = data;
  } catch (error) {
    console.error("Erreur lors de la récupération du post :", error);
    
    // Notification d'erreur
    Swal.fire({ 
      title: 'Erreur!', 
      text: `Échec de la récupération du post : ${error}`, 
      icon: 'error',
      confirmButtonColor: '#dc3545' // Rouge pour l'échec
    });
    
    emit('close');
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 500); // Petit délai pour l'animation
  }
};

const updatePost = async () => {
  if (!post.value.nomPost.trim()) {
    // Validation
    Swal.fire({
      title: 'Attention',
      text: 'Le nom du post ne peut pas être vide',
      icon: 'warning',
      confirmButtonColor: '#fd7e14'
    });
    return;
  }
  
  try {
    await PostService.updatePost(props.postId, post.value);
    
    // Notification de succès
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Post mis à jour avec succès',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      iconColor: '#28a745', // Vert pour le succès
      customClass: {
        popup: 'colored-toast'
      }
    });
    
    emit('postUpdated');
    emit('close');
  } catch (error) {
    console.error("Erreur lors de la mise à jour du post :", error);
    
    // Notification d'erreur
    Swal.fire({ 
      title: 'Erreur!', 
      text: `Échec de la mise à jour du post : ${error}`, 
      icon: 'error',
      confirmButtonColor: '#dc3545' // Rouge pour l'échec
    });
  }
};
</script>

<style scoped>
/* Style pour la modal sans l'effet de grisage bloquant */
.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  max-width: 500px;
  margin: 1.75rem auto;
  position: relative;
  width: auto;
  pointer-events: auto;
  z-index: 1055;
}

.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.5rem;
}

.text-orange {
  color: #fd7e14 !important;
}

.btn-black {
  background-color: #000;
  border-color: #000;
  color: white;
}

.btn-black:hover, .btn-black:focus {
  background-color: #333;
  border-color: #333;
  color: white;
}

/* Animation pour le chargement */
.loading-pulse {
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}

/* Animation pour le formulaire */
.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Styling pour les toasts */
:deep(.colored-toast) {
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}
</style>
