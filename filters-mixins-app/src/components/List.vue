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
    mixins: [fruitMixin],
    created() {
      console.log('Created (List hook)')
    }
  }
</script>

<style>
</style>
