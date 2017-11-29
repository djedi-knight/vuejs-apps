<template>
<div class="col-sm-6 col-md-4">
  <div class="panel panel-success">
    <div class="panel-heading">
      <h3 class="panel-title">
        {{ stock.name }}
        <small>(Price: {{ stock.price }})</small>
      </h3>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input class="form-control" type="number" v-model.number="quantity" placeholder="Quantity">
      </div>
      <div class="pull-right">
        <button class="btn btn-success" :disabled="!isOrderValid()" @click="buyStock()">Buy</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    isOrderValid() {
      return this.quantity > 0 && Number.isInteger(this.quantity)
    },
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity
      }

      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
}
</script>
