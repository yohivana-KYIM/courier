<template>
  <div class="min-vh-100 bg-light py-5">
    <div class="container">
      <!-- Header Section -->
      <div class="card border-0 shadow-sm rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="row align-items-center">
            <div class="col-md-8">
              <h2 class="fw-bold text-orange mb-1">Utilisateurs</h2>
              <p class="text-muted mb-0 fs-6">
                Gérez et suivez tous les utilisateurs en un seul endroit
              </p>
            </div>
            <div class="col-md-4 text-md-end mt-3 mt-md-0">
              <button
                @click="openCreateModal"
                class="btn btn-orange px-4 py-2 shadow-sm rounded-3 d-inline-flex align-items-center"
              >
                <i class="bi bi-file-earmark-plus-fill me-2"></i>
                Créer un utilisateur
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
      <div v-else-if="users.length === 0" class="card border-0 rounded-3 shadow-sm text-center py-5">
        <div class="card-body p-5">
          <div class="mb-3">
            <i class="bi bi-folder-plus fs-1 text-orange opacity-75"></i>
          </div>
          <h3 class="fs-4 fw-semibold">Aucun utilisateur trouvé</h3>
          <p class="text-muted mb-4">Commencez par créer un nouvel utilisateur pour gérer vos utilisateurs.</p>
          <button
            @click="openCreateModal"
            class="btn btn-orange px-4 py-2 rounded-3"
          >
            <i class="bi bi-file-earmark-plus-fill me-2"></i>
            Créer un utilisateur
          </button>
        </div>
      </div>

      <!-- User Table -->
      <div v-else class="card border-0 rounded-3 shadow-sm overflow-hidden">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="bg-light">
              <tr>
                <th scope="col" class="border-0 ps-4 py-3 text-uppercase fs-6 fw-semibold text-secondary">ID</th>
                <th scope="col" class="border-0 py-3 text-uppercase fs-6 fw-semibold text-secondary">Nom</th>
                <th scope="col" class="border-0 py-3 text-uppercase fs-6 fw-semibold text-secondary">Email</th>
                <th scope="col" class="border-0 py-3 text-uppercase fs-6 fw-semibold text-secondary">Rôle</th>
                <th scope="col" class="border-0 py-3 text-uppercase fs-6 fw-semibold text-secondary">Téléphone</th>
                <th scope="col" class="border-0 pe-4 py-3 text-uppercase fs-6 fw-semibold text-secondary text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id" class="border-top">
                <td class="ps-4 py-3 text-secondary">{{ user.id }}</td>
                <td class="py-3">
                  <span class="fw-medium">{{ user.firstName }} {{ user.lastName }}</span>
                </td>
                <td class="py-3">{{ user.email }}</td>
                <td class="py-3">{{ user.role?.name }}</td>
                <td class="py-3">{{ user.phoneNumber }}</td>
                <td class="pe-4 py-3 text-end">
                  <div class="btn-group">
                    <button
                      @click="openEditModal(user)"
                      class="btn btn-sm btn-outline-orange rounded-3 me-2 d-inline-flex align-items-center"
                      title="Modifier l'utilisateur"
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button
                      @click="deleteUser(user)"
                      class="btn btn-sm btn-outline-danger rounded-3 d-inline-flex align-items-center"
                      title="Supprimer l'utilisateur"
                    >
                      <i class="bi bi-trash-fill"></i>
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
    <UserCreateModal
      v-if="isCreateModalOpen"
      @close="closeCreateModal"
      @userCreated="fetchUsers"
    />
    <UserEditModal
      v-if="isEditModalOpen"
      :userId="selectedUser?.id"
      @close="closeEditModal"
      @userUpdated="fetchUsers"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import UserService from '../../../services/UserService';
import Swal from 'sweetalert2';
import UserCreateModal from './UserCreateModal.vue';
import UserEditModal from './UserEditModal.vue';

const users = ref([]);
const loading = ref(true);
const isCreateModalOpen = ref(false);
const isEditModalOpen = ref(false);
const selectedUser = ref(null);

const fetchUsers = async () => {
  try {
    loading.value = true;
    const response = await UserService.getAllUsers();
    users.value = response.data; // Récupère les données dynamiquement
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    Swal.fire({
      title: 'Erreur!',
      text: 'Échec du chargement des utilisateurs. Veuillez réessayer.',
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

const openEditModal = (user) => {
  selectedUser.value = user;
  isEditModalOpen.value = true;
};

const closeEditModal = () => {
  isEditModalOpen.value = false;
  selectedUser.value = null;
};

const deleteUser = async (user) => {
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
        await UserService.deleteUser(user.id);
        await fetchUsers();
        Swal.fire({
          title: 'Supprimé!',
          text: `L'utilisateur "${user.firstName} ${user.lastName}" a été supprimé.`,
          icon: 'success',
          confirmButtonColor: '#28a745',
        });
      } catch (error) {
        Swal.fire({
          title: 'Erreur!',
          text: 'Échec de la suppression de l\'utilisateur. Veuillez réessayer.',
          icon: 'error',
          confirmButtonColor: '#dc3545',
        });
      }
    }
  });
};

onMounted(() => {
  fetchUsers();
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
