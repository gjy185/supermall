import {createRouter, createWebHistory } from 'vue-router'

const Home = () =>import('../views/home/Home.vue')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
    // name: 'home',
    // component: () => import('../views/home/Home.vue')
  },
  {
    path: '/category',
    component: Category
    // name: 'Category',
    // component: () => import('../views/category/Category')

  },
  {
    path: '/cart',
  component: Cart
    // name: 'Cart',
    // component: () => import('@/views/cart/Cart')

  },
  {
    path: '/profile',
    component: Profile
    // name: 'Profile',
    // component: () => import('@/views/profile/Profile')

  },
  {
    path: '/detail/:iid',
    component: Detail

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
