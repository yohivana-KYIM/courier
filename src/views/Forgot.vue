<template>
  <main>
    <!-- Titre de la page -->
    <title>Accent Media - Mot de passe oublié</title>

    <!-- Section principale -->
    <section class="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
      <div class="container">
        <div wire:ignore.self class="row justify-content-center form-bg-image" data-background-lg="/src/assets/img/illustrations/signin.svg">
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <!-- Logo centré en haut -->
              <div class="text-center mb-4">
                <a href="#" class="nav-link">
                  <img src="/src/assets/img/brand/light1.jpg" height="" width="120" alt="Accent Media-sendmail Logo" style="border-radius: 8px;">
                </a>
              </div>

              <!-- En-tête -->
              <div class="text-center text-md-center mb-4 mt-md-0">
                <h1 class="mb-3 h3">Mot de passe oublié</h1>
                <p class="mb-0">Entrez votre adresse e-mail pour réinitialiser votre mot de passe.</p>
              </div>

              <!-- Formulaire de réinitialisation -->
              <form>
                <!-- Champ Email -->
                <div class="form-group mb-4">
                  <label for="email">Votre Email</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">
                      <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </span>
                    <input type="email" class="form-control" placeholder="example@company.com" id="email" autofocus required>
                  </div>
                </div>

                <!-- Bouton de soumission -->
                <div class="d-grid">
                  <button type="submit" class="btn btn-gray-800 custom-btn">Réinitialiser le mot de passe</button>
                </div>

                <!-- Lien pour retourner à la connexion -->
                <div class="text-center mt-3">
                    <router-link to="/login" class="small text-right">Retour à la connexion</router-link>


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
export default {
  name: 'ForgotPage',
  // Vous pouvez ajouter des méthodes, des données, etc. ici
};
</script>

<style scoped>
/* Style pour le bouton */
.custom-btn {
  background-color: #2d3748; /* Couleur de base */
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  padding: 10px;
  transition: background-color 0.3s ease; /* Transition fluide */
}

/* Style lorsque le bouton est cliqué */
.custom-btn:active {
  background-color: #DC531A; /* Couleur au clic */
  color: white; /* Texte blanc */
}
</style>
