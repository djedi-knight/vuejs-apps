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
  export default {
    data() {
      return {
        fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
        filterText: ''
      }
    },
    computed: {
      // more performant to handle input filtering with computed property
      filteredFruits() {
        return this.fruits.filter((fruit) => {
          return fruit.match(this.filterText)
        })
      }
    }
  }
</script>

<style>
</style>
