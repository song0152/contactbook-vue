<template>
  <div>
    <h2>Add New Contact</h2>
    <form @submit.prevent="addContact" class="contact-form">
      <label>
        First Name:
        <input v-model="firstName" required />
      </label>
      <label>
        Last Name:
        <input v-model="lastName" required />
      </label>
      <label>
        Email:
        <input v-model="email" type="email" required />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const router = useRouter()

function addContact() {
  const newContact = {
    id: Date.now(),
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  }

  const existing = localStorage.getItem('contacts')
  const contacts = existing ? JSON.parse(existing) : []
  contacts.push(newContact)
  localStorage.setItem('contacts', JSON.stringify(contacts))

  // 跳转到新联系人详情页
  router.push(`/contact/${newContact.id}`)
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

