import Vue from "vue";
import VueRouter from 'vue-router';
import Home from '../components/home';
import SignIn from '../components/sign_in';
import SignUp from '../components/sign_up';
import Students from '../components/students'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/students',
    name: 'students',
    component: Students
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   let requireAuth = to.matched.some(record => record.meta.requireAuth)
//   let currentUser = firebase.auth().currentUser
//   if (requireAuth) {
//     if (!currentUser) {
//       next({
//         path: '/sign_in',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router