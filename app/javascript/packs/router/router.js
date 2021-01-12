import Vue from "vue";
import VueRouter from 'vue-router';
import App from '../../app';
import SignIn from '../components/sign_in';
import SignUp from '../components/sign_up';
// import from

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/sign_in',
    name: 'sign_in',
    component: SignIn
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: SignUp
  }
]

const router = new VueRouter({
  routes
})

export default router