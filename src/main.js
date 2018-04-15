import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'


import VueAwesomeSwiper from 'vue-awesome-swiper'


import 'styles/reset.css'
import 'styles/retain-1px.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

import store from './store'
import VConsole from 'vconsole'
//new VConsole()

FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
