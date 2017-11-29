<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand Link -->
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    </div>

    <!-- Other Links -->
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/portfolio" tag="li" class="nav-item" activeClass="active">
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link to="/stocks" tag="li" activeClass="active">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li><a @click="endDay">End Day</a></li>
        <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-hasexpanded="false">
            Save & Load <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="#" @click="saveData">Save Data</a></li>
            <li><a href="#" @click="loadData">Load Data</a></li>
          </ul>
        </li>
      </ul>

      <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
    </div>
  </div>
</nav>
</template>

<script>
import {
  mapActions
} from 'vuex'

export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks()
    },
    saveData() {
      // create data object from store data
      const data = {
        funds: this.$store.getters.funds,
        portfolioStocks: this.$store.getters.portfolioStocks,
        stocks: this.$store.getters.stocks
      }

      // put data onto the server
      this.$http.put('data.json', data)
    },
    loadData() {
      this.fetchData()
    }
  }
}
</script>
