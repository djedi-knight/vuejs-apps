<template>
<div>
  <h3>Some User Details</h3>
  <p>User ID: {{ userId }}</p>
  <router-link :to="editLink" tag="button" class="btn btn-primary">
    Edit User
  </router-link>
  <router-link :to="editAnchorLink" tag="button" class="btn btn-warning">
    Edit User (Jump to Extra Data Section)
  </router-link>
  <hr>
</div>
</template>

<script>
export default {
  props: ['userId'],
  data() {
    return {
      editLink: {
        name: 'userEdit',
        query: {
          locale: 'en',
          q: 100
        }
      },
      editAnchorLink: {
        name: 'userEdit',
        hash: '#data'
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('component UserDetail.beforeEach() called')
    next()
  }
}
</script>
