import Vue from 'vue'

export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        // extract objects from data
        const stocks = data.stocks
        const funds = data.funds
        const portfolioStocks = data.portfolioStocks

        // create portfolio object
        const portfolio = {
          stocks: portfolioStocks,
          funds
        }

        console.log('portfolio', portfolio)

        // commit mutations
        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
}
