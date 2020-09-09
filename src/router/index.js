import { createRouter, createWebHashHistory } from 'vue-router'
import Example from '@/views/example/Index.vue'

const routes = [
  {
    path: '/',
    redirect: '/example'
  },
  {
    // 实例
    path: '/example',
    name: 'Example',
    component: Example
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
