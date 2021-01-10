import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../../app'
import SignIn from '../components/sign_in'
import SignUp from '../components/sign_up'
// import from

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/sign_in',
    name: 'sign_in',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignIn
    // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp
    // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')

export default router