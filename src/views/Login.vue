<template>
  <main>
    <!-- Section principale -->
    <section class="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
      <div class="container">
        <div
          class="row justify-content-center form-bg-image"
          data-background-lg="/src/assets/img/illustrations/signin.svg"
        >
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <!-- Logo centré en haut -->
              <div class="text-center mb-4">
                <a href="#" class="nav-link">
                  <img
                    src="/src/assets/img/brand/light1.jpg"
                    width="120"
                    alt="Accent Media Logo"
                    style="border-radius: 8px"
                  />
                </a>
              </div>

              <!-- En-tête -->
              <div class="text-center text-md-center mb-4 mt-md-0">
                <h2 class="h4 text-gray-900 mb-3">Connectez-vous à votre compte</h2>
                <p class="text-muted mb-0">Utilisez vos identifiants pour accéder à votre espace.</p>
              </div>

              <!-- Formulaire de connexion -->
              <form @submit.prevent="handleLogin" class="needs-validation" novalidate>
                <!-- Champ Email -->
                <div class="form-group mb-4">
                  <label for="email" class="form-label">Email</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="example@company.com"
                      id="email"
                      v-model="email"
                      autofocus
                      required
                    />
                  </div>
                </div>

                <!-- Champ Mot de passe -->
                <div class="form-group mb-4">
                  <label for="password" class="form-label">Mot de passe</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      class="form-control"
                      id="password"
                      v-model="password"
                      required
                    />
                  </div>
                </div>

                <!-- Options supplémentaires -->
                <div class="d-flex justify-content-between align-items-top mb-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="remember" v-model="rememberMe" />
                    <label class="form-check-label mb-0" for="remember"> Se souvenir de moi </label>
                  </div>
                  <div>
                    <router-link to="/forgot" class="small text-right text-decoration-none text-primary">Mot de passe oublié ?</router-link>
                  </div>
                </div>

                <!-- Bouton de soumission -->
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary btn-lg" :disabled="isLoading">
                    <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Se connecter
                  </button>
                </div>
                <div v-if="errorMessage" class="mt-3 alert alert-danger" role="alert">
                  {{ errorMessage }}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

export default {
  name: "LoginPage",
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const toast = useToast();

    const email = ref("");
    const password = ref("");
    const rememberMe = ref(false);
    const errorMessage = ref("");
    const isLoading = ref(false);

    const handleLogin = async () => {
      errorMessage.value = "";
      isLoading.value = true;

      try {
        const credentials = {
          email: email.value,
          password: password.value,
          remember: rememberMe.value
        };
        const response = await authStore.login(credentials);

        // Handle successful login
        if (authStore.isAuthenticated) {
          toast.success("Connexion réussie");
          router.push("/Admin/dashboard");
        } else {
          errorMessage.value = "Login failed. Please check your credentials.";
        }
      } catch (error) {
        console.error("Login error:", error);

        // Display API error message
        if (error.response && error.response.data && error.response.data.message) {
          errorMessage.value = error.response.data.message;
        } else {
          errorMessage.value = "An error occurred during login.";
        }
      } finally {
        isLoading.value = false;
      }
    };

    return {
      email,
      password,
      rememberMe,
      errorMessage,
      isLoading,
      handleLogin,
    };
  },
};
</script>

<style scoped>
/* Styles personnalisés */
.bg-soft {
  background-color: #f8f9fa;
}

.shadow-soft {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-bg-image {
  background-size: cover;
  background-position: center;
}

.fmxw-500 {
  max-width: 500px;
}

.btn-primary {
  background-color: #2d3748;
  border: none;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #1a202c;
}

.form-control:focus {
  border-color: #2d3748;
  box-shadow: 0 0 0 0.2rem rgba(45, 55, 72, 0.25);
}

.input-group-text {
  background-color: #e9ecef;
  border: none;
}

.text-primary {
  color: #2d3748 !important;
}
</style>
