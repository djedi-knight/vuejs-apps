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
  <hr>
  <div>
    <button class="btn btn-primary" @click="incrementAction">Increment (Action)</button>
    <button class="btn btn-primary" @click="decrementAction">Decrement (Action)</button>
  </div>
  <br>
  <div>
    <button class="btn btn-warning" @click="asyncIncrementAction">Increment (Async Action)</button>
    <button class="btn btn-warning" @click="asyncDecrementAction">Decrement (Async Action)</button>
  </div>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

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
    ...mapMutations(['decrementMutation']),
    incrementAction() {
      this.$store.dispatch('incrementAction')
    },
    decrementAction() {
      this.$store.dispatch('decrementAction')
    },
    ...mapActions(['asyncIncrementAction', 'asyncDecrementAction'])
  }
}
</script>
