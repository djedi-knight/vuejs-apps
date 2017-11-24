<template>
  <div>
    <h3>Some User Details</h3>
    <p>User ID: {{ userId }}</p>
    <router-link :to="{ name: 'userEdit', query: { locale: 'en', q: 100 }}" tag="button" class="btn btn-primary">
      Edit User
    </router-link>
    <hr>
  </div>
</template>

<script>
export default {
  props: ['userId']
}
</script>
