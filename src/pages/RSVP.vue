<template lang="html">
  <div class="">
    <div v-if="errors">
      {{ errors }}
    </div>
    <form action='' method="POST" v-on:submit.prevent="getData">
      <div class="field">
        <label class="label">RSVP <span v-if='this.$store.getters.get_language == "English"'>Code</span><span v-else>Código</span></label>
        <div class="control">
          <input v-if='this.$store.getters.get_language == "English"' class="input" type="text" placeholder="Enter your RSVP code" v-model="rsvpCode">
          <input v-else class="input" type="text" placeholder="Introduzca el Código RSVP" v-model="rsvpCode">
        </div>
        <p class="help"><span v-if='this.$store.getters.get_language == "English"'>This is the code found in your RSVP letter</span><span v-else>El Código Encontrado en la Letra de RSVP</span></p>
        <div class="control">
          <button class="button is-info"><span v-if='this.$store.getters.get_language == "English"'>Submit</span><span v-else>Enviar</span></button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      animationName: 'fade',
      rsvpCode: '',
      errors: ''
    }
  },
  methods: {
    getData () {
      // Enable this when we start sending code
      axios.get(`http://admin.maribelanddavidtietheknot.com/rsvp/${this.rsvpCode}`)
        .then((response) => {
          this.$store.dispatch('ADD_INVITATION', response.data.invitation);
          this.$store.dispatch('ADD_GUESTS', response.data.guests);
          this.$router.push({ path: `rsvp/${this.rsvpCode}` });
        })
        .catch((error) => {
          this.errors = "Sorry, couldn't find your invitation. Please input your RSVP code one more time."
        });
    }
  }
}
</script>

<style lang="css">
</style>
