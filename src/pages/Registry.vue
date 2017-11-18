<template lang="html">
  <div class="container">
    <section class="section">
      <h1 class="title has-text-centered">
        Registry
      </h1>
      <p class="subtitle has-text-centered">
        We are registered at:
      </p>
      <ul v-if="placesWeAreRegistered.length > 0">
        <li v-for="place in placesWeAreRegistered">
          {{ place }}
        </li>
      </ul>
      <p class="has-text-centered" v-else>
        Sorry, we haven't registered anywhere yet.
        <br>Please check back soon.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      placesWeAreRegistered: []
    }
  },
}
</script>

<style lang="css">
</style>
