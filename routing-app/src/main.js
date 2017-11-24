import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {
  routes
} from './routes'

// install VueRouter
Vue.use(VueRouter)

// create VueRouter
const router = new VueRouter({
  routes, // ES6: equivalent to {routes: routes}
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // scroll back to saved position if present
    if (savedPosition) {
      return savedPosition
    }
    // if hash is present, scroll to it
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    // default: scroll to the top of the page
    return {x: 0, y: 0}
  }
})

// setup router guards
router.beforeEach((to, from, next) => {
  console.log('router.beforeEach() called')
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
