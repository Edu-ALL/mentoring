<template>
  <div id="header">
    <nav class="bg-primary shadow">
      <div class="container">
        <div class="row py-md-3 py-1">
          <div
            class="col-md-12 d-flex align-items-center justify-content-between"
          >
            <div class="text-start">
              <img
                src="@/assets/img/logo-white.webp"
                alt="Mentoring - ALL-in Eduspace"
                class="header-logo"
              />
            </div>
            <div class="text-end">
              <small> Sign in as </small> <br />
              <button
                class="btn btn-sm bg-light fw-semi-bold me-1"
                @click="login('mentee')"
              >
                <i class="bi bi-person-badge me-1"></i> Mentee
              </button>
              <button
                class="btn btn-sm bg-secondary fw-semi-bold"
                @click="login('mentor')"
              >
                <i class="bi bi-person me-1"></i> Mentor
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
    login(role) {
      this.$emit("role", role);
      this.$emit("modal", "login");
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