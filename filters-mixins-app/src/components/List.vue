<template>
  <div>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
    <hr>
  </div>
</template>

<script>
  import { fruitMixin } from '../mixins/fruitMixin'

  export default {
    mixins: [fruitMixin]
  }
</script>

<style>
</style>
