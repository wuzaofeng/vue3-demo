import { createRouter, createWebHashHistory } from 'vue-router'
import Example from '@/views/example/Index.vue'

const routes = [
  {
    path: '/',
    redirect: '/personal'
  },
  {
    // 实例
    path: '/example',
    name: 'Example',
    component: Example
  },
  {
    // 个人信息
    path: '/personal',
    name: 'Personal',
    component: () => import('@/views/personal/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
