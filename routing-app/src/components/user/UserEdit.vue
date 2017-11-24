<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some Extra Data</p>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.confirmed) {
      if (confirm('Are you sure>')) {
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
  }
}
</script>
