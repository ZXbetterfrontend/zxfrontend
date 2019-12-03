import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Details from '@/pages/Details'
import shoppingCart from '@/pages/shoppingCart'
import Administrators from '@/pages/Administrators'
import Goods from '@/pages/Goods.vue'
import MyInfo from '@/pages/Myinfo.vue'
import Figure from '@/pages/Figure.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: Goods,
          name: 'Goods'
        },
        {
          path: '/details',
          component: Details
        },
        {
          path: '/myinfo',
          component: MyInfo
        }
      ]
    },    
    {
      path: '/administrators',
      name: 'Administrators',
      component: Administrators
    },
    {
      path: '/shoppingcart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/figure',
      name: 'Figure',
      component: Figure
    }
  ]
})
