export const fruitMixin = {
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
  },
  created() {
    console.log('Created (fruitMixin hook)')
  }
}
