<template lang="html">
  <div class="">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">
            Maribel &amp; David
          </h1>
          <p class="subtitle has-text-centered">
            Are Getting Married
          </p>
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
