<template>
  <div id="header" class="sticky-top" style="top: 0">
    <div class="v-navbar">
      <div class="container">
        <img
          src="@/assets/img/logo-white.webp"
          alt="ALL-in Mentoring"
          class="navbar-logo"
        />
        <vue-feather
          type="menu"
          class="navbar-icon d-md-none d-block float-end"
          @click="showMenu"
        ></vue-feather>

        <transition name="fade">
          <div class="navbar-overlay" v-if="menu" @click="menu = false">
            <vue-feather
              type="x"
              class="navbar-close d-md-none d-block"
              @click="menu = false"
            >
            </vue-feather>
          </div>
        </transition>

        <transition name="fade">
          <div class="navbar-title d-md-none d-block" v-if="menu">MENU</div>
        </transition>

        <div
          class="navbar-menu d-md-inline-block"
          :class="!menu ? 'd-none' : ''"
        >
          <ul>
            <li @click="goToMenu('')" :class="params == '' ? 'active' : ''">
              <i class="bi bi-speedometer2 me-1"></i>
              Dashboard
            </li>
            <li
              @click="goToMenu('my-activity')"
              :class="
                params == 'my-activity' ||
                params == 'groups' ||
                params == 'webinar' ||
                params == 'event'
                  ? 'active'
                  : ''
              "
            >
              <i class="bi bi-list-task me-1"></i>
              My Activities
            </li>
            <li
              @click="goToMenu('uni')"
              :class="params == 'uni' ? 'active' : ''"
            >
              <i class="bi bi-building me-1"></i>
              Universities
            </li>
          </ul>
        </div>
        <div class="navbar-button d-md-block" :class="!menu ? 'd-none' : ''">
          <button
            class="btn btn-allin btn-sm bg-secondary px-4"
            @click="handleLogout"
          >
            <i class="bi bi-box-arrow-right me-1"></i>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "header",
  data() {
    return {
      menu: false,
      params: "",
    };
  },
  methods: {
    showMenu() {
      this.menu = true;
    },

    goToMenu(page) {
      this.menu = false;
      this.$router.push({ path: "/user/" + page });
    },

    handleLogout() {
      localStorage.clear();
      this.$router.push({ path: "/" });
      this.$alert.toast("success", "You Successfully Logout");
    },
  },
  watch: {
    $route(to) {
      this.params = to.params.menu;
    },
  },
  created() {
    if (this.$route.params.menu) {
      this.params = this.$route.params.menu;
    }
  },
};
</script>
<style scoped>
.navbar-menu {
  margin-left: 150px;
}

@media only screen and (max-width: 800px) {
  .navbar-menu {
    margin-left: 0;
  }
}
</style>