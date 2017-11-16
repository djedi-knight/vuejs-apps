import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    console.log('binding hightlight directive')
    console.log('binding.modifiers', binding.modifiers)
    let delay = 0

    if (binding.modifiers['delayed']) {
      console.log('delayed modifier found')
      delay = 3000
    }

    setTimeout(() => {
      console.log('setting colours...')
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
