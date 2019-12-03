import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Details from '@/pages/Details'
import shoppingCart from '@/pages/shoppingCart'
import Administrators from '@/pages/Administrators'


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
      component: Home
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/shoppingcart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/administrators',
      name: 'Administrators',
      component: Administrators
    },

  ]
})
