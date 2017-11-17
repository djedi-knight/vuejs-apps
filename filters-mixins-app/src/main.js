import Vue from 'vue'
import App from './App.vue'

Vue.mixin({
  created() {
    console.log('Created (global hook)')
  }
})

Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase()
})

new Vue({
  el: '#app',
  render: h => h(App)
})
