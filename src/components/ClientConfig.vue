<template>
  <form>
    <div class="mt-10 mx-20">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Informações do Cliente</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Para editar o cliente, basta modificar o campo desejado e clicar em salvar.</p>

        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nome</label>
            <div class="mt-1">
              <input type="text" name="name" id="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Sobrenome</label>
            <div class="mt-1">
              <input type="text" name="last-name" id="last-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Documento (CPF)</label>
            <div class="mt-1">
              <input type="text" name="document" id="document" v-mask="'###.###.###-##'" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div class="sm:col-span-3">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div class="mt-1">
              <input type="text" name="email" id="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div class="sm:col-span-3">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Celular</label>
            <div class="mt-1">
              <input type="text" name="phone" id="phone" v-mask="'(##) #####-####'" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-2">
            <label for="cep" class="block text-sm font-medium leading-6 text-gray-900">CEP</label>
            <div class="mt-1">
              <input type="text" name="cep" id="cep" autocomplete="cep" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="state" class="block text-sm font-medium leading-6 text-gray-900">Estado</label>
            <div class="mt-1">
              <input type="text" name="state" id="state" autocomplete="state" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div class="sm:col-span-2">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Cidade</label>
            <div class="mt-1">
              <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Endereço</label>
            <div class="mt-1">
              <input type="text" name="address" id="address" autocomplete="address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div class="sm:col-span-2">
            <label for="district" class="block text-sm font-medium leading-6 text-gray-900">Bairro</label>
            <div class="mt-1">
              <input type="text" name="district" id="district" autocomplete="district" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Número</label>
            <div class="mt-1">
              <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end">
          <button type="button" class="mx-2 text-sm font-semibold leading-6 text-gray-900">Voltar</button>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Salvar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
</script>