import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import userDashboard from '../views/student/dashboard'

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
    path: '/user',
    name: 'userDashboard',
    component: userDashboard
    // component: () => import('../views/student/dashboard')
  },

  {
    path: '/user/:page',
    name: 'userPage',
    component: () => import('../views/student/page')
  },

  {
    path: '/user/call/:type/:id',
    name: '1on1Call',
    component: () => import('../views/student/call-detail')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
