<template>
  <RouterView name="layout" />
  <RouterView />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface User {
  id: number
  name: string
  email: string
  document: string
  password: string
  isActive: boolean
}

const users = ref([]);


onMounted(() => {
  const adminUser: User = {
    id: 1,
    name: 'admin',
    email: 'admin@admin.com',
    document: '123456789',
    password: 'admin',
    isActive: true
  }

  const storedUsers = localStorage.getItem('users')
  const users = storedUsers ? JSON.parse(storedUsers) : []

  const adminExists = users.some((user: User) => user.email === adminUser.email)

  if (!adminExists) {
    users.push(adminUser)
    localStorage.setItem('users', JSON.stringify(users))
  }

})
</script>
