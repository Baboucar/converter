import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     price:20
  },
  mutations: {
     CHANGE_PRICE:(state,price)=>{
       state.price = price
     }
  },
  actions: {

  }
})
