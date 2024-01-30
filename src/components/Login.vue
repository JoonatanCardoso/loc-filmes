<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="grid grid-cols-7 gap-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="col-start-4 col-end-7 mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
          />
        </svg>
      </div>

      <h2
        class="col-start-2 col-end-7 mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Loc Filmes
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="handleSubmit" class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div class="mt-2">
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Senha</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
    <notifications />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useNotification } from '@kyvg/vue3-notification'

interface User {
  id: number
  email: string
  password: string
}

const users = ref<User[]>([])
const id = ref<number>()
const email = ref<string>('')
const password = ref<string>('')
const router = useRouter()
const notification = useNotification()
const localStorageKey = 'userLogin';

const login = () => {
  const verify = users.value.find(
    (user) => user.email === email.value && user.password === password.value
  )

  if (verify) {
    localStorage.setItem(localStorageKey, JSON.stringify(verify))
    notification.notify({
      title: `Bem vindo(a)!`,
      type: 'success'
    })
    router.push({ name: 'films' })
  } else {
    notification.notify({
      title: 'Email ou senha incorreto!',
      type: 'error'
    })
  }
}

onMounted(() => {
  const storedUsers = localStorage.getItem('users')
  users.value = storedUsers ? JSON.parse(storedUsers) : []
})

const handleSubmit = () => {
  login()
}
</script>