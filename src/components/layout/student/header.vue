<template>
  <div id="header">
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
          <div class="navbar-overlay" v-if="menu" @click="menu = false"></div>
        </transition>

        <transition name="fade">
          <div class="navbar-title d-md-none d-block" v-if="menu">MENU</div>
        </transition>

        <transition name="fade">
          <vue-feather
            type="x"
            class="navbar-close d-md-none d-block"
            v-if="menu"
            @click="menu = false"
          >
          </vue-feather>
        </transition>

        <div
          class="navbar-menu d-md-inline-block"
          :class="!menu ? 'd-none' : ''"
        >
          <ul>
            <li
              @click="this.$router.push({ path: '/user' })"
              :class="params == '' ? 'active' : ''"
            >
              Dashboard
            </li>
            <li
              @click="this.$router.push({ path: '/user/my-activity' })"
              :class="params == 'my-activity' ? 'active' : ''"
            >
              My Activity
            </li>
            <li
              @click="this.$router.push({ path: '/user/my-files' })"
              :class="params == 'my-files' ? 'active' : ''"
            >
              My Files
            </li>
          </ul>
        </div>
        <div class="navbar-button d-md-block" :class="!menu ? 'd-none' : ''">
          <button
            class="btn btn-allin bg-secondary px-4"
            @click="this.$router.push({ path: '/' })"
          >
            <strong> Sign Out </strong>
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
  },
  watch: {
    $route(to) {
      this.params = to.params.page;
    },
  },
  created() {
    if (this.$route.params.page) {
      this.params = this.$route.params.page;
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