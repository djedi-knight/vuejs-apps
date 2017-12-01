import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://axios-app.firebaseio.com'

// axios.defaults.headers.common['Authorization'] = 'sample_auth_header'
axios.defaults.headers.get['Accepts'] = 'application/json'

axios.interceptors.request.use(request => {
  console.log('request (interceptor)', request)
  return request
})

axios.interceptors.response.use(response => {
  console.log('response (interceptor)', response)
  return response
})

// use Vuelidate
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
