<template lang="html">
  <div class="">
    <h1 class="subtitle is-6 has-text-centered"><span v-if='this.$store.getters.get_language == "English"'>You are invited to our wedding. Please check off who will be attending.</span><span v-else>Estás invitado a nuestra boda. Por favor marque quién asistirá.</span></h1>
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
              <input v-model="guest['attending?']" type="checkbox">
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="invitation['plus_one?'] === true">
      <div v-if="invitation['plus_one_added?'] === false">
        <div class="field">
          <div class="control has-text-centered">
            <button v-on:click="openModal" class="button is-text"><span v-if='this.$store.getters.get_language == "English"'>Add Plus One</span><span v-else>Agregar Más Uno</span></button>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button v-on:click="save" class="button is-success"><span v-if='this.$store.getters.get_language == "English"'>Save</span><span v-else>Guardar</span></button>
      </div>
      <div class="control">
        <router-link :to="{ path: '/rsvp/:code', params: { code: invitation.code }}" class="button is-danger"><span v-if='this.$store.getters.get_language == "English"'>Cancel</span><span v-else>Cancelar</span></router-link>
      </div>
    </div>
    <div :class="{'is-active': isActive}" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title"><span v-if='this.$store.getters.get_language == "English"'>Add a Plus One</span><span v-else>Agregar un Más Uno</span></p>
          <button v-on:click="closeModal" class="delete" aria-label="close"></button>
        </header>
        <form v-on:submit.prevent="addPlusOne" action="/guests" method="post">
          <section class="modal-card-body">
            <div class="field">
              <label class="label"><span v-if='this.$store.getters.get_language == "English"'>First Name</span><span v-else>Nombre de Pila</span></label>
              <div class="control">
                <input v-if='this.$store.getters.get_language == "English"' v-model="plusOneFirstName" class="input" type="text" placeholder="First Name" autofocus required>
                <input v-else v-model="plusOneFirstName" class="input" type="text" placeholder="Nombre de Pila" autofocus required>
              </div>
            </div>
            <div class="field">
              <label class="label"><span v-if='this.$store.getters.get_language == "English"'>Last Name</span><span v-else>Apellido</span></label>
              <div class="control">
                <input v-if='this.$store.getters.get_language == "English"' v-model="plusOneLastName" class="input" type="text" placeholder="Last Name" required>
                <input v-else v-model="plusOneLastName" class="input" type="text" placeholder="Apellido" required>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success"><span v-if='this.$store.getters.get_language == "English"'>Save</span><span v-else>Guardar</span></button>
            <button v-on:click="closeModal" class="button cancel"><span v-if='this.$store.getters.get_language == "English"'>Cancel</span><span v-else>Cancelar</span></button>
          </footer>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      invitation: this.$store.getters.get_invitation,
      guests: this.$store.getters.get_guests,
      isActive: false,
      plusOneFirstName: '',
      plusOneLastName: ''
    }
  },
  methods: {
    save () {
      this.$store.dispatch('UPDATE_INVITATION', this.invitation);
      this.$store.dispatch('UPDATE_GUESTS', this.guests);
      this.$router.push({ path: `/rsvp/${this.invitation.code}` });
    },
    addPlusOne () {
      this.guests.push({invitation_id: this.invitation.id, first_name: this.plusOneFirstName, last_name: this.plusOneLastName, 'attending?': false, family_side: this.invitation.family_side, 'is_plus_one?': true});
      this.invitation['plus_one_added?'] = true;
      this.isActive = false;
    },
    openModal () {
      this.isActive = true;
    },
    closeModal () {
      this.isActive = false;
    }
  }
}
</script>

<style lang="css" scoped>
  .button {
    margin-top: 15px;
  }
</style>
