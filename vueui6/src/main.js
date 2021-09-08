import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import BootstrapVue from "bootstrap-vue"

import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
