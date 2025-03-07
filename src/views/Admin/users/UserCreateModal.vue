<template>
  <div class="custom-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow rounded-4 overflow-hidden">
        <!-- Modal Header -->
        <div class="modal-header border-bottom p-4" style="background-color: #fff8f3;">
          <h5 class="modal-title fw-bold text-orange">
            <i class="bi bi-file-earmark-plus-fill me-2"></i>
            Créer un Utilisateur
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
            aria-label="Close"
          ></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body p-4">
          <form @submit.prevent="createUser" class="fade-in">
            <div class="mb-4">
              <label for="firstName" class="form-label fw-medium">Prénom</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                v-model="user.firstName"
                placeholder="Entrez le prénom"
                required
              >
            </div>
            <div class="mb-4">
              <label for="lastName" class="form-label fw-medium">Nom</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                v-model="user.lastName"
                placeholder="Entrez le nom"
                required
              >
            </div>
            <div class="mb-4">
              <label for="email" class="form-label fw-medium">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="user.email"
                placeholder="Entrez l'email"
                required
              >
            </div>
            <div class="mb-4">
              <label for="password" class="form-label fw-medium">Mot de passe</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="user.password"
                placeholder="Entrez le mot de passe"
                required
              >
            </div>

            <!-- Actions -->
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
                Créer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UserService from '../../../services/UserService';
import Swal from 'sweetalert2';

const user = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
});

const emit = defineEmits(['close', 'userCreated']);

const createUser = async () => {
  try {
    await UserService.createUser(user.value);
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Utilisateur créé avec succès',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      iconColor: '#28a745',
    });
    emit('userCreated');
    emit('close');
  } catch (error) {
    Swal.fire({
      title: 'Erreur!',
      text: 'Échec de la création de l\'utilisateur. Veuillez réessayer.',
      icon: 'error',
      confirmButtonColor: '#dc3545',
    });
  }
};
</script>

<style scoped>
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
</style>
