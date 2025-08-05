<template>
  <div>
    <v-text-field
      v-model="searchQuery"
      label="Search contacts"
      prepend-inner-icon="mdi-magnify"
      class="mb-4"
      clearable
    />

    <v-list>
      <v-list-item
        v-for="contact in filteredContacts"
        :key="contact.id"
        class="border rounded mb-4 pa-3"
      >
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ contact.firstName }} {{ contact.lastName }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ contact.email }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <div class="btn-group">
            <v-btn color="primary" variant="text" :to="`/contact/${contact.id}`" tag="router-link">
              View
            </v-btn>
            <v-btn color="orange-darken-2" variant="text" :to="`/edit/${contact.id}`" tag="router-link">
              Edit
            </v-btn>
            <v-btn color="red" variant="text" @click="deleteContact(contact.id)">
              Delete
            </v-btn>
          </div>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <div v-if="filteredContacts.length === 0" class="text-center mt-5">
      No contacts found.
    </div>
  </div>
</template>

<style scoped>
.btn-group {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>


<script setup>
import { ref, computed, onMounted } from 'vue'

const contacts = ref([])
const searchQuery = ref('')

onMounted(() => {
  const savedContacts = localStorage.getItem('contacts')
  if (savedContacts) {
    contacts.value = JSON.parse(savedContacts)
    contacts.value.sort((a, b) => a.lastName.localeCompare(b.lastName))
  }
})

const filteredContacts = computed(() => {
  return contacts.value.filter((c) => {
    const fullName = `${c.firstName} ${c.lastName}`.toLowerCase()
    return fullName.includes(searchQuery.value.toLowerCase())
  })
})

function deleteContact(id) {
  if (confirm('Are you sure you want to delete this contact?')) {
    contacts.value = contacts.value.filter((c) => c.id !== id)
    localStorage.setItem('contacts', JSON.stringify(contacts.value))
  }
}
</script>
