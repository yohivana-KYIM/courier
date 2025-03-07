<template>
  <div class="custom-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow rounded-4 overflow-hidden">
        <!-- Modal Header -->
        <div class="modal-header border-bottom p-4" style="background-color: #fff8f3;">
          <h5 class="modal-title fw-bold text-orange">
            <i class="bi bi-pencil-fill me-2"></i>
            Modifier un Rôle
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
          <form @submit.prevent="updateRole" class="fade-in">
            <div class="mb-4">
              <label for="roleName" class="form-label fw-medium">Nom du Rôle</label>
              <div class="input-group">
                <span class="input-group-text" style="background-color: #fff8f3;">
                  <i class="bi bi-card-heading text-orange"></i>
                </span>
                <input
                  type="text"
                  class="form-control border-start-0 shadow-none"
                  id="roleName"
                  v-model="role.name"
                  placeholder="Entrez le nom du rôle"
                  required
                  autofocus
                >
              </div>
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
import RoleService from '../../../services/RoleService';
import Swal from 'sweetalert2';

const props = defineProps({
  roleId: {
    type: String,
    required: true,
  },
});

const role = ref({
  id: null,
  name: '',
});

const emit = defineEmits(['close', 'roleUpdated']);

onMounted(async () => {
  await fetchRole();
});

const fetchRole = async () => {
  try {
    const data = await RoleService.getRole(props.roleId);
    role.value = data;
  } catch (error) {
    console.error('Erreur lors de la récupération du rôle :', error);
    Swal.fire({
      title: 'Erreur!',
      text: 'Échec du chargement du rôle. Veuillez réessayer.',
      icon: 'error',
      confirmButtonColor: '#dc3545',
    });
    emit('close');
  }
};

const updateRole = async () => {
  if (!role.value.name.trim()) {
    Swal.fire({
      title: 'Attention',
      text: 'Le nom du rôle ne peut pas être vide',
      icon: 'warning',
      confirmButtonColor: '#fd7e14',
    });
    return;
  }

  try {
    await RoleService.updateRole(role.value.id, role.value);
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Rôle mis à jour avec succès',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      iconColor: '#28a745',
    });
    emit('roleUpdated');
    emit('close');
  } catch (error) {
    Swal.fire({
      title: 'Erreur!',
      text: 'Échec de la mise à jour du rôle. Veuillez réessayer.',
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
