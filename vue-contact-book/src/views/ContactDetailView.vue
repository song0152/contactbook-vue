<template>
  <div v-if="contact">
    <h2>Contact Details</h2>
    <p><strong>First Name:</strong> {{ contact.firstName }}</p>
    <p><strong>Last Name:</strong> {{ contact.lastName }}</p>
    <p><strong>Email:</strong> {{ contact.email }}</p>
    <router-link :to="'/edit/' + contact.id">Edit Contact</router-link>
  </div>

  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const contact = ref(null)

onMounted(() => {
  const id = parseInt(route.params.id)
  const stored = localStorage.getItem('contacts')
  const contacts = stored ? JSON.parse(stored) : []
  contact.value = contacts.find(c => c.id === id)
})
</script>

<style scoped>
p {
  margin: 0.5rem 0;
}
</style>
