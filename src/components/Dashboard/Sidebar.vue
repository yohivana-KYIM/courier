<template>
  <!-- Main sidebar navigation -->
  <nav id="sidebarMenu" class="sidebar d-md-block bg-dark text-white collapse" data-simplebar>
    <div class="sidebar-inner pt-3">
      <!-- Brand logo - displayed on larger screens -->
      <div class="d-none d-md-flex align-items-center justify-content-center mb-4 px-4">
        <router-link to="/" class="d-block">
          <img src="@/assets/img/brand/light1.jpg" alt="Logo" class="img-fluid" style="max-width: 120px">
        </router-link>
      </div>

      <!-- Mobile user card - displayed on small screens -->
      <div class="user-card d-flex d-md-none align-items-center justify-content-between px-4 pb-4">
        <div class="d-flex align-items-center">
          <div class="avatar-container me-3">
            <img src="@/assets/img/team/profile-picture-3.jpg" class="rounded-circle border-white" alt="User Avatar" width="48" height="48">
          </div>
          <div class="user-info">
            <h6 class="mb-1">{{ username }}</h6>
            <button @click="logout" class="btn btn-sm btn-outline-light">
              <svg class="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              Sign Out
            </button>
          </div>
        </div>

        <!-- Close button for mobile -->
        <div class="d-md-none">
          <button type="button" class="btn-close btn-close-white" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"></button>
        </div>
      </div>

      <!-- Navigation links -->
      <ul class="nav flex-column pt-md-0">
        <!-- Dashboard -->
        <li class="nav-item" :class="{ 'active': $route.path === '/admin/dashboard' }">
          <router-link to="/admin/dashboard" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon me-3">
              <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
            </span>
            <span class="sidebar-text">Dashboard</span>
          </router-link>
        </li>

        <!-- Couriers -->
        <li class="nav-item" :class="{ 'active': $route.path === '/admin/couriers' }">
          <router-link to="/admin/couriers" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon me-3">
              <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span class="sidebar-text">Couriers</span>
          </router-link>
        </li>

        <!-- Visiteur -->
        <li class="nav-item" :class="{ 'active': $route.path === '/admin/visitors' }">
          <router-link to="/admin/visitors" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon me-3">
              <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span class="sidebar-text">Visiteur</span>
          </router-link>
        </li>

        <!-- Profile -->
        <li class="nav-item" :class="{ 'active': $route.path === '/admin/profile' }">
          <router-link to="/admin/profile" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon me-3">
              <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span class="sidebar-text">Profile</span>
          </router-link>
        </li>

        <!-- Users -->
        <li class="nav-item" :class="{ 'active': $route.path === '/admin/users' }">
          <router-link to="/admin/users" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon me-3">
              <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span class="sidebar-text">Users</span>
          </router-link>
        </li>

        <!-- Separator -->
        <li role="separator" class="dropdown-divider mt-4 mb-3 border-gray-700"></li>

        <!-- Support -->
        <li class="nav-item">
          <a href="#" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon me-3">
              <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span class="sidebar-text">Support</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { useToast } from 'vue-toastification';
import { computed } from 'vue';

export default {
  name: "SidebarComponent",
  setup() {
    const authStore = useAuthStore();
    const toast = useToast();

    const username = computed(() => {
      return authStore.user ?
        `${authStore.user.firstName} ${authStore.user.lastName}` :
        'User';
    });

    const logout = async () => {
      try {
        await authStore.logout();
        toast.success("Logged out successfully");
        window.location.href = '/login';
      } catch (error) {
        toast.error("Failed to logout. Please try again.");
      }
    };

    return {
      username,
      logout
    };
  }
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  transition: all 0.3s;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar-inner {
  padding: 1.5rem 1rem;
}

.nav-link {
  padding: 0.675rem 1rem;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(3px);
}

.nav-link.active {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 600;
}

.dropdown-divider {
  border-color: rgba(255, 255, 255, 0.15);
  margin: 1rem 0;
}

.user-card {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
}

.sidebar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

/* Better responsive behavior */
@media (max-width: 767.98px) {
  .sidebar {
    width: 100%;
    max-width: 280px;
    transform: translateX(-100%);
    z-index: 1050;
  }

  .sidebar.show {
    transform: translateX(0);
  }

  body.sidebar-open {
    overflow: hidden;
  }

  /* Add overlay when sidebar is open */
  body.sidebar-open::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1040;
  }
}

@media (min-width: 768px) {
  /* Add padding to content area to account for fixed sidebar */
  .content-wrapper {
    padding-left: 250px;
  }

  /* Ensure sidebar is visible on desktop */
  .sidebar {
    transform: none !important;
    visibility: visible !important;
  }
}
</style>
