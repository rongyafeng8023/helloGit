import Opportunity from '@/views/opportunity.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Opportunity_edit from '@/views/opportunity_edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', 
      redirect: '/home' ,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
        },
        {
          path: 'opportunity',
          name: 'Opportunity',
          component: Opportunity,
          children: [
            {
              path: 'opportunity_edit',
              component: Opportunity_edit
            }
            ]
        },
        // 其他子路由...
      ]
    },
    
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home,
    // },
    // {
    //   path: '/opportunity',
    //   name: 'opportunity',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue'),
    //   component: Opportunity
    // },
    // {
    //   path: '/',
    //   component: () => import('@/components/index.vue'),
    //   children: [
    //     {
    //       path: 'home',
    //       component: () => import('@/views/home.vue'),
    //     },
    //     {
    //       path: 'opportunity',
    //       component: () => import('@/views/opportunity.vue'),
    //     }
    //   ]
    // }
  ],
})

export default router
