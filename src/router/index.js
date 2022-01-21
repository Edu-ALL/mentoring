import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/reset/:token',
    name: 'Reset',
    component: Home,
  },


  {
    path: '/user/',
    name: 'userDashboard',
    component: () => import('../views/student/dashboard')
  },

  {
    path: '/user/:page',
    name: 'userDashboardPage',
    component: () => import('../views/student/dashboard')
  },

  {
    path: '/test',
    name: 'test',
    component: () => import('../views/old-home')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
