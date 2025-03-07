<template>
  <nav class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
    <div class="container-fluid px-0">
      <div class="d-flex justify-content-between w-100" id="navbarSupportedContent">
        <!-- Hamburger menu for mobile (always visible) -->
        <button
          class="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Logo for mobile -->
        <div class="d-md-none">
          <router-link to="/" class="navbar-brand">
            <img src="@/assets/img/brand/light1.jpg" alt="Logo" height="36">
          </router-link>
        </div>

        <!-- Navbar links -->
        <ul class="navbar-nav align-items-center">
          <!-- Always visible user info - even on smaller screens -->
          <li class="nav-item d-flex align-items-center me-3">
            <div class="d-flex align-items-center">
              <span class="d-none d-sm-inline-block text-white fw-bold">
                {{ authStore.user ? `${authStore.user.firstName} ${authStore.user.lastName}` : 'Loading...' }}
              </span>
              <!-- Just show initial on very small screens -->
              <span class="d-inline-block d-sm-none text-white fw-bold">
                {{ authStore.user ? `${authStore.user.firstName.charAt(0)}${authStore.user.lastName.charAt(0)}` : '...' }}
              </span>
            </div>
          </li>

          <!-- Notification bell -->
          <li class="nav-item dropdown">
            <a class="nav-link text-dark notification-bell unread dropdown-toggle" data-unread-notifications="true" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
              <svg class="icon icon-sm text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
              <span class="notification-dot"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-center mt-2 py-0">
              <div class="list-group list-group-flush">
                <a href="#" class="text-center text-primary fw-bold border-bottom border-light py-3">Notifications</a>
                <a href="#" class="list-group-item list-group-item-action border-bottom">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <img alt="Image placeholder" src="@/assets/img/team/profile-picture-1.jpg" class="avatar-md rounded">
                    </div>
                    <div class="col ps-0 ms-2">
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 class="h6 mb-0 text-small">Jose Leos</h4>
                        </div>
                        <div class="text-end">
                          <small class="text-danger">a few moments ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </li>

          <!-- User dropdown menu -->
          <li class="nav-item dropdown ms-lg-3">
            <a class="nav-link dropdown-toggle pt-1 px-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="media d-flex align-items-center">
                <img class="avatar rounded-circle" alt="Image placeholder" src="@/assets/img/team/profile-picture-3.jpg">
                <div class="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                  <span class="mb-0 font-small fw-bold text-gray-900" v-if="authStore.user">
                    {{ authStore.user.firstName }} {{ authStore.user.lastName }}
                  </span>
                  <span class="mb-0 font-small fw-bold text-gray-900" v-else>
                    Loading...
                  </span>
                </div>
              </div>
            </a>
            <div class="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
              <a class="dropdown-item d-flex align-items-center" href="#">
                <svg class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                My Profile
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <svg class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                Settings
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <svg class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
                Messages
              </a>

              <div role="separator" class="dropdown-divider my-1"></div>
              <a class="dropdown-item d-flex align-items-center" @click="handleLogout">
                <svg class="dropdown-icon text-danger me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { useToast } from "vue-toastification";
import { onMounted } from 'vue';

export default {
  name: "TopbarPage",
  setup() {
    const authStore = useAuthStore();
    const toast = useToast();

    onMounted(async () => {
      // Check if user is authenticated but user data is not loaded
      if (authStore.isAuthenticated && !authStore.user) {
        try {
          await authStore.fetchUser();
        } catch (error) {
          toast.error("Failed to load user information");
        }
      }
    });

    const handleLogout = async () => {
      try {
        await authStore.logout();
        toast.success("Logged out successfully");
        // Redirect to login page
        window.location.href = '/login'; // Using window.location for a full page reload
      } catch (error) {
        toast.error("Failed to logout. Please try again.");
      }
    };

    return {
      authStore,
      handleLogout
    };
  }
};
</script>

<style scoped>
/* Improved topbar styling */
.navbar-top {
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  z-index: 1030;
}

.notification-bell {
  position: relative;
}

.notification-bell.unread::after {
  content: '';
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #e74c3c;
  border-radius: 50%;
}

.notification-dot {
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  background-color: #e74c3c;
  border-radius: 50%;
}

.avatar {
  width: 36px;
  height: 36px;
  object-fit: cover;
}

@media (max-width: 767.98px) {
  .navbar-top {
    padding: 0.5rem 1rem;
  }
}

@media (max-width: 575.98px) {
  .avatar {
    width: 32px;
    height: 32px;
  }
}
</style>
