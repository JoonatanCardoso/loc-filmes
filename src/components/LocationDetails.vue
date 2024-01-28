<template>
  <form>
    <div class="mt-10 mx-20">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Informações de Locação</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Para editar locação, basta modificar o campo desejado e clicar em salvar.</p>

        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="client" class="block text-sm font-medium leading-6 text-gray-900">Cliente *</label>
            <div class="mt-1">
              <input type="text" name="client" id="client" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          
          <div class="sm:col-span-3">
            <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Data de Locação *</label>
            <div class="mt-1">
              <input id="date" name="date" type="date" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div class="sm:col-span-3">
            <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Data de Entrega *</label>
            <div class="mt-1">
              <input id="date" name="date" type="date" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div class="sm:col-span-3">
            <label for="user" class="block text-sm font-medium leading-6 text-gray-900">Usuário responsável *</label>
            <div class="mt-1">
              <input id="user" name="user" required type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Filmes *</label>
            <div class="mt-1">
              <div class="mt-6 grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-4">
                <a v-for="film in films" :key="film.id" :href="film.href" class="group">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img :src="film.imageSrc" :alt="film.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
                  </div>
                  <h3 class="mt-4 text-sm text-gray-700">{{ film.name }}</h3>
                  <p class="mt-1 text-lg font-medium text-gray-900">{{ film.age }}</p>
                </a>
              </div>
            </div>
          </div>

          <div class="sm:col-span-3">
            <fieldset class="mt-5">
              <legend class="text-sm font-semibold leading-6 text-gray-900">Status de locação</legend>
              <div class="sm:col-span-3">
                <div class="flex items-center gap-x-3">
                  <input id="alugado" name="push-status" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label for="alugado" class="block text-sm font-medium leading-6 text-gray-900">Alugado</label>
                </div>
                <div class="flex items-center gap-x-3">
                  <input id="entregue" name="push-status" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label for="entregue" class="block text-sm font-medium leading-6 text-gray-900">Entregue</label>
                </div>
              </div>
            </fieldset>
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

const films = [
    {
      id: 1,
      name: 'Nome Filme',
      href: '#',
      age: '2010',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nome Filme',
      href: '#',
      age: '2010',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Nome Filme',
      href: '#',
      age: '2010',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Nome Filme',
      href: '#',
      age: '2010',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
</script>