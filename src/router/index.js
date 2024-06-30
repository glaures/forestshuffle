import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/define-forest/:playerName',
      name: 'defineForest',
      props: true,
      component: () => import('../views/DefineForestView.vue')
    }
  ]
})

export default router
