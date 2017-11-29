import Vue from 'vue'
import Vuex from 'vuex'

// import counter module
import counter from './modules/counter'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { // current state (required variable for Vuex)
    value: 0
  },
  getters: { // getters are accessor methods for the state
    value(state) {
      return state.value
    }
  },
  mutations: { // mutations are helper methods for modifying the state
    updateValueMutation(state, payload) {
      state.value = payload
    }
  },
  actions: { // actions allow for mutations to run with async code
    updateValueAction({ commit }, payload) {
      commit('updateValueMutation', payload)
    }
  },
  modules: { // outsourced state/ getters/ mutations/ actions
    counter
  }
})
