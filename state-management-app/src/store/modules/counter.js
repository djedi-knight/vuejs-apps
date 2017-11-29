// import * as types from '../types'

const state = {
  counter: 0
}

const getters = {
  doubleCounter(state) {
    return state.counter * 2
  },
  stringCounter(state) {
    return 'Current counter: ' + state.counter
  }
}

const mutations = {
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
}

const actions = {
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
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
