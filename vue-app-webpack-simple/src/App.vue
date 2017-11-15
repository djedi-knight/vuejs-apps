<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers></servers>
      <app-server-details></app-server-details>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';
import Servers from './components/server/Servers.vue';
import ServerDetails from './components/server/ServerDetails.vue';

export default {
  components: {
    'appHeader': Header,  // same as 'app-header': Header
    'app-footer': Footer,
    Servers,  // same as Servers: Servers
    'app-server-details': ServerDetails
  }
}
</script>

<style>
</style>
