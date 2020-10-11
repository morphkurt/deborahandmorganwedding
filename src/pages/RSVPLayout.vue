<template lang="html">
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <section class="section" style="background-color:#2929294d">
        <h1 class="title is-4 has-text-light has-text-weight-bold has-text-centered">RSVP</h1>
        <p class="sub-title is-4 has-text-light	 has-text-weight-bold has-text-centered">RSVP for the wedding will be available through this site once
          we send you our wedding invitation
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
