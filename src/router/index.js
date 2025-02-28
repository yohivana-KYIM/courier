import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Forgot from "../views/Forgot.vue";  // Forgot password view

import Dashboard from "../views/Admin/dashboard.vue"; // Import Admin Dashboard
// import Users from "../views/Admin/Users/Users.vue";      //New route for users

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
      path: "/forgot",
      name: "Forgot",
      component: Forgot,
  },
  {
    path: "/Admin/dashboard",
    name: "Dashboard",
    component: Dashboard,
    // meta: { requiresAuth: true } // Protect Admin routes
  },

  {
    path: "/",
    redirect: "/login" // Redirect the root to the login page
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth && !token) {
    // Protected route, no token: redirect to login
    next({ path: "/login", query: { redirect: to.fullPath } });
  } else if (to.path === "/login" && token) {
    next({ path: "/admin/dashboard" });
  } else {
    // Otherwise, allow navigation
    next();
  }
});

export default router;
