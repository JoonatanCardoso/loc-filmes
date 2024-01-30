<template>
  <form @submit.prevent="handleSubmit">
    <div class="mt-10 mx-20">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Informações do Usuário</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Para editar o usuário, basta modificar o campo desejado e clicar em salvar.
        </p>

        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900"
              >Nome *</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                v-model="name"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="document" class="block text-sm font-medium leading-6 text-gray-900"
              >Documento (CPF) *</label
            >
            <div class="mt-1">
              <input
                v-mask="'###.###.###-##'"
                type="text"
                v-model="document"
                name="document"
                id="document"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Senha *</label
            >
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                v-model="password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-5">
          <fieldset class="mt-5">
            <div class="sm:col-span-3">
              <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
                <div class="flex h-6 items-center">
                  <Switch
                    v-model="isActive"
                    :class="[
                      isActive ? 'bg-indigo-600' : 'bg-gray-200',
                      'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    ]"
                  >
                    <span
                      aria-hidden="true"
                      :class="[
                        isActive ? 'translate-x-3.5' : 'translate-x-0',
                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                      ]"
                    />
                  </Switch>
                  <legend class="ml-5 text-sm leading-6 text-gray-900">Status de usuário</legend>
                </div>
              </SwitchGroup>
            </div>
          </fieldset>
        </div>

        <div class="mt-6 flex items-center justify-end">
          <button
            @click.prevent="goBack()"
            type="button"
            class="mx-2 text-sm font-semibold leading-6 text-gray-900"
          >
            Voltar
          </button>
          <button
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
import { Switch, SwitchGroup } from '@headlessui/vue'
import { useRouter } from 'vue-router'
import { ref, onMounted, watch, onUnmounted } from 'vue'

interface User {
  id: number
  name: string
  document: string
  password: string
  isActive: boolean
}

const storedUsers = localStorage.getItem('users')
const initialUsers = storedUsers ? JSON.parse(storedUsers) : []

const users = ref<Array<User>>(initialUsers)
const router = useRouter()

const name = ref('')
const document = ref('')
const password = ref('')
const isActive = ref(false)

onMounted(() => {
  const unwatch = watch(
    () => router.currentRoute.value.params.id,
    (newUserId) => {
      const userId = getEditUserId()

      if (userId !== null) {
        const userToEdit = users.value.find((user) => user.id === userId)

        if (userToEdit) {
          name.value = userToEdit.name
          document.value = userToEdit.document
          password.value = userToEdit.password
          isActive.value = userToEdit.isActive
        }
      } else {
        name.value = ''
        document.value = ''
        password.value = ''
        isActive.value = false
      }
    },
    { immediate: true }
  )

  onUnmounted(() => {
    unwatch()
  })
})

const getEditUserId = () => {
  const editUserId = localStorage.getItem('editUserId')

  const userId = editUserId ? Number(editUserId) : null
  return userId
}

const handleSubmit = () => {
  const userId = getEditUserId()

  const newUser: User = {
    id: userId !== null ? userId : users.value.length + 1,
    name: name.value,
    document: document.value,
    password: password.value,
    isActive: isActive.value
  }

  if (userId !== null) {
    const userIndex = users.value.findIndex((user) => user.id === userId)

    if (userIndex !== -1) {
      users.value[userIndex] = newUser
    }
  } else {
    users.value.push(newUser)
  }

  localStorage.removeItem('editUserId')

  localStorage.setItem('users', JSON.stringify(users.value))
  router.push({ name: 'users' })
}

const goBack = () => {
  router.push({ name: 'users' })
}
</script>