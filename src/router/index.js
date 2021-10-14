import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import Basket from '../views/Basket.vue'
import Delivery from '../views/Delivery.vue'
import Mnews from '../views/Mnews.vue'
import News from '../views/News.vue'
import Seller from '../views/Seller.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery
  },
  {
    path: '/mnews',
    name: 'Mnews',
    component: Mnews
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/seller',
    name: 'Seller',
    component: Seller
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
