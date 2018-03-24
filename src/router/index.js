/*
* 路由器模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Sort from '../pages/Sort/Sort.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/sort',
      component:Sort,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/cart',
      component:ShoppingCart
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/',
      redirect:'/msite',
      meta:{
        showFooter: true
      }
    }
  ]
})
