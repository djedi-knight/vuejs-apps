<template>
<div>
  <span>{{ message }}</span>
  <p>{{ firstParam }}</p>
</div>
</template>

<script>
export default {
  props: ['firstParam'],
  data() {
    return {
      message: 'hello!'
    }
  },
  created() {
    this.message = 'bye!'
  }
}
</script>
