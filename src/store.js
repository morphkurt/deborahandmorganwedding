import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    invitation: {},
    guests: [],
    language: '',
    registeredAt: [
      // {name: "Bed Bath & Beyond", url: "", imageUrl: "src/assets/images/bed-bath-and-beyond.png"},
      {name: "Target", url: "https://www.target.com/gift-registry/giftgiver?registryId=227a22b2ca994320bb365ead78cf9c5f&lnk=registry_custom_url#1", imageUrl: "src/assets/images/target.png"},
      {name: "Ikea", url: "https://info.ikea-usa.com/giftregistry/en-us/registry/bffc7b41-d3a6-45ff-bbf8-4521a99363d4", imageUrl: "src/assets/images/ikea.png"}
    ]
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
    },
    UPDATE_LANGUAGE: function ({commit}, language) {
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
