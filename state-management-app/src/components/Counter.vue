<template>
<div>
  <!-- <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div> -->
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
  <hr>
  <div>
    <button class="btn btn-primary" @click="incrementByAction(100)">Increment By 100 (Action)</button>
    <button class="btn btn-primary" @click="decrementByAction(100)">Decrement By 100 (Action)</button>
  </div>
  <br>
  <div>
    <button class="btn btn-warning" @click="asyncIncrementByAction({by: 50, duration: 5000})">Increment By 50 in 5000ms (Async Action)</button>
    <button class="btn btn-warning" @click="asyncDecrementByAction({by: 50, duration: 5000})">Decrement By 50 in 5000ms (Async Action)</button>
  </div>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  methods: {
    // increment() {
    //   this.$store.state.counter++
    // },
    // decrement() {
    //   this.$store.state.counter--
    // },
    incrementMutation() {
      this.$store.commit('incrementMutation')
    },
    decrementMutation() {
      this.$store.commit('decrementMutation')
    },
    // this does not work
    // payload parameter gets altered when not explicitly defined
    // ...mapMutations(['decrementMutation']),
    incrementAction() {
      this.$store.dispatch('incrementAction')
    },
    decrementAction() {
      this.$store.dispatch('decrementAction')
    },
    ...mapActions(['asyncIncrementAction', 'asyncDecrementAction']),
    incrementByAction(by) {
      this.$store.dispatch('incrementByAction', by)
    },
    decrementByAction(by) {
      this.$store.dispatch('decrementByAction', by)
    },
    asyncIncrementByAction(payload) {
      this.$store.dispatch('asyncIncrementByAction', payload)
    },
    asyncDecrementByAction(payload) {
      this.$store.dispatch('asyncDecrementByAction', payload)
    },
  }
}
</script>
