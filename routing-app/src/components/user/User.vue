<template>
<div>
  <h1>The User Page</h1>
  <hr>
  <button class="btn btn-primary" @click="navigateToHome">Go Home</button>
</div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({path: '/'})
    }
  }
}
</script>
