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
      <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li><a @click="endDay">End Day</a></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay() {
      this.randomizeStocks()
    }
  }
}
</script>
