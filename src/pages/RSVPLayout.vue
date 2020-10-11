<template lang="html">
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <section class="section" style="background-color:transparent">
        <h1 class="title is-2  has-text-weight-bold has-text-centered">RSVP</h1>
        <p class="title is-4 has-text-weight-bold has-text-centered">RSVP for the wedding will be available through this site once
          you receive our official invite.
        </p>

        <transition :name="animationName" mode="out-in">
          <router-view></router-view>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationName: "fade",
    };
  },
};
</script>

<style lang="css" scoped>
</style>
