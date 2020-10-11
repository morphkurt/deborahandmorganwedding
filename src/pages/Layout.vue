<template lang="html">
  <div class="layout">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <!--h1 class="title is-1 has-text-centered">
            We are getting married!
          </h1-->
                  <p class="title has-text-centered">
          </p>
            <!--div class="tile is-parent">
        <div class="tile is-child box has-text-centered">
          <img src="/src/assets/images/dnm-3.jpg" alt="">
        </div>
      </div-->
  
        </div>
      </div>
    </section>
    <transition :name="animationName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationName: "fade",
    };
  },
};
</script>

<style lang="css">
.layout {
  height: 100%;
  background-image: url(../assets/images/dnm-12.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 55%;
  padding-top: 72px;
}
</style>
