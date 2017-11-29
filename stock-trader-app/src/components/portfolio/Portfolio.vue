<template>
<div class="">
  <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
</div>
</template>

<script>
import Stock from './Stock'
import { mapGetters } from 'vuex'

export default {
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: 'portfolioStocks'
    })
  }
}
</script>
