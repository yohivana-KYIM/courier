<template>
  <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
    <a class="navbar-brand me-lg-5" href="../../index.html">
      <img class="navbar-brand-dark" src="../../assets/img/brand/light.svg" alt="Volt logo" />
      <img class="navbar-brand-light" src="../../assets/img/brand/dark.svg" alt="Volt logo" />
    </a>
    <div class="d-flex align-items-center">
      <button class="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>

  <nav id="sidebarMenu" class="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
    <div class="sidebar-inner px-4 pt-3">
      <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
        <div class="d-flex align-items-center">
          <div class="avatar-lg me-4">
            <img src="../../assets/img/team/profile-picture-3.jpg" class="card-img-top rounded-circle border-white" alt="Bonnie Green">
          </div>
          <div class="d-block">
            <h2 class="h5 mb-3">Hi, Jane</h2>
            <a href="../../pages/examples/sign-in.html" class="btn btn-secondary btn-sm d-inline-flex align-items-center">
              <svg class="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              Sign Out
            </a>
          </div>
        </div>
        <div class="collapse-close d-md-none">
          <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
            <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
      <ul class="nav flex-column pt-3 pt-md-0">
        <li class="nav-item">
          <a href="#" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon">
              <img src="@/assets/img/brand/light1.jpg" height="100" width="100" alt="Volt Logo">
            </span>
          </a>
        </li>
        <li class="nav-item" :class="{ active: $route.path === '/admin/dashboard' }">
          <router-link to="/admin/dashboard" class="nav-link">
            <span class="sidebar-icon">
              <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
            </span>
            <span class="sidebar-text">Dashboard</span>
          </router-link>
        </li>

        <!-- Couriers -->
        <li class="nav-item" :class="{ active: $route.path === '/admin/couriers' }">
          <router-link to="/admin/couriers" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon">
              <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span class="sidebar-text">Couriers</span>
          </router-link>
        </li>

        <!-- Visiteur -->
        <li class="nav-item" :class="{ active: $route.path === '/admin/visitors' }">
          <router-link to="/admin/visitors" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon">
              <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span class="sidebar-text">Visiteur</span>
          </router-link>
        </li>

        <!-- Profile -->
        <li class="nav-item" :class="{ active: $route.path === '/admin/profile' }">
          <router-link to="/admin/profile" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon">
              <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span class="sidebar-text">Profile</span>
          </router-link>
        </li>

        <!-- Users -->
        <li class="nav-item" :class="{ active: $route.path === '/admin/users' }">
          <router-link to="/admin/users" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon">
              <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span class="sidebar-text">Users</span>
          </router-link>
        </li>

        <!-- Séparateur -->
        <li role="separator" class="dropdown-divider mt-4 mb-3 border-gray-700"></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SidebarPage",
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  },
  computed: {
    username() {
      return localStorage.getItem('username') || 'User';  // Default to "User"
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques pour la barre latérale */
.sidebar {
  background-color: #2d3748; /* Couleur de fond */
}

.nav-link {
  color: #cbd5e0; /* Couleur du texte */
}

.nav-link:hover {
  background-color: #4a5568; /* Couleur de fond au survol */
}

.nav-link.active {
  background-color: #4a5568; /* Couleur de fond pour l'élément actif */
  color: #ffffff; /* Couleur du texte pour l'élément actif */
}
</style>