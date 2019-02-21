import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.config.productionTip = false
var config = {
  apiKey: "AIzaSyB9LW803lvYTGjmxM2zHqye_PWa16Ighmg",
  authDomain: "currencyconversion-767f3.firebaseapp.com",
  databaseURL: "https://currencyconversion-767f3.firebaseio.com",
  projectId: "currencyconversion-767f3",
  storageBucket: "currencyconversion-767f3.appspot.com",
  messagingSenderId: "19694840373"
};
firebase.initializeApp(config);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
