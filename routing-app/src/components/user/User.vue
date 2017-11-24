<template>
<div>
  <h1>The User Page</h1>
  <hr>
  <button class="btn btn-primary" @click="navigateToHome">Go Home</button>
  <hr>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  // props: ['userId'],
  // data() {
  //   return {
  //     userId: this.$route.params.userId
  //   }
  // },
  // watch: {
  //   '$route'(to, from) {
  //     this.userId = to.params.userId
  //   }
  // },
  methods: {
    navigateToHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
