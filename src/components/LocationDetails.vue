<template>
  <form>
    <div class="mt-10 mx-20">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Informações de Locação</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Para editar locação, basta modificar o campo desejado e clicar em salvar.
        </p>

        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <Listbox as="div" v-model="selectedClient">
              <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900"
                >Cliente de locação</ListboxLabel
              >
              <div class="relative mt-2">
                <ListboxButton
                  class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                >
                  <span class="flex items-center">
                    <span class="ml-3 block truncate">{{ selectedClient?.name }}</span>
                  </span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
                  >
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition ease-in duration-100"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      as="template"
                      v-for="person in clients"
                      :key="person.id"
                      :value="person"
                      v-slot="{ active, selected }"
                    >
                      <li
                        :class="[
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        ]"
                      >
                        <div class="flex items-center">
                          <span
                            :class="[
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            ]"
                            >{{ person.name }}</span
                          >
                        </div>

                        <span
                          v-if="selected"
                          :class="[
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                          ]"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>

          <div class="sm:col-span-3">
            <label for="date" class="block text-sm font-medium leading-6 text-gray-900"
              >Data de Locação *</label
            >
            <div class="mt-1">
              <input
                id="date"
                name="date"
                type="date"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="date" class="block text-sm font-medium leading-6 text-gray-900"
              >Data de Entrega *</label
            >
            <div class="mt-1">
              <input
                id="date"
                name="date"
                type="date"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <Listbox as="div" v-model="selectedUser">
              <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900"
                >Usuário Responsável</ListboxLabel
              >
              <div class="relative mt-2">
                <ListboxButton
                  class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                >
                  <span class="flex items-center">
                    <span class="ml-3 block truncate">{{ selectedUser?.name }}</span>
                  </span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
                  >
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition ease-in duration-100"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      as="template"
                      v-for="person in users"
                      :key="person.id"
                      :value="person"
                      v-slot="{ active, selectedUser }"
                    >
                      <li
                        :class="[
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        ]"
                      >
                        <div class="flex items-center">
                          <span
                            :class="[
                              selectedUser ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            ]"
                            >{{ person.name }}</span
                          >
                        </div>

                        <span
                          v-if="selectedUser"
                          :class="[
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                          ]"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"
              >Filmes *</label
            >
            <div class="mt-1">
              <div class="column">
                <form @submit.prevent="searchFilms" class="flex">
                  <label for="search-name" class="sr-only">Nome do filme</label>
                  <input
                    v-model="searchName"
                    id="search-name"
                    name="search-name"
                    type="text"
                    class="min-w-0 flex rounded-md border-0 bg-white/5 px-3.5 py-2 mx-2 text-gray-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Nome do filme"
                  />

                  <label for="search-age" class="sr-only">Ano</label>
                  <input
                    v-model="searchAge"
                    id="search-age"
                    name="search-age"
                    type="text"
                    class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 mx-2 text-gray-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Ano"
                  />
                  <button
                    @click="searchFilms()"
                    type="submit"
                    class="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Pesquisar
                  </button>
                </form>
              </div>

              <div
                class="mt-6 grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-4"
              >
                <a v-for="film in films" @click="selectedFilm(film)" :key="film?.id" class="group">
                  <div
                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                  >
                    <img
                      :src="film?.imageSrc"
                      :alt="film?.imageAlt"
                      class="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 class="mt-4 text-sm text-gray-700">{{ film?.name }}</h3>
                  <p class="mt-1 text-lg font-medium text-gray-900">{{ film?.age }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end">
          <button
            @click="goBack()"
            type="button"
            class="mx-2 text-sm font-semibold leading-6 text-gray-900"
          >
            Voltar
          </button>
          <button
            @click="saveLocation()"
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions
} from '@headlessui/vue'
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Client {
  id: number
  name: string
  lastname: string
  email: string
  phone: string
  document: string
  cep: string
  state: string
  city: string
  address: string
  district: string
  adNumber: string
  isActive: boolean
}

interface User {
  id: number
  name: string
  email: string
  document: string
  password: string
  isActive: boolean
}

interface SelectedClient {
  name: string
}

interface SelectedUser {
  name: string
}

const router = useRouter()
const storedClients = localStorage.getItem('clients')
const initialClients = storedClients ? JSON.parse(storedClients) : []
const clients = ref<Array<Client>>(initialClients)
const selectedClient = ref<SelectedClient | null>(null)
const isLocation = ref<boolean>(false)
const storedUsers = localStorage.getItem('users')
const initialUsers = storedUsers ? JSON.parse(storedUsers) : []
const users = ref<Array<User>>(initialUsers)
const selectedUser = ref<SelectedUser | null>(null)

const films = ref([])

const searchName = ref('')
const searchAge = ref('')

const searchFilms = async () => {
  try {
    const params = {
      apikey: 'a4da8079'
    }
    if (searchName.value.trim() !== '') {
      params.s = searchName.value
    }
    if (searchAge.value.trim() !== '') {
      params.y = searchAge.value
    }
    const response = await axios.get('http://www.omdbapi.com/', {
      params: params
    })

    films.value = []

    if (response.data.Search) {
      films.value = response.data.Search.map((result) => ({
        id: result.imdbID,
        name: result.Title,
        href: '#',
        age: result.Year,
        imageSrc: result.Poster,
        imageAlt: result.Title
      }))
    }
  } catch (error) {
    console.error('Erro ao buscar filmes:', error.message)
  }
}

onMounted(async () => {
  const storedClients = localStorage.getItem('clients')
  clients.value = storedClients ? JSON.parse(storedClients) : []

  if (selectedClient.value?.name == null) {
    selectedClient.value = clients.value[0]
  }

  const storedUsers = localStorage.getItem('users')
  users.value = storedUsers ? JSON.parse(storedUsers) : []

  if (selectedUser.value?.name == null) {
    selectedUser.value = users.value[0]
  }
})

const saveLocation = () => {
  router.push({ name: 'locations' })
}

const selectedFilm = (film) => {
  console.log(film, "film")
}

const goBack = () => {
  router.push({ name: 'locations' })
}
</script>