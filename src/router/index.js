import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Student from '../views/Student.vue'
Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component:Login
  },
  {
    path: '/student',
    component:Student
  }
]

const router = new VueRouter({
  routes: routes,
  mode:'history'
})

export default router