<template lang="html">
  <div class="">
    <h1 class="subtitle is-6 has-text-centered">You are invited to our wedding. Please check off who will be attending.</h1>
    <form v-on:submit.prevent="submit" method="post">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>
              <p class="has-text-centered">
                Guest
              </p>
            </th>
            <th>
              <p class="has-text-centered">
                Attending?
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="guest in guests">
            <td :class="{attending: guest['attending?']}" class="not-attending">
              <p class="has-text-centered">
                {{ guest.first_name }} {{ guest.last_name }}
              </p>
            </td>
            <td>
              <p class="has-text-centered">
                <span v-if="guest['attending?']">Yes</span>
                <span v-else>No</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="invitation['plus_one?'] === true" class="has-text-centered">
        <div v-if="invitation['plus_one_added?'] === false">
          <p>You have been granted a plus one. Make surte to edit the invite to add your plus one's information.</p>
        </div>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <button class="button is-success">Submit</button>
        </div>
        <div class="control">
          <router-link :to="{ path: ':code/edit', params: { code: invitation.code }}" class="button is-danger">Edit</router-link>
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
      invitation: this.$store.getters.get_invitation,
      guests: this.$store.getters.get_guests
    }
  },
  methods: {
    submit () {
      axios({
        method: 'post',
        url: `http://localhost:9292/rsvp/${this.invitation.code}`,
        data: {invitation: this.invitation, guests: this.guests}
      })
      .then((response) => {
        this.$store.dispatch('UPDATE_INVITATION', response.data.invitation);
        this.$store.dispatch('UPDATE_GUESTS', response.data.guests);
        this.$router.push({ path: '/thanks' });
      })
      .catch((error) => {
        this.errors = "Sorry, couldn't find your invitation. Please input your RSVP code one more time."
      });
    }
  }
}
</script>

<style lang="css" scoped>
  .button {
    margin-top: 15px;
  }

  .not-attending {
    text-decoration: line-through;
    text-decoration-color: red;
  }

  .attending {
    color: inherit;
    text-decoration: none;
  }
</style>
