<template>
<div>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
  <br>
  <div>
    <button class="btn btn-warning" @click="incrementMutation">Increment (Mutation)</button>
    <button class="btn btn-warning" @click="decrementMutation">Decrement (Mutation)</button>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    increment() {
      this.$store.state.counter++
    },
    decrement() {
      this.$store.state.counter--
    },
    incrementMutation() {
      this.$store.commit('incrementMutation')
    },
    ...mapMutations(['decrementMutation'])
  }
}
</script>
