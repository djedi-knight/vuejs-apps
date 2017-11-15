<template>
<div class="component">
  <h3>You may view the User Details here</h3>
  <p>Many Details</p>
  <p>User Name (Backwards): {{ switchName() }}</p>
  <p>User Age: {{ userAge }}</p>
  <button @click="resetName">Reset Name (Event)</button>
  <button @click="resetFn()">Reset Name (Passed Fn)</button>
</div>
</template>

<script>
export default {
  props: {
    myName: {
      type: String,
      default: 'Blank Name'
    },
    userAge: Number,
    resetFn: Function
  },
  methods: {
    switchName() {
      return this.myName.split('').reverse().join('');
    },
    resetName() {
      this.myName = 'Shawn';
      this.$emit('nameWasReset', this.myName);
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
