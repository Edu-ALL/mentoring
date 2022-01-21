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
    path: '/user/:page?',
    name: 'userDashboard',
    component: userDashboard
    // component: () => import('../views/student/dashboard')
  },

  // {
  //   path: '/user/page/:page',
  //   name: 'userDashboardPage',
  //   component: userDashboard
  //   // component: () => import('../views/student/dashboard')
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
