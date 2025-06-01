import Opportunity from '@/views/opportunity.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Opportunity_edit from '@/views/opportunity_edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',  // 👈 首页直接跳转
    },
    { path: '/', 
      // redirect: '/home' ,
      name: 'index',
      component:() => import('@/components/index.vue') ,
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
    // ❗⚠️ 最后一项：非法路径全部重定向到首页
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'  // 👈 可以改成 '/login' 或其他入口页
    },
  ],
})
router.beforeEach((to, from, next) => {

  // if (to.path === '/') {
  //   // sessionStorage.removeItem('entry')  // 回到首页时清除标志
  //   sessionStorage.setItem('index', 'true')
  //   next()
  // } else if (!isEnteredFromHome) {
  //   // ❗如果不是从首页跳来的，拦截并重定向回首页
  //   next('/')
  // } else {
  //   next()
  // }
  const isEnteredFromHome = sessionStorage.getItem('index') === 'true'
  if (to.path === '/home') {
    console.log("进入首页,并设置了首页缓存")
    sessionStorage.setItem('index', 'true')
    next()
  } else if (!isEnteredFromHome) {
    console.log("没有金国首页,进首页")
    next('/home')
  } else {
    next()
  }
   
})

export default router
