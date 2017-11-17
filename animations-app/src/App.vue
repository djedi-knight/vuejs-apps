<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <p>Animation Style</p>
        <select v-model="alertAnimation">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Toggle Alerts</button>
        <hr>
        <transition name="fade" appear>
          <div class="alert alert-info" v-if="show">
            This is an appearance transition
          </div>
        </transition>
        <br>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">
            This is a dynamic animation type
          </div>
        </transition>
        <br>
        <transition name="fade">
          <div class="alert alert-info" v-if="show">
            This is a css transition
          </div>
        </transition>
        <br>
        <transition name="slide">
          <div class="alert alert-info" v-if="show">
            This is a css animation
          </div>
        </transition>
        <br>
        <transition enter-active-class="animated bounce" leave-active-class="animated shake">
          <div class="alert alert-info" v-if="show">
            This is a Animate.css animation
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        alertAnimation: 'fade'
      }
    }
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    /*opacity: 1;*/
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    /*transform: translateY(20px);*/
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;

  }

  .slide-leave {
    /*transform: translateY(0px);*/
    /*opacity: 1;*/
  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity .5s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
