import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    invitation: {},
    guests: [],
    language: '',
  },
  actions: {
    ADD_INVITATION: function ({ commit }, invitation) {
      commit("ADD_INVITATION_MUTATION", invitation);
    },
    ADD_GUESTS: function ({ commit }, guests) {
      commit("ADD_GUESTS_MUTATION", guests);
    },
    UPDATE_INVITATION: function ({ commit }, invitation) {
      commit("UPDATE_INVITATION_MUTATION", invitation);
    },
    UPDATE_GUESTS: function ({ commit }, guests) {
      commit("UPDATE_GUESTS_MUTATION", guests);
    },
    UPDATE_LANGUAGE: function ({ commit }, language) {
      commit("UPDATE_LANGUAGE_MUTATION", language);
    }
  },
  mutations: {
    ADD_INVITATION_MUTATION: function (state, invitation) {
      state.invitation = invitation
    },
    ADD_GUESTS_MUTATION: function (state, guests) {
      state.guests = guests
    },
    UPDATE_INVITATION_MUTATION: function (state, invitation) {
      state.invitation = invitation
    },
    UPDATE_GUESTS_MUTATION: function (state, guests) {
      state.guests = guests
    },
    UPDATE_LANGUAGE_MUTATION: function (state, language) {
      state.language = language
    }
  },
  getters: {
    get_invitation: state => {
      return state.invitation;
    },
    get_guests: state => {
      return state.guests;
    },
    get_language: state => {
      return state.language;
    },
    get_places_we_are_registered: state => {
      return state.registeredAt;
    }
  }
});

export default store
