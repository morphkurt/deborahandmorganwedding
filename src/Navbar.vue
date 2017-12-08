<template lang="html">
  <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item is-hidden-desktop">Maribel &amp; David</router-link>
      <button class="button navbar-burger is-white" v-bind:class="{'is-active': isActive}" v-on:click="navBarActive">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active': isActive}" v-on:click="navBarActive">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/story" class="navbar-item">Our Story</router-link>
      <router-link to="/wedding" class="navbar-item">Wedding</router-link>
      <router-link to="/registry" class="navbar-item">Registry</router-link>
      <router-link to="/rsvp" class="navbar-item">RSVP</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
    }
  },
  methods: {
    navBarActive (event) {
      this.isActive = this.isActive ? false:true;
    }
  },
}
</script>

<style lang="css">
  @media screen and (min-width: 1024px) {
    .navbar-menu {
      padding: 0 25%;
    }

    .navbar-item {
      margin: 0 auto;
    }
  }
</style>
