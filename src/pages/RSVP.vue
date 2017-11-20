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
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <section class="section">
          <h1 class="title is-1 has-text-centered">RSVP</h1>
          <div v-if="errors">
            {{ errors }}
          </div>
          <form action='localhost:9292' method="POST" v-on:submit.prevent="getData">
            <div class="field">
              <label class="label">RSVP Code</label>
              <div class="control">
                <input class="input" type="text" placeholder="Enter your RSVP code" disabled>
              </div>
              <p class="help">This is the code found in your RSVP letter</p>
              <div class="control">
                <button class="button is-primary" disabled>Submit</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      errors: ""
    }
  },
  methods: {
    getData () {
      this.errors = "Sorry this isnt working yet...stop trying to hack bro."
      //Enable this when we start sending code
      // axios.post('http://localhost:9292/')
      //   .then((response) => {
      //     console.log(response);
      //     this.errors = response.data.error
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
