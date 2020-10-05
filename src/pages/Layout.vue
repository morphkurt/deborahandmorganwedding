<template lang="html">
  <div class="">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">
            Deborah&amp; Morgan
          </h1>
                  <p class="title has-text-centered">
            <span>We are getting married!</span>
          </p>
            <div class="tile is-parent">
        <div class="tile is-child box has-text-centered">
          <img src="/src/assets/images/dnm-3.jpg" alt="">
        </div>
      </div>
  
        </div>
      </div>
    </section>
    <transition :name="animationName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      animationName: 'fade'
    }
  },
}
</script>

<style lang="css">
</style>
