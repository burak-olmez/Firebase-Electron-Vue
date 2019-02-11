import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "***",
    authDomain: "***",
    databaseURL: "***",
    projectId: "***",
    storageBucket: "***",
    messagingSenderId: "***"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
