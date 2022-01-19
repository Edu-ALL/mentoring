<template>
  <div id="header">
    <nav class="bg-primary shadow">
      <div class="container">
        <div class="row py-md-3 py-1">
          <div class="col-md-12">
            <div class="text-start float-start">
              <img
                src="@/assets/img/logo-white.webp"
                alt="Mentoring - ALL-in Eduspace"
                class="header-logo"
              />
            </div>
            <div class="text-end float-end">
              <button
                class="btn-allin bg-secondary"
                @click="showModal('login')"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "header",
  components: {},
  data() {
    return {};
  },
  methods: {
    showModal(name) {
      this.$emit("modal", name);
    },
  },
  created() {
    document.title = "Mentoring Platform";
  },
};
</script>
<style scoped>
nav {
  position: fixed;
  z-index: 1000;
  width: 100%;
}

.header-logo {
  width: 180px;
}

.btn-allin {
  margin: 5px 0;
  color: rgb(59, 59, 59);
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.btn-allin:hover {
  background: #fff !important;
}

@media only screen and (max-width: 600px) {
  .header-logo {
    width: 140px;
  }

  .btn-allin {
    font-size: 10px;
  }
}
</style>