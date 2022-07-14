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
    path: '/admin/',
    name: 'loginAdmin',
    props: true,
    component: () => import('../views/admin/login')
  },

  {
    path: '/admin/:menu?/:submenu?/:key?',
    name: 'adminDashboard',
    props: true,
    component: () => import('../views/admin/dashboard')
  },

  {
    path: '/user/:menu?/:submenu?/:key?/:key2?',
    name: 'studentPage',
    component: () => import('../views/student/page')
  },

  {
    path: '/mentor/:menu?/:submenu?/:key?/:key2?',
    name: 'mentorDashboard',
    props: true,
    component: () => import('../views/mentor/page')
  },

  {
    path: '/alumni/:menu?/:submenu?/:key?',
    name: 'alumniDashboard',
    props: true,
    component: () => import('../views/alumni/dashboard')
  },

  {
    path: '/editor/:menu?/:submenu?/:key?',
    name: 'editorDashboard',
    props: true,
    component: () => import('../views/editor/dashboard')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
