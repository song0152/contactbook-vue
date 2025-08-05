import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddContactView from '../views/AddContactView.vue'
import EditContactView from '../views/EditContactView.vue'
import ContactDetailView from '../views/ContactDetailView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/add', name: 'AddContact', component: AddContactView },
  { path: '/edit/:id', name: 'EditContact', component: EditContactView },
  { path: '/contact/:id', name: 'ContactDetail', component: ContactDetailView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
