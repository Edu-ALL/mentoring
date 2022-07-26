<template>
  <div id="mentorPage">
    <v-navbar :menus="menus" />
    <div class="container px-0 mt-4 mb-3">
      <transition name="fade">
        <v-dashboard v-if="!menus.menu" />
      </transition>
      <transition name="fade">
        <v-student v-if="menus.menu == 'student'" :menus="menus" />
      </transition>
      <transition name="fade">
        <v-activity v-if="menus.menu == 'activity'" :menus="menus" />
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/layout/mentor/navbar";

import Dashboard from "@/components/mentor/page/dashboard";
import Student from "@/components/mentor/page/student";
import Activity from "@/components/mentor/page/activity";

export default {
  name: "mentorPage",
  components: {
    "v-navbar": Navbar,
    "v-dashboard": Dashboard,
    "v-student": Student,
    "v-activity": Activity,
  },
  data() {
    return {
      menus: {
        menu: "",
        submenu: "",
        key: "",
        key2: "",
      },
      mentor: [],
    };
  },
  methods: {
    async checkToken() {
      const response = await this.$axios.get("auth/check");

      if (response.data.success == false) {
        localStorage.clear();
        window.location.href = "/";
        this.$alert.toast("error", "Your token is expired");
      }
      // console.log(response.data);
    },
  },
  watch: {
    $route(to) {
      this.menus.menu = to.params.menu;
      this.menus.submenu = to.params.submenu;
      this.menus.key = to.params.key;
      this.menus.key2 = to.params.key2;
    },
  },
  created() {
    if (localStorage.getItem("role") != "mentor") {
      window.location.href = "/";
    } else {
      this.mentor = JSON.parse(localStorage.getItem("mentor"));
    }

    this.checkToken();
    document.title = "Mentor Dashboard";
    this.menus.menu = this.$route.params.menu;
    this.menus.submenu = this.$route.params.submenu;
    this.menus.key = this.$route.params.key;
    this.menus.key2 = this.$route.params.key2;
  },
};
</script>

<style scoped>
#mentorPage {
  background: #f6f9ff;
  min-height: 100vh;
  padding-bottom: 30px;
}
</style>