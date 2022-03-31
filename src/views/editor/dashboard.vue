<template>
  <div id="editorDashboard">
    <v-navbar :menus="menus" />
    <div class="container px-0 mt-4 mb-3">
      <transition name="fade">
        <v-home v-if="menus.menu == ''" />
      </transition>
      <transition name="fade">
        <v-activity v-if="menus.menu == 'activity'" :menus="menus" />
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/layout/editor/navbar";

import Home from "@/views/editor/page/home";
import Activity from "@/views/editor/page/activity";

export default {
  name: "alumniDashboard",
  components: {
    "v-navbar": Navbar,
    "v-home": Home,
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
    document.title = "Editor Dashboard";
    this.menus.menu = this.$route.params.menu;
    this.menus.submenu = this.$route.params.submenu;
    this.menus.id = this.$route.params.key;
  },
};
</script>

<style scoped>
#editorDashboard {
  background: #f6f9ff;
  min-height: 100vh;
}
</style>