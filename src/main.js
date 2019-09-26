import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './styles/init.scss'
import JQuery from 'jquery'
global.$ = global.jQuery = JQuery

require('./bootstrap.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
