import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'
import router from './router/index.js'
import store from './store/store.js'
import { Input, Menu, MenuItem, Button } from 'element-ui'

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Button)

new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App)
})