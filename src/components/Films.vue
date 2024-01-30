<template>
  <div class="bg-white">
    <div class="mx-auto max-w-4xl px-3 py-5 sm:px-3 sm:py-24 lg:max-w-3xl lg:px-2">
      <div class="flex max-w-md gap-x-4">
        <form @submit.prevent="searchFilms" class="flex">
          <label for="search-name" class="sr-only">Nome do filme</label>
          <input
            v-model="searchName"
            id="search-name"
            name="search-name"
            type="text"
            class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 mx-2 text-gray-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Nome do filme"
          />

          <label for="search-age" class="sr-only">Ano</label>
          <input
            v-model="searchAge"
            id="search-age"
            name="search-age"
            type="text"
            class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 mx-2 text-gray-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Ano"
          />
          <button
            type="submit"
            class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Pesquisar
          </button>
        </form>
      </div>

      <div
        class="mt-6 grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-4"
      >
        <a v-for="film in films" :key="film.id" :href="film.href" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              :src="film.imageSrc"
              :alt="film.imageAlt"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ film.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ film.age }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const films = ref([])

const searchName = ref('')
const searchAge = ref('')

const searchFilms = async () => {
  try {
    const params = {
      apikey: 'a4da8079',
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
</script>
