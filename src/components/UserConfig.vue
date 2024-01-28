<template>
  <form>
    <div class="mt-10 mx-20">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Informações do Usuário</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Para editar o usuário, basta modificar o campo desejado e clicar em salvar.</p>

        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nome *</label>
            <div class="mt-1">
              <input type="text" name="name" id="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Documento (CPF) *</label>
            <div class="mt-1">
              <input type="text" name="document" id="document" required v-mask="'###.###.###-##'" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Senha *</label>
            <div class="mt-1">
              <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div class="sm:col-span-3">
            <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-900">Confirmar Senha *</label>
            <div class="mt-1">
              <input id="confirm-password" name="confirm-password" required type="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-5">
          <fieldset class="mt-5">
            <legend class="text-sm font-semibold leading-6 text-gray-900">Status de usuário</legend>
            <div class="sm:col-span-3">
              <div class="flex items-center gap-x-3">
                <input id="active" name="push-status" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label for="active" class="block text-sm font-medium leading-6 text-gray-900">Ativo</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="inative" name="push-status" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label for="inative" class="block text-sm font-medium leading-6 text-gray-900">Inativo</label>
              </div>
            </div>
          </fieldset>
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