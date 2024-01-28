import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import UsersPage from '../views/UsersPage.vue'
import ClientsPage from '../views/ClientsPage.vue'
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
      path: '/clients',
      name: 'clients',
      component: ClientsPage
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
