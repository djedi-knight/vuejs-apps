<template>
<div>
  <span>{{ message }}</span>
  <p>{{ firstParam }}</p>
  <input v-model="newItem">
  <button @click="addItemToList">Add</button>
  <ul>
    <li v-for="item in listItems">{{ item }}</li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['firstParam'],
  data() {
    return {
      message: 'hello!',
      listItems: ['buy food', 'play games', 'sleep'],
      newItem: ''
    }
  },
  methods: {
    addItemToList() {
      this.listItems.push(this.newItem);
      this.newItem = '';
    }
  },
  created() {
    this.message = 'bye!'
  }
}
</script>
