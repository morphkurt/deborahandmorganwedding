<template lang="html">
  <!--div class="">
    <div v-if="errors">
      {{ errors }}
    </div>
    <form action='' method="POST" v-on:submit.prevent="getData">
      <div class="field">
        <label class="label">
          <span>
            RSVP Code
          </span>
         
        </label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Enter your RSVP code"
            v-model="rsvpCode">
         
        </div>
        <p class="help">
          <span >
            This is the code found in your RSVP letter
          </span>
  
        </p>
        <div class="control">
          <button class="button is-info">
            <span>
              Submit
            </span>
         
          </button>
        </div>
      </div>
    </form>
  </div-->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      animationName: "fade",
      rsvpCode: "",
      errors: "",
    };
  },
  methods: {
    getData() {
      axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
      // Use this url for local development
      // axios.get(`http://localhost:9292/rsvp/${this.rsvpCode}`)
      axios
        .get(`http://admin.maribelanddavidtietheknot.com/rsvp/${this.rsvpCode}`)
        .then((response) => {
          this.$store.dispatch("ADD_INVITATION", response.data.invitation);
          this.$store.dispatch("ADD_GUESTS", response.data.guests);
          this.$router.push({ path: `rsvp/${this.rsvpCode}` });
        })
        .catch((error) => {
          this.errors =
            "Sorry, couldn't find your invitation. Please input your RSVP code one more time.";
        });
    },
  },
};
</script>

<style lang="css">
</style>
