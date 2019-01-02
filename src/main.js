import Vue from 'vue'
import App from './App.vue'

import "./assets/css/commom.css";
import "./assets/font/iconfont.css";

import 'lib-flexible/flexible.js'
import store from './lib/store'
import router from './lib/router'
import './lib/element-ui.js'
import axios from "axios";


Vue.prototype.$axios = axios;
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://"+store.state.currentIp+":"+store.state.currentPort
// import './lib/iview.js'
console.log(store.state.currentIp+":"+store.state.currentPort)


window.onbeforeunload = function () {
  window.localStorage.setItem('currentIp',JSON.stringify(store.state.currentIp));
  window.localStorage.setItem('currentPort',JSON.stringify(store.state.currentPort));
  if(store.state.historyAddress.length>0){
    window.localStorage.setItem('historyAddress',JSON.stringify(store.state.historyAddress))
  }else{
    window.localStorage.removeItem('historyAddress')
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')