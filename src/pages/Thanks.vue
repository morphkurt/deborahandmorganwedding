<template lang="html">
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <section class="section">
        <h1 class="title is-2 is-spaced has-text-centered">Thank You</h1>
        <p class="subtitle is-6 has-text-centered">You have submitted your RSVP</p>
        <p class="has-text-centered">Can't wait to see you at the wedding.</p>
        <div class="buttons is-centered">
          <router-link to="/" class="button is-primary">Home</router-link>
          <a class="button is-info">Our Story</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .button {
    margin-top: 15px;
  }
</style>
