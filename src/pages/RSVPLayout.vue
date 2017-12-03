<template lang="html">
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <section class="section">
        <h1 class="title is-2 has-text-centered">RSVP</h1>
        <transition :name="animationName" mode="out-in">
          <router-view></router-view>
        </transition>
      </section>
    </div>
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

<style lang="css" scoped>
</style>
