import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Input from './views/Input.vue'
import ArticleDetails from '@/components/ArticleDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
        path: ':id',
        name: 'ArticleDetails',
        props: true,
        component: ArticleDetails
      }]
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/input',
      name: 'input',
      component: Input,
      beforeEnter: (to, from, next) => {
        let status = localStorage.getItem('status')
        if (status !== 'connected') {
          next('/')
        } else {
          next()
        }
      }
    }
  ]
})
