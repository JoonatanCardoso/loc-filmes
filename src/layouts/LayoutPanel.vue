<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-gray-100" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 color-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                />
              </svg>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                  v-for="item in navigation"
                  @click.prevent="handleButtonClick(item.href, item.name)"
                  href="#"
                  :key="item.name"
                  :class="[
                    $route.name === item.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-800 hover:bg-gray-500 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      alt=""
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem>
                      <DisclosureButton
                        @click.prevent="logout()"
                        class="w-full block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-500 hover:text-white"
                        >Sair</DisclosureButton
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-0.5" />
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <DisclosureButton
            v-for="item in navigation"
            @click.prevent="handleButtonClick(item.href, item.name)"
            :key="item.name"
            :class="[
              $route.name == item.href
                ? 'bg-gray-900 text-white'
                : 'text-gray-800 hover:bg-gray-500 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium'
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-grey-800">{{ user.name }}</div>
              <div class="mt-1 text-sm font-medium leading-none text-gray-500">
                {{ user.email }}
              </div>
            </div>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton
              @click.prevent="logout()"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-500 hover:text-white"
              >Sair</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ $route.meta.title }}</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <q-page-container>
          <router-view></router-view>
        </q-page-container>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

interface NavigationItem {
  name: string
  href: string
  current: boolean
}

interface UserNavigationItem {
  name: string
}

interface User {
  email: string
  password: string
}

const router = useRouter()
const navigation: NavigationItem[] = [
  { name: 'Filmes', href: 'films', current: false },
  { name: 'Locação', href: 'locations', current: false },
  { name: 'Usuários', href: 'users', current: false },
  { name: 'Clientes', href: 'clients', current: false }
]
const userNavigation: UserNavigationItem[] = [{ name: 'Configuração' }, { name: 'Sair' }]
const user = ref<User[]>([])

onMounted(async () => {
  const storedUserLogin = localStorage.getItem('userLogin')
  user.value = storedUserLogin ? JSON.parse(storedUserLogin) : []
})

let pageName = ''
const handleButtonClick = (route: any, page: string) => {
  pageName = page
  router.push({ name: route })
}

const logout = () => {
  localStorage.removeItem('userLogin')
  router.push({ name: 'login' })
}
</script>
