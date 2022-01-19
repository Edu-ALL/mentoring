<template>
  <div id="loader">
    <div class="load-overlay"></div>
    <div class="loading">
      <img
        src="@/assets/img/logo-white.webp"
        alt="ALL-in Mentoring"
        class="loading-logo"
      />
      <vue-feather
        type="loader"
        animation="spin"
        stroke="#F0AB54"
        class="loader"
      ></vue-feather>
    </div>
  </div>
</template>
<script>
export default {
  name: "loader",
};
</script>
<style scoped>
.load-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #223772c9;
  z-index: 1000;
}

.loader {
  width: 3em;
}

.loading {
  position: absolute;
  top: 40%;
  left: 48%;
  z-index: 1001;
}

.loading-logo {
  width: 15em;
  display: block;
  margin-left: -95px;
  margin-bottom: 20px;
}

@media only screen and (max-width: 600px) {
  .loading {
    left: 43%;
  }
}
</style>