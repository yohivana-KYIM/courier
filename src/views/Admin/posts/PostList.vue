<template>
  <div class="min-vh-100 bg-light py-5">
    <div class="container">
      <!-- Header Section with improved styling -->
      <div class="card border-0 shadow-sm rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="row align-items-center">
            <div class="col-md-8">
              <h2 class="fw-bold text-orange mb-1">Posts</h2>
              <p class="text-muted mb-0 fs-6">
                Gérez et suivez tous vos posts en un seul endroit
              </p>
            </div>
            <div class="col-md-4 text-md-end mt-3 mt-md-0">
              <button
                @click="openCreateModal"
                class="btn btn-orange px-4 py-2 shadow-sm rounded-3 d-inline-flex align-items-center"
              >
                <i class="bi bi-file-earmark-plus-fill me-2"></i>
                Créer un post
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="card border-0 shadow-sm rounded-3 mb-4">
        <div class="card-body p-3">
          <div class="input-group">
            <span class="input-group-text bg-white border-end-0">
              <i class="bi bi-search text-orange"></i>
            </span>
            <input
              type="text"
              class="form-control border-start-0 shadow-none"
              placeholder="Rechercher un post par nom..."
              v-model="searchQuery"
              @input="filterPosts"
            >
            <button
              v-if="searchQuery"
              class="btn btn-outline-orange"
              @click="clearSearch"
              title="Effacer la recherche"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State with improved spinner -->
      <div v-if="loading" class="d-flex justify-content-center align-items-center py-5" style="height: 300px">
        <div class="spinner-border text-orange" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Chargement...</span>
        </div>
      </div>

      <!-- Empty State with better visual hierarchy -->
      <div v-else-if="filteredPosts.length === 0 && !searchQuery" class="card border-0 rounded-3 shadow-sm text-center py-5">
        <div class="card-body p-5">
          <div class="mb-3">
            <i class="bi bi-folder-plus fs-1 text-orange opacity-75"></i>
          </div>
          <h3 class="fs-4 fw-semibold">Aucun post trouvé</h3>
          <p class="text-muted mb-4">Commencez par créer un nouveau post pour gérer votre contenu.</p>
          <button
            @click="openCreateModal"
            class="btn btn-orange px-4 py-2 rounded-3"
          >
            <i class="bi bi-file-earmark-plus-fill me-2"></i>
            Créer un post
          </button>
        </div>
      </div>

      <!-- No Search Results -->
      <div v-else-if="filteredPosts.length === 0 && searchQuery" class="card border-0 rounded-3 shadow-sm text-center py-5">
        <div class="card-body p-5">
          <div class="mb-3">
            <i class="bi bi-search fs-1 text-orange opacity-75"></i>
          </div>
          <h3 class="fs-4 fw-semibold">Aucun résultat trouvé</h3>
          <p class="text-muted mb-4">Aucun post ne correspond à votre recherche "{{ searchQuery }}"</p>
          <button
            @click="clearSearch"
            class="btn btn-outline-orange px-4 py-2 rounded-3"
          >
            <i class="bi bi-arrow-counterclockwise me-2"></i>
            Réinitialiser la recherche
          </button>
        </div>
      </div>

      <!-- Post Table with enhanced styling -->
      <div v-else class="card border-0 rounded-3 shadow-sm overflow-hidden">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="bg-light">
              <tr>
                <th scope="col" class="border-0 ps-4 py-3 text-uppercase fs-6 fw-semibold text-secondary">ID</th>
                <th scope="col" class="border-0 py-3 text-uppercase fs-6 fw-semibold text-secondary">Nom du post</th>
                <th scope="col" class="border-0 pe-4 py-3 text-uppercase fs-6 fw-semibold text-secondary text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in paginatedPosts" :key="post.id" class="border-top">
                <td class="ps-4 py-3 text-secondary">{{ post.id }}</td>
                <td class="py-3">
                  <span class="fw-medium">{{ post.nomPost }}</span>
                </td>
                <td class="pe-4 py-3 text-end">
                  <div class="btn-group">
                    <button
                      @click="openEditModal(post)"
                      class="btn btn-sm btn-outline-orange rounded-3 me-2 d-inline-flex align-items-center"
                      title="Modifier le post"
                    >
                      <i class="bi bi-pencil-fill me-1"></i>
                      Modifier
                    </button>
                    <button
                      @click="deletePost(post)"
                      class="btn btn-sm btn-outline-danger rounded-3 d-inline-flex align-items-center"
                      title="Supprimer le post"
                    >
                      <i class="bi bi-trash-fill me-1"></i>
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Pagination -->
      <nav aria-label="Page navigation" class="mt-4">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="changePage(currentPage - 1)">Précédent</button>
          </li>
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
            <button class="page-link" @click="changePage(page)">{{ page }}</button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="changePage(currentPage + 1)">Suivant</button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Modals -->
    <PostCreateModal
      v-if="isCreateModalOpen"
      @close="closeCreateModal"
      @postCreated="fetchPosts"
    />
    <PostEditModal
      v-if="isEditModalOpen"
      :postId="selectedPost?.id"
      @close="closeEditModal"
      @postUpdated="fetchPosts"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import PostService from '../../../services/PostService'
import Swal from 'sweetalert2'
import PostCreateModal from './PostCreateModal.vue'
import PostEditModal from './PostEditModal.vue'

const posts = ref([])
const filteredPosts = ref([])
const loading = ref(true)
const isCreateModalOpen = ref(false)
const isEditModalOpen = ref(false)
const selectedPost = ref(null)
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(10)

const fetchPosts = async () => {
  try {
    loading.value = true
    posts.value = await PostService.getAllPosts()
    filteredPosts.value = [...posts.value]
  } catch (error) {
    console.error('Error fetching posts:', error)
    Swal.fire({
      title: 'Erreur!',
      text: 'Échec du chargement des posts. Veuillez réessayer.',
      icon: 'error',
      confirmButtonColor: '#dc3545'
    })
  } finally {
    loading.value = false
  }
}

const filterPosts = () => {
  if (!searchQuery.value) {
    filteredPosts.value = [...posts.value]
    return
  }

  const query = searchQuery.value.toLowerCase().trim()
  filteredPosts.value = posts.value.filter(post =>
    post.nomPost.toLowerCase().includes(query)
  )
}

// Assurer que la recherche est mise à jour quand la query change
watch(searchQuery, () => {
  filterPosts()
})

const clearSearch = () => {
  searchQuery.value = ''
  filterPosts()
}

const openCreateModal = () => {
  isCreateModalOpen.value = true
}

const closeCreateModal = () => {
  isCreateModalOpen.value = false
}

const openEditModal = (post) => {
  selectedPost.value = post
  isEditModalOpen.value = true
}

const closeEditModal = () => {
  isEditModalOpen.value = false
  selectedPost.value = null
}

const deletePost = async (post) => {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Cette action est irréversible!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Oui, supprimer!',
    cancelButtonText: 'Annuler',
    buttonsStyling: true,
    customClass: {
      confirmButton: 'btn btn-danger',
      cancelButton: 'btn btn-secondary'
    }
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await PostService.deletePost(post.id)
        await fetchPosts()
        Swal.fire({
          title: 'Supprimé!',
          text: `Le post "${post.nomPost}" a été supprimé.`,
          icon: 'success',
          confirmButtonColor: '#28a745'
        })
      } catch (error) {
        Swal.fire({
          title: 'Erreur!',
          text: error.message || 'Échec de la suppression du post. Veuillez réessayer.',
          icon: 'error',
          confirmButtonColor: '#dc3545'
        })
      }
    }
  })
}

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredPosts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / itemsPerPage.value)
})

const changePage = (page) => {
  currentPage.value = page
}

onMounted(() => {
  fetchPosts()
})
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

@media (max-width: 768px) {
  .modal-dialog {
    margin: 1rem;
  }

  .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .pagination {
    flex-wrap: wrap;
  }

  .page-item {
    margin-bottom: 0.5rem;
  }
}
</style>
