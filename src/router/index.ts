import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import AdminView from '@/views/Admin/AdminView.vue'
import ShopView from '@/views/Shop/ShopView.vue'
import AdminProductView from '@/views/Admin/Products/ProductView.vue'
import AdminUserView from '@/views/Admin/Users/UserView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [
        {
          path: "products/:id?",
          name: "adminProducts",
          component: AdminProductView
        },
        {
            path: "users/:id?",
            name: "adminUsers",
            component: AdminUserView
        }
      ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
