import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import UsersPage from '../views/UsersPage.vue'
import LocationPage from '../views/LocationPage.vue'
import ClientsPage from '../views/ClientsPage.vue'
import FilmsPage from '../views/FilmsPage.vue'
import UserConfigPage from '@/views/UserConfigPage.vue'
import ClientConfigPage from '@/views/ClientConfigPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/users',
      name: 'users',
      component: UsersPage
    },
    {
      path: '/location',
      name: 'location',
      component: LocationPage
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsPage
    },
    {
      path: '/films',
      name: 'films',
      component: FilmsPage
    },
    {
      path: '/user',
      name: 'user',
      component: UserConfigPage
    },
    {
      path: '/client',
      name: 'client',
      component: ClientConfigPage
    }
  ]
})

export default router
