import Vue from 'vue'
import Vuex from 'vuex'

import axios from './axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {

  },
  actions: {
    signup({ commit }, authData) {
      // submit Firebase Signup request via axios
      axios.post('/signupNewUser?key=AIzaSyCfXeM6r5VN-Yr1up15gjx8PCBF4XkVWjc', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then(response => console.log('response', response))
        .catch(error => console.log('error', error))
    },
    login({ commit }, authData) {
      // submit Firebase Login request via axios
      axios.post('/verifyPassword?key=AIzaSyCfXeM6r5VN-Yr1up15gjx8PCBF4XkVWjc', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then(response => console.log('response', response))
        .catch(error => console.log('error', error))
    }
  },
  getters: {

  }
})
