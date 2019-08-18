import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Interns from '@/components/Interns/Interns'
import CreateInterns from '@/components/Interns/CreateIntern'
import ViewIntern from '@/components/Interns/ViewIntern'
import Workers from '@/components/Workers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/workers',
      name: 'workers',
      component: Workers
    },
    {
      path: '/interns',
      name: 'interns',
      component: Interns
    },
    {
      path: '/interns/create',
      name: 'create-intern',
      component: CreateInterns
    },
    {
      path: '/interns/:internId',
      name: 'intern',
      component: ViewIntern
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
