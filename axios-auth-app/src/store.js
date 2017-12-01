import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

import axios from './axios-auth'
import globalAxios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser(state, user) {
      state.user = user
    },
    clearAuthData(state) {
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    signup({ commit, dispatch }, authData) {
      // submit Firebase Signup request via axios
      axios.post('/signupNewUser?key=AIzaSyCfXeM6r5VN-Yr1up15gjx8PCBF4XkVWjc', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then(response => {
        console.log('response', response)
        // commit authUser mutation
        commit('authUser', {
          token: response.data.idToken,
          userId: response.data.localId
        })
        // dispatch setLogoutTimer action
        dispatch('setLogoutTimer', response.data.expiresIn)
        // dispatch storeUser action
        dispatch('storeUser', authData)
        // redirect to dashboard
        router.replace('dashboard')
      }).catch(error => console.log('error', error))
    },
    login({ commit, dispatch }, authData) {
      // submit Firebase Login request via axios
      axios.post('/verifyPassword?key=AIzaSyCfXeM6r5VN-Yr1up15gjx8PCBF4XkVWjc', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then(response => {
        console.log('response', response)
        // commit authUser mutation
        commit('authUser', {
          token: response.data.idToken,
          userId: response.data.localId
        })
        // dispatch setLogoutTimer action
        dispatch('setLogoutTimer', response.data.expiresIn)
        // redirect to dashboard
        router.replace('dashboard')
      }).catch(error => console.log('error', error))
    },
    setLogoutTimer({ dispatch }, expirationTime) {
      setTimeout(() => {
        // call the logout action
        dispatch('logout')
      }, expirationTime)
    },
    logout({ commit }) {
      commit('clearAuthData')
      // redirect to signin
      router.replace('signin')
    },
    storeUser({ commit, state }, userData) {
      // cancel action if idToken is not present
      if (!state.idToken) {
        return
      }
      // post user data to Firebase
      globalAxios.post('/users.json?auth=' + state.idToken, userData)
        .then(response => console.log('response', response))
        .catch(error => console.log('error', error))
    },
    fetchUser({ commit, state }) {
      // cancel action if idToken is not present
      if (!state.idToken) {
        return
      }
      // get user data from Firebase
      globalAxios.get('/users.json?auth=' + state.idToken).then(response => {
        console.log('response', response)
        // get data from response
        const data = response.data
        const users = []
        // get users from data
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log('users', users)
        // commit storeUser mutation
        commit('storeUser', users[0])
      }).catch(error => console.log('error', error))
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isAuthenticated(state) {
      return state.idToken !== null
    }
  }
})
