import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

// install VueRouter
Vue.use(VueRouter)

// create VueRouter
const router = new VueRouter({
  routes, // ES6: equivalent to {routes: routes}
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
