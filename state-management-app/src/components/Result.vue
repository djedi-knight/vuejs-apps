<template>
<div>
  <p>Counter is: {{ counter }}</p>
  <p>Double counter is: {{ doubleCounter }}</p>
</div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter
    },
    doubleCounter() {
      return this.$store.getters.doubleCounter
    }
  }
}
</script>
