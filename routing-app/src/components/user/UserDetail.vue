<template>
  <div>
    <h3>Some User Details</h3>
    <p>User ID: {{ userId }}</p>
  </div>
</template>

<script>
export default {
  props: ['userId']
}
</script>
