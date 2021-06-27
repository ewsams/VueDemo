import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/components/Landing.vue'
import CreateUser from '@/components/CreateUser.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    props:{msg:'Edward Sams Vue Demo'}
  },
  {
    path: '/create-user',
    name: 'CreateUser',
    component: CreateUser,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
