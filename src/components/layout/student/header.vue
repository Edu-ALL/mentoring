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
        <div
          :class="
            menu
              ? 'navbar-overlay transform d-md-none d-block'
              : 'navbar-overlay transform-active d-md-none d-block'
          "
          v-if="menu"
          @click="menu = false"
        ></div>

        <div class="navbar-title d-md-none d-block" v-if="menu">MENU</div>
        <vue-feather
          type="x"
          class="navbar-close d-md-none d-block"
          v-if="menu"
          @click="menu = false"
        >
        </vue-feather>
        <div
          class="navbar-menu d-md-inline-block"
          :class="!menu ? 'd-none' : ''"
        >
          <ul>
            <li @click="this.$router.push({ path: '/user/my-profile' })">
              My Profile
            </li>
            <li @click="this.$router.push({ path: '/user/my-activity' })">
              My Activity
            </li>
            <li @click="this.$router.push({ path: '/user/my-files' })">
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
    };
  },
  methods: {
    showMenu() {
      this.menu = true;
    },
  },
};
</script>