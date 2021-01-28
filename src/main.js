import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index.js'
import { Input, Menu, MenuItem, Button } from 'element-ui'

Vue.prototype.$axios = axios

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Button)

new Vue({
  el: '#app',
  router:router,
  render: c => c(App)
})