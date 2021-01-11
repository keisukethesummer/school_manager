import Vue from "vue";
import VueRouter from 'vue-router';
import App from '../../app';
// import from

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
]

const router = new VueRouter({
  // urlからハッシュを取り除く
  mode: 'history',
  routes
})

export default router