<template lang="html">
  <div class="home">
    <div class="container">
      <h1 class="title has-text-centered">
        Deborah <span >&amp;</span> Morgan
      </h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.home {
  height: 100%;
  background-image: url(../assets/images/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 55%;
  padding-top: 72px;
}

.title {
  font-size: 40px;
}

.subtitle {
  font-size: 16px;
}

@media screen and (min-width: 769px) {
  .title {
    font-size: 100px;
  }

  .subtitle {
    font-size: 20px;
  }
}
</style>
