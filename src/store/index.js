import Vue from 'vue'
import Vuex from 'vuex'
import storeModule from './storeModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initial: "state"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    storeModule
  }
})
