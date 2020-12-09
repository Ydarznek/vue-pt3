import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login'
import Home from './views/Home'
import About from './views/About'
import Dashboard from './views/Dashboard'
import Signup from './views/Signup'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

export default router
