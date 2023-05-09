import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/video/:id',
    name: 'video',
    component: () => import('@/views/Video/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
