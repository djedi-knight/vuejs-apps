<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Routing</h1>
      <hr>
      <router-view name="header-top"></router-view>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
      <router-view name="header-bottom"></router-view>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
.slide-leave-active {
  opacity: 0;
  transition: opacity 1s ease;
  animation: slide-out 1s ease-out forwards;
}

.slide-leave {
  transform: translateX(0);
  opacity: 1;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
  }
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
