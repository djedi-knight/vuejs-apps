<template>
<div>
  <p>{{ stringCounter }}</p>
  <!-- <p>Counter is: {{ counter }}</p> -->
  <p>Double counter is: {{ doubleCounter }}</p>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // counter() {
    //   return this.$store.state.counter
    // },
    doubleCounter() {
      return this.$store.getters.doubleCounter
    },
    ...mapGetters(['stringCounter'])
  }
}
</script>
