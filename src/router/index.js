import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Forgot from '../views/Forgot.vue'
import Dashboard from '../views/Admin/dashboard.vue' 
import UserList from '../views/Admin/users/UserList.vue'
import PostList from '../views/Admin/posts/PostList.vue'
import RoleList from '../views/Admin/roles/RoleList.vue'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot,
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/users',
    name: 'UserList',
    component: UserList,
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/posts',
    name: 'PostList',
    component: PostList,
    meta: { requiresAuth: true },
  },
   {
    path: '/admin/roles',
    name: 'RoleList',
    component: RoleList,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    redirect: '/login',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    // route protégée, pas de jeton: rediriger vers la connexion
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else if (to.path === '/login' && token) {
    // Already logged in, redirect to dashboard
    next({ path: '/admin/dashboard' })
  } else {
    // sinon, permettez la navigation
    next()
  }
})

export default router
