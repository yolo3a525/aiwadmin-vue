import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Login from '@/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }

  ]
})
