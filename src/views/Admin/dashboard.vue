<template>
  <div>
    <Topbar />
    <div class="d-flex">
      <Sidebar />
      <main class="content">
        <!-- Your actual dashboard content goes here -->
        <h1>Welcome to the Dashboard!</h1>
        <p>Add your dashboard-specific content here.</p>
      </main>
    </div>
  </div>
</template>

<script>
import Topbar from "../../components/Dashboard/Topbar.vue"; // Adjust the path
import Sidebar from "../../components/Dashboard/Sidebar.vue"; // Adjust the path

export default {
  name: "AdminDashboard",
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style scoped>
.content {
  flex-grow: 1;
  padding: 20px;
  background-color: #f8f9fa; /* Light background for content */
  min-height: 100vh;
}

@media (max-width: 768px) {
  .content {
    padding: 10px;
  }
}
</style>