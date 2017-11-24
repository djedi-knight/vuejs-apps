<template>
<div>
  <h1>The User Page</h1>
  <hr>
  <p>Loaded ID: {{ userId }}</p>
  <button class="btn btn-primary" @click="navigateToHome">Go Home</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id
    }
  },
  watch: {
    '$route'(to, from) {
      this.userId = to.params.id
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push('/')
    }
  }
}
</script>
