import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Setup VueResource
Vue.use(VueResource)

// Configure VueResource root url
Vue.http.options.root = 'https://vuejs-http-466e8.firebaseio.com'

// Configure VueResource interceptors
Vue.http.interceptors.push((request, next) => {
  console.log('request', request)
  next(response => {
    console.log('response', response)
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
