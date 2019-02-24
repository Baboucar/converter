import Vue from 'vue';
import Vuex from 'vuex';
import VuePersist, { VuexPersistence } from 'vuex-persist';

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersistence({
  key:'vuex',
  storage: window.localStorage,

});
export default new Vuex.Store({
  plugins:[vuexLocalStorage.plugin],
  state: {
     price:20,
     secondPrice:0,
     thirdPrice:0
  },
  mutations: {
     CHANGE_PRICE:(state,price)=>{
       state.price = price
     },
     CHANGE_SECONDPRICE:(state,price)=>{
            state.secondPrice = price;
     },
     CHANGE_THIRDPRICE:(state,price)=>{
           state.thirdPrice = price
     }
  },
  actions: {

  }
})
