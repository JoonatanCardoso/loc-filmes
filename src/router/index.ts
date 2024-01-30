import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import UsersPage from '@/views/UsersPage.vue'
import LocationPage from '@/views/LocationPage.vue'
import LocationDetailsPage from '@/views/LocationDetailsPage.vue'
import ClientsPage from '@/views/ClientsPage.vue'
import FilmsPage from '@/views/FilmsPage.vue'
import UserConfigPage from '@/views/UserConfigPage.vue'
import ClientConfigPage from '@/views/ClientConfigPage.vue'
import LayoutClean from '@/layouts/LayoutClean.vue'
import LayoutPanel from '@/layouts/LayoutPanel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      components: {
        default: LoginPage,
        layout: LayoutClean,
      },
    },
    {
      path: '/users',
      name: 'users',
      components: {
        default: UsersPage,
        layout: LayoutPanel,
      },
      meta: { title: 'Usuários' }
    },
    {
      path: '/user/:id',
      name: 'user',
      components: {
        default: UserConfigPage,
        layout: LayoutClean,
      },
      props: true,
    },
    {
      path: '/clients',
      name: 'clients',
      components: {
        default: ClientsPage,
        layout: LayoutPanel,
      },
      meta: { title: 'Clientes' }
    },
    {
      path: '/client/:id',
      name: 'client',
      components: {
        default: ClientConfigPage,
        layout: LayoutClean,
      },
      props: true,
    },
    {
      path: '/location',
      name: 'location',
      components: {
        default: LocationPage,
        layout: LayoutPanel,
      },
      meta: { title: 'Locação' }
    },
    {
      path: '/films',
      name: 'films',
      components: {
        default: FilmsPage,
        layout: LayoutPanel,
      },
      meta: { title: 'Filmes' }
    },
    {
      path: '/location-details',
      name: 'location-details',
      components: {
        default: LocationDetailsPage,
        layout: LayoutClean,
      },
    }
  ]
})

export default router
