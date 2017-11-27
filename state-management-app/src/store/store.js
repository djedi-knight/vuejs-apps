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
    incrementMutation(state, payload) {
      if (payload) {
        state.counter += payload
      } else {
        state.counter++
      }
    },
    decrementMutation(state, payload) {
      if (payload) {
        state.counter -= payload
      } else {
        state.counter--
      }
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
    },
    incrementByAction(context, payload) {
      context.commit('incrementMutation', payload)
    },
    decrementByAction({ commit }, payload) {
      commit('decrementMutation', payload)
    },
  }
})
