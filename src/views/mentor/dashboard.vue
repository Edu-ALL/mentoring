<template>
  <div id="mentorDashboard">
    <v-navbar :menus="menus" />
    <div class="container px-0 mt-4 mb-3">
      <transition name="fade">
        <v-home v-if="menus.menu == ''" />
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

import Home from "@/views/mentor/page/home";
import Student from "@/views/mentor/page/student";
import Activity from "@/views/mentor/page/activity";

export default {
  name: "mentorDashboard",
  components: {
    "v-navbar": Navbar,
    "v-home": Home,
    "v-student": Student,
    "v-activity": Activity,
  },
  data() {
    return {
      menus: {
        menu: "",
        submenu: "",
        id: "",
      },
    };
  },
  updated() {
    this.menus.menu = this.$route.params.menu;
    this.menus.submenu = this.$route.params.submenu;
    this.menus.id = this.$route.params.key;
  },
  created() {
    document.title = "Mentor Dashboard";
    this.menus.menu = this.$route.params.menu;
    this.menus.submenu = this.$route.params.submenu;
    this.menus.id = this.$route.params.key;
  },
};
</script>

<style scoped>
#mentorDashboard {
  background: #f6f9ff;
  min-height: 100vh;
}
</style>