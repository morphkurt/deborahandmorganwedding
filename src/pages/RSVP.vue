<template lang="html">
  <div class="">
    <div v-if="errors">
      {{ errors }}
    </div>
    <form action='localhost:9292' method="POST" v-on:submit.prevent="getData">
      <div class="field">
        <label class="label">RSVP Code</label>
        <div class="control">
          <input class="input" type="text" placeholder="Enter your RSVP code" v-model="rsvpCode">
        </div>
        <p class="help">This is the code found in your RSVP letter</p>
        <div class="control">
          <button class="button is-primary">Submit</button>
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
      axios.get(`http://localhost:9292/rsvp/${this.rsvpCode}`)
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
