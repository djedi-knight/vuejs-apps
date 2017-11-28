import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { // current state (required variable for Vuex)
    counter: 0,
    value: 0
  },
  getters: { // getters are accessor methods for the state
    doubleCounter(state) {
      return state.counter * 2
    },
    stringCounter(state) {
      return 'Current counter: ' + state.counter
    },
    value(state) {
      return state.value
    }
  },
  mutations: { // mutations are helper methods for modifying the state
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
    },
    updateValueMutation(state, payload) {
      state.value = payload
    }
  },
  actions: { // actions allow for mutations to run with async code
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
    asyncIncrementByAction(context, payload) {
      setTimeout(() => {
        context.commit('incrementMutation', payload.by)
      }, payload.duration)
    },
    asyncDecrementByAction({ commit }, payload) {
      setTimeout(() => {
        commit('decrementMutation', payload.by)
      }, payload.duration)
    },
    updateValueAction({ commit }, payload) {
      commit('updateValueMutation', payload)
    }
  }
})
