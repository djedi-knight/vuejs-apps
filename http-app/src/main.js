import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Configure VueResource
Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-http-466e8.firebaseio.com'


new Vue({
  el: '#app',
  render: h => h(App)
})
