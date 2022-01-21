import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import userDashboard from '../views/student/dashboard'

const routes = [
  {
    path: '/test',
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
    component: userDashboard
    // component: () => import('../views/student/dashboard')
  },

  {
    path: '/user/:page',
    name: 'userDashboardPage',
    component: userDashboard
    // component: () => import('../views/student/dashboard')
  },

  {
    path: '/test',
    name: 'test',
    component: Home
    // component: () => import('../views/old-home')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
