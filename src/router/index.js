import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Details from '@/pages/Details'
import shoppingCart from '@/pages/shoppingCart'
import Administrators from '@/pages/Administrators'
<<<<<<< HEAD

=======
import Goods from '@/pages/Goods.vue'
import MyInfo from '@/pages/Myinfo.vue'
>>>>>>> 70cba2a84704b9158839758c93d300bd8aefe7b9

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
          path: '/shoppingCart',
          component: shoppingCart
        },
        {
          path: '/myinfo',
          component: MyInfo
        }
      ]
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    
    {
      path: '/administrators',
      name: 'Administrators',
      component: Administrators
    },

  ]
})
