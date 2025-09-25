import { createRouter, createWebHashHistory } from 'vue-router'

// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/User.vue'),
  },
  {
    path: '/rrweb',
    name: 'RRweb',
    component: () => import('@/views/RRweb.vue'),
  },
  {
    path: '/play',
    name: 'Play',
    component: () => import('@/views/Play.vue'),
  },
]

// 创建 router 实例
const router = createRouter({
  history: createWebHashHistory(), // history 模式（推荐）
  routes,
})

export default router