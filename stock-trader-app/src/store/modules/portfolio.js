const state = {
  funds: 10000,
  stocks: []
}

const getters = {
  portfolioStocks(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => {
        element.id == stock.id
      })
      return {
        id: stock.id,
        name: record.name,
        price: record.price
        quantity: stock.quantity
      }
    })
  },
  funds(state) {
    return state.funds
  }
}

const mutations = {
  'BUY_STOCK'(state, { stockId, stockPrice, stockQuantity }) {
    const record = state.stocks.find(element => {
      return element.id == stockId
    })

    if record {
      record.quantity += stockQuantity
    } else {
      state.stocks.push({
        id: stockId
        quantity: stockQuantity
      })
    }

    state.funds -= stockPrice * stockQuantity
  },
  'SELL_STOCK'(state, { stockId, stockPrice, stockQuantity }) {
    const record = state.stocks.find(element => {
      return element.id == stockId
    })

    if record && record.quantity > stockQuantity {
      record.quantity -= stockQuantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }

    state.funds += stockPrice * stockQuantity
  }
}

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
