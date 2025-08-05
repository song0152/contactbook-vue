<template>
  <div v-if="contact">
    <h2>Edit Contact</h2>
    <form @submit.prevent="updateContact" class="contact-form">
      <label>
        First Name:
        <input v-model="contact.firstName" required />
      </label>
      <label>
        Last Name:
        <input v-model="contact.lastName" required />
      </label>
      <label>
        Email:
        <input v-model="contact.email" type="email" required />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  </div>

  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const contact = ref(null)

onMounted(() => {
  const id = parseInt(route.params.id)
  const stored = localStorage.getItem('contacts')
  const contacts = stored ? JSON.parse(stored) : []
  const found = contacts.find(c => c.id === id)
  if (found) {

    contact.value = { ...found }
  }
})

function updateContact() {
  const stored = localStorage.getItem('contacts')
  const contacts = stored ? JSON.parse(stored) : []
  const index = contacts.findIndex(c => c.id === contact.value.id)
  if (index !== -1) {
    contacts[index] = { ...contact.value }
    localStorage.setItem('contacts', JSON.stringify(contacts))
    router.push(`/contact/${contact.value.id}`)
  }
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

label {
  margin-bottom: 1rem;
}

input {
  padding: 0.5rem;
  width: 100%;
}

button {
  padding: 0.5rem;
  cursor: pointer;
}
</style>
