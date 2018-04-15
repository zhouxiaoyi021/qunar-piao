import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/Index.vue'
import City from '../pages/city/Index.vue'

Vue.use(VueRouter)


const router = new  VueRouter({
  routes:[
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      redirect: '/home',
      path: '/'
    }
  ]
})


export default router