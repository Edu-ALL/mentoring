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
    path: '/user/:menu?/:submenu?/:key?',
    name: 'userPage',
    component: () => import('../views/student/page')
  },

  {
    path: '/user/call/:cat',
    name: '1on1Call',
    props: true,
    component: () => import('../views/student/call-detail')
  },

  // {
  //   path: '/user/webinar/:slug',
  //   name: 'webinar',
  //   props: true,
  //   component: () => import('../views/student/webinar-detail')
  // },

  {
    path: '/user/event/:slug',
    name: 'upcoming',
    props: true,
    component: () => import('../views/student/event-detail')
  },

  {
    path: '/admin/:menu?/:submenu?/:key?',
    name: 'adminDashboard',
    props: true,
    component: () => import('../views/admin/dashboard')
  },

  {
    path: '/mentor/:menu?/:submenu?/:key?',
    name: 'mentorDashboard',
    props: true,
    component: () => import('../views/mentor/dashboard')
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
