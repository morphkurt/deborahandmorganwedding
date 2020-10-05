<template>
  <div id="app">
    <!--div v-bind:class="{'is-active': isActive, 'fadeOut': fadeOut}" class="modal language-modal animated">
      <div class="modal-background language-modal-background"></div>
      <div class="modal-content">
        <h1 class="title has-text-centered">Choose Your Language/Elija Su Idioma</h1>
        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <a v-on:click="selectLanguage('English')" class="button is-primary is-medium">
              English
            </a>
          </p>
          <p class="control">
            <a v-on:click="selectLanguage('Spanish')" class="button is-light is-medium">
              Español
            </a>
          </p>
        </div>
      </div>
    </div-->
    <navbar></navbar>
    <transition :name="animationName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'app',
  data () {
    return {
      animationName: 'fade',
      language: this.$store.getters.get_language,
      isActive: true,
      fadeOut: false
    }
  },
  components: {
    Navbar
  },
  methods: {
    selectLanguage: function (language) {
      let self = this;
      let languageModal= document.getElementsByClassName('language-modal')[0];
      self.$store.dispatch('UPDATE_LANGUAGE', language);
      this.language = this.$store.getters.get_language;
      self.fadeOut = true;
      languageModal.addEventListener("animationend", function(){
        self.isActive = false;
      }, false);
    }
  },
  mounted: function () {
    self.$store.dispatch('UPDATE_LANGUAGE', "English");
    this.language === "" ? this.isActive = true: this.isActive = false;
  }
}
</script>

<style lang="css">
  * {
    font-family: 'Lato', sans-serif;
  }

  html, body, #app{
    height: 100%;
    background-color: #efefef;
  }

  .section {
    background-color: white;
  }

  .hero {
    margin-top: 52px;
  }

  .title {
    font-weight: 100;
    line-height: 1em;
    text-transform: none;
    text-decoration: none;
    font-style: normal;
    letter-spacing: 0px;
  }

  .subtitle {
    font-weight: 300;
    line-height: 1.4em;
    text-transform: uppercase;
    text-decoration: none;
    font-style: normal;
    color: rgba(28,28,28,.9);
  }

  .navbar-item {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.25em;
    text-transform: uppercase;
    text-decoration: none;
    font-style: normal;
    letter-spacing: 3px;
  }

  .language-modal {
    z-index: 40;
  }

  .language-modal-background {
    background-color: white;
  }

  .story {
    padding-top: 102px;
  }

  @media screen and (min-width: 769px) {
    .title {
      font-weight: 100;
      line-height: 1em;
      text-transform: none;
      text-decoration: none;
      font-style: normal;
      letter-spacing: 0px;
    }

    .subtitle {
      font-weight: 300;
      line-height: 1.4em;
      text-transform: uppercase;
      text-decoration: none;
      font-style: normal;
      color: rgba(28,28,28,.9);
    }

    .navbar-item {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.25em;
      text-transform: uppercase;
      text-decoration: none;
      font-style: normal;
      letter-spacing: 3px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .fade-enter-active {
    -webkit-animation-name: fadeIn;
            animation-name: fadeIn;
    -webkit-animation-duration: 0.3s;
            animation-duration: 0.3s;
  }

  .fade-leave-active {
    -webkit-animation-name: fadeOut;
            animation-name: fadeOut;
    -webkit-animation-duration: 0.3s;
            animation-duration: 0.3s;
  }
</style>
