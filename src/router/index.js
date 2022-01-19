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
    name: 'Page',
    component: Home,
  },


  {
    path: '/user',
    name: 'user_dashboard',
    component: () => import('../views/student/dashboard')
  },

  {
    path: '/user/:page',
    name: 'user_dashboard_page',
    component: () => import('../views/student/dashboard')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
