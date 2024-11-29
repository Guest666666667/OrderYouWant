import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MenuView from '../views/MenuView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/menu',
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView,
    meta: {
      title:"菜单"
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
    meta: {
      title:"购物车"
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
   if (to.meta && to.meta.title) { 
    document.title = to.meta.title as string; 
  } 
   next();
})

export default router
