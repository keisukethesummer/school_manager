/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import App from '../app.vue'
import router from './router/router'
import firebase from 'firebase'

  // Firebaseの初期化処理
const config = {
  apiKey: "AIzaSyD5xWv0BoG0RWCI3Zx4eGL11-hAcT7Anno",
    authDomain: "schoolmanager-10a65.firebaseapp.com",
    projectId: "schoolmanager-10a65",
    storageBucket: "schoolmanager-10a65.appspot.com",
    messagingSenderId: "503653542530",
    appId: "1:503653542530:web:ab2e22a3cbae5d4e87a29b",
    measurementId: "G-NC6N9YZG81"
};
firebase.initializeApp(config);

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })
