import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Details from '@/pages/Details'
import shoppingCart from '@/pages/shoppingCart'
import Administrators from '@/pages/Administrators'
import Goods from '@/pages/Goods.vue'
import MyInfo from '@/pages/Myinfo.vue'

import analysis from '@/pages/Analysis.vue'
import history from '@/pages/History.vue'



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
          component: Details,
          name: 'Details'
        },
        {
          path: '/myinfo',
          component: MyInfo
        },
        {
          path: '/shoppingcart',
          name: 'shoppingCart',
          component: shoppingCart
        }
      ]
    },
    {
      path: '/administrators',
      name: 'Administrators',
      component: Administrators,
      children: [
        {
          path: '',
          component: history,
          name: 'History'
        },
        {
          path: '/analysis',
          component: analysis,
          name: 'Analysis'
        },
       
      ]
    },
    // {
    //   path: '/shoppingcart',
    //   name: 'shoppingCart',
    //   component: shoppingCart
    // }
  ]
})
