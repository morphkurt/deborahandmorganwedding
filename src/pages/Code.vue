<template lang="html">
  <div class="">
    <h1 class="subtitle is-6 has-text-centered"><span v-if='this.$store.getters.get_language == "English"'>You are invited to our wedding.<br>Please click edit and check off who will be attending.</span><span v-else>Estás invitado a nuestra boda.<br>Por favor hacer clic en al botón marcado editar y marque quién asistirá.</span></h1>
    <form v-on:submit.prevent="submit" method="post">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>
              <p class="has-text-centered">
                <span v-if='this.$store.getters.get_language == "English"'>Guest</span><span v-else>El Invitado</span>
              </p>
            </th>
            <th>
              <p class="has-text-centered">
                <span v-if='this.$store.getters.get_language == "English"'>Attending?</span><span v-else>Asistiendo?</span>
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
                <span v-if="guest['attending?']">{{ yesInMultipleLanguages }}</span>
                <span v-else>No</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="invitation['plus_one?'] === true" class="has-text-centered">
        <div v-if="invitation['plus_one_added?'] === false">
          <p><span v-if='this.$store.getters.get_language == "English"'>You have been granted a plus one. Make sure to edit the invite to add your plus one's information.</span><span v-else>Le han concedido un más uno. Asegúrese de editar la invitación para agregar su información de más uno.</span></p>
        </div>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <button class="button is-success"><span v-if='this.$store.getters.get_language == "English"'>Submit</span><span v-else>Enviar</span></button>
        </div>
        <div class="control">
          <router-link :to="{ path: ':code/edit', params: { code: invitation.code }}" class="button is-danger"><span v-if='this.$store.getters.get_language == "English"'>Edit</span><span v-else>Editar</span></router-link>
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
      guests: this.$store.getters.get_guests,
      yesInMultipleLanguages: ''
    }
  },
  methods: {
    submit () {
      axios({
        method: 'post',
        url: `http://admin.maribelanddavidtietheknot.com/rsvp/${this.invitation.code}`,
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
  },
  mounted () {
    this.yesInMultipleLanguages = this.$store.getters.get_language == "English" ? "Yes":"Si";
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
