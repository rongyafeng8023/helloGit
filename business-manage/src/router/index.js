import Opportunity from '@/views/opportunity.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/opportunity',
      name: 'opportunity',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
      component: Opportunity
    },
  ],
})

export default router
