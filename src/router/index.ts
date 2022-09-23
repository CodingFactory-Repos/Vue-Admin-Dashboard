import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import AdminView from '@/views/Admin/AdminView.vue'
import ShopView from '@/views/Shop/ShopView.vue'
import AdminProductView from '@/views/Admin/Products/ProductView.vue'
import AdminUserView from '@/views/Admin/Users/UserView.vue'
import LoginView from '@/views/Login/LoginView.vue'
import OrdersView from '@/views/Admin/Orders/OrderView.vue'

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
    redirect: '/admin/products',
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
        },
        {
            path: "orders/:id?",
            name: "adminOrders",
            component: OrdersView
        }
    ]
  },
    {
        path: '/shop',
        name: 'shop',
        component: ShopView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
