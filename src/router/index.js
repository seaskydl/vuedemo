import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../views/Home.vue') },
    { path: '/dashboard', component: () => import('../views/Dashboard.vue') }
  ]
})

// 全局守卫：自动保存推荐人 ID
router.beforeEach((to) => {
  const ref = to.query.ref
  if (ref) {
    localStorage.setItem('referrer_id', ref)
  }
})

export default router
