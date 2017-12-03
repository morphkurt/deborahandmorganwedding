import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    invitation: {},
    guests: []
  },
  actions: {
    ADD_INVITATION: function ({commit}, invitation) {
      commit("ADD_INVITATION_MUTATION", invitation);
    },
    ADD_GUESTS: function ({commit}, guests) {
      commit("ADD_GUESTS_MUTATION", guests);
    },
    UPDATE_INVITATION: function ({commit}, invitation) {
      commit("UPDATE_INVITATION_MUTATION", invitation);
    },
    UPDATE_GUESTS: function ({commit}, guests) {
      commit("UPDATE_GUESTS_MUTATION", guests);
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
    }
  },
  getters: {
    get_invitation: state => {
      return state.invitation;
    },
    get_guests: state => {
      return state.guests;
    }
  }
});

export default store
