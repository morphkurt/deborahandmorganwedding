<template lang="html">
  <div class="container story">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <img src="/src/assets/images/story-3.jpg" alt="">
          <h1 class="title has-text-centered"><span v-if='this.$store.getters.get_language == "English"'>Engaged</span><span v-else>Comprometidos</span></h1>
          <h3 class="subtitle has-text-centered"><span v-if='this.$store.getters.get_language == "English"'>September 2nd, 2017</span><span v-else>2 de Septiembre de 2017</span></h3>
        </div>
      </div>
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <img src="/src/assets/images/story-2.jpg" alt="">
          <p class="subtitle is-6"><span v-if='this.$store.getters.get_language == "English"'>Came here on our first date.</span><span v-else>Vinimos aquí en nuestra primera salida.</span></p>
        </div>
        <div class="tile is-child box">
          <img src="/src/assets/images/story-1.jpg" alt="">
          <p class="subtitle is-6"><span v-if='this.$store.getters.get_language == "English"'>First picture we ever took together.</span><span v-else>La primera foto que tomamos juntos.</span></p>
        </div>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/src/assets/images/story-9.jpg" alt="">
              <p class="subtitle"><span v-if='this.$store.getters.get_language == "English"'>Family Trip to Minnesota.</span><span v-else>Viaje familiar a Minnesota.</span></p>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child box">
              <img src="/src/assets/images/story-4.jpg" alt="">
              <p class="subtitle"><span v-if='this.$store.getters.get_language == "English"'>Beach Day</span><span v-else>Día de Playa</span></p>
            </article>
            <article class="tile is-child box">
              <img src="/src/assets/images/story-7.jpg" alt="">
              <p class="subtitle"><span v-if='this.$store.getters.get_language == "English"'>David being dumb.</span><span v-else>David siendo tonto.</span></p>
            </article>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="content">
            <img src="/src/assets/images/story-10.jpg" alt="">
            <p class="subtitle"><span>Cute</span></p>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <img src="/src/assets/images/story-8.jpg" alt="">
          <p class="subtitle"><span v-if='this.$store.getters.get_language == "English"'>Mike's Wedding</span><span v-else>La Boda de Mike</span></p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <img src="/src/assets/images/story-5.jpg" alt="">
          <p class="subtitle"><span v-if='this.$store.getters.get_language == "English"'>Drum</span><span v-else>Tambor</span></p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <img src="/src/assets/images/story-6.jpg" alt="">
          <p class="subtitle"><span v-if='this.$store.getters.get_language == "English"'>First Halloween Together</span><span v-else>Primero Halloween Juntos</span></p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
