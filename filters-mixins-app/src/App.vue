<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text1 | toUppercase }}</p>
        <p>{{ text2 | toUppercase | to-lowercase }}</p>
        <hr>
        <button @click="fruits.push('Berries')">Add New Item</button>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './components/List'
  import { fruitMixin } from './mixins/fruitMixin'

  export default {
    mixins: [fruitMixin],
    data() {
      return {
        text1: 'text for upper case filter',
        text2: 'TEXT FOR LOWER CASE FILTER',
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase()
      }
    },
    components: {
      appList: List
    }
  }
</script>

<style>
</style>
