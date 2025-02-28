<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // Check for token on app mount (optional - for automatic login persistence)
    if (localStorage.getItem('token') && this.$route.path === '/login') {
      this.$router.push('/admin/dashboard');
    }
  }
}
</script>

<style>
/* Import Bootstrap CSS */
@import 'bootstrap/dist/css/bootstrap.min.css';


</style>