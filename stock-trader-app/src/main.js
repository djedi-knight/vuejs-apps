import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import { routes } from './routes'
import store from './store/store'

import App from './App'

// setup VueRource
Vue.use(VueResource)

Vue.http.options.root = 'https://stock-trader-app-e2fd0.firebaseio.com/'

// setup VueRouter
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

// Setup filters
Vue.filter('currency', value => {
  return '$' + value.toLocaleString()
})

// Finalize Vue application
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
