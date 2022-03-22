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
    props: true,
    component: userDashboard
    // component: () => import('../views/student/dashboard')
  },

  {
    path: '/user/:page',
    name: 'userPage',
    component: () => import('../views/student/page')
  },

  {
    path: '/user/call/:cat',
    name: '1on1Call',
    props: true,
    component: () => import('../views/student/call-detail')
  },

  {
    path: '/user/webinar/:slug',
    name: 'webinar',
    props: true,
    component: () => import('../views/student/webinar-detail')
  },

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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
