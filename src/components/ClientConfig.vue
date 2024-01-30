<template>
  <form @submit.prevent="handleSubmit">
    <div class="mt-10 mx-20">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Informações do Cliente</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Para editar o cliente, basta modificar o campo desejado e clicar em salvar.
        </p>

        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nome</label>
            <div class="mt-1">
              <input
                type="text"
                name="name"
                v-model="name"
                id="name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900"
              >Sobrenome</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="lastname"
                v-model="lastname"
                id="lastname"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="document" class="block text-sm font-medium leading-6 text-gray-900"
              >Documento (CPF)</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="document"
                v-model="document"
                id="document"
                v-mask="'###.###.###-##'"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
              >Email</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="email"
                v-model="email"
                id="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900"
              >Celular</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="phone"
                v-model="phone"
                id="phone"
                v-mask="'(##) #####-####'"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-2">
            <label for="cep" class="block text-sm font-medium leading-6 text-gray-900">CEP</label>
            <div class="mt-1">
              <input
                type="text"
                name="cep"
                v-model="cep"
                id="cep"
                autocomplete="cep"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                @input="fetchCepData"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="state" class="block text-sm font-medium leading-6 text-gray-900"
              >Estado</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="state"
                v-model="state"
                id="state"
                autocomplete="state"
                :readonly="isStateReadonly"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900"
              >Cidade</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="city"
                v-model="city"
                id="city"
                autocomplete="address-level2"
                :readonly="isStateReadonly"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900"
              >Endereço</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="address"
                v-model="address"
                id="address"
                autocomplete="address"
                :readonly="isStateReadonly"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="district" class="block text-sm font-medium leading-6 text-gray-900"
              >Bairro</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="district"
                v-model="district"
                id="district"
                autocomplete="district"
                :readonly="isStateReadonly"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="adNumber" class="block text-sm font-medium leading-6 text-gray-900"
              >Número</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="adNumber"
                v-model="adNumber"
                id="adNumber"
                autocomplete="address-level1"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
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

const storedClients = localStorage.getItem('clients')
const initialClients = storedClients ? JSON.parse(storedClients) : []

const clients = ref<Array<Client>>(initialClients)
const router = useRouter()

const name = ref('')
const lastname = ref('')
const email = ref('')
const phone = ref('')
const document = ref('')
const cep = ref('')
const state = ref('')
const city = ref('')
const address = ref('')
const district = ref('')
const adNumber = ref('')
const isActive = ref(false)

const isCepReadonly = ref(false);
const isStateReadonly = ref(false);

const fetchCepData = async () => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep.value}/json/`)
    const cepData = response.data
    
    isCepReadonly.value = !!cepData.cep
    isStateReadonly.value = !!cepData.uf

    state.value = cepData.uf || '';
    city.value = cepData.localidade || '';
    address.value = cepData.logradouro || '';
    district.value = cepData.bairro || '';

  } catch (error: any) {
    console.error('Erro ao obter dados do CEP:', error.message)
  }
}

onMounted(() => {
  const unwatch = watch(
    () => router.currentRoute.value.params.id,
    (newClientId) => {
      const clientId = getEditClientsId()

      if (clientId !== null) {
        const clientToEdit = clients.value.find((client) => client.id === clientId)

        if (clientToEdit) {
          name.value = clientToEdit.name
          lastname.value = clientToEdit.lastname
          email.value = clientToEdit.email
          phone.value = clientToEdit.phone
          document.value = clientToEdit.document
          cep.value = clientToEdit.cep
          state.value = clientToEdit.state
          city.value = clientToEdit.city
          address.value = clientToEdit.address
          district.value = clientToEdit.district
          adNumber.value = clientToEdit.adNumber
          isActive.value = clientToEdit.isActive
        }
      } else {
        // (limpeza dos v-models)
        name.value = ''
        lastname.value = ''
        email.value = ''
        phone.value = ''
        document.value = ''
        cep.value = ''
        state.value = ''
        city.value = ''
        address.value = ''
        district.value = ''
        adNumber.value = ''
        isActive.value = false
      }
    },
    { immediate: true }
  )

  onUnmounted(() => {
    unwatch()
  })
})

const getEditClientsId = () => {
  const editClientId = localStorage.getItem('editClientId')

  const clientId = editClientId ? Number(editClientId) : null
  return clientId
}

const handleSubmit = () => {
  const clientId = getEditClientsId()

  const newClient: Client = {
    id: clientId !== null ? clientId : clients.value.length + 1,
    name: name.value,
    lastname: lastname.value,
    email: email.value,
    phone: phone.value,
    document: document.value,
    cep: cep.value,
    state: state.value,
    city: city.value,
    address: address.value,
    district: district.value,
    adNumber: adNumber.value,
    isActive: isActive.value
  }

  if (clientId !== null) {
    const clientIndex = clients.value.findIndex((client) => client.id === clientId)

    if (clientIndex !== -1) {
      clients.value[clientIndex] = newClient
    }
  } else {
    clients.value.push(newClient)
  }

  localStorage.removeItem('editClientId')
  localStorage.setItem('clients', JSON.stringify(clients.value))
  router.push({ name: 'clients' })
}

const goBack = () => {
  router.push({ name: 'clients' })
}
</script>