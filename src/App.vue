<template>
  <div id="app">
    <navbar></navbar>
    <transition :name="animationName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'app',
  data () {
    return {
      animationName: 'fade'
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="css">
  * {
   font-family: 'Lato', sans-serif;
  }

  body {
    height: 100vh;
  }

  .container {
    padding-top: 62px;
  }

  .title {
    font-weight: 100;
    line-height: 1em;
    text-transform: none;
    text-decoration: none;
    font-style: normal;
    letter-spacing: 0px;
  }

  .subtitle {
    font-weight: 300;
    line-height: 1.4em;
    text-transform: uppercase;
    text-decoration: none;
    font-style: normal;
    color: rgba(28,28,28,.9);
  }

  .navbar-item {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.25em;
    text-transform: uppercase;
    text-decoration: none;
    font-style: normal;
    letter-spacing: 3px;
  }

  @media screen and (min-width: 769px) {
    .title {
      font-weight: 100;
      line-height: 1em;
      text-transform: none;
      text-decoration: none;
      font-style: normal;
      letter-spacing: 0px;
    }

    .subtitle {
      font-weight: 300;
      line-height: 1.4em;
      text-transform: uppercase;
      text-decoration: none;
      font-style: normal;
      color: rgba(28,28,28,.9);
    }

    .navbar-item {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.25em;
      text-transform: uppercase;
      text-decoration: none;
      font-style: normal;
      letter-spacing: 3px;
    }
  }

  @media screen and (min-width: 1024px) {
    .container {
      padding-top: 102px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .fade-enter-active {
    -webkit-animation-name: fadeIn;
            animation-name: fadeIn;
    -webkit-animation-duration: 0.3s;
            animation-duration: 0.3s;
  }

  .fade-leave-active {
    -webkit-animation-name: fadeOut;
            animation-name: fadeOut;
    -webkit-animation-duration: 0.3s;
            animation-duration: 0.3s;
  }
</style>
