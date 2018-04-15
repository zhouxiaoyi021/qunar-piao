import state from './state'
import mutations from './mutations'
import getters from './getters'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store