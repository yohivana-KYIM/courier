<template>
  <div class="min-vh-100 bg-light py-5">
    <div class="container">
      <!-- Header Section -->
      <div class="card border-0 shadow-sm rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="row align-items-center">
            <div class="col-md-8">
              <h2 class="fw-bold text-orange mb-1">Roles</h2>
              <p class="text-muted mb-0 fs-6">
                Gérez et suivez tous les rôles en un seul endroit
              </p>
            </div>
            <div class="col-md-4 text-md-end mt-3 mt-md-0">
              <button
                @click="openCreateModal"
                class="btn btn-orange px-4 py-2 shadow-sm rounded-3 d-inline-flex align-items-center"
              >
                <i class="bi bi-file-earmark-plus-fill me-2"></i>
                Créer un rôle
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="d-flex justify-content-center align-items-center py-5" style="height: 300px">
        <div class="spinner-border text-orange" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Chargement...</span>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="roles.length === 0" class="card border-0 rounded-3 shadow-sm text-center py-5">
        <div class="card-body p-5">
          <div class="mb-3">
            <i class="bi bi-folder-plus fs-1 text-orange opacity-75"></i>
          </div>
          <h3 class="fs-4 fw-semibold">Aucun rôle trouvé</h3>
          <p class="text-muted mb-4">Commencez par créer un nouveau rôle pour gérer vos permissions.</p>
          <button
            @click="openCreateModal"
            class="btn btn-orange px-4 py-2 rounded-3"
          >
            <i class="bi bi-file-earmark-plus-fill me-2"></i>
            Créer un rôle
          </button>
        </div>
      </div>

      <!-- Role Table -->
      <div v-else class="card border-0 rounded-3 shadow-sm overflow-hidden">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="bg-light">
              <tr>
                <th scope="col" class="border-0 ps-4 py-3 text-uppercase fs-6 fw-semibold text-secondary">ID</th>
                <th scope="col" class="border-0 py-3 text-uppercase fs-6 fw-semibold text-secondary">Nom du rôle</th>
                <th scope="col" class="border-0 pe-4 py-3 text-uppercase fs-6 fw-semibold text-secondary text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="role in roles" :key="role.id" class="border-top">
                <td class="ps-4 py-3 text-secondary">{{ role.id }}</td>
                <td class="py-3">
                  <span class="fw-medium">{{ role.name }}</span>
                </td>
                <td class="pe-4 py-3 text-end">
                  <div class="btn-group">
                    <button
                      @click="openEditModal(role)"
                      class="btn btn-sm btn-outline-orange rounded-3 me-2 d-inline-flex align-items-center"
                      title="Modifier le rôle"
                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>
                    </button>
                    <button
                      @click="deleteRole(role)"
                      class="btn btn-sm btn-outline-danger rounded-3 d-inline-flex align-items-center"
                      title="Supprimer le rôle"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <RoleCreateModal
      v-if="isCreateModalOpen"
      @close="closeCreateModal"
      @roleCreated="fetchRoles"
    />
    <RoleEditModal
      v-if="isEditModalOpen"
      :roleId="selectedRole?.id"
      @close="closeEditModal"
      @roleUpdated="fetchRoles"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RoleService from '../../../services/RoleService';
import Swal from 'sweetalert2';
import RoleCreateModal from './RoleCreateModal.vue';
import RoleEditModal from './RoleEditModal.vue';

const roles = ref([]);
const loading = ref(true);
const isCreateModalOpen = ref(false);
const isEditModalOpen = ref(false);
const selectedRole = ref(null);

const fetchRoles = async () => {
  try {
    loading.value = true;
    roles.value = await RoleService.getAllRoles();
  } catch (error) {
    console.error('Erreur lors de la récupération des rôles :', error);
    Swal.fire({
      title: 'Erreur!',
      text: 'Échec du chargement des rôles. Veuillez réessayer.',
      icon: 'error',
      confirmButtonColor: '#dc3545',
    });
  } finally {
    loading.value = false;
  }
};

const openCreateModal = () => {
  isCreateModalOpen.value = true;
};

const closeCreateModal = () => {
  isCreateModalOpen.value = false;
};

const openEditModal = (role) => {
  selectedRole.value = role;
  isEditModalOpen.value = true;
};

const closeEditModal = () => {
  isEditModalOpen.value = false;
  selectedRole.value = null;
};

const deleteRole = async (role) => {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Cette action est irréversible!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Oui, supprimer!',
    cancelButtonText: 'Annuler',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await RoleService.deleteRole(role.id);
        await fetchRoles();
        Swal.fire({
          title: 'Supprimé!',
          text: `Le rôle "${role.name}" a été supprimé.`,
          icon: 'success',
          confirmButtonColor: '#28a745',
        });
      } catch (error) {
        Swal.fire({
          title: 'Erreur!',
          text: 'Échec de la suppression du rôle. Veuillez réessayer.',
          icon: 'error',
          confirmButtonColor: '#dc3545',
        });
      }
    }
  });
};

onMounted(() => {
  fetchRoles();
});
</script>

<style>
.text-orange {
  color: #fd7e14 !important;
}

.btn-orange {
  background-color: #fd7e14;
  border-color: #fd7e14;
  color: white;
}

.btn-orange:hover, .btn-orange:focus {
  background-color: #e9650f;
  border-color: #e9650f;
  color: white;
}

.btn-outline-orange {
  color: #fd7e14;
  border-color: #fd7e14;
}

.btn-outline-orange:hover {
  background-color: #fd7e14;
  color: white;
}

.spinner-border.text-orange {
  color: #fd7e14 !important;
}
</style>
