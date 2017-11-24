<template>
  <div>
    <h3>Some User Details</h3>
    <p>User ID: {{ userId }}</p>
    <router-link :to="{ name: 'userEdit' }" tag="button" class="btn btn-primary">
      Edit User
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['userId']
}
</script>
