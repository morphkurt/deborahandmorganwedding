<template lang="html">
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <section class="section">
        <h1 class="title is-2 is-spaced has-text-centered">
          <span v-if='this.$store.getters.get_language == "English"'>Registry</span><span v-else>Registro de Boda</span>
        </h1>
        <p class="subtitle is-6 has-text-centered">
          <span v-if='this.$store.getters.get_language == "English"'>We are registered at:</span><span v-else>Estamos registrados en:</span>
        </p>
        <ul v-if="placesWeAreRegistered.length > 0">
          <li v-for="place in placesWeAreRegistered" class="has-text-centered">
            <a :href="place.url" target="_blank"><img :src="place.imageUrl" :alt="place.name"></a>
          </li>
        </ul>
        <p class="has-text-centered" v-else>
          Sorry, we haven't registered anywhere yet.
          <br>Please check back soon.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      placesWeAreRegistered: this.$store.getters.get_places_we_are_registered
    }
  }
}
</script>

<style lang="css" scoped>
  img {
    margin-bottom: 50px;
    max-width: 60%;
  }
</style>
