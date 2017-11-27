import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { // required variable for Vuex
    counter: 0
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    },
    stringCounter(state) {
      return 'Current counter: ' + state.counter
    }
  },
  mutations: {
    incrementMutation(state) {
      state.counter++
    },
    decrementMutation(state) {
      state.counter--
    }
  },
  actions: {
    incrementAction(context) {
      context.commit('incrementMutation')
    },
    decrementAction({ commit }) {
      commit('decrementMutation')
    },
    asyncIncrementAction(context) {
      setTimeout(() => {
        context.commit('incrementMutation')
      }, 1000)
    },
    asyncDecrementAction({ commit }) {
      setTimeout(() => {
        commit('decrementMutation')
      }, 1000)
    }
  }
})
