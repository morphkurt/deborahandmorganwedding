<template lang="html">
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <section class="section">
        <h1 class="title is-2 is-spaced has-text-centered"><span v-if='this.$store.getters.get_language == "English"'>Thank You</span><span v-else>Gracias</span></h1>
        <p class="subtitle is-6 has-text-centered"><span v-if='this.$store.getters.get_language == "English"'>You have submitted your RSVP</span><span v-else>Usted ha enviado su RSVP</span></p>
        <p class="has-text-centered"><span v-if='this.$store.getters.get_language == "English"'>Can't wait to see you at the wedding.</span><span v-else>Espero ver te en la boda</span></p>
        <div class="buttons is-centered">
          <router-link to="/" class="button is-primary"><span v-if='this.$store.getters.get_language == "English"'>Home</span><span v-else>Inicio</span></router-link>
          <a class="button is-info"><span v-if='this.$store.getters.get_language == "English"'>Our Story</span><span v-else>Nuestra Historia</span></a>
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
